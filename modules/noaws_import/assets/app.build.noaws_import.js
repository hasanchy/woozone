/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/amz.utils.js":
/*!**************************!*\
  !*** ./src/amz.utils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WooZoneChunk: () => (/* binding */ WooZoneChunk),
/* harmony export */   WooZoneContentTrimmer: () => (/* binding */ WooZoneContentTrimmer),
/* harmony export */   WooZoneGetDomain: () => (/* binding */ WooZoneGetDomain),
/* harmony export */   WooZoneGetHostName: () => (/* binding */ WooZoneGetHostName),
/* harmony export */   WooZoneHumanFileSize: () => (/* binding */ WooZoneHumanFileSize),
/* harmony export */   WooZoneImportUrlGetDebugStep: () => (/* binding */ WooZoneImportUrlGetDebugStep),
/* harmony export */   WooZoneMakeID: () => (/* binding */ WooZoneMakeID),
/* harmony export */   WooZoneNoAWSCategs: () => (/* binding */ WooZoneNoAWSCategs),
/* harmony export */   WooZoneNoAWS_Country_List: () => (/* binding */ WooZoneNoAWS_Country_List),
/* harmony export */   WooZoneNoAWS_isset: () => (/* binding */ WooZoneNoAWS_isset),
/* harmony export */   WooZoneParser: () => (/* binding */ WooZoneParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var $ = jQuery;
function WooZoneNoAWSCategs(country) {
  /*
  //extract script, on amazon country homepage, like: https://www.amazon.nl or https://www.amazon.sg
  
  let country_select = document.querySelector(".nav-search-dropdown");
  let exportjson = {}
  for(let i=0; i<country_select.options.length;i++){
    let cc_value = country_select.options[i].value;
    cc_value = cc_value.replace("", "");
    cc_value = cc_value.replace("search-alias=", "");
    let cc_text = country_select.options[i].innerText;
    exportjson[cc_value] = cc_text;
  }
  console.log( JSON.stringify(exportjson) );
  */

  var data = {
    'com': {
      "aps": "All Departments",
      "arts-crafts-intl-ship": "Arts & Crafts",
      "automotive-intl-ship": "Automotive",
      "baby-products-intl-ship": "Baby",
      "beauty-intl-ship": "Beauty & Personal Care",
      "stripbooks-intl-ship": "Books",
      "computers-intl-ship": "Computers",
      "digital-music": "Digital Music",
      "electronics-intl-ship": "Electronics",
      "digital-text": "Kindle Store",
      "instant-video": "Prime Video",
      "fashion-womens-intl-ship": "Women's Fashion",
      "fashion-mens-intl-ship": "Men's Fashion",
      "fashion-girls-intl-ship": "Girls' Fashion",
      "fashion-boys-intl-ship": "Boys' Fashion",
      "deals-intl-ship": "Deals",
      "hpc-intl-ship": "Health & Household",
      "kitchen-intl-ship": "Home & Kitchen",
      "industrial-intl-ship": "Industrial & Scientific",
      "luggage-intl-ship": "Luggage",
      "movies-tv-intl-ship": "Movies & TV",
      "music-intl-ship": "Music, CDs & Vinyl",
      "pets-intl-ship": "Pet Supplies",
      "software-intl-ship": "Software",
      "sporting-intl-ship": "Sports & Outdoors",
      "tools-intl-ship": "Tools & Home Improvement",
      "toys-and-games-intl-ship": "Toys & Games",
      "videogames-intl-ship": "Video Games"
    },
    'co.uk': {
      "aps": "All Departments",
      "alexa-skills": "Alexa Skills",
      "amazon-devices": "Amazon Devices",
      "amazon-global-store": "Amazon Global Store",
      "pantry": "Amazon Pantry",
      "warehouse-deals": "Amazon Warehouse Deals",
      "mobile-apps": "Apps & Games",
      "baby": "Baby",
      "beauty": "Beauty",
      "stripbooks": "Books",
      "automotive": "Car & Motorbike",
      "popular": "CDs & Vinyl",
      "classical": "Classical Music",
      "clothing": "Clothing",
      "computers": "Computers & Accessories",
      "digital-music": "Digital Music",
      "diy": "DIY & Tools",
      "dvd": "DVD & Blu-ray",
      "electronics": "Electronics & Photo",
      "fashion": "Fashion",
      "outdoor": "Garden & Outdoors",
      "gift-cards": "Gift Cards",
      "grocery": "Grocery",
      "handmade": "Handmade",
      "drugstore": "Health & Personal Care",
      "local-services": "Home & Business Services",
      "kitchen": "Home & Kitchen",
      "industrial": "Industrial & Scientific",
      "jewelry": "Jewellery",
      "digital-text": "Kindle Store",
      "appliances": "Large Appliances",
      "lighting": "Lighting",
      "luggage": "Luggage",
      "luxury-beauty": "Luxury Beauty",
      "mi": "Musical Instruments & DJ",
      "videogames": "PC & Video Games",
      "pets": "Pet Supplies",
      "instant-video": "Prime Video",
      "shoes": "Shoes & Bags",
      "software": "Software",
      "sports": "Sports & Outdoors",
      "office-products": "Stationery & Office Supplies",
      "toys": "Toys & Games",
      "vhs": "VHS",
      "watches": "Watches"
    },
    'de': {
      "aps": "Alle Kategorien",
      "alexa-skills": "Alexa Skills",
      "amazon-devices": "Amazon Geräte",
      "amazon-global-store": "Amazon Global Store",
      "pantry": "Amazon Pantry",
      "warehouse-deals": "Amazon Warehouse Deals",
      "mobile-apps": "Apps & Spiele",
      "automotive": "Auto & Motorrad",
      "baby": "Baby",
      "diy": "Baumarkt",
      "beauty": "Beauty",
      "clothing": "Bekleidung",
      "lighting": "Beleuchtung",
      "stripbooks": "Bücher",
      "english-books": "Bücher (Fremdsprachig)",
      "office-products": "Bürobedarf & Schreibwaren",
      "computers": "Computer & Zubehör",
      "drugstore": "Drogerie & Körperpflege",
      "dvd": "DVD & Blu-ray",
      "appliances": "Elektro-Großgeräte",
      "electronics": "Elektronik & Foto",
      "fashion": "Fashion",
      "videogames": "Games",
      "outdoor": "Garten",
      "gift-cards": "Geschenkgutscheine",
      "industrial": "Gewerbe, Industrie & Wissenschaft",
      "handmade": "Handmade",
      "pets": "Haustier",
      "photo": "Kamera & Foto",
      "digital-text": "Kindle-Shop",
      "classical": "Klassik",
      "luggage": "Koffer, Rucksäcke & Taschen",
      "kitchen": "Küche, Haushalt & Wohnen",
      "grocery": "Lebensmittel & Getränke",
      "luxury-beauty": "Luxury Beauty",
      "popular": "Musik-CDs & Vinyl",
      "digital-music": "Musik-Downloads",
      "mi": "Musikinstrumente & DJ-Equipment",
      "instant-video": "Prime Video",
      "jewelry": "Schmuck",
      "shoes": "Schuhe & Handtaschen",
      "software": "Software",
      "toys": "Spielzeug",
      "sports": "Sport & Freizeit",
      "watches": "Uhren",
      "magazines": "Zeitschriften"
    },
    'fr': {
      "aps": "Toutes nos catégories",
      "alexa-skills": "Alexa Skills",
      "warehouse-deals": "Amazon Offres Reconditionnées",
      "pantry": "Amazon Pantry",
      "pets": "Animalerie",
      "amazon-devices": "Appareils Amazon",
      "mobile-apps": "Applis & Jeux",
      "automotive": "Auto et Moto",
      "luggage": "Bagages",
      "beauty": "Beauté et Parfum",
      "luxury-beauty": "Beauté Prestige",
      "jewelry": "Bijoux",
      "gift-cards": "Boutique chèques-cadeaux",
      "digital-text": "Boutique Kindle",
      "diy": "Bricolage",
      "baby": "Bébés & Puériculture",
      "shoes": "Chaussures et Sacs",
      "kitchen": "Cuisine & Maison",
      "dvd": "DVD & Blu-ray",
      "grocery": "Epicerie",
      "office-products": "Fournitures de bureau",
      "appliances": "Gros électroménager",
      "handmade": "Handmade",
      "electronics": "High-Tech",
      "hpc": "Hygiène et Santé",
      "computers": "Informatique",
      "mi": "Instruments de musique & Sono",
      "garden": "Jardin",
      "toys": "Jeux et Jouets",
      "videogames": "Jeux vidéo",
      "english-books": "Livres anglais et étrangers",
      "stripbooks": "Livres en français",
      "software": "Logiciels",
      "lighting": "Luminaires et Eclairage",
      "fashion": "Mode",
      "watches": "Montres",
      "popular": "Musique : CD & Vinyles",
      "classical": "Musique classique",
      "industrial": "Secteur industriel & scientifique",
      "sports": "Sports et Loisirs",
      "digital-music": "Téléchargement de musique",
      "clothing": "Vêtements et accessoires"
    },
    'co.jp': {
      "aps": "すべてのカテゴリー",
      "amazon-devices": "Amazon デバイス",
      "digital-text": "Kindleストア ",
      "instant-video": "Prime Video",
      "alexa-skills": "Alexaスキル",
      "digital-music": "デジタルミュージック",
      "mobile-apps": "Android アプリ",
      "stripbooks": "本",
      "english-books": "洋書",
      "popular": "ミュージック",
      "classical": "クラシック",
      "dvd": "DVD",
      "videogames": "TVゲーム",
      "software": "PCソフト",
      "computers": "パソコン・周辺機器",
      "electronics": "家電&カメラ",
      "office-products": "文房具・オフィス用品",
      "kitchen": "ホーム&キッチン",
      "pets": "ペット用品",
      "hpc": "ドラッグストア",
      "beauty": "ビューティー",
      "luxury-beauty": "ラグジュアリービューティー",
      "food-beverage": "食品・飲料・お酒",
      "baby": "ベビー&マタニティ",
      "fashion": "ファッション",
      "fashion-womens": "   レディース",
      "fashion-mens": "   メンズ",
      "fashion-baby-kids": "   キッズ＆ベビー",
      "apparel": "服＆ファッション小物",
      "shoes": "シューズ＆バッグ",
      "watch": "腕時計",
      "jewelry": "ジュエリー",
      "toys": "おもちゃ",
      "hobby": "ホビー",
      "mi": "楽器",
      "sporting": "スポーツ&アウトドア",
      "automotive": "車＆バイク",
      "diy": "DIY・工具・ガーデン",
      "appliances": "大型家電",
      "financial": "クレジットカード",
      "gift-cards": "ギフト券",
      "industrial": "産業・研究開発用品",
      "pantry": "Amazonパントリー",
      "warehouse-deals": "Amazonアウトレット"
    },
    'ca': {
      "aps": "All Departments",
      "alexa-skills": "Alexa Skills",
      "amazon-devices": "Amazon Devices",
      "warehouse-deals": "Amazon Warehouse Deals",
      "mobile-apps": "Apps & Games",
      "automotive": "Automotive",
      "baby": "Baby",
      "beauty": "Beauty",
      "stripbooks": "Books",
      "apparel": "Clothing & Accessories",
      "electronics": "Electronics",
      "gift-cards": "Gift Cards",
      "grocery": "Grocery",
      "handmade": "Handmade",
      "hpc": "Health & Personal Care",
      "kitchen": "Home & Kitchen",
      "industrial": "Industrial & Scientific",
      "jewelry": "Jewelry",
      "digital-text": "Kindle Store",
      "french-books": "Livres en français",
      "luggage": "Luggage & Bags",
      "luxury-beauty": "Luxury Beauty",
      "dvd": "Movies & TV",
      "popular": "Music",
      "mi": "Musical Instruments, Stage & Studio",
      "office-products": "Office Products",
      "lawngarden": "Patio, Lawn & Garden",
      "pets": "Pet Supplies",
      "shoes": "Shoes & Handbags",
      "software": "Software",
      "sporting": "Sports & Outdoors",
      "tools": "Tools & Home Improvement",
      "toys": "Toys & Games",
      "videogames": "Video Games",
      "watches": "Watches"
    },
    'cn': {
      "aps": "全部分类",
      "amazon-devices": "亚马逊设备",
      "digital-text": "Kindle商店",
      "mobile-apps": "应用程序和游戏",
      "amazon-global-store": "亚马逊海外购",
      "stripbooks": "图书",
      "music": "音乐",
      "videogames": "游戏/娱乐",
      "video": "音像",
      "software": "软件",
      "audio-visual-education": "教育音像",
      "communications": "手机/通讯",
      "photo-video": "摄影/摄像",
      "electronics": "电子",
      "music-players": "数码影音",
      "computers": "电脑/IT",
      "office-products": "办公用品",
      "home-appliances": "小家电",
      "appliances": " 大家电 ",
      "audio-visual": " 电视/音响 ",
      "home": "家用",
      "home-substore": "家居",
      "kitchen": "厨具",
      "home-improvement": "家居装修",
      "pets": "宠物用品",
      "grocery": "食品",
      "wine": "酒",
      "beauty": "美容化妆",
      "hpc": "个护健康",
      "baby": "母婴用品",
      "toys-and-games": "玩具",
      "sporting": "运动户外休闲",
      "apparel": "服饰箱包",
      "shoes": "鞋靴",
      "watches": "钟表",
      "jewelry": "珠宝首饰",
      "automotive": "汽车用品",
      "mi": "乐器",
      "gift-cards": "礼品卡",
      "luxury-beauty": "LuxuryBeauty高端美妆店",
      "warehouse-deals": "Z实惠"
    },
    'in': {
      "aps": "All Categories",
      "alexa-skills": "Alexa Skills",
      "amazon-devices": "Amazon Devices",
      "fashion": "Amazon Fashion",
      "amazon-global-store": "Amazon Global Store",
      "pantry": "Amazon Pantry",
      "appliances": "Appliances",
      "mobile-apps": "Apps & Games",
      "baby": "Baby",
      "beauty": "Beauty",
      "stripbooks": "Books",
      "automotive": "Car & Motorbike",
      "apparel": "Clothing & Accessories",
      "collectibles": "Collectibles",
      "computers": "Computers & Accessories",
      "electronics": "Electronics",
      "furniture": "Furniture",
      "lawngarden": "Garden & Outdoors",
      "gift-cards": "Gift Cards",
      "grocery": "Grocery & Gourmet Foods",
      "hpc": "Health & Personal Care",
      "kitchen": "Home & Kitchen",
      "industrial": "Industrial & Scientific",
      "jewelry": "Jewellery",
      "digital-text": "Kindle Store",
      "luggage": "Luggage & Bags",
      "luxury-beauty": "Luxury Beauty",
      "dvd": "Movies & TV Shows",
      "popular": "Music",
      "mi": "Musical Instruments",
      "office-products": "Office Products",
      "pets": "Pet Supplies",
      "shoes": "Shoes & Handbags",
      "software": "Software",
      "sporting": "Sports, Fitness & Outdoors",
      "home-improvement": "Tools & Home Improvement",
      "toys": "Toys & Games",
      "videogames": "Video Games",
      "watches": "Watches"
    },
    'it': {
      "aps": "Tutte le categorie",
      "apparel": "Abbigliamento",
      "alexa-skills": "Alexa Skill",
      "grocery": "Alimentari e cura della casa",
      "pantry": "Amazon Pantry",
      "warehouse-deals": "Amazon Warehouse Deals",
      "mobile-apps": "App e Giochi",
      "automotive": "Auto e Moto",
      "beauty": "Bellezza",
      "gift-cards": "Buoni Regalo",
      "office-products": "Cancelleria e prodotti per ufficio",
      "kitchen": "Casa e cucina",
      "popular": "CD e Vinili ",
      "amazon-devices": "Dispositivi Amazon",
      "electronics": "Elettronica",
      "diy": "Fai da te",
      "dvd": "Film e TV",
      "garden": "Giardino e giardinaggio",
      "toys": "Giochi e giocattoli",
      "jewelry": "Gioielli",
      "appliances": "Grandi elettrodomestici",
      "handmade": "Handmade",
      "lighting": "Illuminazione",
      "industrial": "Industria e Scienza",
      "computers": "Informatica",
      "digital-text": "Kindle Store",
      "stripbooks": "Libri",
      "english-books": "Libri in altre lingue",
      "fashion": "Moda",
      "digital-music": "Musica Digitale",
      "watches": "Orologi",
      "baby": "Prima infanzia",
      "pets": "Prodotti per animali domestici",
      "hpc": "Salute e cura della persona",
      "shoes": "Scarpe e borse",
      "software": "Software",
      "sporting": "Sport e tempo libero",
      "mi": "Strumenti musicali e DJ",
      "luggage": "Valigeria",
      "videogames": "Videogiochi"
    },
    'es': {
      "aps": "Todos los departamentos",
      "alexa-skills": "Alexa Skills",
      "grocery": "Alimentación y bebidas",
      "pantry": "Amazon Pantry",
      "mobile-apps": "Appstore para Android",
      "baby": "Bebé",
      "beauty": "Belleza",
      "diy": "Bricolaje y herramientas",
      "gift-cards": "Cheques regalo",
      "automotive": "Coche y moto",
      "sporting": "Deportes y aire libre",
      "amazon-devices": "Dispositivos de Amazon",
      "electronics": "Electrónica",
      "luggage": "Equipaje",
      "appliances": "Grandes electrodomésticos",
      "handmade": "Handmade",
      "kitchen": "Hogar y cocina",
      "lighting": "Iluminación",
      "industrial": "Industria y ciencia",
      "computers": "Informática",
      "mi": "Instrumentos musicales",
      "lawngarden": "Jardín",
      "jewelry": "Joyería",
      "toys": "Juguetes y juegos",
      "stripbooks": "Libros",
      "english-books": "Libros en idiomas extranjeros",
      "fashion": "Moda",
      "digital-music": "Música Digital",
      "popular": "Música: CDs y vinilos",
      "office-products": "Oficina y papelería",
      "dvd": "Películas y TV",
      "pets": "Productos para mascotas",
      "warehouse-deals": "Productos Reacondicionados",
      "watches": "Relojes",
      "apparel": "Ropa y accesorios",
      "hpc": "Salud y cuidado personal",
      "software": "Software",
      "digital-text": "Tienda Kindle",
      "videogames": "Videojuegos",
      "shoes": "Zapatos y complementos"
    },
    'com.mx': {
      "aps": "Todos los departamentos",
      "alexa-skills": "Alexa Skills",
      "automotive": "Auto",
      "baby": "Bebé",
      "amazon-devices": "Dispositivos de Amazon",
      "electronics": "Electrónicos",
      "dvd": "Películas y Series de TV",
      "instant-video": "Prime Video",
      "digital-text": "Tienda Kindle",
      "fashion": "Ropa, Zapatos y Accesorios",
      "fashion-womens": "   Mujeres",
      "fashion-mens": "   Hombres",
      "fashion-girls": "   Niñas",
      "fashion-boys": "   Niños",
      "fashion-baby": "   Bebé",
      "grocery": "Alimentos y Bebidas",
      "sporting": "Deportes y Aire Libre",
      "hi": "Herramientas y Mejoras del Hogar",
      "kitchen": "Hogar y Cocina",
      "industrial": "Industria y ciencia",
      "mi": "Instrumentos musicales",
      "toys": "Juegos y juguetes",
      "stripbooks": "Libros",
      "pets": "Mascotas",
      "popular": "Música",
      "office-products": "Oficina y Papelería",
      "handmade": "Productos Handmade",
      "warehouse-deals": "Remates de Almacén",
      "hpc": "Salud, Belleza y Cuidado Personal",
      "software": "Software",
      "gift-cards": "Tarjetas de Regalo",
      "videogames": "Videojuegos"
    },
    'com.br': {
      "aps": "Todos os departamentos",
      "alexa-skills": "Alexa Skills",
      "grocery": "Alimentos e Bebidas",
      "mobile-apps": "Apps e Jogos",
      "automotive": "Automotivo",
      "baby": "Bebês",
      "beauty": "Beleza",
      "fashion-luggage": "Bolsas, Malas e Mochilas",
      "toys": "Brinquedos e Jogos",
      "home": "Casa",
      "popular": "CD e Vinil",
      "computers": "Computadores e Informática",
      "kitchen": "Cozinha",
      "amazon-devices": "Dispositivos Amazon",
      "dvd": "DVD e Blu-Ray",
      "appliances": "Eletrodomésticos",
      "electronics": "Eletrônicos",
      "sporting": "Esportes e Aventura",
      "hi": "Ferramentas e Materiais de Construção",
      "videogames": "Games",
      "garden": "Jardim e Piscina",
      "stripbooks": "Livros",
      "digital-text": "Loja Kindle",
      "office-products": "Material para Escritório e Papelaria",
      "furniture": "Móveis e Decoração",
      "pets": "Pet Shop",
      "instant-video": "Prime Video",
      "fashion": "Roupas, Calçados e Joias",
      "fashion-womens": "   Feminino",
      "fashion-mens": "   Masculino",
      "fashion-girls": "   Meninas",
      "fashion-boys": "   Meninos",
      "fashion-baby": "   Bebês",
      "hpc": "Saúde e Cuidados Pessoais"
    },
    'com.au': {
      "aps": "All Departments",
      "alexa-skills": "Alexa Skills",
      "amazon-devices": "Amazon Devices",
      "amazon-global-store": "Amazon Global Store",
      "mobile-apps": "Apps & Games",
      "audible": "Audible Audiobooks",
      "automotive": "Automotive",
      "baby": "Baby",
      "beauty": "Beauty",
      "stripbooks": "Books",
      "popular": "CDs & Vinyl",
      "fashion": "Clothing, Shoes & Accessories",
      "fashion-womens": "   Women",
      "fashion-mens": "   Men",
      "fashion-girls": "   Girls",
      "fashion-boys": "   Boys",
      "fashion-baby": "   Baby",
      "computers": "Computers",
      "electronics": "Electronics",
      "gift-cards": "Gift Cards",
      "hpc": "Health, Household & Personal Care",
      "home": "Home",
      "home-improvement": "Home Improvement",
      "digital-text": "Kindle Store",
      "fashion-luggage": "Luggage & Travel Gear",
      "luxury-beauty": "Luxury Beauty",
      "movies-tv": "Movies & TV",
      "grocery": "Pantry Food & Drinks",
      "pets": "Pet Supplies",
      "software": "Software",
      "sporting": "Sports, Fitness & Outdoors",
      "office-products": "Stationery & Office Products",
      "toys": "Toys & Games",
      "videogames": "Video Games"
    },
    'ae': {
      "aps": "All Categories",
      "amazon-devices": "Amazon Devices",
      "fashion": "Amazon Fashion",
      "amazon-global-store": "Amazon Global Store",
      "appliances": "Appliances",
      "automotive": "Automotive Parts & Accessories",
      "baby": "Baby",
      "beauty": "Beauty & Personal Care",
      "stripbooks": "Books",
      "computers": "Computer & Accessories",
      "electronics": "Electronics",
      "gift-cards": "Gift Cards",
      "grocery": "Grocery & Gourmet Food",
      "hpc": "Health, Household & Baby Care",
      "garden": "Home & Garden",
      "kitchen": "Kitchen & Dining",
      "fashion-luggage": "Luggage & Travel Gear",
      "mi": "Musical Instruments",
      "office-products": "Office Products",
      "pets": "Pet Supplies",
      "sports": "Sports",
      "tools": "Tools & Home Improvement",
      "toys": "Toys & Games",
      "videogames": "Video Games"
    },
    "nl": {
      "aps": "Alle afdelingen",
      "amazon-devices": "Amazon-apparaten",
      "automotive": "Auto en motor",
      "baby": "Babyproducten",
      "beauty": "Beauty en persoonlijke verzorging",
      "stripbooks": "Boeken",
      "gift-cards": "Cadeaubonnen",
      "popular": "Cd's en lp's",
      "electronics": "Elektronica",
      "dvd": "Films en tv",
      "hpc": "Gezondheid en persoonlijke verzorging",
      "pets": "Huisdierbenodigdheden",
      "office-products": "Kantoorproducten",
      "digital-text": "Kindle Store",
      "fashion": "Kleding, schoenen en sieraden",
      "home-improvement": "Klussen en gereedschap",
      "grocery": "Levensmiddelen",
      "mi": "Muziekinstrumenten",
      "misc": "Overig",
      "instant-video": "Prime Video",
      "software": "Software",
      "toys": "Speelgoed en spellen",
      "sports": "Sport en outdoor",
      "outdoor": "Tuin, terras en gazon",
      "videogames": "Videogames",
      "home": "Wonen en keuken",
      "industrial": "Zakelijk, industrie en wetenschap"
    },
    "sg": {
      "aps": "All Departments",
      "amazon-global-store": "Amazon International Store",
      "automotive": "Automotive",
      "baby": "Baby",
      "beauty": "Beauty & Personal Care",
      "stripbooks": "Books",
      "fashion": "Clothing, Shoes & Jewelry",
      "computers": "Computer & Accessories",
      "electronics": "Electronics",
      "grocery": "Grocery",
      "hpc": "Health, Household & Personal Care",
      "home": "Home",
      "kitchen": "Kitchen & Dining",
      "office-products": "Office Products",
      "pets": "Pet Supplies",
      "sporting": "Sports & Outdoors",
      "home-improvement": "Tools & Home Improvement",
      "toys": "Toys & Games",
      "videogames": "Video Games"
    },
    "sa": {
      "aps": "جميع الأقسام",
      "mi": "آلات موسيقية",
      "amazon-devices": "أجهزة Amazon",
      "home-improvement": "أدوات وتحسينات المنزل",
      "fashion": "أزياء Amazon",
      "videogames": "ألعاب الفيديو",
      "toys": "الألعاب والدمى",
      "electronics": "الإلكترونيات",
      "grocery": "البقالة والطعام الفاخر",
      "beauty": "الجمال والعناية الشخصية",
      "sports": "الرياضة",
      "hpc": "الصحة، الأسرة والعناية بالطفل",
      "industrial": "الصناعة والعلم",
      "arts-crafts": "الفنون والحرف والخياطة",
      "kitchen": "المطبخ والطعام",
      "garden": "المنزل والحديقة",
      "baby": "طفل",
      "automotive": "قطع وإكسسوارات السيارات",
      "stripbooks": "كتب",
      "amazon-global-store": "متجر أمازون العالمي",
      "pets": "مستلزمات الحيوانات الأليفة",
      "office-products": "منتجات المكتب",
      "home": "منتجات المنزل"
    },
    "com.tr": {
      "aps": "Tüm Kategoriler",
      "garden": "Bahçe",
      "baby": "Bebek",
      "computers": "Bilgisayarlar",
      "electronics": "Elektronik",
      "home": "Ev",
      "kitchen": "Ev ve Mutfak",
      "pets": "Evcil Hayvan Malzemeleri",
      "gift-cards": "Hediye Kartları",
      "stripbooks": "Kitaplar",
      "beauty": "Kişisel Bakım ve Kozmetik",
      "fashion": "Moda",
      "mi": "Müzik Aletleri",
      "office-products": "Ofis Ürünleri",
      "toys": "Oyuncaklar ve Oyunlar",
      "videogames": "PC ve Video Oyunları",
      "instant-video": "Prime Video",
      "hpc": "Sağlık ve Bakım",
      "sports": "Spor",
      "diy": "Yapı Market"
    },
    "se": {
      "aps": "Alla kategorier",
      "amazon-devices": "Amazon-enheter",
      "baby": "Babyprodukter",
      "home-improvement": "Bygg, el & verktyg",
      "stripbooks": "Böcker",
      "electronics": "Elektronik",
      "movies-tv": "Film & TV-serier",
      "automotive": "Fordon",
      "home": "Hem & kök",
      "arts-crafts": "Hobby & hantverk",
      "pets": "Husdjursprodukter",
      "hpc": "Hälsa, vård & hushåll",
      "industrial": "Industriella verktyg & produkter",
      "fashion": "Kläder, skor & accessoarer",
      "office-products": "Kontorsprodukter & skolmaterial",
      "toys": "Leksaker & spel ",
      "popular": "Musik",
      "mi": "Musikinstrument",
      "gift-cards": "Presentkort",
      "instant-video": "Prime Video",
      "software": "Programvara",
      "beauty": "Skönhet & kroppsvård",
      "sporting": "Sport & outdoor",
      "garden": "Trädgård",
      "videogames": "TV-spel & konsoler"
    },
    "pl": {
      "aps": "Wszystkie kategorie",
      "arts-crafts": "Arts & crafts",
      "office-products": "Biuro",
      "industrial": "Biznes, przemysł i nauka",
      "home": "Dom i kuchnia",
      "baby": "Dziecko",
      "electronics": "Elektronika",
      "movies-tv": "Filmy i programy TV",
      "videogames": "Gry wideo",
      "mi": "Instrumenty muzyczne",
      "gift-cards": "Karty podarunkowe",
      "computers": "Komputery i akcesoria",
      "stripbooks": "Książki",
      "automotive": "Motoryzacja",
      "popular": "Muzyka",
      "fashion": "Odzież, obuwie i akcesoria",
      "garden": "Ogród",
      "software": "Oprogramowanie",
      "home-improvement": "Renowacja domu",
      "sporting": "Sport i turystyka",
      "beauty": "Uroda",
      "amazon-devices": "Urządzenia Amazon",
      "toys": "Zabawki i gry",
      "hpc": "Zdrowie i gospodarstwo domowe",
      "pets": "Zwierzęta"
    },
    'eg': {
      "aps": "All Categories",
      "amazon-devices": "Amazon Devices",
      "fashion": "Amazon Fashion",
      "arts-crafts": "Arts, Crafts &amp; Sewing",
      "automotive": "Automotive Parts &amp; Accessories",
      "baby": "Baby",
      "beauty": "Beauty &amp; Personal Care",
      "stripbooks": "Books",
      "electronics": "Electronics",
      "grocery": "Grocery &amp; Gourmet Food",
      "hpc": "Health, Household &amp; Baby Care",
      "garden": "Home &amp; Garden",
      "home": "Home Related",
      "industrial": "Industrial &amp; Scientific",
      "mi": "Musical Instruments",
      "office-products": "Office Products",
      "pets": "Pet Supplies",
      "software": "Software",
      "sports": "Sports",
      "home-improvement": "Tools &amp; Home Improvement",
      "toys": "Toys &amp; Games",
      "videogames": "Video Games"
    }
  };
  return WooZoneNoAWS_isset(data, country) ? data[country] : [];
}
function WooZoneNoAWS_Country_List() {
  return [{
    'alias': 'com',
    'label': 'United States',
    'flag': 'assets/flags/US.gif'
  }, {
    'alias': 'co.uk',
    'label': 'United Kingdom',
    'flag': 'assets/flags/UK.gif'
  }, {
    'alias': 'de',
    'label': 'Deutschland',
    'flag': 'assets/flags/DE.gif'
  }, {
    'alias': 'fr',
    'label': 'France',
    'flag': 'assets/flags/FR.gif'
  }, {
    'alias': 'co.jp',
    'label': 'Japan',
    'flag': 'assets/flags/JP.gif'
  }, {
    'alias': 'ca',
    'label': 'Canada',
    'flag': 'assets/flags/CA.gif'
  }, {
    'alias': 'cn',
    'label': 'China',
    'flag': 'assets/flags/CN.gif'
  }, {
    'alias': 'in',
    'label': 'India',
    'flag': 'assets/flags/IN.gif'
  }, {
    'alias': 'it',
    'label': 'Italia',
    'flag': 'assets/flags/IT.gif'
  }, {
    'alias': 'es',
    'label': 'España',
    'flag': 'assets/flags/ES.gif'
  }, {
    'alias': 'com.mx',
    'label': 'Mexico',
    'flag': 'assets/flags/MX.jpg'
  }, {
    'alias': 'com.br',
    'label': 'Brazil',
    'flag': 'assets/flags/BR.gif'
  }, {
    'alias': 'com.au',
    'label': 'Australia',
    'flag': 'assets/flags/AU.png'
  }, {
    'alias': 'ae',
    'label': 'UAE',
    'flag': 'assets/flags/UAE.gif'
  }, {
    'alias': 'nl',
    'label': 'Netherlands',
    'flag': 'assets/flags/NL.gif'
  }, {
    'alias': 'sg',
    'label': 'Singapore',
    'flag': 'assets/flags/SG.gif'
  }, {
    'alias': 'sa',
    'label': 'Saudi Arabia',
    'flag': 'assets/flags/SA.gif'
  }, {
    'alias': 'com.tr',
    'label': 'Turkey',
    'flag': 'assets/flags/TR.gif'
  }, {
    'alias': 'se',
    'label': 'Sweden',
    'flag': 'assets/flags/SE.gif'
  }, {
    'alias': 'pl',
    'label': 'Poland',
    'flag': 'assets/flags/PL.gif'
  }, {
    'alias': 'eg',
    'label': 'Egypt',
    'flag': 'assets/flags/EG.gif'
  }];
}
function WooZoneNoAWS_isset(arr, var_args) {
  for (var i = 1, k = arguments.length; i < k; ++i) {
    if (!arr || !arr.hasOwnProperty(arguments[i])) return false;
    arr = arr[arguments[i]];
  }
  return true;
}
function WooZoneParser(alias, content, _ref) {
  var _ref$lang = _ref.lang,
    lang = _ref$lang === void 0 ? 'en' : _ref$lang,
    _ref$prevState = _ref.prevState,
    prevState = _ref$prevState === void 0 ? {} : _ref$prevState;
  console.log('WooZoneParser: ', alias, lang, prevState);
  var base = {};
  if (alias !== 'paged') {
    return base;
  }
  var isfrom = WooZoneNoAWS_isset(prevState, 'isfrom') ? prevState['isfrom'] : '';
  var prevPerPage = WooZoneNoAWS_isset(prevState, 'pagination', 'per_page') ? prevState['pagination']['per_page'] : -999;
  var $content = $(content);
  var $breadcrumb = $content.find(".s-breadcrumb");
  var breadcrumbText = $breadcrumb.text();
  breadcrumbText = $.trim(breadcrumbText);
  var paginationWrapperExp = '.s-result-list.s-search-results .s-result-item ul.a-pagination';
  var $paginationWrapper = $content.find("".concat(paginationWrapperExp));
  var lastPage = -1;
  if ($paginationWrapper.find('li.a-last') && $paginationWrapper.find('li.a-last').prev()) {
    lastPage = $paginationWrapper.find('li.a-last').prev().text();
    lastPage = parseInt(lastPage, 10);
  }
  console.log('WooZoneParser: ', alias, $paginationWrapper, lastPage, $paginationWrapper.find('li.a-last').prev());

  // [update] on 2020-nov-30
  // ex: 1-16 of over 100,000 results for "lcd"
  var max = 20;
  //let regex = /(\d+)(?:-|–| a )(\d+) .* (\d+(?:(?:[\.,\s]{1})\d+)?\s)/gmi;
  var regex = /(\d+)(?:-|–| a )(\d+) (?:[^\d]+) (\d+(?:(?:[\.,\s]{1})\d+)?)\s/gmi;
  if ('cn' === lang) {
    max = 10;
    regex = /(\d+)-(\d+)条， 共超过(\d+(?:(?:[\.,]{1})\d+)?)/gmi;
  } else if ('co.jp' === lang) {
    max = 10;
    regex = /(\d+(?:(?:[\.,]{1})\d+)?)(?: 以上 のうち | のうち )(\d+)-(\d+)/gm;
  } else if ('com.tr' === lang) {
    max = 10;
    regex = /(\d+(?:(?:[\.,]{1})\d+)?)(?:[^\d]+)(\d+)-(\d+)/gm;
  }
  var matches = regex.exec(breadcrumbText);
  console.log('WooZoneParser: ', alias, matches);
  if (!matches || !matches.length) {
    return base;
  }

  //:: start, end, totals
  if (WooZoneNoAWS_isset(matches, 1)) {
    if ('co.jp' === lang || 'com.tr' === lang) {
      base['totals'] = parseInt(matches[1].replace(/[\.,\s ]+/gi, ''));
    } else {
      base['start'] = parseInt(matches[1]);
    }
  }
  if (WooZoneNoAWS_isset(matches, 2)) {
    if ('co.jp' === lang || 'com.tr' === lang) {
      base['start'] = parseInt(matches[2]);
    } else {
      base['end'] = parseInt(matches[2]);
    }
  }
  if (WooZoneNoAWS_isset(matches, 3)) {
    if ('co.jp' === lang || 'com.tr' === lang) {
      base['end'] = parseInt(matches[3]);
    } else {
      base['totals'] = parseInt(matches[3].replace(/[\.,\s ]+/gi, ''));
    }
  }

  //:: per page
  if (WooZoneNoAWS_isset(base, 'start') && WooZoneNoAWS_isset(base, 'end')) {
    base['per_page'] = parseInt(base['end'] + 1 - base['start']);
    if ('pagination' === isfrom && prevPerPage > 0 && base['per_page'] !== prevPerPage) {
      base['per_page'] = prevPerPage;
    }
  }

  //:: totals
  if (WooZoneNoAWS_isset(base, 'per_page') && lastPage > 0) {
    var tmp = parseInt(lastPage * base['per_page'], 10);
    if (!WooZoneNoAWS_isset(base, 'totals')) {
      base['totals'] = tmp;
    } else if (base['totals'] > tmp) {
      base['totals'] = tmp;
    }
  }

  //:: FIXES
  if (WooZoneNoAWS_isset(base, 'totals') && WooZoneNoAWS_isset(base, 'per_page')) {
    var _tmp = parseInt(max * base['per_page'], 10);
    if (base['totals'] > _tmp) {
      base['totals'] = _tmp;
    }
  }
  if (WooZoneNoAWS_isset(base, 'end') && WooZoneNoAWS_isset(base, 'totals')) {
    if (base['end'] >= base['totals']) {
      delete base['per_page'];
    }
  }
  console.log('WooZoneParser: ', alias, breadcrumbText, matches, base);
  return base;
}
function WooZoneMakeID() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
function WooZoneChunk(arr, chunkSize) {
  var R = [];
  for (var i = 0, len = arr.length; i < len; i += chunkSize) R.push(arr.slice(i, i + chunkSize));
  return R;
}
function WooZoneHumanFileSize(bytes, si) {
  var thresh = si ? 1000 : 1024;
  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }
  var units = si ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  var u = -1;
  do {
    bytes /= thresh;
    ++u;
  } while (Math.abs(bytes) >= thresh && u < units.length - 1);
  return bytes.toFixed(1) + ' ' + units[u];
}
function WooZoneGetHostName(url) {
  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
  } else {
    return null;
  }
}
function WooZoneGetDomain(url) {
  var hostName = WooZoneGetHostName(url);
  var domain = hostName;
  if (hostName != null) {
    var parts = hostName.split('.').reverse();
    if (parts != null && parts.length > 1) {
      domain = parts[1] + '.' + parts[0];
      if (hostName.toLowerCase().indexOf('.co.uk') != -1 && parts.length > 2) {
        domain = parts[2] + '.' + domain;
      }
      if (hostName.toLowerCase().indexOf('.co.jp') != -1 && parts.length > 2) {
        domain = parts[2] + '.' + domain;
      }
      if (hostName.toLowerCase().indexOf('.com.au') != -1 && parts.length > 2) {
        domain = parts[2] + '.' + domain;
      }
      if (hostName.toLowerCase().indexOf('.com.mx') != -1 && parts.length > 2) {
        domain = parts[2] + '.' + domain;
      }
      if (hostName.toLowerCase().indexOf('.com.br') != -1 && parts.length > 2) {
        domain = parts[2] + '.' + domain;
      }
      if (hostName.toLowerCase().indexOf('.com.tr') != -1 && parts.length > 2) {
        domain = parts[2] + '.' + domain;
      }
    }
  }
  return domain;
}
function WooZoneContentTrimmer() {
  var DOM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  function clean_text(content) {
    content = content.replace(/\s\s+/g, ' ');
    content = content.trim();
    return content;
  }

  // console.time('contentTrimmer');

  DOM = clean_text(DOM);
  var page = $('<div/>').html(DOM).contents().parent();

  // some unwanted HTML tags
  page.find("header").remove();
  page.find("style").remove();
  page.find("link").remove();
  page.find("input").remove();
  page.find("select").remove();

  // footer large menu
  page.find("#navFooter").remove();

  // reviews
  page.find("#reviewsMedley").remove();

  // Frequently bought together
  page.find("#sims-consolidated-1_feature_div").remove();

  // Sponsored products related to this item
  page.find("#sims-consolidated-2_feature_div").remove();

  // Customers who bought this item also bought
  page.find("#sims-consolidated-3_feature_div").remove();

  // Sponsored products related to this item
  page.find("#sponsoredProducts2_feature_div").remove();
  page.find("*").removeAttr('style');
  page.find("script").each(function () {
    var that = $(this);
    if (that.text().indexOf("twister-js-init-dpx-data") == -1) {
      that.remove();
    }
  });

  // console.timeEnd('contentTrimmer');

  return page.html();
}
function WooZoneImportUrlGetDebugStep() {
  var ret = {
    status: 'invalid',
    value: '',
    asparam: ''
  };
  var queryString = window.location.search;
  //console.log('queryString', queryString);

  var urlParams = new URLSearchParams(queryString);
  //console.log('debug_step', urlParams.has('debug_step'));
  if (urlParams.has('debug_step')) {
    var debug_step = urlParams.get('debug_step');
    //console.log('debug_step', debug_step);
    ret = _objectSpread(_objectSpread({}, ret), {}, {
      status: 'valid',
      value: debug_step,
      asparam: "&debug_step=".concat(debug_step)
    });
  }
  return ret;
}

