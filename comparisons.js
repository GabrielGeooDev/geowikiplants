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

  // ── SE COASTAL PLAIN PINES ──────────────────────────────────
  {
    id: 'pines-se-coastal',
    continent: 'north-america',
    title: 'SE Coastal Plain Pines — How to tell them apart',
    intro: 'The southeastern United States hosts one of the most diverse pine forests in the world. Several species grow on the Coastal Plain, often in similar sandy or wetland habitats. Needle count and length, bark texture and cone shape are the main ID clues.',
    plantIds: ['pinus-taeda-na', 'pinus-palustris', 'pinus-elliottii', 'pinus-serotina', 'pinus-clausa', 'pinus-glabra', 'pinus-echinata'],
    criteria: [
      {
        label: 'Region',
        values: [
          'SE US — Virginia to Texas, most widespread',
          'SE Coastal Plain — longleaf savanna ecosystem',
          'S Carolinas to Florida & Gulf Coast',
          'SE North Carolina to Florida (pocosins & wetlands)',
          'Florida only (sand scrub)',
          'SE Atlantic & Gulf Coast (Carolinas to Louisiana)',
          'SE US — wider range than other SE pines',
        ]
      },
      {
        label: 'Needles',
        values: [
          '3 per bundle, 15–22 cm, flexible',
          '3 per bundle, very long 25–45 cm — longest of all',
          '2–3 per bundle, 18–30 cm',
          '3 per bundle, 10–18 cm, twisted',
          '2 per bundle, short 5–8 cm, twisted',
          '2–3 per bundle, 5–10 cm, soft',
          '2–3 per bundle, 7–12 cm',
        ]
      },
      {
        label: 'Bark',
        values: [
          'Grey-brown, plated, scaly',
          'Orange-brown, large plates on mature trees',
          'Orange-brown, plated, similar to Loblolly',
          'Reddish-brown, plated',
          'Dark, rough, scaly',
          'Grey-brown, irregular furrows',
          'Grey-brown, irregular plates',
        ]
      },
      {
        label: 'Key ID feature',
        values: [
          'Most common SE pine — tall, dense plantation stands',
          'Grass stage seedling — very long needles as adult',
          'Very long needles — SE coastal plain only',
          'Serotinous cones stay closed until fire',
          'Florida scrub only — short twisted needles',
          'Smooth grey bark on branches — very soft needles',
          'Mid-continent range — broader than most SE pines',
        ]
      },
      {
        label: 'GeoGuessr clue',
        values: [
          'Ubiquitous in SE US landscapes and plantations',
          'Open savanna landscapes — fire-dependent ecosystem',
          'Similar to Loblolly but longer needles, more southern',
          'NC/SC pocosins — serotinous cones on branches',
          'Florida only — sandy scrub habitat',
          'Rare — coastal Carolinas to Louisiana',
          'SE US — appears with other SE pines',
        ]
      }
    ]
  },

  // ── NE / CANADA PINES ───────────────────────────────────────
  {
    id: 'pines-ne-canada',
    continent: 'north-america',
    title: 'NE United States & Canada Pines — How to tell them apart',
    intro: 'The northeastern US and Canada host several pine species ranging from boreal forests to the Appalachian mountains. Eastern White Pine is the tallest, Red Pine has distinctive reddish bark, Scots Pine is an introduced European species, and Jack Pine thrives in the boreal zone.',
    plantIds: ['pinus-strobus-na', 'pinus-resinosa-na', 'pinus-sylvestris-na', 'pinus-banksiana', 'pinus-rigida-na', 'pinus-pungens', 'pinus-virginiana'],
    criteria: [
      {
        label: 'Region',
        values: [
          'NE US & SE Canada — mixed forests',
          'NE US & SE Canada — boreal & Great Lakes',
          'N US & Canada — introduced from Europe, widespread',
          'Canada & N US — boreal forest specialist',
          'E US Mid-Atlantic — sandy barrens',
          'Appalachians (Virginia to Pennsylvania)',
          'E US (NJ to Georgia, Appalachian Piedmont)',
        ]
      },
      {
        label: 'Needles',
        values: [
          '5 per bundle, 6–13 cm, soft, blue-green',
          '2 per bundle, 12–16 cm, stiff, dark green',
          '2 per bundle, 4–7 cm, twisted, blue-green',
          '2 per bundle, 2–4 cm, very short, twisted',
          '3 per bundle, 7–12 cm, stiff',
          '2 per bundle, 4–7 cm, very stiff, sharp',
          '2 per bundle, 4–8 cm, twisted',
        ]
      },
      {
        label: 'Bark',
        values: [
          'Grey-brown, thin plates — green-grey on upper branches',
          'Orange-red bark on upper trunk — very distinctive',
          'Orange upper bark — red-brown lower',
          'Dark, rough, furrowed — no orange tint',
          'Dark, rough, irregular furrows — often multi-trunked',
          'Dark, rough, scaly — small tree',
          'Dark, rough — scraggly appearance',
        ]
      },
      {
        label: 'Key ID feature',
        values: [
          'Only 5-needle pine in NE — tall elegant silhouette',
          'Orange-red upper bark = immediate ID clue',
          'Orange bark + short twisted needles — very common in N US',
          'Very short needles (2–4 cm) + serotinous cones',
          'Sprouts from trunk base after fire — NJ barrens',
          'Table Mountain only — stiff sharp needles',
          'Scraggly, open crown — disturbed sites & Piedmont',
        ]
      },
      {
        label: 'GeoGuessr clue',
        values: [
          'NE forests — distinctive long soft blue-green needles',
          'Reddish bark on upper trunk — NE US & Canada',
          'Very widespread in N US & Canada — orange bark key',
          'Boreal Canada & northern states — tiny twisted needles',
          'NJ Pine Barrens & mid-Atlantic sandy soils',
          'Table Mountain, VA/PA ridges only',
          'Piedmont & Appalachian foothills — open scrubby look',
        ]
      }
    ]
  },

  // ── WESTERN US / CANADA PINES ───────────────────────────────
  {
    id: 'pines-western-us',
    continent: 'north-america',
    title: 'Western US & Canada Pines — How to tell them apart',
    intro: 'The mountain ranges of the western United States host several large and iconic pines. Ponderosa is the most widespread; Jeffrey looks nearly identical but grows at higher elevations; Lodgepole is slimmer and more northern; Western White Pine has 5 needles.',
    plantIds: ['pinus-ponderosa-na', 'pinus-scopulorum', 'pinus-jeffreyi-na', 'pinus-contorta-na', 'pinus-monticola'],
    criteria: [
      {
        label: 'Region',
        values: [
          'W US & Canada — Pacific Coast to Rockies, widespread',
          'Rocky Mountains — Colorado, Wyoming, New Mexico',
          'Sierra Nevada, SW Oregon, N Baja California',
          'W US & Canada — coastal to subalpine, very widespread',
          'Pacific NW — Washington, Oregon, Idaho, Montana',
        ]
      },
      {
        label: 'Needles',
        values: [
          '3 per bundle, 12–25 cm, yellow-green',
          '3 per bundle, 10–18 cm, similar to Ponderosa',
          '3 per bundle, 12–25 cm, blue-green, vanilla/butterscotch scent',
          '2 per bundle, 3–7 cm, short, often twisted',
          '5 per bundle, 5–10 cm, blue-green, soft',
        ]
      },
      {
        label: 'Bark',
        values: [
          'Orange-brown "puzzle piece" plates — iconic',
          'Similar orange-brown plates but smaller',
          'Similar to Ponderosa — but smell the sap: vanilla = Jeffrey',
          'Thin, grey-brown, scaly on young trees',
          'Grey-brown, thin, furrowed',
        ]
      },
      {
        label: 'Key ID feature',
        values: [
          'Puzzle bark + 3 long needles — most common W pine',
          'Rocky Mtn form of Ponderosa — slightly smaller',
          'Vanilla/butterscotch smell of bark — Sierra Nevada only',
          'Short 2-needle bundles + small oval cones',
          'Only 5-needle pine of NW — tall straight trunk',
        ]
      },
      {
        label: 'GeoGuessr clue',
        values: [
          'Dominant large pine of W US — orange puzzle bark',
          'Same look as Ponderosa but Rocky Mtn landscapes',
          'High Sierra & S Oregon — smell test distinguishes from Ponderosa',
          'Widespread from sea level to subalpine — slimmer than Ponderosa',
          'Pacific NW mountain forests — 5-needle clue',
        ]
      }
    ]
  },

  // ── MEXICAN PINES ───────────────────────────────────────────
  {
    id: 'pines-mexico',
    continent: 'north-america',
    title: 'Mexican Pines — How to tell them apart',
    intro: 'Mexico has the highest pine diversity in the world, with over 50 native species. These four are the most commonly encountered in GeoGuessr coverage of Mexican mountain landscapes.',
    plantIds: ['pinus-patula', 'pinus-hartwegii', 'pinus-arizonica-na', 'pinus-lumholtzii'],
    criteria: [
      {
        label: 'Region',
        values: [
          'E Sierra Madre (Hidalgo, Oaxaca, Veracruz)',
          'High volcanoes & Sierra Madre — above 3000 m',
          'SE Arizona, SW New Mexico, N Mexico (Sierra Madre)',
          'W Sierra Madre Occidental (Durango, Chihuahua)',
        ]
      },
      {
        label: 'Needles',
        values: [
          '3–5 per bundle, 15–30 cm, very drooping — distinctive',
          '3–5 per bundle, 10–18 cm, stiff',
          '3–5 per bundle, 8–15 cm, blue-green',
          '3 per bundle, 25–45 cm, very long and weeping',
        ]
      },
      {
        label: 'Bark',
        values: [
          'Orange-brown, plated',
          'Dark grey, rough, furrowed',
          'Dark, rough, deeply furrowed',
          'Dark, rough',
        ]
      },
      {
        label: 'Key ID feature',
        values: [
          'Graceful drooping needles — very elegant silhouette',
          'Near-treeline species — dense, windswept crown',
          'Extends into SE AZ/NM — most accessible for N US GeoGuessr',
          'Extremely long weeping needles — unmistakable',
        ]
      },
      {
        label: 'GeoGuessr clue',
        values: [
          'E Mexico highlands — drooping needles = instant ID',
          'High altitude Mexican landscapes near treeline',
          'Both AZ/NM & N Mexico — similar to Ponderosa group',
          'W Sierra Madre — extremely long pendulous needles',
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
