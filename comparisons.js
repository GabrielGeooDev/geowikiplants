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

  // ── AJOUTE TES COMPARAISONS ICI ─────────────────────────────
  // {
  //   id: 'attalea-brazil',
  //   continent: 'south-america',          // ← continent de la comparaison
  //   title: 'Brazilian Attalea Palms — How to tell them apart',
  //   intro: '',
  //   plantIds: ['attalea-speciosa', 'attalea-maripa', 'attalea-phalerata'],
  //   criteria: [
  //     {
  //       label: 'Region',
  //       values: ['...', '...', '...'],
  //       // photos est OPTIONNEL — omets-le si pas de photos pour ce critère
  //       // photos: ['https://...', null, 'https://...'],
  //     },
  //     { label: 'Height',   values: ['...', '...', '...'] },
  //     { label: 'Trunk',    values: ['...', '...', '...'],
  //       photos: ['https://...', 'https://...', 'https://...'] },
  //     { label: 'Leaves',   values: ['...', '...', '...'] },
  //   ]
  // },

];
