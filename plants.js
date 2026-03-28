// ═══════════════════════════════════════════════════════════════
//  GEOWIKIPLANTS — plants.js
//  Ajoute tes plantes ici et re-upload ce fichier sur GitHub.
//  Pour ajouter une plante, copie un bloc existant et remplis
//  les champs. Les photos sont des URLs (imgur, etc.).
// ═══════════════════════════════════════════════════════════════

const PLANTS = [

  // ── EXEMPLE — remplace ou complète ──────────────────────────
  {
    id: 'acrocomia-intumescens',           // identifiant unique (pas d'espaces, pas d'accents)
    sci: 'Acrocomia intumescens',          // nom scientifique
    common: 'Macaúba-Barriguda Palm',      // nom commun en anglais
    continent: 'south-america',            // africa | asia | europe | north-america | south-america | oceania
    category: 'palms',                     // palms | trees | euphorbias | succulents | crops | others | bromeliads | cacti | bamboos | hedges | flowers | ferns
    diff: 3,                               // difficulté d'identification : 1 (facile) | 2 | 3 (difficile)
    freq: 1,                               // fréquence d'apparition   : 1 (rare)    | 2 | 3 (commun)
    desc: '<em>Acrocomia intumescens</em> is a solitary palm of 8–15 m, very typical of north-eastern Brazil. It belongs to the same family as the Macaw Palm, explaining its resemblance. Recognised by its thick, bottle-shaped stipe. Crown composed of long drooping pinnate leaves. Found along the coast of Pernambuco and Paraíba.',
    tips: [
      'Swollen bottle-shaped trunk — unmistakable silhouette',
      'Long arching pinnate leaves forming a rounded crown',
      'Restricted to the NE Brazilian coastal strip'
    ],
    similar: ['Acrocomia aculeata', 'Syagrus coronata'],  // noms scientifiques des espèces similaires
    family: 'Arecaceae',
    genus: 'Acrocomia',
    countries: ['Brazil'],                 // liste des pays (noms en anglais)
    inat: 'https://www.inaturalist.org/taxa/82497-Acrocomia-intumescens',
    wiki: 'https://en.wikipedia.org/wiki/Acrocomia_intumescens',
    photos: [
      // URLs directes vers tes images (imgur, cloudinary, etc.)
      // 'https://i.imgur.com/XXXXXXX.jpg',
    ],
    maps: [
      // { label: 'Brazil', img: 'https://i.imgur.com/XXXXXXX.png' },
      // { label: 'Ghana',  img: 'https://i.imgur.com/YYYYYYY.png' },
    ]
  },

  // ── AJOUTE TES PLANTES ICI ──────────────────────────────────
  // {
  //   id: '',
  //   sci: '',
  //   common: '',
  //   continent: '',
  //   category: '',
  //   diff: 1,
  //   freq: 1,
  //   desc: '',
  //   tips: [],
  //   similar: [],
  //   family: '',
  //   genus: '',
  //   countries: [],
  //   inat: '',
  //   wiki: '',
  //   photos: [],
  //   maps: []
  // },

];
