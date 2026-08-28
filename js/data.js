/* ================================================================
   ORBIVA – DATA LAYER
   Source: orbiva-products-2026-08-19.csv (288 products)
   Rebuilt: 2026-08-19
   Catalog is baked directly into this static file (not just added via
   the admin panel) so every product page physically exists in the site
   Google crawls — needed for individual products to be indexable and
   included in the sitemap.
================================================================ */

const DATA_VERSION = '2026-08-19-full-catalog';

/* ── CATEGORIES ── */
const CATEGORIES = [
  {
    "id": "tv",
    "name": "Televisions",
    "icon": "fas fa-tv",
    "count": 38,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#1d4ed8,#3b82f6)"
  },
  {
    "id": "audio",
    "name": "Audio Devices",
    "icon": "fas fa-music",
    "count": 13,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#6d28d9,#a78bfa)"
  },
  {
    "id": "ac",
    "name": "Air Conditioners",
    "icon": "fas fa-snowflake",
    "count": 34,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#0ea5e9,#38bdf8)"
  },
  {
    "id": "fridge",
    "name": "Refrigerators",
    "icon": "fas fa-cube",
    "count": 124,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#0f766e,#14b8a6)"
  },
  {
    "id": "laundry",
    "name": "Washing Machines",
    "icon": "fas fa-tint",
    "count": 32,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#7c3aed,#a78bfa)"
  },
  {
    "id": "kitchen",
    "name": "Kitchen Appliances",
    "icon": "fas fa-utensils",
    "count": 39,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#b45309,#f59e0b)"
  },
  {
    "id": "small",
    "name": "Other Appliances",
    "icon": "fas fa-plug",
    "count": 7,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#be185d,#f472b6)"
  },
  {
    "id": "commercial",
    "name": "Commercial",
    "icon": "fas fa-industry",
    "count": 1,
    "color": "#fff",
    "bg": "linear-gradient(135deg,#475569,#94a3b8)"
  }
];

/* ── BRANDS ── */
const BRANDS = [
  {
    "id": "nasco",
    "name": "Nasco",
    "logo": "https://cdn.ghanafa.org/2023/05/NASCO.png",
    "color": "#e31e25",
    "products": 98
  },
  {
    "id": "samsung",
    "name": "Samsung",
    "logo": "img/samsung.webp",
    "color": "#1428a0",
    "products": 64
  },
  {
    "id": "tcl",
    "name": "TCL",
    "logo": "img/tcl.webp",
    "color": "#d40000",
    "products": 65
  },
  {
    "id": "midea",
    "name": "Midea",
    "logo": "img/midea.webp",
    "color": "#0066cc",
    "products": 61
  },
  {
    "id": "hifuture",
    "name": "HiFuture",
    "logo": "",
    "color": "#6d28d9",
    "products": 0
  }
];

