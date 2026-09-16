#!/usr/bin/env node
/**
 * Regenerates the static per-product SEO pages (/p/<id>.html) and
 * sitemap.xml from the LIVE catalog — the baked-in base catalog in
 * data.js, merged with whatever edits/additions/deletions currently exist
 * in Supabase (the same merge admin.html itself does in getAdminProducts()).
 *
 * This runs inside GitHub Actions, not in a browser, so it fetches
 * Supabase directly over HTTP instead of relying on a page having already
 * loaded it into localStorage.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SITE_ROOT = path.join(__dirname, '..');
const SB_URL = 'https://gvvzcudpcotoicnrhapz.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2dnpjdWRwY290b2ljbnJoYXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxODQ0MjgsImV4cCI6MjEwMjc2MDQyOH0.BCh__U3fedTDvh0S8UAiPs7o1SnsqqKwuf_56bywWUw';

async function fetchKv(key) {
  const res = await fetch(`${SB_URL}/rest/v1/kv_store?key=eq.${encodeURIComponent(key)}&select=value`, {
    headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` }
  });
  if (!res.ok) throw new Error(`Supabase fetch failed for ${key}: ${res.status}`);
  const rows = await res.json();
  if (!rows.length) return null;
  try { return JSON.parse(rows[0].value); } catch (e) { return null; }
}

function loadBaseCatalog() {
  // data.js is written for a browser (plain `const PRODUCTS = [...]`, no
  // module.exports) — wrapped in an IIFE that explicitly returns the
  // arrays, since `const`/`let` declarations (unlike `var`) don't become
  // properties on a vm context object even when run inside one.
  const code = fs.readFileSync(path.join(SITE_ROOT, 'js/data.js'), 'utf8');
  const wrapped = `(function(){\n${code}\nreturn { PRODUCTS, CATEGORIES };\n})()`;
  const result = vm.runInNewContext(wrapped, {});
  return { PRODUCTS: result.PRODUCTS || [], CATEGORIES: result.CATEGORIES || [] };
}

function mergeProducts(base, edits, adds, dels) {
  const delSet = new Set(dels || []);
  const editMap = edits || {};
  const merged = [
    ...base.filter(p => !delSet.has(p.id)).map(p => editMap[p.id] ? Object.assign({}, p, editMap[p.id]) : p),
    ...(adds || []).filter(p => !delSet.has(p.id)).map(p => editMap[p.id] ? Object.assign({}, p, editMap[p.id]) : p),
  ];
  return merged;
}

function escAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function setAttr(html, elemId, attr, value) {
  const re = new RegExp(`(<[^>]*\\bid="${elemId}"[^>]*\\b${attr}=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`Could not find id=${elemId} attr=${attr} in template`);
  return html.replace(re, `$1${escAttr(value)}$2`);
}

function generateProductPage(template, p) {
  const pid = String(p.id);
  const name = p.name || '';
  const brand = p.brand || '';
  const price = String(p.price || 0);
  const category = p.category || '';
  const descRaw = (p.description || '').replace(/\n/g, ' ').trim();
  const shortDesc = (descRaw || `${name} — available now at Orbiva Technologies, Ghana's premium electronics store.`).slice(0, 160);
  const images = (p.images || []).filter(u => typeof u === 'string' && u.startsWith('http'));
  const imgUrl = images[0] || 'https://orbivagh.com/img/logo.jpeg';
  const pageUrl = `https://orbivagh.com/p/${pid}.html`;
  const title = `${name} – Orbiva Technologies`;
  const sku = p.model || p.sku || pid;

  let out = template;
  out = out.replace('<title>Product – Orbiva Technologies</title>', `<title>${escAttr(title)}</title>`);
  out = setAttr(out, 'metaDescription', 'content', shortDesc);
  out = setAttr(out, 'canonicalLink', 'href', pageUrl);
  out = setAttr(out, 'ogTitle', 'content', title);
  out = setAttr(out, 'ogDescription', 'content', shortDesc);
  out = setAttr(out, 'ogImage', 'content', imgUrl);
  out = setAttr(out, 'ogUrl', 'content', pageUrl);
  out = setAttr(out, 'ogPriceAmount', 'content', price);
  out = setAttr(out, 'twTitle', 'content', title);
  out = setAttr(out, 'twDescription', 'content', shortDesc);
  out = setAttr(out, 'twImage', 'content', imgUrl);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name, image: images.length ? images : [imgUrl], description: shortDesc, sku,
    brand: { '@type': 'Brand', name: brand || 'Orbiva' },
    category,
    offers: {
      '@type': 'Offer', url: pageUrl, priceCurrency: 'GHS', price,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy', applicableCountry: 'GH',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 30, returnMethod: 'https://schema.org/ReturnInStore',
        returnFees: 'https://schema.org/FreeReturn'
      }
    }
  };
  const schemaJson = JSON.stringify(schema);
  out = out.replace(
    /(<script type="application\/ld\+json" id="productSchema">)\{\}(<\/script>)/,
    (_, a, b) => a + schemaJson + b
  );

  out = out.replace('<head>', `<head>\n  <script>window.__STATIC_PRODUCT_ID__=${JSON.stringify(pid)};</script>`);

  // This file lives one level deeper (/p/) than the site root
  out = out.replace(/(href|src)="(css\/|js\/|img\/)/g, '$1="../$2');
  out = out.replace(/href="(index\.html|shop\.html|product\.html|checkout\.html|contact\.html|track-order\.html)/g, 'href="../$1');

  return out;
}

const COMBO_CATEGORY_LABELS = { entertainment:'Entertainment', kitchen:'Kitchen & Cooking', cooling:'Cooling & Comfort',
  laundry:'Laundry & Cleaning', 'home-essentials':'New Home Essentials', refrigeration:'Refrigeration' };

function generateComboPage(template, combo, prods) {
  const cid = String(combo.id);
  const items = (combo.productIds || []).map(id => prods.find(p => String(p.id) === id)).filter(Boolean);
  const individualTotal = items.reduce((s, p) => s + (p.oldPrice || p.price || 0), 0);
  const savings = individualTotal - combo.comboPrice;
  const pageUrl = `https://orbivagh.com/combo/${cid}.html`;
  const title = `${combo.title} – Save GH₵${savings.toLocaleString()} | Orbiva Technologies`;
  const itemNames = items.map(p => p.name).join(' + ');
  const shortDesc = `${itemNames} — bundled together for GH₵${combo.comboPrice.toLocaleString()} instead of GH₵${individualTotal.toLocaleString()}. Save GH₵${savings.toLocaleString()} at Orbiva Technologies.`.slice(0, 160);
  const firstImg = (items[0] && items[0].images && items[0].images[0]) || 'https://orbivagh.com/img/logo.jpeg';

  let out = template;
  out = out.replace('<title>Combo Deals – Orbiva Technologies</title>', `<title>${escAttr(title)}</title>`);
  out = setAttr(out, 'metaDescription', 'content', shortDesc);
  out = setAttr(out, 'canonicalLink', 'href', pageUrl);
  out = setAttr(out, 'ogTitle', 'content', title);
  out = setAttr(out, 'ogDescription', 'content', shortDesc);
  out = setAttr(out, 'ogImage', 'content', firstImg);
  out = setAttr(out, 'ogUrl', 'content', pageUrl);
  out = setAttr(out, 'twTitle', 'content', title);
  out = setAttr(out, 'twDescription', 'content', shortDesc);
  out = setAttr(out, 'twImage', 'content', firstImg);

  // Baked-in structured data and visible HTML so Google (and anyone with
  // JS disabled) sees the actual bundle contents immediately — the same
  // reasoning as static product pages. The JS still re-renders this
  // identically on load for real visitors, so nothing looks different.
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: combo.title,
    image: items.map(p => (p.images && p.images[0])).filter(Boolean),
    description: shortDesc,
    brand: { '@type': 'Brand', name: 'Orbiva' },
    offers: {
      '@type': 'Offer', url: pageUrl, priceCurrency: 'GHS', price: String(combo.comboPrice),
      availability: 'https://schema.org/InStock', itemCondition: 'https://schema.org/NewCondition'
    }
  };
  const schemaScript = `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;

  const imagesHtml = items.map((p, i) => {
    const img = (p.images && p.images[0]) ? `<img src="${p.images[0]}" alt="${escAttr(p.name)}">` : `<div style="width:76px;height:76px;background:#eef2f7;border-radius:10px"></div>`;
    return (i > 0 ? '<span class="combo-plus">+</span>' : '') + img;
  }).join('');
  const staticCardHtml = `
    <div class="combo-card">
      <div class="combo-card-images">${imagesHtml}</div>
      <div class="combo-card-body">
        <div class="combo-card-title">${escAttr(combo.title)}</div>
        <div class="combo-card-items">${escAttr(itemNames)}</div>
        <div class="combo-price-row">
          <span class="combo-price-now">GH₵ ${combo.comboPrice.toLocaleString()}</span>
          <span class="combo-price-was">GH₵ ${individualTotal.toLocaleString()}</span>
        </div>
        <span class="combo-save-badge">Save GH₵ ${savings.toLocaleString()}</span>
      </div>
    </div>`;

  out = out.replace('<div class="combo-grid" id="comboGrid"></div>', `<div class="combo-grid" id="comboGrid">${staticCardHtml}</div>`);
  out = out.replace('<head>', `<head>\n  <script>window.__STATIC_COMBO_ID__=${JSON.stringify(cid)};</script>\n  ${schemaScript}`);

  // This file lives one level deeper (/combo/) than the site root
  out = out.replace(/(href|src)="(css\/|js\/|img\/)/g, '$1="../$2');
  out = out.replace(/href="(index\.html|shop\.html|product\.html|checkout\.html|contact\.html|track-order\.html|combo-deals\.html)/g, 'href="../$1');

  return out;
}

function rebuildSitemap(existingXml, products, combos) {
  let sitemap = existingXml.replace(
    /\s*<url>\s*<loc>https:\/\/orbivagh\.com\/product\.html\?id=[^<]*<\/loc>\s*<changefreq>[^<]*<\/changefreq>\s*<priority>[^<]*<\/priority>\s*<\/url>/g,
    ''
  );
  sitemap = sitemap.replace(
    /\s*<url>\s*<loc>https:\/\/orbivagh\.com\/p\/[^<]*<\/loc>\s*<changefreq>[^<]*<\/changefreq>\s*<priority>[^<]*<\/priority>\s*<\/url>/g,
    ''
  );
  sitemap = sitemap.replace(
    /\s*<url>\s*<loc>https:\/\/orbivagh\.com\/combo\/[^<]*<\/loc>\s*<changefreq>[^<]*<\/changefreq>\s*<priority>[^<]*<\/priority>\s*<\/url>/g,
    ''
  );
  const entries = products
    .filter(p => (p.images || []).some(u => typeof u === 'string' && u.startsWith('http')) && !p.hidden)
    .map(p => `  <url>\n    <loc>https://orbivagh.com/p/${p.id}.html</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`)
    .join('\n');
  const comboEntries = (combos || [])
    .filter(c => c.active !== false)
    .map(c => `  <url>\n    <loc>https://orbivagh.com/combo/${c.id}.html</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`)
    .join('\n');
  return sitemap.replace('</urlset>', entries + '\n' + comboEntries + '\n</urlset>');
}

async function main() {
  console.log('Fetching live catalog data from Supabase...');
  const [edits, adds, dels, comboDeals] = await Promise.all([
    fetchKv('obv_prod_edits'),
    fetchKv('obv_prod_adds'),
    fetchKv('obv_prod_dels'),
    fetchKv('obv_combo_deals'),
  ]);

  const { PRODUCTS } = loadBaseCatalog();
  const merged = mergeProducts(PRODUCTS, edits, adds, dels);
  console.log(`Merged catalog: ${merged.length} products`);

  const template = fs.readFileSync(path.join(SITE_ROOT, 'product.html'), 'utf8');
  const outDir = path.join(SITE_ROOT, 'p');
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  let count = 0;
  for (const p of merged) {
    if (!p.id || p.hidden) continue;
    const html = generateProductPage(template, p);
    fs.writeFileSync(path.join(outDir, `${p.id}.html`), html, 'utf8');
    count++;
  }
  console.log(`Generated ${count} static product pages`);

  const combos = (comboDeals || []).filter(c => c.active !== false && c.id && (c.productIds || []).length >= 2);
  const comboTemplate = fs.readFileSync(path.join(SITE_ROOT, 'combo-deals.html'), 'utf8');
  const comboOutDir = path.join(SITE_ROOT, 'combo');
  fs.rmSync(comboOutDir, { recursive: true, force: true });
  fs.mkdirSync(comboOutDir, { recursive: true });

  let comboCount = 0;
  for (const c of combos) {
    const items = c.productIds.map(id => merged.find(p => String(p.id) === id)).filter(Boolean);
    if (items.length < 2) continue;
    const html = generateComboPage(comboTemplate, c, merged);
    fs.writeFileSync(path.join(comboOutDir, `${c.id}.html`), html, 'utf8');
    comboCount++;
  }
  console.log(`Generated ${comboCount} static combo deal pages`);

  const sitemapPath = path.join(SITE_ROOT, 'sitemap.xml');
  const existingSitemap = fs.readFileSync(sitemapPath, 'utf8');
  const newSitemap = rebuildSitemap(existingSitemap, merged, combos);
  fs.writeFileSync(sitemapPath, newSitemap, 'utf8');
  console.log('Sitemap rebuilt');
}

if (require.main === module) {
  main().catch(err => { console.error(err); process.exit(1); });
}

module.exports = { generateProductPage, generateComboPage, rebuildSitemap, mergeProducts, loadBaseCatalog };