/***/ }),

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _country_dropdown_class_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./country-dropdown.class.js */ "./src/country-dropdown.class.js");
/* harmony import */ var _amz_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./amz.utils.js */ "./src/amz.utils.js");






function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var _wp$element = wp.element,
  Component = _wp$element.Component,
  render = _wp$element.render,
  findDOMNode = _wp$element.findDOMNode,
  Fragment = _wp$element.Fragment;
var $ = jQuery;
var _wp$components = wp.components,
  RangeControl = _wp$components.RangeControl,
  CheckboxControl = _wp$components.CheckboxControl;

//import md5 from 'js-md5';

console.log('ceva');


var alias = 'WooZone-NAWS-';
var image_block_wrapper = document.getElementById("".concat(alias, "wrapper"));
var chunkSize = 20;
var WooZoneNoAWSImport = /*#__PURE__*/function (_Component) {
  function WooZoneNoAWSImport(props) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, WooZoneNoAWSImport);
    _this = _callSuper(this, WooZoneNoAWSImport, [props]);
    _this.DEBUG = false;
    _this.state = {
      ipc_is_valid: false,
      show_log: true,
      country: 'com',
      categ: 'aps',
      keyword: 'test',
      search_sort: 'relevanceblender',
      search_result_page: null,
      show_main_loader: false,
      pagination: {},
      products: {},
      paged: 1,
      import_in_progress: false,
      products_get_in_progress: [],
      selected_products: {},
      imported_products: {},
      import_setup: {
        variations: 15,
        images: 20,
        attributes: true,
        spin: false,
        threads: 2,
        type: 'variations' // variations
      },
      logs: {},
      view_log_asin: false,
      fakeUpdateState: 0,
      is_chrome: navigator.userAgent.toLowerCase().indexOf('chrome') > -1,
      extention_loaded: false,
      ipc_valid: false,
      workers: {},
      quick_menu: 'close',
      isfrom: '',
      // to identify if the click come from pagination links or just hit the search button
      only_single: false
    };
    _this.nbProducts = 0;
    _this.searchFormRef = React.createRef();
    _this.searchFieldPaged = React.createRef();

    // debug
    // if( 0 ) {
    //   setTimeout( () => {
    //     document.getElementById("WooZone-NAWS-search-form").elements[4].click();

    //     if( 0 ){
    //       setTimeout( () => {
    //         let products = document.getElementsByClassName("WooZone-NAWS-get-product")
    //         Array.from(products).slice(10, 10).forEach( (elm, index) => {
    //           elm.click();
    //         })

    //         setTimeout( () => {
    //           document.getElementById("WooZone-NAWS-import-form").elements[9].click();
    //         }, 300 )

    //       }, 500 )
    //     }
    //   }, 500 )
    // }
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(WooZoneNoAWSImport, _Component);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(WooZoneNoAWSImport, [{
    key: "custom_hash_translate",
    value: function custom_hash_translate(str) {
      if (typeof str == "undefined") return false;
      return window.atob(str).replace('#-1#', "a").replace('#-5#', "b").replace('#-6#', "c").replace('#-4#', "h").replace('#-21#', "t").replace('#-76#', "w");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var self = this;
      //console.log( 'urlGetDebugStep', urlGetDebugStep() );

      self.buidApiUrl('amazon.com');
      window.addEventListener("message", function (event) {
        if (event.data.type && event.data.type == "".concat(alias, "response")) {
          var _event$data = event.data,
            action = _event$data.action,
            sub_action = _event$data.sub_action,
            response = _event$data.response,
            url = _event$data.url;

          //console.log(action, sub_action, response, url );

          if (action == 'extension-loaded') {
            if ((0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneNoAWS_isset)(response, 'version')) {
              if (parseFloat(response.version) >= 2) {
                var de_hash = self.custom_hash_translate(response.hash);
                //console.log( de_hash );

                //console.clear();

                self.setState({
                  extention_loaded: true,
                  ipc_is_valid: de_hash == WooZoneNoAwsKeysImport.validation.home_url ? true : false
                });
              }
            }
          }
          if (action == 'url-get-content-response') {
            if (sub_action == 'search') {
              self.setState(function (prevState) {
                var newState = {
                  show_main_loader: false,
                  search_result_page: response.result,
                  pagination: _objectSpread(_objectSpread({}, prevState.pagination), (0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneParser)('paged', response.result, {
                    lang: self.state.country,
                    prevState: prevState
                  }))
                };
                return newState;
              });
            } else if (sub_action == 'variations') {
              if ((0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneNoAWS_isset)(response, 'call_id')) {
                if (self.state.products_get_in_progress.includes(response.call_id)) {
                  self.setProductsVariations(response.call_id, response.result);
                }
              }
            } else if (sub_action == 'validation') {
              if ((0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneNoAWS_isset)(response, 'call_id')) {

                console.log('response', response);
                if (response.result.status == 'invalid') {
                  alert("Unable to validate your request. Please contact AA-Team support!");
                }
                self.setState({
                  show_main_loader: false
                });
                if (response.result.status == 'valid') {
                  //self.setState({ ipc_is_valid: true });

                  // refresh the page here!
                  window.location.reload();
                  return true;
                }
              }
            } else if (sub_action == 'minimal_data') {
              if ((0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneNoAWS_isset)(response, 'call_id')) {
                if (self.state.products_get_in_progress.includes(response.call_id)) {
                  var asin = response.call_id;
                  var products = _objectSpread({}, self.state.products);
                  if ((0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneNoAWS_isset)(products, asin)) {
                    products[asin].apiData = JSON.parse(response.result);
                    console.log(products[asin]);
                    self.setState({
                      products: products
                    });
                    self.sendToWZoneImport();
                  }
                }
              }
            } else if (sub_action == 'product_page') {
              // to do
              if ((0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneNoAWS_isset)(response, 'call_id')) {
                if (self.state.products_get_in_progress.includes(response.call_id)) {
                  // trim unwanted page content, make the request smaller and faster
                  response.result = (0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneContentTrimmer)(response.result);
                  self.getProductMininalData(response.call_id, response.result, url);
                }
              }
            } else {
              if (self.DEBUG) console.log("Invalid sub_action: ".concat(sub_action));
            }
          }
        }
      });
      this.importWorker();
    }
  }, {
    key: "setProductsVariations",
    value: function setProductsVariations(asin, DOM) {
      var variationsJSON = JSON.parse($.trim(DOM));
      if (variationsJSON) {
        this.add_to_log(asin, "Variations prices found: ".concat(variationsJSON.ASIN.length, " items"), 'success');
        var products = _objectSpread({}, this.state.products);
        if ((0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneNoAWS_isset)(products, asin)) {
          if (!(0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneNoAWS_isset)(products, asin, 'variations')) {
            products[asin].variations = variationsJSON.ASIN;
          } else {
            products[asin].variations = products[asin].variations.concat(variationsJSON.ASIN);
          }
          this.setState({
            products: products
          });

          //console.log( 'ceva', products[asin].nbVariation, products[asin].variations);
          if (products[asin].nbVariation == Object.keys(products[asin].variations).length) {
            this.sendToWZoneImport();
          }
        } else {
          if (this.DEBUG) console.log("For no reason unable to find your asin into state products!");
        }
      } else {
        this.add_to_log(asin, "Unable to find any price for your variations", 'error');
      }
      this.fakeUpdateState();
    }
  }, {
    key: "fakeUpdateState",
    value: function fakeUpdateState() {
      this.setState({
        fakeUpdateState: Math.floor(Math.random() * 999) + 1
      });
    }
  }, {
    key: "buidApiUrl",
    value: function buidApiUrl(country) {
      country = country.replace("amazon.", "");
      /*if( WooZoneNoAwsKeysImport.no_api_urls.hasOwnProperty(country) ){
        return WooZoneNoAwsKeysImport.no_api_urls[country];
      }*/

      // com
      return "ws-na.amazon-adsystem.com/widgets/resolve?region=US";
    }
  }, {
    key: "sendToWZoneImport",
    value: function sendToWZoneImport() {
      var _this$state = this.state,
        selected_products = _this$state.selected_products,
        products = _this$state.products,
        imported_products = _this$state.imported_products;
      var self = this;
      if (self.DEBUG) console.log("it's time to send to WZone and import the products:");
      if (Object.keys(products).length > 0) {
        if (selected_products[Object.keys(products)[0]]) {
          var asin = Object.keys(products)[0];

          // get some certain data about product using API
          //console.log( 'aici:', products[asin] );

          /*if( !products[asin].apiData ){
              let buildVariations = [];
            [asin].forEach(function(variation){
                buildVariations.push('[%22items.ASINRef%22,{%22id%22:%22'+ `${variation}` + '%22,%22src%22:[%22relevance.RandomizedPublisherCuration%22,{}],%22destUrl%22:null}]');
            });
              const request_url = `https://${ self.buidApiUrl( products[asin].domain )}&tid=test-20&lc=w5&u=affiliate-program.amazon.com&p={"itemRefs":["java.util.ArrayList",[${buildVariations.join(',')}]]}`;
            window.postMessage( {
              type: `${alias}transporter`,
              action: 'url-get-content',
              params: {
                'sub_action': 'minimal_data',
                'url': request_url,
                'call_id': asin,
                'delay': Math.floor(Math.random() * 50) + 1,
                'home_url': WooZoneNoAwsKeysImport.validation.home_url
              }
            } );
              return false;
          }*/

          // debug, to give error. This will not allow the script to import product
          if (false) {}
          var ourdata = {
            asin: asin,
            country: products[asin].domain.replace("amazon.", ""),
            idcateg: document.getElementById("WooZone-to-category").value == '-1' ? 0 : document.getElementById("WooZone-to-category").value,
            nbimages: this.state.import_setup.images,
            nbvariations: this.state.import_setup.variations,
            spin: this.state.import_setup.spin ? 1 : 0,
            attributes: this.state.import_setup.attributes ? 1 : 0,
            where: 'react',
            variations: (0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneNoAWS_isset)(products, asin, 'variations') ? JSON.stringify(products[asin].variations) : 0,
            page_content: products[asin].DOM,
            apiData: products[asin].apiData,
            nonce: WooZoneHelper.nonce
          };
          if (self.DEBUG) console.log('our import params', ourdata);

          // remove the first product from state products
          delete products[asin];
          self.setState({
            products: products
          });
          // DEBUG IN FIDDLER
          var theAjaxUrl = "".concat(ajaxurl, "?action=WooZoneNoAWSImport&sub_action=add_product").concat((0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneImportUrlGetDebugStep)().asparam);
          $.ajax({
            method: "POST",
            url: theAjaxUrl,
            data: ourdata,
            dataType: "json"
          }).fail(function (response) {
            response = response.responseJSON;
            self.add_to_log(asin, response.msg_full, 'error');

            // setup the total time
            self.add_to_log(asin, 'Total execution time: ', 'end');
            self.setState({
              imported_products: _objectSpread(_objectSpread({}, self.state.imported_products), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, asin, {
                status: 'invalid'
              }))
            });
          }).done(function (response) {
            if (self.DEBUG) console.log('add product response: ', response);
            if (response.status == 'invalid') {
              self.add_to_log(asin, "INVALID response", 'error');
              self.add_to_log(asin, response.msg, 'error');
              if (response.msg_arr.length) {
                response.msg_arr.forEach(function (elm) {
                  self.add_to_log(asin, elm, 'error');
                });
              }
              self.setState({
                imported_products: _objectSpread(_objectSpread({}, self.state.imported_products), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, asin, {
                  status: 'invalid'
                }))
              });
            }
            if (response.status == 'valid') {
              self.add_to_log(asin, "VALID response", 'success');
              self.add_to_log(asin, response.msg, 'success');
              if (response.msg_arr.length) {
                response.msg_arr.forEach(function (elm) {
                  self.add_to_log(asin, elm, 'notice');
                });
              }
              self.setState({
                imported_products: _objectSpread(_objectSpread({}, self.state.imported_products), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, asin, {
                  status: 'valid'
                }))
              });
            }

            // setup the total time
            self.add_to_log(asin, 'Total execution time: ', 'end');
            WooZoneNoAwsKeysImport.imported_products.asins_imported += "amz-".concat(asin);
            delete selected_products[asin];

            // update the state
            self.setState({
              selected_products: selected_products
            });

            // unblock the worker
            self.unblockWorker(asin);
          });
        }
      }
    }
  }, {
    key: "getProductMininalData",
    value: function getProductMininalData(asin, DOM, url) {
      var import_setup = this.state.import_setup;
      var size = (0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneHumanFileSize)(DOM.length);
      this.add_to_log(asin, "page size after content trimmed: <strong>".concat(size, "</strong>"), 'notice');
      if (DOM.length > 100) {
        this.add_to_log(asin, "DOM response looks good", 'success');
      } else {
        this.add_to_log(asin, "response looks INVALID", 'error');
      }
      var productType = 'simple';

      // if( DOM.includes('dimensionToAsinMap') && import_setup.type != 'simple' ){
      //   productType = 'variable';
      // }

      this.add_to_log(asin, "Product type is ".concat(productType), 'notice');
      var uniqVariations = [];
      if (productType == 'variable') {
        var detected_asin = DOM.split('"currentAsin" : "').pop().split('",')[0];
        var parent_asin = DOM.split('"parentAsin" : "').pop().split('",')[0];
        if (detected_asin == asin || parent_asin == asin) {
          this.add_to_log(asin, "Valid ASIN code: ".concat(detected_asin, " ").concat(parent_asin == asin ? ' as parent.' : ''), 'success');
        } else {
          this.add_to_log(asin, "INVALID ASIN code detected: ".concat(detected_asin), 'error');
        }
        var variations = JSON.parse($.trim(DOM.split('"dimensionToAsinMap" :').pop().split('},')[0] + "}"));
        Object.keys(variations).map(function (object, index) {
          //if( 0 && variations[object] != asin ){
          uniqVariations.push(variations[object]);
          //}
        });
        if (import_setup.variations < uniqVariations.length) {
          this.add_to_log(asin, "Number of variations setup is: ".concat(import_setup.variations, " and the product has ").concat(uniqVariations.length, " so ").concat(uniqVariations.length - import_setup.variations, " will be ignored."), 'notice');
        }
        uniqVariations = uniqVariations.slice(0, import_setup.variations);
        if (uniqVariations.length == 0) {
          this.add_to_log(asin, "No variations for: ".concat(asin), 'notice');

          // import this product as a wocoomerce simple product
          productType = 'simple';
        } else {
          this.add_to_log(asin, "=> Request for the following variations: ".concat(uniqVariations.join(', ')), 'notice');

          //if( $(DOM).find('.swatchesSquare.imageSwatches').size() )
          /*if( DOM.includes('swatchesSquare') || DOM.includes('imageSwatches') ){
            }*/

          //const request_url = `https://www.${ getDomain(url) }/gp/p13n-shared/faceout-partial?reftagPrefix=homepage&widgetTemplateClass=PI::Similarities::ViewTemplates::Carousel::Desktop&faceoutTemplateClass=PI::P13N::ViewTemplates::Product::Desktop::CarouselFaceout&productDetailsTemplateClass=PI::P13N::ViewTemplates::ProductDetails::Desktop::Base&offset=0&asins=${uniqVariations.join(',')}`;

          /*for (let i = 0; i < uniqVariations.length; i += chunkSize) {
              const chunk = uniqVariations.slice(i, i + chunkSize);
              
              let buildVariations = [];
              chunk.forEach(function(variation){
                  buildVariations.push('[%22items.ASINRef%22,{%22id%22:%22'+ `${variation}` + '%22,%22src%22:[%22relevance.RandomizedPublisherCuration%22,{}],%22destUrl%22:null}]');
              });
                console.log( {url} );
              const request_url = `https://${ this.buidApiUrl( getDomain(url) )}&tid=test-20&lc=w5&u=affiliate-program.amazon.com&p={"itemRefs":["java.util.ArrayList",[${buildVariations.join(',')}]]}`;
                window.postMessage( {
                type: `${alias}transporter`,
                action: 'url-get-content',
                params: {
                  'sub_action': 'variations',
                  'url': request_url,
                  'call_id': asin,
                  'delay': Math.floor(Math.random() * 50) + 1,
                  'home_url': WooZoneNoAwsKeysImport.validation.home_url
                }
              } );
          }*/
        }
      }
      this.setState({
        products: _objectSpread(_objectSpread({}, this.state.products), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, asin, {
          DOM: DOM,
          size: size,
          nbVariation: productType == 'variable' ? uniqVariations.length : 0,
          apiData: false,
          domain: (0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneGetDomain)(url),
          type: productType,
          title: DOM.match(/<title[^>]*>([^<]+)<\/title>/)[1],
          status: productType == 'simple' ? 'done' : 'waiting_for_variations'
        }))
      });

      //if( productType == 'simple' ){
      this.sendToWZoneImport();
      //}
    }
  }, {
    key: "buildCateg",
    value: function buildCateg() {
      var _this2 = this;
      var categ = this.state.categ;
      var categs = (0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneNoAWSCategs)(this.state.country);
      if (categs.length == 0) {
        return /*#__PURE__*/React.createElement("div", {
          "class": "notice notice-error"
        }, this.state.country, " not implemented yet!");
      }
      return /*#__PURE__*/React.createElement("select", {
        id: "".concat(alias, "filed-categ"),
        value: categ,
        onChange: function onChange(e) {
          e.preventDefault();
          _this2.setState({
            categ: e.target.value,
            isfrom: ''
          });
        }
      }, Object.keys(categs).map(function (key, index) {
        return /*#__PURE__*/React.createElement("option", {
          key: index,
          value: key
        }, categs[key]);
      }));
    }
  }, {
    key: "addProductBtn",
    value: function addProductBtn(asin, event) {
      this.setState({
        selected_products: _objectSpread(_objectSpread({}, this.state.selected_products), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, asin, this.search_results_products[asin]))
      });
    }
  }, {
    key: "buildSearchResults",
    value: function buildSearchResults() {
      var _this$state2 = this.state,
        search_result_page = _this$state2.search_result_page,
        country = _this$state2.country,
        selected_products = _this$state2.selected_products;
      var self = this;
      if (search_result_page) {
        if (Object.keys(this.search_results_products).length == 0) {
          var page_doc = $(search_result_page);
          var cc = 0;
          page_doc.find("div.s-result-list div.s-result-item").each(function () {
            var item = $(this);

            // skip if is sponsored
            if (item.html().indexOf('sp-sponsored-result') == '-1') {
              cc++;
              var asin = item.data('asin'),
                image = item.find(".s-image").attr('src'),
                name = $.trim(item.find('h2').text()),
                price = item.find(".a-price").html(),
                avgRating = item.find(".a-icon-star-small").text();
              var variation_asin = '';
              var asin_regex = /\/dp\/(.*)\//gm;
              var match = asin_regex.exec(item.html());
              if (match && match.length > 0) {
                if ((0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneNoAWS_isset)(match, 1)) {
                  variation_asin = match[1];
                }
              }
              if (asin /*&& cc < 10*/) {
                self.search_results_products[asin] = {
                  country: country,
                  variation_asin: variation_asin,
                  name: name,
                  price: price,
                  image: image.replace(/\._(.*)_\./, '._SS200_.'),
                  avgRating: avgRating,
                  url: "https://www.amazon.".concat(country, "/dp/").concat(asin),
                  variation_url: "https://www.amazon.".concat(country, "/dp/").concat(variation_asin)
                };
              }
            }
          });
        }
        if (Object.keys(this.search_results_products).length) {
          // reset the nb of products for each new search
          this.nbProducts = 0;
          return /*#__PURE__*/React.createElement("div", {
            className: "".concat(alias, "search-results")
          }, /*#__PURE__*/React.createElement("h2", null, "Search Results:"), this.buildPagination(), /*#__PURE__*/React.createElement("ul", null, Object.keys(this.search_results_products).map(function (key, index) {
            self.nbProducts++;
            var already_imported = false;
            if (WooZoneNoAwsKeysImport.imported_products.status == 'valid' && WooZoneNoAwsKeysImport.imported_products.asins_imported.includes("amz-".concat(key))) {
              already_imported = true;
            }
            self.search_results_products[key]['already_imported'] = already_imported;
            return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
              href: self.search_results_products[key].url,
              target: "_blank"
            }, /*#__PURE__*/React.createElement("img", {
              src: self.search_results_products[key].image
            })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, /*#__PURE__*/React.createElement("a", {
              href: self.search_results_products[key].url,
              target: "_blank"
            }, self.search_results_products[key].name)), /*#__PURE__*/React.createElement("div", {
              className: "".concat(alias, "price")
            }, self.search_results_products[key].price ? /*#__PURE__*/React.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: self.search_results_products[key].price
              }
            }) : ''), /*#__PURE__*/React.createElement("h4", null, self.search_results_products[key].avgRating), already_imported == true ? /*#__PURE__*/React.createElement("span", {
              className: "".concat(alias, "already-imported")
            }, "Already Imported") : Object.keys(selected_products).includes(key) ? /*#__PURE__*/React.createElement("span", {
              className: "".concat(alias, "data-added")
            }, "product added to import list") : /*#__PURE__*/React.createElement("button", {
              "data-asin": key,
              className: "".concat(alias, "get-product"),
              onClick: self.addProductBtn.bind(self, key)
            }, "Add to import list")));
          })), this.buildPagination());
        }
      }
    }
  }, {
    key: "buildPagination",
    value: function buildPagination() {
      var _this3 = this;
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(alias, "pagination-wrapper")
      }, /*#__PURE__*/React.createElement((react_paginate__WEBPACK_IMPORTED_MODULE_6___default()), {
        previousLabel: /*#__PURE__*/React.createElement("span", {
          "class": "dashicons dashicons-arrow-left-alt2"
        }),
        nextLabel: /*#__PURE__*/React.createElement("span", {
          "class": "dashicons dashicons-arrow-right-alt2"
        }),
        breakLabel: '...',
        breakClassName: 'break-me',
        pageCount: Math.ceil(this.state.pagination.totals / this.state.pagination.per_page),
        marginPagesDisplayed: 2,
        pageRangeDisplayed: 3,
        onPageChange: function onPageChange(data) {
          _this3.setState({
            paged: data.selected + 1,
            isfrom: 'pagination'
          });
          _this3.searchFieldPaged.current.value = data.selected;
          setTimeout(function () {
            _this3.searchFormRef.current.querySelector('button[type="submit"]').click();
          }, 50);
        },
        containerClassName: "".concat(alias, "pagination"),
        subContainerClassName: 'pages pagination',
        activeClassName: '_is_selected',
        forcePage: this.state.paged - 1
      }));
    }
  }, {
    key: "buildLoader",
    value: function buildLoader() {
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(alias, "loader")
      }, /*#__PURE__*/React.createElement("div", {
        "class": "lds-roller"
      }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null)));
    }
  }, {
    key: "add_to_log",
    value: function add_to_log() {
      var asin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'none';
      var logs = this.state.logs;

      // calculte the total number
      if (type == 'end') {
        msg = "".concat(msg, " <strong>").concat(((new Date() - this.state.logs[asin][0].when) / 1000).toFixed(2), " seconds</strong>");
      }
      var asin_log = (0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneNoAWS_isset)(logs, asin) ? logs[asin].slice(0) : [];
      asin_log.push({
        msg: msg,
        type: type,
        when: new Date()
      });

      //this.setState({ logs: { ...this.state.logs, [asin]: asin_log }});
      this.state.logs = _objectSpread(_objectSpread({}, this.state.logs), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, asin, asin_log));
    }
  }, {
    key: "unblockWorker",
    value: function unblockWorker() {
      var asin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var workers = this.state.workers;
      Object.keys(workers).forEach(function (key) {
        // let's free this worker
        if (workers[key]['asin'] == asin) {
          workers[key].status = 'free';
        }
      });
    }
  }, {
    key: "importWorker",
    value: function importWorker() {
      var _this4 = this;
      window.setInterval(function () {
        var _this4$state = _this4.state,
          import_in_progress = _this4$state.import_in_progress,
          workers = _this4$state.workers,
          products_get_in_progress = _this4$state.products_get_in_progress,
          import_setup = _this4$state.import_setup;
        var self = _this4;
        if (import_in_progress) {
          var _this4$state2 = _this4.state,
            selected_products = _this4$state2.selected_products,
            _import_setup = _this4$state2.import_setup;

          // check if we have any free workers
          var new_job_key = -1;
          Object.keys(workers).forEach(function (key) {
            var worker = workers[key];
            if (worker.status == 'free') {
              // first ASIN is not already done or in progress
              var new_asin = false;
              Object.keys(selected_products).forEach(function (key) {
                // if product is not already in queue in other worker
                if (!products_get_in_progress.includes(key)) {
                  new_asin = key;
                }
              });
              if (new_asin === false) {
                // stop the import in progress process
                self.setState({
                  import_in_progress: false
                });
                if (self.DEBUG) console.log("no more new products!");
              }
              if (new_asin) {
                // change current free worker status
                workers[key].status = 'busy';
                workers[key].when = new Date();
                workers[key].asin = new_asin;

                // add to products_get_in_progress queue
                products_get_in_progress.push(new_asin);

                // it's time to get the product and import
                var page_url = selected_products[new_asin].url;
                if (_import_setup.type == 'variations' && selected_products[new_asin].variation_asin.length > 0) {
                  page_url = selected_products[new_asin].variation_url;
                }
                self.add_to_log(new_asin, "===> ".concat(new_asin, " - Start Import"), 'start');
                self.add_to_log(new_asin, "request url: <a href=\"".concat(page_url, "\" target=\"_blank\">").concat(page_url, "</a>"), 'notice');

                // make the request to extention for cross domain passing
                window.postMessage({
                  type: "".concat(alias, "transporter"),
                  action: 'url-get-content',
                  params: {
                    'sub_action': 'product_page',
                    'url': page_url,
                    'call_id': new_asin,
                    'delay': Math.floor(Math.random() * 50) + 1,
                    'home_url': WooZoneNoAwsKeysImport.validation.home_url
                  }
                });
                self.setState({
                  products_get_in_progress: products_get_in_progress
                });

                // fake get product here ...
                if (false) { var in_time; }
              }
            }
          });
        }
      }, 200);
    }
  }, {
    key: "buildImportList",
    value: function buildImportList() {
      var _this5 = this;
      var _this$state3 = this.state,
        selected_products = _this$state3.selected_products,
        import_setup = _this$state3.import_setup,
        products_get_in_progress = _this$state3.products_get_in_progress,
        import_in_progress = _this$state3.import_in_progress,
        only_single = _this$state3.only_single;
      var self = this;
      return Object.keys(selected_products).length ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(alias, "import-block-wrapper")
      }, /*#__PURE__*/React.createElement("h3", null, "Import list"), /*#__PURE__*/React.createElement("ul", null, Object.keys(selected_products).map(function (key, index) {
        return /*#__PURE__*/React.createElement("li", {
          key: key
        }, /*#__PURE__*/React.createElement("span", {
          "class": "dashicons dashicons-no-alt",
          title: "Remove video from import list",
          onClick: function onClick() {
            if (confirm("Are you sure you want to delete...?")) {
              delete selected_products[key];
              self.setState(selected_products);
            }
          }
        }), /*#__PURE__*/React.createElement("a", {
          href: selected_products[key].url,
          target: "_blank"
        }, /*#__PURE__*/React.createElement("img", {
          src: selected_products[key].image
        })), /*#__PURE__*/React.createElement("h5", null, key), products_get_in_progress.includes(key) ? self.buildLoader() : '');
      })), /*#__PURE__*/React.createElement("form", {
        className: "".concat(alias, "import-form"),
        id: "".concat(alias, "import-form")
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(alias, "setting")
      }, /*#__PURE__*/React.createElement("h3", null, "Import product Type"), /*#__PURE__*/React.createElement("select", {
        className: "".concat(alias, "import-product-type"),
        value: import_setup.type,
        onChange: function onChange(event) {
          return _this5.setState({
            import_setup: _objectSpread(_objectSpread({}, import_setup), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, 'type', event.target.value))
          });
        }
      }, /*#__PURE__*/React.createElement("option", {
        value: "simple"
      }, "Simple Product")), import_setup.type == 'simple' ? /*#__PURE__*/React.createElement("p", null, "This option will import only the current product, with no variations.") : /*#__PURE__*/React.createElement("p", null, "This option will import this product parent and its variations according to the settings setup below.")
      /*<p style={{color: "red", fontWeight: "bold", fontSize: '15px'}}>Starting from 27.04.2023 the variable product importing feature is not available anymore from Amazon. We are working to find a fix for this as soon as possible, but until then, please import as simple product and if you wish after that make them a "Grouped Product" from WooCommerce.</p>*/), /*#__PURE__*/React.createElement("div", {
        className: "".concat(alias, "setting")
      }, /*#__PURE__*/React.createElement("h3", null, "Number of Images"), /*#__PURE__*/React.createElement(RangeControl, {
        value: import_setup.images,
        onChange: function onChange(val) {
          return _this5.setState({
            import_setup: _objectSpread(_objectSpread({}, import_setup), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, 'images', val))
          });
        },
        min: 0,
        step: 1,
        max: 100,
        name: "".concat(alias, "field-images")
      })), /*#__PURE__*/React.createElement("div", {
        className: "".concat(alias, "setting")
      }, /*#__PURE__*/React.createElement("h3", null, "Others"), /*#__PURE__*/React.createElement(CheckboxControl, {
        label: "Import attributes",
        checked: import_setup.attributes,
        onChange: function onChange(val) {
          return _this5.setState({
            import_setup: _objectSpread(_objectSpread({}, import_setup), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, 'attributes', !import_setup.attributes))
          });
        },
        name: "".concat(alias, "field-attributes")
      }), /*#__PURE__*/React.createElement(CheckboxControl, {
        label: "Spin on Import",
        checked: import_setup.spin,
        onChange: function onChange(val) {
          return _this5.setState({
            import_setup: _objectSpread(_objectSpread({}, import_setup), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, 'spin', !import_setup.spin))
          });
        },
        name: "".concat(alias, "field-spin")
      }), /*#__PURE__*/React.createElement(RangeControl, {
        value: import_setup.threads,
        onChange: function onChange(val) {
          return _this5.setState({
            import_setup: _objectSpread(_objectSpread({}, import_setup), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, 'threads', val))
          });
        },
        min: 1,
        label: "Nb. of threads simultaneously (how many products to import in the same time)",
        step: 1,
        max: 5,
        className: "".concat(alias, "field-threads"),
        name: "".concat(alias, "field-threads")
      })), /*#__PURE__*/React.createElement("div", {
        className: "".concat(alias, "setting")
      }, /*#__PURE__*/React.createElement("h3", null, "Import in"), /*#__PURE__*/React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: WooZoneNoAwsKeysImport.import_in_category
        }
      })), import_in_progress ? /*#__PURE__*/React.createElement("button", {
        className: "".concat(alias, "stop-btn"),
        onClick: function onClick(e) {
          e.preventDefault();
          _this5.setState({
            import_in_progress: false
          });
        }
      }, "Stop Import") : /*#__PURE__*/React.createElement("button", {
        className: "".concat(alias, "import-btn"),
        onClick: this.startImport.bind(this)
      }, "Import selected products"))) : '';
    }
  }, {
    key: "startImport",
    value: function startImport(event) {
      event.preventDefault();

      // create workers based on import setup number of threads
      var workers = {};
      var nb_of_workers = this.state.import_setup.threads;

      // we don't need more workers than selected products
      if (Object.keys(this.state.selected_products).length < nb_of_workers) {
        nb_of_workers = Object.keys(this.state.selected_products).length;
      }

      // create workers here
      for (var cc = 0; cc < nb_of_workers; cc++) {
        workers[cc] = {
          status: 'free',
          when: new Date(),
          asin: ''
        };
      }
      this.setState({
        workers: workers,
        import_in_progress: true
      });
    }
  }, {
    key: "buildLogList",
    value: function buildLogList() {
      var _this6 = this;
      var _this$state4 = this.state,
        logs = _this$state4.logs,
        imported_products = _this$state4.imported_products,
        view_log_asin = _this$state4.view_log_asin;
      if (Object.keys(logs).length > 0) {
        if (view_log_asin === false) {
          this.setState({
            view_log_asin: Object.keys(logs)[0]
          });
        }
        return /*#__PURE__*/React.createElement("div", {
          className: "".concat(alias, "import-log-wrapper ").concat(this.state.show_log ? '' : 'is_hide')
        }, /*#__PURE__*/React.createElement("a", {
          href: "#",
          title: "Click to Close this Panel",
          onClick: function onClick(e) {
            e.preventDefault();
            _this6.setState({
              show_log: !_this6.state.show_log
            });
          },
          className: "".concat(alias, "show-log-btn")
        }, /*#__PURE__*/React.createElement("span", {
          "class": "dashicons dashicons-info"
        }), /*#__PURE__*/React.createElement("span", null, "import log")), /*#__PURE__*/React.createElement("div", {
          className: "".concat(alias, "import-log-scrollbar")
        }, /*#__PURE__*/React.createElement("div", {
          className: "".concat(alias, "import-log-anchors-wrapper")
        }, /*#__PURE__*/React.createElement("ul", {
          className: "".concat(alias, "import-log-anchors")
        }, Object.keys(logs).map(function (asin, index) {
          // calculte the total number
          var total_time = 0;
          var last_key = Object.keys(logs[asin])[Object.keys(logs[asin]).length - 1];
          if (logs[asin][last_key].type == 'end') {
            total_time = ((logs[asin][last_key].when - logs[asin][0].when) / 1000).toFixed(2);
          }
          return /*#__PURE__*/React.createElement("li", {
            key: index,
            className: view_log_asin == asin ? "".concat(alias, "asin-selected") : '',
            onClick: function onClick() {
              _this6.setState({
                view_log_asin: asin
              });
            }
          }, total_time > 0 ? /*#__PURE__*/React.createElement("div", {
            className: "".concat(alias, "asin-total-times")
          }, total_time, " sec.") : /*#__PURE__*/React.createElement("div", null, "..."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, asin), !Object.keys(imported_products).includes(asin) ? /*#__PURE__*/React.createElement("span", {
            className: "".concat(alias, "asin-in-progress")
          }, "in progress") : /*#__PURE__*/React.createElement("span", {
            className: "".concat(alias, "asin-").concat(imported_products[asin].status)
          }, imported_products[asin].status)));
        }))), /*#__PURE__*/React.createElement("ul", {
          className: "".concat(alias, "import-log")
        }, Object.keys(logs).map(function (asin, index) {
          if (view_log_asin == asin) {
            return /*#__PURE__*/React.createElement("li", {
              key: index
            }, logs[asin].map(function (log, index) {
              return /*#__PURE__*/React.createElement("p", {
                key: index,
                className: "".concat(alias, "import-status-").concat(log.type)
              }, /*#__PURE__*/React.createElement("span", {
                className: "".concat(alias, "import-time")
              }, "[", "".concat(log.when.getHours(), ":").concat(log.when.getMinutes(), ":").concat(log.when.getSeconds(), ":").concat(log.when.getMilliseconds()), "]"), /*#__PURE__*/React.createElement("span", {
                className: "".concat(alias, "import-msg")
              }, /*#__PURE__*/React.createElement("span", {
                dangerouslySetInnerHTML: {
                  __html: log.msg
                }
              })));
            }));
          }
        }))));
      }
    }
  }, {
    key: "launchSearch",
    value: function launchSearch(event) {
      event.preventDefault();
      var _this$state5 = this.state,
        country = _this$state5.country,
        keyword = _this$state5.keyword,
        categ = _this$state5.categ,
        paged = _this$state5.paged,
        search_sort = _this$state5.search_sort,
        isfrom = _this$state5.isfrom;
      console.log('isfrom', isfrom);

      // reset results
      this.search_results_products = {};
      if ('pagination' !== isfrom) {
        paged = 1;
        this.setState({
          paged: 1,
          pagination: {}
        });
      }
      var search_url = "https://www.amazon.".concat(country, "/s?k=").concat(keyword, "&i=").concat(categ, "&page=").concat(paged);
      if ('' !== search_sort) {
        search_url = "".concat(search_url, "&s=").concat(search_sort);
      }

      // debug
      //search_url = '../page2.html';

      window.postMessage({
        type: "".concat(alias, "transporter"),
        action: 'url-get-content',
        params: {
          'sub_action': 'search',
          'url': search_url,
          'call_id': (0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneMakeID)(),
          'delay': 100,
          'home_url': WooZoneNoAwsKeysImport.validation.home_url
        }
      });
      this.setState({
        show_main_loader: true,
        search_result_page: null
      });
    }
  }, {
    key: "launchValidation",
    value: function launchValidation(event) {
      event.preventDefault();
      var ipc = $.trim(event.target.elements.ipc.value);
      var email = event.target.elements.email.value;
      var home_url = event.target.elements.home_url.value;
      var is_valid_ipc = true;
      if (ipc == '') {
        is_valid_ipc = false;
      }
      if (is_valid_ipc == false) {
        alert("invalid IPC code!");
      }
      var validate_url = "http://cc.aa-team.com/validation/validate.php?ipc=".concat(ipc, "&home_url=").concat(home_url, "&email=").concat(email, "&app=").concat(WooZoneNoAwsKeysImport.validation.plugin_alias, "-extension");
      // debug
      //search_url = '../page2.html';

      window.postMessage({
        type: "".concat(alias, "transporter"),
        action: 'url-get-content',
        params: {
          'sub_action': 'validation',
          'url': validate_url + "&no_cache=".concat((0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneMakeID)()),
          'call_id': (0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneMakeID)(),
          'delay': 1,
          'home_url': WooZoneNoAwsKeysImport.validation.home_url
        }
      });
      this.setState({
        show_main_loader: true
      });
    }
  }, {
    key: "removeAllFromQueue",
    value: function removeAllFromQueue(event) {
      event.preventDefault();
      if (confirm("Are you sure you want to remove all the products from import Queue?")) {
        this.setState({
          selected_products: {}
        });
      }
    }
  }, {
    key: "addAllToQueue",
    value: function addAllToQueue(event) {
      var _this7 = this;
      event.preventDefault();
      var new_products = {};
      Object.keys(this.search_results_products).forEach(function (key) {
        var product = _this7.search_results_products[key];
        if (!product.already_imported) {
          new_products[key] = product;
        }
      });
      this.setState({
        selected_products: _objectSpread(_objectSpread({}, this.state.selected_products), new_products)
      });
    }
  }, {
    key: "buildQuickMenu",
    value: function buildQuickMenu() {
      var _this8 = this;
      var _this$state6 = this.state,
        quick_menu = _this$state6.quick_menu,
        selected_products = _this$state6.selected_products;
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(alias, "quick-menu ").concat(quick_menu == 'open' ? '__is_opened' : '')
      }, /*#__PURE__*/React.createElement("h2", {
        onClick: function onClick() {
          return _this8.setState({
            quick_menu: quick_menu == 'open' ? 'close' : 'open'
          });
        }
      }, quick_menu == 'open' ? /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("span", {
        "class": "dashicons dashicons-arrow-down-alt2"
      }), "Close Quick Menu") : /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("span", {
        "class": "dashicons dashicons-arrow-up-alt2"
      }), "Open Quick Menu")), /*#__PURE__*/React.createElement("p", null, "This menu is contextual, you can find more or less actions according to your search."), /*#__PURE__*/React.createElement("ul", null, this.search_results_products && Object.keys(this.search_results_products).length ? /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#",
        onClick: this.addAllToQueue.bind(this)
      }, "Add All NEW Products to Queue")) : '', Object.keys(selected_products).length ? /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#",
        onClick: this.removeAllFromQueue.bind(this)
      }, "Empty Products Queue")) : '', /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#",
        onClick: function onClick(event) {
          event.preventDefault();
          window.scrollTo(0, 0);
        }
      }, /*#__PURE__*/React.createElement("span", {
        "class": "dashicons dashicons-arrow-up-alt"
      }), " Scroll to TOP")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "#",
        onClick: function onClick(event) {
          event.preventDefault();
          window.scrollTo(0, document.body.scrollHeight);
        }
      }, /*#__PURE__*/React.createElement("span", {
        "class": "dashicons dashicons-arrow-down-alt"
      }), " Scroll to BOTTOM"))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;
      var _this$state7 = this.state,
        country = _this$state7.country,
        keyword = _this$state7.keyword,
        search_result_page = _this$state7.search_result_page,
        paged = _this$state7.paged,
        show_main_loader = _this$state7.show_main_loader,
        import_setup = _this$state7.import_setup,
        products = _this$state7.products,
        imported_products = _this$state7.imported_products,
        is_chrome = _this$state7.is_chrome,
        extention_loaded = _this$state7.extention_loaded,
        ipc_is_valid = _this$state7.ipc_is_valid;
      if (is_chrome === false) {
        return /*#__PURE__*/React.createElement("div", {
          className: "".concat(alias, "get-google-chrome")
        }, /*#__PURE__*/React.createElement("img", {
          src: "".concat(WooZoneNoAwsKeysImport.assets_url, "images/chrome-logo.svg")
        }), /*#__PURE__*/React.createElement("h1", null, "This module works only in Google Chrome Browser and using ", /*#__PURE__*/React.createElement("a", {
          href: "https://chrome.google.com/webstore/detail/wzone-no-pa-api/pgaabedmnacicfkgnbfdodgmdmpbcnpk",
          target: "_blank"
        }, "WZone NO PA API Google Chrome extension"), "."), /*#__PURE__*/React.createElement("a", {
          className: "_is_btn",
          href: "https://www.google.com/chrome/",
          target: "_blank"
        }, "Download Chrome"));
      }
      if (extention_loaded === false) {
        return /*#__PURE__*/React.createElement("div", {
          className: "".concat(alias, "get-extension")
        }, /*#__PURE__*/React.createElement("div", {
          className: "".concat(alias, "validate-left")
        }, /*#__PURE__*/React.createElement("p", null, "Please check if the WZone NO PA API Chrome extension is installed!"), /*#__PURE__*/React.createElement("p", {
          className: "".concat(alias, "info-block")
        }, "In order to use this module please make sure you have the latest WZone NO PA API Chrome extension installed - V1.0.0 "), /*#__PURE__*/React.createElement("p", {
          className: "".concat(alias, "info-text")
        }, "After you install/update it please refresh this page."), /*#__PURE__*/React.createElement("div", {
          className: "".concat(alias, "get-extension-block")
        }, /*#__PURE__*/React.createElement("img", {
          src: "".concat(WooZoneNoAwsKeysImport.assets_url, "images/direct-import-logo.png")
        }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "WZone NO PA API Google Chrome extension"), /*#__PURE__*/React.createElement("a", {
          className: "_is_btn",
          href: "https://chrome.google.com/webstore/detail/wzone-no-pa-api/pgaabedmnacicfkgnbfdodgmdmpbcnpk",
          target: "_blank"
        }, "Add to Chrome")))), /*#__PURE__*/React.createElement("div", {
          className: "".concat(alias, "validate-right")
        }, /*#__PURE__*/React.createElement("img", {
          src: "".concat(WooZoneNoAwsKeysImport.assets_url, "images/API-NO.jpg")
        })));
      }
      if (ipc_is_valid === false) {
        return /*#__PURE__*/React.createElement(Fragment, null, show_main_loader ? this.buildLoader() : '', /*#__PURE__*/React.createElement("div", {
          className: "".concat(alias, "validate-extension")
        }, /*#__PURE__*/React.createElement("div", {
          className: "".concat(alias, "validate-left")
        }, /*#__PURE__*/React.createElement("h2", null, "WZone NO PA API Google Chrome Extension Validation."), /*#__PURE__*/React.createElement("div", {
          className: "".concat(alias, "validate-extension-info")
        }, /*#__PURE__*/React.createElement("p", null, "This code is used for validation so you can use the NO AWS KEYS Import Feature."), /*#__PURE__*/React.createElement("p", null, "You need to log into your CodeCanyon account and go to your \u201CDownloads\u201D page. Locate the plugin you purchased in your \u201CDownloads\u201D list and click on the \u201CLicense Certificate\u201D link next to the download link. After you have downloaded the certificate you can open it in a text editor such as Notepad and copy the Item Purchase Code."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
          target: "_blank",
          href: "http://docs.aa-team.com/woocommerce-amazon-affiliates/documentation/activate-plugin/"
        }, "Read more here. "))), /*#__PURE__*/React.createElement("form", {
          onSubmit: this.launchValidation.bind(this)
        }, /*#__PURE__*/React.createElement("input", {
          type: "hidden",
          name: "home_url",
          value: WooZoneNoAwsKeysImport.validation.home_url
        }), /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "ipc",
          defaultValue: WooZoneNoAwsKeysImport.validation.ipc ? WooZoneNoAwsKeysImport.validation.ipc : '',
          placeholder: "Enter your Envato Purchase Code here"
        }), /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "email",
          defaultValue: WooZoneNoAwsKeysImport.validation.email ? WooZoneNoAwsKeysImport.validation.email : '',
          placeholder: "Enter site owner email here"
        }), /*#__PURE__*/React.createElement("button", {
          className: "_is_btn"
        }, /*#__PURE__*/React.createElement("span", {
          "class": "dashicons dashicons-admin-network"
        }), " Unlock NO AWS KEYS Import"))), /*#__PURE__*/React.createElement("div", {
          className: "".concat(alias, "validate-right")
        }, /*#__PURE__*/React.createElement("img", {
          src: "".concat(WooZoneNoAwsKeysImport.assets_url, "images/API-NO.jpg")
        }))));
      }
      return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("form", {
        onSubmit: this.launchSearch.bind(this),
        className: "".concat(alias, "search-form"),
        ref: this.searchFormRef,
        "data-country": country,
        id: "WooZone-NAWS-search-form"
      }, /*#__PURE__*/React.createElement(_country_dropdown_class_js__WEBPACK_IMPORTED_MODULE_7__.AZON_Country_Dropdown, {
        onChange: function onChange(value) {
          var only_single = Object.keys(WooZoneNoAwsKeysImport.no_api_urls).includes(value) ? false : true;
          var new_data = {
            country: value,
            categ: 'aps',
            isfrom: '',
            only_single: only_single
          };
          if (only_single) {
            new_data['import_setup'] = _objectSpread(_objectSpread({}, import_setup), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, 'type', 'simple'));
          }
          _this9.setState(new_data);
        },
        defaultValue: country,
        list: (0,_amz_utils_js__WEBPACK_IMPORTED_MODULE_8__.WooZoneNoAWS_Country_List)()
      }), /*#__PURE__*/React.createElement("div", {
        className: "".concat(alias, "custom-select")
      }, this.buildCateg()), /*#__PURE__*/React.createElement("input", {
        id: "".concat(alias, "filed-keyword"),
        placeholder: "Search keyword here",
        type: "text",
        defaultValue: keyword,
        onChange: function onChange(e) {
          _this9.setState({
            keyword: e.target.value,
            isfrom: ''
          });
        }
      }), /*#__PURE__*/React.createElement("input", {
        id: "".concat(alias, "filed-paged"),
        ref: this.searchFieldPaged,
        type: "hidden",
        defaultValue: paged
      }), /*#__PURE__*/React.createElement("div", {
        className: "".concat(alias, "custom-select")
      }, /*#__PURE__*/React.createElement("select", {
        id: "".concat(alias, "filed-filter"),
        defaultValue: this.state.search_sort,
        onChange: function onChange(e) {
          _this9.setState({
            search_sort: e.target.value,
            isfrom: ''
          });
        }
      }, /*#__PURE__*/React.createElement("option", {
        value: ""
      }, "NONE"), /*#__PURE__*/React.createElement("option", {
        value: "relevanceblender"
      }, "Featured"), /*#__PURE__*/React.createElement("option", {
        value: "price-asc-rank"
      }, "Price: Low to High"), /*#__PURE__*/React.createElement("option", {
        value: "price-desc-rank"
      }, "Price: High to Low"), /*#__PURE__*/React.createElement("option", {
        value: "review-rank"
      }, "Avg. Customer Review"), /*#__PURE__*/React.createElement("option", {
        value: "date-desc-rank"
      }, "Newest Arrivals"))), /*#__PURE__*/React.createElement("button", {
        "class": "wz-search-btn",
        type: "submit"
      }, "Search for Products")), this.buildSearchResults(), show_main_loader ? this.buildLoader() : '', this.buildImportList(), this.buildLogList(), this.buildQuickMenu());
    }
  }]);
}(Component);
wp.domReady(function () {
  if (image_block_wrapper) render(/*#__PURE__*/React.createElement(WooZoneNoAWSImport, null), image_block_wrapper);
});

