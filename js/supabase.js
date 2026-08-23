/* ================================================================
   ORBIVA – SUPABASE SYNC
   Shared key-value store so admin changes reach all visitors.
================================================================ */
const SB_URL = 'https://gvvzcudpcotoicnrhapz.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2dnpjdWRwY290b2ljbnJoYXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxODQ0MjgsImV4cCI6MjEwMjc2MDQyOH0.BCh__U3fedTDvh0S8UAiPs7o1SnsqqKwuf_56bywWUw';

/* Pull all rows from kv_store into localStorage, then resolve. */
async function sbSync() {
  try {
    const res = await fetch(`${SB_URL}/rest/v1/kv_store?select=*`, {
      headers: {
        'apikey': SB_KEY,
        'Authorization': `Bearer ${SB_KEY}`
      }
    });
    if (!res.ok) return;
    const rows = await res.json();
    rows.forEach(r => localStorage.setItem(r.key, r.value));
    applyBranding();
    applyDeliveryText();
  } catch(e) {}
}

function applyBranding() {
  try {
    const b = JSON.parse(localStorage.getItem('obv_branding') || '{}');
    if (!b.logoUrl && !b.logoSize) return;
    const url = b.logoUrl || 'img/logo.jpeg';
    const size = (b.logoSize || 54) + 'px';
    document.querySelectorAll('.logo-img, .admin-logo-img').forEach(img => {
      img.src = url;
      img.style.height = size;
      img.style.maxWidth = 'none';
    });
  } catch(e) {}
}

/* Strip base64 image data from a product edits object before pushing to Supabase.
   Only URL-based images (http/https/drive) are kept — base64 blobs stay local only. */
function _cleanEditsForPush(raw) {
  try {
    const edits = JSON.parse(raw);
    let stripped = false;
    Object.values(edits).forEach(edit => {
      if (edit.images) {
        const clean = edit.images.filter(img => !String(img).startsWith('data:'));
        if (clean.length !== edit.images.length) { edit.images = clean; stripped = true; }
      }
    });
    return { value: JSON.stringify(edits), stripped };
  } catch(e) { return { value: raw, stripped: false }; }
}

/* Write current localStorage value for key to Supabase (fire-and-forget).
   For obv_prod_edits: base64 images are stripped so the payload stays small. */
function sbPush(key) {
  let value = localStorage.getItem(key);
  if (value === null) return;
  let stripped = false;
  if (key === 'obv_prod_edits' || key === 'obv_prod_adds') {
    const r = _cleanEditsForPush(value);
    value = r.value; stripped = r.stripped;
  }
  const kb = Math.round(value.length / 1024);
  if (stripped && typeof window.sbPushError === 'function') window.sbPushError(key, 'stripped', kb);
  fetch(`${SB_URL}/rest/v1/kv_store`, {
    method: 'POST',
    headers: {
      'apikey': SB_KEY,
      'Authorization': `Bearer ${SB_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'resolution=merge-duplicates'
    },
    body: JSON.stringify({ key, value })
  }).then(r => {
    if (!r.ok && typeof window.sbPushError === 'function') window.sbPushError(key, r.status, kb);
  }).catch(() => {});
}

function applyDeliveryText() {
  try {
    const txt = localStorage.getItem('obv_delivery_text');
    const s = JSON.parse(localStorage.getItem('obv_settings') || '{}');
    const threshold = s.deliveryThreshold !== undefined ? s.deliveryThreshold : 500;
    document.querySelectorAll('.free-delivery-banner span').forEach(el => {
      // Keep the custom wording if one was saved, but always swap in the
      // current threshold number so it can never go stale — previously this
      // fully overwrote the text with the raw saved string, which could
      // silently reintroduce an old GH₵ amount even after the threshold
      // was updated elsewhere in admin.
      const base = (txt && txt.trim()) ? txt.trim() : el.textContent;
      el.textContent = base.replace(/[\d,]+(\.\d+)?/, threshold);
    });
  } catch(e) {}
}

/* Kick off sync immediately so it's ready by DOMContentLoaded. */
window.obvSyncPromise = sbSync();