/* ── PRODUCTS ── */
const PRODUCTS = [
  {
    "id": "samsung-ua32h5000fuxgh",
    "name": "Samsung 32'' LED FHD TV",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "UA32H5000FUXGH",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1lLdH4PFVBBthv9Bz68NFvA2nm7C0-Zn3%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Z4dIsjD-6xiSJIEQ819L4e1xp5Dkc-Xk%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Zfv_cmPzIHUu_zc-kA7lLRpGtVn2P2Qn%26sz%3Dw1000"
    ],
    "price": 2700.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "samsung",
      "tv",
      "top-deals"
    ],
    "description": "LED FHD TV\n32''",
    "oldPrice": 3399.0,
    "discount": 21
  },
  {
    "id": "samsung-ua43f6000fuxgh",
    "name": "Samsung 43'' LED FHD TV",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "UA43F6000FUXGH",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1GSjB4ONf8q_ei5cU8dePOLYJ6gQFXSrL%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1ovZ5aGbnhtq-u7wIK4XRCLsxhw7DwXVt%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1_1d7kJ_IN3d2ZQ-hWzrxxxT8pYseGVf1%26sz%3Dw1000"
    ],
    "price": 3870.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "samsung",
      "tv",
      "top-deals"
    ],
    "description": "LED FHD TV\n43''",
    "oldPrice": 5299.0,
    "discount": 27
  },
  {
    "id": "samsung-ua43u8000fuxgh",
    "name": "Samsung 43'' UHD 4K Smart TV",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "UA43U8000FUXGH",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1iJ5Zrv5lDmJjPxziFvfqLzfjqZTwdQQX%26sz%3Dw1000"
    ],
    "price": 5299.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "samsung",
      "tv",
      "top-deals"
    ],
    "description": "UHD 4K Smart TV\n43''",
    "oldPrice": 6599.0,
    "discount": 20
  },
  {
    "id": "samsung-ua50u8000fuxgh",
    "name": "Samsung 50\" UHD 4K Smart TV",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "UA50U8000FUXGH",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1BD5b7KRF5JLf0_jqaTQKbf3zJIN-wgWd%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1G-FCo-Zw1V-1xEDRL1OIqJv2FeI6xiJv%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D19aYO3cZz9DCXt8U2PWcd0iYCHsavmc57%26sz%3Dw1000"
    ],
    "price": 5800.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "samsung",
      "tv",
      "top-deals"
    ],
    "description": "UHD 4K Smart TV\n50\"",
    "oldPrice": 9199.0,
    "discount": 37
  },
  {
    "id": "samsung-ua55u8000fuxgh",
    "name": "Samsung 55'' UHD 4K Smart TV",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "UA55U8000FUXGH",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1y-K6poZlAiuTlykeKlk4xaXuQboVahXn%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1O-ep0Q-iJbQHaw05tqUKFnaGSDt5m1_4%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1AprDF-vOPsi1cv-ovLA0z61O_1HKFp59%26sz%3Dw1000"
    ],
    "price": 6699.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "samsung",
      "tv",
      "top-deals"
    ],
    "description": "UHD 4K Smart TV\n55''",
    "oldPrice": 9699.0,
    "discount": 31
  },
  {
    "id": "samsung-ua65u8000fuxgh",
    "name": "Samsung 65\" UHD 4K Smart TV",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "UA65U8000FUXGH",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1AprDF-vOPsi1cv-ovLA0z61O_1HKFp59%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D157wWX-asts_8D6GpPGNKgRperjH-Ml6d%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1N1l5UhIbutAD0PGZtEUm5TbgOHxw7MsS%26sz%3Dw1000"
    ],
    "price": 8750.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "samsung",
      "tv",
      "top-deals"
    ],
    "description": "UHD 4K Smart TV\n65\"",
    "oldPrice": 13099.0,
    "discount": 33
  },
  {
    "id": "samsung-ua75u8000fuxgh",
    "name": "Samsung 75\" UHD 4K Smart TV",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "UA75U8000FUXGH",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1_5QyixNagyCzIOL3moN5ZLxVmKH_oC6c%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1RH8lZWDJgV7-m-oWdoLZ5d5Y8FXRVwL6%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1O-ep0Q-iJbQHaw05tqUKFnaGSDt5m1_4%26sz%3Dw1000"
    ],
    "price": 13850.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "samsung",
      "tv",
      "top-deals"
    ],
    "description": "UHD 4K Smart TV\n75\"",
    "oldPrice": 21799.0,
    "discount": 36
  },
  {
    "id": "samsung-ua85u8000fuxgh",
    "name": "Samsung 85'' UHD 4K Smart TV",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "UA85U8000FUXGH",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1lXlaBoUKw7W-BPfDyhUuKunlClOd_eId%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1RH8lZWDJgV7-m-oWdoLZ5d5Y8FXRVwL6%26sz%3Dw1000"
    ],
    "price": 22900.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "samsung",
      "tv",
      "top-deals"
    ],
    "description": "UHD 4K Smart TV\n85''\nCrystal Processor\nTizen OS Smart\nSamsung Knox  Security\nPurcolor\nMotion Xcelerator\n4K UHD Resolution",
    "oldPrice": 34899.0,
    "discount": 34
  },
  {
    "id": "samsung-ua98du9000uxgh",
    "name": "Samsung 98'' UHD 4K Smart TV",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "UA98DU9000UXGH",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1AprDF-vOPsi1cv-ovLA0z61O_1HKFp59%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1j4Toh1OKCmqVm50wrh_3xuRv9E7-8eLR%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1_5QyixNagyCzIOL3moN5ZLxVmKH_oC6c%26sz%3Dw1000"
    ],
    "price": 51000.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "samsung",
      "tv",
      "top-deals"
    ],
    "description": "UHD 4K Smart TV\n98''",
    "oldPrice": 86999.0,
    "discount": 41
  },
  {
    "id": "samsung-qa55q6faauxgh",
    "name": "Samsung 55\" LED TV",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "QA55Q6FAAUXGH",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D14fF4Zqaw_0A9QRIo-x5E5mJI9khM59n3%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1CZ_AzMqUfZnDwa1P8qz_pn3irNaaIpey%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1z9WvF0rvbTOS-joTBjBiCViF-eC84svr%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1H73K-Te3ApLqiKUgZgjh9nWUr7YkX4Hg%26sz%3Dw1000"
    ],
    "price": 8750.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "samsung",
      "tv",
      "top-deals"
    ],
    "description": "55″\nQ4 Lite Processor\n100% Color Volume with Quantum Dot\nSamsung Knox Security\n4K Upscaling\nQuantum HDR\nOne UI Tizen\nAdaptive Sound",
    "oldPrice": 13999.0,
    "discount": 37
  },
  {
    "id": "samsung-qa55q7faauxgh",
    "name": "Samsung LED TV",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "QA55Q7FAAUXGH",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1GipBjwFxyKavmI-W5Ssyd2qO46MkVi4f%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1ZcIhJT6ZMxJDKUUsfLeSR7v4eG7ushoD%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1SdL1DUETI7usLU1UaPXta-f81KlJ9ItC%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1U4AkP0cVeSQ0bZ4PiQ-CLSWBEzgD4WJb%26sz%3Dw1000"
    ],
    "price": 9650.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "samsung",
      "tv",
      "top-deals"
    ],
    "description": "Q-LED\n4K\nHDR Brightness Optimiser\nQ4 AI Processor\nScolarCell Remote\nOne UI Tizen\nQ-Symphony",
    "oldPrice": 13999.0,
    "discount": 31
  },
  {
    "id": "samsung-qa65q6faauxgh",
    "name": "Samsung 65'' LED TV",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "QA65Q6FAAUXGH",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1zpS01glvVJRomTYYlGPnBGaL2Nii3JvF%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D14s6rX1ISK25MUeYtTD1AM-kY0bETpgYB%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1vtCwxqgKNhTLeN2i3PSmjHoh8DId_vq9%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1g23TjXSWDQiIwGZ5nKLOtfp8406-bCo7%26sz%3Dw1000"
    ],
    "price": 11800.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "samsung",
      "tv",
      "top-deals"
    ],
    "description": "LED TV\n65''\nQ4 Lite Processor\n100% Color Volume with Quantum Dot\nSamsung Knox Security\n4K Upscaling\nQuantum HDR\nOne UI Tizen\nAdaptive Sound",
    "oldPrice": 30599.0,
    "discount": 61
  },
  {
    "id": "samsung-qa65q7faauxgh",
    "name": "Samsung 65\" LED TV",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "QA65Q7FAAUXGH",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Fgkw0e_5QmefICbs88fthDWdY-KvnPf6%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WoRsc3Fl_ysl8LqlzogqLjmQBPf2MM6Z%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1nB7uoMLpE4k6zu6zoRYup4tB3sr0DbUZ%26sz%3Dw1000"
    ],
    "price": 11100.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "samsung",
      "tv",
      "top-deals"
    ],
    "description": "65\"\nQ-LED\n4K\nHDR Brightness Optimiser\nQ4 AI Processor\nScolarCell Remote\nOne UI Tizen\nQ-Symphony",
    "oldPrice": 17499.0,
    "discount": 37
  },
  {
    "id": "samsung-qa85q7faauxgh",
    "name": "Samsung 85\" LED TV",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "QA85Q7FAAUXGH",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1THXeq9TZ0qR5KzlDP08_dAPLPUdCGqvK%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D17oN_gav-XywK3BNC6fenI7DLTFXSvScg%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1BdBFFqJw3acTbqjT4Cjm4O9v-BXDMOfw%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1F472Iw5hOdv6QTriP4fyVStO3SSlcZ-5%26sz%3Dw1000"
    ],
    "price": 31200.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "samsung",
      "tv",
      "top-deals"
    ],
    "description": "85\"\nQ-LED\n4K\nHDR Brightness Optimiser\nQ4 AI Processor\nScolarCell Remote\nOne UI Tizen\nQ-Symphony",
    "oldPrice": 44999.0,
    "discount": 31
  },
  {
    "id": "samsung-qa65qn85dbuxgh",
    "name": "Samsung 65\" QLED 4K TV",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "QA65QN85DBUXGH",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D11fCspgvNoZG51xX0I2JakBQ7bB-O5ECX%26sz%3Dw1000"
    ],
    "price": 16500.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "samsung",
      "tv",
      "top-deals"
    ],
    "description": "QLED 4K TV\n65\"\nResolution: 4K UHD\nDisplay Technology: Neo QLED with Mini LED backlighting\nRefresh Rate: Up to 120Hz Motion Xcelerator\nProcessor: NQ4 AI Gen2 Processor\nHDR: Neo Quantum HDR, HDR10+\nAudio: 40W 2.2 Channel with Dolby Atmos\nGaming: 4 × HDMI ports with 4K@120Hz support, VRR, FreeSync Premium Pro\nOperating System: Samsung Tizen OS\nConnectivity: Wi-Fi, Bluetooth 5.2, Ethernet, USB, HDMI eARC\nVESA Wall Mount: 400 × 300 mm",
    "oldPrice": 39199.0,
    "discount": 58
  },
  {
    "id": "samsung-qa85qn900fuxgh",
    "name": "Samsung 85\" 8K NEO QLED TV",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "QA85QN900FUXGH",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WUh-bXwYXDNMNSuH5CEFEBlIElHJXAGZ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1sDEhbmC4KhvgB0XQi_7DUixSpN4rsgwF%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1OAV4UOV2a2mttPL5hr3iZRpNHsJb_mrh%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D17QSCzg2oWpLwOdcvqkYXGByVJJogfigW%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1ouxyMQH1H-Pdr4PqgX24nFj6K6Fdr1Gk%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D19O7VLq1Co5CWEjs1VhiIL3bFIXQ76Z_T%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1zCfzMvuOJKOehwfTliNxpX9YrNBKi2Wg%26sz%3Dw1000"
    ],
    "price": 98000.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "samsung",
      "tv",
      "top-deals"
    ],
    "description": "8K Resolution\nGaming Mode\nSamsung Vision\nDolby Atmos\nAI Customisation Mode\nNQ8 AI Processor\nGenerative Wallpaper",
    "oldPrice": 130499.0,
    "discount": 25
  },
  {
    "id": "samsung-mxst40fzn",
    "name": "Samsung 160 WATT Sound Tower",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "MX-ST40F/ZN",
    "category": "audio",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D17-LNJCJBaaNMHg5--jKwMpvUimax4IUz%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1eG9YJoSxHS37e7gS4nlizzB_U9VTxCJy%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Lx4rrR8lZxBVAWQ9plfYjBDJ3vwhNGaf%26sz%3Dw1000"
    ],
    "price": 4650.0,
    "rating": 4.5,
    "icon": "🔊",
    "tags": [
      "samsung",
      "audio",
      "top-deals"
    ],
    "description": "Sound Tower\n160 WATT",
    "oldPrice": 5399.0,
    "discount": 14
  },
  {
    "id": "samsung-mxst50fzn",
    "name": "Samsung 240 WATT Sound Tower",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "MX-ST50F/ZN",
    "category": "audio",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1jl4HjdtAx9xAxhPunl2mHZSctbex_eqj%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Fi7TNihZXxmc0YqmtRF9mfAaO76KIu3L%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1o6we8XIEbzVPQvXpsDNBqLyvIgVcle3T%26sz%3Dw1000"
    ],
    "price": 5350.0,
    "rating": 4.5,
    "icon": "🔊",
    "tags": [
      "samsung",
      "audio",
      "top-deals"
    ],
    "description": "Sound Tower\n240 WATT",
    "oldPrice": 6299.0,
    "discount": 15
  },
  {
    "id": "samsung-hwb450fke",
    "name": "Samsung 200 WATT 2.1ch Soundbar",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "HW-B450F/KE",
    "category": "audio",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1EfmU_TxnBlkf84b-ioGtmNAJEhL-goOd%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1O88498p-yrQKFBCVIi8GxOITngrEaaes%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1vFNxrm6AwNlDc-CM99B1Z_rmW3hvVsXn%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1TJfb8fSc48Wqe6P59UvpVtAKP64jzgTC%26sz%3Dw1000"
    ],
    "price": 2800.0,
    "rating": 4.5,
    "icon": "🔊",
    "tags": [
      "samsung",
      "audio",
      "top-deals"
    ],
    "description": "200 WATT\n2.1ch Sound\nDolby Audio/DTS Virtual:X\nBass Boost\nAdaptive Sound\nHDMI ARC\nBluetooth\nRemote Control",
    "oldPrice": 3599.0,
    "discount": 22
  },
  {
    "id": "samsung-hwq600fke",
    "name": "Samsung 360 WATT Soundbar 3.1.2ch",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "HW-Q600F/KE",
    "category": "audio",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1gJPaYXIHHeqSygdT4vCCJWXl-otH1h-F%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D113mdHKuoSBC2HqSp1ZjEgbfRzeUCfoO6%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1O1W5ksNJsIjnuIvfPYroYLjHnECzYG9z%26sz%3Dw1000"
    ],
    "price": 5400.0,
    "rating": 4.5,
    "icon": "🔊",
    "tags": [
      "samsung",
      "audio",
      "top-deals"
    ],
    "description": "3.1.2ch Sound\nDolby Audio/DTS Virtual:X\nQ-Symphony\nAdaptive Sound\nHDMI eARC\nBluetooth\nRemote Control\n360 Watt",
    "oldPrice": 6599.0,
    "discount": 18
  },
  {
    "id": "samsung-rt20har2dsa",
    "name": "Samsung 203 L Top Mount Refrigerator",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RT20HAR2DSA",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1yIAyfvtO1xFEdc74MVtyxa1uNBzsd4I3%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D11rPYWcb_Dtohg_DZxZ6lndE4aU3dbYE2%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1jpDr-VR4Y81Mo_sSyo_BzF3CHVbAj14z%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1jnFJ-TMs3QzSN6c2_fC91avAD3HDzlcO%26sz%3Dw1000"
    ],
    "price": 5350.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "samsung",
      "fridge",
      "top-deals"
    ],
    "description": "Top Mount Refrigerator\n203 Ltrs\nNo Frost\nDigital Inverter\nCompressor\nEnergy Saving",
    "oldPrice": 6899.0,
    "discount": 22
  },
  {
    "id": "samsung-rt22har4dsagh",
    "name": "Samsung 234 L Top Mount Refrigerator",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RT22HAR4DSA/GH",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Obuo2scJEI7yttjRyjiAhoc8st7BHnoz%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D199wfZDZURsh6bSFD7VwgFs5JnzS_rywE%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1z9uomji3zHpHb-T5CCMi6OrZvBvpfND2%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1dpnWRmxVae9xqi9ONJMMCgjAe1J52bqC%26sz%3Dw1000"
    ],
    "price": 5799.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "samsung",
      "fridge",
      "top-deals"
    ],
    "description": "Top Mount Refrigerator\n234 Ltrs\nNo Frost\nDigital Inverter\nCompressor\nEnergy Saving",
    "oldPrice": 7299.0,
    "discount": 21
  },
  {
    "id": "samsung-rt31cg5421s9gh",
    "name": "Samsung 301 L Twin Cooling Refrigerator",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RT31CG5421S9GH",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1rhFFplFLtKQ0JWFjW_FFFgSESRVLllp2%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D118CZ6sOOYfV716rq4dOYnUPSGKrjingh%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D19vjEb16h7TBF5hOzANlCB-Ku3Modl1hH%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D10IVkK2z6AbtXlYbItythZq44qb_0Zb7G%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1l117HBY6GamhFzhFModYs3X2xQuEXbJf%26sz%3Dw1000"
    ],
    "price": 7800.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "samsung",
      "fridge",
      "top-deals"
    ],
    "description": "Twin Cooling Refrigerator\n301 L\nNo Frost\nTitanium Silver\nDigital Inverter\nCompressor\nEnergy Saving",
    "oldPrice": 9699.0,
    "discount": 20
  },
  {
    "id": "samsung-rt35cg5421s9gh",
    "name": "Samsung 345 L Twin Cooling Refrigerator",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RT35CG5421S9GH",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Sx3eYF2mW7CnpFf1QEgukCgd8jUJuHlG%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1oHJUJS90dsp2aymHYQab2mEwJdQSEIja%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1uQ00vRVG7rZdrqEGJLsrmn-k_4mOOkCm%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1I9SftMHPw4IpyvHOcSsJDy9Kfz1LXV6H%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1lIm9zGp89hJS76WZnvDICPl2D3mQuVHK%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D198CH56fFcRaiZzgyivrc62rA1Y1R9JGo%26sz%3Dw1000"
    ],
    "price": 8600.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "samsung",
      "fridge",
      "top-deals"
    ],
    "description": "Twin Cooling Refrigerator\n345 Liters\nNo Frost\nTitanium Silver\nDigital Inverter Compressor\nEnergy Saving",
    "oldPrice": 10899.0,
    "discount": 21
  },
  {
    "id": "samsung-rt38cg6421s9gh",
    "name": "Samsung 388 L Twin Cooling Refrigerator",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RT38CG6421S9GH",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1FnuMSHjWbhk_-dFkD0xvlFuxFice3Hve%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1iUQma3Q-hj-VD1F0F9xxdD9ec_jvbh2u%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D11ft82erzLxVZo3jpXy3fQQ2De9w39GDJ%26sz%3Dw1000"
    ],
    "price": 9500.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "samsung",
      "fridge",
      "top-deals"
    ],
    "description": "Twin Cooling Refrigerator\nNo Frost\nTitanium Silver\nDigital Inverter Compressor\nEnergy Saving\nCapacity: 388 Ltrs",
    "oldPrice": 11799.0,
    "discount": 19
  },
  {
    "id": "samsung-rt42cg6621s9gh",
    "name": "Samsung 411 L Twin Cooling Refrigerator",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RT42CG6621S9GH",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1dm9giKOTfzJJ3SB1_zbPax5PIZWrssz-%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1gI39_Uz-YuLG20KbghnSdkeyT4Mb-egY%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1SR1YC7ZaecvZ9VuMsBbS17H8j_p5ADkF%26sz%3Dw1000"
    ],
    "price": 10200.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "samsung",
      "fridge",
      "top-deals"
    ],
    "description": "Twin Cooling Refrigerator\n411 Litres capacity\nTwin Cooling Plus™ technology\nDuracool feature for power cut freshness\nEnergy-efficient performance\nSleek and modern design\nFlexible and spacious storage options",
    "oldPrice": 13499.0,
    "discount": 24
  },
  {
    "id": "samsung-rt47cg6631b1ut",
    "name": "Samsung 460 L Twin Cooling Refrigerator",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RT47CG6631B1UT",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1dPCr4nolEhlwMsdXWGkTYk-mfrLxjBYL%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1TRn-_1PLbkehLscQ8bFeX1b6E4yLsqXv%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D17lVAbF07ueTctgFvB_VNHEaSW6QTWmwC%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D18xAomnUl4iPosX0yvwy5VFwJcaqeVtsr%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1xUGp4iQJNKHoUZGh9XzOkpk3FeaL4MtE%26sz%3Dw1000"
    ],
    "price": 10899.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "samsung",
      "fridge",
      "top-deals"
    ],
    "description": "Twin Cooling Refrigerator\n460 Ltrs\nFrost Free\nInterior Led Light\nDeodoriser\nDigital Inverter Compressor",
    "oldPrice": 14999.0,
    "discount": 27
  },
  {
    "id": "samsung-rt53dg7b60b1ut",
    "name": "Samsung 525 L Twin Cooling Refrigerator",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RT53DG7B60B1UT",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1foJCUDyrO7wOUXyEeE8QQMAp5kOTdWVa%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1vtdtICZrqhv1bp5ZvRail0rcoCG4Gfdr%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1cc2OmzovMDo0-3HfGrrRrJ7rkxxTiOhb%26sz%3Dw1000"
    ],
    "price": 15400.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "samsung",
      "fridge",
      "top-deals"
    ],
    "description": "Twin Cooling Refrigerator\n525 Ltrs\nNo Frost\nDigital Inverter\nEnergy Saving\nCompressor\nWi Fi connectivity\nWater Dispenser",
    "oldPrice": 17499.0,
    "discount": 12
  },
  {
    "id": "samsung-rs57dg4000b4gh",
    "name": "Samsung 583 Side-by-Side Refrigerator",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RS57DG4000B4GH",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1eFMMsGFSkClIQOs0HpuMuq15brpHMw6K%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1wVJYac6gQ1v0NIU73U_jzcziHH_zdz16%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1e-C9nUrZfeJLvlPFi6e9n_5xvgfiavQK%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1uv18AN4qug0AagT1B1aJOB_HeziMZD4i%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1uebwRkGvrmIWjK6Qfxhlv5-62lFBl3M2%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1QiiKcciiB9QbdPjWKMUgrC7DNfHjkziL%26sz%3Dw1000"
    ],
    "price": 14600.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "samsung",
      "fridge",
      "top-deals"
    ],
    "description": "Side-by-Side Refrigerator\n583 Ltrs\nNo Frost\nMono Cooling\nIce Tray\nDigital Inverter Compressor\nWifi Embedded\nSmartthings App Support",
    "oldPrice": 16599.0,
    "discount": 12
  },
  {
    "id": "samsung-rs57dg4100b4gh",
    "name": "Samsung 578 Side-by-Side Refrigerator With Water Dispenser",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RS57DG4100B4GH",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D13muRRZ5q-rPjIDeZbV7TZ_ibVSS6fk-V%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1b8AbG22K5vgByTLW-THDRKmhMIhdBd9C%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1vIpdMAD9uVPYDC5POOx-ftBK72uHrDfQ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1m7jWaG-l-VZfHlcWQHVmnFdTyCmJ2ZJm%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1nho0Np9r01OCoD_LHe7VexOqmGVMLSqw%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1hrMNXcjnm_tdRydyomudZy26o_ZoOPSB%26sz%3Dw1000"
    ],
    "price": 15500.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "samsung",
      "fridge",
      "top-deals"
    ],
    "description": "Side-by-Side Refrigerator\n578 Ltrs\nFast Freezing\nInternal Lighting (Led)\nSmartthings\nFrost Free\nWater Dispenser\nSilver Finish\nEnergy Saving",
    "oldPrice": 18299.0,
    "discount": 15
  },
  {
    "id": "samsung-rs70f65k4tgh",
    "name": "Samsung 635 L Side-by-Side Refrigerator",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RS70F65K4TGH",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1vXncdZKxzYLCjCqw6BTu2wgVmnRJ-mrL%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1x5ujrWQHiSSgGhqcQRv5yVgwzE_PWF9y%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1xPEf_ohncVUi3vp8RYR7MlhAj5snaLyE%26sz%3Dw1000"
    ],
    "price": 18500.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "samsung",
      "fridge",
      "top-deals"
    ],
    "description": "Side-by-Side Refrigerator\n635 Liters\nAI Energy Saving\nFrost Free\nWater Dispenser\nSilver\nWIFI Embedded\nTwin Cooling Plus",
    "oldPrice": 28799.0,
    "discount": 36
  },
  {
    "id": "samsung-rs80f65g4fgh",
    "name": "Samsung Side-by-Side Refrigerator",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RS80F65G4FGH",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1s0nkwnHX00Rc41TjX2JWL6SiV3Ybez5A%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1XyiE_kF4j7_fj3bg-ZRlfhSaHn65HMDV%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1-Um3KdA54cwO_RteVEbGCgsKwlullMb3%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1fLBlJfoCSSDkTpU_lNQDY8IpBZGdHrJJ%26sz%3Dw1000"
    ],
    "price": 24500.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "samsung",
      "fridge",
      "top-deals"
    ],
    "description": "Side-by-Side Refrigerator\n627Ltrs\nIce Maker\nWater Dispenser\nEnergy Saving\n3 Doors\nAI Energy Mode",
    "oldPrice": 33099.0,
    "discount": 26
  },
  {
    "id": "samsung-rf65db970e22",
    "name": "Samsung 650 L Bespoke 4-Door Refrigerator",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RF65DB970E22",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1SE-9gwwzE7mrQgNTfqdk3WKvituH5eaV%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1GH-SLeEtd1Uk_TXNz5UtLikd1OrqO6DG%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1xKCu2rSVWcVs6dA1_CxdksZLOLMAOr1W%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1K6BH21Z4xQctTy399jzM1ZViGQThxOdm%26sz%3Dw1000"
    ],
    "price": 38500.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "samsung",
      "fridge",
      "top-deals"
    ],
    "description": "Bespoke 4-Door Refrigerator\n650 Ltrs\n4 Doors Flex\nWifi Connectivity\nBlack\nDual Auto ice Maker",
    "oldPrice": 52199.0,
    "discount": 26
  },
  {
    "id": "samsung-rf65dg9h0eb1eu",
    "name": "Samsung 632 L Family Hub 4-Door Refrigerator",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RF65DG9H0EB1EU",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1rD9ZV3jYnlHIoSpwKKTLVMl3JHtOgXKQ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1bzql6aUxUx3wQAkZtoi9r8FEP3cVnTmX%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D19qPTD3No-3okzqbGmvtrbmJh6s-7DZW9%26sz%3Dw1000"
    ],
    "price": 43000.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "samsung",
      "fridge",
      "top-deals"
    ],
    "description": "French Door Refrigerator\nBespoke AI \n632 Ltrs\nSmart Things\nEnergy Saving\nIce Maker\nAI Vision\nBlack Colour\nFamily Hub",
    "oldPrice": 59999.0,
    "discount": 28
  },
  {
    "id": "samsung-rf48a4000m9gh",
    "name": "Samsung 468 L French Door Refrigerator",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RF48A4000M9/GH",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1SMdfHhnmlxsqe9ov6a7YbF5Q-4GrEPRo%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1LB6VSyo7OpveSalD7M3IxcCpS6nOOEVo%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1RkKVdlvGDa4jjpbIbZnf1NQEygkE5_rB%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D18_DHJdBRLZC1Y-g54nmh37IgR6OASvRh%26sz%3Dw1000"
    ],
    "price": 14500.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "samsung",
      "fridge",
      "top-deals"
    ],
    "description": "French Door Refrigerator\n468 Ltrs\n4 Doors\nDigital Inverter\nFresh Zone\nGrey",
    "oldPrice": 17499.0,
    "discount": 17
  },
  {
    "id": "samsung-ri70f20v1gagh",
    "name": "Samsung 198L- GRAY Chest Freezer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RI70F20V1GAGH",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1OridJ9CPEZvUAmtBs7iseSL8GsFNu1TT%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1IJ32a-0R6pvIL55eyaFxUSPJeWKqQzqm%26sz%3Dw1000"
    ],
    "price": 4750.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "samsung",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n198L- GRAY",
    "oldPrice": 6499.0,
    "discount": 27
  },
  {
    "id": "samsung-ri70f29v1gagh",
    "name": "Samsung 287L- GRAY Chest Freezer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RI70F29V1GAGH",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1kGJooee3PbTkrlFtHCuyJZyC2fIvlUjP%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D15bgI4Lw4ClzufvfbxquSKv_489hD7mqZ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1xdzi-3eRiAYF06EDn4-F4cRF86_0w8JR%26sz%3Dw1000"
    ],
    "price": 5700.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "samsung",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n287L- GRAY",
    "oldPrice": 7999.0,
    "discount": 29
  },
  {
    "id": "samsung-ri70f37v1gagh",
    "name": "Samsung 371L- GRAY Chest Freezer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "RI70F37V1GAGH",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1xdzi-3eRiAYF06EDn4-F4cRF86_0w8JR%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D15bgI4Lw4ClzufvfbxquSKv_489hD7mqZ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1kGJooee3PbTkrlFtHCuyJZyC2fIvlUjP%26sz%3Dw1000"
    ],
    "price": 6700.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "samsung",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n371L- GRAY",
    "oldPrice": 8999.0,
    "discount": 26
  },
  {
    "id": "samsung-ar12crhgawkaf",
    "name": "Samsung 1.5 HP Split AC (R410)",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "AR12CRHGAWK/AF",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1KpdFTkP0UxrXfoDyUXKZ_BttfZ3jUzF-%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1GYMZb1W8sYrpk4T8kUxFiR1tzpfm94Pm%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1kdKjsyCY1EEsW6QClFMyTD0FBOuMybp5%26sz%3Dw1000"
    ],
    "price": 4450.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "samsung",
      "ac",
      "top-deals"
    ],
    "description": "Split AC (R410)\n1.5 HP",
    "oldPrice": 6599.0,
    "discount": 33
  },
  {
    "id": "samsung-ar18crhgawkaf",
    "name": "Samsung 2.0 HP Split AC (R410)",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "AR18CRHGAWK/AF",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1KpdFTkP0UxrXfoDyUXKZ_BttfZ3jUzF-%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1GYMZb1W8sYrpk4T8kUxFiR1tzpfm94Pm%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1kdKjsyCY1EEsW6QClFMyTD0FBOuMybp5%26sz%3Dw1000"
    ],
    "price": 6750.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "samsung",
      "ac",
      "top-deals"
    ],
    "description": "Split AC (R410)\n2.0 HP",
    "oldPrice": 8799.0,
    "discount": 23
  },
  {
    "id": "samsung-ar24crhgawkaf",
    "name": "Samsung 2.5 HP Split AC (R410)",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "AR24CRHGAWK/AF",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1kdKjsyCY1EEsW6QClFMyTD0FBOuMybp5%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1GYMZb1W8sYrpk4T8kUxFiR1tzpfm94Pm%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1kdKjsyCY1EEsW6QClFMyTD0FBOuMybp5%26sz%3Dw1000"
    ],
    "price": 9650.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "samsung",
      "ac",
      "top-deals"
    ],
    "description": "Split AC (R410)\n2.5 HP",
    "oldPrice": 12299.0,
    "discount": 22
  },
  {
    "id": "samsung-ar40f12d0agaf",
    "name": "Samsung 1.5 HP Split Inverter AC (R32)",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "AR40F12D0AG/AF",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WaADuA3KN5qFQFfa92MuecjXr_Mot-Wh%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WHksqqp3Pq8179YnqBE9lSm-bsmk3XLT%26sz%3Dw1000"
    ],
    "price": 5750.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "samsung",
      "ac",
      "top-deals"
    ],
    "description": "Split Inverter AC (R32)\n1.5 HP",
    "oldPrice": 8999.0,
    "discount": 36
  },
  {
    "id": "samsung-ar40f18d0agaf",
    "name": "Samsung 2.0 HP Split Inverter AC (R32)",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "AR40F18D0AG/AF",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WHksqqp3Pq8179YnqBE9lSm-bsmk3XLT%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WaADuA3KN5qFQFfa92MuecjXr_Mot-Wh%26sz%3Dw1000"
    ],
    "price": 7750.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "samsung",
      "ac",
      "top-deals"
    ],
    "description": "Split Inverter AC (R32)\n2.0 HP",
    "oldPrice": 14999.0,
    "discount": 48
  },
  {
    "id": "samsung-ar40f24d0agaf",
    "name": "Samsung 2.5 HP Split Inverter AC (R32)",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "AR40F24D0AG/AF",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WaADuA3KN5qFQFfa92MuecjXr_Mot-Wh%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WHksqqp3Pq8179YnqBE9lSm-bsmk3XLT%26sz%3Dw1000"
    ],
    "price": 9600.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "samsung",
      "ac",
      "top-deals"
    ],
    "description": "Split Inverter AC (R32)\n2.5 HP",
    "oldPrice": 17499.0,
    "discount": 45
  },
  {
    "id": "samsung-wt60h2500",
    "name": "Samsung Twin Tub Semi-Auto Washing Machine  6KG",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WT60H2500",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1YS879ljU21iPt3QwKGEsJj-mQuIoRSlQ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D198zmmYQvJMMH5AUf4zmYOCR06rhBC9HM%26sz%3Dw1000"
    ],
    "price": 2799.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "samsung",
      "laundry",
      "top-deals"
    ],
    "description": "Twin Tub Semi-Auto Washer\nSemi-Automatic\nDouble Storm\nWash Turbo\nWater Drain\nNew Design",
    "oldPrice": 3499.0,
    "discount": 20
  },
  {
    "id": "samsung-wt90h3230mg",
    "name": "Samsung 9 KG Twin Tub Semi-Auto Washer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WT90H3230MG",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1lBacpHi4JqLX4KAmHpf_KMp80QcdLPjg%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Q7f2MZkCaFoqUV1Fa8f91TERmtXSlxfx%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Zbe0mT3PQvSjoi2Np5baWh8wVZ5VFoEn%26sz%3Dw1000"
    ],
    "price": 3399.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "samsung",
      "laundry",
      "top-deals"
    ],
    "description": "Twin Tub Semi-Auto Washer\n9 KG",
    "oldPrice": 4299.0,
    "discount": 21
  },
  {
    "id": "samsung-wt12j4200mr",
    "name": "Samsung 12 KG Twin Tub Semi-Auto Washer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WT12J4200MR",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1cBHWfRwVXyQG4RYedHlLdgnG7s3LJWwA%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1NXvWjVa9I0Kr7KnXVk-GyBd3bz5QpfcA%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Ivmn4gaTaaD-py7GB1R5Q5g1jfgg3kqN%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1rFmmN2QNdUGxkOLkneotO_BLpX_jaqDy%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D10FYiDJfhWqzwYrdE3ZfYz-HpA9scxz9e%26sz%3Dw1000"
    ],
    "price": 4750.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "samsung",
      "laundry",
      "top-deals"
    ],
    "description": "Twin Tub Semi-Auto Washer\nSemi-Automatic\nDouble Storm\nWash Turbo\nWater Drain\nNew Design",
    "oldPrice": 6399.0,
    "discount": 26
  },
  {
    "id": "samsung-wa80f19s8bnq",
    "name": "Samsung 19 KG Top Load Washer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WA80F19S8BNQ",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1KS47ICvSUkP9twpEkRbYhJoeOSDwshMo%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1XYeTJG1SwDcjd9TAoO4T6CExXisuQoHj%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1FuCaEg4OHZvNxWsnyTUnQ1w40fewMzAS%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1H5Ofs5W64q9AOv2vYRjAQkuf5ZSMwl86%26sz%3Dw1000"
    ],
    "price": 9600.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "samsung",
      "laundry",
      "top-deals"
    ],
    "description": "Top Load Washer\n19 KG",
    "oldPrice": 13399.0,
    "discount": 28
  },
  {
    "id": "samsung-wa80f17s8cnq",
    "name": "Samsung 17 KG Top Load Washer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WA80F17S8CNQ",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1HKuT-cuWrG1WXHVhyg1d66SChiZ2dJ31%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D13N5nkwXN2OKX-W0rW5b8RcOxmwz1DaFR%26sz%3Dw1000"
    ],
    "price": 8600.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "samsung",
      "laundry",
      "top-deals"
    ],
    "description": "Top Load Washer\n17 KG",
    "oldPrice": 10799.0,
    "discount": 20
  },
  {
    "id": "samsung-wa80f13s5cnq",
    "name": "Samsung 13 KG Top Load Washer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WA80F13S5CNQ",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D13NS1NT0NT-6xSv8xgb_qnXXgv0nsWdQI%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D10FCee_0sCUW5Y1kr8Z1DrNfXr5jh5T5R%26sz%3Dw1000"
    ],
    "price": 7100.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "samsung",
      "laundry",
      "top-deals"
    ],
    "description": "Top Load Washer\n13 KG",
    "oldPrice": 8799.0,
    "discount": 19
  },
  {
    "id": "samsung-wa80cg4240bwnq",
    "name": "Samsung 8 KG Top Load Washer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WA80CG4240BWNQ",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1M1k54m4DZmxovNgyFrpy3wRq5_VOGK0Y%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1W8fo4M7VFXYjJgwcReVtX4mvVWLzr5XH%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1EaKN0QP8NpWXGn60E8Hhpy04KAz_1PxP%26sz%3Dw1000"
    ],
    "price": 4300.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "samsung",
      "laundry",
      "top-deals"
    ],
    "description": "Top Load Washer\n8 KG\nConventional Washer\nSwobble Technology\nDigital Inverter Motor\nDiamond Drum\nMagically Lint-Free\nAir Turbo Drying\nSystemic Drum Clean\n8Kg",
    "oldPrice": 5699.0,
    "discount": 25
  },
  {
    "id": "samsung-wf90f26adsnq",
    "name": "Samsung 26 KG Front Load Washer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WF90F26ADSNQ",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1sq82aHBw4RIApxRxgW5-4ElioPfKb-A9%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1pg2sFSchvMevJusY--5wOHa_uehcQnJD%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1imZ8A2Ym_LplrkrXuWnBHEeN7vrGKn6C%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1pGYcukQbWWc4X9JQuZ-t2KxMFYasmjq1%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1UCLoyiDPgcLxpVwDAe638EZWwzogOEmV%26sz%3Dw1000"
    ],
    "price": 18799.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "samsung",
      "laundry",
      "top-deals"
    ],
    "description": "Front Load Washer\n26KG\nLCD Display\nAI Wash\nEcoBubble Technology\nVoice Enabled\nSuper Speed\nWIFI Embedded",
    "oldPrice": 22999.0,
    "discount": 18
  },
  {
    "id": "samsung-ww11cgc04dabsg",
    "name": "Samsung 11 KG Front Load Washer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WW11CGC04DABSG",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D178vyeXisEdXkJvXSTEzxGs_awxKpYZHA%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D106xk9l98Fx8wG1sn9qS_zvSBMtMgjvvn%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1VO-iKKYp1NTS-Q_y-2be6impSKUZ118G%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1G2i8LG5tf2QnnGgJeaPtZI_ZjefwCVSp%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1ZFgvtgxtt7aHZQ0wDdRb9N2gU4XtVX4Z%26sz%3Dw1000"
    ],
    "price": 8999.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "samsung",
      "laundry",
      "top-deals"
    ],
    "description": "Front Load Washer\n11 KG",
    "oldPrice": 13999.0,
    "discount": 36
  },
  {
    "id": "samsung-ww10dg6u94lbnq",
    "name": "Samsung 10.1 KG Front Load Washer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WW10DG6U94LBNQ",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1hOLY2M9JqXYPnehSzARoeWKuVRt8O8QF%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D154yWtrMFSwadP0Mee-NFZmI24aQr-3wC%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1c8i1FKiGp0B78hRPHk7tq4M5AOAH4pPo%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1lw9p8yuP-pwXzaVxVcy4Pshmk1aXavHc%26sz%3Dw1000"
    ],
    "price": 8699.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "samsung",
      "laundry",
      "top-deals"
    ],
    "description": "Front Load Washer\n10.1 KG",
    "oldPrice": 12999.0,
    "discount": 33
  },
  {
    "id": "samsung-ww80t3040bsnq",
    "name": "Samsung 8 KG Front Load Washer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WW80T3040BS/NQ",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D14MyG66SOH2yScnD9xWRkx_YvIVBBiCTx%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1vpWctf6ZopCV_YP-NKQ7iWEPtnD-_7Kr%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D16v3K0c7Ikf5eCGLtzv3JQRds06wsXhFe%26sz%3Dw1000"
    ],
    "price": 5700.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "samsung",
      "laundry",
      "top-deals"
    ],
    "description": "Front Load Washer\n8 KG",
    "oldPrice": 9199.0,
    "discount": 38
  },
  {
    "id": "samsung-ww70t3010bsnq",
    "name": "Samsung 7 KG Front Load Washer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WW70T3010BS/NQ",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1g5SLQAEv4GtI1kZFHrtIXmpByW-5OcNj%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1jH1NHZ3MycQ7sy_sHRbgCVz2zXh_G8Ot%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1LGurkLa3z1WBgwTZmmpUmrAuuzbcUO-H%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1miAYi37FOZV1hl_c-jqHeOpT6wJvP1XR%26sz%3Dw1000"
    ],
    "price": 4800.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "samsung",
      "laundry",
      "top-deals"
    ],
    "description": "Front Load Washer\n7 KG",
    "oldPrice": 7499.0,
    "discount": 36
  },
  {
    "id": "samsung-wd90f22bcsnq",
    "name": "Samsung 22 KG WASH / 11 KG DRY Washer & Dryer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WD90F22BCSNQ",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1FvzhEL-pY2blA2Sb8s0mhZIdlM97IHF2%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1YddMnLUsveyB2ls_Kovz7B0qzYpgrbvO%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1zGztLTKFMt5sAS7IqfJWJxz4cy9uT3G1%26sz%3Dw1000"
    ],
    "price": 21999.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "samsung",
      "laundry",
      "top-deals"
    ],
    "description": "Washer & Dryer\n11KG Dry\n22KG Wash\nAI Wash +\nAI Eco bubble\nWIFI Embedded\nSmart Blanket Washing\nLCD Display",
    "oldPrice": 26999.0,
    "discount": 19
  },
  {
    "id": "samsung-wd21t6300gvnq",
    "name": "Samsung 21 KG WASH / 12 KG DRY Washer & Dryer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "WD21T6300GV/NQ",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1BaBYH7RG4NdQYjz6sg_Y1tgiFMyeFAfL%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1KWo6L8KOj_HD9Ov_mhpyggvvqJhUZvr5%26sz%3Dw1000"
    ],
    "price": 18000.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "samsung",
      "laundry",
      "top-deals"
    ],
    "description": "Washer & Dryer\n21 KG WASH / 12 KG DRY\n21 KG Wash and 12 KG Dry\nDiamond Drum\nFull Automatic\nSensor",
    "oldPrice": 25299.0,
    "discount": 29
  },
  {
    "id": "tcl-32s5k",
    "name": "TCL 32\" LED FHD Smart TV",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "32S5K",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1deqYYHaMNTbnUuhmUaudY9nfMosbILOy%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1I6IiYXaJWweRqY13NzLjM4yhtBJGC1Vv%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1UORMx70sBtWiHu5RXHMtC_0MgwEeoDa0%26sz%3Dw1000"
    ],
    "price": 2250.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "tcl",
      "tv",
      "top-deals"
    ],
    "description": "LED FHD Smart TV\n32\"",
    "oldPrice": 2799.0,
    "discount": 20
  },
  {
    "id": "tcl-43s5k",
    "name": "TCL 43\" LED FHD Smart TV",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "43S5K",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1I6IiYXaJWweRqY13NzLjM4yhtBJGC1Vv%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1deqYYHaMNTbnUuhmUaudY9nfMosbILOy%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1UORMx70sBtWiHu5RXHMtC_0MgwEeoDa0%26sz%3Dw1000"
    ],
    "price": 2900.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "tcl",
      "tv",
      "top-deals"
    ],
    "description": "LED FHD Smart TV\n43\"",
    "oldPrice": 4199.0,
    "discount": 31
  },
  {
    "id": "tcl-50s5k",
    "name": "TCL 50'' LED FHD Smart TV",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "50S5K",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1I6IiYXaJWweRqY13NzLjM4yhtBJGC1Vv%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1deqYYHaMNTbnUuhmUaudY9nfMosbILOy%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1UORMx70sBtWiHu5RXHMtC_0MgwEeoDa0%26sz%3Dw1000"
    ],
    "price": 3850.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "tcl",
      "tv",
      "top-deals"
    ],
    "description": "LED FHD Smart TV\n50''",
    "oldPrice": 4499.0,
    "discount": 14
  },
  {
    "id": "tcl-55p6l",
    "name": "TCL 55\" UHD 4K Smart TV",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "55P6L",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D12x95GxzwMlroJyjpnYs_mUDffMW7JZMb%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D14Nf2af9OiQnHFmUJNCOw3FyWuMQtJji5%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1u7gUtMHbC4Q3CCfKJZ4Kzkk-U1Ti2Af9%26sz%3Dw1000"
    ],
    "price": 5200.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "tcl",
      "tv",
      "top-deals"
    ],
    "description": "UHD 4K Smart TV\n55\"",
    "oldPrice": 7099.0,
    "discount": 27
  },
  {
    "id": "tcl-65p755",
    "name": "TCL 65'' UHD 4K Smart TV",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "65P755",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1u7gUtMHbC4Q3CCfKJZ4Kzkk-U1Ti2Af9%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D14Nf2af9OiQnHFmUJNCOw3FyWuMQtJji5%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1u7gUtMHbC4Q3CCfKJZ4Kzkk-U1Ti2Af9%26sz%3Dw1000"
    ],
    "price": 7799.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "tcl",
      "tv",
      "top-deals"
    ],
    "description": "UHD 4K Smart TV\n65''",
    "oldPrice": 10499.0,
    "discount": 26
  },
  {
    "id": "tcl-75p6l",
    "name": "TCL 75'' UHD 4K Smart TV",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "75P6L",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1u7gUtMHbC4Q3CCfKJZ4Kzkk-U1Ti2Af9%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D12x95GxzwMlroJyjpnYs_mUDffMW7JZMb%26sz%3Dw1000"
    ],
    "price": 9400.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "tcl",
      "tv",
      "top-deals"
    ],
    "description": "UHD 4K Smart TV\n75''",
    "oldPrice": 16599.0,
    "discount": 43
  },
  {
    "id": "tcl-55t6d",
    "name": "TCL 55 Inch QLED 4K Smart TV",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "55T6D",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1p1wQv-vwvDlgrUno9oNWwggngiB9u4q-%26sz%3Dw1000"
    ],
    "price": 6450.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "tcl",
      "tv",
      "top-deals"
    ],
    "description": "QLED 4K TV\n55''",
    "oldPrice": 9699.0,
    "discount": 33
  },
  {
    "id": "tcl-75p7k",
    "name": "TCL 75\" QLED 4K TV",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "75P7K",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1MkD8fIYdgI1lNtaPgqhhZJUZ_zu4WJWs%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Z-j1DD7zj8vlahrmgq9hFAVyyLvzkh43%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D19RIiPYfy_wZMjbpAvb9qiOagcaCRNHIh%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D17Uws_ewMNPmQTB-mH1wSOeRsi54_TzYO%26sz%3Dw1000"
    ],
    "price": 11500.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "tcl",
      "tv",
      "top-deals"
    ],
    "description": "QLED 4K TV\nDLG 120Hz\n450nit Game Mode\nGoogle TV",
    "oldPrice": 19199.0,
    "discount": 40,
    "specs": {
      "FREEBIES": "(ZAPPER DECODER+DISH +1 MONTH)"
    }
  },
  {
    "id": "tcl-85p7l",
    "name": "TCL 85\" QLED 4K TV",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "85P7L",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1MkD8fIYdgI1lNtaPgqhhZJUZ_zu4WJWs%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D17Uws_ewMNPmQTB-mH1wSOeRsi54_TzYO%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D19RIiPYfy_wZMjbpAvb9qiOagcaCRNHIh%26sz%3Dw1000"
    ],
    "price": 19000.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "tcl",
      "tv",
      "top-deals"
    ],
    "description": "QLED 4K TV\n85\"",
    "oldPrice": 28799.0,
    "discount": 34
  },
  {
    "id": "tcl-98p8k",
    "name": "TCL 98'' QLED 4K TV",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "98P8K",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1MkD8fIYdgI1lNtaPgqhhZJUZ_zu4WJWs%26sz%3Dw1000"
    ],
    "price": 28499.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "tcl",
      "tv",
      "top-deals"
    ],
    "description": "QLED 4K TV\n98''",
    "oldPrice": 60999.0,
    "discount": 53
  },
  {
    "id": "tcl-65c6k",
    "name": "TCL 65\" QD-Mini LED 4K TV",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "65C6K",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D153Vi_DNOtXTXSgigKG76yOzMgmsF04XG%26sz%3Dw1000"
    ],
    "price": 10599.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "tcl",
      "tv",
      "top-deals"
    ],
    "description": "65″ Large Screen\n20000+ Local Dimming Zones\nHDR 5000nits\nQLED PRO\nT-SCREEN ULTRA\nAiPQ PROCESSOR PRO\nONKYO 2.1 Hi-Fi System\nUltra-sli Design",
    "oldPrice": 15799.0,
    "discount": 33
  },
  {
    "id": "tcl-75c6k",
    "name": "TCL 75\" QD-Mini LED 4K TV",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "75C6K",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D153Vi_DNOtXTXSgigKG76yOzMgmsF04XG%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1SThw2nKtWyjF1CF1QvQaLvpa3oxzaTpc%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D10Z2vMGlOHQutXFYynKxyUVkz4-uF9OPF%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D14Qd_MLj3VPhPFilhB2FTG4uXqvvB24Ih%26sz%3Dw1000"
    ],
    "price": 14300.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "tcl",
      "tv",
      "top-deals"
    ],
    "description": "QD-Mini LED 4K TV\n75\"\nWorks With Alexa\nModern HDR Format\nDolby Atoms\n4K",
    "oldPrice": 27899.0,
    "discount": 49
  },
  {
    "id": "tcl-85c6k",
    "name": "TCL 85\" QD-Mini LED 4K TV",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "85C6K",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D153Vi_DNOtXTXSgigKG76yOzMgmsF04XG%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1kAS_Vgfj0bY7RigMjgB3lPCJQSQbCZ0u%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1m-t5MPOF3D5AOX9vt8lPwYYQEUm-roqW%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1pBUutrhh7iJy45d5aqnYGteFBdU11izp%26sz%3Dw1000"
    ],
    "price": 23500.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "tcl",
      "tv",
      "top-deals"
    ],
    "description": "85\"\nQLED\nPrecise Dimming Series\nHigh HDR Brightness\nUltra Slim Design",
    "oldPrice": 37499.0,
    "discount": 37
  },
  {
    "id": "tcl-98c6k",
    "name": "TCL 98\" QD-Mini LED 4K TV",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "98C6K",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D153Vi_DNOtXTXSgigKG76yOzMgmsF04XG%26sz%3Dw1000"
    ],
    "price": 38799.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "tcl",
      "tv",
      "top-deals"
    ],
    "description": "98″ Large Screen, 20000+ Local Dimming Zones\nHdr 5000nits\nQled Pro\nT-Screen Ultra\nAipq Processor Pro\nOnkyo 6.2.2 Hi-Fi System\nUltra-Slim Design\n4K",
    "oldPrice": 78299.0,
    "discount": 50
  },
  {
    "id": "tcl-115c7k",
    "name": "TCL 115'' QD-Mini LED 4K TV",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "115C7K",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1kuVwbiGU_NCO8HSluP0zvgEH3aiqwNG7%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1gQCrXbzcf1zilWdkk0Z04sfwXrsQZKxL%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D11_fSldr3JWgZ0fKCff_HEEAobCgMCQJG%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1mZJv-DBTMKrq4aWUEbsVFfKRw93NNLuC%26sz%3Dw1000"
    ],
    "price": 199999.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "tcl",
      "tv",
      "top-deals"
    ],
    "description": "115″\nPrecise Dimming series\nQLED\nHDR 3000 Nits\nAiPQ Processor Pro\nUltra Slim Design\nONKYO 4.2.2 Hi-Fi System\nHi-Fi System\n4K",
    "oldPrice": 299999.0,
    "discount": 33
  },
  {
    "id": "tcl-27r73q",
    "name": "TCL 27'' Gaming Monitor",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "27R73Q",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WMm8QUK9QoqmdhZJAw-FDbLAG5I6Z7w0%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D187idJZzFiDF0cpKArhMcSbrQPTbBbuNp%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1iv5dCwqMWcTOyIl_Cab7JQJ8gDf10_kL%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1KvWY1DIA7o7VwhRM1xpBeE3iYnrr0PU1%26sz%3Dw1000"
    ],
    "price": 7900.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "tcl",
      "tv",
      "top-deals"
    ],
    "description": "Gaming Monitor\n27″\nMiniLED\nHigh Brush 2K Esports monitor\n2560*1440 QHD\nFast-HVA",
    "oldPrice": 11699.0,
    "discount": 32
  },
  {
    "id": "tcl-s45h",
    "name": "TCL 100W Soundbar 2.0",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "S45H",
    "category": "audio",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WdvmzCTSt2ZeAeDVgGG0l9u9d2iLdYlv%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D15ZHeJ5Fv3O2PqXUv-WO1U0PYwurHsiBW%26sz%3Dw1000"
    ],
    "price": 1380.0,
    "rating": 4.5,
    "icon": "🔊",
    "tags": [
      "tcl",
      "audio",
      "top-deals"
    ],
    "description": "Soundbar\n100W\nWireless Subwoofer\nWifi\n2.0 Channel\n100W\nUSB\nHDMI",
    "oldPrice": 1799.0,
    "discount": 23
  },
  {
    "id": "tcl-s55h",
    "name": "TCL 220W Soundbar 2.1",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "S55H",
    "category": "audio",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D13tIp1yyEavxH-qpWdEVJS4SHgd3X_2mb%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1_gCGbVTlFE0pOpzrOIthi1PqE4_ATbGH%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1v_4KVA09lJOWIaIDvRtUoYgkNaYjFYAD%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1wkKk4emQIsrGj4yheT-SadJJAfG4Gnc9%26sz%3Dw1000"
    ],
    "price": 2150.0,
    "rating": 4.5,
    "icon": "🔊",
    "tags": [
      "tcl",
      "audio",
      "top-deals"
    ],
    "description": "Soundbar\n220W\nWireless Subwoofer\nDolby Atmos\n2.1 Channel\nUSB\nHDMI",
    "oldPrice": 2699.0,
    "discount": 20
  },
  {
    "id": "tcl-q65h",
    "name": "TCL 580 W Soundbar 5.1",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "Q65H",
    "category": "audio",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1UdJ5ELXdWodHH_TmwEd5P2nQTQ7rMX7B%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1KgkmO23CQMg1yhKjBY442QjTVI01LSty%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D11AnXBnwK6ADUn4K3HIzYXscsqAvz5HdW%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1bSMWgxrTEYziZZggZSohX5Xx96sxgNlc%26sz%3Dw1000"
    ],
    "price": 4150.0,
    "rating": 4.5,
    "icon": "🔊",
    "tags": [
      "tcl",
      "audio",
      "top-deals"
    ],
    "description": "Soundbar\n580 W\n\nQLed Sound\n5.1 Physical Surround Channel\nTutti Choral\nDolby Atoms & DTS\nAI Sonic\nInky Arc Design",
    "oldPrice": 5399.0,
    "discount": 23
  },
  {
    "id": "tcl-q75h",
    "name": "TCL 620 W Soundbar 5.1.2",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "Q75H",
    "category": "audio",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1b-LJcK2txPAVI3-r1-fYW7Mx90d2foNH%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Kez8en-J0yl_roKc5zJB__BFmM67DJXI%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1mxGBbkI_rqMUpZpBTd0MIrBsRRTpBSdc%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1O21BhbcMGbh_pYB9IYgkyRVZxAksLZVL%26sz%3Dw1000"
    ],
    "price": 6700.0,
    "rating": 4.5,
    "icon": "🔊",
    "tags": [
      "tcl",
      "audio",
      "top-deals"
    ],
    "description": "Soundbar\n620 W\nQLed Sound\n5.1.2Physical Surround Channel\nTutti Choral\nDolby Atoms & DTS\nAI Sonic\nInky Arc Design\nGolden Ear Tuning",
    "oldPrice": 8999.0,
    "discount": 26
  },
  {
    "id": "tcl-q85h",
    "name": "TCL 860 W Soundbar 7.1.4",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "Q85H",
    "category": "audio",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1uunxeAwwckPt15ffdUbbOB-W7-FSGJ1n%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1esB4ynly_VzPN6u1iJdpoSU6eHmwfw3o%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D13hGPXbhZXFHJRRzunY3QgP0h866MpOV4%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1HQTyL-mEk-nF4reppFUTIHV4VffPD7ci%26sz%3Dw1000"
    ],
    "price": 8700.0,
    "rating": 4.5,
    "icon": "🔊",
    "tags": [
      "tcl",
      "audio",
      "top-deals"
    ],
    "description": "Soundbar\n860 W\n7.1.4 Channel Q Class Sound Bar\nDolby Atmos and DTS:X\nBluetooth Wireless Music Streaming\nRay Danz Technology with Acoustic Reflectors\nBuilt-In Tweeters\nBuilt-In Center Channel\nSound Bar with Up-Firing Speakers\nWireless Subwoofer with 6.5” Driver and Bass Boost\nWireless Surrounds with Up-Firing Speakers\nAi Sonic Auto Room Calibration\nDTS Virtual:X\nAirPlay2",
    "oldPrice": 10799.0,
    "discount": 19
  },
  {
    "id": "tcl-tp200k",
    "name": "TCL 220 W Sound Tower",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TP200K",
    "category": "audio",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D15JrwUPxpIsWBMGRDWWFA6oxutJKkgHP-%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1ZQLzsN9yzQhSFqBIoiY-WFQ6_6DzNqgY%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1B4p5T2zYbfqcHwp2mvo0b7WpKXowoGNr%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1y-ucMO-g4gMycbUNcXgqSxmMAeiMvnil%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1H4PFzOiV3Axe3ws653UmWneh1U288ucb%26sz%3Dw1000"
    ],
    "price": 3350.0,
    "rating": 4.5,
    "icon": "🔊",
    "tags": [
      "tcl",
      "audio",
      "top-deals"
    ],
    "description": "Sound Tower\n220 W",
    "oldPrice": 4499.0,
    "discount": 26
  },
  {
    "id": "tcl-tp300k",
    "name": "TCL 340W Sound Tower",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TP300K",
    "category": "audio",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1oRQxWZimhWKOoZz4NHvLF3l1f7QDPyhs%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1ZTtoxFNFhmn1eOHZKSbQFUnF5cV_1dZd%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1ZWEufqsUjEs0cUE-t5Yk75jlRmqq2L4i%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1n6jfXJwZ3si5tqRJnbzBhlGhVefRhz3h%26sz%3Dw1000"
    ],
    "price": 5350.0,
    "rating": 4.5,
    "icon": "🔊",
    "tags": [
      "tcl",
      "audio",
      "top-deals"
    ],
    "description": "Sound Tower\n340W",
    "oldPrice": 6299.0,
    "discount": 15
  },
  {
    "id": "tcl-tylyr47w",
    "name": "TCL 2 TAP WATER DISPENSER COMPRESSOR COOLING",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TY-LYR47W",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1M-NJgeZGg9unQkA02cGysuEk6NbPjbCW%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1V1-2hl2MrZv_VRSICVCG5NYGl4Sebs_o%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1M-NJgeZGg9unQkA02cGysuEk6NbPjbCW%26sz%3Dw1000"
    ],
    "price": 1399.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "Hot and Cold Water Dispenser\nTop Loading Standing Model Compressor cooling\nBlack Color\n2 Taps\n16 Ltrs",
    "oldPrice": 1899.0,
    "discount": 26
  },
  {
    "id": "tcl-tylwyr109w",
    "name": "TCL 3 TAPS COMPRESSOR COOLING",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TY-LWYR109W",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1B7J7SEtHChP7OkVRsspesmRzPjnIbpyj%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1NA8k8UE_xJv9-QD9QKHprNCmx1s6EXsI%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1E5JOqpgcNLnRvvPpiZj0ZlcMV_I-FhKk%26sz%3Dw1000"
    ],
    "price": 1550.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "COMPRESSOR COOLING\n3 TAPS",
    "oldPrice": 2099.0,
    "discount": 26
  },
  {
    "id": "tcl-tac12csdzg11",
    "name": "TCL 1.5 HP Split AC (R32)",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-12CSD/ZG11",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1hzxPZeD9f3Pcgqru01BGte5lis2yuRnW%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1lBFL1o2-kSkY6-qVz_EwR2lhgLUa_GqU%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1kWEXTI8pVOFb4aImW6qYmZKuTghTWUSd%26sz%3Dw1000"
    ],
    "price": 3350.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "tcl",
      "ac",
      "top-deals"
    ],
    "description": "TCL 1.5HP Split ON/OFF Air Condition R32.",
    "oldPrice": 3999.0,
    "discount": 16
  },
  {
    "id": "tcl-tac18csdzg11",
    "name": "TCL 2.0 HP Split AC (R32)",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-18CSD/ZG11",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1lBFL1o2-kSkY6-qVz_EwR2lhgLUa_GqU%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1hzxPZeD9f3Pcgqru01BGte5lis2yuRnW%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1kWEXTI8pVOFb4aImW6qYmZKuTghTWUSd%26sz%3Dw1000"
    ],
    "price": 5300.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "tcl",
      "ac",
      "top-deals"
    ],
    "description": "TCL 2.0 HP Split ON/OFF Air Condition",
    "oldPrice": 5999.0,
    "discount": 12
  },
  {
    "id": "tcl-tac24csdzg11",
    "name": "TCL 2.5 HP Split AC (R32)",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-24CSD/ZG11",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1kWEXTI8pVOFb4aImW6qYmZKuTghTWUSd%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1hzxPZeD9f3Pcgqru01BGte5lis2yuRnW%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1lBFL1o2-kSkY6-qVz_EwR2lhgLUa_GqU%26sz%3Dw1000"
    ],
    "price": 7450.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "tcl",
      "ac",
      "top-deals"
    ],
    "description": "TCL 2.5HP Split ON/OFF Air ConditionSplit AC (R32)",
    "oldPrice": 8999.0,
    "discount": 17
  },
  {
    "id": "tcl-tac12csdzg21i",
    "name": "TCL 1.5 HP Split Inverter AC (R32)",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-12CSD/ZG21I",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1meDPlLxj79mx5Ub9zNy4VZCRepjeMHvr%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1zspXOAVf0q81yJTh6G3vieQ5bg-Fe39o%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1jp3042VgtBL9QYB0Vonzr8-dj6JzLjGZ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WBF8Hc8t1JTTEcuYu3hbG0IVoMlMgGmo%26sz%3Dw1000"
    ],
    "price": 3800.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "tcl",
      "ac",
      "top-deals"
    ],
    "description": "Split Inverter AC (R32)\n1.5 HP",
    "oldPrice": 5499.0,
    "discount": 31
  },
  {
    "id": "tcl-tac18csdzg21i",
    "name": "TCL 2.0 HP Split Inverter AC (R32)",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-18CSD/ZG21I",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WBF8Hc8t1JTTEcuYu3hbG0IVoMlMgGmo%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1jp3042VgtBL9QYB0Vonzr8-dj6JzLjGZ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1zspXOAVf0q81yJTh6G3vieQ5bg-Fe39o%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1meDPlLxj79mx5Ub9zNy4VZCRepjeMHvr%26sz%3Dw1000"
    ],
    "price": 5800.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "tcl",
      "ac",
      "top-deals"
    ],
    "description": "Split Inverter AC (R32)\n2.0 HP",
    "oldPrice": 8299.0,
    "discount": 30
  },
  {
    "id": "tcl-tac24csdzg21i",
    "name": "TCL 2.5 HP Split Inverter AC (R32)",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-24CSD/ZG21I",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1meDPlLxj79mx5Ub9zNy4VZCRepjeMHvr%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1zspXOAVf0q81yJTh6G3vieQ5bg-Fe39o%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1jp3042VgtBL9QYB0Vonzr8-dj6JzLjGZ%26sz%3Dw1000"
    ],
    "price": 7200.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "tcl",
      "ac",
      "top-deals"
    ],
    "description": "Split Inverter AC (R32)\n2.5 HP",
    "oldPrice": 11399.0,
    "discount": 37
  },
  {
    "id": "tcl-tac12csaxa82i",
    "name": "TCL 1.5 HP Split Inverter AC (R410)",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-12CSA/XA82I",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1LmQn-5QFiNXNLhJgST5brn0L_BVmFv4C%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1slqhl5C-ym5CvfIJIkcJ4ZOXHRz5BFq7%26sz%3Dw1000"
    ],
    "price": 4800.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "tcl",
      "ac",
      "top-deals"
    ],
    "description": "Split Inverter AC (R410)\n1.5 HP",
    "oldPrice": 7099.0,
    "discount": 32
  },
  {
    "id": "tcl-tac18csaxa82i",
    "name": "TCL 2.0 HP Split Inverter AC (R410)",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-18CSA/XA82I",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1slqhl5C-ym5CvfIJIkcJ4ZOXHRz5BFq7%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1LmQn-5QFiNXNLhJgST5brn0L_BVmFv4C%26sz%3Dw1000"
    ],
    "price": 6700.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "tcl",
      "ac",
      "top-deals"
    ],
    "description": "Split Inverter AC (R410)\n2.0 HP",
    "oldPrice": 9699.0,
    "discount": 31
  },
  {
    "id": "tcl-tac24csaxa82i",
    "name": "TCL 2.5 HP Split Inverter AC (R410)",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-24CSA/XA82I",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1LmQn-5QFiNXNLhJgST5brn0L_BVmFv4C%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1slqhl5C-ym5CvfIJIkcJ4ZOXHRz5BFq7%26sz%3Dw1000"
    ],
    "price": 8500.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "tcl",
      "ac",
      "top-deals"
    ],
    "description": "Split Inverter AC (R410)\n2.5 HP",
    "oldPrice": 11799.0,
    "discount": 28
  },
  {
    "id": "tcl-tac18cfdmci",
    "name": "TCL 2.0 HP Floor Standing AC",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-18CFD/MCI",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1ErRV9_BCmW0jgE9P7zRgZsyJjWKHM0QD%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1w5l-Gclua-S4i0w4djN7k2PandULlWzP%26sz%3Dw1000"
    ],
    "price": 9600.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "tcl",
      "ac",
      "top-deals"
    ],
    "description": "Floor Standing AC\n2.0 HP",
    "oldPrice": 12699.0,
    "discount": 24
  },
  {
    "id": "tcl-tac24cfdv7i",
    "name": "TCL 2.5 HP Floor Standing AC",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "TAC-24CFD/V7I",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D19KPcfcjnRMgpwrDbikaeB5tC4TgNN9kv%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D14A4E7zv2fTOg__XEgVeU_xyn1oWk7eMQ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1PttiAGBg4B8Rq7sb_JMj8-2ExNOUwhZ6%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D11goWsS0tufoVpsF96aJlNKM835-f0Tkl%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D19WF5DaBnuhNVhVzZfdKXHg15OobXEMoX%26sz%3Dw1000"
    ],
    "price": 11200.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "tcl",
      "ac",
      "top-deals"
    ],
    "description": "Floor Standing AC\n2.5 HP",
    "oldPrice": 12999.0,
    "discount": 14
  },
  {
    "id": "tcl-f117sds",
    "name": "TCL 90 L Single Door Refrigerator",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F117SDS",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1GADhtcSn8oRJRgtZOMDU13W4lwfea93k%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D135cvjHMXIqlfVFKl4qolpqr3NnMs-Enp%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1x1ZUYj9ZFbqr-CizpyerhA9aKHUgnwea%26sz%3Dw1000"
    ],
    "price": 1899.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "90 Liters\nFast Cooling\nSilver\nTemperature Control",
    "oldPrice": 2199.0,
    "discount": 14
  },
  {
    "id": "tcl-f216tms",
    "name": "TCL 165 L Top Mount Refrigerator",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F216TMS",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1DULJXOmW-peMcpQA492u1WVQ8ZfRvdWE%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1z-IdAO-Zeo1nEbZyjnQs5hY98U2RNXRK%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1W_665rlfpS1E65wMejG7UhRCvgl1c6Bz%26sz%3Dw1000"
    ],
    "price": 2850.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "Top Mount Refrigerator\n165 L",
    "oldPrice": 3999.0,
    "discount": 29
  },
  {
    "id": "tcl-p540tmgwd",
    "name": "TCL 413 L Top Mount Refrigerator",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P540TMGWD",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1hNc9838HDVY3FUq9rsPZ-OrlG0wK9zpv%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WViHgFxxTcluaBKY6ovrVeB1i6INf3kx%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1J7_zHBJqGrhOg168pr7EX_N3QmAdXTSx%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1dDMNrRsDvgicADh3Gjce6fY5IwU77KZQ%26sz%3Dw1000"
    ],
    "price": 7700.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "Top Mount Refrigerator\n413 L",
    "oldPrice": 8999.0,
    "discount": 14
  },
  {
    "id": "tcl-p540tmg",
    "name": "TCL 415 L Top Mount Refrigerator",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P540TMG",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D16xf0DM3RY66KPNvROVzVJDT2HpjWRScL%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1gv70wj4iOkaCpE4S7THZghnuXb1uwL1e%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1D_pzdSs7CfUbM89QZeEOMw1sEe5D-LEz%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1l3Y1gnh6aZ_H9_DUEtm2KAPnSVAbhuq2%26sz%3Dw1000"
    ],
    "price": 7200.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "Top Mount Refrigerator\n415 L",
    "oldPrice": 8999.0,
    "discount": 20
  },
  {
    "id": "tcl-p624tmn",
    "name": "TCL 480 L Top Mount Refrigerator",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P624TMN",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1wvzuiRsr-ba5NRxLjsu47JUwHV4xfv8m%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1JLe6p_qs1keGj9YKMcyNEaWHEnq-oV-H%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1h0BG76-IlTOgE837TlO8GMVlXexerDvR%26sz%3Dw1000"
    ],
    "price": 9250.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "480 Liters\nFlexible Space\nAdjustable Shelves\n2L Bottle Space\nTempered Shelves\n90° Accessible\nTwin Eco Inverter\nPower Cool\nTotal No Frost\nTCL 480L Top Mount Refrigerator quantity",
    "oldPrice": 10499.0,
    "discount": 12
  },
  {
    "id": "tcl-p826tmn",
    "name": "TCL 635 L Top Mount Refrigerator",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P826TMN",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1LLiHO-SQPNx8wNQ91GJl3LraXe0dwgWk%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1xWIdvJsbLFt6n7UwrTS8tSo4YPMVqQ8O%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1_9KkyeuEX1JGMhXaVOK675ijCFtfO3c_%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1PItwdXv1YTX8h-QwYLak_FtDPyfb9I4o%26sz%3Dw1000"
    ],
    "price": 10500.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "Top Mount Refrigerator\n635 L",
    "oldPrice": 11999.0,
    "discount": 12
  },
  {
    "id": "tcl-f141bfs",
    "name": "TCL 108 L Bottom Mount Refrigerator",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F141BFS",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D16laeZmjvF_EKfSMZuQLBy4LjhgILGTGU%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1gzBqTER4xy7CzRaSmjSvQzscxyVstgJf%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D128IElHzZxuyksYJyeOzaYOX3UJkcgJr_%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D10ITamT1SmARQigSdzHyFI_qsRj_WtBT1%26sz%3Dw1000"
    ],
    "price": 2550.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "Bottom Mount Refrigerator\n108 L",
    "oldPrice": 2799.0,
    "discount": 9
  },
  {
    "id": "tcl-f185bfg",
    "name": "TCL 142 L Bottom Mount Refrigerator",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F185BFG",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D17Wp0F15NIhwAtYYaSpYSZmKoKa7X0Qs9%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1u15-WCIJYUcB1iuRCHBwNZ3QJ79NTS7a%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1ZHo6kN45ReVeBgpNhneaJqMSdtTqXwCe%26sz%3Dw1000"
    ],
    "price": 2999.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "Bottom Mount Refrigerator\n142 L",
    "oldPrice": 3299.0,
    "discount": 9
  },
  {
    "id": "tcl-f410bfs",
    "name": "TCL 309 L Bottom Mount Refrigerator",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F410BFS",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1OMsm1fAuR78TIhrzbArV0kTTMM62SZOT%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D19s4CbGt3OgGmMngEIn_SY83tnIFHy-lX%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1F9aQ9EmVhsGBACKgsaboGhOPBjByXwFZ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D12d_QnkYd-CeoSRn0oS0xsdbs8tKwLILN%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1LvRB-RoXy-_PuxuubUZjyPH3DCReoN_r%26sz%3Dw1000"
    ],
    "price": 5000.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "Bottom Mount Refrigerator\n309 L",
    "oldPrice": 7499.0,
    "discount": 33
  },
  {
    "id": "tcl-p575sbgwd",
    "name": "TCL 433 L Side-by-Side Refrigerator",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P575SBGWD",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1UJuTQC8f6_4HQjmx87ieQv1ISxEfSoEQ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1a7QlTNtf_Yc14UxWe4rmskabjT-jXkA-%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Z1nTjUG3DPjwz7dcpAOltk6t58m0weKr%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1cWLKkYnH9KYM4HEnbuBv7SrONou-lSVW%26sz%3Dw1000"
    ],
    "price": 9700.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "Side-by-Side Refrigerator\n433 L",
    "oldPrice": 11499.0,
    "discount": 16
  },
  {
    "id": "tcl-p692sbnwd",
    "name": "TCL 529  L Side-by-Side Refrigerator",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P692SBNWD",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1bKY6aON8Ko43Um9eun4eSvyXyAYtZiq7%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D13BQq6JI7q6waBiFP4kJv3zXiTvaYIRnS%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1kCVdOu3LJmngXxpE5WGPPo7ozcx-zzCA%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1BTObAuAILPsnqqM_Pw4rp8b2QH2L01nu%26sz%3Dw1000"
    ],
    "price": 9850.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "Twin ECO Inverter\nLed Light\nTotal No Frost\nMulti Door\nWater Dispenser\nSilver\n529 Liters",
    "oldPrice": 11999.0,
    "discount": 18
  },
  {
    "id": "tcl-p692sbbg",
    "name": "TCL 529 L Side-by-Side Refrigerator",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P692SBBG",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1KithAvCVjjIZGJ5AkS71RBC_fkhkQlKQ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D18C4rpUsBNE6i0ENJNq_1s9GHg6HSq0I8%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1BD3Ted__kc7Iul99LK8cUQst1XFtSLCk%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1c4vRyflZwUjc6H-FiSg9B8iXbbr0GuF9%26sz%3Dw1000"
    ],
    "price": 10700.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "529L\nTotal No Frost\nTwin Eco Inverter\nEnergy Saving\nElectronic Control\nPower Cool and Power Freeze\nBottle Space\nHumidity Crisper",
    "oldPrice": 11999.0,
    "discount": 11
  },
  {
    "id": "tcl-p547fdbg",
    "name": "TCL 421L French Door Refrigerator",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P547FDBG",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1KmXvlnyCnsh4lTnArNKxkG5KRmmTNRoS%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1MnzZ7uyPRlgXlrsXN-DHyIubnRiqjmem%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D13yWiXWKeON4eTUJACVHxJvLJH7Yk0Q5v%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1pgb7QvtpPjGfcxW2O8D_pnrOe8m62oon%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Cfok-Ukl0RxMHeY2vX-MbPdOwp7ICvgY%26sz%3Dw1000"
    ],
    "price": 11600.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "Multi Air Flow\nHumidity Slider Crisper\nTotal No Frost\nPower Cool & Freeze\nElectronic Control\nMirror Black",
    "oldPrice": 13499.0,
    "discount": 14
  },
  {
    "id": "tcl-f208sds",
    "name": "TCL 168 L Standing Freezer",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F208SDS",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1UiDTE2fcSw7MKXh3IatRAzeys0IWTzTm%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1IlBW42DLAFYLbuHIg3UyHATSHgmB-acW%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1d2ArzLkZyEHW2G93wwG7hJlMGRCzLK3u%26sz%3Dw1000"
    ],
    "price": 3399.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "Standing Freezer\n168 L",
    "oldPrice": 3999.0,
    "discount": 15
  },
  {
    "id": "tcl-f131cfsl",
    "name": "TCL 98 L Chest Freezer",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F131CFSL",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1XCgT1XPCgN6_El8qAC9mFrVJSsoxU8R8%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D19lp8jRMGSZDrvL0htnw5KVikQK4qcZmI%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1mWLXuZRl8hMeOUh6I_Gd-X5gRtiy6hMa%26sz%3Dw1000"
    ],
    "price": 2220.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n98 L",
    "oldPrice": 2399.0,
    "discount": 7
  },
  {
    "id": "tcl-f188cfsl",
    "name": "TCL 145 L Chest Freezer",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F188CFSL",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1qTKxRuO5jpdDv2Vz9uoug-jFd4t_Wdp5%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D12XwK9c1oEsjr1v9MRXJ22ZKmd_JwrXwo%26sz%3Dw1000"
    ],
    "price": 2520.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n145 L",
    "oldPrice": 2999.0,
    "discount": 16
  },
  {
    "id": "tcl-f326cfsl",
    "name": "TCL 251 L Chest Freezer",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F326CFSL",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D12XwK9c1oEsjr1v9MRXJ22ZKmd_JwrXwo%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1qTKxRuO5jpdDv2Vz9uoug-jFd4t_Wdp5%26sz%3Dw1000"
    ],
    "price": 3550.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n251 L",
    "oldPrice": 3999.0,
    "discount": 11
  },
  {
    "id": "tcl-f378cfsl",
    "name": "TCL 290 L Chest Freezer",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F378CFSL",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1qTKxRuO5jpdDv2Vz9uoug-jFd4t_Wdp5%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D12XwK9c1oEsjr1v9MRXJ22ZKmd_JwrXwo%26sz%3Dw1000"
    ],
    "price": 3850.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n290 L",
    "oldPrice": 4799.0,
    "discount": 20
  },
  {
    "id": "tcl-f494cfsl",
    "name": "TCL 380 L Chest Freezer",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F494CFSL",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D12XwK9c1oEsjr1v9MRXJ22ZKmd_JwrXwo%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1qTKxRuO5jpdDv2Vz9uoug-jFd4t_Wdp5%26sz%3Dw1000"
    ],
    "price": 4800.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n380 L",
    "oldPrice": 5499.0,
    "discount": 13
  },
  {
    "id": "tcl-f920cfsl",
    "name": "TCL 708 L Chest Freezer",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F920CFSL",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WGYyaYfdPQzTJ7_XNIJxwO6d4Q8ShcMR%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Ka2wh1CpcSDS3_60smDkRbRKyWVmTZm0%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1nsjCsTEyk90gfk_n7w2eO6GMXiviYOTB%26sz%3Dw1000"
    ],
    "price": 8150.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "tcl",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n708 L",
    "oldPrice": 9499.0,
    "discount": 14
  },
  {
    "id": "tcl-f709tl",
    "name": "TCL 9 KG Top Load Washer",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F709TL",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Zrn0La_IM1Ed207IHcm6cBUx73zvu96K%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Z913jmrsKGSleAclwBwhBhdKcvUkHwN4%26sz%3Dw1000"
    ],
    "price": 3300.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "tcl",
      "laundry",
      "top-deals"
    ],
    "description": "Top Load Washer\n9 KG\n9Kg\nDrum Clean\nSafety Lock\n24Hr Delay\nMagic Filter\nWhite\nFuzy Control",
    "oldPrice": 4899.0,
    "discount": 33
  },
  {
    "id": "tcl-f711tl",
    "name": "TCL 10.5 KG Top Load Washer",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "F711TL",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1XSwWRpjT3ID4VsE5-QESO1AeQi9PWvMe%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1EVPSgFTc6gUih2440MdIVBmh7zeu774X%26sz%3Dw1000"
    ],
    "price": 3900.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "tcl",
      "laundry",
      "top-deals"
    ],
    "description": "Top Load Washer\n10.5 KG",
    "oldPrice": 5699.0,
    "discount": 32
  },
  {
    "id": "tcl-p607fl",
    "name": "TCL 7 KG Front Load Washer",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P607FL",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1YPL1vky_bbPAimnyjBwJ6fzksCK-3A2H%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1XWgB9fVt7pL_9lMpD5A0lqRnwecJgJE1%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1ADPPPI6VN_tVEZ7IqBAfBTtprJ5bUZ50%26sz%3Dw1000"
    ],
    "price": 3350.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "tcl",
      "laundry",
      "top-deals"
    ],
    "description": "Front Load Washer\n7 KG",
    "oldPrice": 3999.0,
    "discount": 16
  },
  {
    "id": "tcl-p1108flg",
    "name": "TCL 8 KG Front Load Inverter Washer",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P1108FLG",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1CTV0J3iESKqN2LH0J8VdKYmADYGtS0lr%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D14JDQ37R5O5TCVVimrzeAzybdlZhsadBn%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1bpS5tisRw_Xu6aUc9qtSyi7IsHz5s7q5%26sz%3Dw1000"
    ],
    "price": 5600.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "tcl",
      "laundry",
      "top-deals"
    ],
    "description": "Front Load Inverter Washer\n8 KG\nDd Motor\nLed Display\nDrum Clean\nSound Off Function\n24 Hour Delay\nChild Lock",
    "oldPrice": 7099.0,
    "discount": 21
  },
  {
    "id": "tcl-p1109flg",
    "name": "TCL 9 KG Front Load Inverter Washer",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P1109FLG",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1HQ32-BPpkUM65lDyJ-WXv_kU55bwcvVG%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1fACnkRSqclExF1OFfG3LBQd6Ih6IOL8p%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1PiOlU347vTTUXin-gzJaVl8Nqf9rxB5H%26sz%3Dw1000"
    ],
    "price": 6199.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "tcl",
      "laundry",
      "top-deals"
    ],
    "description": "Front Load Inverter Washer\n9 KG\nDigital Inverter\nAdd Garment\nDrum Clean\nSafety Lock\n25Hrs Delay\nHeat Sterilization\nTcl Honeycumb Drum\nSilver",
    "oldPrice": 7499.0,
    "discount": 17
  },
  {
    "id": "tcl-p211flg",
    "name": "TCL 10.5 KG Front Load Inverter Washer",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P211FLG",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1EfE7N1DiqyMj3UjpFkZu3-pKgEEnNNib%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1fw2OZyfU69YqemWWWHMU4Izoa34fI7bS%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1KrjVWz2gKGWFd6OSgB2tbLlOUsNGGkKH%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1kR5DXFtPY81VPuhybes4XSQVC8Uidq4q%26sz%3Dw1000"
    ],
    "price": 6750.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "tcl",
      "laundry",
      "top-deals"
    ],
    "description": "Front Load Inverter Washer\n10.5 KG\nDigital Inverter\nAdd Garment\nDrum Clean\nSafety Lock\n25Hrs Delay\nHeat Sterilization\nTcl Honeycumb Drum\nSilver",
    "oldPrice": 8299.0,
    "discount": 19
  },
  {
    "id": "tcl-c211wdg",
    "name": "TCL 10.5 KG\\ 6 KGS Washer & Dryer",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "C211WDG",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1xFIPDISnoxtu0FQ-jV0iHSIzG9vsPwIW%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D110JUEo8ZM7pcl1BiWz7Crv0QbEhhBUzG%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1ronc3YGSJy-g5dNI8PuDVYceS_Wm7bdO%26sz%3Dw1000"
    ],
    "price": 7900.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "tcl",
      "laundry",
      "top-deals"
    ],
    "description": "Washer & Dryer\n10.5 KG\\ 6 KGS\nDigital Inverter\nAdd Garment\nDrum Clean\nSafety Lock\n25Hrs Delay\nHeat Sterilization\nTcl Honeycumb Drum\nSilver",
    "oldPrice": 9699.0,
    "discount": 19
  },
  {
    "id": "midea-msaf24b12crdn1",
    "name": "Midea 1.5 HP Split Inverter AC (R410)",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSAF24B-12CRDN1",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1QVmOQIqDagZ9v_nJiNMSNmAmpVo4Me4Z%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1uGId6Lag5N0AI56pT9EwNm7RMbtQ4QGc%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1if8DR4uIZf6mc5GzIxSb_PqAJQTI1E-9%26sz%3Dw1000"
    ],
    "price": 4250.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "midea",
      "ac",
      "top-deals"
    ],
    "description": "Split Inverter AC (R410)\n1.5 HP",
    "oldPrice": 6399.0,
    "discount": 34
  },
  {
    "id": "midea-msag12crdn8",
    "name": "Midea 1.5 HP Split Inverter AC (R32)",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSAG-12CRDN8",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1_OcMPXJtP1jqCFUVvJXaX_KJDfccMXK-%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1lz5ZlqW2n0RDwAkbNd3hso2zqoKJV1hf%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1q1WyoilRumFBFiE3nuriZjgli-eM3zKB%26sz%3Dw1000"
    ],
    "price": 4950.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "midea",
      "ac",
      "top-deals"
    ],
    "description": "Split Inverter AC (R32)\n1.5 HP",
    "oldPrice": 6199.0,
    "discount": 20
  },
  {
    "id": "midea-msag18crdn8",
    "name": "Midea 2.0 HP Split Inverter AC (R32)",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSAG-18CRDN8",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1q1WyoilRumFBFiE3nuriZjgli-eM3zKB%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1lz5ZlqW2n0RDwAkbNd3hso2zqoKJV1hf%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1_OcMPXJtP1jqCFUVvJXaX_KJDfccMXK-%26sz%3Dw1000"
    ],
    "price": 7200.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "midea",
      "ac",
      "top-deals"
    ],
    "description": "Split Inverter AC (R32)\n2.0 HP",
    "oldPrice": 8299.0,
    "discount": 13
  },
  {
    "id": "midea-msag24crdn8",
    "name": "Midea 2.5 HP Split Inverter AC (R32)",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSAG-24CRDN8",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1_OcMPXJtP1jqCFUVvJXaX_KJDfccMXK-%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1lz5ZlqW2n0RDwAkbNd3hso2zqoKJV1hf%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1q1WyoilRumFBFiE3nuriZjgli-eM3zKB%26sz%3Dw1000"
    ],
    "price": 11200.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "midea",
      "ac",
      "top-deals"
    ],
    "description": "Split Inverter AC (R32)\n2.5 HP",
    "oldPrice": 12299.0,
    "discount": 9
  },
  {
    "id": "midea-msagbu12hrfn7",
    "name": "Midea 1.5 HP Split Inverter AC (R290)",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSAGBU-12HRFN7",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1YmvUFkQcTVAdrTZBlLTs1r9dORinflK9%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1DddSqwhfW_f96TyzYdvCK006zQGLn5ap%26sz%3Dw1000"
    ],
    "price": 5450.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "midea",
      "ac",
      "top-deals"
    ],
    "description": "Split Inverter AC (R290)\n1.5 HP",
    "oldPrice": 8499.0,
    "discount": 36
  },
  {
    "id": "midea-msafc17crdn8mox23018cdn8q",
    "name": "Midea 2.0HP Split Inverter AC (R32)",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MSAFC-17CRDN8/MOX230-18CDN8-Q",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1eA6faPOyTWn3THyBYP3tvBmR95g5Dhx6%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D13p8S9DmS0qtkG7h4i4qba1NoONBYEBlu%26sz%3Dw1000"
    ],
    "price": 6500.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "midea",
      "ac",
      "top-deals"
    ],
    "description": "Split Inverter AC (R32)\n2.0HP",
    "oldPrice": 8799.0,
    "discount": 26
  },
  {
    "id": "midea-mftj36crn1",
    "name": "Midea 36000 BTU Split AC (R410)",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MFTJ-36CRN1",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1aiiUpKOeZTJDhDgyFbnoLNFxu8CnPYZ4%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D17p9i5GT3YRTtAzDB2whfL6GOSBAs5vSp%26sz%3Dw1000"
    ],
    "price": 16700.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "midea",
      "ac",
      "top-deals"
    ],
    "description": "Split AC (R410)\n36000 BTU\nActive Carbon Silver\nLow Noise\nFast Cooling\nAuto Restart\nR410\nEnergy Saving\n3.5 Hp",
    "oldPrice": 19999.0,
    "discount": 16
  },
  {
    "id": "midea-mj248crn1",
    "name": "Midea 48000 BTU Split AC (R410) 5HP",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MJ2-48CRN1",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1sbPV7FP-_Qh8NFFXZPFrKEeVP4hZ4Wpt%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1q8XjWsHgPZ45weH7BCdsZL_OuGvc1BvD%26sz%3Dw1000"
    ],
    "price": 22000.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "midea",
      "ac",
      "top-deals"
    ],
    "description": "Split AC (R410)\n48000 BTU\nActive Carbon Silver\nLow Noise\nFast Cooling\nAuto Restart\nR410\nEnergy Saving\n5.0Hp",
    "oldPrice": 27899.0,
    "discount": 21
  },
  {
    "id": "midea-mfpa40048hrfn1",
    "name": "Midea 48000 BTU/H Floor Standing AC",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MFPA400-48HRFN1",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D15QwAB6-L0SKLbVzNet284Ut7es_SKQFJ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Yw1BhNa_4nIOJOowkAwf99QUxBBFW0VD%26sz%3Dw1000"
    ],
    "price": 25500.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "midea",
      "ac",
      "top-deals"
    ],
    "description": "Floor Standing AC\n48000 BTU/H\n5.0Hp\nTurbo Mode\nAuto Restart\nEco Friendly\nFilter Provided\nFast Cooling\nLow Noise\nEnergy Saving",
    "oldPrice": 36499.0,
    "discount": 30
  },
  {
    "id": "midea-mfpa18crdn1",
    "name": "Midea 18000 btu Floor Standing AC",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MFPA-18CRDN1",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1_TDzlCDIGdgAihq8eMeuK7cFTYsYTAYm%26sz%3Dw1000"
    ],
    "price": 9650.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "midea",
      "ac",
      "top-deals"
    ],
    "description": "Floor Standing AC\n18000 btu",
    "oldPrice": 13999.0,
    "discount": 31
  },
  {
    "id": "midea-fs4019k",
    "name": "Midea Standing Freezer",
    "brand": "Midea",
    "brandId": "midea",
    "model": "FS40-19K",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1n4XcPQCqxGRb5oqQFsi6ssQppDKiLAoq%26sz%3Dw1000"
    ],
    "price": 399.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "midea",
      "fridge",
      "top-deals"
    ],
    "description": "Standing Freezer\nLed Light\n3 Blades\n3 Speeds\nBig Air Flow\nEnergy Saving",
    "oldPrice": 699.0,
    "discount": 43
  },
  {
    "id": "midea-fs4523mrd",
    "name": "Midea 18'' Rechargeable Fan",
    "brand": "Midea",
    "brandId": "midea",
    "model": "FS45-23MRD",
    "category": "small",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1sgfC_cQ9AlxWbaWlBZvQRtehuOEtuuhk%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1O56GGydOZan-ujBnf3ryH-Mpz0bHkgtg%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1AyJ1WqRnknbfyLYm9TTqGHC7zuR-BuNR%26sz%3Dw1000"
    ],
    "price": 999.0,
    "rating": 4.5,
    "icon": "⚡",
    "tags": [
      "midea",
      "small",
      "top-deals"
    ],
    "description": "Rechargeable Fan\n18''\n30 W\n9 Speeds\n5 Blades\n33m3/m Flow rate\nWhite\nEnergy Saver\nDigital Remote",
    "oldPrice": 1099.0,
    "discount": 9
  },
  {
    "id": "midea-mdrd142fgn50",
    "name": "Midea 93 L Table Top Refrigerator",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRD142FGN50",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D15iTI94CPFTvNCEQWv-7vzESOQfZ9_jvX%26sz%3Dw1000"
    ],
    "price": 1999.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "midea",
      "fridge",
      "top-deals"
    ],
    "description": "Table Top Refrigerator\n93 L\nSingle Door\nFreezer\nKey Lock\nSilver",
    "oldPrice": 2899.0,
    "discount": 31
  },
  {
    "id": "midea-mdrt134fgn50",
    "name": "Midea 87 L Table Top Refrigerator",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRT134FGN50",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1plQQ0qFR3kgacxCG9-nYZ6c_jDAtm__w%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1vGrTgrK2ivXzlZ-04uwZYCbZoobGoV1J%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1b9qZaA1UQAPahKYEn7oeU9vhPZEVP3G_%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1bW6EoPy1ji8jsswVntvg46bjV6w0kRKP%26sz%3Dw1000"
    ],
    "price": 1699.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "midea",
      "fridge",
      "top-deals"
    ],
    "description": "Table Top Refrigerator\n87 Liters\nNo Frost\nSilver\nEnergy Saving\nAdjustable Shelves\nDouble Door",
    "oldPrice": 3499.0,
    "discount": 51
  },
  {
    "id": "midea-mdrb424fgf02",
    "name": "Midea 302L Double Door Bottom Freezer 4 Stars",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRB424FGF02",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1ykk88rIw9PyFgufUIL2tMNbspAeBElo-%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1xDaQZsZZ_FxviUMolLT2cRaGhRe0YAXQ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1fj7wTbucRynh_05K6WuUfYonvnI4rlFm%26sz%3Dw1000"
    ],
    "price": 7750.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "midea",
      "fridge",
      "top-deals"
    ],
    "description": "Table Top Refrigerator\nDouble Door\n4 Stars\nSilver\nLock\nLed Light\nNo Frost",
    "oldPrice": 10799.0,
    "discount": 28
  },
  {
    "id": "midea-mdrt241ftgn50",
    "name": "Midea 174 L Bottom Mount Refrigerator",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRT241FTGN50",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1S1xPWuk4nFcqEAS8FxwlWNQW8x0Wb1G3%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1A5KWOfO2NOt3jq_DmV0cWbqKHU-O8Zo7%26sz%3Dw1000"
    ],
    "price": 3299.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "midea",
      "fridge",
      "top-deals"
    ],
    "description": "Bottom Mount Refrigerator\n174 Ltrs\nLed Lamp\nTemperature Control Knob\nBig Door Tray\nSmall Door Tray\nFruits And Vegetable Box\nShelf\nEnergy Saving",
    "oldPrice": 4899.0,
    "discount": 33
  },
  {
    "id": "midea-mdrt645mtn46d",
    "name": "Midea 463 L DEFROST  TOP FREEZER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRT645MTN46D",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Z7ir4aPoqA9LuUcDdCuxiZruKs8EUBFy%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1bDABUtstzZGmsrj6KyQqCN0RD1Y8sQpJ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Ov6Nc67yzzp544gY3aJOp7vKhYx4k5E6%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1GSUFOPH_EnVdv7nEpgP3xD4SEogPBdew%26sz%3Dw1000"
    ],
    "price": 7800.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "midea",
      "fridge",
      "top-deals"
    ],
    "description": "DEFROST  TOP FREEZER\nTop Freezer\nSilver\nLed Light\nNo Frost\nEnergy Saving\n463 Ltrs",
    "oldPrice": 11399.0,
    "discount": 32
  },
  {
    "id": "midea-mdrt489mtn46",
    "name": "Midea 360 L DEFROST  TOP FREEZER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRT489MTN46",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1S6L4HoVdOl317IL_b8fK55Q24hte9jgc%26sz%3Dw1000"
    ],
    "price": 6750.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "midea",
      "fridge",
      "top-deals"
    ],
    "description": "DEFROST  TOP FREEZER\n360 L\nNo Frost Cooling\nChild Lock\nEnergy Saving\nHumidify Control\nLED interior lighting\nMulti Air Flow",
    "oldPrice": 9199.0,
    "discount": 27
  },
  {
    "id": "midea-mdrt294fgn28",
    "name": "Midea 207 L DEFROST  TOP FREEZER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRT294FGN28",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1xpBAIA2sxSRfDzgseyixn3QwqwX4pYGD%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1nkR8khbiYBZKT00XHSROz2JDI53HWETy%26sz%3Dw1000"
    ],
    "price": 3400.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "midea",
      "fridge",
      "top-deals"
    ],
    "description": "DEFROST  TOP FREEZER\n207 L\nNo Frost Cooling\nChild Lock\nEnergy Saving\nHumidify Control\nLED interior lighting\nMulti Air Flow",
    "oldPrice": 4599.0,
    "discount": 26
  },
  {
    "id": "midea-mdrt187fgg28",
    "name": "Midea 128 L DEFROST  TOP FREEZER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRT187FGG28",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1nPr3laCXzQtDy_Jmn-PAgd_zwP4QgcHi%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1ZNiWwi4Wge7gVMTgK6KumxfSPtz_cgAa%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1krs1zWStFTyqMGBojGPbKbmDyow9QIRf%26sz%3Dw1000"
    ],
    "price": 2499.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "midea",
      "fridge",
      "top-deals"
    ],
    "description": "DEFROST  TOP FREEZER\n128 L\nReversible Door\nTop Freezer\nBlack\nLock\nLED Light\nNo Frost\n128 Ltrs",
    "oldPrice": 3599.0,
    "discount": 31
  },
  {
    "id": "midea-mdrz302fzg21",
    "name": "Midea 211 L Single Door Refrigerator",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRZ302FZG21",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1YGRG1xuwbpsT4l4SPLaCTJ-cjhUs13oN%26sz%3Dw1000"
    ],
    "price": 44700.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "midea",
      "fridge"
    ],
    "description": "Single Door Refrigerator\n211 L"
  },
  {
    "id": "midea-mdrz432fzg21",
    "name": "Midea 316 L Single Door Refrigerator",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRZ432FZG21",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1cRVvOC2_oTnFOqC-be63-YX0r7juLUxn%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1EPfgRBcmMUqDtucKHkVuGpZUdcJZmnmu%26sz%3Dw1000"
    ],
    "price": 5650.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "midea",
      "fridge",
      "top-deals"
    ],
    "description": "Display Fridge\nGlass Door\nLed Light\nLock Key\nEnergy Saving",
    "oldPrice": 7899.0,
    "discount": 28
  },
  {
    "id": "midea-mdrc193fzg43d",
    "name": "Midea 99 L INVERTER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRC193FZG43D",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1uuBYw9wRMSBJ1XOPZ44EYH1ichwZfd1N%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1YFvoU5zPwuOVXr5Hj14-jnWq1CEViUZC%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1r12a4tWp3An2jfl7aDuniPsBP6_7DgrA%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1SS0a64p_RLRjIC0ocP3DcamnqNfVfa78%26sz%3Dw1000"
    ],
    "price": 2030.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "midea",
      "fridge",
      "top-deals"
    ],
    "description": "INVERTER\n99 Liters\nLock and Key\nEnergy Saving\nAdjustable Thermostat\nBlack\nRemovable Storage Basket\nManual defrost system\nInverter Compressor",
    "oldPrice": 2499.0,
    "discount": 19
  },
  {
    "id": "midea-mdrc265fzg43d",
    "name": "Midea 143 L INVERTER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRC265FZG43D",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1j7fYV4QtgcZPHyo0kBUUnRLYrwML36GQ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1vAs2zl3i9Kjgwp7V4P0CwAZeQY28LPph%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D18YJ_fDrXQb-9-_zsGLGl0KNIgNV8d0Th%26sz%3Dw1000"
    ],
    "price": 2500.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "midea",
      "fridge",
      "top-deals"
    ],
    "description": "INVERTER\n143 L\nEnergy Saving\nChild Lock\nAdjustable Thermostat\nRemovable Storage Bucket\nInverter Quattro",
    "oldPrice": 2899.0,
    "discount": 14
  },
  {
    "id": "midea-mdrc362fzg43d",
    "name": "Midea 198 L INVERTER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRC362FZG43D",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1j7fYV4QtgcZPHyo0kBUUnRLYrwML36GQ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D18YJ_fDrXQb-9-_zsGLGl0KNIgNV8d0Th%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1vAs2zl3i9Kjgwp7V4P0CwAZeQY28LPph%26sz%3Dw1000"
    ],
    "price": 2850.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "midea",
      "fridge",
      "top-deals"
    ],
    "description": "INVERTER\n198 L\nEnergy Saving\nChild Lock\nAdjustable Thermostat\nRemovable Storage Bucket\nInverter Quattro",
    "oldPrice": 3499.0,
    "discount": 19
  },
  {
    "id": "midea-mdrc407fzn43d",
    "name": "Midea 294 L INVERTER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRC407FZN43D",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1_LW7zOCyQzK4JUP2XSjbiIP6yyYTgl9W%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1tNTnywJcOn67_5ztIQztDeCXBlm0hA9m%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Bc5ypusU2TkWlUTbayuWLNI0DnWCJK5r%26sz%3Dw1000"
    ],
    "price": 4350.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "midea",
      "fridge",
      "top-deals"
    ],
    "description": "INVERTER\n294 L\nAdjustable Thermostat\nRemovable Storage Tray\nEnergy Saving\nDrainage Hole\nEasy Cleaning Interior\nInverter",
    "oldPrice": 5399.0,
    "discount": 19
  },
  {
    "id": "midea-mf110w80bt",
    "name": "Midea 8 KG Front Load Washer",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MF110W80B/T",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1FMBhR-AH_VGskMAycUNTaM-URMpBUCV7%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1oNDWUFu4x7UcwWD7if__aPXxLC3dQs_r%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1uqnrLR3LPo3bAPhAHF53-Mkxi-9DAcb-%26sz%3Dw1000"
    ],
    "price": 4800.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "midea",
      "laundry",
      "top-deals"
    ],
    "description": "Front Load Washer\n8 KG",
    "oldPrice": 6399.0,
    "discount": 25
  },
  {
    "id": "midea-mf110w70t",
    "name": "Midea 7 KG Front Load Washer",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MF110W70/T",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1xMAx9NIpuX8te6zGgXZ_dtY_g73NpPCD%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1gswIvHpCASZdy9VnFopCrgXSfdQ0CXvE%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1P_ISxn_uagXNFWZT3n9cTjTKyzJ4xLBq%26sz%3Dw1000"
    ],
    "price": 3850.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "midea",
      "laundry",
      "top-deals"
    ],
    "description": "Front Load Washer\n7 KG",
    "oldPrice": 5499.0,
    "discount": 30
  },
  {
    "id": "midea-yl1674sb",
    "name": "Midea 16 ltr Water Dispenser",
    "brand": "Midea",
    "brandId": "midea",
    "model": "YL1674S-B",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D17nvzbc2amoc2m3H-HeettfgTkEDg0mwT%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1bemYj7hPhT1jJGmBrA-2IHV-1-8ybi-W%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1JUiceuFDebm1xKQ5PpEfJWOUiscb3Tgv%26sz%3Dw1000"
    ],
    "price": 2199.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "16Ltrs\n3 Taps\nFridge Cabinet\nGrey\nEnergy Saving",
    "oldPrice": 2499.0,
    "discount": 12
  },
  {
    "id": "midea-yl2037sw",
    "name": "Midea Water Dispenser16 Liters",
    "brand": "Midea",
    "brandId": "midea",
    "model": "YL2037S-W",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1qa42QKdeuXnPe1gzs5_1_p1o5Vw0gfrv%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1royrowBKc4Fl1ICFnxSIPCkQFScn8S7t%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Pcantzs5XIFHkbxUyQ1u70p63wIJgsP1%26sz%3Dw1000"
    ],
    "price": 1799.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "16 Liters\n3 Taps\nStorage Cabinet\nEnergy Saving",
    "oldPrice": 1999.0,
    "discount": 10
  },
  {
    "id": "midea-sp5055t082b",
    "name": "Midea 4 BURNERS 4 BURNER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "SP5055T082-B",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D16Qa5eY20Af8UkFYf4-oJywRSDWv2z7BI%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1K26T1sFsjr24YEncSVTuoKcJHxZR2M9v%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1AbzrsQGJMc2vrLEZyJlQL4BvKZS0FkZ9%26sz%3Dw1000"
    ],
    "price": 1499.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "4 Burner\nBlack Mirror\n50 X 50 Cm\nOven\nSpecial Nobs\nInox",
    "oldPrice": 2599.0,
    "discount": 42
  },
  {
    "id": "midea-sp5055t082s",
    "name": "Midea 4 BURNER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "SP5055T082-S",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1gLAv-J2RAs3gqstcTP0N394yZC_tmoWb%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1-zrEnBYWAcjgK0RGjENd7-xgTifZbSOT%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Cc1xo1OWvyMopbYXep9S0_2oLY8U0IAn%26sz%3Dw1000"
    ],
    "price": 1550.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "4 BURNER",
    "oldPrice": 2699.0,
    "discount": 43
  },
  {
    "id": "midea-36lmg5g080v",
    "name": "Midea 5 BURNER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "36LMG5G080V",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D14RyH28VRa3KugfSxfIFbx_XrHk7aUX1R%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1b4yzEt8Sa8ejSQ3ennnnDV6aAZoY082p%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D13_vop-QkzHdwsX7Bc-TRPEFVAjaIceVc%26sz%3Dw1000"
    ],
    "price": 6180.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "5 BURNER",
    "oldPrice": 9199.0,
    "discount": 33
  },
  {
    "id": "midea-eg925eff",
    "name": "Nasco 25 LTRS GRILL",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "EG925EFF",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D17b6YWzUoS__9pWrjr2WzIddwRd5aca2Z%26sz%3Dw1000"
    ],
    "price": 1699.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "nasco",
      "kitchen",
      "top-deals"
    ],
    "description": "GRILL\n25 LTRS\n1450W\nSilver\nLock",
    "oldPrice": 1999.0,
    "discount": 15
  },
  {
    "id": "midea-eg9p032mxs",
    "name": "Midea 30 LTRS GRILL",
    "brand": "Midea",
    "brandId": "midea",
    "model": "EG9P032MX-S",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1_IzNfUbbNys0Iabv7yooU-0w6qLlSL4h%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1TJqYkCnbQ76-TP7OY_rqLCeLA2BCyV61%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1EoeJewEYuV4L7Fwq_VSEaqDFk3qtxPXM%26sz%3Dw1000"
    ],
    "price": 1799.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "30 Ltrs\nGlass Tray\n900 W\nControl Panel\n5 Power Levels\nOven Cavity\nSafety Interlock System\nOven",
    "oldPrice": 1899.0,
    "discount": 5
  },
  {
    "id": "midea-mm7p012mzb",
    "name": "Midea 20 LTRS SOLO",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MM7P012MZ-B",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1rSN88tBcr7sdrStdizIHCnc89E7bYJ9j%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1-VvDAleQJr19IXlpdat_FWcYTBgw2ULm%26sz%3Dw1000"
    ],
    "price": 699.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "Black\nSilver Handle\n5 Levels\n8 Auto Menu\nChild Safety Lock\n700 Watt",
    "oldPrice": 1099.0,
    "discount": 36
  },
  {
    "id": "midea-em9p032mos",
    "name": "Midea 30 LTRS - SILVER SOLO",
    "brand": "Midea",
    "brandId": "midea",
    "model": "EM9P032MO-S",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1fGGkevOKsKfaRWKjTN04Jcw4XtciU26V%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1A0FSScnVWxfVihbE5HB2Ryo7riLw3lg2%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D17dW8Tw4KZ8Aqn0JmFsrQ0OTHyJ11qPFI%26sz%3Dw1000"
    ],
    "price": 1499.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "30 Liters\n900 Watt\n5 Power Levels\n220-240V\nLarge Cavity\nObservation Window\nSafety Interlock System\nSilver\nOven",
    "oldPrice": 1799.0,
    "discount": 17
  },
  {
    "id": "midea-em9p032mob",
    "name": "Midea Microwave 30 LTRS - BLACK SOLO",
    "brand": "Midea",
    "brandId": "midea",
    "model": "EM9P032MO-B",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1v2tJQui-vHIJ3QimiI7sud6_vvZxH1su%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1koIWqChRWHI-37fUU61dCW1Tn7eEAaxl%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1KRZiljGVMzSgt6qCMESnoNzVdIgvKyeU%26sz%3Dw1000"
    ],
    "price": 1399.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "SOLO\n30 LTRS - BLACK\n900 W\n5 Power Levels\n220-240V\nLarge Cavity\nObservation Window\nSafety Interlock System\nOven",
    "oldPrice": 1699.0,
    "discount": 18
  },
  {
    "id": "midea-em034a2mob",
    "name": "Midea Microwave 34 LTRS - BLACK SOLO",
    "brand": "Midea",
    "brandId": "midea",
    "model": "EM034A2MO-B",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1J1aQUIr1sY9ZDwvPC2pZMte8ilWjw-sh%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1gWSL1YhioVU8DQ5GxzoPR_ynb0Tk4LwT%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1S-18BugWdoBCJCC-10ArWCcXneekrcVj%26sz%3Dw1000"
    ],
    "price": 1799.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "SOLO\n34 LTRS - BLACK\n900 Watt\n30s Express Start\n230V / 50Hz\nLarge Cavity\nObservation Window\nSafety Interlock System\nBlack\nECO Mode",
    "oldPrice": 1899.0,
    "discount": 5
  },
  {
    "id": "midea-em142a2mib",
    "name": "Midea 42 LTRS - SILVER SOLO",
    "brand": "Midea",
    "brandId": "midea",
    "model": "EM142A2MI-B",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1DAJrA8rmSJ1rzDoD4uDoiRMwKWf7-L_q%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1ewGe82ML4whdaNz2BUAx7LgNza6ZHL1D%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1hN11uWvilBWExKuJv0V14rFL9CdC4kOT%26sz%3Dw1000"
    ],
    "price": 1999.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "SOLO\n42 LTRS - SILVER\n900 W\n5 Power Levels\n220-240V\nLarge Cavity\nObservation Window\nSafety Interlock System\nBlack\nOven",
    "oldPrice": 2299.0,
    "discount": 13
  },
  {
    "id": "midea-mdre353fgn01",
    "name": "Midea 238 LTRS FRDIGE BUILT IN",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MDRE353FGN01",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1UyzS1NLabthb8niGyGSj11zj3XlGwr09%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1iQkPKZ7j5_LJQuLk6HlUY-pvRSj0g2j8%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1pUA3msJ_zm3Ajr_ItoLG9cmNHb2ccXPF%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1gwhMbfRoP6k5PJ9GUpKrbjMYJ0KmnFf2%26sz%3Dw1000"
    ],
    "price": 8800.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "midea",
      "fridge",
      "top-deals"
    ],
    "description": "FRDIGE BUILT IN\n238 LTRS",
    "oldPrice": 9999.0,
    "discount": 12
  },
  {
    "id": "midea-mfa06d80bw",
    "name": "Midea 8 KG/ 6KG Washer & Dryer",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MFA06D80B/W",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Dm4Hx-D-fqB8AAV_cNWL91mMVcENvt1H%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1faBOFLs_S1bVbgImnDOBARkJGut3XIJC%26sz%3Dw1000"
    ],
    "price": 6700.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "midea",
      "laundry",
      "top-deals"
    ],
    "description": "Washer & Dryer\n8KG Wash\n6KG Dryer\n1400 RPM\nLED Display\nChild Lock\nEnergy Saving",
    "oldPrice": 10999.0,
    "discount": 39
  },
  {
    "id": "midea-mc68aba",
    "name": "Midea 68 LTR ELECTRIC OVEN",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MC68ABA",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D14c4Nu2govL3vxB4igug825HG0ewXLYwP%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D16iTL_6SrPumnzBT9bDddFgoAgd1yogum%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1_n9FtJruUINKixNVcmz11TWnzm3IS-O5%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1I7f7CgQmiVh6g216tOLaISUMmat5Nw0y%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1v6aod-vRGFj_oOWOPxbaP0REzS8OQD0L%26sz%3Dw1000"
    ],
    "price": 1799.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "ELECTRIC OVEN\n68 LTR",
    "oldPrice": 2199.0,
    "discount": 18
  },
  {
    "id": "midea-mfcn40e2",
    "name": "Midea 4 LTR - BLACK AIR FRYER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MF-CN40E2",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Y349i4deZre5-bAAZWZus7vfJHuFA2l3%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D18bESnzFtYXJG2h0KKffNJFBH4oaE8zTe%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1uS6NvNVPkVmSb-mUeJeSetzofVp3wdw6%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1AgB02kXMTy3TaQnwyLA3uuiJOCsPwb4p%26sz%3Dw1000"
    ],
    "price": 599.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "4 Liter\n60 Minute Auto-Timer\nLED Digital Display\nOverheat Protection For Added Safety",
    "oldPrice": 899.0,
    "discount": 33
  },
  {
    "id": "midea-mfcn45wk",
    "name": "Midea 4.5 LTR - BLACK AIR FRYER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MF-CN45WK",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1hKEmSuOhe7zefBP7xVaHMiUSgbTiTfnQ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Pqy4KZHkT7tSNLK83d7s5y8tQTR4Qvw_%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1TOgWOZZ1whiG7lNOVbDg1DwSZtMWbCoP%26sz%3Dw1000"
    ],
    "price": 699.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "Digital Touch Control\nEnergy and Timer Saver\nFast Air Technology\nEasy Clean with Removable Basket\nNon-stick Inner pot",
    "oldPrice": 999.0,
    "discount": 30
  },
  {
    "id": "midea-mfcy55wk",
    "name": "Midea 6 LTR - BLACK AIR FRYER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MF-CY55WK",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1hKEmSuOhe7zefBP7xVaHMiUSgbTiTfnQ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Pqy4KZHkT7tSNLK83d7s5y8tQTR4Qvw_%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1TOgWOZZ1whiG7lNOVbDg1DwSZtMWbCoP%26sz%3Dw1000"
    ],
    "price": 749.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "Digital Touch Control\nEnergy and Timer Saver\nFast Air Technology\nEasy Clean with Removable Basket\nNon-stick Inner pot",
    "oldPrice": 1199.0,
    "discount": 38
  },
  {
    "id": "midea-mfcy70k",
    "name": "Midea 7 LTR - BLACK AIR FRYER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MF-CY70K",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Y4O45U5XC8aacSGtlAUgdVVN8B7bbute%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1d0h5GZf864OOPqeNFfOnxvit-KpsK6sd%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D16PebXk3_ZM1HXpqtb3EFqyD3AEDnHO8X%26sz%3Dw1000"
    ],
    "price": 1099.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "AIR FRYER\n7 LTR - BLACK\nEasy Clean with Removable Basket\nEnergy and Time Saver\nNon-Stick Inner Pot",
    "oldPrice": 1499.0,
    "discount": 27
  },
  {
    "id": "midea-je2802",
    "name": "Midea 0.5 LTR JUICER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "JE2802",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1eB0GCmnSDQzoT6m-oBGnD-yU2ty8rBSe%26sz%3Dw1000"
    ],
    "price": 399.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "JUICER\n0.5 LTR\n2 Speed Control\nPlastic\n400 Watt\nAnti Slip Feet",
    "oldPrice": 799.0,
    "discount": 50
  },
  {
    "id": "midea-mk17s32a2",
    "name": "Midea 1.7 LTR Electric Kettle",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MK-17S32A2",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1r9Sj6tXzl8TAh0TwN8b9IqMYoeAAs9Yi%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D14C9tGMuiR8xCmg_otmAdUU46iWk8_tW1%26sz%3Dw1000"
    ],
    "price": 199.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "Electric Kettle\n1.7 LTR",
    "oldPrice": 299.0,
    "discount": 33
  },
  {
    "id": "midea-hm0293a",
    "name": "Midea 2 LTRS STAND MIXER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "HM0293A",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1yNc9AhNA6GNcGIyzwr8KtgfTIVADobCr%26sz%3Dw1000"
    ],
    "price": 499.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "STAND MIXER\n2 LTRS",
    "oldPrice": 599.0,
    "discount": 17
  },
  {
    "id": "midea-bl2518",
    "name": "Midea 1.5 LTR - BLACK TABLE BLENDER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "BL2518",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Oje0_3x0UOPwE3xVUVtO1MPm5huwWxPC%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Mecfeg_ArbHS-C8yh2u-C-8ixFb26O7a%26sz%3Dw1000"
    ],
    "price": 249.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "TABLE BLENDER\n1.5 LTR - BLACK\nSmooth Speed\n4 Slices Blade\nStainless Steel",
    "oldPrice": 329.0,
    "discount": 24
  },
  {
    "id": "midea-mjbl40g1",
    "name": "Midea 1.5 LTR - WHITE TABLE BLENDER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MJ-BL40G1",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1MkhxGVhM3IITjld20-EtZTWKnjZfZqRs%26sz%3Dw1000"
    ],
    "price": 449.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "TABLE BLENDER\n1.5 LTR - WHITE\nMulti Function\nProcessor 3.75\n3 Speed levels\nKnob Control\nStandard Accessories",
    "oldPrice": 529.0,
    "discount": 15
  },
  {
    "id": "midea-mjbh6001w",
    "name": "Midea 1.5 LTR - BLACK STAND BLENDER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MJ-BH6001W",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1rirTMOOcemAltrYODF3fi4O16ClzUXIH%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1pWtKXmki5ipagygA6MzdWimBaphblmel%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1309cyrEoRhmpFlqdhl3ZEmYfxiXNd_tA%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1vjYGJl-gpcnjyBstPj1_VJzwCieiTpZH%26sz%3Dw1000"
    ],
    "price": 399.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "STAND BLENDER\n1.5 LTR - BLACK\nIce Crusher\n600ml Beaker\n600 W\nStainless steel blades\nLow Noise\n2 Tips Blade\nMulti Function Hand\nBlender",
    "oldPrice": 469.0,
    "discount": 15
  },
  {
    "id": "midea-mjfp8003w",
    "name": "Midea 800W- WHITE STAND BLENDER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MJ-FP8003W",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D11nU58OLlfcKIPQkuIDqQZJt6bEOXLwvp%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1XdTRPzRZakYxiqT932F4IQkFYWYHZehK%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1koArPvF8qmXWRq-kwIcxCB3a9wV7yk1z%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1P5RyOvgRsoWUEZP7ylcn1P6yFmMR8BhF%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1A08euRJTXi7tAmEuCNXRJjKvdGv0wvqC%26sz%3Dw1000"
    ],
    "price": 599.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "STAND BLENDER\n800W- WHITE\n1.2Liters\n2 Speed Motor\nHigh Speed Operation\nStainless Steel Copping Blade",
    "oldPrice": 699.0,
    "discount": 14
  },
  {
    "id": "midea-yj308j",
    "name": "Midea 1 LTR- GOLD RICE COOKER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "YJ308J",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1c2ObkafXmNV521JAPVJZLddbvhp8W0kU%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WSxm_aCR09JdB44oxhmXoBsO0v1DrIwr%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1w4FKF6fyFrHlVhMnzrnRmCbPg2z5TqZh%26sz%3Dw1000"
    ],
    "price": 349.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "RICE COOKER\n1 LTR- GOLD\nAuto Cut\nSteam Vent\nCook/warm Indicator\nThermal Fuse\nCool-touch Handle",
    "oldPrice": 379.0,
    "discount": 8
  },
  {
    "id": "midea-yj508j",
    "name": "Midea 1.8 LTR- GOLD RICE COOKER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "YJ508J",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1c2ObkafXmNV521JAPVJZLddbvhp8W0kU%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WSxm_aCR09JdB44oxhmXoBsO0v1DrIwr%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1w4FKF6fyFrHlVhMnzrnRmCbPg2z5TqZh%26sz%3Dw1000"
    ],
    "price": 379.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "RICE COOKER\n1.8 LTR- GOLD\nKeep-Warm Function\nOne-Button Operation\nNon-Stick Inner Pot\nMulti-Function Cooking\nEasy to Clean\nCompact Design",
    "oldPrice": 399.0,
    "discount": 5
  },
  {
    "id": "midea-mycs6037wp2",
    "name": "Midea 1000W ELECTRIC PRESSURE COOKER",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MY-CS6037WP2",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Yx19IRL0RDd11RuYi4L5IiNKmi-Em1jM%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1LCtgRELlrBYBGJlyI9H9f5HOTAkv6en5%26sz%3Dw1000"
    ],
    "price": 899.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "ELECTRIC PRESSURE COOKER\n1000W",
    "oldPrice": 999.0,
    "discount": 10
  },
  {
    "id": "midea-ypj26a1w",
    "name": "Midea 330 STEAM IRON",
    "brand": "Midea",
    "brandId": "midea",
    "model": "YPJ26A1W",
    "category": "small",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1mRV39tajzd1uo1qIP5gkHBa55Mov6xeB%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D10mglyVzVMPvkM1u8N58D9Vad7h_teDTt%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1vzQStnJZ3XMAfnwvYiobVNB1tw68ybCA%26sz%3Dw1000"
    ],
    "price": 379.0,
    "rating": 4.5,
    "icon": "⚡",
    "tags": [
      "midea",
      "small",
      "top-deals"
    ],
    "description": "STEAM IRON\n380ML\nDry Burn\nVariable Level Steaming\nOverheat Protection\nFast Heating Up\nDry & Wet Ironing",
    "oldPrice": 399.0,
    "discount": 5
  },
  {
    "id": "nasco-nasj32fbfl",
    "name": "Nasco 32\" LED  FLAT",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-J32FBFL",
    "category": "tv",
    "images": [
      "https://electrolandgh.com/wp-content/uploads/2025/06/NASCO-32UHD-SMART-FLAT-VIDAA-NAS-J32FBFL-VID-FRONT-jpg.webp",
      "https://electrolandgh.com/wp-content/uploads/2025/06/NASCO-43%E2%80%B3-LED-FHD-DIGITAL-SATELLITE-NAS-J32FBFL-SIDE-jpg.webp"
    ],
    "price": 1100.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "nasco",
      "tv",
      "top-deals"
    ],
    "description": "LED  FLAT\n32\"",
    "oldPrice": 1499.0,
    "discount": 27
  },
  {
    "id": "nasco-nasb43fbfl",
    "name": "Nasco 43 '' LED  FLAT",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-B43FBFL",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1biQMMMFlH0zLX4hbhv1IURrfLVEaiLBh%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1OoakBHP_-nWyEATId1jgzWEvyRzs-zTd%26sz%3Dw1000"
    ],
    "price": 1999.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "nasco",
      "tv",
      "top-deals"
    ],
    "description": "LED  FLAT\n43 ''\nHDMI\nSmart TV\nUSB\nFull HD TV\nWIFI",
    "oldPrice": 2699.0,
    "discount": 26
  },
  {
    "id": "nasco-nasa12invxr32",
    "name": "Nasco 1.5Hp Split Inverter AC (R32)",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-A12INV-X-R32",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1B9W_DHD3tUUqq_WzM3EFFcbAeLeNb42k%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D120J8k67CU0PFTbLZ5yL2m0WedwNe3kN6%26sz%3Dw1000"
    ],
    "price": 3180.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "nasco",
      "ac",
      "top-deals"
    ],
    "description": "Split Inverter AC (R32)\n12000 Btu/h",
    "oldPrice": 3799.0,
    "discount": 16
  },
  {
    "id": "nasco-nasa18invxr32",
    "name": "Nasco 2Hp Split Inverter AC (R32)",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-A18INV-X-R32",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1UJR7jGGCdva5JBGV1KaOZU56DQGc_cLA%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1B9W_DHD3tUUqq_WzM3EFFcbAeLeNb42k%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D120J8k67CU0PFTbLZ5yL2m0WedwNe3kN6%26sz%3Dw1000"
    ],
    "price": 4900.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "nasco",
      "ac",
      "top-deals"
    ],
    "description": "Split Inverter AC (R32)\n18000 Btu/h",
    "oldPrice": 5999.0,
    "discount": 18
  },
  {
    "id": "nasco-nasa24invxr32",
    "name": "Nasco 2.5Hp Split Inverter AC (R32)",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-A24INV-X-R32",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D120J8k67CU0PFTbLZ5yL2m0WedwNe3kN6%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1UJR7jGGCdva5JBGV1KaOZU56DQGc_cLA%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D120J8k67CU0PFTbLZ5yL2m0WedwNe3kN6%26sz%3Dw1000"
    ],
    "price": 6700.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "nasco",
      "ac",
      "top-deals"
    ],
    "description": "Split Inverter AC (R32)\n24000 Btu/h",
    "oldPrice": 7499.0,
    "discount": 11
  },
  {
    "id": "nasco-nasjfs18n1",
    "name": "Nasco 2.0Hp Floor Standing AC",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-JFS-18N1",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Qf9AmgKbFIK3KEZ3OnG_eviEJ9erBW2h%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D18XINO7n6ioXCkvNSP1mHXBDOYko3Rg8y%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D19dLjILFodQsreoFjQ2XyUhE0_x4KZNld%26sz%3Dw1000"
    ],
    "price": 6699.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "nasco",
      "ac",
      "top-deals"
    ],
    "description": "Floor Standing AC\n18000 Btu/h",
    "oldPrice": 9899.0,
    "discount": 32
  },
  {
    "id": "nasco-nasf2400fdr",
    "name": "Nasco 360 L French Door Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-400FDR",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1odMId5w9La0NSHfwKP6gk2eap3X-8sVd%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1gZeT-92WGOVdaZ9fibuAI5AodR2kzlv6%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1LsM9Rh1rAFWzAFW4C74EnmnE2mZzs6qk%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1twvLrP7YT5A5tA7wGRXYPHUFwR0OTet_%26sz%3Dw1000"
    ],
    "price": 6850.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "French Door Refrigerator\n360L\n4 Doors\nGray\nFrost Free\n4 Freezer Box\n2 Star Energy Rating",
    "oldPrice": 7999.0,
    "discount": 14
  },
  {
    "id": "nasco-nasf255sk",
    "name": "Nasco 425 L Side-by-Side Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-55SK",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Kb9PEQGk5h8yFZ9sKD8L9UcNuLOiNmph%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WtgfJDmDlbRTBJNR73TmZeWXnNqg6_43%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1TriVAxgFexlY6Es0gKI2hvBtcMJ9fxIJ%26sz%3Dw1000"
    ],
    "price": 7800.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Side-by-Side Refrigerator\n425 L\nWater Dispenser\n2 Doors\nFreezer Box",
    "oldPrice": 10799.0,
    "discount": 28
  },
  {
    "id": "nasco-nasf2400sbsf",
    "name": "Nasco 360 L Side-by-Side Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-400SBSF",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1uIZpWcPnIpj9qbHloYVeY7GSJAbdo31C%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1fU9uWd853Pv4ZEg7vqCRom384V2X7TBE%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1uBQq9tTJlHc8AXqSr3I5pD5R-1MExQgY%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1xXKY3oGvfv_ED5sFmpvBBMLAYxp4rdMl%26sz%3Dw1000"
    ],
    "price": 5850.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Side-by-Side Refrigerator\n360 L\n2 Doors\nGray\nFrost Free\nEven Cooling",
    "oldPrice": 5999.0,
    "discount": 2
  },
  {
    "id": "nasco-nasf2661ff",
    "name": "Nasco 400 L Side-by-Side Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-66.1FF",
    "category": "fridge",
    "images": [],
    "price": 6999.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Side-by-Side Refrigerator\n400 L",
    "oldPrice": 9999.0,
    "discount": 30
  },
  {
    "id": "nasco-nasf2500wd",
    "name": "Nasco 401 L Top Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-500WD",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1mIUKd9wDpYvzLry7pgWvr8jN1Wi_Uzsg%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1UFIp767lWzy8rG760Xve-Q9ZsGxx16fa%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1GsiPvknGn6I85IiRyWT0QO5qoddlN31i%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Af1-PsHC0M2hl1MWY0TSRhW7J9u53bC-%26sz%3Dw1000"
    ],
    "price": 7600.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Top Mount Refrigerator\n401 L",
    "oldPrice": 8999.0,
    "discount": 16
  },
  {
    "id": "nasco-nasf2600wd",
    "name": "Nasco 430 L Top Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-600WD",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1mIUKd9wDpYvzLry7pgWvr8jN1Wi_Uzsg%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Af1-PsHC0M2hl1MWY0TSRhW7J9u53bC-%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1GsiPvknGn6I85IiRyWT0QO5qoddlN31i%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1UFIp767lWzy8rG760Xve-Q9ZsGxx16fa%26sz%3Dw1000"
    ],
    "price": 8150.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Top Mount Refrigerator\n430 L",
    "oldPrice": 9999.0,
    "discount": 18
  },
  {
    "id": "nasco-nasf245",
    "name": "Nasco 320 L Top Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-45",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D15OS3X9PGziVsFkdtNYLBF3gaGPUTQsJ2%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WnZj7wyYVXASZePTo86gfrY38C4eTjGx%26sz%3Dw1000"
    ],
    "price": 4400.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Top Mount Refrigerator\n320 L",
    "oldPrice": 6599.0,
    "discount": 33
  },
  {
    "id": "nasco-nasf2320fld",
    "name": "Nasco 280 L Top Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-320FLD",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1iJYMdKv2-yFkDwgfQyc4ahVDydHygwlu%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D19kFMXubuOaxjG_jdxEc6cJ0MqirrX9vl%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1o7WDuBBSF7gqJdxdgxEjRJfK8zPUMNF-%26sz%3Dw1000"
    ],
    "price": 3850.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Top Mount Refrigerator\n280 L",
    "oldPrice": 4999.0,
    "discount": 23
  },
  {
    "id": "nasco-nasf2320flb",
    "name": "Nasco 280L Top Mount Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-320FL-B",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1qd2u2qxoRghPUNr2_xhyBMrZZcnIScAr%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1pIpurKhKisnDufj7chHkcNHCcIX9C2T6%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D18b7kjUXrMK_C9RPkynuMzIqePMcm-rJp%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1yTHaysFAhaBy0y1BIxhAq4YobC4Jap8B%26sz%3Dw1000"
    ],
    "price": 3650.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "280L\nManual Defrost\nAdjustable Thermostat\nLow Noise\nGrey\nLock and Key\n2 Star Energy Rating",
    "oldPrice": 3999.0,
    "discount": 9
  },
  {
    "id": "nasco-nasf2250fld",
    "name": "Nasco 210 L Top Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-250FLD",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Tu8hOiJRg-EnBh_1Bdg-tM5QvSYvi9H8%26sz%3Dw1000"
    ],
    "price": 3699.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Top Mount Refrigerator\n210 L\n210Liters\nManual Defrost\nAdjustable Thermostat\nLow Noise\nSilver\nDispenser\n100% Cfc Free",
    "oldPrice": 4599.0,
    "discount": 20
  },
  {
    "id": "nasco-nasf230",
    "name": "Nasco 207Ltrs Double Door Top Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-30",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1LrW8BupnDgzIsDYrkv5oyTp6b8EeVNuX%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1lcVNTwI3f00zBZUTh_dY6xqjXfJG_55p%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1X3K1-OdyXg0dTuULGq1xrOHp03WQZaon%26sz%3Dw1000"
    ],
    "price": 3200.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Lock & Key\nFast Cooling\nSilver\nTop Mount Freezer\nEnergy Saving",
    "oldPrice": 3699.0,
    "discount": 13
  },
  {
    "id": "nasco-nasf222",
    "name": "Nasco 166 L Top Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-22",
    "category": "fridge",
    "images": [],
    "price": 2899.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Top Mount Refrigerator\n166 L",
    "oldPrice": 4349.0,
    "discount": 33
  },
  {
    "id": "nasco-nasf215s",
    "name": "Nasco 118 L Top Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-15S",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Xbc-TG0Vdq0VOrVTMAQjkZ_HZOfVRJHm%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1NroeUSU9xyeDYr2n9hJC3eElcaOfBFx9%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1kqP9tiuyYKL693RnLk6g20kyHAZa9j5J%26sz%3Dw1000"
    ],
    "price": 1970.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Top Mount Refrigerator\n118 Liters\nManual Defrost\nGlass Shelf\nGrey\nVegetable Box",
    "oldPrice": 2899.0,
    "discount": 32
  },
  {
    "id": "nasco-nasf212s",
    "name": "Nasco 95 L Top Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-12S",
    "category": "fridge",
    "images": [],
    "price": 1849.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Top Mount Refrigerator\n95 L",
    "oldPrice": 2349.0,
    "discount": 21
  },
  {
    "id": "nasco-dd220",
    "name": "Nasco 147 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "DD2-20",
    "category": "fridge",
    "images": [],
    "price": 2899.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Bottom Mount Refrigerator\n147 L",
    "oldPrice": 3799.0,
    "discount": 24
  },
  {
    "id": "nasco-nasd223sk",
    "name": "Nasco 170 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASD2-23-SK",
    "category": "fridge",
    "images": [],
    "price": 2999.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Bottom Mount Refrigerator\n170 L",
    "oldPrice": 3799.0,
    "discount": 21
  },
  {
    "id": "nasco-nasd229sk",
    "name": "Nasco 251 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASD2-29SK",
    "category": "fridge",
    "images": [],
    "price": 4499.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Bottom Mount Refrigerator\n251 L",
    "oldPrice": 5399.0,
    "discount": 17
  },
  {
    "id": "nasco-nasd230",
    "name": "Nasco 258 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASD2-30",
    "category": "fridge",
    "images": [],
    "price": 4499.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Bottom Mount Refrigerator\n258 L",
    "oldPrice": 5849.0,
    "discount": 23
  },
  {
    "id": "nasco-nasd244",
    "name": "Nasco 287 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASD2-44",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1QmDBJhSx8JhGqr19F4WSy1gc-8nWrVUE%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1OzcQ89R1mK_7kNfmbX_nOXAbXOzzpRpG%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1tEMg0qmZ7CfaT8SLpoVM5j_NNQfztru1%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1On1OAaKwSjt73-dN9aV3MM8OvC6tqTqd%26sz%3Dw1000"
    ],
    "price": 4999.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Bottom Mount Refrigerator\n287L\nSilver Vcm\nLock & Key\nLight\nStainless Steel\nBottom Mount Freezer",
    "oldPrice": 7149.0,
    "discount": 30
  },
  {
    "id": "nasco-nasd240wd",
    "name": "Nasco 307 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASD2-40WD",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1DGtVivQAaDaLEuZgZW6Q1BQ0o82gpM_h%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1mK1ReVAoiqEc2KT1Uy8brUYiWY8BuGDS%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D15afYJSRF_oVXLUQSkjwI0mrlRF7Brx70%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D11c1L6S12FHJ5VCaY_2_dUy_kh1lSwXgR%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1R2ejvunIe79lkRN8pEdhrVCzXqlOhDdu%26sz%3Dw1000"
    ],
    "price": 4800.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Bottom Mount Refrigerator\n307 L\nWater Dispenser\nLight\nStainless Steel\nEnergy Saving\nManual Defrost",
    "oldPrice": 8299.0,
    "discount": 42
  },
  {
    "id": "nasco-nasf106",
    "name": "Nasco 41 L Bedside Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF1-06",
    "category": "fridge",
    "images": [],
    "price": 1299.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Bedside Refrigerator\n41 L",
    "oldPrice": 1599.0,
    "discount": 19
  },
  {
    "id": "nasco-nasf195fl",
    "name": "Nasco 76 L Table Top Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF1-95FL",
    "category": "fridge",
    "images": [],
    "price": 1199.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Table Top Refrigerator\n76 L",
    "oldPrice": 1799.0,
    "discount": 33
  },
  {
    "id": "nasco-nasf1110flb",
    "name": "Nasco 92 L Table Top Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF1-110FL-B",
    "category": "fridge",
    "images": [],
    "price": 1299.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Table Top Refrigerator\n92 L",
    "oldPrice": 1899.0,
    "discount": 32
  },
  {
    "id": "nasco-nasf111s",
    "name": "Nasco 91 L Table Top Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF1-11S",
    "category": "fridge",
    "images": [],
    "price": 1399.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Table Top Refrigerator\n91 L",
    "oldPrice": 1899.0,
    "discount": 26
  },
  {
    "id": "nasco-nasf211flbmirror",
    "name": "Nasco 86 L Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-11FL-B-MIRROR",
    "category": "fridge",
    "images": [],
    "price": 1799.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Refrigerator\n86 L",
    "oldPrice": 2199.0,
    "discount": 18
  },
  {
    "id": "nasco-nasf212flb",
    "name": "Nasco 102 L Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-12FL-B",
    "category": "fridge",
    "images": [],
    "price": 1899.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Refrigerator\n102 L",
    "oldPrice": 2399.0,
    "discount": 21
  },
  {
    "id": "nasco-nasf2110rt",
    "name": "Nasco 86 L Table Top Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-110RT",
    "category": "fridge",
    "images": [],
    "price": 2299.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Table Top Refrigerator\n86 L",
    "oldPrice": 2349.0,
    "discount": 2
  },
  {
    "id": "nasco-nasf2130",
    "name": "Nasco 110 L Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-130",
    "category": "fridge",
    "images": [],
    "price": 1749.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Refrigerator\n110 L",
    "oldPrice": 2349.0,
    "discount": 26
  },
  {
    "id": "nasco-nasf213fl",
    "name": "Nasco 112 L Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-13FL",
    "category": "fridge",
    "images": [],
    "price": 1799.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Refrigerator\n112 L",
    "oldPrice": 2649.0,
    "discount": 32
  },
  {
    "id": "nasco-nasf216fl",
    "name": "Nasco 138 L Refrigerator Top Mounted",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-16FL",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Gg5SMe6RZz1ID02qTVhpp5QEV2Xziy6i%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1FLS4D4XGmApLp0TfiIMZsKnvzCavdeW0%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1zPAXYPeCQj7Dxi0IomRPfHyVB3aACtYn%26sz%3Dw1000"
    ],
    "price": 1999.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Top Mounted Refrigerator\n138 L\nEnergy Saving\nSilver Vcm\nLight\nTop Mount Freezer\nManual Defrost",
    "oldPrice": 2999.0,
    "discount": 33
  },
  {
    "id": "nasco-nasf218fl",
    "name": "Nasco 158 L Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-18FL",
    "category": "fridge",
    "images": [],
    "price": 2099.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Refrigerator\n158 L",
    "oldPrice": 3249.0,
    "discount": 35
  },
  {
    "id": "nasco-nasd210fl",
    "name": "Nasco 106 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASD2-10FL",
    "category": "fridge",
    "images": [],
    "price": 1899.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Bottom Mount Refrigerator\n106 L",
    "oldPrice": 2649.0,
    "discount": 28
  },
  {
    "id": "nasco-nasd214fl",
    "name": "Nasco 116 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASD2-14FL",
    "category": "fridge",
    "images": [],
    "price": 2099.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Bottom Mount Refrigerator\n116 L",
    "oldPrice": 2799.0,
    "discount": 25
  },
  {
    "id": "nasco-nasd218flg",
    "name": "Nasco 136 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASD2-18Fl-G",
    "category": "fridge",
    "images": [],
    "price": 2399.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Bottom Mount Refrigerator\n136 L",
    "oldPrice": 3249.0,
    "discount": 26
  },
  {
    "id": "nasco-nasd220fl",
    "name": "Nasco 158 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASD2-20FL",
    "category": "fridge",
    "images": [],
    "price": 2699.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Bottom Mount Refrigerator\n158 L",
    "oldPrice": 3449.0,
    "discount": 22
  },
  {
    "id": "nasco-nasd224fl",
    "name": "Nasco 196 L Bottom Mount Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASD2-24FL",
    "category": "fridge",
    "images": [],
    "price": 3499.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Bottom Mount Refrigerator\n196 L",
    "oldPrice": 4049.0,
    "discount": 14
  },
  {
    "id": "nasco-nasd1225fl",
    "name": "Nasco 150 L Standing Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASD1-225FL",
    "category": "fridge",
    "images": [],
    "price": 2999.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Standing Freezer\n150 L",
    "oldPrice": 3599.0,
    "discount": 17
  },
  {
    "id": "nasco-nasd1200sk",
    "name": "Nasco 166 L Standing Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASD1-200SK",
    "category": "fridge",
    "images": [],
    "price": 3499.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Standing Freezer\n166 L",
    "oldPrice": 3599.0,
    "discount": 3
  },
  {
    "id": "nasco-dd133",
    "name": "Nasco 225 L Standing Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "DD1-33",
    "category": "fridge",
    "images": [],
    "price": 4899.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Standing Freezer\n225 L",
    "oldPrice": 6849.0,
    "discount": 28
  },
  {
    "id": "nasco-nasfl110sc",
    "name": "Nasco 110 L Display Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-FL110SC",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D19Xf8S5LbZOYoewhaWo9NtKsdynlaztHk%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1lnVa1ZVCoYQhSx_Ne-U9i9kk9fnbCLA0%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1rla-SIcwKg_U2fCJO_yuUUAQWwxiuHwI%26sz%3Dw1000"
    ],
    "price": 1999.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Display Refrigerator\n110 L",
    "oldPrice": 2999.0,
    "discount": 33
  },
  {
    "id": "nasco-nasfl3501dr",
    "name": "Nasco 288L Display Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-FL350-1DR",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1ADrCG8xTUjx297Z1VkLgwuWmtgaaijM3%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D18a-xynn67DdTEQtPmK_qy7zF8JA34-zS%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D19Ru34R5OY7FixN29BGzpEczSdXqiG8fE%26sz%3Dw1000"
    ],
    "price": 4450.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Display Refrigerator\n288 Ltrs\nAdjustable Thermostat\nLow Noise\nDirect Cooling\nEnergy Saving\n100% Cfc  Fre",
    "oldPrice": 6149.0,
    "discount": 28
  },
  {
    "id": "nasco-nasfl3601dr",
    "name": "Nasco 298L Display Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-FL360-1DR",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1bbXOF_POFiqiMX6tNiqxeHYCfoXJpj1B%26sz%3Dw1000"
    ],
    "price": 4750.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Display Refrigerator\n298L\nAdjustable Thermostat\n100% Cfc Free\nLow Noise\nDirect Cooling\nEnergy Saving",
    "oldPrice": 6699.0,
    "discount": 29
  },
  {
    "id": "nasco-nasfl4001dr",
    "name": "Nasco 358L Display Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-FL400-1DR",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D11neHAZ5FyENTbzZvaEMDENyQ6Uv81Wku%26sz%3Dw1000"
    ],
    "price": 5350.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Display Refrigerator\n358L\nAdjustable Thermostat\n100% Cfc Free\nLow Noise\nDirect Cooling\nEnergy Saving",
    "oldPrice": 7149.0,
    "discount": 25
  },
  {
    "id": "nasco-nas375dfg",
    "name": "Nasco 350 L Display Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-375DFG",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1yriRbiGVAVZdwo4PaoQ9IBaUiLYfUxSn%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D12lQuZJo_9IREwYK1PkiAyuXQ9WCprPaB%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1kA9GeU47S5ANyaeu1T8e7r2ALyLcUz1x%26sz%3Dw1000"
    ],
    "price": 5899.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Display Refrigerator\n360 Ltrs\nGlass Door\n5 Shelves\nChild Lock\nInterior Light",
    "oldPrice": 7499.0,
    "discount": 21
  },
  {
    "id": "nasco-nasfl8502dr",
    "name": "Nasco 728 L Display Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-FL850-2DR",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D19Ru34R5OY7FixN29BGzpEczSdXqiG8fE%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1ADrCG8xTUjx297Z1VkLgwuWmtgaaijM3%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D18a-xynn67DdTEQtPmK_qy7zF8JA34-zS%26sz%3Dw1000"
    ],
    "price": 10800.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Display Refrigerator\n728 L",
    "oldPrice": 14999.0,
    "discount": 28
  },
  {
    "id": "nasco-nasfl13002dr",
    "name": "Nasco 1080 L Display Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-FL1300-2DR",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Uz2iVZ4gPG7PXsbhLct_dawE_TYZqpnR%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D18LJRO5y793lTlGJnZiVITtvtbxGc4o40%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1-bIrEw_OKfZudwfi2BfiEC0WaRS6t2a8%26sz%3Dw1000"
    ],
    "price": 14800.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Display Refrigerator\n1080 L\n2 Glass Door\n8 Shelves\nEnergy Saving\nChild Lock\nInterior Light\nFrost Free\nEnergy Saving",
    "oldPrice": 16999.0,
    "discount": 13
  },
  {
    "id": "nasco-nasfl14003dr",
    "name": "Nasco 1200 L Display Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-FL1400-3DR",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1cquhOKZ0mILtgdXTmVXrOE_MOS7nPbgP%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1aWra9Ajph6J3Vn4k_0iO-EUS7vKHVz2M%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1tT6ZqDKjLJ0oi4Bj32HiVj5hLXeSE-ff%26sz%3Dw1000"
    ],
    "price": 16900.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Display Refrigerator\n1200L\n3 Glass Door\n12 Shelves\nEnergy Saving\nChild Lock\nInterior Light\nFrost Free",
    "oldPrice": 18999.0,
    "discount": 11
  },
  {
    "id": "nasco-nas150flg",
    "name": "Nasco 100 L Chest Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-150FL-G",
    "category": "fridge",
    "images": [],
    "price": 1799.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n100 L",
    "oldPrice": 2249.0,
    "discount": 20
  },
  {
    "id": "nasco-nas200sk",
    "name": "Nasco 142 L Chest Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-200SK",
    "category": "fridge",
    "images": [],
    "price": 2199.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n142 L",
    "oldPrice": 3149.0,
    "discount": 30
  },
  {
    "id": "nasco-nas200flg",
    "name": "Nasco 150L Chest Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-200FL-G",
    "category": "fridge",
    "images": [],
    "price": 1999.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n150L",
    "oldPrice": 3149.0,
    "discount": 37
  },
  {
    "id": "nasco-nas160",
    "name": "Nasco 145 L Chest Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-160",
    "category": "fridge",
    "images": [],
    "price": 2099.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n145 L",
    "oldPrice": 3099.0,
    "discount": 32
  },
  {
    "id": "nasco-nas210",
    "name": "Nasco 200 L Chest Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-210",
    "category": "fridge",
    "images": [],
    "price": 2799.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n200 L",
    "oldPrice": 3899.0,
    "discount": 28
  },
  {
    "id": "nasco-nas230sk",
    "name": "Nasco 198 l Chest Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-230SK",
    "category": "fridge",
    "images": [],
    "price": 2899.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n198 l",
    "oldPrice": 3449.0,
    "discount": 16
  },
  {
    "id": "nasco-nas350fl",
    "name": "Nasco 250 L Chest Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-350FL",
    "category": "fridge",
    "images": [],
    "price": 3199.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n250 L",
    "oldPrice": 4599.0,
    "discount": 30
  },
  {
    "id": "nasco-nas380sk",
    "name": "Nasco 244 L Chest Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-380SK",
    "category": "fridge",
    "images": [],
    "price": 3199.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n244 L",
    "oldPrice": 4449.0,
    "discount": 28
  },
  {
    "id": "nasco-nas400flg",
    "name": "Nasco 288L Chest Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-400FL-G",
    "category": "fridge",
    "images": [],
    "price": 3799.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n288L",
    "oldPrice": 5049.0,
    "discount": 25
  },
  {
    "id": "nasco-nas370sk",
    "name": "Nasco 270 L Chest Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-370-SK",
    "category": "fridge",
    "images": [],
    "price": 3999.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n270 L",
    "oldPrice": 4899.0,
    "discount": 18
  },
  {
    "id": "nasco-nas360sk",
    "name": "Nasco 335 L Chest Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-360-SK",
    "category": "fridge",
    "images": [],
    "price": 4199.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n335 L",
    "oldPrice": 5399.0,
    "discount": 22
  },
  {
    "id": "nasco-nas420ssk",
    "name": "Nasco 392 L Chest Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-420S-SK",
    "category": "fridge",
    "images": [],
    "price": 4999.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n392 L",
    "oldPrice": 6499.0,
    "discount": 23
  },
  {
    "id": "nasco-nas475flb",
    "name": "Nasco 400L Chest Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-475FL-B",
    "category": "fridge",
    "images": [],
    "price": 5299.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n400L",
    "oldPrice": 5999.0,
    "discount": 12
  },
  {
    "id": "nasco-nas500fldd",
    "name": "Nasco 425 L Chest Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-500FL-DD",
    "category": "fridge",
    "images": [],
    "price": 5499.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n425 L",
    "oldPrice": 7149.0,
    "discount": 23
  },
  {
    "id": "nasco-nas800fldd",
    "name": "Nasco 545L Chest Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-800FL-DD",
    "category": "fridge",
    "images": [],
    "price": 7999.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n545L",
    "oldPrice": 9199.0,
    "discount": 13
  },
  {
    "id": "nasco-nas850fldd",
    "name": "Nasco 600L Chest Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-850FL-DD",
    "category": "fridge",
    "images": [],
    "price": 8499.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n600L",
    "oldPrice": 9999.0,
    "discount": 15
  },
  {
    "id": "nasco-nas1200fldd",
    "name": "Nasco 800L Chest Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-1200FL-DD",
    "category": "fridge",
    "images": [],
    "price": 9999.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Chest Freezer\n800L",
    "oldPrice": 11799.0,
    "discount": 15
  },
  {
    "id": "nasco-nasfs305fl",
    "name": "Nasco 239L Display Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-FS305FL",
    "category": "fridge",
    "images": [],
    "price": 4999.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Display Refrigerator\n239L",
    "oldPrice": 6699.0,
    "discount": 25
  },
  {
    "id": "nasco-nasfs405fl",
    "name": "Nasco 360L Display Refrigerator",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-FS405FL",
    "category": "fridge",
    "images": [],
    "price": 5499.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "Display Refrigerator\n360L",
    "oldPrice": 7499.0,
    "discount": 27
  },
  {
    "id": "nasco-nasyd200w",
    "name": "Nasco Water Dispenser",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-YD200-W",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1_CIl33uDGI2ZNF0lP3k6kz_hQSaEP21j%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1iQH1AeCC0AlTEDygB7h9ww-yb1mHh0g0%26sz%3Dw1000"
    ],
    "price": 999.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "nasco",
      "kitchen",
      "top-deals"
    ],
    "description": "16 LTRS\n2 TAPS\nHEATING AND COOLING SWITCH\nWHITE\nFRIDGE CABINET\nENERGY SAVING",
    "oldPrice": 1299.0,
    "discount": 23
  },
  {
    "id": "nasco-ag036afk",
    "name": "Nasco 36 LTRS Microwave (Grill)",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "AG036AFK",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1GzGeA-1kCSLiugiE8TcQznmkR_dM-4zr%26sz%3Dw1000"
    ],
    "price": 1799.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "nasco",
      "kitchen",
      "top-deals"
    ],
    "description": "Microwave (Grill)\n36L\nGrill\n1500W\nSilver\nSafety Lock",
    "oldPrice": 2099.0,
    "discount": 14
  },
  {
    "id": "nasco-nas05tw",
    "name": "Nasco 5 KGS Twin Tub Semi-Auto Washer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-05-TW",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1AlaEn3tS016xCp4pdW7edlr_BxLVqBvZ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1R-AtruSXSeEkC4C6nqoyDpIfp96eOQbH%26sz%3Dw1000"
    ],
    "price": 999.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "nasco",
      "laundry",
      "top-deals"
    ],
    "description": "Twin Tub Semi-Auto Washer\n5 KG\n220-240V\nWash Program\nWhite & Grey\nWater Timer\nEnergy Saving",
    "oldPrice": 1649.0,
    "discount": 39
  },
  {
    "id": "nasco-nasttjs80",
    "name": "Nasco 8 KGS Twin Tub Semi-Auto Washer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASTT-JS80",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1e0yUd8mcEU4jMpj8QoHW8um1swiXeyzc%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1TVtbO5GMjHnDeADyf2wre3750I6htBYw%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1NV3MtvXjDb4nVgXCX_WFvPkKLYeCBRu2%26sz%3Dw1000"
    ],
    "price": 1999.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "nasco",
      "laundry",
      "top-deals"
    ],
    "description": "Twin Tub Semi-Auto Washer\n8 KGS\nWash Program\n220-240V\nWater Timer\n7 Stars",
    "oldPrice": 2199.0,
    "discount": 9
  },
  {
    "id": "nasco-nastlb120fl",
    "name": "Nasco 12 KGS Top Load Washer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASTL-B120FL",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Eb7Y-AcaudnqwBYPhAoUGsupocotgCTl%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1-sXhLXzZvzEM4Fwn-MAzh4FiH9EEtVLu%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1e9_3CD4LTPOPrBqmsEXJOy1wMtkdzpyo%26sz%3Dw1000"
    ],
    "price": 3650.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "nasco",
      "laundry",
      "top-deals"
    ],
    "description": "Top Load Washer\n12 KGS",
    "oldPrice": 3999.0,
    "discount": 9
  },
  {
    "id": "nasco-nastlb80",
    "name": "Nasco Top Load Washing Machine 8KG",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASTL-B80",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WLt8h_27y-w1kl8ELOi75StpzwfmJBHx%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1TyxtoC5nOx2mXGhrmDZj_M6ZT4_Glx-2%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1G42u4_Xy_ThgYEVQxs8v63oeOlI-VN6z%26sz%3Dw1000"
    ],
    "price": 2750.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "nasco",
      "laundry",
      "top-deals"
    ],
    "description": "Top Load Washer\n8KG\nLED Display\nFull Automatic\nDark Grey Color\nEnergy Saving",
    "oldPrice": 2999.0,
    "discount": 8
  },
  {
    "id": "nasco-nasfljs12kgs",
    "name": "Nasco 12 KGS Front Load Washer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASFL-JS12KG-S",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Y2-3Seh4VOaNRmps4f4E2b8ig8cG8yck%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Bla-1QnV-ZIP4gA4qR-f-9Aw-H2Pb4jC%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1UDIl7qyoCPOYFghZN1xEShTEyxJmehJ2%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1U4TcSWdzR8kR8BZADYcF2XhDTsSZq4Pm%26sz%3Dw1000"
    ],
    "price": 4800.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "nasco",
      "laundry",
      "top-deals"
    ],
    "description": "Front Load Washer\n12 KG\nDark Silver\nAuto Restart\nLED Screen\nInverter Motor\nSilent Wash\n6 Stars",
    "oldPrice": 5399.0,
    "discount": 11
  },
  {
    "id": "nasco-nasfljs10kgs",
    "name": "Nasco 10 KGS Front Load Washer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASFL-JS10KG-S",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1qB1sqd4o-vtKnPj5m-BniDKI72FNee_e%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1EFsxm-r8jXw2Cya7F8QyDtbvM-aAogBq%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1hQVoM5dMCtTKkOe8depDSlUNkiCTq0z6%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1P979_9l6AIkpLy-4pXbvIs4ORJADrNqy%26sz%3Dw1000"
    ],
    "price": 4150.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "nasco",
      "laundry",
      "top-deals"
    ],
    "description": "Front Load Washer\n10KG\nDark Grey\nAuto Restart\nTouch Screen\nInverter Motor",
    "oldPrice": 5049.0,
    "discount": 18
  },
  {
    "id": "nasco-nasflj8kgs",
    "name": "Nasco 8Kg Front Load Washing Machine",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASFL-J8KG-S",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1WtLNJ9t32iBV-ZZHyGTd4OgGQqAFVoTH%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1MtUrG9E9StKk-Vt_jEFpK8tyi0pHf4cK%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1J4cyjRbuJPhIu5wCUKGDqyZ0586BWXrT%26sz%3Dw1000"
    ],
    "price": 3300.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "nasco",
      "laundry",
      "top-deals"
    ],
    "description": "8Kg\nFabric Softener Drawer\nControl Panel\nAdjustable Feet\nDrain Pump Filter\nEnergy Saving",
    "oldPrice": 4599.0,
    "discount": 28
  },
  {
    "id": "nasco-nasflj6kgs",
    "name": "Nasco 6 KGS Front Load Washer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASFL-J6KG-S",
    "category": "laundry",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1W_IOxbRrn-xnyT-Oj4L43VvXMO0YM3WC%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1b2nxcBbZiku9vEY1sXaCy7FpS2W796_N%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D16OHgDuK5ZU1d_1P4XyUplxlZ-Tb8JyVJ%26sz%3Dw1000"
    ],
    "price": 2950.0,
    "rating": 4.5,
    "icon": "🫧",
    "tags": [
      "nasco",
      "laundry",
      "top-deals"
    ],
    "description": "Front Load Washer\n6 KGS\nFabric Softener Drawer\nControl Panel\nAdjustable Feet\nDrain Pump Filter\nEnergy Saving",
    "oldPrice": 3699.0,
    "discount": 20
  },
  {
    "id": "nasco-nasgcsniper50tb",
    "name": "Nasco 4 BURNNER Gas Cooker",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASGC-SNIPER50TB",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D146l1JWII9JqOfn4beKiiNtRfbAav4OxA%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Wo3gi87ytXqmhq_-VfPgEkhr46RCItCu%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1IyxjaH6Ti5MYRXtBTModf1AwjaROTpAi%26sz%3Dw1000"
    ],
    "price": 1499.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "nasco",
      "kitchen",
      "top-deals"
    ],
    "description": "4 Burners\nGas\n50 X 50 Cm\nBlack\nOven",
    "oldPrice": 2099.0,
    "discount": 29
  },
  {
    "id": "nasco-nasgcsniper50tbg",
    "name": "Nasco 4Burner Cooker With Grill",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASGC-SNIPER50TB-G",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1KcykH00A_0VjsbtIPSC1YfV56lyVo82O%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1dsIY_NdE_FHgiembQhCZ02JhXe-aU6b-%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1hUA76aoawd_cBWdP3__HvKcGbIeeN4IY%26sz%3Dw1000"
    ],
    "price": 1699.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "nasco",
      "kitchen",
      "top-deals"
    ],
    "description": "4 Burners\nGas\n50 X 50 Cm\nGrill\nBlack Color",
    "oldPrice": 2499.0,
    "discount": 32
  },
  {
    "id": "nasco-nasdm4h109",
    "name": "Nasco 4 HOBS Electric Cooker",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-DM4H109",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1nxbpJ0_gsz4Sb9Au7OwWxJG75LxFmUAD%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1TweCJiD2g-B6Yk8fjI-jP7R5O0HdH-H7%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1olCj1iA5tqpxoOGEhT483llgoOUYuWtB%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1nEBLi4ffdGiwkxAB3yIkZa5lpnvEH80s%26sz%3Dw1000"
    ],
    "price": 2999.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "nasco",
      "kitchen",
      "top-deals"
    ],
    "description": "Electric Cooker\n4 HOBS",
    "oldPrice": 4599.0,
    "discount": 35
  },
  {
    "id": "nasco-imb1008gs",
    "name": "Nasco 26 LB - BLACK Ice Maker",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "IMB1008-GS",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1qCbGI4vY-l1FyxQ0Lvw-ltcmx19lcpVV%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1Yw6xeweadCLN_TRuae4f2pGsriWqxzBx%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1tcHJd9VKLGU5LydUr185pv_eMTbNhCE-%26sz%3Dw1000"
    ],
    "price": 999.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "nasco",
      "kitchen",
      "top-deals"
    ],
    "description": "Ice Maker\n26 LB - BLACK",
    "oldPrice": 1299.0,
    "discount": 23
  },
  {
    "id": "admin-1782160424917",
    "name": "TCL 65″ UHD 4K Smart Android Television",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "65P6L",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1pdMhk9ws3Y8KdE5dcKIydvTVHMbpLQq8%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1iPlu5awSZZue4IGcc28boctMMeqeVWUv%26sz%3Dw1000"
    ],
    "price": 7600.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "tcl",
      "tv",
      "top-deals"
    ],
    "description": "65″\nSmart Android\nHVA Panel\nMetallic Bezel-less\n4K HDR\nDolby Audio",
    "oldPrice": 10499.0,
    "discount": 28
  },
  {
    "id": "admin-1782773318469",
    "name": "Nasco Top Mount Refrigerator 107l",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASF2-15-SK",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1npXp71aoVlnsz1UIqotFLyMhtha59pNS%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1fYL69Pa0ru8e7CkFkG8ijWgYNRbSD-5U%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1un43dCMlhBbGox9N9ZTDxfFVGq2Io-3Q%26sz%3Dw1000"
    ],
    "price": 2600.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge",
      "top-deals"
    ],
    "description": "107\nManual Defrost\nLock and Key\nAdjustable Thermostat\nEnergy Saving",
    "oldPrice": 2699.0,
    "discount": 4
  },
  {
    "id": "admin-1783229837849",
    "name": "Midea 3.5Hp Inverter R410 Cassette Unit",
    "brand": "Midea",
    "brandId": "midea",
    "model": "MCD-36HRDN1",
    "category": "small",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D15sml8tTorrqH6KakgXpLlN5Oyg6jr8zp%26sz%3Dw1000"
    ],
    "price": 26900.0,
    "rating": 4.5,
    "icon": "⚡",
    "tags": [
      "midea",
      "small"
    ],
    "description": "Air Flow Panel\nOn & Off Switch\nAnti Cold Air Function\nAuto Restart Function\nR410 Gas"
  },
  {
    "id": "admin-1783295250152",
    "name": "Samsung 75\" Q-LED Flat 4K Television",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "QA75Q7FAAUXGH",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1U4AkP0cVeSQ0bZ4PiQ-CLSWBEzgD4WJb%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1SdL1DUETI7usLU1UaPXta-f81KlJ9ItC%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1ZcIhJT6ZMxJDKUUsfLeSR7v4eG7ushoD%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1GipBjwFxyKavmI-W5Ssyd2qO46MkVi4f%26sz%3Dw1000"
    ],
    "price": 19200.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "samsung",
      "tv",
      "top-deals"
    ],
    "description": "75\"\nQ-LED\n4K\nHDR Brightness Optimiser\nQ4 AI Processor\nScolarCell Remote\nOne UI Tizen\nQ-Symphony",
    "oldPrice": 30599.0,
    "discount": 37
  },
  {
    "id": "admin-1783470705148",
    "name": "Midea 90cm Cooker Hood",
    "brand": "Midea",
    "brandId": "midea",
    "model": "90J72-B",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D17BbxJ5UID1H3PEiUz8dih4FdfphvlUs9%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1wz1fGAGbLnQscipINA3wWwTgqYdDGxkF%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1XP6VdahYKgggqmrRx5PTE7ldLxm3KNDZ%26sz%3Dw1000"
    ],
    "price": 2950.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen",
      "top-deals"
    ],
    "description": "",
    "oldPrice": 3099.0,
    "discount": 5
  },
  {
    "id": "admin-1783471188825",
    "name": "Midea 90cm Cooker Hood",
    "brand": "Midea",
    "brandId": "midea",
    "model": "90M21-S",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D19kjzmuKXr6k2Ph5kj07oopwt9bbS_X9G%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1zIwRLG4LAAySI9VBP0g4QX9XTgSqpmxk%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1MeZCoGCNBqGnw8YrC_PUHbIEQmu09wl-%26sz%3Dw1000"
    ],
    "price": 1999.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "midea",
      "kitchen"
    ],
    "description": "90cm\nPush Button Control\nIn Built Motor and Fan\n3 Speed Extracts\n2 LED bulbs\nStainless Steel"
  },
  {
    "id": "admin-1783490261695",
    "name": "Nasco 3 Burner Gas Sstove Silver",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASGS-K332FS",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1ogf76BT75CD6PtvRIg9XREieZWlr3TTD%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1asiCVAvEPX63fopyu4BG2LYzsf9VLBCg%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1orTcLfTpB4MDyEiaZtCsYRzzt0flDCnr%26sz%3Dw1000"
    ],
    "price": 899.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "nasco",
      "kitchen"
    ],
    "description": "3 Gas Burners\nStainless Steel\nSilver Cap\n2 Shelves Stand\nSilver"
  },
  {
    "id": "admin-1783490697566",
    "name": "Nasco 5 Burner Gas Stove",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NASGS-K5CSS-S",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1k19I4mD8_YG7dfO5r9DoWe1kYiEiyVDX%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D14yWBHVa2KH1lNSy2QYDHofsaEOFO8WEJ%26sz%3Dw1000"
    ],
    "price": 599.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "nasco",
      "kitchen"
    ],
    "description": "5 Burners\nStainless\n2 Shelves Stand"
  },
  {
    "id": "admin-1784847063242",
    "name": "Nasco 200Watts Food Chopper",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "MC353",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1s-Axykt5uFr1V0XO9dl_6n8C64Tmmv8w%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D105pEbOBWyNiJM1Fi8AggF_8-ujXcfcls%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1MNcWm4h1JV-whptud450VzHMTWAxxdd1%26sz%3Dw1000"
    ],
    "price": 299.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "nasco",
      "kitchen"
    ],
    "description": "Plastic Body\nOne Touch Button\nStainless Steel\n200 Watt"
  },
  {
    "id": "admin-1784867152480",
    "name": "Nasco 138Ltrs Chest Freezer",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-175FL-G",
    "category": "fridge",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1JMmVGz5Q_d7yu69Z4ZI7QVxdFDbRsoIX%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1y83Rjb7xinP99A_puq3ntrDJHpWEX1jf%26sz%3Dw1000"
    ],
    "price": 2349.0,
    "rating": 4.5,
    "icon": "🧊",
    "tags": [
      "nasco",
      "fridge"
    ],
    "description": "138Ltrs\nManual Defrost\nAdjustable Thermostat\nLow Noise\nDirect Cooling\nGold Colour"
  },
  {
    "id": "admin-1784962664024",
    "name": "Samsung Vacuum Cleaner 2000 Watts",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "VCC4570S4K",
    "category": "small",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1ihfzrtREl5QyJfgNsorZcRLSDPkfvILP%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1JZ8Bzcf3KyJzYLxxyIMxsJt63OeoY4ha%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1J-ma4PIrbPDxPOsCl92UqFWs3hlOGRMm%26sz%3Dw1000"
    ],
    "price": 1799.0,
    "rating": 4.5,
    "icon": "⚡",
    "tags": [
      "samsung",
      "small"
    ],
    "description": "Bagless\n2 Chambers\nEconomic\nBlack"
  },
  {
    "id": "admin-1784963141049",
    "name": "Samsung Vacuum Cleaner 1800Watts",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "",
    "category": "small",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D10GowIUYEnTG2M4clCXT23rB_5cTdlbFv%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1MRStBM9W7sfrWiphyy72BswFUkY7eLO_%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1-MujwqzgRo7WTGqsmJaRDXYP_Qvw56Fc%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1vYWWUSlr10CduBBGA4-zgZO-Ij70uNcC%26sz%3Dw1000"
    ],
    "price": 2150.0,
    "rating": 4.5,
    "icon": "⚡",
    "tags": [
      "samsung",
      "small"
    ],
    "description": "Ez Clean Bin\n2In1 Vaccum\nAirborne Copper\n180 Degree Steering\nWhite"
  },
  {
    "id": "admin-1784964001464",
    "name": "Samsung 60CM 12Plate Dish Washer",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "DW60CG550FSGSV",
    "category": "small",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D16T77X7TYISKxjskiLi3Iebp6P3t1YwJQ%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1nZDi_W2Z6dXnUWVTVCb7BLj3VtX-vq4p%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1eSmbL8gNfpZ_WtOopJYY9OTEjIpmUUZi%26sz%3Dw1000"
    ],
    "price": 18999.0,
    "rating": 4.5,
    "icon": "⚡",
    "tags": [
      "samsung",
      "small",
      "top-deals"
    ],
    "description": "2000W\n120ML\nSOLE PLATE\nNONSTICK SOLE PLATE\nPOWER INDICATOR",
    "oldPrice": 20299.0,
    "discount": 6
  },
  {
    "id": "admin-1784987861035",
    "name": "Nasco 1.5Hp R410 Split Air Condition White",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-J12-N1-ECO",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1tsDng2Ug3B54enhsJhgBnB3xEY6gc1sc%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1_gDYJtG83vm6f78WIxOqpc6L7glfKmD7%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1-E1ypdcQ7ta1iCeziAxZGEiXnKuRNupt%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1stSx-cCL76PTvjjFB-D2ISmPWnnv8jUi%26sz%3Dw1000"
    ],
    "price": 2850.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "nasco",
      "ac",
      "top-deals"
    ],
    "description": "1.5HP\nCopper Condenser\nWhite Panel Design\nEnergy Saving\nFast Cooling",
    "oldPrice": 3499.0,
    "discount": 19
  },
  {
    "id": "admin-1784988470562",
    "name": "Nasco 2.0Hp R410 Split Air Conditioner",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-T18N1",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1-cGqA_Yrsrx47VVr8qf7bHibQ1L2_nP5%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1DchKFjVXLzoOj74SgltgwAwFptZcOyNq%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1D4duS_Hnqle1Nw6W7oWWax1DWxAq66Ud%26sz%3Dw1000"
    ],
    "price": 4850.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "nasco",
      "ac",
      "top-deals"
    ],
    "description": "Plain White Panel Design\nCopper Condenser\nEnergy Saving\nR410 Refrigerant\n2.0Hp",
    "oldPrice": 6549.0,
    "discount": 26
  },
  {
    "id": "admin-1784989085995",
    "name": "Nasco 2.5Hp R410 Split Air Conditioner",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-T24N1",
    "category": "ac",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1c30QTibZvAis7fUAUL_beZ4m6Ga--hxV%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1s6qBaex4bmwX3h6JFSZqY8_nV7aCdVrw%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1DhZJ1HI8rSW7YwG_pDsZmaxe17jgQlZ-%26sz%3Dw1000"
    ],
    "price": 6799.0,
    "rating": 4.5,
    "icon": "❄️",
    "tags": [
      "nasco",
      "ac",
      "top-deals"
    ],
    "description": "Plain White Panel Design\nCopper Condenser\n2.5Hp\nR410 Refrigerant\nEnergy Saving",
    "oldPrice": 9599.0,
    "discount": 29
  },
  {
    "id": "admin-1784994588425",
    "name": "Nasco 50″ LED Digital Satellite Television",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-J50FBFL",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1eEP8t9gqhEr1Lv_gN_TsOaVtgYTsElpk%26sz%3Dw1000"
    ],
    "price": 3099.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "nasco",
      "tv",
      "top-deals"
    ],
    "description": "Full Hd\nHDMI X2\nUSB Movie X2\nVGA X1\nDvbt2-S2",
    "oldPrice": 3899.0,
    "discount": 21
  },
  {
    "id": "admin-1784995249605",
    "name": "Nasco 50″ LED FHD Smart Television",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "NAS-J50FBFL-G",
    "category": "tv",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1f9JVpo3j5TIQ0ro2VFYjrcrWcHuqs8MX%26sz%3Dw1000"
    ],
    "price": 3799.0,
    "rating": 4.5,
    "icon": "📺",
    "tags": [
      "nasco",
      "tv",
      "top-deals"
    ],
    "description": "50″\nHDMI\nUSB\n4K\nGoogle Slim Tv\nYoutube, Netflix , Prime",
    "oldPrice": 3999.0,
    "discount": 5
  },
  {
    "id": "admin-1785004689261",
    "name": "Samsung 75\" Interactive E-Board Android with Built-in Camera",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "LH75WAFPLGCXUE",
    "category": "commercial",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1PSpNhzOxM0cPJ2PUG7NXwtESCTGlnb32%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1lfMFnLcWRRSTYRyO2XvLiMDXzfBPKonm%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D14CoBj-jmvoBYKcgOY641ETAW47toPWwn%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1cTj0CHjX0jZFIzeskP-l3yhNa52hvwzS%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1kCrP8AVym3JuI1-A7wTap9Un4zGfekSw%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1HsOtdaEtNuBA_YOfAonw8XylwEuwASmI%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1CLMasaNz7T6lNPu2RtuctwmgoZjUbZqp%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1KnnXiFMQBWNQ5sbhoV7bUfLMvIGqXtjs%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1bMJWTUYYvqheD7CL2n-A918-abVjvq5D%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D14XvFiPBJUy7x8jFL6VRZUWuk_fTYrUY6%26sz%3Dw1000"
    ],
    "price": 37500.0,
    "rating": 4.5,
    "icon": "🏭",
    "tags": [
      "samsung",
      "commercial",
      "top-deals"
    ],
    "description": "E-Board Android\nBuilt-in Camera\nEDLA Certification",
    "oldPrice": 39999.0,
    "discount": 6
  },
  {
    "id": "admin-1785284514366",
    "name": "Samsung 430Watt Sound Bar",
    "brand": "Samsung",
    "brandId": "samsung",
    "model": "HW-A650/XA",
    "category": "audio",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D11vmBkeo1KAASlgqtJiYc7DX2WRJr4XTi%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1DMz88BbpMZO4J_hS1K3V7FlyPHduER55%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1-EPpALesNOYcOAjzZkBsf4W2nNZX0c7i%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D13TiyxN7vZXTOhzPt8SbJKHnebdvjOYv_%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1GmzDrdPoPv3ETaC0DS5CU-rCshKEhH-Z%26sz%3Dw1000"
    ],
    "price": 4399.0,
    "rating": 4.5,
    "icon": "🔊",
    "tags": [
      "samsung",
      "audio"
    ],
    "description": "430 Watt\nPowerful Base\nBluetooth\nHDMI\nUSB\nBuilt-in Subwoofer\nRemote Control\n3.1 Ch"
  },
  {
    "id": "admin-1785683073874",
    "name": "Nasco 1.2Ltrs Food Processor",
    "brand": "Nasco",
    "brandId": "nasco",
    "model": "FP9026KE-CB",
    "category": "kitchen",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1MeQCdyvT70nJ_gBZ9dA5Ortwf95xVZ8Y%26sz%3Dw1000"
    ],
    "price": 499.0,
    "rating": 4.5,
    "icon": "🍳",
    "tags": [
      "nasco",
      "kitchen",
      "top-deals"
    ],
    "description": "Full Function\nChopping\nSlicing\nShredding\nKneading\nEgg Beating\nFull Accessories",
    "oldPrice": 699.0,
    "discount": 29
  },
  {
    "id": "admin-1786059311853",
    "name": "TCL Audio Sound Bar 350W",
    "brand": "TCL",
    "brandId": "tcl",
    "model": "P733W-GHA",
    "category": "audio",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1nWk4vwpl25XosXlhCzXFnlwzpmNnJ64Q%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1W-czMuiaucT8Yw8lK6vTbsU8yHHrZfvH%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1abHxG0NbIpnAFmlvyXqaTYAQ84F_-OuL%26sz%3Dw1000"
    ],
    "price": 3700.0,
    "rating": 4.5,
    "icon": "🔊",
    "tags": [
      "tcl",
      "audio"
    ],
    "description": "Dolby Atmos\nDual Built In Subwoofer\nWifi\nHDR\n3.1 Channel\n350W"
  },
  {
    "id": "admin-1786391269311",
    "name": "Midea 10Ltrs Water Heater",
    "brand": "Midea",
    "brandId": "midea",
    "model": "D10-20VI",
    "category": "small",
    "images": [
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D188J6WATb7t0Kl8dn9VF_gtP2-qWtiaLE%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1IjFzmWOFA_Ql6nZybULE9dlgpaVmIXjg%26sz%3Dw1000",
      "https://res.cloudinary.com/fkngvka8/image/fetch/https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fid%3D1bdZTyJu1u_C-M3clTxXlFc8wfWK0y90T%26sz%3Dw1000"
    ],
    "price": 1199.0,
    "rating": 4.5,
    "icon": "⚡",
    "tags": [
      "midea",
      "small"
    ],
    "description": "10 Ltrs\nSquare Heater\nWhite\n2000 W"
  }
];

