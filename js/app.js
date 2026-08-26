/* ================================================================
   ORBIVA – MAIN APPLICATION
================================================================ */

/* ── Toast system ── */
function showToast(type, title, msg, icon) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const iconMap = { success: 'fas fa-check-circle', error: 'fas fa-exclamation-circle', warning: 'fas fa-exclamation-triangle', info: 'fas fa-info-circle' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="${icon || iconMap[type]} toast-icon"></i>
    <div class="toast-info">
      <div class="toast-title">${title}</div>
      ${msg ? `<div class="toast-msg">${msg}</div>` : ''}
    </div>
    <button onclick="this.parentElement.remove()" style="color:var(--text-muted);font-size:13px;margin-left:8px">×</button>
  `;
  container.appendChild(toast);
  requestAnimationFrame(() => { requestAnimationFrame(() => toast.classList.add('show')); });
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/* ── Apply admin product/brand edits from localStorage ── */
let _overridesApplied = false;
function applyOverrides() {
  if (_overridesApplied) return;
  _overridesApplied = true;
  // If data.js was redeployed with a new version, clear stale product
  // deletions/edits/adds — a full catalog rebuild means anything added
  // through the admin panel against the old catalog shouldn't silently
  // persist into the new one.
  try {
    const dv = typeof DATA_VERSION !== 'undefined' ? DATA_VERSION : '';
    if (dv && localStorage.getItem('obv_data_version') !== dv) {
      localStorage.removeItem('obv_prod_dels');
      localStorage.removeItem('obv_prod_edits');
      localStorage.removeItem('obv_prod_adds');
      localStorage.setItem('obv_data_version', dv);
    }
  } catch(e) {}
  try {
    const edits = JSON.parse(localStorage.getItem('obv_prod_edits') || '{}');
    const adds  = JSON.parse(localStorage.getItem('obv_prod_adds')  || '[]');
    const dels  = new Set(JSON.parse(localStorage.getItem('obv_prod_dels') || '[]'));
    for (let i = PRODUCTS.length - 1; i >= 0; i--) {
      if (dels.has(PRODUCTS[i].id)) { PRODUCTS.splice(i, 1); continue; }
      if (edits[PRODUCTS[i].id]) Object.assign(PRODUCTS[i], edits[PRODUCTS[i].id]);
    }
    // Edits need to apply to admin-added products too — previously they were
    // pushed in raw, so an edit made after adding a product never showed up.
    adds.forEach(p => {
      if (dels.has(p.id)) return;
      PRODUCTS.push(edits[p.id] ? Object.assign({}, p, edits[p.id]) : p);
    });
    const brandAdds = JSON.parse(localStorage.getItem('obv_brand_adds') || '[]');
    const brandDels = new Set(JSON.parse(localStorage.getItem('obv_brand_dels') || '[]'));
    for (let i = BRANDS.length - 1; i >= 0; i--) {
      if (brandDels.has(BRANDS[i].id)) BRANDS.splice(i, 1);
    }
    brandAdds.forEach(b => { if (!BRANDS.some(x => x.id === b.id)) BRANDS.push(b); });
    // Admin-added/removed/edited categories — mirrors the brand logic above so
    // categories created or edited in admin show up site-wide (nav, filters,
    // shop grid), including subcategories via each category's parentId.
    const catAdds = JSON.parse(localStorage.getItem('obv_cat_adds') || '[]');
    const catDels = new Set(JSON.parse(localStorage.getItem('obv_cat_dels') || '[]'));
    const catEdits = JSON.parse(localStorage.getItem('obv_cat_edits') || '{}');
    for (let i = CATEGORIES.length - 1; i >= 0; i--) {
      if (catDels.has(CATEGORIES[i].id)) { CATEGORIES.splice(i, 1); continue; }
      if (catEdits[CATEGORIES[i].id]) Object.assign(CATEGORIES[i], catEdits[CATEGORIES[i].id]);
    }
    catAdds.forEach(c => {
      if (catDels.has(c.id)) return;
      const merged = catEdits[c.id] ? Object.assign({}, c, catEdits[c.id]) : c;
      if (!CATEGORIES.some(x => x.id === c.id)) CATEGORIES.push(merged);
    });
  } catch(e) {}
  // Hide products without images (default ON; admin can turn off in Settings)
  if (localStorage.getItem('obv_img_required') !== 'off') {
    for (let i = PRODUCTS.length - 1; i >= 0; i--) {
      const imgs = PRODUCTS[i].images;
      // An array containing only blank/empty strings should count as "no
      // images" too — previously only an empty array was caught.
      if (!(imgs && imgs.some(u => u && u.trim()))) PRODUCTS.splice(i, 1);
    }
  }
  // Apply store settings (WhatsApp, phone, email, store name)
  try {
    const s = JSON.parse(localStorage.getItem('obv_settings') || '{}');
    if (s.storePhone) {
      const ph = s.storePhone;
      const telHref = 'tel:' + ph.replace(/\D/g, '');
      document.querySelectorAll('[data-store-phone]').forEach(el => {
        el.textContent = ph;
        if (el.tagName === 'A') el.href = telHref; // link is clickable itself
      });
      document.querySelectorAll('a[href^="tel:"]:not([data-store-phone])').forEach(el => {
        el.href = telHref;
        Array.from(el.childNodes).filter(n => n.nodeType === 3 && n.textContent.trim()).forEach(n => { n.textContent = ' ' + ph; });
      });
    }
    if (s.storeEmail) {
      const em = s.storeEmail;
      const mailHref = 'mailto:' + em;
      document.querySelectorAll('[data-store-email]').forEach(el => {
        el.textContent = em;
        if (el.tagName === 'A') el.href = mailHref; // link is clickable itself
      });
      document.querySelectorAll('a[href^="mailto:"]:not([data-store-email])').forEach(el => {
        el.href = mailHref;
        Array.from(el.childNodes).filter(n => n.nodeType === 3 && n.textContent.trim()).forEach(n => { n.textContent = ' ' + em; });
      });
    }
    if (s.storeAddress) {
      document.querySelectorAll('[data-store-address]').forEach(el => { el.textContent = s.storeAddress; });
    }
    if (s.hoursWeekday || s.hoursSunday) {
      const hoursHtml = [s.hoursWeekday, s.hoursSunday].filter(Boolean).join('<br>');
      document.querySelectorAll('[data-store-hours]').forEach(el => { el.innerHTML = hoursHtml; });
    }
    if (s.storeWhatsapp || s.storePhone) {
      // The admin settings field is filled in local Ghana format (e.g.
      // "050 257 8905"), but wa.me links need the full international
      // number with no leading 0 — otherwise WhatsApp can't resolve it at
      // all, which silently breaks the chat button.
      let wa = (s.storeWhatsapp || s.storePhone).replace(/\D/g, '');
      if (wa.startsWith('0')) wa = '233' + wa.slice(1);
      else if (!wa.startsWith('233')) wa = '233' + wa;
      document.querySelectorAll('a.whatsapp-float, a[href*="wa.me"]').forEach(el => { el.href = 'https://wa.me/' + wa; });
    }
    if (s.storeName) {
      document.querySelectorAll('[data-store-name]').forEach(el => el.textContent = s.storeName);
    }
  } catch(e) {}
}

/* ── Format description: each line becomes a bullet point ── */
function fmtDesc(desc, limit = 0) {
  if (!desc) return '';
  const lines = desc.split('\n').map(l => l.trim()).filter(Boolean);
  const shown = limit ? lines.slice(0, limit) : lines;
  if (shown.length === 0) return '';
  if (shown.length === 1) return `<p style="font-size:13px;color:var(--text-muted);line-height:1.6">${shown[0]}</p>`;
  return `<ul style="padding-left:16px;margin:0;font-size:13px;color:var(--text-muted);line-height:1.8">${shown.map(l => `<li>${l}</li>`).join('')}</ul>`;
}

/* ── Product card renderer ── */
const CAT_NAMES = { tv: 'Televisions', ac: 'Air Conditioners', fridge: 'Refrigerators', laundry: 'Washing Machines', kitchen: 'Kitchen Appliances', small: 'Small Appliances', phones: 'Phones', tablets: 'Tablets', commercial: 'Commercial Displays' };

function renderProductCard(product) {
  const discountStr = product.oldPrice ? `<span class="product-discount">-${product.discount}%</span>` : '';
  const oldPriceStr = product.oldPrice ? `<span class="product-old-price">${fmt(product.oldPrice)}</span>` : '';
  const badgeMap = { new: 'badge-new', sale: 'badge-sale', hot: 'badge-hot', best: 'badge-best', soldout: 'badge-soldout' };
  const badgeLabel = { new: 'New', sale: 'Sale', hot: 'Hot', best: 'Best Seller', soldout: 'Sold Out' };
  const badge = (product.badge && localStorage.getItem('obv_badges') === 'on') ? `<span class="badge-tag ${badgeMap[product.badge]}">${badgeLabel[product.badge]}</span>` : '';
  const wishlisted = isWishlisted(product.id) ? ' wishlisted' : '';
  const catLabel = CAT_NAMES[product.category] || product.brand;
  const specTags = product.specs ? Object.values(product.specs).slice(0, 4).map(v =>
    `<span class="spec-tag">${v}</span>`).join('') : '';

  return `
    <div class="product-card reveal" data-tags="${product.tags.join(',')}" data-id="${product.id}" onclick="openProduct('${product.id}')">
      <div class="product-img-wrap${(product.images && product.images.length) ? ' img-loading' : ''}">
        ${(product.images && product.images.length) ? `<img src="${product.images[0]}" alt="${product.name}" class="product-img-photo" loading="lazy" onload="this.parentNode.classList.remove('img-loading')" onerror="this.onerror=null;this.parentNode.classList.remove('img-loading');this.parentNode.innerHTML='<div class=\\'product-img-icon\\'>${product.icon}</div>'">` : `<div class="product-img-icon">${product.icon}</div>`}
        <div class="product-badges">${badge}</div>
        <div class="product-actions">
          <button class="prod-action-btn${wishlisted}" data-wishlist="${product.id}" title="Add to Wishlist" onclick="event.stopPropagation();toggleWishlist('${product.id}')">
            <i class="fas fa-heart"></i>
          </button>
          <button class="prod-action-btn" title="Quick View" onclick="event.stopPropagation();openProduct('${product.id}')">
            <i class="fas fa-eye"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-cat-label">${catLabel}</div>
        <div class="product-name">${product.name}</div>
        ${product.model ? `<div class="product-model">${product.model}</div>` : ''}
        ${product.description ? `<div class="product-desc">${fmtDesc(product.description, 3)}</div>` : ''}
        ${specTags ? `<div class="product-spec-tags">${specTags}</div>` : ''}
        <div class="product-price-row">
          <span class="product-price">${fmt(product.price)}</span>
          <div style="display:flex;align-items:center;gap:6px">${oldPriceStr}${discountStr}</div>
        </div>
        <button class="add-to-cart-btn" onclick="event.stopPropagation();handleAddToCart(this,'${product.id}')">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    </div>
  `;
}

/* ── Add to cart with button animation ── */
function handleAddToCart(btn, productId) {
  addToCart(productId);
  btn.classList.add('added');
  const orig = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-check"></i> Added!';
  setTimeout(() => {
    btn.innerHTML = orig;
    btn.classList.remove('added');
  }, 1800);
  // Ripple
  const ripple = document.createElement('span');
  ripple.className = 'ripple-effect';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 700);
}

/* ── Product Quick View / Detail ── */
function openProduct(productId) {
  showPageLoadingOverlay();
  window.location.href = 'product.html?id=' + productId;
}

// Lightweight full-screen loading indicator shown the instant a product is
// clicked from search (or anywhere else), so there's immediate visual
// feedback while the browser navigates — even though it's usually fast,
// clicking something and seeing nothing happen for a moment feels broken.
function showPageLoadingOverlay() {
  if (document.getElementById('pageLoadingOverlay')) return;
  const el = document.createElement('div');
  el.id = 'pageLoadingOverlay';
  el.style.cssText = 'position:fixed;inset:0;background:rgba(255,255,255,0.85);z-index:9999;display:flex;align-items:center;justify-content:center;';
  el.innerHTML = '<div style="width:38px;height:38px;border:3px solid #e2e8f0;border-top-color:var(--primary,#1d4ed8);border-radius:50%;animation:pageLoadSpin .7s linear infinite"></div>';
  if (!document.getElementById('pageLoadSpinStyle')) {
    const style = document.createElement('style');
    style.id = 'pageLoadSpinStyle';
    style.textContent = '@keyframes pageLoadSpin{to{transform:rotate(360deg)}}';
    document.head.appendChild(style);
  }
  document.body.appendChild(el);
}

// Mobile browsers often restore a page from memory (bfcache) on back/forward
// navigation instead of reloading it — snapshotting the DOM exactly as it
// was, including a loading spinner shown right before the user navigated
// away. Without this, that spinner stays stuck on screen forever after
// pressing back. `pageshow` fires on both fresh loads and bfcache restores;
// `event.persisted` tells them apart.
window.addEventListener('pageshow', function(event) {
  const overlay = document.getElementById('pageLoadingOverlay');
  if (overlay) overlay.remove();
});

function showProductModal(p) {
  // Remove existing
  document.getElementById('productModal')?.remove();

  const specsHtml = p.specs ? Object.entries(p.specs).map(([k, v]) =>
    `<tr><td>${k}</td><td>${v}</td></tr>`
  ).join('') : '';

  const modal = document.createElement('div');
  modal.id = 'productModal';
  modal.className = 'modal open';
  modal.style.zIndex = '1200';
  modal.innerHTML = `
    <div class="modal-box" style="overflow-y:auto">
      <button class="close-btn modal-close" style="position:absolute;top:16px;right:16px;z-index:10" onclick="this.closest('.modal').remove()"><i class="fas fa-times"></i></button>
      <div class="product-detail-layout">
        <div class="product-gallery">
          ${(() => {
            const imgs = (p.images && p.images.length) ? p.images : [];
            if (imgs.length) {
              const thumbs = imgs.map((src, i) =>
                `<div class="thumb ${i===0?'active':''}" data-idx="${i}" onclick="switchModalImg(this,'${src.replace(/'/g,"\\'").replace(/"/g,'&quot;')}','${p.name.replace(/'/g,"\\'").replace(/"/g,'&quot;')}')">
                  <img src="${src}" alt="${p.name}" style="width:100%;height:100%;object-fit:contain">
                </div>`
              ).join('');
              const arrows = imgs.length > 1 ? `
                <button class="gallery-arrow gallery-prev" onclick="stepModalImg(-1)" title="Previous"><i class="fas fa-chevron-left"></i></button>
                <button class="gallery-arrow gallery-next" onclick="stepModalImg(1)" title="Next"><i class="fas fa-chevron-right"></i></button>` : '';
              return `
                <div class="main-img main-img-zoomable" id="mainImgZoom" data-current="0" data-total="${imgs.length}">
                  <img id="modalMainImg" src="${imgs[0]}" alt="${p.name}" class="modal-img-photo"
                    onerror="this.onerror=null;this.closest('.main-img-zoomable').id='';this.closest('.main-img').classList.remove('main-img-zoomable');this.style.fontSize='80px';this.outerHTML='<span style=\\'font-size:80px\\'>${p.icon}</span>'">
                  ${arrows}
                </div>
                <div class="product-thumbs" id="modalThumbs">${thumbs}</div>`;
            } else {
              return `<div class="main-img" style="font-size:80px">${p.icon}</div>
                      <div class="product-thumbs">${[p.icon,p.icon,p.icon].map((ic,i)=>`<div class="thumb ${i===0?'active':''}">${ic}</div>`).join('')}</div>`;
            }
          })()}
        </div>
        <div class="product-detail-info">
          <div class="product-brand">${p.brand}</div>
          <div class="product-name" style="font-size:1.4rem;font-weight:800;color:var(--text-dark);margin-bottom:6px">${p.name}</div>
          ${p.model ? `<div style="font-size:12px;color:var(--text-muted);font-weight:500;margin-bottom:12px">SKU: <strong style="color:var(--text-body)">${p.model}</strong></div>` : ''}
          <div style="margin-bottom:20px">${fmtDesc(p.description)}</div>
          <div class="detail-price-row">
            <span class="detail-price">${fmt(p.price)}</span>
            ${p.oldPrice ? `<span class="detail-old-price">${fmt(p.oldPrice)}</span>` : ''}
            ${p.discount ? `<span class="detail-discount">-${p.discount}% OFF</span>` : ''}
          </div>
          <div class="qty-select-wrap">
            <span style="font-size:14px;font-weight:600;color:var(--text-dark)">Quantity:</span>
            <div class="qty-selector">
              <button onclick="const inp=this.nextSibling.nextSibling;inp.value=Math.max(1,parseInt(inp.value)-1)">−</button>
              <input type="number" value="1" min="1" max="10" id="modalQty" />
              <button onclick="const inp=this.previousSibling.previousSibling;inp.value=Math.min(10,parseInt(inp.value)+1)">+</button>
            </div>
          </div>
          <div class="detail-actions">
            <button class="btn-primary" onclick="addToCart('${p.id}',parseInt(document.getElementById('modalQty').value)||1);this.closest('.modal').remove()">
              <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
            <button class="btn-outline" onclick="toggleWishlist('${p.id}')">
              <i class="fas fa-heart"></i>
            </button>
          </div>
          ${specsHtml ? `
            <div style="border-top:1px solid var(--border);padding-top:20px">
              <h4 style="font-size:14px;font-weight:700;color:var(--text-dark);margin-bottom:12px">Specifications</h4>
              <table class="spec-table">${specsHtml}</table>
            </div>` : ''}
        </div>
      </div>
    </div>
  `;
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
  document.body.appendChild(modal);

  // Wire up tap-to-zoom after inserting into DOM
  const zoomEl = modal.querySelector('#mainImgZoom');
  if (zoomEl) {
    zoomEl.addEventListener('click', () => {
      const curIdx = parseInt(zoomEl.dataset.current) || 0;
      if (imgs.length) openLightbox(imgs, curIdx, p.name);
    });
  }
}

/* ── Modal gallery helpers ── */
function switchModalImg(thumb, src, name) {
  const mainImg = document.getElementById('modalMainImg');
  const zoomEl  = document.getElementById('mainImgZoom');
  if (mainImg) { mainImg.src = src; mainImg.alt = name.replace(/&quot;/g, '"'); }
  if (zoomEl)  { zoomEl.dataset.current = thumb.dataset.idx; }
  document.querySelectorAll('#modalThumbs .thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

function stepModalImg(dir) {
  const zoomEl = document.getElementById('mainImgZoom');
  const thumbs = [...document.querySelectorAll('#modalThumbs .thumb')];
  if (!zoomEl || !thumbs.length) return;
  let current = parseInt(zoomEl.dataset.current || 0);
  const total  = parseInt(zoomEl.dataset.total  || thumbs.length);
  current = (current + dir + total) % total;
  const target = thumbs[current];
  if (target) {
    const img = target.querySelector('img');
    switchModalImg(target, img ? img.src : '', img ? img.alt : '');
    target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

/* ── Image lightbox ── */
// Opens a full-screen image viewer. Accepts the full image list and a
// starting index so people can navigate between all of a product's photos
// — via swipe on mobile, arrow buttons/keys on desktop — without closing
// and reopening the lightbox each time.
function openLightbox(images, startIndex, name) {
  // Backward-compatible: allow the old single-image call signature too.
  if (typeof images === 'string') { name = startIndex; images = [images]; startIndex = 0; }
  images = (images || []).filter(Boolean);
  if (!images.length) return;
  let idx = Math.max(0, Math.min(startIndex || 0, images.length - 1));

  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = `
    <div class="lightbox-backdrop"></div>
    <div class="lightbox-content">
      <div class="lightbox-img-wrap">
        <button class="lightbox-close" onclick="this.closest('.lightbox').remove()"><i class="fas fa-times"></i></button>
        ${images.length > 1 ? '<button class="lightbox-nav lightbox-prev"><i class="fas fa-chevron-left"></i></button>' : ''}
        <img src="${images[idx]}" alt="${name}" class="lightbox-img" onerror="this.src=''">
        ${images.length > 1 ? '<button class="lightbox-nav lightbox-next"><i class="fas fa-chevron-right"></i></button>' : ''}
      </div>
      <div class="lightbox-caption">${name}${images.length > 1 ? ` <span class="lightbox-counter">${idx + 1} / ${images.length}</span>` : ''}</div>
    </div>
  `;
  lb.querySelector('.lightbox-backdrop').addEventListener('click', () => lb.remove());
  document.body.appendChild(lb);
  requestAnimationFrame(() => lb.classList.add('open'));

  const imgEl = lb.querySelector('.lightbox-img');
  const captionEl = lb.querySelector('.lightbox-caption');

  function show(newIdx) {
    idx = (newIdx + images.length) % images.length; // wrap around both ends
    imgEl.src = images[idx];
    captionEl.innerHTML = `${name} <span class="lightbox-counter">${idx + 1} / ${images.length}</span>`;
  }

  if (images.length > 1) {
    lb.querySelector('.lightbox-prev').addEventListener('click', e => { e.stopPropagation(); show(idx - 1); });
    lb.querySelector('.lightbox-next').addEventListener('click', e => { e.stopPropagation(); show(idx + 1); });

    // Swipe left/right to navigate, same gesture people already expect
    // from every native photo viewer.
    let touchStartX = 0, touchStartY = 0;
    lb.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });
    lb.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;
      // Require a clearly horizontal swipe so vertical scroll/dismiss
      // gestures aren't accidentally read as prev/next.
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        show(dx < 0 ? idx + 1 : idx - 1);
      }
    }, { passive: true });

    // Arrow keys for desktop/keyboard users.
    const keyHandler = e => {
      if (e.key === 'ArrowLeft') show(idx - 1);
      else if (e.key === 'ArrowRight') show(idx + 1);
      else if (e.key === 'Escape') lb.remove();
    };
    document.addEventListener('keydown', keyHandler);
    // Clean up the listener once the lightbox is closed, however it closes.
    new MutationObserver((_, obs) => {
      if (!document.body.contains(lb)) { document.removeEventListener('keydown', keyHandler); obs.disconnect(); }
    }).observe(document.body, { childList: true });
  } else {
    document.addEventListener('keydown', function escOnly(e) {
      if (e.key === 'Escape') { lb.remove(); document.removeEventListener('keydown', escOnly); }
    });
  }
}

/* ════════════════════════════════════════
   RENDER SECTIONS
════════════════════════════════════════ */

/* Categories */
/* Shared infinite card marquee — rotates DOM nodes, drag/swipe both directions */
function startCardMarquee(track, wrap, speed) {
  if (!track || !wrap) return;
  wrap.scrollLeft = 0;
  track.style.transform = 'translateX(0)';
  let offset = 0, autoRunning = true, dragActive = false, prevX = 0;

  function cardW() {
    const first = track.firstElementChild;
    if (!first) return 0;
    return first.offsetWidth + (parseFloat(getComputedStyle(track).gap) || 12);
  }

  function shift(delta) {
    const cw = cardW();
    if (cw <= 0) return;
    offset += delta;
    while (offset >= cw) { track.appendChild(track.firstElementChild); offset -= cw; }
    while (offset < 0)   { track.prepend(track.lastElementChild);      offset += cw; }
    track.style.transform = `translateX(-${offset}px)`;
  }


  function tick() {
    if (autoRunning && !dragActive) shift(speed);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  /* mouse drag */
  wrap.style.cursor = 'grab';
  wrap.addEventListener('mousedown', e => {
    dragActive = true; autoRunning = false;
    prevX = e.clientX; wrap.style.cursor = 'grabbing'; e.preventDefault();
  });
  document.addEventListener('mousemove', e => {
    if (!dragActive) return;
    shift(prevX - e.clientX); prevX = e.clientX;
  });
  document.addEventListener('mouseup', () => {
    if (!dragActive) return;
    dragActive = false; autoRunning = true; wrap.style.cursor = 'grab';
  });

  /* touch swipe */
  wrap.addEventListener('touchstart', e => {
    dragActive = true; autoRunning = false; prevX = e.touches[0].clientX;
  }, {passive:true});
  wrap.addEventListener('touchmove', e => {
    if (!dragActive) return;
    shift(prevX - e.touches[0].clientX); prevX = e.touches[0].clientX;
  }, {passive:true});
  wrap.addEventListener('touchend', () => {
    dragActive = false; setTimeout(() => { autoRunning = true; }, 800);
  }, {passive:true});
}

// Shared by shop.html and product.html — builds the category dropdown menu
// with subcategories nested (indented) under their parent category.
function buildCategoryDropdownHtml(cats) {
  const topLevel = cats.filter(c => !c.parentId);
  const itemHtml = (c, isSub) => `<li><a href="shop.html?cat=${c.id}" style="${isSub ? 'padding-left:28px;font-size:13px' : ''}"><i class="${c.icon}" style="color:${c.color};margin-right:8px;width:16px"></i>${c.name}</a></li>`;
  let html = '';
  topLevel.forEach(c => {
    html += itemHtml(c, false);
    cats.filter(s => s.parentId === c.id).forEach(s => { html += itemHtml(s, true); });
  });
  return html;
}

// Mobile category drawer — quick category browsing from the bottom nav
function openCategoryDrawer() {
  const list = document.getElementById('catDrawerList');
  if (list) {
    const cats = typeof CATEGORIES !== 'undefined' ? CATEGORIES : [];
    const topLevel = cats.filter(c => !c.parentId);
    let html = '';
    topLevel.forEach(c => {
      html += `<a href="shop.html?cat=${c.id}" class="cat-drawer-item">
        <span class="cat-drawer-icon" style="background:${c.bg};color:${c.color}"><i class="${c.icon}"></i></span>
        ${c.name}
      </a>`;
      cats.filter(s => s.parentId === c.id).forEach(s => {
        html += `<a href="shop.html?cat=${s.id}" class="cat-drawer-item sub">
          <span class="cat-drawer-icon" style="background:${s.bg};color:${s.color}"><i class="${s.icon}"></i></span>
          ${s.name}
        </a>`;
      });
    });
    list.innerHTML = html || '<p style="padding:16px;color:var(--text-muted);font-size:13px">No categories yet.</p>';
  }
  document.getElementById('catDrawerBackdrop')?.classList.add('open');
  document.getElementById('catDrawer')?.classList.add('open');
}
function closeCategoryDrawer() {
  document.getElementById('catDrawerBackdrop')?.classList.remove('open');
  document.getElementById('catDrawer')?.classList.remove('open');
}

// Renders admin-managed FAQs on the contact page. If none have been added
// yet, the page's own default FAQ items (already in the HTML) stay as-is —
// nothing gets wiped out just because the admin hasn't touched this yet.
function renderFaqs() {
  const list = document.getElementById('faqList');
  if (!list) return;
  const faqs = JSON.parse(localStorage.getItem('obv_faqs') || '[]');
  if (!faqs.length) return;
  list.innerHTML = faqs.map(f => `
    <details class="faq-accordion" style="border:1px solid var(--border-light);border-radius:var(--radius-md);overflow:hidden">
      <summary style="padding:13px 16px;font-size:13.5px;font-weight:600;color:var(--text-dark);cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center">
        ${f.question} <i class="fas fa-chevron-down" style="color:var(--text-muted);font-size:12px"></i>
      </summary>
      <p style="padding:0 16px 14px;font-size:13px;color:var(--text-muted);line-height:1.6">${f.answer}</p>
    </details>`).join('');
}

function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;
  const countMap = {};
  PRODUCTS.forEach(p => { countMap[p.category] = (countMap[p.category] || 0) + 1; });
  // Homepage promo tiles stay top-level only — subcategories are still fully
  // browsable via the nav dropdown and shop page filters, just not as their
  // own big tile here, to keep this grid from getting cluttered.
  grid.innerHTML = CATEGORIES.filter(c => !c.parentId).map(c => {
    // A parent's count includes its subcategories' products too
    const subIds = CATEGORIES.filter(s => s.parentId === c.id).map(s => s.id);
    const count = (countMap[c.id] || 0) + subIds.reduce((sum, id) => sum + (countMap[id] || 0), 0);
    if (!count) return '';
    return `<div class="category-card" onclick="window.location='shop.html?cat=${c.id}'">
      <div class="cat-icon" style="background:${c.bg};color:${c.color}"><i class="${c.icon}"></i></div>
      <div class="cat-name">${c.name}</div>
    </div>`;
  }).join('');
  if (window.innerWidth < 1024) startCardMarquee(grid, grid.parentElement, 0.6);
}

/* Flash Sale */
function renderFlashProducts() {
  const grid = document.getElementById('flashProducts');
  if (!grid) return;
  // Use admin-selected products if available, else fall back to data.js defaults
  let flashList = FLASH_PRODUCTS;
  try {
    const custom = JSON.parse(localStorage.getItem('obv_flash_prods') || 'null');
    if (custom && custom.length) flashList = custom;
  } catch(e) {}
  grid.innerHTML = flashList.map(fp => {
    const p = PRODUCTS.find(x => x.id === fp.id);
    if (!p) return '';
    const imgHtml = p.images && p.images.length
      ? `<img src="${p.images[0]}" alt="${p.name}" class="flash-product-img" loading="lazy" onerror="this.onerror=null;this.parentNode.innerHTML='<div class=\\'flash-product-icon\\'>${p.icon}</div>'">`
      : `<div class="flash-product-icon">${p.icon}</div>`;
    const soldPct = Math.floor(Math.random() * 40 + 20);
    return `
    <div class="flash-product-card" onclick="openProduct('${p.id}')">
      ${imgHtml}
      <div class="flash-product-name">${p.name}</div>
      <div class="flash-product-price">${fmt(p.price)}</div>
      <div class="flash-product-old">${fmt(p.oldPrice || p.price)}</div>
      <div class="flash-save">Save ${fp.discount}%</div>
      <div class="flash-progress">
        <div class="flash-progress-bar"><div class="flash-progress-fill" style="width:${soldPct}%"></div></div>
        <div class="flash-sold">${soldPct}% sold</div>
      </div>
    </div>`;
  }).join('');
}

/* Featured Products */
let visibleCount = 8;
let activeFilter = 'all';
let shuffledAll = null;

function renderFeaturedProducts(filter = 'all', append = false) {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  activeFilter = filter;

  let filtered;
  if (filter === 'all') {
    if (!shuffledAll) {
      shuffledAll = [...PRODUCTS];
      for (let i = shuffledAll.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledAll[i], shuffledAll[j]] = [shuffledAll[j], shuffledAll[i]];
      }
    }
    filtered = shuffledAll;
  } else {
    shuffledAll = null;
    filtered = PRODUCTS.filter(p => p.tags.includes(filter));
  }

  const showing = filtered.slice(0, append ? visibleCount : 8);
  if (!append) visibleCount = 8;

  grid.innerHTML = showing.map(p => renderProductCard(p)).join('');
  updateWishlistButtons();
  triggerReveal();

  const lmBtn = document.getElementById('loadMoreBtn');
  if (lmBtn) {
    lmBtn.style.display = filtered.length > showing.length ? 'inline-flex' : 'none';
  }
}

function loadMore() {
  visibleCount += 4;
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;

  const filtered = (activeFilter === 'all')
    ? (shuffledAll || PRODUCTS)
    : PRODUCTS.filter(p => p.tags.includes(activeFilter));

  const showing = filtered.slice(0, visibleCount);
  grid.innerHTML = showing.map(p => renderProductCard(p)).join('');
  updateWishlistButtons();
  triggerReveal();

  const lmBtn = document.getElementById('loadMoreBtn');
  if (lmBtn) {
    lmBtn.style.display = filtered.length > showing.length ? 'inline-flex' : 'none';
  }
}

/* Brands */
function renderBrands() {
  const grid = document.getElementById('brandsGrid');
  if (!grid) return;

  const brandLogos = {
    samsung: 'img/samsung.webp',
    tcl:     'img/tcl.webp',
    midea:   'img/midea.webp',
    nasco:   'https://cdn.ghanafa.org/2023/05/NASCO.png',
  };
  const brandFallback = {};

  grid.innerHTML = BRANDS.map(b => {
    const logoSrc = brandLogos[b.id];
    const logoHtml = logoSrc
      ? `<img src="${logoSrc}" alt="${b.name}" class="brand-logo-img" onerror="this.onerror=null;this.style.display='none';this.nextSibling.style.display='block'">`
      : '';
    const textHtml = `<div style="font-size:20px;font-weight:800;color:var(--text-dark);text-align:center;width:100%;${logoSrc ? 'display:none' : ''}">${b.name}</div>`;
    return `<div class="brand-card" onclick="window.location='shop.html?brand=${b.id}'">${logoHtml}${textHtml}</div>`;
  }).join('');
  if (window.innerWidth < 1024) startCardMarquee(grid, grid.parentElement, 0.5);
}

/* Blog */
function renderBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  grid.innerHTML = BLOG_POSTS.map(post => `
    <div class="blog-card reveal">
      <div class="blog-img" style="background:${post.bgColor}"><span>${post.icon}</span></div>
      <div class="blog-body">
        <div class="blog-meta">
          <span class="blog-cat">${post.category}</span>
          <span class="blog-date"><i class="fas fa-calendar-alt" style="margin-right:4px;opacity:.6"></i>${post.date}</span>
          <span class="blog-date"><i class="fas fa-clock" style="margin-right:4px;opacity:.6"></i>${post.readTime}</span>
        </div>
        <div class="blog-title">${post.title}</div>
        <div class="blog-excerpt">${post.excerpt}</div>
        <a href="blog.html?post=${post.id}" class="blog-read-more" onclick="event.stopPropagation()">
          Read More <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `).join('');
  triggerReveal();
}

/* Recently Viewed */
function renderRecentlyViewed() {
  const rv = JSON.parse(localStorage.getItem('obv_rv') || '[]');
  if (rv.length < 2) return;
  const sec = document.getElementById('recentlyViewed');
  const grid = document.getElementById('recentlyViewedGrid');
  if (!sec || !grid) return;
  const prods = rv.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean).slice(0, 4);
  if (prods.length < 2) return;
  sec.style.display = 'block';
  grid.innerHTML = prods.map(p => renderProductCard(p)).join('');
  updateWishlistButtons();
  triggerReveal();
}

/* ════════════════════════════════════════
   SCROLL REVEAL
════════════════════════════════════════ */
function triggerReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed)').forEach(el => observer.observe(el));

  document.querySelectorAll('.section-header:not(.animated)').forEach(el => {
    const hObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('animated'); hObs.unobserve(e.target); }});
    }, { threshold: 0.1 });
    hObs.observe(el);
  });
}

/* ════════════════════════════════════════
   COUNTDOWN TIMER
════════════════════════════════════════ */
function startCountdown() {
  const endTime = Date.now() + (8 * 3600 + 45 * 60 + 30) * 1000;

  function update() {
    const rem = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
    const h = Math.floor(rem / 3600);
    const m = Math.floor((rem % 3600) / 60);
    const s = rem % 60;
    const pad = n => String(n).padStart(2, '0');

    const hEl = document.getElementById('countHours');
    const mEl = document.getElementById('countMins');
    const sEl = document.getElementById('countSecs');

    if (hEl) hEl.textContent = pad(h);
    if (mEl) mEl.textContent = pad(m);
    if (sEl) sEl.textContent = pad(s);

    if (rem > 0) requestAnimationFrame(() => setTimeout(update, 1000));
  }
  update();
}

/* ════════════════════════════════════════
   MOBILE SEARCH OVERLAY
════════════════════════════════════════ */
/* ════════════════════════════════════════
   SEARCH PANEL  (right-side drawer, all devices)
════════════════════════════════════════ */
/* ════════════════════════════════════════
   SMART SEARCH ENGINE
   Multi-word (any order), synonym-aware, and typo-tolerant.
════════════════════════════════════════ */
const SEARCH_SYNONYMS = {
  'tv':'television','tvs':'television','televisions':'television','telly':'television',
  'ac':'air conditioner','acs':'air conditioner','aircon':'air conditioner','aircondition':'air conditioner','airconditioner':'air conditioner','aircons':'air conditioner',
  'fridge':'refrigerator','fridges':'refrigerator','refrigerators':'refrigerator','freezer':'refrigerator','freezers':'refrigerator',
  'washer':'washing machine','washers':'washing machine','laundry':'washing machine','washingmachine':'washing machine','washingmachines':'washing machine',
  'speaker':'audio','speakers':'audio','sound':'audio','soundsystem':'audio','soundbar':'audio','soundbars':'audio',
  'micro':'microwave','microwaves':'microwave',
};

function _levenshtein(a, b) {
  if (a === b) return 0;
  const al = a.length, bl = b.length;
  if (al === 0) return bl;
  if (bl === 0) return al;
  if (Math.abs(al - bl) > 2) return 99; // quick bail for obviously-unrelated lengths
  let prev = Array.from({ length: bl + 1 }, (_, i) => i);
  for (let i = 1; i <= al; i++) {
    const cur = [i];
    for (let j = 1; j <= bl; j++) {
      cur[j] = a[i - 1] === b[j - 1] ? prev[j - 1] : 1 + Math.min(prev[j - 1], prev[j], cur[j - 1]);
    }
    prev = cur;
  }
  return prev[bl];
}

function _tokenize(str) {
  return str.toLowerCase().replace(/['"″]/g, '"').split(/\s+/).map(t => t.trim()).filter(Boolean);
}

function smartSearch(index, query, skuMap) {
  skuMap = skuMap || {};
  const qTokens = _tokenize(query);
  if (!qTokens.length) return [];
  const fullQuery = qTokens.join(' ');

  function scoreItem(item) {
    const hay = (item.searchText || (item.text + ' ' + (item.sub || ''))).toLowerCase();
    const sku = (skuMap[item.id] || '').toLowerCase();
    const words = hay.split(/\s+/);

    let score = 0, matchedTokens = 0;
    for (const qt of qTokens) {
      const expanded = SEARCH_SYNONYMS[qt] || qt;
      if (sku && sku.includes(qt)) { matchedTokens++; score += 4; continue; }
      if (hay.includes(qt) || hay.includes(expanded)) {
        matchedTokens++;
        score += hay.startsWith(qt) ? 3 : 2;
        continue;
      }
      // Typo-tolerant fallback: allow small edit distance against any word,
      // scaled to word length so short words aren't over-matched.
      const maxDist = qt.length >= 6 ? 2 : (qt.length >= 4 ? 1 : 0);
      const close = maxDist > 0 && words.some(w => w.length >= 3 && _levenshtein(w, qt) <= maxDist);
      if (close) { matchedTokens++; score += 1; }
    }
    if (matchedTokens === 0) return 0;

    if (hay.includes(fullQuery)) score += 4;                 // whole phrase present
    if (item.text.toLowerCase() === query) score += 6;       // exact name match
    score += (matchedTokens / qTokens.length) * 3;            // reward full token coverage
    return score;
  }

  return index
    .map(item => ({ item, score: scoreItem(item) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item);
}

function initSearchPanel() {
  const panel    = document.getElementById('searchPanel');
  const backdrop = document.getElementById('searchPanelBackdrop');
  const closeBtn = document.getElementById('searchPanelClose');
  const input    = document.getElementById('searchPanelInput');
  const sugs     = document.getElementById('searchPanelSugs');
  const toggle   = document.getElementById('searchToggle');
  if (!panel || !input) return;

  function openPanel() {
    const skuMap = {};
    (typeof PRODUCTS !== 'undefined' ? PRODUCTS : []).forEach(p => { if (p.model) skuMap[p.id] = p.model.toLowerCase(); });
    panel._skuMap = skuMap;
    panel.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => { try { input.focus(); } catch(e){} }, 80);
  }
  function closePanel() {
    panel.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
    input.value = '';
    sugs.innerHTML = '';
  }
  function doSearch() {
    const q = input.value.trim();
    if (!q) return;
    window.location.href = `shop.html?q=${encodeURIComponent(q)}`;
  }

  if (toggle) {
    toggle.addEventListener('click', openPanel);
    toggle.addEventListener('touchend', e => { e.preventDefault(); openPanel(); }, { passive: false });
  }
  if (closeBtn) closeBtn.addEventListener('click', closePanel);
  if (backdrop) backdrop.addEventListener('click', closePanel);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });
  input.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { sugs.innerHTML = ''; return; }
    const skuMap = panel._skuMap || {};
    const idx = (typeof SEARCH_INDEX !== 'undefined' ? SEARCH_INDEX : []);
    const matches = smartSearch(idx, q, skuMap).slice(0, 8);
    if (!matches.length) { sugs.innerHTML = '<div style="padding:20px 14px;color:var(--text-muted);font-size:14px">No results found</div>'; return; }

    sugs.innerHTML = matches.map(item => {
      if (item.type === 'product') {
        const p = (typeof PRODUCTS !== 'undefined' ? PRODUCTS : []).find(x => x.id === item.id);
        const imgHtml = p && p.images && p.images[0]
          ? `<img src="${p.images[0]}" class="sug-thumb" onerror="this.style.display='none';this.nextSibling.style.display='flex'">`
          : '';
        const fallback = `<span class="sug-thumb-fallback" style="${p && p.images && p.images[0] ? 'display:none' : ''}">${item.icon}</span>`;
        const priceHtml = p ? `<span class="sug-price">${fmt(p.price)}</span>` : '';
        const skuText = skuMap[item.id] ? `<span class="sug-sku">${skuMap[item.id].toUpperCase()}</span>` : '';
        return `
          <div class="search-panel-sug-item" onclick="handleSearchSelect('product','${item.id}','${item.text.replace(/'/g,"\\'").replace(/"/g,'&quot;')}');window.closeSearchPanel&&window.closeSearchPanel()">
            <div class="sug-img-wrap">${imgHtml}${fallback}</div>
            <div class="sug-info">
              <div class="sug-name">${highlightMatch(item.text, q)}</div>
              <div class="sug-meta">${item.sub}${skuText ? ' · ' : ''}${skuText}</div>
              ${priceHtml}
            </div>
          </div>`;
      } else {
        const label = item.type === 'category' ? 'Browse Category' : 'Browse Brand';
        const bg = item.type === 'category' ? '#eff6ff' : '#f0fdf4';
        return `
          <div class="search-panel-sug-item sug-item-nav" onclick="handleSearchSelect('${item.type}','${item.id}','${item.text.replace(/'/g,"\\'").replace(/"/g,'&quot;')}');window.closeSearchPanel&&window.closeSearchPanel()">
            <div class="sug-thumb-fallback" style="background:${bg}">${item.icon}</div>
            <div class="sug-info">
              <div class="sug-name">${highlightMatch(item.text, q)}</div>
              <div class="sug-meta">${label} · ${item.sub}</div>
            </div>
            <i class="fas fa-chevron-right" style="font-size:11px;color:var(--text-muted);margin-left:auto"></i>
          </div>`;
      }
    }).join('');
  });

  window.openMobileSearch  = openPanel;
  window.closeSearchPanel  = closePanel;
}

function initSearch() { /* replaced by initSearchPanel — kept as stub */ }

function handleSearchSelect(type, id, text) {
  const el = document.getElementById('searchSuggestions');
  if (el) el.classList.remove('active');
  if (type === 'product') openProduct(id);
  else if (type === 'category') { showPageLoadingOverlay(); window.location.href = `shop.html?cat=${id}`; }
  else if (type === 'brand') { showPageLoadingOverlay(); window.location.href = `shop.html?brand=${id}`; }
}

function highlightMatch(str, q) {
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return str.replace(re, '<mark style="background:rgba(29,78,216,0.12);color:var(--primary);border-radius:2px">$1</mark>');
}

function capitalise(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ════════════════════════════════════════
   SIDEBAR TOGGLES
════════════════════════════════════════ */
function initSidebars() {
  const overlay = document.getElementById('overlay');
  const cartSidebar = document.getElementById('cartSidebar');
  const wishlistSidebar = document.getElementById('wishlistSidebar');
  const accountModal = document.getElementById('accountModal');

  function openCart() {
    cartSidebar?.classList.add('open');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    cartSidebar?.classList.remove('open');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }
  function openWishlist() {
    wishlistSidebar?.classList.add('open');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeWishlist() {
    wishlistSidebar?.classList.remove('open');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }
  function openAccount() {
    // Always reopen on the signup form, not stuck on a previous "welcome"
    // state from earlier in the same visit.
    document.getElementById('signupWelcomeView')?.style.setProperty('display', 'none');
    document.getElementById('signupFormView')?.style.setProperty('display', 'block');
    accountModal?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeAccount() {
    accountModal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.getElementById('cartToggle')?.addEventListener('click', openCart);
  document.getElementById('closeCart')?.addEventListener('click', closeCart);
  document.getElementById('wishlistToggle')?.addEventListener('click', openWishlist);
  document.getElementById('closeWishlist')?.addEventListener('click', closeWishlist);
  document.getElementById('accountToggle')?.addEventListener('click', openAccount);
  document.getElementById('closeAccount')?.addEventListener('click', closeAccount);

  overlay?.addEventListener('click', () => { closeCart(); closeWishlist(); });
  accountModal?.addEventListener('click', e => { if (e.target === accountModal) closeAccount(); });

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeCart(); closeWishlist(); closeAccount(); }
  });
}

/* ════════════════════════════════════════
   TRUST STRIP MARQUEE (mobile only)
════════════════════════════════════════ */
function initTrustMarquee() {
  if (window.innerWidth >= 768) return;
  const strip = document.querySelector('.trust-strip');
  const inner = document.querySelector('.trust-inner');
  if (!strip || !inner) return;
  strip.style.overflow = 'hidden';
  startCardMarquee(inner, strip, 0.45);
}

/* ════════════════════════════════════════
   HEADER SCROLL EFFECTS
════════════════════════════════════════ */
function initDesktopDropdowns() {
  if (window.innerWidth < 1024) return;
  document.querySelectorAll('.has-dropdown').forEach(li => {
    const dd = li.querySelector(':scope > .dropdown');
    if (!dd) return;
    let hideTimer;
    const open  = () => { clearTimeout(hideTimer); dd.style.opacity = '1'; dd.style.visibility = 'visible'; dd.style.transform = 'translateY(0)'; };
    const close = () => { hideTimer = setTimeout(() => { dd.style.opacity = ''; dd.style.visibility = ''; dd.style.transform = ''; }, 220); };
    li.addEventListener('mouseenter', open);
    li.addEventListener('mouseleave', close);
    dd.addEventListener('mouseenter', () => clearTimeout(hideTimer));
    dd.addEventListener('mouseleave', close);
  });
}

function initHeaderScroll() {
  const header = document.getElementById('mainHeader');
  const backToTop = document.getElementById('backToTop');
  const scrollBar = document.createElement('div');
  scrollBar.className = 'scroll-progress';
  document.body.appendChild(scrollBar);

  window.addEventListener('scroll', () => {
    const scrollPct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    scrollBar.style.width = scrollPct + '%';

    if (window.scrollY > 80) {
      header?.classList.add('scrolled');
      backToTop?.classList.add('visible');
    } else {
      header?.classList.remove('scrolled');
      backToTop?.classList.remove('visible');
    }
  }, { passive: true });

  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ════════════════════════════════════════
   MOBILE NAV
════════════════════════════════════════ */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');
  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });

  // Mega / dropdown toggles on mobile
  document.querySelectorAll('.has-mega > .nav-link, .has-dropdown > .nav-link').forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });
}

/* ════════════════════════════════════════
   PRODUCT TABS
════════════════════════════════════════ */
function initProductTabs() {
  document.querySelectorAll('.tab-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.tab-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.getAttribute('data-filter');
      visibleCount = 8;
      renderFeaturedProducts(filter);
    });
  });

  const lmBtn = document.getElementById('loadMoreBtn');
  lmBtn?.addEventListener('click', loadMore);
}

/* ════════════════════════════════════════
   ACCOUNT MODAL (Stay Updated signup)
════════════════════════════════════════ */
function initModalTabs() {
  document.getElementById('registerForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const firstName = document.getElementById('reg_fname')?.value.trim() || '';
    const lastName  = document.getElementById('reg_lname')?.value.trim() || '';
    const email     = document.getElementById('reg_email')?.value.trim() || '';
    const phone     = document.getElementById('reg_phone')?.value.trim() || '';
    if (email) saveCustomerSignup({ firstName, lastName, email, phone });
    // Show the welcome moment in-place rather than just closing the modal —
    // a proper, personal acknowledgment instead of a passing toast.
    const welcomeName = document.getElementById('welcomeName');
    if (welcomeName) welcomeName.textContent = firstName || 'there';
    document.getElementById('signupFormView')?.style.setProperty('display', 'none');
    document.getElementById('signupWelcomeView')?.style.setProperty('display', 'block');
    e.target.reset();
  });
}

// Saves a "stay updated" signup as a simple contact record the admin can see
// and use for marketing outreach — this is NOT a real login/account system,
// just a lightweight list. Re-registering with the same email updates their
// details rather than creating a duplicate entry.
function saveCustomerSignup({ firstName, lastName, email, phone }) {
  try {
    const customers = JSON.parse(localStorage.getItem('obv_customers') || '[]');
    const existing = customers.find(c => c.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      Object.assign(existing, { firstName, lastName, phone, updatedAt: new Date().toISOString() });
    } else {
      customers.push({ id: Date.now(), firstName, lastName, email, phone, createdAt: new Date().toISOString() });
    }
    localStorage.setItem('obv_customers', JSON.stringify(customers));
    if (typeof sbPush === 'function') sbPush('obv_customers');
  } catch(e) {}
}

/* ════════════════════════════════════════
   NEWSLETTER
════════════════════════════════════════ */
function initNewsletter() {
  document.getElementById('newsletterForm')?.addEventListener('submit', e => {
    e.preventDefault();
    showToast('success', 'Subscribed!', "You're now on the list. Watch out for exclusive deals!", 'fas fa-envelope-open-text');
    e.target.reset();
  });
}

/* ════════════════════════════════════════
   MEGA MENU BACKDROP
════════════════════════════════════════ */
function initMegaBackdrop() {
  const items = document.querySelectorAll('.has-mega, .has-dropdown');
  if (!items.length) return;
  items.forEach(item => {
    item.addEventListener('mouseenter', () => document.body.classList.add('mega-open'));
    item.addEventListener('mouseleave', () => document.body.classList.remove('mega-open'));
  });
}

/* ════════════════════════════════════════
   INIT ALL
════════════════════════════════════════ */
/* ── Visit Tracker ── */
async function trackVisit() {
  if (sessionStorage.getItem('obv_v')) return;
  sessionStorage.setItem('obv_v', '1');
  try {
    let geo = {};
    try {
      const gr = await fetch('https://ipapi.co/json/');
      if (gr.ok) {
        const gd = await gr.json();
        geo = { country: gd.country_name || '', city: gd.city || '', ip: gd.ip || '' };
      }
    } catch(e) {}
    const visit = {
      t: new Date().toISOString(),
      p: location.pathname.split('/').pop() || 'index.html',
      country: geo.country || 'Unknown',
      city: geo.city || '',
      ip: geo.ip || ''
    };
    const h = { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` };
    const r = await fetch(`${SB_URL}/rest/v1/kv_store?key=eq.obv_visit_log`, { headers: h });
    const rows = await r.json();
    let log = [];
    try { log = JSON.parse(rows[0]?.value || '[]'); } catch(e) {}
    if (!Array.isArray(log)) log = [];
    log.unshift(visit);
    if (log.length > 500) log = log.slice(0, 500);
    await fetch(`${SB_URL}/rest/v1/kv_store`, {
      method: 'POST',
      headers: { ...h, 'Content-Type': 'application/json', Prefer: 'resolution=merge-duplicates' },
      body: JSON.stringify({ key: 'obv_visit_log', value: JSON.stringify(log) })
    });
  } catch(e) {}
}

