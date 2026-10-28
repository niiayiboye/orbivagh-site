/* ================================================================
   ORBIVA – SUPABASE SYNC
   Shared key-value store so admin changes reach all visitors.
================================================================ */
const SB_URL = 'https://gvvzcudpcotoicnrhapz.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2dnpjdWRwY290b2ljbnJoYXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxODQ0MjgsImV4cCI6MjEwMjc2MDQyOH0.BCh__U3fedTDvh0S8UAiPs7o1SnsqqKwuf_56bywWUw';

/* Pull all rows from kv_store into localStorage, then resolve.
   Uses a signed-in admin's own token when one is available, the same way
   sbPush() already does for writes — a couple of keys (obv_admin_secrets,
   the legacy obv_pass) are now only readable that way. A logged-out visitor
   still gets everything the storefront needs; they just never receive those
   two rows at all, straight from the database's own access rules. */
async function sbSync() {
  try {
    const adminToken = await getValidAdminAccessToken();
    const res = await fetch(`${SB_URL}/rest/v1/kv_store?select=*`, {
      headers: {
        'apikey': SB_KEY,
        'Authorization': `Bearer ${adminToken || SB_KEY}`
      }
    });
    if (!res.ok) return;
    const rows = await res.json();
    rows.forEach(r => localStorage.setItem(r.key, r.value));
    applyBranding();
    applyDeliveryText();
    applyComboPageVisibility();
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

/* Returns a valid admin session access token if one exists and is (or can
   be refreshed to be) valid — otherwise null, meaning "use the public key"
   which is exactly right for logged-out visitors (e.g. customers placing
   an order at checkout, which the database only allows for that one
   record type regardless of which key is used). */
async function getValidAdminAccessToken() {
  try {
    const session = JSON.parse(localStorage.getItem('obv_admin_session') || 'null');
    if (!session || !session.access_token) return null;
    if (session.expires_at && Date.now() < session.expires_at - 60000) {
      return session.access_token; // still valid, with a 1-minute safety buffer
    }
    if (!session.refresh_token) return null;
    const res = await fetch(`${SB_URL}/auth/v1/token?grant_type=refresh_token`, {
      method: 'POST',
      headers: { 'apikey': SB_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: session.refresh_token })
    });
    if (!res.ok) return null;
    const data = await res.json();
    const newSession = {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      expires_at: Date.now() + (data.expires_in * 1000)
    };
    localStorage.setItem('obv_admin_session', JSON.stringify(newSession));
    return newSession.access_token;
  } catch(e) { return null; }
}

/* Write current localStorage value for key to Supabase (fire-and-forget).
   For obv_prod_edits: base64 images are stripped so the payload stays small.
   Uses a real signed-in admin session token when available (required by the
   database's security rules for every write except placing an order) —
   otherwise falls back to the public key, which the database only accepts
   for order records. */
async function sbPush(key) {
  let value = localStorage.getItem(key);
  if (value === null) return;
  let stripped = false;
  if (key === 'obv_prod_edits' || key === 'obv_prod_adds') {
    const r = _cleanEditsForPush(value);
    value = r.value; stripped = r.stripped;
  }
  const kb = Math.round(value.length / 1024);
  if (stripped && typeof window.sbPushError === 'function') window.sbPushError(key, 'stripped', kb);
  const adminToken = await getValidAdminAccessToken();
  fetch(`${SB_URL}/rest/v1/kv_store`, {
    method: 'POST',
    headers: {
      'apikey': SB_KEY,
      'Authorization': `Bearer ${adminToken || SB_KEY}`,
      'Content-Type': 'application/json',
      // return=representation lets us tell a genuine save apart from the
      // classic Supabase/PostgREST gotcha where a Row Level Security
      // policy silently blocks a write while still returning a "successful"
      // HTTP status — without this, that case is completely invisible: the
      // page believes it saved, and the change quietly reverts the next
      // time anything re-syncs from the database.
      'Prefer': 'resolution=merge-duplicates,return=representation'
    },
    body: JSON.stringify({ key, value })
  }).then(async r => {
    if (!r.ok) {
      if (typeof window.sbPushError === 'function') window.sbPushError(key, r.status, kb);
      return;
    }
    try {
      const body = await r.json();
      if (Array.isArray(body) && body.length === 0) {
        if (typeof window.sbPushError === 'function') window.sbPushError(key, 'blocked', kb);
      }
    } catch(e) {}
  }).catch(() => {
    if (typeof window.sbPushError === 'function') window.sbPushError(key, 'network', kb);
  });
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

/* Combo Deals page on/off switch (admin > Combo Deals). When off: hides every
   "Combo Deals" link, the homepage combo section, and sends anyone who lands
   on the combo pages back to the home page. Default is ON if never set. */
function applyComboPageVisibility() {
  try {
    if (localStorage.getItem('obv_combo_page') !== 'off') return;
    var css = document.getElementById('obvComboHide');
    if (!css) {
      css = document.createElement('style'); css.id = 'obvComboHide';
      css.textContent = '#comboPromoSection{display:none!important}';
      document.head.appendChild(css);
    }
    document.querySelectorAll('a[href*="combo-deals.html"]').forEach(function(a) {
      if (a.closest('.combo-detail-back')) return;
      var li = a.parentElement && a.parentElement.tagName === 'LI' && a.parentElement.children.length === 1 ? a.parentElement : a;
      li.style.display = 'none';
    });
    if (/combo-deals\.html|\/combo\//.test(location.pathname)) location.replace('/');
  } catch(e) {}
}
document.addEventListener('DOMContentLoaded', applyComboPageVisibility);


/* ── Store contact numbers ────────────────────────────────────────────────
   Two separate numbers, both set in admin → Settings:
     • Call number     (settings.storeCallPhone) — every "call" link/button
     • WhatsApp number (settings.storeWhatsapp)  — every WhatsApp link/button
   The defaults below are used until Settings has been saved with new values. */
var OBV_DEFAULT_CALL = '0556762816';
var OBV_DEFAULT_WA   = '0502578905';
function obvLocalPhone(raw) {            // → 0XXXXXXXXX
  var d = String(raw || '').replace(/\D/g, '');
  if (d.indexOf('233') === 0) d = '0' + d.slice(3);
  else if (d.length === 9) d = '0' + d;
  return d;
}
function obvIntlPhone(raw) {             // → 233XXXXXXXXX (for wa.me)
  var d = obvLocalPhone(raw);
  return d.indexOf('0') === 0 ? '233' + d.slice(1) : d;
}
function obvContactSettings() {
  var s = {};
  try { s = JSON.parse(localStorage.getItem('obv_settings') || '{}') || {}; } catch(e) {}
  return {
    call: obvLocalPhone(s.storeCallPhone || OBV_DEFAULT_CALL),
    wa:   obvLocalPhone(s.storeWhatsapp  || OBV_DEFAULT_WA)
  };
}

/* ── Floating Call button (phones only) + Meta (Facebook) Pixel ──────────────
   Call button: sits above the WhatsApp button, uses the Call number from
   admin Settings. Pixel: loads only when a Pixel ID is saved under the
   'obv_meta_pixel' key; every Call / WhatsApp tap is sent as a "Contact" event. */
function obvTrack(name, params) {
  try { if (typeof window.fbq === 'function') window.fbq('track', name, params || {}); } catch(e) {}
}
function obvLoadMetaPixel() {
  try {
    var id = (localStorage.getItem('obv_meta_pixel') || '').replace(/\D/g, '');
    if (!id || window.fbq) return;
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', id);
    window.fbq('track', 'PageView');
  } catch(e) {}
}
function obvAddCallButton() {
  try {
    if (document.querySelector('.call-float') || !document.querySelector('.whatsapp-float')) return;
    var digits = obvContactSettings().call;
    if (!document.getElementById('obvCallCss')) {
      var css = document.createElement('style'); css.id = 'obvCallCss';
      css.textContent = '.call-float{position:fixed;bottom:142px;right:16px;z-index:900;width:50px;height:50px;border-radius:50%;background:#1d4ed8;color:#fff;display:flex;align-items:center;justify-content:center;font-size:21px;box-shadow:0 4px 16px rgba(29,78,216,.45);text-decoration:none;transition:transform .2s}.call-float:active{transform:scale(.94)}.call-float::after{content:"";position:absolute;inset:0;border-radius:50%;border:2px solid #1d4ed8;opacity:0;animation:obvCallPulse 3.6s ease-out infinite;pointer-events:none}.call-float i{display:inline-block;transform-origin:50% 50%;animation:obvCallRing 3.6s ease-in-out infinite}@keyframes obvCallRing{0%,52%,100%{transform:rotate(0)}56%{transform:rotate(-18deg)}60%{transform:rotate(16deg)}64%{transform:rotate(-14deg)}68%{transform:rotate(12deg)}72%{transform:rotate(-8deg)}76%{transform:rotate(6deg)}80%{transform:rotate(0)}}@keyframes obvCallPulse{0%,50%{transform:scale(1);opacity:0}54%{opacity:.55}85%,100%{transform:scale(1.7);opacity:0}}@media(prefers-reduced-motion:reduce){.call-float i,.call-float::after{animation:none}}@media(min-width:1024px){.call-float{display:none}}';
      document.head.appendChild(css);
    }
    var a = document.createElement('a');
    a.className = 'call-float'; a.href = 'tel:' + digits; a.title = 'Call us'; a.setAttribute('aria-label', 'Call Orbiva Technologies');
    a.innerHTML = '<i class="fas fa-phone-alt"></i>';
    a.addEventListener('click', function() { obvTrack('Contact', { method: 'call' }); });
    document.body.appendChild(a);
    var wa = document.querySelector('.whatsapp-float');
    if (wa && !wa.dataset.obvTracked) { wa.dataset.obvTracked = '1'; wa.addEventListener('click', function() { obvTrack('Contact', { method: 'whatsapp' }); }); }
  } catch(e) {}
}
document.addEventListener('DOMContentLoaded', function() { obvAddCallButton(); obvLoadMetaPixel(); });

/* Kick off sync immediately so it's ready by DOMContentLoaded. */
window.obvSyncPromise = sbSync();
window.obvSyncPromise.then(function() { obvAddCallButton(); obvLoadMetaPixel(); });


/* ── Visitor analytics (admin → Analytics) ───────────────────────────────────
   Every page view and the main actions (call tap, WhatsApp tap, add to cart)
   are written as one row each to the insert-only `site_visits` table — no
   read-modify-write, so nothing is lost when several people visit at once and
   there is no 500-entry cap. Records where the visitor came from (ads,
   Facebook, Google, direct…), a per-visit session id, device type and a bot
   flag. Skipped on admin pages, on localhost, and on any browser where
   Analytics → "Don't count my visits" was switched on. */
function obvAnalyticsOff() {
  try {
    if (localStorage.getItem('obv_me') === '1') return true;
    if (/admin\.html/i.test(location.pathname)) return true;
    var h = location.hostname;
    return !(/(^|\.)orbivagh\.com$/i.test(h) || /github\.io$/i.test(h));
  } catch(e) { return true; }
}
function obvSession() {
  try {
    var sid = sessionStorage.getItem('obv_sid');
    if (!sid) { sid = Date.now().toString(36) + Math.random().toString(36).slice(2, 8); sessionStorage.setItem('obv_sid', sid); }
    return sid;
  } catch(e) { return ''; }
}
function obvSource() {
  try {
    var cached = sessionStorage.getItem('obv_src');
    if (cached) return JSON.parse(cached);
  } catch(e) {}
  var q = new URLSearchParams(location.search), src = 'direct', medium = '', campaign = (q.get('utm_campaign') || '').slice(0, 120), ref = '';
  try { if (document.referrer) ref = new URL(document.referrer).hostname.replace(/^www\./, ''); } catch(e) {}
  if (ref && ref === location.hostname.replace(/^www\./, '')) ref = '';
  var us = (q.get('utm_source') || '').toLowerCase();
  if (us) { src = us; medium = (q.get('utm_medium') || '').toLowerCase(); }
  else if (q.get('fbclid')) { src = 'facebook'; medium = 'ad-or-social'; }
  else if (q.get('gclid')) { src = 'google'; medium = 'cpc'; }
  else if (ref) {
    medium = 'referral'; src = ref;
    if (/google\./.test(ref)) { src = 'google'; medium = 'organic'; }
    else if (/(facebook|fb)\.com$|^l\.facebook|^m\.facebook|^lm\.facebook/.test(ref)) { src = 'facebook'; medium = 'social'; }
    else if (/instagram\.com$/.test(ref)) { src = 'instagram'; medium = 'social'; }
    else if (/whatsapp|wa\.me/.test(ref)) { src = 'whatsapp'; medium = 'social'; }
    else if (/tiktok/.test(ref)) { src = 'tiktok'; medium = 'social'; }
    else if (/bing\.com$|duckduckgo|yahoo\./.test(ref)) { medium = 'organic'; }
  }
  var out = { src: src.slice(0, 80), medium: medium.slice(0, 80), campaign: campaign, ref: ref.slice(0, 120) };
  try { sessionStorage.setItem('obv_src', JSON.stringify(out)); } catch(e) {}
  return out;
}
async function obvGeo() {
  try {
    var c = sessionStorage.getItem('obv_geo');
    if (c) return JSON.parse(c);
  } catch(e) {}
  var geo = {};
  try {
    var gr = await fetch('https://ipapi.co/json/');
    if (gr.ok) {
      var gd = await gr.json();
      geo = { country: gd.country_name || '', cc: gd.country_code || '', region: gd.region || '', city: gd.city || '', ip: gd.ip || '' };
    }
  } catch(e) {}
  try { sessionStorage.setItem('obv_geo', JSON.stringify(geo)); } catch(e) {}
  return geo;
}
function obvPageName() {
  var seg = location.pathname.split('/').pop() || 'index.html', q = new URLSearchParams(location.search);
  if (seg === 'product.html' && q.get('id')) seg += '?id=' + q.get('id');
  else if (seg === 'deals.html' && q.get('g')) seg += '?g=' + q.get('g');
  else if (seg === 'shop.html' && (q.get('cat') || q.get('brand') || q.get('q'))) seg += '?' + (q.get('cat') ? 'cat=' + q.get('cat') : q.get('brand') ? 'brand=' + q.get('brand') : 'q=' + q.get('q'));
  return seg.slice(0, 200);
}
async function obvLogEvent(ev) {
  try {
    if (obvAnalyticsOff()) return;
    var ua = navigator.userAgent || '';
    var s = obvSource(), g = await obvGeo();
    var row = {
      sid: obvSession(), ev: ev || 'view', p: obvPageName(),
      src: s.src, medium: s.medium, campaign: s.campaign, ref: s.ref,
      device: /Mobi|Android|iPhone|iPad/i.test(ua) ? 'mobile' : 'desktop',
      country: g.country || '', cc: g.cc || '', region: g.region || '', city: g.city || '', ip: g.ip || '',
      is_bot: !!(navigator.webdriver || /bot|crawl|spider|slurp|headless|lighthouse|facebookexternalhit|preview|monitor|curl|python|node-fetch/i.test(ua))
    };
    fetch(SB_URL + '/rest/v1/site_visits', {
      method: 'POST',
      headers: { apikey: SB_KEY, Authorization: 'Bearer ' + SB_KEY, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
      body: JSON.stringify(row), keepalive: true
    }).catch(function() {});
  } catch(e) {}
}
document.addEventListener('DOMContentLoaded', function() {
  obvLogEvent('view');
  // Calls, WhatsApp taps (any link on the site) and add-to-cart
  document.addEventListener('click', function(e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var h = a.getAttribute('href') || '';
    if (h.indexOf('tel:') === 0) obvLogEvent('call');
    else if (h.indexOf('wa.me') > -1 || h.indexOf('whatsapp.com') > -1) obvLogEvent('whatsapp');
  }, true);
  if (typeof window.addToCart === 'function' && !window.addToCart._obv) {
    var orig = window.addToCart;
    window.addToCart = function() { obvLogEvent('add_to_cart'); return orig.apply(this, arguments); };
    window.addToCart._obv = true;
  }
});

/* ── Christmas logo touch ─────────────────────────────────────────
   On automatically from 1 Nov to 6 Jan. Add ?xmas=on or ?xmas=off to
   any page URL to force it on/off on that device (remembered). The
   stylesheet only loads while it is on. */
(function() {
  try {
    var q = (location.search.match(/[?&]xmas=(on|off)/) || [])[1];
    if (q) localStorage.setItem('obv_xmas', q);
    var force = localStorage.getItem('obv_xmas');
    var d = new Date(), m = d.getMonth(), day = d.getDate();
    var inSeason = m >= 10 || m === 11 || (m === 0 && day <= 6);
    var on = force ? force === 'on' : inSeason;
    if (!on) return;
    document.documentElement.classList.add('xmas');
    var l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = '/css/christmas.css';
    document.head.appendChild(l);
  } catch(e) {}
})();