/* ── FLASH SALE ── */
const FLASH_PRODUCTS = [];

/* ── BLOG POSTS ── */
const BLOG_POSTS = [
  {
    "id": "blog-001",
    "title": "Top 5 Energy-Saving Tips for Your Home Appliances",
    "category": "Tips & Guides",
    "date": "May 1, 2026",
    "excerpt": "Learn how to reduce your electricity bill while getting the most out of your home appliances.",
    "icon": "\ud83d\udca1",
    "bgColor": "linear-gradient(135deg, #1d4ed8, #3b82f6)",
    "readTime": "4 min read"
  },
  {
    "id": "blog-002",
    "title": "How to Choose the Right Air Conditioner for Your Space",
    "category": "Buying Guide",
    "date": "April 20, 2026",
    "excerpt": "BTU ratings, inverter vs. non-inverter, and everything else you need to know before buying an AC.",
    "icon": "\u2744\ufe0f",
    "bgColor": "linear-gradient(135deg, #0ea5e9, #38bdf8)",
    "readTime": "5 min read"
  },
  {
    "id": "blog-003",
    "title": "Samsung vs. TCL: Which TV Brand Is Right for You?",
    "category": "Comparisons",
    "date": "April 10, 2026",
    "excerpt": "We compare picture quality, smart features, and value for money across Samsung and TCL TV ranges.",
    "icon": "\ud83d\udcfa",
    "bgColor": "linear-gradient(135deg, #1428a0, #d40000)",
    "readTime": "6 min read"
  }
];

/* ── SEARCH INDEX ── */
const SEARCH_INDEX = [
  ...PRODUCTS.map(p => {
    const catName = (CATEGORIES.find(c => c.id === p.category) || {}).name || '';
    const searchText = [p.name, p.brand, catName, p.model, (p.tags || []).join(' '), (p.description || '').slice(0, 150)]
      .filter(Boolean).join(' ').toLowerCase();
    return { type: 'product', id: p.id, text: p.name, sub: p.brand, icon: p.icon, searchText };
  }),
  ...CATEGORIES.map(c => ({ type: 'category', id: c.id, text: c.name, sub: c.count + ' products', icon: '\ud83d\udcc2', searchText: c.name.toLowerCase() })),
  ...BRANDS.map(b => ({ type: 'brand', id: b.id, text: b.name, sub: b.products + ' products', icon: '\ud83c\udff7\ufe0f', searchText: b.name.toLowerCase() })),
];
