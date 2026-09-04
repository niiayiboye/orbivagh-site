/* ================================================================
   ORBIVA – SHOP PAGE LOGIC
================================================================ */

/* ── Read URL params ── */
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    cat: params.get('cat') || '',
    brand: params.get('brand') || '',
    q: params.get('q') || '',
    filter: params.get('filter') || '',
    sub: params.get('sub') || ''
  };
}

/* ── Sub-category keyword map ── */
const SUB_KEYWORDS = {
  uhd:    ['uhd','4k'],
  miniled:['mini-led','mini led','qned'],
  side:   ['side-by-side','side by side'],
  french: ['french door','french-door'],
  single: ['single door','single-door'],
  double: ['double door','double-door'],
  front:  ['front load','front-load','front loader'],
  top:    ['top load','top-load','top loader'],
  combo:  ['washer-dryer','washer dryer'],
  soundbar: ['soundbar','sound bar'],
  tower:    ['sound tower'],
  earbuds:  ['flybuds','earbuds','earbud','tws'],
};
const SUB_TITLES = {
  uhd:'UHD / 4K',qled:'QLED',oled:'OLED',miniled:'Mini-LED',smart:'Smart',
  split:'Split',window:'Window',portable:'Portable',inverter:'Inverter',central:'Central',
  single:'Single Door',double:'Double Door',side:'Side-by-Side',french:'French Door',mini:'Mini',
  front:'Front Load',top:'Top Load',dryer:'Dryer',combo:'Washer-Dryer Combo',
  soundbar:'Soundbars',tower:'Sound Towers',earbuds:'Earbuds & TWS'
};
function applySubFilter(products, sub) {
  if (!sub) return products;
  const keywords = SUB_KEYWORDS[sub] || [sub];
  return products.filter(p => {
    const hay = (p.name + ' ' + (p.tags||[]).join(' ')).toLowerCase();
    return keywords.some(kw => hay.includes(kw));
  });
}

/* ── Shop page init ── */
function initShopPage() {
  if (!document.getElementById('shopProductsGrid')) return;

  const { cat, brand, q, filter, sub } = getUrlParams();
  let filtered = [...PRODUCTS];

  // Apply filters from URL. If `cat` is a parent category, also include
  // products from its subcategories — e.g. filtering "Refrigerators" should
  // show products filed under a "Mini Fridges" subcategory too.
  if (cat) {
    const childIds = CATEGORIES.filter(c => c.parentId === cat).map(c => c.id);
    const catIds = new Set([cat, ...childIds]);
    filtered = filtered.filter(p => catIds.has(p.category));
  }
  if (brand)  filtered = filtered.filter(p => p.brandId === brand || p.brand.toLowerCase() === brand.toLowerCase());
  if (q) {
    // Use the same smart search engine as the search panel dropdown —
    // multi-word (any order), synonym-aware, typo-tolerant — instead of a
    // separate, more basic substring check that lived here before.
    const skuMap = {};
    PRODUCTS.forEach(p => { if (p.model) skuMap[p.id] = p.model; });
    const productIndex = (typeof SEARCH_INDEX !== 'undefined' ? SEARCH_INDEX : []).filter(i => i.type === 'product');
    const ranked = smartSearch(productIndex, q, skuMap);
    const rankMap = new Map(ranked.map((item, i) => [item.id, i]));
    filtered = filtered.filter(p => rankMap.has(p.id));
    filtered.sort((a, b) => rankMap.get(a.id) - rankMap.get(b.id));
  }
  if (sub)    filtered = applySubFilter(filtered, sub);
  if (filter === 'deals' || filter === 'flash') filtered = filtered.filter(p => p.flashSale || p.discount >= 25);
  if (filter === 'clearance') filtered = filtered.filter(p => p.discount >= 30);

  // Default landing view (no search active) — shuffle instead of raw
  // catalog order, which is heavily grouped by category since that's how
  // the source CSV was structured. Search results keep their relevance
  // ranking instead.
  if (!q) filtered = getShuffleOrder(filtered);

  // Admin-added products float to top
  const addedIds = new Set(
    JSON.parse(localStorage.getItem('obv_prod_adds') || '[]').map(p => String(p.id))
  );
  if (addedIds.size) {
    filtered.sort((a, b) => {
      const aNew = addedIds.has(String(a.id)) ? 1 : 0;
      const bNew = addedIds.has(String(b.id)) ? 1 : 0;
      return bNew - aNew;
    });
  }

  renderShopGrid(filtered);
  setupShopFilters(cat, brand, q, sub);
  updateResultCount(filtered.length);

  // Set page title
  const pageTitle = document.getElementById('shopPageTitle');
  if (pageTitle) {
    if (cat) {
      const catData = CATEGORIES.find(c => c.id === cat);
      const catName = catData ? catData.name : 'Products';
      pageTitle.textContent = sub && SUB_TITLES[sub] ? SUB_TITLES[sub] + ' ' + catName : catName;
    } else if (brand) {
      const brandData = BRANDS.find(b => b.id === brand);
      pageTitle.textContent = brandData ? brandData.name + ' Products' : 'Brand Products';
    } else if (q) {
      pageTitle.textContent = `Search: "${q}"`;
    } else {
      pageTitle.textContent = 'All Products';
    }
  }
}