/***/ }),

/***/ "./src/country-dropdown.class.js":
/*!***************************************!*\
  !*** ./src/country-dropdown.class.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AZON_Country_Dropdown: () => (/* binding */ AZON_Country_Dropdown)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");





function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Component = wp.element.Component;
var alias = 'AZON-country-list';
var AZON_Country_Dropdown = /*#__PURE__*/function (_Component) {
  function AZON_Country_Dropdown(props) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AZON_Country_Dropdown);
    _this = _callSuper(this, AZON_Country_Dropdown, [props]);
    _this.state = {
      dropdown_state: false,
      current_value: false
    };
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AZON_Country_Dropdown, _Component);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AZON_Country_Dropdown, [{
    key: "buildListHtml",
    value: function buildListHtml() {
      var self = this;
      var list = this.props.list;
      var dropdown_state = this.state.dropdown_state;
      var list_html = list.map(function (__list, value) {
        return /*#__PURE__*/React.createElement("li", {
          onClick: self.setValue.bind(self, __list),
          key: __list.alias
        }, /*#__PURE__*/React.createElement("img", {
          src: window.WooZoneNoAwsKeysImport.assets_url + __list.flag
        }), /*#__PURE__*/React.createElement("span", null, __list.label));
      });
      return /*#__PURE__*/React.createElement("ul", {
        style: {
          display: dropdown_state ? "block" : "none"
        }
      }, list_html);
    }
  }, {
    key: "printDefaultValue",
    value: function printDefaultValue() {
      var self = this;
      var _this$props = this.props,
        list = _this$props.list,
        defaultValue = _this$props.defaultValue;
      var current_value = this.state.current_value;
      if (current_value != false && current_value != defaultValue) {
        defaultValue = current_value;
      }
      return list.map(function (__list) {
        if (__list.alias == defaultValue) {
          return /*#__PURE__*/React.createElement("span", {
            onClick: self.toggleDropdown.bind(self),
            key: __list.alias,
            className: alias + "-default"
          }, /*#__PURE__*/React.createElement("img", {
            src: window.WooZoneNoAwsKeysImport.assets_url + __list.flag
          }), /*#__PURE__*/React.createElement("span", null, __list.label));
        }
      });
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.setState({
        current_value: value.alias,
        dropdown_state: false
      });

      // update parent props
      this.props.onChange(value.alias);
    }
  }, {
    key: "toggleDropdown",
    value: function toggleDropdown() {
      this.setState({
        dropdown_state: !this.state.dropdown_state
      });
    }
  }, {
    key: "render",
    value: function render() {
      var list = this.props.list;
      if (!list) {
        return /*#__PURE__*/React.createElement("p", null, "No list provided!");
      }
      return /*#__PURE__*/React.createElement("div", {
        className: alias + "-wrapper"
      }, this.printDefaultValue(), this.buildListHtml());
    }
  }]);
}(Component);


