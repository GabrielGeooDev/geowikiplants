// ═══════════════════════════════════════════════════════════════
//  GEOWIKIPLANTS — plants-africa.js
//  Contient toutes les espèces du continent africain.
//
//  Catégories disponibles :
//    palms | trees | euphorbias | succulents | crops | others
//
//  diff  : 1 = facile   | 2 = moyen    | 3 = difficile
//  freq  : 1 = rare     | 2 = uncommon | 3 = commun
//
//  photos & maps : URLs directes (imgur, cloudinary, etc.)
//    maps : [{ label: 'Ghana', img: 'https://...' }, ...]
// ═══════════════════════════════════════════════════════════════

const PLANTS_AFRICA = [

{
    id: 'borassus-akeassii',           // identifiant unique (pas d'espaces, pas d'accents)
    sci: 'Borassus akeassii',          // nom scientifique
    common: 'West African Palmyra Palm',      // nom commun en anglais
    continent: 'africa',            // africa | asia | europe | north-america | south-america | oceania
    category: 'palms',                     // palms | trees | euphorbias | succulents | crops | others | bromeliads | cacti | bamboos | hedges | flowers | ferns
    diff: 1,                               // difficulté d'identification : 1 (facile) | 2 | 3 (difficile)
    freq: 3,                               // fréquence d'apparition   : 1 (rare)    | 2 | 3 (commun)
    desc: '<em>Texte en gras</em> à faire plus tard.',
    tips: [
      'test',
      'test',
      'test'
    ],
    similar: ['Borassus aethiopum'],  // noms scientifiques des espèces similaires
    family: 'Arecaceae',
    genus: 'Borassus',
    countries: ['Senegal'],                 // liste des pays (noms en anglais)
    inat: 'https://www.inaturalist.org/taxa/364450-Borassus-akeassii',
    wiki: 'https://en.wikipedia.org/wiki/Borassus_akeassii',
    photos: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/P1080424-_Borassus_akeassii_-_Casamance.jpg/960px-P1080424-_Borassus_akeassii_-_Casamance.jpg'
      // URLs directes vers tes images (imgur, cloudinary, etc.)
      // 'https://i.imgur.com/XXXXXXX.jpg',
    ],
    maps: [
      // { label: 'Brazil', img: 'https://i.imgur.com/XXXXXXX.png' },
      // { label: 'Ghana',  img: 'https://i.imgur.com/YYYYYYY.png' },
    ]
  },

{
  id: 'borassus-aethiopum',
  sci: 'Borassus aethiopum',
  common: 'African Palmyra Palm',
  continent: 'africa',
  category: 'palms',
  diff: 1,
  freq: 3,
  desc: 'Description ici. <em>Nom italique possible.</em>',
  tips: [
  'Trunk swollen in the middle',
  'Fan-shaped leaves',
  ],
  similar: ['Hyphaene thebaica'],
  family: 'Arecaceae',
  genus: 'Borassus',
  countries: ['Ghana', 'Nigeria', 'Kenya'],
  inat: 'https://www.inaturalist.org/taxa/340320-Borassus-aethiopum',
  wiki: 'https://en.wikipedia.org/wiki/...',
  photos: [],
  maps: []
  },

{
    id: 'raphia-australis',
    sci: 'Raphia australis',
    common: 'Kosi Palm',
    continent: 'africa',
    category: 'palms',
    diff: 3,
    freq: 1,
    desc: '<em>Texte en gras</em> à faire plus tard.',
    tips: [
      'large leaves that grow upward',
    ],
    similar: [],
    family: 'Arecaceae',
    genus: 'Raphia',
    countries: ['South Africa'],
    inat: 'https://www.inaturalist.org/taxa/365973-Raphia-australis',
    wiki: 'https://en.wikipedia.org/wiki/Raphia_australis',
    photos: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Raphia_australis.jpg/1280px-Raphia_australis.jpg', 'https://res.cloudinary.com/dpmxwhdoi/image/upload/v1774715372/Capture_d_%C3%A9cran_2026-03-28_172858_ru8f7n.png'
      // URLs directes vers tes images (imgur, cloudinary, etc.)
      // 'https://i.imgur.com/XXXXXXX.jpg',
    ],
    maps: [
      { label: 'South Africa', img: 'https://res.cloudinary.com/dpmxwhdoi/image/upload/v1774714653/raffiamap_pomj8c.png' },
    ]
  },
  // ── EXEMPLE ─────────────────────────────────────────────────
  // {
  //   id: 'borassus-aethiopum',
  //   sci: 'Borassus aethiopum',
  //   common: 'African Palmyra Palm',
  //   continent: 'africa',
  //   category: 'palms',
  //   diff: 2,
  //   freq: 3,
  //   desc: 'Description ici. <em>Nom italique possible.</em>',
  //   tips: [
  //     'Trunk swollen in the middle',
  //     'Fan-shaped leaves',
  //   ],
  //   similar: ['Hyphaene thebaica'],
  //   family: 'Arecaceae',
  //   genus: 'Borassus',
  //   countries: ['Ghana', 'Nigeria', 'Kenya'],
  //   inat: 'https://www.inaturalist.org/taxa/...',
  //   wiki: 'https://en.wikipedia.org/wiki/...',
  //   photos: [],
  //   maps: []
  // },

];