// Rendering every matching product at once meant a large category could
// fire off dozens of image requests simultaneously — especially painful
// since product images are hosted on Google Drive's thumbnail service,
// which is noticeably slower under load than a real image CDN and doesn't
// handle a burst of concurrent requests gracefully. Paginating keeps the
// initial batch small regardless of how big the category is.
const SHOP_PAGE_SIZE = 16;
let _shopFullList = [];
let _shopShownCount = 0;

function renderShopGrid(products) {
  const grid = document.getElementById('shopProductsGrid');
  if (!grid) return;
  _shopFullList = products;
  _shopShownCount = 0;
  if (products.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-muted)">
        <i class="fas fa-search" style="font-size:48px;opacity:.2;margin-bottom:16px;display:block"></i>
        <h3 style="font-size:18px;margin-bottom:8px">No products found</h3>
        <p>Try adjusting your filters or <a href="shop.html" style="color:var(--primary)">browse all products</a>.</p>
      </div>`;
    document.getElementById('shopLoadMoreWrap').style.display = 'none';
    return;
  }
  grid.innerHTML = '';
  appendNextShopBatch();
}

function appendNextShopBatch() {
  const grid = document.getElementById('shopProductsGrid');
  const wrap = document.getElementById('shopLoadMoreWrap');
  const batch = _shopFullList.slice(_shopShownCount, _shopShownCount + SHOP_PAGE_SIZE);
  grid.insertAdjacentHTML('beforeend', batch.map(p => renderProductCard(p)).join(''));
  _shopShownCount += batch.length;
  updateWishlistButtons();
  triggerReveal();
  if (wrap) wrap.style.display = (_shopShownCount < _shopFullList.length) ? 'block' : 'none';
}

function loadMoreShopProducts() {
  appendNextShopBatch();
}

// Stable per-visit shuffle: each product gets a fixed random key the first
// time it's needed, then reused for the rest of the session — so "Featured"
// order looks naturally varied instead of the raw catalog order (which is
// heavily grouped by category), without re-shuffling every time a filter
// changes.
let _shopShuffleSeed = null;
function getShuffleOrder(products) {
  if (!_shopShuffleSeed) {
    _shopShuffleSeed = new Map();
    PRODUCTS.forEach(p => _shopShuffleSeed.set(p.id, Math.random()));
  }
  return [...products].sort((a, b) => (_shopShuffleSeed.get(a.id) || 0) - (_shopShuffleSeed.get(b.id) || 0));
}

function setupShopFilters(urlCat, urlBrand, urlQ, sub) {
  const sortSelect = document.getElementById('shopSort');
  const priceRange = document.getElementById('priceRange');
  const priceLabel = document.getElementById('priceLabelValue');

  // Base pool: all products, only non-sidebar URL filters applied (text search, sub-category)
  // Sidebar checkboxes (category, brand) work on this full pool — so unchecking never breaks results
  let baseProducts = [...PRODUCTS];
  if (urlQ) {
    // Use the same smart search engine as the search panel dropdown —
    // multi-word (any order), synonym-aware, typo-tolerant — instead of the
    // old plain substring check on just name+brand.
    const skuMap = {};
    PRODUCTS.forEach(p => { if (p.model) skuMap[p.id] = p.model; });
    const productIndex = (typeof SEARCH_INDEX !== 'undefined' ? SEARCH_INDEX : []).filter(i => i.type === 'product');
    const matchedIds = new Set(smartSearch(productIndex, urlQ, skuMap).map(i => i.id));
    baseProducts = baseProducts.filter(p => matchedIds.has(p.id));
  }
  if (sub) baseProducts = applySubFilter(baseProducts, sub);

  // Set price range max from base products
  if (priceRange && baseProducts.length) {
    const maxPrice = Math.max(...baseProducts.map(p => p.price));
    const roundedMax = Math.ceil(maxPrice / 1000) * 1000;
    priceRange.max   = roundedMax;
    priceRange.value = roundedMax;
    if (priceLabel) priceLabel.textContent = fmt(roundedMax);
    const lastPriceLabel = document.querySelector('.price-labels span:last-child');
    if (lastPriceLabel) lastPriceLabel.textContent = fmt(roundedMax);
  }

  function applyFilters() {
    let filtered = [...baseProducts];

    // Price filter
    if (priceRange) {
      const maxVal = parseInt(priceRange.value);
      filtered = filtered.filter(p => p.price <= maxVal);
    }

    // Category checkboxes — source of truth (not URL). Checking a
    // top-level category also matches everything filed under its
    // subcategories, not just products tagged with that exact id directly —
    // otherwise checking "Refrigerators" itself would show almost nothing,
    // since most fridges are actually tagged with a specific subcategory
    // like "Top Mount" or "Side-by-Side".
    const catChecks = [...document.querySelectorAll('.cat-filter-check:checked')].map(c => c.value);
    const expandedCatChecks = new Set(catChecks);
    catChecks.forEach(id => {
      CATEGORIES.filter(c => c.parentId === id).forEach(sub => expandedCatChecks.add(sub.id));
    });
    if (expandedCatChecks.size) filtered = filtered.filter(p => expandedCatChecks.has(p.category));

    // Brand checkboxes — source of truth (not URL)
    const brandChecks = [...document.querySelectorAll('.brand-filter-check:checked')].map(b => b.value);
    if (brandChecks.length) filtered = filtered.filter(p =>
      brandChecks.includes(p.brandId) || brandChecks.includes(p.brand?.toLowerCase())
    );

    // Rating filter
    const minRating = parseFloat(document.querySelector('input[name="rating"]:checked')?.value || 0);
    if (minRating) filtered = filtered.filter(p => p.rating >= minRating);

    // Sort
    if (sortSelect) {
      const adds = JSON.parse(localStorage.getItem('obv_prod_adds') || '[]');
      const addedIds = new Set(adds.map(p => String(p.id)));
      switch (sortSelect.value) {
        case 'featured':
          // Default view — shuffle instead of showing raw catalog order
          // (heavily grouped by category), but leave search results ranked
          // by relevance rather than randomized.
          if (!urlQ) filtered = getShuffleOrder(filtered);
          break;
        case 'price-asc':  filtered.sort((a, b) => a.price - b.price); break;
        case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
        case 'rating':     filtered.sort((a, b) => (b.rating||0) - (a.rating||0)); break;
        case 'discount':   filtered.sort((a, b) => (b.discount||0) - (a.discount||0)); break;
        case 'newest':
          filtered.sort((a, b) => {
            const aNew = addedIds.has(String(a.id)) ? 1 : 0;
            const bNew = addedIds.has(String(b.id)) ? 1 : 0;
            return bNew - aNew;
          });
          break;
      }
    }

    renderShopGrid(filtered);
    updateResultCount(filtered.length);
  }

  sortSelect?.addEventListener('change', applyFilters);
  priceRange?.addEventListener('input', () => {
    if (priceLabel) priceLabel.textContent = fmt(parseInt(priceRange.value));
    applyFilters();
  });

  document.querySelectorAll('.cat-filter-check, .brand-filter-check').forEach(cb => {
    cb.addEventListener('change', applyFilters);
  });

  document.querySelectorAll('input[name="rating"]').forEach(r => {
    r.addEventListener('change', applyFilters);
  });
}

function updateResultCount(count) {
  const el = document.getElementById('resultsCount');
  if (el) el.textContent = `${count} product${count !== 1 ? 's' : ''} found`;
}