/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nValidationError: Invalid options object. Mini CSS Extract Plugin Loader has been initialized using an options object that does not match the API schema.\n - options has an unknown property 'sourceMap'. These properties are valid:\n   object { publicPath?, emit?, esModule?, layer?, defaultExport? }\n    at validate (/mnt/ssd/www/wp-plugins/WooZoneV9/react-sources/noaws_import/node_modules/schema-utils/dist/validate.js:191:11)\n    at Object.getOptions (/mnt/ssd/www/wp-plugins/WooZoneV9/react-sources/noaws_import/node_modules/webpack/lib/NormalModule.js:685:19)\n    at Object.pitch (/mnt/ssd/www/wp-plugins/WooZoneV9/react-sources/noaws_import/node_modules/mini-css-extract-plugin/dist/loader.js:84:24)");

/***/ }),

/***/ "./node_modules/react-paginate/dist/react-paginate.js":
/*!************************************************************!*\
  !*** ./node_modules/react-paginate/dist/react-paginate.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,a){ true?module.exports=a(__webpack_require__(/*! react */ "./node_modules/react/index.js")):0}(this,(e=>(()=>{var a={703:(e,a,t)=>{"use strict";var r=t(414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,i,s){if(s!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:n};return t.PropTypes=t,t}},697:(e,a,t)=>{e.exports=t(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:a=>{"use strict";a.exports=e}},t={};function r(e){var n=t[e];if(void 0!==n)return n.exports;var i=t[e]={exports:{}};return a[e](i,i.exports,r),i.exports}r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a}),a},r.d=(e,a)=>{for(var t in a)r.o(a,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";r.r(n),r.d(n,{default:()=>k});var e=r(98),a=r.n(e),t=r(697),i=r.n(t);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}var o=function(e){var t=e.pageClassName,r=e.pageLinkClassName,n=e.page,i=e.selected,o=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,p=e.pageSelectedHandler,u=e.href,g=e.extraAriaContext,d=e.pageLabelBuilder,f=e.rel,b=e.ariaLabel||"Page "+n+(g?" "+g:""),v=null;return i&&(v="page",b=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+o:o,void 0!==r?void 0!==l&&(r=r+" "+l):r=l),a().createElement("li",{className:t},a().createElement("a",s({rel:f,role:u?void 0:"button",className:r,href:u,tabIndex:i?"-1":"0","aria-label":b,"aria-current":v,onKeyPress:p},c(p)),d(n)))};o.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};const l=o;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}var p=function(e){var t=e.breakLabel,r=e.breakAriaLabel,n=e.breakClassName,i=e.breakLinkClassName,s=e.breakHandler,o=e.getEventListener,l=n||"break";return a().createElement("li",{className:l},a().createElement("a",c({className:i,role:"button",tabIndex:"0","aria-label":r,onKeyPress:s},o(s)),t))};p.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabel:i().string,breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};const u=p;function g(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!=e?e:a}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)}function b(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,a){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e},v(e,a)}function h(e,a){if(a&&("object"===d(a)||"function"==typeof a))return a;if(void 0!==a)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function C(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var P=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&v(e,a)}(o,e);var t,r,n,i,s=(n=o,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=y(n);if(i){var t=y(this).constructor;e=Reflect.construct(a,arguments,t)}else e=a.apply(this,arguments);return h(this,e)});function o(e){var t,r;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,o),C(m(t=s.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;t.handleClick(e,null,a>0?a-1:void 0,{isPrevious:!0})})),C(m(t),"handleNextPage",(function(e){var a=t.state.selected,r=t.props.pageCount;t.handleClick(e,null,a<r-1?a+1:void 0,{isNext:!0})})),C(m(t),"handlePageSelected",(function(e,a){if(t.state.selected===e)return t.callActiveCallback(e),void t.handleClick(a,null,void 0,{isActive:!0});t.handleClick(a,null,e)})),C(m(t),"handlePageChange",(function(e){t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),C(m(t),"getEventListener",(function(e){return C({},t.props.eventListener,e)})),C(m(t),"handleClick",(function(e,a,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.isPrevious,s=void 0!==i&&i,o=n.isNext,l=void 0!==o&&o,c=n.isBreak,p=void 0!==c&&c,u=n.isActive,g=void 0!==u&&u;e.preventDefault?e.preventDefault():e.returnValue=!1;var d=t.state.selected,f=t.props.onClick,b=r;if(f){var v=f({index:a,selected:d,nextSelectedPage:r,event:e,isPrevious:s,isNext:l,isBreak:p,isActive:g});if(!1===v)return;Number.isInteger(v)&&(b=v)}void 0!==b&&t.handlePageChange(b)})),C(m(t),"handleBreakClick",(function(e,a){var r=t.state.selected;t.handleClick(a,e,r<e?t.getForwardJump():t.getBackwardJump(),{isBreak:!0})})),C(m(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),C(m(t),"callActiveCallback",(function(e){void 0!==t.props.onPageActive&&"function"==typeof t.props.onPageActive&&t.props.onPageActive({selected:e})})),C(m(t),"getElementPageRel",(function(e){var a=t.state.selected,r=t.props,n=r.nextPageRel,i=r.prevPageRel,s=r.selectedPageRel;return a-1===e?i:a===e?s:a+1===e?n:void 0})),C(m(t),"pagination",(function(){var e=[],r=t.props,n=r.pageRangeDisplayed,i=r.pageCount,s=r.marginPagesDisplayed,o=r.breakLabel,l=r.breakClassName,c=r.breakLinkClassName,p=r.breakAriaLabels,g=t.state.selected;if(i<=n)for(var d=0;d<i;d++)e.push(t.getPageElement(d));else{var f=n/2,b=n-f;g>i-n/2?f=n-(b=i-g):g<n/2&&(b=n-(f=g));var v,h,m=function(e){return t.getPageElement(e)},y=[];for(v=0;v<i;v++){var C=v+1;if(C<=s)y.push({type:"page",index:v,display:m(v)});else if(C>i-s)y.push({type:"page",index:v,display:m(v)});else if(v>=g-f&&v<=g+(0===g&&n>1?b-1:b))y.push({type:"page",index:v,display:m(v)});else if(o&&y.length>0&&y[y.length-1].display!==h&&(n>0||s>0)){var P=v<g?p.backward:p.forward;h=a().createElement(u,{key:v,breakAriaLabel:P,breakLabel:o,breakClassName:l,breakLinkClassName:c,breakHandler:t.handleBreakClick.bind(null,v),getEventListener:t.getEventListener}),y.push({type:"break",index:v,display:h})}}y.forEach((function(a,t){var r=a;"break"===a.type&&y[t-1]&&"page"===y[t-1].type&&y[t+1]&&"page"===y[t+1].type&&y[t+1].index-y[t-1].index<=2&&(r={type:"page",index:a.index,display:m(a.index)}),e.push(r.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),r=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:r},t}return t=o,(r=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext,n=e.pageCount,i=e.forcePage;void 0===a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(n)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(n,"). Did you forget a Math.ceil()?")),void 0!==a&&a>n-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(a," > ").concat(n-1,").")),void 0!==i&&i>n-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(n-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount,n=a.hrefAllControls;if(t)return n||e>=0&&e<r?t(e+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var t=this.state.selected,r=this.props,n=r.pageClassName,i=r.pageLinkClassName,s=r.activeClassName,o=r.activeLinkClassName,c=r.extraAriaContext,p=r.pageLabelBuilder;return a().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,rel:this.getElementPageRel(e),pageClassName:n,pageLinkClassName:i,activeClassName:s,activeLinkClassName:o,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:p,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var t=this.props,r=t.disabledClassName,n=t.disabledLinkClassName,i=t.pageCount,s=t.className,o=t.containerClassName,l=t.previousLabel,c=t.previousClassName,p=t.previousLinkClassName,u=t.previousAriaLabel,d=t.prevRel,b=t.nextLabel,v=t.nextClassName,h=t.nextLinkClassName,m=t.nextAriaLabel,y=t.nextRel,C=this.state.selected,P=0===C,k=C===i-1,x="".concat(g(c)).concat(P?" ".concat(g(r)):""),L="".concat(g(v)).concat(k?" ".concat(g(r)):""),N="".concat(g(p)).concat(P?" ".concat(g(n)):""),O="".concat(g(h)).concat(k?" ".concat(g(n)):""),R=P?"true":"false",E=k?"true":"false";return a().createElement("ul",{className:s||o,role:"navigation","aria-label":"Pagination"},a().createElement("li",{className:x},a().createElement("a",f({className:N,href:this.getElementHref(C-1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":R,"aria-label":u,rel:d},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),a().createElement("li",{className:L},a().createElement("a",f({className:O,href:this.getElementHref(C+1),tabIndex:k?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":E,"aria-label":m,rel:y},this.getEventListener(this.handleNextPage)),b)))}}])&&b(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),o}(e.Component);C(P,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabels:i().shape({forward:i().string,backward:i().string}),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),C(P,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const k=P})(),n})()));
//# sourceMappingURL=react-paginate.js.map

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var ReactVersion = '18.3.1';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: null
};

var ReactCurrentActQueue = {
  current: null,
  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
  isBatchingLegacy: false,
  didScheduleLegacyUpdate: false
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      printWarning('warn', format, args);
    }
  }
}
function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var assign = Object.assign;

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (element === null || element === undefined) {
    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
  }

  var propName; // Original props are copied

  var props = assign({}, element.props); // Reserved names are extracted

  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    {
      checkKeyStringCoercion(element.key);
    }

    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        {
          // The `if` statement here prevents auto-disabling of the safe
          // coercion ESLint rule, so we must manually disable it below.
          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
            checkKeyStringCoercion(mappedChild.key);
          }
        }

        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        // eslint-disable-next-line react-internal/safe-string-coercion
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      // eslint-disable-next-line react-internal/safe-string-coercion
      var childrenString = String(children);
      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    throw new Error('React.Children.only expected to receive a single React element child.');
  }

  return children;
}

