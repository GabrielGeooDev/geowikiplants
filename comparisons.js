// ═══════════════════════════════════════════════════════════════
//  GEOWIKIPLANTS — comparisons.js
//  Pages de différenciation entre espèces similaires.
//
//  Chaque entrée correspond à une page de comparaison accessible
//  depuis la fiche des plantes concernées.
//
//  FORMAT :
//  {
//    id: 'identifiant-unique',          // utilisé dans l'URL
//    title: 'Titre de la page',
//    intro: 'Texte intro optionnel',
//    plantIds: ['id-plante-1', 'id-plante-2', ...],  // IDs des plantes comparées
//    criteria: [                         // critères du tableau comparatif
//      {
//        label: 'Nom du critère',        // ex: 'Trunk shape'
//        values: ['Valeur p1', 'Valeur p2', ...]  // une valeur par plante
//      },
//    ]
//  }
// ═══════════════════════════════════════════════════════════════

const COMPARISONS = [

  // ── EXEMPLE : Hyphaene africains ────────────────────────────
  {
    id: 'hyphaene-africa',
    continent: 'africa',                 // ← continent de la comparaison
    title: 'African Doum Palms — How to tell them apart',
    intro: 'Three Hyphaene species are commonly encountered in African GeoGuessr coverage. All share the characteristic forked trunk, but their distribution, leaf colour and fruit shape differ significantly.',
    plantIds: ['hyphaene-coriacea', 'hyphaene-petersiana', 'hyphaene-thebaica', 'hyphaene-compressa'],
    criteria: [
      {
        label: 'Region',
        values: [
          'SE Africa (Mozambique, KZN coast)',
          'SW Africa (Namibia, Botswana)',
          'N Africa & Sahel (Egypt to Senegal)',
          'E Africa (Kenya, Somalia)'
        ]
        // photos: [] — pas de photos pour ce critère (optionnel)
      },
      {
        label: 'Trunk forking',
        values: [
          'Forked, often low',
          'Forked, often higher',
          'Repeatedly forked',
          'Forked, slender'
        ],
        // Ajoute des photos pour ce critère :
        // photos: [
        //   'https://res.cloudinary.com/.../coriacea-trunk.jpg',
        //   'https://res.cloudinary.com/.../petersiana-trunk.jpg',
        //   'https://res.cloudinary.com/.../thebaica-trunk.jpg',
        //   null,  // pas de photo pour cette espèce sur ce critère
        // ]
      },
      {
        label: 'Leaf colour',
        values: [
          'Blue-green',
          'Grey-green',
          'Grey-green',
          'Green'
        ]
      },
      {
        label: 'Fruit',
        values: [
          'Reddish-brown, rounded',
          'Brown, elongated',
          'Orange-brown, large',
          'Brown, smaller'
        ]
      },
      {
        label: 'Landscape clue',
        values: [
          'Coastal bush, near water',
          'Dry savanna, floodplains',
          'Desert edges, oases, river banks',
          'Dry coastal bush, scrubland'
        ]
      }
    ]
  },

  // ── SABAL PALMS ─────────────────────────────────────────────
  {
    id: 'sabal-north-america',
    continent: 'north-america',
    title: 'Sabal Palms of North America — How to tell them apart',
    intro: 'Several Sabal species grow across North America, from the southeastern US coast to Mexico and Central America. They all share the characteristic fan-shaped leaves, but differ in size, trunk development, leaf colour and distribution.',
    plantIds: ['sabal-palmetto-na', 'sabal-mexicana', 'sabal-mauritiiformis-na', 'sabal-minor-na', 'sabal-uresana', 'sabal-rosei'],
    criteria: [
      {
        label: 'Region',
        values: [
          'SE United States (Florida, Georgia, Carolinas)',
          'S Texas, NE Mexico',
          'Mexico to Colombia & Venezuela',
          'SE United States (Gulf Coast, low understory)',
          'NW Mexico (Sonora, Sinaloa)',
          'W Mexico (Nayarit)',
        ]
      },
      {
        label: 'Trunk',
        values: [
          'Tall, solitary, erect — up to 25 m',
          'Tall, solitary — up to 15 m',
          'Tall, slender — up to 20 m',
          'Usually trunkless or very short trunk',
          'Tall, robust — up to 20 m',
          'Tall, slender',
        ]
      },
      {
        label: 'Leaf colour',
        values: [
          'Blue-green to green',
          'Green',
          'Blue-green',
          'Green to blue-green',
          'Strongly blue-grey',
          'Green',
        ]
      },
      {
        label: 'Leaf size',
        values: [
          'Large fan, up to 2 m wide',
          'Large fan',
          'Large fan, drooping tips',
          'Small fan, grows close to ground',
          'Very large, pale blue fan',
          'Medium fan',
        ]
      },
      {
        label: 'GeoGuessr clue',
        values: [
          'State palm of Florida & SC — coastal and urban settings',
          'Common along Texas Gulf Coast and NE Mexico roads',
          'Tropical landscapes, often in wetter zones',
          'Hidden in undergrowth, Florida scrub and swamps',
          'Baja California and NW Mexico only',
          'Nayarit coast, Mexico only',
        ]
      }
    ]
  },

  // ── WESTERN US PINES ────────────────────────────────────────
  {
    id: 'pines-western-us',
    continent: 'north-america',
    title: 'Western US Pines — How to tell them apart',
    intro: 'Several large pines dominate the mountain ranges and high plains of the western United States and Mexico. Ponderosa and Jeffrey are easily confused; Lodgepole is slimmer; Lumholtz and Patula are Mexican species with drooping needles.',
    plantIds: ['pinus-ponderosa-na', 'pinus-jeffreyi-na', 'pinus-contorta-na', 'pinus-arizonica-na', 'pinus-lumholtzii', 'pinus-hartwegii'],
    criteria: [
      {
        label: 'Region',
        values: [
          'W US & Canada, W Mexico — very widespread',
          'Sierra Nevada (California), SW Oregon, Baja',
          'W US & Canada — widespread, coastal to alpine',
          'SE Arizona, SW New Mexico, NW Mexico',
          'W Mexico (Sierra Madre Occidental)',
          'Mexico & Guatemala highlands',
        ]
      },
      {
        label: 'Needles',
        values: [
          '3 per bundle, 12–25 cm, yellow-green',
          '3 per bundle, 12–25 cm, blue-green, vanilla scent',
          '2 per bundle, short 3–7 cm, twisted',
          '3–5 per bundle, 8–18 cm',
          '3 per bundle, very long 25–45 cm, drooping',
          '3–5 per bundle, 10–20 cm',
        ]
      },
      {
        label: 'Bark',
        values: [
          'Orange-brown plates ("puzzle bark") on mature trees',
          'Similar to Ponderosa but darker, no turpentine smell',
          'Thin, scaly, grey-brown on young trees',
          'Dark, rough, furrowed',
          'Dark, rough',
          'Dark grey, rough, furrowed',
        ]
      },
      {
        label: 'Silhouette / Habitat',
        values: [
          'Tall, open crown — dry mountain slopes & plateaus',
          'Tall — higher elevations than Ponderosa',
          'Slender, dense crown — subalpine & coastal',
          'Medium tree — dry mountain slopes',
          'Long drooping needles — very distinctive look',
          'High altitude (3000+ m) — near treeline',
        ]
      },
      {
        label: 'GeoGuessr clue',
        values: [
          'Most common large pine of W US — orange bark is key',
          'Similar to Ponderosa but only in Sierra Nevada / Baja',
          'Shorter, denser — common in Pacific NW & Rockies',
          'SE Arizona / NW Mexico only',
          'Only in W Mexico — instantly recognizable drooping needles',
          'Mexico & Guatemala highlands only',
        ]
      }
    ]
  },

  // ── EASTERN US PINES ────────────────────────────────────────
  {
    id: 'pines-eastern-us',
    continent: 'north-america',
    title: 'Eastern US Pines — How to tell them apart',
    intro: 'The eastern and southeastern United States host several distinct pine species. Loblolly and Slash dominate the South; Scots Pine is an introduced European species now widespread in the North; Red Pine and Eastern White Pine are native northern species.',
    plantIds: ['pinus-taeda-na', 'pinus-sylvestris-na', 'pinus-strobus-na', 'pinus-resinosa-na', 'pinus-rigida-na', 'pinus-elliottii'],
    criteria: [
      {
        label: 'Region',
        values: [
          'SE US (Virginia to Texas)',
          'N US & Canada (introduced from Europe)',
          'NE US & SE Canada',
          'NE US & SE Canada',
          'E US (Mid-Atlantic to New England)',
          'SE US (South Carolina to Florida)',
        ]
      },
      {
        label: 'Needles',
        values: [
          '3 per bundle, 15–22 cm, flexible',
          '2 per bundle, 4–7 cm, twisted, blue-green',
          '5 per bundle, 6–13 cm, soft blue-green',
          '2 per bundle, 12–16 cm, dark green',
          '3 per bundle, 7–12 cm, stiff',
          '2–3 per bundle, 18–30 cm',
        ]
      },
      {
        label: 'Bark',
        values: [
          'Grey-brown, plated',
          'Orange upper bark — very distinctive',
          'Grey-brown, thin, flaky',
          'Orange-red upper bark',
          'Dark, furrowed',
          'Orange-brown, plated',
        ]
      },
      {
        label: 'Key ID feature',
        values: [
          'Very tall, straight — plantation & logging landscapes',
          'Orange upper bark + twisted short needles',
          '5-needle pine — soft, drooping long cone',
          'Red bark similar to Scots — only 2 needles',
          'Sprouts from trunk after fire',
          'Very long needles (18–30 cm) — SE coastal plains',
        ]
      },
      {
        label: 'GeoGuessr clue',
        values: [
          'Most common pine of SE US — often in dense plantations',
          'Widespread in N US & Canada — orange upper bark key',
          'NE US forests — elegant long cones hanging from branches',
          'NE US & Canada — red bark easy to spot',
          'Mid-Atlantic — barrens and sandy soils',
          'SE Coastal Plain — very long needles distinguish it',
        ]
      }
    ]
  },

  // ── JUNIPERUS ───────────────────────────────────────────────
  {
    id: 'juniperus-north-america',
    continent: 'north-america',
    title: 'Western Junipers of North America — How to tell them apart',
    intro: 'Three junipers are commonly encountered in western North America GeoGuessr coverage. All are slow-growing, drought-tolerant trees of arid and semi-arid landscapes, but their bark, berry colour and regional distribution differ.',
    plantIds: ['juniperus-deppeana-na', 'juniperus-occidentalis', 'juniperus-osteosperma'],
    criteria: [
      {
        label: 'Region',
        values: [
          'SE Arizona, SW New Mexico, W Texas, N Mexico',
          'Oregon, California, Nevada, Idaho',
          'Great Basin (Utah, Nevada, Colorado, Arizona)',
        ]
      },
      {
        label: 'Bark',
        values: [
          'Checkered / alligator-like bark squares — unmistakable',
          'Reddish-brown, shredding in strips',
          'Greyish-brown, fibrous, shredding',
        ]
      },
      {
        label: 'Berries',
        values: [
          'Blue-black, bloomy',
          'Blue, bloomy',
          'Orange-brown to copper, not bloomy',
        ]
      },
      {
        label: 'Habitat',
        values: [
          'Mountain slopes 1500–2700 m, with oaks & pines',
          'Dry rocky slopes & ridges at mid elevations',
          'Desert foothills & plateaus 900–2700 m — Great Basin pinyon-juniper',
        ]
      },
      {
        label: 'GeoGuessr clue',
        values: [
          'Alligator bark = instant ID — SE AZ & NM mountains',
          'W Oregon / NE California — often with sagebrush',
          'Great Basin landscapes — Utah & Nevada most common',
        ]
      }
    ]
  },

  // ── NELTUMA (MESQUITES) ─────────────────────────────────────
  {
    id: 'neltuma-north-america',
    continent: 'north-america',
    title: 'Mesquites of North America — How to tell them apart',
    intro: 'Mesquites (genus Neltuma, formerly Prosopis) are iconic shrubs and small trees of arid North America and Mexico. They are often confused due to similar silhouettes and thorny branches, but their pods, leaflets and distribution help distinguish them.',
    plantIds: ['neltuma-glandulosa-na', 'neltuma-velutina-na', 'neltuma-laevigata'],
    criteria: [
      {
        label: 'Region',
        values: [
          'W Texas, New Mexico, Oklahoma, Kansas, N Mexico',
          'S Arizona, SW New Mexico, NW Mexico (Sonora)',
          'C & S Mexico (Baja to Oaxaca)',
        ]
      },
      {
        label: 'Leaflets',
        values: [
          'Small, narrow, glabrous (smooth), 8–20 pairs',
          'Velvety/hairy surface — key difference from Honey Mesquite',
          'Larger leaflets, smooth, 10–20 pairs',
        ]
      },
      {
        label: 'Pods',
        values: [
          'Straight to slightly curved, pale yellow, 10–25 cm',
          'Similar to Honey Mesquite but shorter',
          'Straight or curved, yellowish, 10–20 cm',
        ]
      },
      {
        label: 'Habit',
        values: [
          'Shrub to tree 1–9 m — invasive in overgrazed areas',
          'Shrub to small tree — lower than Honey Mesquite',
          'Small tree 3–12 m — more erect than N. glandulosa',
        ]
      },
      {
        label: 'GeoGuessr clue',
        values: [
          'Texas & NM desert roads — thorny, feathery leaves',
          'S Arizona & Sonora — velvety leaves = key field mark',
          'Central Mexico — similar habit but in Mexican landscapes',
        ]
      }
    ]
  },

];
