/* ================================================================
   ORBIVA – CART & WISHLIST
================================================================ */

/* ── State ── */
let cart = JSON.parse(localStorage.getItem('obv_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('obv_wishlist') || '[]');

/* ── Persist ── */
function saveCart() { localStorage.setItem('obv_cart', JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem('obv_wishlist', JSON.stringify(wishlist)); }

/* ── Format price ── */
function fmt(n) { return 'GH₵ ' + n.toLocaleString('en-GH', { minimumFractionDigits: 0, maximumFractionDigits: 0 }); }

/* ══════════════════════════════════════════
   CART
══════════════════════════════════════════ */
function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty = Math.min(existing.qty + quantity, 10);
  } else {
    cart.push({ id: product.id, name: product.name, brand: product.brand, icon: product.icon, image: (product.images && product.images[0]) || null, price: product.price, qty: quantity });
  }
  saveCart();
  updateCartUI();
  showToast('success', 'Added to Cart', `${product.name} has been added to your cart.`, 'fas fa-shopping-cart');
  showCartConfirmFloat(product.name);
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, Math.min(item.qty + delta, 10));
  if (item.qty === 0) { removeFromCart(productId); return; }
  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

function getCartTotal() {
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, i) => sum + i.qty, 0);
}

function updateCartUI() {
  const count = getCartCount();
  const total = getCartTotal();

  // Badge counts — hide when zero
  document.querySelectorAll('#cartCount').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
  document.querySelectorAll('#cartItemCount').forEach(el => el.textContent = count);
  document.querySelectorAll('#cartTotalLabel').forEach(el => el.textContent = fmt(total));
  document.querySelectorAll('#cartSubtotal').forEach(el => el.textContent = fmt(total));
  document.querySelectorAll('#cartTotal').forEach(el => el.textContent = fmt(total));
  // Bottom nav badge
  document.querySelectorAll('#bnavCartCount').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });

  const listEl = document.getElementById('cartItemsList');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');

  if (!listEl) return;

  if (cart.length === 0) {
    emptyEl.style.display = 'flex';
    listEl.innerHTML = '';
    if (footerEl) footerEl.style.display = 'none';
  } else {
    emptyEl.style.display = 'none';
    if (footerEl) footerEl.style.display = 'flex';
    listEl.innerHTML = cart.map(item => `
      <li class="cart-item" data-id="${item.id}">
        <div class="cart-item-img">${item.image ? `<img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:contain;padding:4px;border-radius:6px" onerror="this.onerror=null;this.parentNode.innerHTML='${item.icon}'">` : item.icon}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-brand">${item.brand}</div>
          <div class="cart-item-price">${fmt(item.price)}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
            <span style="margin-left:auto;font-size:13px;font-weight:700;color:var(--primary)">${fmt(item.price * item.qty)}</span>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Remove"><i class="fas fa-times"></i></button>
      </li>
    `).join('');
  }
}

/* ── Floating confirm ── */
function showCartConfirmFloat(name) {
  let el = document.querySelector('.cart-confirm-float');
  if (!el) {
    el = document.createElement('div');
    el.className = 'cart-confirm-float';
    document.body.appendChild(el);
  }
  el.innerHTML = `<i class="fas fa-check-circle"></i> <span>Added: ${name.substring(0, 28)}${name.length > 28 ? '…' : ''}</span>`;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2200);
}

/* ══════════════════════════════════════════
   WISHLIST
══════════════════════════════════════════ */
function toggleWishlist(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const idx = wishlist.findIndex(i => i.id === productId);
  if (idx >= 0) {
    wishlist.splice(idx, 1);
    showToast('warning', 'Removed from Wishlist', `${product.name} removed.`, 'fas fa-heart-broken');
  } else {
    wishlist.push({ id: product.id, name: product.name, brand: product.brand, icon: product.icon, image: (product.images && product.images[0]) || null, price: product.price, oldPrice: product.oldPrice });
    showToast('success', 'Added to Wishlist', `${product.name} saved to your wishlist.`, 'fas fa-heart');
  }
  saveWishlist();
  updateWishlistUI();
  // Refresh wishlist button states on cards
  updateWishlistButtons();
}

function isWishlisted(productId) {
  return wishlist.some(i => i.id === productId);
}

function updateWishlistUI() {
  const count = wishlist.length;
  document.querySelectorAll('#wishlistCount').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
  document.querySelectorAll('#wishlistItemCount').forEach(el => el.textContent = count);
  // Bottom nav badge
  document.querySelectorAll('#bnavWishCount').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });

  const listEl = document.getElementById('wishlistItemsList');
  const emptyEl = document.getElementById('wishlistEmpty');
  if (!listEl) return;

  if (wishlist.length === 0) {
    emptyEl.style.display = 'flex';
    listEl.innerHTML = '';
  } else {
    emptyEl.style.display = 'none';
    listEl.innerHTML = wishlist.map(item => `
      <li class="cart-item" data-id="${item.id}">
        <div class="cart-item-img">${item.image ? `<img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:contain;padding:4px;border-radius:6px" onerror="this.onerror=null;this.parentNode.innerHTML='${item.icon}'">` : item.icon}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-brand">${item.brand}</div>
          <div class="cart-item-price">${fmt(item.price)}
            ${item.oldPrice ? `<span class="product-old-price" style="font-size:12px;margin-left:8px">${fmt(item.oldPrice)}</span>` : ''}
          </div>
          <div class="cart-item-qty" style="margin-top:8px">
            <button class="qty-btn" onclick="addToCart('${item.id}')" style="background:var(--primary);color:#fff;width:auto;padding:0 10px;border-radius:var(--radius-full)">
              <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
            <button class="qty-btn" onclick="toggleWishlist('${item.id}')" style="color:var(--accent)" title="Remove from wishlist">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="toggleWishlist('${item.id}')" title="Remove"><i class="fas fa-times"></i></button>
      </li>
    `).join('');
  }
}

function updateWishlistButtons() {
  document.querySelectorAll('.prod-action-btn[data-wishlist]').forEach(btn => {
    const id = btn.getAttribute('data-wishlist');
    if (isWishlisted(id)) {
      btn.classList.add('wishlisted');
      btn.title = 'Remove from Wishlist';
    } else {
      btn.classList.remove('wishlisted');
      btn.title = 'Add to Wishlist';
    }
  });
}

/* ── Init cart & wishlist on page load ── */
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  updateWishlistUI();
});