function createContext(defaultValue) {
  // TODO: Second argument used to be an optional `calculateChangedBits`
  // function. Warn to reserve for future use?
  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null,
    // Add these to use same hidden class in VM as ServerContext
    _defaultValue: null,
    _globalName: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.
    // This might throw either because it's missing or throws. If so, we treat it
    // as still uninitialized and try again next time. Which is the same as what
    // happens if the ctor or any wrappers processing the ctor throws. This might
    // end up fixing it if the resolution was a concurrency bug.

    thenable.then(function (moduleObject) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = moduleObject;
      }
    }, function (error) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });

    if (payload._status === Uninitialized) {
      // In case, we're still uninitialized, then we're waiting for the thenable
      // to resolve. Set it as pending in the meantime.
      var pending = payload;
      pending._status = Pending;
      pending._result = thenable;
    }
  }

  if (payload._status === Resolved) {
    var moduleObject = payload._result;

    {
      if (moduleObject === undefined) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
      }
    }

    {
      if (!('default' in moduleObject)) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
      }
    }

    return moduleObject.default;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: Uninitialized,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.forwardRef((props, ref) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!render.name && !render.displayName) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.memo((props) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!type.name && !type.displayName) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  {
    if (dispatcher === null) {
      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
    }
  } // Will result in a null access error if accessed outside render phase. We
  // intentionally don't throw our own error because this is in a hot path.
  // Also helps ensure this is inlined.


  return dispatcher;
}
function useContext(Context) {
  var dispatcher = resolveDispatcher();

  {
    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useInsertionEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useInsertionEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}
function useTransition() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useTransition();
}
function useDeferredValue(value) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useDeferredValue(value);
}
function useId() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useId();
}
function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