document.addEventListener('DOMContentLoaded', async () => {
  /* Mobile search must be ready immediately — before the Supabase wait */
  try { initSearchPanel(); } catch(e) {}

  /* Free-delivery banner: apply the last-known saved threshold immediately
     from localStorage, rather than waiting on the Supabase sync below.
     This prevents the hardcoded "500" placeholder from flashing on screen
     before the real saved value (e.g. 7000) takes over. */
  try {
    const fdOffEarly = localStorage.getItem('obv_freeDelivery') === 'off';
    if (fdOffEarly) {
      document.querySelectorAll('.free-delivery-banner').forEach(el => el.style.display = 'none');
    } else {
      const settingsEarly = JSON.parse(localStorage.getItem('obv_settings') || '{}');
      const thresholdEarly = settingsEarly.deliveryThreshold !== undefined ? settingsEarly.deliveryThreshold : 500;
      document.querySelectorAll('.free-delivery-banner span').forEach(el => {
        el.textContent = el.textContent.replace(/[\d,]+(\.\d+)?/, thresholdEarly);
      });
    }
  } catch(e) {}

  /* Logo: apply the last-known saved branding (custom logo/size) immediately
     from localStorage, same reasoning as above — otherwise the default logo
     flashes on screen before the admin's custom logo swaps in once the
     Supabase fetch resolves. */
  try {
    const bEarly = JSON.parse(localStorage.getItem('obv_branding') || '{}');
    if (bEarly.logoUrl || bEarly.logoSize) {
      const urlEarly = bEarly.logoUrl || 'img/logo.jpeg';
      const sizeEarly = (bEarly.logoSize || 54) + 'px';
      document.querySelectorAll('.logo-img, .admin-logo-img').forEach(img => {
        img.src = urlEarly;
        img.style.height = sizeEarly;
        img.style.maxWidth = 'none';
      });
    }
  } catch(e) {}

  await Promise.race([window.obvSyncPromise || Promise.resolve(), new Promise(r => setTimeout(r, 3000))]);
  try { applyOverrides(); } catch(e) {}
  try { renderFaqs(); } catch(e) {}
  try { renderCategories(); } catch(e) {}
  try { renderFlashProducts(); } catch(e) {}
  try { renderFeaturedProducts(); } catch(e) {}
  try { renderBrands(); } catch(e) {}
  try { renderRecentlyViewed(); } catch(e) {}
  try {
    const html = BRANDS.map(b => `<li><a href="shop.html?brand=${b.id}">${b.name}</a></li>`).join('');
    const brandDd = document.getElementById('brandDropdown');
    if (brandDd) brandDd.innerHTML = html;
    /* Also populate the desktop nav brand dropdown */
    const deskBrandDd = document.getElementById('desktopBrandDropdown');
    if (deskBrandDd) deskBrandDd.innerHTML = html;
  } catch(e) {}
  try {
    // Homepage category dropdowns were previously hardcoded static HTML —
    // never reflected admin changes or subcategories at all. Now built the
    // same subcategory-aware way as the shop/product page nav dropdowns.
    const catHtml = buildCategoryDropdownHtml(CATEGORIES);
    const catDd = document.getElementById('catDropdown');
    if (catDd) catDd.innerHTML = catHtml;
    const deskCatDd = document.getElementById('desktopCatDropdown');
    if (deskCatDd) deskCatDd.innerHTML = catHtml;
    const footerCatList = document.getElementById('footerCatList');
    if (footerCatList) footerCatList.innerHTML = CATEGORIES.filter(c => !c.parentId).map(c => `<li><a href="shop.html?cat=${c.id}">${c.name}</a></li>`).join('');
  } catch(e) {}
  try { startCountdown(); } catch(e) {}
  try { initSearch(); } catch(e) {}
  try { initSearchPanel(); } catch(e) {}
  try { initTrustMarquee(); } catch(e) {}
  try { initSidebars(); } catch(e) {}
  try { initHeaderScroll(); } catch(e) {}
  try { initMobileNav(); } catch(e) {}
  try { initDesktopDropdowns(); } catch(e) {}
  try { initProductTabs(); } catch(e) {}
  try { initModalTabs(); } catch(e) {}
  try { initNewsletter(); } catch(e) {}
  try { initMegaBackdrop(); } catch(e) {}
  triggerReveal();

  // Failsafe: force-reveal any elements still hidden after 1.5s (catches IntersectionObserver misses on mobile)
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.revealed),.reveal-left:not(.revealed),.reveal-right:not(.revealed)')
      .forEach(el => el.classList.add('revealed'));
  }, 1500);

  setTimeout(() => {
    document.querySelectorAll('.section-header').forEach((el, i) => {
      setTimeout(() => el.classList.add('animated'), i * 120);
    });
  }, 300);

  try { trackVisit(); } catch(e) {}


  try {
    const fdOff = localStorage.getItem('obv_freeDelivery') === 'off';
    if (fdOff) {
      document.querySelectorAll('.free-delivery-banner').forEach(el => el.style.display = 'none');
    } else {
      document.documentElement.removeAttribute('data-no-delivery');
      document.querySelectorAll('.free-delivery-banner').forEach(el => el.style.display = '');
      // Update the GH₵ amount shown in every banner to match the saved threshold,
      // instead of leaving the hardcoded "500" placeholder from the source markup.
      const settings = JSON.parse(localStorage.getItem('obv_settings') || '{}');
      const threshold = settings.deliveryThreshold !== undefined ? settings.deliveryThreshold : 500;
      document.querySelectorAll('.free-delivery-banner span').forEach(el => {
        el.textContent = el.textContent.replace(/[\d,]+(\.\d+)?/, threshold);
      });
    }
    const flashEl = document.getElementById('flashSaleSection');
    if (flashEl) flashEl.style.display = localStorage.getItem('obv_flashSale') === 'on' ? '' : 'none';
  } catch(e) {}

  // Footer collapsible columns on mobile
  try {
    document.querySelectorAll('.footer-col h4').forEach(h4 => {
      if (h4.closest('.footer-contact-col')) return;
      h4.addEventListener('click', () => {
        if (window.innerWidth >= 1024) return;
        h4.classList.toggle('open');
        const ul = h4.nextElementSibling;
        if (ul) ul.classList.toggle('open');
      });
    });
  } catch(e) {}

});
