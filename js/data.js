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
    "logo": "",
    "color": "#1428a0",
    "products": 64
  },
  {
    "id": "tcl",
    "name": "TCL",
    "logo": "",
    "color": "#d40000",
    "products": 65
  },
  {
    "id": "midea",
    "name": "Midea",
    "logo": "",
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
      "https://drive.google.com/thumbnail?id=1lLdH4PFVBBthv9Bz68NFvA2nm7C0-Zn3&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Z4dIsjD-6xiSJIEQ819L4e1xp5Dkc-Xk&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Zfv_cmPzIHUu_zc-kA7lLRpGtVn2P2Qn&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1GSjB4ONf8q_ei5cU8dePOLYJ6gQFXSrL&sz=w1000",
      "https://drive.google.com/thumbnail?id=1ovZ5aGbnhtq-u7wIK4XRCLsxhw7DwXVt&sz=w1000",
      "https://drive.google.com/thumbnail?id=1_1d7kJ_IN3d2ZQ-hWzrxxxT8pYseGVf1&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1iJ5Zrv5lDmJjPxziFvfqLzfjqZTwdQQX&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1BD5b7KRF5JLf0_jqaTQKbf3zJIN-wgWd&sz=w1000",
      "https://drive.google.com/thumbnail?id=1G-FCo-Zw1V-1xEDRL1OIqJv2FeI6xiJv&sz=w1000",
      "https://drive.google.com/thumbnail?id=19aYO3cZz9DCXt8U2PWcd0iYCHsavmc57&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1y-K6poZlAiuTlykeKlk4xaXuQboVahXn&sz=w1000",
      "https://drive.google.com/thumbnail?id=1O-ep0Q-iJbQHaw05tqUKFnaGSDt5m1_4&sz=w1000",
      "https://drive.google.com/thumbnail?id=1AprDF-vOPsi1cv-ovLA0z61O_1HKFp59&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1AprDF-vOPsi1cv-ovLA0z61O_1HKFp59&sz=w1000",
      "https://drive.google.com/thumbnail?id=157wWX-asts_8D6GpPGNKgRperjH-Ml6d&sz=w1000",
      "https://drive.google.com/thumbnail?id=1N1l5UhIbutAD0PGZtEUm5TbgOHxw7MsS&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1_5QyixNagyCzIOL3moN5ZLxVmKH_oC6c&sz=w1000",
      "https://drive.google.com/thumbnail?id=1RH8lZWDJgV7-m-oWdoLZ5d5Y8FXRVwL6&sz=w1000",
      "https://drive.google.com/thumbnail?id=1O-ep0Q-iJbQHaw05tqUKFnaGSDt5m1_4&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1lXlaBoUKw7W-BPfDyhUuKunlClOd_eId&sz=w1000",
      "https://drive.google.com/thumbnail?id=1RH8lZWDJgV7-m-oWdoLZ5d5Y8FXRVwL6&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1AprDF-vOPsi1cv-ovLA0z61O_1HKFp59&sz=w1000",
      "https://drive.google.com/thumbnail?id=1j4Toh1OKCmqVm50wrh_3xuRv9E7-8eLR&sz=w1000",
      "https://drive.google.com/thumbnail?id=1_5QyixNagyCzIOL3moN5ZLxVmKH_oC6c&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=14fF4Zqaw_0A9QRIo-x5E5mJI9khM59n3&sz=w1000",
      "https://drive.google.com/thumbnail?id=1CZ_AzMqUfZnDwa1P8qz_pn3irNaaIpey&sz=w1000",
      "https://drive.google.com/thumbnail?id=1z9WvF0rvbTOS-joTBjBiCViF-eC84svr&sz=w1000",
      "https://drive.google.com/thumbnail?id=1H73K-Te3ApLqiKUgZgjh9nWUr7YkX4Hg&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1GipBjwFxyKavmI-W5Ssyd2qO46MkVi4f&sz=w1000",
      "https://drive.google.com/thumbnail?id=1ZcIhJT6ZMxJDKUUsfLeSR7v4eG7ushoD&sz=w1000",
      "https://drive.google.com/thumbnail?id=1SdL1DUETI7usLU1UaPXta-f81KlJ9ItC&sz=w1000",
      "https://drive.google.com/thumbnail?id=1U4AkP0cVeSQ0bZ4PiQ-CLSWBEzgD4WJb&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1zpS01glvVJRomTYYlGPnBGaL2Nii3JvF&sz=w1000",
      "https://drive.google.com/thumbnail?id=14s6rX1ISK25MUeYtTD1AM-kY0bETpgYB&sz=w1000",
      "https://drive.google.com/thumbnail?id=1vtCwxqgKNhTLeN2i3PSmjHoh8DId_vq9&sz=w1000",
      "https://drive.google.com/thumbnail?id=1g23TjXSWDQiIwGZ5nKLOtfp8406-bCo7&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1Fgkw0e_5QmefICbs88fthDWdY-KvnPf6&sz=w1000",
      "https://drive.google.com/thumbnail?id=1WoRsc3Fl_ysl8LqlzogqLjmQBPf2MM6Z&sz=w1000",
      "https://drive.google.com/thumbnail?id=1nB7uoMLpE4k6zu6zoRYup4tB3sr0DbUZ&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1THXeq9TZ0qR5KzlDP08_dAPLPUdCGqvK&sz=w1000",
      "https://drive.google.com/thumbnail?id=17oN_gav-XywK3BNC6fenI7DLTFXSvScg&sz=w1000",
      "https://drive.google.com/thumbnail?id=1BdBFFqJw3acTbqjT4Cjm4O9v-BXDMOfw&sz=w1000",
      "https://drive.google.com/thumbnail?id=1F472Iw5hOdv6QTriP4fyVStO3SSlcZ-5&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=11fCspgvNoZG51xX0I2JakBQ7bB-O5ECX&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1WUh-bXwYXDNMNSuH5CEFEBlIElHJXAGZ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1sDEhbmC4KhvgB0XQi_7DUixSpN4rsgwF&sz=w1000",
      "https://drive.google.com/thumbnail?id=1OAV4UOV2a2mttPL5hr3iZRpNHsJb_mrh&sz=w1000",
      "https://drive.google.com/thumbnail?id=17QSCzg2oWpLwOdcvqkYXGByVJJogfigW&sz=w1000",
      "https://drive.google.com/thumbnail?id=1ouxyMQH1H-Pdr4PqgX24nFj6K6Fdr1Gk&sz=w1000",
      "https://drive.google.com/thumbnail?id=19O7VLq1Co5CWEjs1VhiIL3bFIXQ76Z_T&sz=w1000",
      "https://drive.google.com/thumbnail?id=1zCfzMvuOJKOehwfTliNxpX9YrNBKi2Wg&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=17-LNJCJBaaNMHg5--jKwMpvUimax4IUz&sz=w1000",
      "https://drive.google.com/thumbnail?id=1eG9YJoSxHS37e7gS4nlizzB_U9VTxCJy&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Lx4rrR8lZxBVAWQ9plfYjBDJ3vwhNGaf&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1jl4HjdtAx9xAxhPunl2mHZSctbex_eqj&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Fi7TNihZXxmc0YqmtRF9mfAaO76KIu3L&sz=w1000",
      "https://drive.google.com/thumbnail?id=1o6we8XIEbzVPQvXpsDNBqLyvIgVcle3T&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1EfmU_TxnBlkf84b-ioGtmNAJEhL-goOd&sz=w1000",
      "https://drive.google.com/thumbnail?id=1O88498p-yrQKFBCVIi8GxOITngrEaaes&sz=w1000",
      "https://drive.google.com/thumbnail?id=1vFNxrm6AwNlDc-CM99B1Z_rmW3hvVsXn&sz=w1000",
      "https://drive.google.com/thumbnail?id=1TJfb8fSc48Wqe6P59UvpVtAKP64jzgTC&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1gJPaYXIHHeqSygdT4vCCJWXl-otH1h-F&sz=w1000",
      "https://drive.google.com/thumbnail?id=113mdHKuoSBC2HqSp1ZjEgbfRzeUCfoO6&sz=w1000",
      "https://drive.google.com/thumbnail?id=1O1W5ksNJsIjnuIvfPYroYLjHnECzYG9z&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1yIAyfvtO1xFEdc74MVtyxa1uNBzsd4I3&sz=w1000",
      "https://drive.google.com/thumbnail?id=11rPYWcb_Dtohg_DZxZ6lndE4aU3dbYE2&sz=w1000",
      "https://drive.google.com/thumbnail?id=1jpDr-VR4Y81Mo_sSyo_BzF3CHVbAj14z&sz=w1000",
      "https://drive.google.com/thumbnail?id=1jnFJ-TMs3QzSN6c2_fC91avAD3HDzlcO&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1Obuo2scJEI7yttjRyjiAhoc8st7BHnoz&sz=w1000",
      "https://drive.google.com/thumbnail?id=199wfZDZURsh6bSFD7VwgFs5JnzS_rywE&sz=w1000",
      "https://drive.google.com/thumbnail?id=1z9uomji3zHpHb-T5CCMi6OrZvBvpfND2&sz=w1000",
      "https://drive.google.com/thumbnail?id=1dpnWRmxVae9xqi9ONJMMCgjAe1J52bqC&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1rhFFplFLtKQ0JWFjW_FFFgSESRVLllp2&sz=w1000",
      "https://drive.google.com/thumbnail?id=118CZ6sOOYfV716rq4dOYnUPSGKrjingh&sz=w1000",
      "https://drive.google.com/thumbnail?id=19vjEb16h7TBF5hOzANlCB-Ku3Modl1hH&sz=w1000",
      "https://drive.google.com/thumbnail?id=10IVkK2z6AbtXlYbItythZq44qb_0Zb7G&sz=w1000",
      "https://drive.google.com/thumbnail?id=1l117HBY6GamhFzhFModYs3X2xQuEXbJf&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1Sx3eYF2mW7CnpFf1QEgukCgd8jUJuHlG&sz=w1000",
      "https://drive.google.com/thumbnail?id=1oHJUJS90dsp2aymHYQab2mEwJdQSEIja&sz=w1000",
      "https://drive.google.com/thumbnail?id=1uQ00vRVG7rZdrqEGJLsrmn-k_4mOOkCm&sz=w1000",
      "https://drive.google.com/thumbnail?id=1I9SftMHPw4IpyvHOcSsJDy9Kfz1LXV6H&sz=w1000",
      "https://drive.google.com/thumbnail?id=1lIm9zGp89hJS76WZnvDICPl2D3mQuVHK&sz=w1000",
      "https://drive.google.com/thumbnail?id=198CH56fFcRaiZzgyivrc62rA1Y1R9JGo&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1FnuMSHjWbhk_-dFkD0xvlFuxFice3Hve&sz=w1000",
      "https://drive.google.com/thumbnail?id=1iUQma3Q-hj-VD1F0F9xxdD9ec_jvbh2u&sz=w1000",
      "https://drive.google.com/thumbnail?id=11ft82erzLxVZo3jpXy3fQQ2De9w39GDJ&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1dm9giKOTfzJJ3SB1_zbPax5PIZWrssz-&sz=w1000",
      "https://drive.google.com/thumbnail?id=1gI39_Uz-YuLG20KbghnSdkeyT4Mb-egY&sz=w1000",
      "https://drive.google.com/thumbnail?id=1SR1YC7ZaecvZ9VuMsBbS17H8j_p5ADkF&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1dPCr4nolEhlwMsdXWGkTYk-mfrLxjBYL&sz=w1000",
      "https://drive.google.com/thumbnail?id=1TRn-_1PLbkehLscQ8bFeX1b6E4yLsqXv&sz=w1000",
      "https://drive.google.com/thumbnail?id=17lVAbF07ueTctgFvB_VNHEaSW6QTWmwC&sz=w1000",
      "https://drive.google.com/thumbnail?id=18xAomnUl4iPosX0yvwy5VFwJcaqeVtsr&sz=w1000",
      "https://drive.google.com/thumbnail?id=1xUGp4iQJNKHoUZGh9XzOkpk3FeaL4MtE&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1foJCUDyrO7wOUXyEeE8QQMAp5kOTdWVa&sz=w1000",
      "https://drive.google.com/thumbnail?id=1vtdtICZrqhv1bp5ZvRail0rcoCG4Gfdr&sz=w1000",
      "https://drive.google.com/thumbnail?id=1cc2OmzovMDo0-3HfGrrRrJ7rkxxTiOhb&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1eFMMsGFSkClIQOs0HpuMuq15brpHMw6K&sz=w1000",
      "https://drive.google.com/thumbnail?id=1wVJYac6gQ1v0NIU73U_jzcziHH_zdz16&sz=w1000",
      "https://drive.google.com/thumbnail?id=1e-C9nUrZfeJLvlPFi6e9n_5xvgfiavQK&sz=w1000",
      "https://drive.google.com/thumbnail?id=1uv18AN4qug0AagT1B1aJOB_HeziMZD4i&sz=w1000",
      "https://drive.google.com/thumbnail?id=1uebwRkGvrmIWjK6Qfxhlv5-62lFBl3M2&sz=w1000",
      "https://drive.google.com/thumbnail?id=1QiiKcciiB9QbdPjWKMUgrC7DNfHjkziL&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=13muRRZ5q-rPjIDeZbV7TZ_ibVSS6fk-V&sz=w1000",
      "https://drive.google.com/thumbnail?id=1b8AbG22K5vgByTLW-THDRKmhMIhdBd9C&sz=w1000",
      "https://drive.google.com/thumbnail?id=1vIpdMAD9uVPYDC5POOx-ftBK72uHrDfQ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1m7jWaG-l-VZfHlcWQHVmnFdTyCmJ2ZJm&sz=w1000",
      "https://drive.google.com/thumbnail?id=1nho0Np9r01OCoD_LHe7VexOqmGVMLSqw&sz=w1000",
      "https://drive.google.com/thumbnail?id=1hrMNXcjnm_tdRydyomudZy26o_ZoOPSB&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1vXncdZKxzYLCjCqw6BTu2wgVmnRJ-mrL&sz=w1000",
      "https://drive.google.com/thumbnail?id=1x5ujrWQHiSSgGhqcQRv5yVgwzE_PWF9y&sz=w1000",
      "https://drive.google.com/thumbnail?id=1xPEf_ohncVUi3vp8RYR7MlhAj5snaLyE&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1s0nkwnHX00Rc41TjX2JWL6SiV3Ybez5A&sz=w1000",
      "https://drive.google.com/thumbnail?id=1XyiE_kF4j7_fj3bg-ZRlfhSaHn65HMDV&sz=w1000",
      "https://drive.google.com/thumbnail?id=1-Um3KdA54cwO_RteVEbGCgsKwlullMb3&sz=w1000",
      "https://drive.google.com/thumbnail?id=1fLBlJfoCSSDkTpU_lNQDY8IpBZGdHrJJ&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1SE-9gwwzE7mrQgNTfqdk3WKvituH5eaV&sz=w1000",
      "https://drive.google.com/thumbnail?id=1GH-SLeEtd1Uk_TXNz5UtLikd1OrqO6DG&sz=w1000",
      "https://drive.google.com/thumbnail?id=1xKCu2rSVWcVs6dA1_CxdksZLOLMAOr1W&sz=w1000",
      "https://drive.google.com/thumbnail?id=1K6BH21Z4xQctTy399jzM1ZViGQThxOdm&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1rD9ZV3jYnlHIoSpwKKTLVMl3JHtOgXKQ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1bzql6aUxUx3wQAkZtoi9r8FEP3cVnTmX&sz=w1000",
      "https://drive.google.com/thumbnail?id=19qPTD3No-3okzqbGmvtrbmJh6s-7DZW9&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1SMdfHhnmlxsqe9ov6a7YbF5Q-4GrEPRo&sz=w1000",
      "https://drive.google.com/thumbnail?id=1LB6VSyo7OpveSalD7M3IxcCpS6nOOEVo&sz=w1000",
      "https://drive.google.com/thumbnail?id=1RkKVdlvGDa4jjpbIbZnf1NQEygkE5_rB&sz=w1000",
      "https://drive.google.com/thumbnail?id=18_DHJdBRLZC1Y-g54nmh37IgR6OASvRh&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1OridJ9CPEZvUAmtBs7iseSL8GsFNu1TT&sz=w1000",
      "https://drive.google.com/thumbnail?id=1IJ32a-0R6pvIL55eyaFxUSPJeWKqQzqm&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1kGJooee3PbTkrlFtHCuyJZyC2fIvlUjP&sz=w1000",
      "https://drive.google.com/thumbnail?id=15bgI4Lw4ClzufvfbxquSKv_489hD7mqZ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1xdzi-3eRiAYF06EDn4-F4cRF86_0w8JR&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1xdzi-3eRiAYF06EDn4-F4cRF86_0w8JR&sz=w1000",
      "https://drive.google.com/thumbnail?id=15bgI4Lw4ClzufvfbxquSKv_489hD7mqZ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1kGJooee3PbTkrlFtHCuyJZyC2fIvlUjP&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1KpdFTkP0UxrXfoDyUXKZ_BttfZ3jUzF-&sz=w1000",
      "https://drive.google.com/thumbnail?id=1GYMZb1W8sYrpk4T8kUxFiR1tzpfm94Pm&sz=w1000",
      "https://drive.google.com/thumbnail?id=1kdKjsyCY1EEsW6QClFMyTD0FBOuMybp5&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1KpdFTkP0UxrXfoDyUXKZ_BttfZ3jUzF-&sz=w1000",
      "https://drive.google.com/thumbnail?id=1GYMZb1W8sYrpk4T8kUxFiR1tzpfm94Pm&sz=w1000",
      "https://drive.google.com/thumbnail?id=1kdKjsyCY1EEsW6QClFMyTD0FBOuMybp5&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1kdKjsyCY1EEsW6QClFMyTD0FBOuMybp5&sz=w1000",
      "https://drive.google.com/thumbnail?id=1GYMZb1W8sYrpk4T8kUxFiR1tzpfm94Pm&sz=w1000",
      "https://drive.google.com/thumbnail?id=1kdKjsyCY1EEsW6QClFMyTD0FBOuMybp5&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1WaADuA3KN5qFQFfa92MuecjXr_Mot-Wh&sz=w1000",
      "https://drive.google.com/thumbnail?id=1WHksqqp3Pq8179YnqBE9lSm-bsmk3XLT&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1WHksqqp3Pq8179YnqBE9lSm-bsmk3XLT&sz=w1000",
      "https://drive.google.com/thumbnail?id=1WaADuA3KN5qFQFfa92MuecjXr_Mot-Wh&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1WaADuA3KN5qFQFfa92MuecjXr_Mot-Wh&sz=w1000",
      "https://drive.google.com/thumbnail?id=1WHksqqp3Pq8179YnqBE9lSm-bsmk3XLT&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1YS879ljU21iPt3QwKGEsJj-mQuIoRSlQ&sz=w1000",
      "https://drive.google.com/thumbnail?id=198zmmYQvJMMH5AUf4zmYOCR06rhBC9HM&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1lBacpHi4JqLX4KAmHpf_KMp80QcdLPjg&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Q7f2MZkCaFoqUV1Fa8f91TERmtXSlxfx&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Zbe0mT3PQvSjoi2Np5baWh8wVZ5VFoEn&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1cBHWfRwVXyQG4RYedHlLdgnG7s3LJWwA&sz=w1000",
      "https://drive.google.com/thumbnail?id=1NXvWjVa9I0Kr7KnXVk-GyBd3bz5QpfcA&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Ivmn4gaTaaD-py7GB1R5Q5g1jfgg3kqN&sz=w1000",
      "https://drive.google.com/thumbnail?id=1rFmmN2QNdUGxkOLkneotO_BLpX_jaqDy&sz=w1000",
      "https://drive.google.com/thumbnail?id=10FYiDJfhWqzwYrdE3ZfYz-HpA9scxz9e&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1KS47ICvSUkP9twpEkRbYhJoeOSDwshMo&sz=w1000",
      "https://drive.google.com/thumbnail?id=1XYeTJG1SwDcjd9TAoO4T6CExXisuQoHj&sz=w1000",
      "https://drive.google.com/thumbnail?id=1FuCaEg4OHZvNxWsnyTUnQ1w40fewMzAS&sz=w1000",
      "https://drive.google.com/thumbnail?id=1H5Ofs5W64q9AOv2vYRjAQkuf5ZSMwl86&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1HKuT-cuWrG1WXHVhyg1d66SChiZ2dJ31&sz=w1000",
      "https://drive.google.com/thumbnail?id=13N5nkwXN2OKX-W0rW5b8RcOxmwz1DaFR&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=13NS1NT0NT-6xSv8xgb_qnXXgv0nsWdQI&sz=w1000",
      "https://drive.google.com/thumbnail?id=10FCee_0sCUW5Y1kr8Z1DrNfXr5jh5T5R&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1M1k54m4DZmxovNgyFrpy3wRq5_VOGK0Y&sz=w1000",
      "https://drive.google.com/thumbnail?id=1W8fo4M7VFXYjJgwcReVtX4mvVWLzr5XH&sz=w1000",
      "https://drive.google.com/thumbnail?id=1EaKN0QP8NpWXGn60E8Hhpy04KAz_1PxP&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1sq82aHBw4RIApxRxgW5-4ElioPfKb-A9&sz=w1000",
      "https://drive.google.com/thumbnail?id=1pg2sFSchvMevJusY--5wOHa_uehcQnJD&sz=w1000",
      "https://drive.google.com/thumbnail?id=1imZ8A2Ym_LplrkrXuWnBHEeN7vrGKn6C&sz=w1000",
      "https://drive.google.com/thumbnail?id=1pGYcukQbWWc4X9JQuZ-t2KxMFYasmjq1&sz=w1000",
      "https://drive.google.com/thumbnail?id=1UCLoyiDPgcLxpVwDAe638EZWwzogOEmV&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=178vyeXisEdXkJvXSTEzxGs_awxKpYZHA&sz=w1000",
      "https://drive.google.com/thumbnail?id=106xk9l98Fx8wG1sn9qS_zvSBMtMgjvvn&sz=w1000",
      "https://drive.google.com/thumbnail?id=1VO-iKKYp1NTS-Q_y-2be6impSKUZ118G&sz=w1000",
      "https://drive.google.com/thumbnail?id=1G2i8LG5tf2QnnGgJeaPtZI_ZjefwCVSp&sz=w1000",
      "https://drive.google.com/thumbnail?id=1ZFgvtgxtt7aHZQ0wDdRb9N2gU4XtVX4Z&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1hOLY2M9JqXYPnehSzARoeWKuVRt8O8QF&sz=w1000",
      "https://drive.google.com/thumbnail?id=154yWtrMFSwadP0Mee-NFZmI24aQr-3wC&sz=w1000",
      "https://drive.google.com/thumbnail?id=1c8i1FKiGp0B78hRPHk7tq4M5AOAH4pPo&sz=w1000",
      "https://drive.google.com/thumbnail?id=1lw9p8yuP-pwXzaVxVcy4Pshmk1aXavHc&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=14MyG66SOH2yScnD9xWRkx_YvIVBBiCTx&sz=w1000",
      "https://drive.google.com/thumbnail?id=1vpWctf6ZopCV_YP-NKQ7iWEPtnD-_7Kr&sz=w1000",
      "https://drive.google.com/thumbnail?id=16v3K0c7Ikf5eCGLtzv3JQRds06wsXhFe&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1g5SLQAEv4GtI1kZFHrtIXmpByW-5OcNj&sz=w1000",
      "https://drive.google.com/thumbnail?id=1jH1NHZ3MycQ7sy_sHRbgCVz2zXh_G8Ot&sz=w1000",
      "https://drive.google.com/thumbnail?id=1LGurkLa3z1WBgwTZmmpUmrAuuzbcUO-H&sz=w1000",
      "https://drive.google.com/thumbnail?id=1miAYi37FOZV1hl_c-jqHeOpT6wJvP1XR&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1FvzhEL-pY2blA2Sb8s0mhZIdlM97IHF2&sz=w1000",
      "https://drive.google.com/thumbnail?id=1YddMnLUsveyB2ls_Kovz7B0qzYpgrbvO&sz=w1000",
      "https://drive.google.com/thumbnail?id=1zGztLTKFMt5sAS7IqfJWJxz4cy9uT3G1&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1BaBYH7RG4NdQYjz6sg_Y1tgiFMyeFAfL&sz=w1000",
      "https://drive.google.com/thumbnail?id=1KWo6L8KOj_HD9Ov_mhpyggvvqJhUZvr5&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1deqYYHaMNTbnUuhmUaudY9nfMosbILOy&sz=w1000",
      "https://drive.google.com/thumbnail?id=1I6IiYXaJWweRqY13NzLjM4yhtBJGC1Vv&sz=w1000",
      "https://drive.google.com/thumbnail?id=1UORMx70sBtWiHu5RXHMtC_0MgwEeoDa0&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1I6IiYXaJWweRqY13NzLjM4yhtBJGC1Vv&sz=w1000",
      "https://drive.google.com/thumbnail?id=1deqYYHaMNTbnUuhmUaudY9nfMosbILOy&sz=w1000",
      "https://drive.google.com/thumbnail?id=1UORMx70sBtWiHu5RXHMtC_0MgwEeoDa0&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1I6IiYXaJWweRqY13NzLjM4yhtBJGC1Vv&sz=w1000",
      "https://drive.google.com/thumbnail?id=1deqYYHaMNTbnUuhmUaudY9nfMosbILOy&sz=w1000",
      "https://drive.google.com/thumbnail?id=1UORMx70sBtWiHu5RXHMtC_0MgwEeoDa0&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=12x95GxzwMlroJyjpnYs_mUDffMW7JZMb&sz=w1000",
      "https://drive.google.com/thumbnail?id=14Nf2af9OiQnHFmUJNCOw3FyWuMQtJji5&sz=w1000",
      "https://drive.google.com/thumbnail?id=1u7gUtMHbC4Q3CCfKJZ4Kzkk-U1Ti2Af9&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1u7gUtMHbC4Q3CCfKJZ4Kzkk-U1Ti2Af9&sz=w1000",
      "https://drive.google.com/thumbnail?id=14Nf2af9OiQnHFmUJNCOw3FyWuMQtJji5&sz=w1000",
      "https://drive.google.com/thumbnail?id=1u7gUtMHbC4Q3CCfKJZ4Kzkk-U1Ti2Af9&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1u7gUtMHbC4Q3CCfKJZ4Kzkk-U1Ti2Af9&sz=w1000",
      "https://drive.google.com/thumbnail?id=12x95GxzwMlroJyjpnYs_mUDffMW7JZMb&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1p1wQv-vwvDlgrUno9oNWwggngiB9u4q-&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1MkD8fIYdgI1lNtaPgqhhZJUZ_zu4WJWs&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Z-j1DD7zj8vlahrmgq9hFAVyyLvzkh43&sz=w1000",
      "https://drive.google.com/thumbnail?id=19RIiPYfy_wZMjbpAvb9qiOagcaCRNHIh&sz=w1000",
      "https://drive.google.com/thumbnail?id=17Uws_ewMNPmQTB-mH1wSOeRsi54_TzYO&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1MkD8fIYdgI1lNtaPgqhhZJUZ_zu4WJWs&sz=w1000",
      "https://drive.google.com/thumbnail?id=17Uws_ewMNPmQTB-mH1wSOeRsi54_TzYO&sz=w1000",
      "https://drive.google.com/thumbnail?id=19RIiPYfy_wZMjbpAvb9qiOagcaCRNHIh&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1MkD8fIYdgI1lNtaPgqhhZJUZ_zu4WJWs&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=153Vi_DNOtXTXSgigKG76yOzMgmsF04XG&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=153Vi_DNOtXTXSgigKG76yOzMgmsF04XG&sz=w1000",
      "https://drive.google.com/thumbnail?id=1SThw2nKtWyjF1CF1QvQaLvpa3oxzaTpc&sz=w1000",
      "https://drive.google.com/thumbnail?id=10Z2vMGlOHQutXFYynKxyUVkz4-uF9OPF&sz=w1000",
      "https://drive.google.com/thumbnail?id=14Qd_MLj3VPhPFilhB2FTG4uXqvvB24Ih&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=153Vi_DNOtXTXSgigKG76yOzMgmsF04XG&sz=w1000",
      "https://drive.google.com/thumbnail?id=1kAS_Vgfj0bY7RigMjgB3lPCJQSQbCZ0u&sz=w1000",
      "https://drive.google.com/thumbnail?id=1m-t5MPOF3D5AOX9vt8lPwYYQEUm-roqW&sz=w1000",
      "https://drive.google.com/thumbnail?id=1pBUutrhh7iJy45d5aqnYGteFBdU11izp&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=153Vi_DNOtXTXSgigKG76yOzMgmsF04XG&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1kuVwbiGU_NCO8HSluP0zvgEH3aiqwNG7&sz=w1000",
      "https://drive.google.com/thumbnail?id=1gQCrXbzcf1zilWdkk0Z04sfwXrsQZKxL&sz=w1000",
      "https://drive.google.com/thumbnail?id=11_fSldr3JWgZ0fKCff_HEEAobCgMCQJG&sz=w1000",
      "https://drive.google.com/thumbnail?id=1mZJv-DBTMKrq4aWUEbsVFfKRw93NNLuC&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1WMm8QUK9QoqmdhZJAw-FDbLAG5I6Z7w0&sz=w1000",
      "https://drive.google.com/thumbnail?id=187idJZzFiDF0cpKArhMcSbrQPTbBbuNp&sz=w1000",
      "https://drive.google.com/thumbnail?id=1iv5dCwqMWcTOyIl_Cab7JQJ8gDf10_kL&sz=w1000",
      "https://drive.google.com/thumbnail?id=1KvWY1DIA7o7VwhRM1xpBeE3iYnrr0PU1&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1WdvmzCTSt2ZeAeDVgGG0l9u9d2iLdYlv&sz=w1000",
      "https://drive.google.com/thumbnail?id=15ZHeJ5Fv3O2PqXUv-WO1U0PYwurHsiBW&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=13tIp1yyEavxH-qpWdEVJS4SHgd3X_2mb&sz=w1000",
      "https://drive.google.com/thumbnail?id=1_gCGbVTlFE0pOpzrOIthi1PqE4_ATbGH&sz=w1000",
      "https://drive.google.com/thumbnail?id=1v_4KVA09lJOWIaIDvRtUoYgkNaYjFYAD&sz=w1000",
      "https://drive.google.com/thumbnail?id=1wkKk4emQIsrGj4yheT-SadJJAfG4Gnc9&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1UdJ5ELXdWodHH_TmwEd5P2nQTQ7rMX7B&sz=w1000",
      "https://drive.google.com/thumbnail?id=1KgkmO23CQMg1yhKjBY442QjTVI01LSty&sz=w1000",
      "https://drive.google.com/thumbnail?id=11AnXBnwK6ADUn4K3HIzYXscsqAvz5HdW&sz=w1000",
      "https://drive.google.com/thumbnail?id=1bSMWgxrTEYziZZggZSohX5Xx96sxgNlc&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1b-LJcK2txPAVI3-r1-fYW7Mx90d2foNH&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Kez8en-J0yl_roKc5zJB__BFmM67DJXI&sz=w1000",
      "https://drive.google.com/thumbnail?id=1mxGBbkI_rqMUpZpBTd0MIrBsRRTpBSdc&sz=w1000",
      "https://drive.google.com/thumbnail?id=1O21BhbcMGbh_pYB9IYgkyRVZxAksLZVL&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1uunxeAwwckPt15ffdUbbOB-W7-FSGJ1n&sz=w1000",
      "https://drive.google.com/thumbnail?id=1esB4ynly_VzPN6u1iJdpoSU6eHmwfw3o&sz=w1000",
      "https://drive.google.com/thumbnail?id=13hGPXbhZXFHJRRzunY3QgP0h866MpOV4&sz=w1000",
      "https://drive.google.com/thumbnail?id=1HQTyL-mEk-nF4reppFUTIHV4VffPD7ci&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=15JrwUPxpIsWBMGRDWWFA6oxutJKkgHP-&sz=w1000",
      "https://drive.google.com/thumbnail?id=1ZQLzsN9yzQhSFqBIoiY-WFQ6_6DzNqgY&sz=w1000",
      "https://drive.google.com/thumbnail?id=1B4p5T2zYbfqcHwp2mvo0b7WpKXowoGNr&sz=w1000",
      "https://drive.google.com/thumbnail?id=1y-ucMO-g4gMycbUNcXgqSxmMAeiMvnil&sz=w1000",
      "https://drive.google.com/thumbnail?id=1H4PFzOiV3Axe3ws653UmWneh1U288ucb&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1oRQxWZimhWKOoZz4NHvLF3l1f7QDPyhs&sz=w1000",
      "https://drive.google.com/thumbnail?id=1ZTtoxFNFhmn1eOHZKSbQFUnF5cV_1dZd&sz=w1000",
      "https://drive.google.com/thumbnail?id=1ZWEufqsUjEs0cUE-t5Yk75jlRmqq2L4i&sz=w1000",
      "https://drive.google.com/thumbnail?id=1n6jfXJwZ3si5tqRJnbzBhlGhVefRhz3h&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1M-NJgeZGg9unQkA02cGysuEk6NbPjbCW&sz=w1000",
      "https://drive.google.com/thumbnail?id=1V1-2hl2MrZv_VRSICVCG5NYGl4Sebs_o&sz=w1000",
      "https://drive.google.com/thumbnail?id=1M-NJgeZGg9unQkA02cGysuEk6NbPjbCW&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1B7J7SEtHChP7OkVRsspesmRzPjnIbpyj&sz=w1000",
      "https://drive.google.com/thumbnail?id=1NA8k8UE_xJv9-QD9QKHprNCmx1s6EXsI&sz=w1000",
      "https://drive.google.com/thumbnail?id=1E5JOqpgcNLnRvvPpiZj0ZlcMV_I-FhKk&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1hzxPZeD9f3Pcgqru01BGte5lis2yuRnW&sz=w1000",
      "https://drive.google.com/thumbnail?id=1lBFL1o2-kSkY6-qVz_EwR2lhgLUa_GqU&sz=w1000",
      "https://drive.google.com/thumbnail?id=1kWEXTI8pVOFb4aImW6qYmZKuTghTWUSd&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1lBFL1o2-kSkY6-qVz_EwR2lhgLUa_GqU&sz=w1000",
      "https://drive.google.com/thumbnail?id=1hzxPZeD9f3Pcgqru01BGte5lis2yuRnW&sz=w1000",
      "https://drive.google.com/thumbnail?id=1kWEXTI8pVOFb4aImW6qYmZKuTghTWUSd&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1kWEXTI8pVOFb4aImW6qYmZKuTghTWUSd&sz=w1000",
      "https://drive.google.com/thumbnail?id=1hzxPZeD9f3Pcgqru01BGte5lis2yuRnW&sz=w1000",
      "https://drive.google.com/thumbnail?id=1lBFL1o2-kSkY6-qVz_EwR2lhgLUa_GqU&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1meDPlLxj79mx5Ub9zNy4VZCRepjeMHvr&sz=w1000",
      "https://drive.google.com/thumbnail?id=1zspXOAVf0q81yJTh6G3vieQ5bg-Fe39o&sz=w1000",
      "https://drive.google.com/thumbnail?id=1jp3042VgtBL9QYB0Vonzr8-dj6JzLjGZ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1WBF8Hc8t1JTTEcuYu3hbG0IVoMlMgGmo&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1WBF8Hc8t1JTTEcuYu3hbG0IVoMlMgGmo&sz=w1000",
      "https://drive.google.com/thumbnail?id=1jp3042VgtBL9QYB0Vonzr8-dj6JzLjGZ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1zspXOAVf0q81yJTh6G3vieQ5bg-Fe39o&sz=w1000",
      "https://drive.google.com/thumbnail?id=1meDPlLxj79mx5Ub9zNy4VZCRepjeMHvr&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1meDPlLxj79mx5Ub9zNy4VZCRepjeMHvr&sz=w1000",
      "https://drive.google.com/thumbnail?id=1zspXOAVf0q81yJTh6G3vieQ5bg-Fe39o&sz=w1000",
      "https://drive.google.com/thumbnail?id=1jp3042VgtBL9QYB0Vonzr8-dj6JzLjGZ&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1LmQn-5QFiNXNLhJgST5brn0L_BVmFv4C&sz=w1000",
      "https://drive.google.com/thumbnail?id=1slqhl5C-ym5CvfIJIkcJ4ZOXHRz5BFq7&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1slqhl5C-ym5CvfIJIkcJ4ZOXHRz5BFq7&sz=w1000",
      "https://drive.google.com/thumbnail?id=1LmQn-5QFiNXNLhJgST5brn0L_BVmFv4C&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1LmQn-5QFiNXNLhJgST5brn0L_BVmFv4C&sz=w1000",
      "https://drive.google.com/thumbnail?id=1slqhl5C-ym5CvfIJIkcJ4ZOXHRz5BFq7&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1ErRV9_BCmW0jgE9P7zRgZsyJjWKHM0QD&sz=w1000",
      "https://drive.google.com/thumbnail?id=1w5l-Gclua-S4i0w4djN7k2PandULlWzP&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=19KPcfcjnRMgpwrDbikaeB5tC4TgNN9kv&sz=w1000",
      "https://drive.google.com/thumbnail?id=14A4E7zv2fTOg__XEgVeU_xyn1oWk7eMQ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1PttiAGBg4B8Rq7sb_JMj8-2ExNOUwhZ6&sz=w1000",
      "https://drive.google.com/thumbnail?id=11goWsS0tufoVpsF96aJlNKM835-f0Tkl&sz=w1000",
      "https://drive.google.com/thumbnail?id=19WF5DaBnuhNVhVzZfdKXHg15OobXEMoX&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1GADhtcSn8oRJRgtZOMDU13W4lwfea93k&sz=w1000",
      "https://drive.google.com/thumbnail?id=135cvjHMXIqlfVFKl4qolpqr3NnMs-Enp&sz=w1000",
      "https://drive.google.com/thumbnail?id=1x1ZUYj9ZFbqr-CizpyerhA9aKHUgnwea&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1DULJXOmW-peMcpQA492u1WVQ8ZfRvdWE&sz=w1000",
      "https://drive.google.com/thumbnail?id=1z-IdAO-Zeo1nEbZyjnQs5hY98U2RNXRK&sz=w1000",
      "https://drive.google.com/thumbnail?id=1W_665rlfpS1E65wMejG7UhRCvgl1c6Bz&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1hNc9838HDVY3FUq9rsPZ-OrlG0wK9zpv&sz=w1000",
      "https://drive.google.com/thumbnail?id=1WViHgFxxTcluaBKY6ovrVeB1i6INf3kx&sz=w1000",
      "https://drive.google.com/thumbnail?id=1J7_zHBJqGrhOg168pr7EX_N3QmAdXTSx&sz=w1000",
      "https://drive.google.com/thumbnail?id=1dDMNrRsDvgicADh3Gjce6fY5IwU77KZQ&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=16xf0DM3RY66KPNvROVzVJDT2HpjWRScL&sz=w1000",
      "https://drive.google.com/thumbnail?id=1gv70wj4iOkaCpE4S7THZghnuXb1uwL1e&sz=w1000",
      "https://drive.google.com/thumbnail?id=1D_pzdSs7CfUbM89QZeEOMw1sEe5D-LEz&sz=w1000",
      "https://drive.google.com/thumbnail?id=1l3Y1gnh6aZ_H9_DUEtm2KAPnSVAbhuq2&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1wvzuiRsr-ba5NRxLjsu47JUwHV4xfv8m&sz=w1000",
      "https://drive.google.com/thumbnail?id=1JLe6p_qs1keGj9YKMcyNEaWHEnq-oV-H&sz=w1000",
      "https://drive.google.com/thumbnail?id=1h0BG76-IlTOgE837TlO8GMVlXexerDvR&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1LLiHO-SQPNx8wNQ91GJl3LraXe0dwgWk&sz=w1000",
      "https://drive.google.com/thumbnail?id=1xWIdvJsbLFt6n7UwrTS8tSo4YPMVqQ8O&sz=w1000",
      "https://drive.google.com/thumbnail?id=1_9KkyeuEX1JGMhXaVOK675ijCFtfO3c_&sz=w1000",
      "https://drive.google.com/thumbnail?id=1PItwdXv1YTX8h-QwYLak_FtDPyfb9I4o&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=16laeZmjvF_EKfSMZuQLBy4LjhgILGTGU&sz=w1000",
      "https://drive.google.com/thumbnail?id=1gzBqTER4xy7CzRaSmjSvQzscxyVstgJf&sz=w1000",
      "https://drive.google.com/thumbnail?id=128IElHzZxuyksYJyeOzaYOX3UJkcgJr_&sz=w1000",
      "https://drive.google.com/thumbnail?id=10ITamT1SmARQigSdzHyFI_qsRj_WtBT1&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=17Wp0F15NIhwAtYYaSpYSZmKoKa7X0Qs9&sz=w1000",
      "https://drive.google.com/thumbnail?id=1u15-WCIJYUcB1iuRCHBwNZ3QJ79NTS7a&sz=w1000",
      "https://drive.google.com/thumbnail?id=1ZHo6kN45ReVeBgpNhneaJqMSdtTqXwCe&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1OMsm1fAuR78TIhrzbArV0kTTMM62SZOT&sz=w1000",
      "https://drive.google.com/thumbnail?id=19s4CbGt3OgGmMngEIn_SY83tnIFHy-lX&sz=w1000",
      "https://drive.google.com/thumbnail?id=1F9aQ9EmVhsGBACKgsaboGhOPBjByXwFZ&sz=w1000",
      "https://drive.google.com/thumbnail?id=12d_QnkYd-CeoSRn0oS0xsdbs8tKwLILN&sz=w1000",
      "https://drive.google.com/thumbnail?id=1LvRB-RoXy-_PuxuubUZjyPH3DCReoN_r&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1UJuTQC8f6_4HQjmx87ieQv1ISxEfSoEQ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1a7QlTNtf_Yc14UxWe4rmskabjT-jXkA-&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Z1nTjUG3DPjwz7dcpAOltk6t58m0weKr&sz=w1000",
      "https://drive.google.com/thumbnail?id=1cWLKkYnH9KYM4HEnbuBv7SrONou-lSVW&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1bKY6aON8Ko43Um9eun4eSvyXyAYtZiq7&sz=w1000",
      "https://drive.google.com/thumbnail?id=13BQq6JI7q6waBiFP4kJv3zXiTvaYIRnS&sz=w1000",
      "https://drive.google.com/thumbnail?id=1kCVdOu3LJmngXxpE5WGPPo7ozcx-zzCA&sz=w1000",
      "https://drive.google.com/thumbnail?id=1BTObAuAILPsnqqM_Pw4rp8b2QH2L01nu&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1KithAvCVjjIZGJ5AkS71RBC_fkhkQlKQ&sz=w1000",
      "https://drive.google.com/thumbnail?id=18C4rpUsBNE6i0ENJNq_1s9GHg6HSq0I8&sz=w1000",
      "https://drive.google.com/thumbnail?id=1BD3Ted__kc7Iul99LK8cUQst1XFtSLCk&sz=w1000",
      "https://drive.google.com/thumbnail?id=1c4vRyflZwUjc6H-FiSg9B8iXbbr0GuF9&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1KmXvlnyCnsh4lTnArNKxkG5KRmmTNRoS&sz=w1000",
      "https://drive.google.com/thumbnail?id=1MnzZ7uyPRlgXlrsXN-DHyIubnRiqjmem&sz=w1000",
      "https://drive.google.com/thumbnail?id=13yWiXWKeON4eTUJACVHxJvLJH7Yk0Q5v&sz=w1000",
      "https://drive.google.com/thumbnail?id=1pgb7QvtpPjGfcxW2O8D_pnrOe8m62oon&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Cfok-Ukl0RxMHeY2vX-MbPdOwp7ICvgY&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1UiDTE2fcSw7MKXh3IatRAzeys0IWTzTm&sz=w1000",
      "https://drive.google.com/thumbnail?id=1IlBW42DLAFYLbuHIg3UyHATSHgmB-acW&sz=w1000",
      "https://drive.google.com/thumbnail?id=1d2ArzLkZyEHW2G93wwG7hJlMGRCzLK3u&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1XCgT1XPCgN6_El8qAC9mFrVJSsoxU8R8&sz=w1000",
      "https://drive.google.com/thumbnail?id=19lp8jRMGSZDrvL0htnw5KVikQK4qcZmI&sz=w1000",
      "https://drive.google.com/thumbnail?id=1mWLXuZRl8hMeOUh6I_Gd-X5gRtiy6hMa&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1qTKxRuO5jpdDv2Vz9uoug-jFd4t_Wdp5&sz=w1000",
      "https://drive.google.com/thumbnail?id=12XwK9c1oEsjr1v9MRXJ22ZKmd_JwrXwo&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=12XwK9c1oEsjr1v9MRXJ22ZKmd_JwrXwo&sz=w1000",
      "https://drive.google.com/thumbnail?id=1qTKxRuO5jpdDv2Vz9uoug-jFd4t_Wdp5&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1qTKxRuO5jpdDv2Vz9uoug-jFd4t_Wdp5&sz=w1000",
      "https://drive.google.com/thumbnail?id=12XwK9c1oEsjr1v9MRXJ22ZKmd_JwrXwo&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=12XwK9c1oEsjr1v9MRXJ22ZKmd_JwrXwo&sz=w1000",
      "https://drive.google.com/thumbnail?id=1qTKxRuO5jpdDv2Vz9uoug-jFd4t_Wdp5&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1WGYyaYfdPQzTJ7_XNIJxwO6d4Q8ShcMR&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Ka2wh1CpcSDS3_60smDkRbRKyWVmTZm0&sz=w1000",
      "https://drive.google.com/thumbnail?id=1nsjCsTEyk90gfk_n7w2eO6GMXiviYOTB&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1Zrn0La_IM1Ed207IHcm6cBUx73zvu96K&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Z913jmrsKGSleAclwBwhBhdKcvUkHwN4&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1XSwWRpjT3ID4VsE5-QESO1AeQi9PWvMe&sz=w1000",
      "https://drive.google.com/thumbnail?id=1EVPSgFTc6gUih2440MdIVBmh7zeu774X&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1YPL1vky_bbPAimnyjBwJ6fzksCK-3A2H&sz=w1000",
      "https://drive.google.com/thumbnail?id=1XWgB9fVt7pL_9lMpD5A0lqRnwecJgJE1&sz=w1000",
      "https://drive.google.com/thumbnail?id=1ADPPPI6VN_tVEZ7IqBAfBTtprJ5bUZ50&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1CTV0J3iESKqN2LH0J8VdKYmADYGtS0lr&sz=w1000",
      "https://drive.google.com/thumbnail?id=14JDQ37R5O5TCVVimrzeAzybdlZhsadBn&sz=w1000",
      "https://drive.google.com/thumbnail?id=1bpS5tisRw_Xu6aUc9qtSyi7IsHz5s7q5&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1HQ32-BPpkUM65lDyJ-WXv_kU55bwcvVG&sz=w1000",
      "https://drive.google.com/thumbnail?id=1fACnkRSqclExF1OFfG3LBQd6Ih6IOL8p&sz=w1000",
      "https://drive.google.com/thumbnail?id=1PiOlU347vTTUXin-gzJaVl8Nqf9rxB5H&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1EfE7N1DiqyMj3UjpFkZu3-pKgEEnNNib&sz=w1000",
      "https://drive.google.com/thumbnail?id=1fw2OZyfU69YqemWWWHMU4Izoa34fI7bS&sz=w1000",
      "https://drive.google.com/thumbnail?id=1KrjVWz2gKGWFd6OSgB2tbLlOUsNGGkKH&sz=w1000",
      "https://drive.google.com/thumbnail?id=1kR5DXFtPY81VPuhybes4XSQVC8Uidq4q&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1xFIPDISnoxtu0FQ-jV0iHSIzG9vsPwIW&sz=w1000",
      "https://drive.google.com/thumbnail?id=110JUEo8ZM7pcl1BiWz7Crv0QbEhhBUzG&sz=w1000",
      "https://drive.google.com/thumbnail?id=1ronc3YGSJy-g5dNI8PuDVYceS_Wm7bdO&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1QVmOQIqDagZ9v_nJiNMSNmAmpVo4Me4Z&sz=w1000",
      "https://drive.google.com/thumbnail?id=1uGId6Lag5N0AI56pT9EwNm7RMbtQ4QGc&sz=w1000",
      "https://drive.google.com/thumbnail?id=1if8DR4uIZf6mc5GzIxSb_PqAJQTI1E-9&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1_OcMPXJtP1jqCFUVvJXaX_KJDfccMXK-&sz=w1000",
      "https://drive.google.com/thumbnail?id=1lz5ZlqW2n0RDwAkbNd3hso2zqoKJV1hf&sz=w1000",
      "https://drive.google.com/thumbnail?id=1q1WyoilRumFBFiE3nuriZjgli-eM3zKB&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1q1WyoilRumFBFiE3nuriZjgli-eM3zKB&sz=w1000",
      "https://drive.google.com/thumbnail?id=1lz5ZlqW2n0RDwAkbNd3hso2zqoKJV1hf&sz=w1000",
      "https://drive.google.com/thumbnail?id=1_OcMPXJtP1jqCFUVvJXaX_KJDfccMXK-&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1_OcMPXJtP1jqCFUVvJXaX_KJDfccMXK-&sz=w1000",
      "https://drive.google.com/thumbnail?id=1lz5ZlqW2n0RDwAkbNd3hso2zqoKJV1hf&sz=w1000",
      "https://drive.google.com/thumbnail?id=1q1WyoilRumFBFiE3nuriZjgli-eM3zKB&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1YmvUFkQcTVAdrTZBlLTs1r9dORinflK9&sz=w1000",
      "https://drive.google.com/thumbnail?id=1DddSqwhfW_f96TyzYdvCK006zQGLn5ap&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1eA6faPOyTWn3THyBYP3tvBmR95g5Dhx6&sz=w1000",
      "https://drive.google.com/thumbnail?id=13p8S9DmS0qtkG7h4i4qba1NoONBYEBlu&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1aiiUpKOeZTJDhDgyFbnoLNFxu8CnPYZ4&sz=w1000",
      "https://drive.google.com/thumbnail?id=17p9i5GT3YRTtAzDB2whfL6GOSBAs5vSp&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1sbPV7FP-_Qh8NFFXZPFrKEeVP4hZ4Wpt&sz=w1000",
      "https://drive.google.com/thumbnail?id=1q8XjWsHgPZ45weH7BCdsZL_OuGvc1BvD&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=15QwAB6-L0SKLbVzNet284Ut7es_SKQFJ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Yw1BhNa_4nIOJOowkAwf99QUxBBFW0VD&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1_TDzlCDIGdgAihq8eMeuK7cFTYsYTAYm&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1n4XcPQCqxGRb5oqQFsi6ssQppDKiLAoq&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1sgfC_cQ9AlxWbaWlBZvQRtehuOEtuuhk&sz=w1000",
      "https://drive.google.com/thumbnail?id=1O56GGydOZan-ujBnf3ryH-Mpz0bHkgtg&sz=w1000",
      "https://drive.google.com/thumbnail?id=1AyJ1WqRnknbfyLYm9TTqGHC7zuR-BuNR&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=15iTI94CPFTvNCEQWv-7vzESOQfZ9_jvX&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1plQQ0qFR3kgacxCG9-nYZ6c_jDAtm__w&sz=w1000",
      "https://drive.google.com/thumbnail?id=1vGrTgrK2ivXzlZ-04uwZYCbZoobGoV1J&sz=w1000",
      "https://drive.google.com/thumbnail?id=1b9qZaA1UQAPahKYEn7oeU9vhPZEVP3G_&sz=w1000",
      "https://drive.google.com/thumbnail?id=1bW6EoPy1ji8jsswVntvg46bjV6w0kRKP&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1ykk88rIw9PyFgufUIL2tMNbspAeBElo-&sz=w1000",
      "https://drive.google.com/thumbnail?id=1xDaQZsZZ_FxviUMolLT2cRaGhRe0YAXQ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1fj7wTbucRynh_05K6WuUfYonvnI4rlFm&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1S1xPWuk4nFcqEAS8FxwlWNQW8x0Wb1G3&sz=w1000",
      "https://drive.google.com/thumbnail?id=1A5KWOfO2NOt3jq_DmV0cWbqKHU-O8Zo7&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1Z7ir4aPoqA9LuUcDdCuxiZruKs8EUBFy&sz=w1000",
      "https://drive.google.com/thumbnail?id=1bDABUtstzZGmsrj6KyQqCN0RD1Y8sQpJ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Ov6Nc67yzzp544gY3aJOp7vKhYx4k5E6&sz=w1000",
      "https://drive.google.com/thumbnail?id=1GSUFOPH_EnVdv7nEpgP3xD4SEogPBdew&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1S6L4HoVdOl317IL_b8fK55Q24hte9jgc&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1xpBAIA2sxSRfDzgseyixn3QwqwX4pYGD&sz=w1000",
      "https://drive.google.com/thumbnail?id=1nkR8khbiYBZKT00XHSROz2JDI53HWETy&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1nPr3laCXzQtDy_Jmn-PAgd_zwP4QgcHi&sz=w1000",
      "https://drive.google.com/thumbnail?id=1ZNiWwi4Wge7gVMTgK6KumxfSPtz_cgAa&sz=w1000",
      "https://drive.google.com/thumbnail?id=1krs1zWStFTyqMGBojGPbKbmDyow9QIRf&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1YGRG1xuwbpsT4l4SPLaCTJ-cjhUs13oN&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1cRVvOC2_oTnFOqC-be63-YX0r7juLUxn&sz=w1000",
      "https://drive.google.com/thumbnail?id=1EPfgRBcmMUqDtucKHkVuGpZUdcJZmnmu&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1uuBYw9wRMSBJ1XOPZ44EYH1ichwZfd1N&sz=w1000",
      "https://drive.google.com/thumbnail?id=1YFvoU5zPwuOVXr5Hj14-jnWq1CEViUZC&sz=w1000",
      "https://drive.google.com/thumbnail?id=1r12a4tWp3An2jfl7aDuniPsBP6_7DgrA&sz=w1000",
      "https://drive.google.com/thumbnail?id=1SS0a64p_RLRjIC0ocP3DcamnqNfVfa78&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1j7fYV4QtgcZPHyo0kBUUnRLYrwML36GQ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1vAs2zl3i9Kjgwp7V4P0CwAZeQY28LPph&sz=w1000",
      "https://drive.google.com/thumbnail?id=18YJ_fDrXQb-9-_zsGLGl0KNIgNV8d0Th&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1j7fYV4QtgcZPHyo0kBUUnRLYrwML36GQ&sz=w1000",
      "https://drive.google.com/thumbnail?id=18YJ_fDrXQb-9-_zsGLGl0KNIgNV8d0Th&sz=w1000",
      "https://drive.google.com/thumbnail?id=1vAs2zl3i9Kjgwp7V4P0CwAZeQY28LPph&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1_LW7zOCyQzK4JUP2XSjbiIP6yyYTgl9W&sz=w1000",
      "https://drive.google.com/thumbnail?id=1tNTnywJcOn67_5ztIQztDeCXBlm0hA9m&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Bc5ypusU2TkWlUTbayuWLNI0DnWCJK5r&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1FMBhR-AH_VGskMAycUNTaM-URMpBUCV7&sz=w1000",
      "https://drive.google.com/thumbnail?id=1oNDWUFu4x7UcwWD7if__aPXxLC3dQs_r&sz=w1000",
      "https://drive.google.com/thumbnail?id=1uqnrLR3LPo3bAPhAHF53-Mkxi-9DAcb-&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1xMAx9NIpuX8te6zGgXZ_dtY_g73NpPCD&sz=w1000",
      "https://drive.google.com/thumbnail?id=1gswIvHpCASZdy9VnFopCrgXSfdQ0CXvE&sz=w1000",
      "https://drive.google.com/thumbnail?id=1P_ISxn_uagXNFWZT3n9cTjTKyzJ4xLBq&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=17nvzbc2amoc2m3H-HeettfgTkEDg0mwT&sz=w1000",
      "https://drive.google.com/thumbnail?id=1bemYj7hPhT1jJGmBrA-2IHV-1-8ybi-W&sz=w1000",
      "https://drive.google.com/thumbnail?id=1JUiceuFDebm1xKQ5PpEfJWOUiscb3Tgv&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1qa42QKdeuXnPe1gzs5_1_p1o5Vw0gfrv&sz=w1000",
      "https://drive.google.com/thumbnail?id=1royrowBKc4Fl1ICFnxSIPCkQFScn8S7t&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Pcantzs5XIFHkbxUyQ1u70p63wIJgsP1&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=16Qa5eY20Af8UkFYf4-oJywRSDWv2z7BI&sz=w1000",
      "https://drive.google.com/thumbnail?id=1K26T1sFsjr24YEncSVTuoKcJHxZR2M9v&sz=w1000",
      "https://drive.google.com/thumbnail?id=1AbzrsQGJMc2vrLEZyJlQL4BvKZS0FkZ9&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1gLAv-J2RAs3gqstcTP0N394yZC_tmoWb&sz=w1000",
      "https://drive.google.com/thumbnail?id=1-zrEnBYWAcjgK0RGjENd7-xgTifZbSOT&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Cc1xo1OWvyMopbYXep9S0_2oLY8U0IAn&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=14RyH28VRa3KugfSxfIFbx_XrHk7aUX1R&sz=w1000",
      "https://drive.google.com/thumbnail?id=1b4yzEt8Sa8ejSQ3ennnnDV6aAZoY082p&sz=w1000",
      "https://drive.google.com/thumbnail?id=13_vop-QkzHdwsX7Bc-TRPEFVAjaIceVc&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=17b6YWzUoS__9pWrjr2WzIddwRd5aca2Z&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1_IzNfUbbNys0Iabv7yooU-0w6qLlSL4h&sz=w1000",
      "https://drive.google.com/thumbnail?id=1TJqYkCnbQ76-TP7OY_rqLCeLA2BCyV61&sz=w1000",
      "https://drive.google.com/thumbnail?id=1EoeJewEYuV4L7Fwq_VSEaqDFk3qtxPXM&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1rSN88tBcr7sdrStdizIHCnc89E7bYJ9j&sz=w1000",
      "https://drive.google.com/thumbnail?id=1-VvDAleQJr19IXlpdat_FWcYTBgw2ULm&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1fGGkevOKsKfaRWKjTN04Jcw4XtciU26V&sz=w1000",
      "https://drive.google.com/thumbnail?id=1A0FSScnVWxfVihbE5HB2Ryo7riLw3lg2&sz=w1000",
      "https://drive.google.com/thumbnail?id=17dW8Tw4KZ8Aqn0JmFsrQ0OTHyJ11qPFI&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1v2tJQui-vHIJ3QimiI7sud6_vvZxH1su&sz=w1000",
      "https://drive.google.com/thumbnail?id=1koIWqChRWHI-37fUU61dCW1Tn7eEAaxl&sz=w1000",
      "https://drive.google.com/thumbnail?id=1KRZiljGVMzSgt6qCMESnoNzVdIgvKyeU&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1J1aQUIr1sY9ZDwvPC2pZMte8ilWjw-sh&sz=w1000",
      "https://drive.google.com/thumbnail?id=1gWSL1YhioVU8DQ5GxzoPR_ynb0Tk4LwT&sz=w1000",
      "https://drive.google.com/thumbnail?id=1S-18BugWdoBCJCC-10ArWCcXneekrcVj&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1DAJrA8rmSJ1rzDoD4uDoiRMwKWf7-L_q&sz=w1000",
      "https://drive.google.com/thumbnail?id=1ewGe82ML4whdaNz2BUAx7LgNza6ZHL1D&sz=w1000",
      "https://drive.google.com/thumbnail?id=1hN11uWvilBWExKuJv0V14rFL9CdC4kOT&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1UyzS1NLabthb8niGyGSj11zj3XlGwr09&sz=w1000",
      "https://drive.google.com/thumbnail?id=1iQkPKZ7j5_LJQuLk6HlUY-pvRSj0g2j8&sz=w1000",
      "https://drive.google.com/thumbnail?id=1pUA3msJ_zm3Ajr_ItoLG9cmNHb2ccXPF&sz=w1000",
      "https://drive.google.com/thumbnail?id=1gwhMbfRoP6k5PJ9GUpKrbjMYJ0KmnFf2&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1Dm4Hx-D-fqB8AAV_cNWL91mMVcENvt1H&sz=w1000",
      "https://drive.google.com/thumbnail?id=1faBOFLs_S1bVbgImnDOBARkJGut3XIJC&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=14c4Nu2govL3vxB4igug825HG0ewXLYwP&sz=w1000",
      "https://drive.google.com/thumbnail?id=16iTL_6SrPumnzBT9bDddFgoAgd1yogum&sz=w1000",
      "https://drive.google.com/thumbnail?id=1_n9FtJruUINKixNVcmz11TWnzm3IS-O5&sz=w1000",
      "https://drive.google.com/thumbnail?id=1I7f7CgQmiVh6g216tOLaISUMmat5Nw0y&sz=w1000",
      "https://drive.google.com/thumbnail?id=1v6aod-vRGFj_oOWOPxbaP0REzS8OQD0L&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1Y349i4deZre5-bAAZWZus7vfJHuFA2l3&sz=w1000",
      "https://drive.google.com/thumbnail?id=18bESnzFtYXJG2h0KKffNJFBH4oaE8zTe&sz=w1000",
      "https://drive.google.com/thumbnail?id=1uS6NvNVPkVmSb-mUeJeSetzofVp3wdw6&sz=w1000",
      "https://drive.google.com/thumbnail?id=1AgB02kXMTy3TaQnwyLA3uuiJOCsPwb4p&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1hKEmSuOhe7zefBP7xVaHMiUSgbTiTfnQ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Pqy4KZHkT7tSNLK83d7s5y8tQTR4Qvw_&sz=w1000",
      "https://drive.google.com/thumbnail?id=1TOgWOZZ1whiG7lNOVbDg1DwSZtMWbCoP&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1hKEmSuOhe7zefBP7xVaHMiUSgbTiTfnQ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Pqy4KZHkT7tSNLK83d7s5y8tQTR4Qvw_&sz=w1000",
      "https://drive.google.com/thumbnail?id=1TOgWOZZ1whiG7lNOVbDg1DwSZtMWbCoP&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1Y4O45U5XC8aacSGtlAUgdVVN8B7bbute&sz=w1000",
      "https://drive.google.com/thumbnail?id=1d0h5GZf864OOPqeNFfOnxvit-KpsK6sd&sz=w1000",
      "https://drive.google.com/thumbnail?id=16PebXk3_ZM1HXpqtb3EFqyD3AEDnHO8X&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1eB0GCmnSDQzoT6m-oBGnD-yU2ty8rBSe&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1r9Sj6tXzl8TAh0TwN8b9IqMYoeAAs9Yi&sz=w1000",
      "https://drive.google.com/thumbnail?id=14C9tGMuiR8xCmg_otmAdUU46iWk8_tW1&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1yNc9AhNA6GNcGIyzwr8KtgfTIVADobCr&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1Oje0_3x0UOPwE3xVUVtO1MPm5huwWxPC&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Mecfeg_ArbHS-C8yh2u-C-8ixFb26O7a&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1MkhxGVhM3IITjld20-EtZTWKnjZfZqRs&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1rirTMOOcemAltrYODF3fi4O16ClzUXIH&sz=w1000",
      "https://drive.google.com/thumbnail?id=1pWtKXmki5ipagygA6MzdWimBaphblmel&sz=w1000",
      "https://drive.google.com/thumbnail?id=1309cyrEoRhmpFlqdhl3ZEmYfxiXNd_tA&sz=w1000",
      "https://drive.google.com/thumbnail?id=1vjYGJl-gpcnjyBstPj1_VJzwCieiTpZH&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=11nU58OLlfcKIPQkuIDqQZJt6bEOXLwvp&sz=w1000",
      "https://drive.google.com/thumbnail?id=1XdTRPzRZakYxiqT932F4IQkFYWYHZehK&sz=w1000",
      "https://drive.google.com/thumbnail?id=1koArPvF8qmXWRq-kwIcxCB3a9wV7yk1z&sz=w1000",
      "https://drive.google.com/thumbnail?id=1P5RyOvgRsoWUEZP7ylcn1P6yFmMR8BhF&sz=w1000",
      "https://drive.google.com/thumbnail?id=1A08euRJTXi7tAmEuCNXRJjKvdGv0wvqC&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1c2ObkafXmNV521JAPVJZLddbvhp8W0kU&sz=w1000",
      "https://drive.google.com/thumbnail?id=1WSxm_aCR09JdB44oxhmXoBsO0v1DrIwr&sz=w1000",
      "https://drive.google.com/thumbnail?id=1w4FKF6fyFrHlVhMnzrnRmCbPg2z5TqZh&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1c2ObkafXmNV521JAPVJZLddbvhp8W0kU&sz=w1000",
      "https://drive.google.com/thumbnail?id=1WSxm_aCR09JdB44oxhmXoBsO0v1DrIwr&sz=w1000",
      "https://drive.google.com/thumbnail?id=1w4FKF6fyFrHlVhMnzrnRmCbPg2z5TqZh&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1Yx19IRL0RDd11RuYi4L5IiNKmi-Em1jM&sz=w1000",
      "https://drive.google.com/thumbnail?id=1LCtgRELlrBYBGJlyI9H9f5HOTAkv6en5&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1mRV39tajzd1uo1qIP5gkHBa55Mov6xeB&sz=w1000",
      "https://drive.google.com/thumbnail?id=10mglyVzVMPvkM1u8N58D9Vad7h_teDTt&sz=w1000",
      "https://drive.google.com/thumbnail?id=1vzQStnJZ3XMAfnwvYiobVNB1tw68ybCA&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1biQMMMFlH0zLX4hbhv1IURrfLVEaiLBh&sz=w1000",
      "https://drive.google.com/thumbnail?id=1OoakBHP_-nWyEATId1jgzWEvyRzs-zTd&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1B9W_DHD3tUUqq_WzM3EFFcbAeLeNb42k&sz=w1000",
      "https://drive.google.com/thumbnail?id=120J8k67CU0PFTbLZ5yL2m0WedwNe3kN6&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1UJR7jGGCdva5JBGV1KaOZU56DQGc_cLA&sz=w1000",
      "https://drive.google.com/thumbnail?id=1B9W_DHD3tUUqq_WzM3EFFcbAeLeNb42k&sz=w1000",
      "https://drive.google.com/thumbnail?id=120J8k67CU0PFTbLZ5yL2m0WedwNe3kN6&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=120J8k67CU0PFTbLZ5yL2m0WedwNe3kN6&sz=w1000",
      "https://drive.google.com/thumbnail?id=1UJR7jGGCdva5JBGV1KaOZU56DQGc_cLA&sz=w1000",
      "https://drive.google.com/thumbnail?id=120J8k67CU0PFTbLZ5yL2m0WedwNe3kN6&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1Qf9AmgKbFIK3KEZ3OnG_eviEJ9erBW2h&sz=w1000",
      "https://drive.google.com/thumbnail?id=18XINO7n6ioXCkvNSP1mHXBDOYko3Rg8y&sz=w1000",
      "https://drive.google.com/thumbnail?id=19dLjILFodQsreoFjQ2XyUhE0_x4KZNld&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1odMId5w9La0NSHfwKP6gk2eap3X-8sVd&sz=w1000",
      "https://drive.google.com/thumbnail?id=1gZeT-92WGOVdaZ9fibuAI5AodR2kzlv6&sz=w1000",
      "https://drive.google.com/thumbnail?id=1LsM9Rh1rAFWzAFW4C74EnmnE2mZzs6qk&sz=w1000",
      "https://drive.google.com/thumbnail?id=1twvLrP7YT5A5tA7wGRXYPHUFwR0OTet_&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1Kb9PEQGk5h8yFZ9sKD8L9UcNuLOiNmph&sz=w1000",
      "https://drive.google.com/thumbnail?id=1WtgfJDmDlbRTBJNR73TmZeWXnNqg6_43&sz=w1000",
      "https://drive.google.com/thumbnail?id=1TriVAxgFexlY6Es0gKI2hvBtcMJ9fxIJ&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1uIZpWcPnIpj9qbHloYVeY7GSJAbdo31C&sz=w1000",
      "https://drive.google.com/thumbnail?id=1fU9uWd853Pv4ZEg7vqCRom384V2X7TBE&sz=w1000",
      "https://drive.google.com/thumbnail?id=1uBQq9tTJlHc8AXqSr3I5pD5R-1MExQgY&sz=w1000",
      "https://drive.google.com/thumbnail?id=1xXKY3oGvfv_ED5sFmpvBBMLAYxp4rdMl&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1mIUKd9wDpYvzLry7pgWvr8jN1Wi_Uzsg&sz=w1000",
      "https://drive.google.com/thumbnail?id=1UFIp767lWzy8rG760Xve-Q9ZsGxx16fa&sz=w1000",
      "https://drive.google.com/thumbnail?id=1GsiPvknGn6I85IiRyWT0QO5qoddlN31i&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Af1-PsHC0M2hl1MWY0TSRhW7J9u53bC-&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1mIUKd9wDpYvzLry7pgWvr8jN1Wi_Uzsg&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Af1-PsHC0M2hl1MWY0TSRhW7J9u53bC-&sz=w1000",
      "https://drive.google.com/thumbnail?id=1GsiPvknGn6I85IiRyWT0QO5qoddlN31i&sz=w1000",
      "https://drive.google.com/thumbnail?id=1UFIp767lWzy8rG760Xve-Q9ZsGxx16fa&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=15OS3X9PGziVsFkdtNYLBF3gaGPUTQsJ2&sz=w1000",
      "https://drive.google.com/thumbnail?id=1WnZj7wyYVXASZePTo86gfrY38C4eTjGx&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1iJYMdKv2-yFkDwgfQyc4ahVDydHygwlu&sz=w1000",
      "https://drive.google.com/thumbnail?id=19kFMXubuOaxjG_jdxEc6cJ0MqirrX9vl&sz=w1000",
      "https://drive.google.com/thumbnail?id=1o7WDuBBSF7gqJdxdgxEjRJfK8zPUMNF-&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1qd2u2qxoRghPUNr2_xhyBMrZZcnIScAr&sz=w1000",
      "https://drive.google.com/thumbnail?id=1pIpurKhKisnDufj7chHkcNHCcIX9C2T6&sz=w1000",
      "https://drive.google.com/thumbnail?id=18b7kjUXrMK_C9RPkynuMzIqePMcm-rJp&sz=w1000",
      "https://drive.google.com/thumbnail?id=1yTHaysFAhaBy0y1BIxhAq4YobC4Jap8B&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1Tu8hOiJRg-EnBh_1Bdg-tM5QvSYvi9H8&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1LrW8BupnDgzIsDYrkv5oyTp6b8EeVNuX&sz=w1000",
      "https://drive.google.com/thumbnail?id=1lcVNTwI3f00zBZUTh_dY6xqjXfJG_55p&sz=w1000",
      "https://drive.google.com/thumbnail?id=1X3K1-OdyXg0dTuULGq1xrOHp03WQZaon&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1Xbc-TG0Vdq0VOrVTMAQjkZ_HZOfVRJHm&sz=w1000",
      "https://drive.google.com/thumbnail?id=1NroeUSU9xyeDYr2n9hJC3eElcaOfBFx9&sz=w1000",
      "https://drive.google.com/thumbnail?id=1kqP9tiuyYKL693RnLk6g20kyHAZa9j5J&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1QmDBJhSx8JhGqr19F4WSy1gc-8nWrVUE&sz=w1000",
      "https://drive.google.com/thumbnail?id=1OzcQ89R1mK_7kNfmbX_nOXAbXOzzpRpG&sz=w1000",
      "https://drive.google.com/thumbnail?id=1tEMg0qmZ7CfaT8SLpoVM5j_NNQfztru1&sz=w1000",
      "https://drive.google.com/thumbnail?id=1On1OAaKwSjt73-dN9aV3MM8OvC6tqTqd&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1DGtVivQAaDaLEuZgZW6Q1BQ0o82gpM_h&sz=w1000",
      "https://drive.google.com/thumbnail?id=1mK1ReVAoiqEc2KT1Uy8brUYiWY8BuGDS&sz=w1000",
      "https://drive.google.com/thumbnail?id=15afYJSRF_oVXLUQSkjwI0mrlRF7Brx70&sz=w1000",
      "https://drive.google.com/thumbnail?id=11c1L6S12FHJ5VCaY_2_dUy_kh1lSwXgR&sz=w1000",
      "https://drive.google.com/thumbnail?id=1R2ejvunIe79lkRN8pEdhrVCzXqlOhDdu&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1Gg5SMe6RZz1ID02qTVhpp5QEV2Xziy6i&sz=w1000",
      "https://drive.google.com/thumbnail?id=1FLS4D4XGmApLp0TfiIMZsKnvzCavdeW0&sz=w1000",
      "https://drive.google.com/thumbnail?id=1zPAXYPeCQj7Dxi0IomRPfHyVB3aACtYn&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=19Xf8S5LbZOYoewhaWo9NtKsdynlaztHk&sz=w1000",
      "https://drive.google.com/thumbnail?id=1lnVa1ZVCoYQhSx_Ne-U9i9kk9fnbCLA0&sz=w1000",
      "https://drive.google.com/thumbnail?id=1rla-SIcwKg_U2fCJO_yuUUAQWwxiuHwI&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1ADrCG8xTUjx297Z1VkLgwuWmtgaaijM3&sz=w1000",
      "https://drive.google.com/thumbnail?id=18a-xynn67DdTEQtPmK_qy7zF8JA34-zS&sz=w1000",
      "https://drive.google.com/thumbnail?id=19Ru34R5OY7FixN29BGzpEczSdXqiG8fE&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1bbXOF_POFiqiMX6tNiqxeHYCfoXJpj1B&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=11neHAZ5FyENTbzZvaEMDENyQ6Uv81Wku&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1yriRbiGVAVZdwo4PaoQ9IBaUiLYfUxSn&sz=w1000",
      "https://drive.google.com/thumbnail?id=12lQuZJo_9IREwYK1PkiAyuXQ9WCprPaB&sz=w1000",
      "https://drive.google.com/thumbnail?id=1kA9GeU47S5ANyaeu1T8e7r2ALyLcUz1x&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=19Ru34R5OY7FixN29BGzpEczSdXqiG8fE&sz=w1000",
      "https://drive.google.com/thumbnail?id=1ADrCG8xTUjx297Z1VkLgwuWmtgaaijM3&sz=w1000",
      "https://drive.google.com/thumbnail?id=18a-xynn67DdTEQtPmK_qy7zF8JA34-zS&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1Uz2iVZ4gPG7PXsbhLct_dawE_TYZqpnR&sz=w1000",
      "https://drive.google.com/thumbnail?id=18LJRO5y793lTlGJnZiVITtvtbxGc4o40&sz=w1000",
      "https://drive.google.com/thumbnail?id=1-bIrEw_OKfZudwfi2BfiEC0WaRS6t2a8&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1cquhOKZ0mILtgdXTmVXrOE_MOS7nPbgP&sz=w1000",
      "https://drive.google.com/thumbnail?id=1aWra9Ajph6J3Vn4k_0iO-EUS7vKHVz2M&sz=w1000",
      "https://drive.google.com/thumbnail?id=1tT6ZqDKjLJ0oi4Bj32HiVj5hLXeSE-ff&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1_CIl33uDGI2ZNF0lP3k6kz_hQSaEP21j&sz=w1000",
      "https://drive.google.com/thumbnail?id=1iQH1AeCC0AlTEDygB7h9ww-yb1mHh0g0&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1GzGeA-1kCSLiugiE8TcQznmkR_dM-4zr&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1AlaEn3tS016xCp4pdW7edlr_BxLVqBvZ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1R-AtruSXSeEkC4C6nqoyDpIfp96eOQbH&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1e0yUd8mcEU4jMpj8QoHW8um1swiXeyzc&sz=w1000",
      "https://drive.google.com/thumbnail?id=1TVtbO5GMjHnDeADyf2wre3750I6htBYw&sz=w1000",
      "https://drive.google.com/thumbnail?id=1NV3MtvXjDb4nVgXCX_WFvPkKLYeCBRu2&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1Eb7Y-AcaudnqwBYPhAoUGsupocotgCTl&sz=w1000",
      "https://drive.google.com/thumbnail?id=1-sXhLXzZvzEM4Fwn-MAzh4FiH9EEtVLu&sz=w1000",
      "https://drive.google.com/thumbnail?id=1e9_3CD4LTPOPrBqmsEXJOy1wMtkdzpyo&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1WLt8h_27y-w1kl8ELOi75StpzwfmJBHx&sz=w1000",
      "https://drive.google.com/thumbnail?id=1TyxtoC5nOx2mXGhrmDZj_M6ZT4_Glx-2&sz=w1000",
      "https://drive.google.com/thumbnail?id=1G42u4_Xy_ThgYEVQxs8v63oeOlI-VN6z&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1Y2-3Seh4VOaNRmps4f4E2b8ig8cG8yck&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Bla-1QnV-ZIP4gA4qR-f-9Aw-H2Pb4jC&sz=w1000",
      "https://drive.google.com/thumbnail?id=1UDIl7qyoCPOYFghZN1xEShTEyxJmehJ2&sz=w1000",
      "https://drive.google.com/thumbnail?id=1U4TcSWdzR8kR8BZADYcF2XhDTsSZq4Pm&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1qB1sqd4o-vtKnPj5m-BniDKI72FNee_e&sz=w1000",
      "https://drive.google.com/thumbnail?id=1EFsxm-r8jXw2Cya7F8QyDtbvM-aAogBq&sz=w1000",
      "https://drive.google.com/thumbnail?id=1hQVoM5dMCtTKkOe8depDSlUNkiCTq0z6&sz=w1000",
      "https://drive.google.com/thumbnail?id=1P979_9l6AIkpLy-4pXbvIs4ORJADrNqy&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1WtLNJ9t32iBV-ZZHyGTd4OgGQqAFVoTH&sz=w1000",
      "https://drive.google.com/thumbnail?id=1MtUrG9E9StKk-Vt_jEFpK8tyi0pHf4cK&sz=w1000",
      "https://drive.google.com/thumbnail?id=1J4cyjRbuJPhIu5wCUKGDqyZ0586BWXrT&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1W_IOxbRrn-xnyT-Oj4L43VvXMO0YM3WC&sz=w1000",
      "https://drive.google.com/thumbnail?id=1b2nxcBbZiku9vEY1sXaCy7FpS2W796_N&sz=w1000",
      "https://drive.google.com/thumbnail?id=16OHgDuK5ZU1d_1P4XyUplxlZ-Tb8JyVJ&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=146l1JWII9JqOfn4beKiiNtRfbAav4OxA&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Wo3gi87ytXqmhq_-VfPgEkhr46RCItCu&sz=w1000",
      "https://drive.google.com/thumbnail?id=1IyxjaH6Ti5MYRXtBTModf1AwjaROTpAi&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1KcykH00A_0VjsbtIPSC1YfV56lyVo82O&sz=w1000",
      "https://drive.google.com/thumbnail?id=1dsIY_NdE_FHgiembQhCZ02JhXe-aU6b-&sz=w1000",
      "https://drive.google.com/thumbnail?id=1hUA76aoawd_cBWdP3__HvKcGbIeeN4IY&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1nxbpJ0_gsz4Sb9Au7OwWxJG75LxFmUAD&sz=w1000",
      "https://drive.google.com/thumbnail?id=1TweCJiD2g-B6Yk8fjI-jP7R5O0HdH-H7&sz=w1000",
      "https://drive.google.com/thumbnail?id=1olCj1iA5tqpxoOGEhT483llgoOUYuWtB&sz=w1000",
      "https://drive.google.com/thumbnail?id=1nEBLi4ffdGiwkxAB3yIkZa5lpnvEH80s&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1qCbGI4vY-l1FyxQ0Lvw-ltcmx19lcpVV&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Yw6xeweadCLN_TRuae4f2pGsriWqxzBx&sz=w1000",
      "https://drive.google.com/thumbnail?id=1tcHJd9VKLGU5LydUr185pv_eMTbNhCE-&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1pdMhk9ws3Y8KdE5dcKIydvTVHMbpLQq8&sz=w1000",
      "https://drive.google.com/thumbnail?id=1iPlu5awSZZue4IGcc28boctMMeqeVWUv&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1npXp71aoVlnsz1UIqotFLyMhtha59pNS&sz=w1000",
      "https://drive.google.com/thumbnail?id=1fYL69Pa0ru8e7CkFkG8ijWgYNRbSD-5U&sz=w1000",
      "https://drive.google.com/thumbnail?id=1un43dCMlhBbGox9N9ZTDxfFVGq2Io-3Q&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=15sml8tTorrqH6KakgXpLlN5Oyg6jr8zp&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1U4AkP0cVeSQ0bZ4PiQ-CLSWBEzgD4WJb&sz=w1000",
      "https://drive.google.com/thumbnail?id=1SdL1DUETI7usLU1UaPXta-f81KlJ9ItC&sz=w1000",
      "https://drive.google.com/thumbnail?id=1ZcIhJT6ZMxJDKUUsfLeSR7v4eG7ushoD&sz=w1000",
      "https://drive.google.com/thumbnail?id=1GipBjwFxyKavmI-W5Ssyd2qO46MkVi4f&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=17BbxJ5UID1H3PEiUz8dih4FdfphvlUs9&sz=w1000",
      "https://drive.google.com/thumbnail?id=1wz1fGAGbLnQscipINA3wWwTgqYdDGxkF&sz=w1000",
      "https://drive.google.com/thumbnail?id=1XP6VdahYKgggqmrRx5PTE7ldLxm3KNDZ&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=19kjzmuKXr6k2Ph5kj07oopwt9bbS_X9G&sz=w1000",
      "https://drive.google.com/thumbnail?id=1zIwRLG4LAAySI9VBP0g4QX9XTgSqpmxk&sz=w1000",
      "https://drive.google.com/thumbnail?id=1MeZCoGCNBqGnw8YrC_PUHbIEQmu09wl-&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1ogf76BT75CD6PtvRIg9XREieZWlr3TTD&sz=w1000",
      "https://drive.google.com/thumbnail?id=1asiCVAvEPX63fopyu4BG2LYzsf9VLBCg&sz=w1000",
      "https://drive.google.com/thumbnail?id=1orTcLfTpB4MDyEiaZtCsYRzzt0flDCnr&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1k19I4mD8_YG7dfO5r9DoWe1kYiEiyVDX&sz=w1000",
      "https://drive.google.com/thumbnail?id=14yWBHVa2KH1lNSy2QYDHofsaEOFO8WEJ&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1s-Axykt5uFr1V0XO9dl_6n8C64Tmmv8w&sz=w1000",
      "https://drive.google.com/thumbnail?id=105pEbOBWyNiJM1Fi8AggF_8-ujXcfcls&sz=w1000",
      "https://drive.google.com/thumbnail?id=1MNcWm4h1JV-whptud450VzHMTWAxxdd1&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1JMmVGz5Q_d7yu69Z4ZI7QVxdFDbRsoIX&sz=w1000",
      "https://drive.google.com/thumbnail?id=1y83Rjb7xinP99A_puq3ntrDJHpWEX1jf&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1ihfzrtREl5QyJfgNsorZcRLSDPkfvILP&sz=w1000",
      "https://drive.google.com/thumbnail?id=1JZ8Bzcf3KyJzYLxxyIMxsJt63OeoY4ha&sz=w1000",
      "https://drive.google.com/thumbnail?id=1J-ma4PIrbPDxPOsCl92UqFWs3hlOGRMm&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=10GowIUYEnTG2M4clCXT23rB_5cTdlbFv&sz=w1000",
      "https://drive.google.com/thumbnail?id=1MRStBM9W7sfrWiphyy72BswFUkY7eLO_&sz=w1000",
      "https://drive.google.com/thumbnail?id=1-MujwqzgRo7WTGqsmJaRDXYP_Qvw56Fc&sz=w1000",
      "https://drive.google.com/thumbnail?id=1vYWWUSlr10CduBBGA4-zgZO-Ij70uNcC&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=16T77X7TYISKxjskiLi3Iebp6P3t1YwJQ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1nZDi_W2Z6dXnUWVTVCb7BLj3VtX-vq4p&sz=w1000",
      "https://drive.google.com/thumbnail?id=1eSmbL8gNfpZ_WtOopJYY9OTEjIpmUUZi&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1tsDng2Ug3B54enhsJhgBnB3xEY6gc1sc&sz=w1000",
      "https://drive.google.com/thumbnail?id=1_gDYJtG83vm6f78WIxOqpc6L7glfKmD7&sz=w1000",
      "https://drive.google.com/thumbnail?id=1-E1ypdcQ7ta1iCeziAxZGEiXnKuRNupt&sz=w1000",
      "https://drive.google.com/thumbnail?id=1stSx-cCL76PTvjjFB-D2ISmPWnnv8jUi&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1-cGqA_Yrsrx47VVr8qf7bHibQ1L2_nP5&sz=w1000",
      "https://drive.google.com/thumbnail?id=1DchKFjVXLzoOj74SgltgwAwFptZcOyNq&sz=w1000",
      "https://drive.google.com/thumbnail?id=1D4duS_Hnqle1Nw6W7oWWax1DWxAq66Ud&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1c30QTibZvAis7fUAUL_beZ4m6Ga--hxV&sz=w1000",
      "https://drive.google.com/thumbnail?id=1s6qBaex4bmwX3h6JFSZqY8_nV7aCdVrw&sz=w1000",
      "https://drive.google.com/thumbnail?id=1DhZJ1HI8rSW7YwG_pDsZmaxe17jgQlZ-&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1eEP8t9gqhEr1Lv_gN_TsOaVtgYTsElpk&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1f9JVpo3j5TIQ0ro2VFYjrcrWcHuqs8MX&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1PSpNhzOxM0cPJ2PUG7NXwtESCTGlnb32&sz=w1000",
      "https://drive.google.com/thumbnail?id=1lfMFnLcWRRSTYRyO2XvLiMDXzfBPKonm&sz=w1000",
      "https://drive.google.com/thumbnail?id=14CoBj-jmvoBYKcgOY641ETAW47toPWwn&sz=w1000",
      "https://drive.google.com/thumbnail?id=1cTj0CHjX0jZFIzeskP-l3yhNa52hvwzS&sz=w1000",
      "https://drive.google.com/thumbnail?id=1kCrP8AVym3JuI1-A7wTap9Un4zGfekSw&sz=w1000",
      "https://drive.google.com/thumbnail?id=1HsOtdaEtNuBA_YOfAonw8XylwEuwASmI&sz=w1000",
      "https://drive.google.com/thumbnail?id=1CLMasaNz7T6lNPu2RtuctwmgoZjUbZqp&sz=w1000",
      "https://drive.google.com/thumbnail?id=1KnnXiFMQBWNQ5sbhoV7bUfLMvIGqXtjs&sz=w1000",
      "https://drive.google.com/thumbnail?id=1bMJWTUYYvqheD7CL2n-A918-abVjvq5D&sz=w1000",
      "https://drive.google.com/thumbnail?id=14XvFiPBJUy7x8jFL6VRZUWuk_fTYrUY6&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=11vmBkeo1KAASlgqtJiYc7DX2WRJr4XTi&sz=w1000",
      "https://drive.google.com/thumbnail?id=1DMz88BbpMZO4J_hS1K3V7FlyPHduER55&sz=w1000",
      "https://drive.google.com/thumbnail?id=1-EPpALesNOYcOAjzZkBsf4W2nNZX0c7i&sz=w1000",
      "https://drive.google.com/thumbnail?id=13TiyxN7vZXTOhzPt8SbJKHnebdvjOYv_&sz=w1000",
      "https://drive.google.com/thumbnail?id=1GmzDrdPoPv3ETaC0DS5CU-rCshKEhH-Z&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1MeQCdyvT70nJ_gBZ9dA5Ortwf95xVZ8Y&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=1nWk4vwpl25XosXlhCzXFnlwzpmNnJ64Q&sz=w1000",
      "https://drive.google.com/thumbnail?id=1W-czMuiaucT8Yw8lK6vTbsU8yHHrZfvH&sz=w1000",
      "https://drive.google.com/thumbnail?id=1abHxG0NbIpnAFmlvyXqaTYAQ84F_-OuL&sz=w1000"
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
      "https://drive.google.com/thumbnail?id=188J6WATb7t0Kl8dn9VF_gtP2-qWtiaLE&sz=w1000",
      "https://drive.google.com/thumbnail?id=1IjFzmWOFA_Ql6nZybULE9dlgpaVmIXjg&sz=w1000",
      "https://drive.google.com/thumbnail?id=1bdZTyJu1u_C-M3clTxXlFc8wfWK0y90T&sz=w1000"
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