function startTransition(scope, options) {
  var prevTransition = ReactCurrentBatchConfig.transition;
  ReactCurrentBatchConfig.transition = {};
  var currentTransition = ReactCurrentBatchConfig.transition;

  {
    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
  }

  try {
    scope();
  } finally {
    ReactCurrentBatchConfig.transition = prevTransition;

    {
      if (prevTransition === null && currentTransition._updatedFibers) {
        var updatedFibersCount = currentTransition._updatedFibers.size;

        if (updatedFibersCount > 10) {
          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
        }

        currentTransition._updatedFibers.clear();
      }
    }
  }
}

var didWarnAboutMessageChannel = false;
var enqueueTaskImpl = null;
function enqueueTask(task) {
  if (enqueueTaskImpl === null) {
    try {
      // read require off the module object to get around the bundlers.
      // we don't want them to detect a require and bundle a Node polyfill.
      var requireString = ('require' + Math.random()).slice(0, 7);
      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
      // version of setImmediate, bypassing fake timers if any.

      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
    } catch (_err) {
      // we're in a browser
      // we can't use regular timers because they may still be faked
      // so we try MessageChannel+postMessage instead
      enqueueTaskImpl = function (callback) {
        {
          if (didWarnAboutMessageChannel === false) {
            didWarnAboutMessageChannel = true;

            if (typeof MessageChannel === 'undefined') {
              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
            }
          }
        }

        var channel = new MessageChannel();
        channel.port1.onmessage = callback;
        channel.port2.postMessage(undefined);
      };
    }
  }

  return enqueueTaskImpl(task);
}

var actScopeDepth = 0;
var didWarnNoAwaitAct = false;
function act(callback) {
  {
    // `act` calls can be nested, so we track the depth. This represents the
    // number of `act` scopes on the stack.
    var prevActScopeDepth = actScopeDepth;
    actScopeDepth++;

    if (ReactCurrentActQueue.current === null) {
      // This is the outermost `act` scope. Initialize the queue. The reconciler
      // will detect the queue and use it instead of Scheduler.
      ReactCurrentActQueue.current = [];
    }

    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
    var result;

    try {
      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
      // set to `true` while the given callback is executed, not for updates
      // triggered during an async event, because this is how the legacy
      // implementation of `act` behaved.
      ReactCurrentActQueue.isBatchingLegacy = true;
      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
      // which flushed updates immediately after the scope function exits, even
      // if it's an async function.

      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
        var queue = ReactCurrentActQueue.current;

        if (queue !== null) {
          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
          flushActQueue(queue);
        }
      }
    } catch (error) {
      popActScope(prevActScopeDepth);
      throw error;
    } finally {
      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
    }

    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
      // for it to resolve before exiting the current scope.

      var wasAwaited = false;
      var thenable = {
        then: function (resolve, reject) {
          wasAwaited = true;
          thenableResult.then(function (returnValue) {
            popActScope(prevActScopeDepth);

            if (actScopeDepth === 0) {
              // We've exited the outermost act scope. Recursively flush the
              // queue until there's no remaining work.
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }, function (error) {
            // The callback threw an error.
            popActScope(prevActScopeDepth);
            reject(error);
          });
        }
      };

      {
        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
          // eslint-disable-next-line no-undef
          Promise.resolve().then(function () {}).then(function () {
            if (!wasAwaited) {
              didWarnNoAwaitAct = true;

              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
            }
          });
        }
      }

      return thenable;
    } else {
      var returnValue = result; // The callback is not an async function. Exit the current scope
      // immediately, without awaiting.

      popActScope(prevActScopeDepth);

      if (actScopeDepth === 0) {
        // Exiting the outermost act scope. Flush the queue.
        var _queue = ReactCurrentActQueue.current;

        if (_queue !== null) {
          flushActQueue(_queue);
          ReactCurrentActQueue.current = null;
        } // Return a thenable. If the user awaits it, we'll flush again in
        // case additional work was scheduled by a microtask.


        var _thenable = {
          then: function (resolve, reject) {
            // Confirm we haven't re-entered another `act` scope, in case
            // the user does something weird like await the thenable
            // multiple times.
            if (ReactCurrentActQueue.current === null) {
              // Recursively flush the queue until there's no remaining work.
              ReactCurrentActQueue.current = [];
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }
        };
        return _thenable;
      } else {
        // Since we're inside a nested `act` scope, the returned thenable
        // immediately resolves. The outer scope will flush the queue.
        var _thenable2 = {
          then: function (resolve, reject) {
            resolve(returnValue);
          }
        };
        return _thenable2;
      }
    }
  }
}

function popActScope(prevActScopeDepth) {
  {
    if (prevActScopeDepth !== actScopeDepth - 1) {
      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
    }

    actScopeDepth = prevActScopeDepth;
  }
}

function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
  {
    var queue = ReactCurrentActQueue.current;

    if (queue !== null) {
      try {
        flushActQueue(queue);
        enqueueTask(function () {
          if (queue.length === 0) {
            // No additional work was scheduled. Finish.
            ReactCurrentActQueue.current = null;
            resolve(returnValue);
          } else {
            // Keep flushing work until there's none left.
            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
          }
        });
      } catch (error) {
        reject(error);
      }
    } else {
      resolve(returnValue);
    }
  }
}

var isFlushing = false;

function flushActQueue(queue) {
  {
    if (!isFlushing) {
      // Prevent re-entrance.
      isFlushing = true;
      var i = 0;

      try {
        for (; i < queue.length; i++) {
          var callback = queue[i];

          do {
            callback = callback(true);
          } while (callback !== null);
        }

        queue.length = 0;
      } catch (error) {
        // If something throws, leave the remaining callbacks on the queue.
        queue = queue.slice(i + 1);
        throw error;
      } finally {
        isFlushing = false;
      }
    }
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.act = act;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.startTransition = startTransition;
exports.unstable_act = act;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useDeferredValue = useDeferredValue;
exports.useEffect = useEffect;
exports.useId = useId;
exports.useImperativeHandle = useImperativeHandle;
exports.useInsertionEffect = useInsertionEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.useSyncExternalStore = useSyncExternalStore;
exports.useTransition = useTransition;
exports.version = ReactVersion;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, e);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/app.jsx");
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.scss");
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.build.noaws_import.js.map