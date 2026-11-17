/**
 * OE VISUAL — Core Architectural Engine
 * Full-Bleed Justified Gallery, Mixed Random Stream, Looping Videos, Wireframe Sliders & Fullscreen Lightbox
 * Axiom Compliant: 100% Local, €0.00 cost, Pure Vanilla JS
 */

// PORTFOLIO DATASET (26 Curated Local Assets: Renders, Looping Videos, Wireframe Sliders)
const portfolioData = [
  {
    id: 1,
    type: 'compare',
    title: "Villa Contemporanea — Wireframe vs Photoreal",
    category: "exterior",
    location: "Bari, Puglia",
    imageRender: "assets/portfolio/villa-minimal.jpg",
    imageWireframe: "assets/portfolio/clay-study.jpg",
    image: "assets/portfolio/villa-minimal.jpg",
    flex: 1.5,
    desc: "Passaggio dal modello 3D poligonale con illuminazione a contrasto puro alla resa fotorealistica finale con calcolo delle riflessioni fisiche sull'acqua e facciata in pietra."
  },
  {
    id: 2,
    type: 'compare',
    title: "Living Contemporaneo — Mesh & Light Study",
    category: "interior",
    location: "Torino Collina",
    imageRender: "assets/portfolio/living-modern.jpg",
    imageWireframe: "assets/portfolio/living-clay.jpg",
    image: "assets/portfolio/living-modern.jpg",
    flex: 1.3,
    desc: "Validazione dei volumi e del rimbalzo di luce indiretta tramite render Clay prima della campionatura dei materiali tessili, essenze lignee e metalli."
  },
  {
    id: 3,
    type: 'video',
    title: "Torre Direzionale al Crepuscolo — Motion Reel",
    category: "exterior",
    location: "Roma Business District",
    videoSrc: "assets/videos/dusk-city.mp4",
    poster: "assets/portfolio/dusk-city.jpg",
    image: "assets/portfolio/dusk-city.jpg",
    flex: 1.4,
    desc: "Animazione 3D in loop con illuminazione volumetrica crepuscolare tra le torri direzionali, facciata ventilata a cellule e riflessi dinamici sui vetri specchiati."
  },
  {
    id: 4,
    type: 'video',
    title: "Green Terraces Residence — Architectural Motion",
    category: "exterior",
    location: "Milano, Porta Nuova",
    videoSrc: "assets/videos/green-terraces.mp4",
    poster: "assets/portfolio/green-terraces.jpg",
    image: "assets/portfolio/green-terraces.jpg",
    flex: 1.35,
    desc: "Walkthrough cinematografico tra i giardini pensili aggettanti e le facciate bioclimatiche del complesso residenziale pluripiano."
  },
  {
    id: 5,
    type: 'render',
    title: "Grand Resort & Wellness Spa",
    category: "commercial",
    location: "Polignano a Mare, Puglia",
    image: "assets/portfolio/hotel-resort.jpg?v=8.1",
    flex: 1.1,
    desc: "Visualizzazione ad altissimo impatto per resort di lusso a picco sul mare. Modellazione dettagliata di vegetazione autoctona foglia per foglia e rifrazione caustica dell'acqua marina."
  },
  {
    id: 6,
    type: 'render',
    title: "Masseria Tradizionale Ristrutturata",
    category: "exterior",
    location: "Valle d'Itria, Puglia",
    image: "assets/portfolio/masseria-puglia.jpg",
    flex: 1.0,
    desc: "Connubio tra tufo pugliese sbiancato a calce viva e innesti minimalisti in acciaio corten e microcemento. Luce meridiana zenitale ad alto contrasto volumetrico."
  },
  {
    id: 7,
    type: 'render',
    title: "Royal Avenue Luxury Penthouse",
    category: "interior",
    location: "Londra, Kensington",
    image: "assets/portfolio/royal-avenue.jpg",
    flex: 1.25,
    desc: "Living d'interni di altissimo profilo con boiserie cannettata a tutta altezza, marmi Calacatta levigati e calibratura fotometrica della luce naturale diffusa."
  },
  {
    id: 8,
    type: 'render',
    title: "Attico Panoramico sul Lungomare",
    category: "interior",
    location: "Bari Centro",
    image: "assets/portfolio/apt-bari.jpg?v=8.1",
    flex: 1.0,
    desc: "Restyling d'interni con parquet in rovere affumicato posato a spina di pesce ungherese, arredi custom su disegno e illuminazione lineare a scomparsa radente."
  },
  {
    id: 9,
    type: 'render',
    title: "Bistro Lounge & Speakeasy Bar",
    category: "commercial",
    location: "Roma Centro Storico",
    image: "assets/portfolio/lounge-pub.jpg",
    flex: 1.0,
    desc: "Illuminazione notturna scenografica a luce calda 2200K con riflessi controllati su ottone satinato, marmo verde Alpi e imbottiti in velluto ottanio."
  },
  {
    id: 10,
    type: 'render',
    title: "Villa Monolitica in Pietra",
    category: "exterior",
    location: "Trani, Costa Adriatica",
    image: "assets/portfolio/villa-trani.jpg?v=8.1",
    flex: 1.2,
    desc: "Residenza privata unifamiliare con setti murari in pietra di Trani bocciardata e terrazzamenti solarium a sbalzo affacciati sul litorale adriatico."
  },
  {
    id: 11,
    type: 'render',
    title: "Industrial Design Penthouse",
    category: "interior",
    location: "Milano, Tortona",
    image: "assets/portfolio/loft-interior.jpg",
    flex: 1.25,
    desc: "Living open-space su doppio volume con travi metalliche a vista, arredi iconici e aperture zenitali industriali calibrate sui riflessi mattutini."
  },
  {
    id: 12,
    type: 'render',
    title: "Villa Minimalista su Terrazzamenti",
    category: "exterior",
    location: "Costa Smeralda, Sardegna",
    image: "assets/portfolio/weekly-villa.jpg",
    flex: 1.25,
    desc: "Volumetrie stereometriche bianche ad incastro che assecondano l'orografia del terreno roccioso. Ampie vetrate scorrevoli a scomparsa totale nel muro."
  },
  {
    id: 13,
    type: 'render',
    title: "Seaside Penthouse — Living & Panoramic Dining",
    category: "interior",
    location: "Polignano a Mare, Costa Adriatica",
    image: "assets/portfolio/seaside-penthouse-living.jpg",
    flex: 1.3,
    desc: "Living d'interni a pianta aperta affacciato sull'orizzonte marino: colonne monolitiche circolari, arredi custom in rovere naturale e lino, lampadario scultoreo e vetrate scorrevoli continue."
  },
  {
    id: 14,
    type: 'render',
    title: "Seaside Penthouse — Solarium Lounge & Sea View",
    category: "interior",
    location: "Polignano a Mare, Costa Adriatica",
    image: "assets/portfolio/seaside-penthouse-terrace.jpg",
    flex: 1.25,
    desc: "Zona conversazione con divano modulare a vista mare, ulivo ornamentale in conca di terracotta e parete esterna ventilata in travertino dorato a taglio sega."
  },
  {
    id: 15,
    type: 'video',
    title: "Rooftop Penthouse & Jacuzzi — Cinematic Motion",
    category: "interior",
    location: "Polignano a Mare, Costa Adriatica",
    videoSrc: "assets/videos/penthouse-rooftop-motion.mp4",
    poster: "assets/portfolio/penthouse-rooftop-poster.jpg",
    image: "assets/portfolio/penthouse-rooftop-poster.jpg",
    flex: 1.35,
    desc: "Motion reel cinematografico della terrazza solarium con minipiscina idromassaggio a sfioro, cucina open-space a isola e illuminazione zenitale naturale."
  },
  {
    id: 16,
    type: 'render',
    title: "Residenza Contemporanea — Vetrata Scorrevole & Dining",
    category: "interior",
    location: "Bari Costa, Puglia",
    image: "assets/portfolio/pegaso-detail.jpg",
    flex: 1.15,
    desc: "Inquadratura notturna attraverso l'infisso scorrevole a filo pavimento: deck esterno in teak, tavolo monumentale in legno massello e parete interna retroilluminata a cielo stellato."
  },
  {
    id: 17,
    type: 'seasons',
    title: "Green Terraces Residence — Le Quattro Stagioni",
    category: "exterior",
    location: "Milano, Porta Nuova",
    image: "assets/portfolio/season-spring.jpg",
    flex: 1.6,
    desc: "Studio bioclimatico e fotometrico attraverso il ciclo completo delle quattro stagioni. Transizione continua in dissolvenza (cross-fade) tra fioritura primaverile, sole zenitale estivo, foliage autunnale e innevamento invernale sullo stesso volume architettonico.",
    seasons: [
      {
        id: 'spring',
        name: 'Primavera',
        sub: 'Verde fresco, fioritura e luce mattutina cristallina',
        img: 'assets/portfolio/season-spring.jpg'
      },
      {
        id: 'summer',
        name: 'Estate',
        sub: 'Sole zenitale, ombre nette e terrazze ombreggiate',
        img: 'assets/portfolio/season-summer.jpg'
      },
      {
        id: 'autumn',
        name: 'Autunno',
        sub: 'Foliage dorato, ombre lunghe e tramonto caldo',
        img: 'assets/portfolio/season-autumn.jpg'
      },
      {
        id: 'winter',
        name: 'Inverno',
        sub: 'Neve fresca e luci calde dagli interni',
        img: 'assets/portfolio/season-winter.jpg'
      }
    ]
  },
  {
    id: 18,
    type: 'render',
    title: "Masseria San Nicola — Pergola & Pool Lounge",
    category: "exterior",
    location: "Fasano, Valle d'Itria",
    image: "assets/portfolio/masseria-pergola-pool.jpg?v=8.1",
    hoverVideoSrc: "assets/videos/masseria-pergola-pool-motion.mp4",
    flex: 1.45,
    desc: "Visualizzazione fotorealistica a luce solare naturale zenitale: pergola bioclimatica in legno bianco, vasi in terracotta pugliese e specchio d'acqua a sfioro."
  },
  {
    id: 19,
    type: 'render',
    title: "Tenuta Pugliese — Traditional Estate & Pool",
    category: "exterior",
    location: "Ostuni, Puglia",
    image: "assets/portfolio/masseria-pugliese-estate.jpg?v=8.1",
    flex: 1.4,
    desc: "Architettura rurale pugliese di pregio: intonaco bianco a calce viva, infissi tradizionali verde salvia, ulivi secolari e calcolo fotometrico delle ombre pomeridiane."
  },
  {
    id: 20,
    type: 'render',
    title: "Viale dei Cipressi & Lavanda — Masseria Entryway",
    category: "exterior",
    location: "Monopoli, Puglia",
    image: "assets/portfolio/masseria-viale-accesso.jpg?v=8.1",
    flex: 1.35,
    desc: "Prospettiva assiale monumentale con pavimentazione in chianche antiche bocciardate, aiuole di lavanda autoctona e maestoso portale con arco d'ingresso."
  },
  {
    id: 21,
    type: 'video',
    title: "Cinematic Motion Reel — Masseria al Sole",
    category: "exterior",
    location: "Puglia Luxury Estate",
    videoSrc: "assets/videos/masseria-cinematic-loop.mp4",
    poster: "assets/portfolio/masseria-cinematic-poster.jpg?v=8.1",
    image: "assets/portfolio/masseria-cinematic-poster.jpg?v=8.1",
    flex: 1.5,
    desc: "Animazione cinematografica in loop 4K: simulazione dinamica delle increspature dell'acqua in piscina, fronde degli ulivi mosse dal vento e riflessi solari in tempo reale."
  },
  {
    id: 22,
    type: 'render',
    title: "Villa Mediterranea — Volumi Puri & Luce Estiva",
    category: "exterior",
    location: "Bari, Costa Pugliese",
    image: "assets/portfolio/villa-mediterranea-vento.jpg",
    flex: 1.25,
    desc: "Composizione architettonica a volumi stereometrici puri e setti cilindrici intonacati a calce. Studio anemometrico della vegetazione e ombre nette sotto la luce meridiana."
  },
  {
    id: 23,
    type: 'render',
    title: "Residenza Materica — Pioggia, Corten & Cemento",
    category: "exterior",
    location: "Valle d'Itria, Puglia",
    image: "assets/portfolio/villa-pioggia-corten.jpg?v=8.1",
    flex: 1.35,
    desc: "Atmosfera temporalesca fotometricamente complessa: riflessi diffusi sulle superfici bagnate, gocce su vetrate a tutta altezza, setti in corten ossidato e piscina a sfioro."
  },
  {
    id: 24,
    type: 'video',
    title: "Villa con Piscina sotto la Pioggia — Motion Reel",
    category: "exterior",
    location: "Monopoli, Puglia",
    videoSrc: "assets/videos/villa-rain-pool-motion.mp4",
    poster: "assets/portfolio/villa-rain-pool-poster.jpg",
    image: "assets/portfolio/villa-rain-pool-poster.jpg",
    flex: 1.45,
    desc: "Simulazione cinematico-ambientale con pioggia battente, increspature dinamiche sull'acqua della piscina, deck in legno bagnato e calde luci interne a contrasto."
  },
  {
    id: 25,
    type: 'video',
    title: "Catalogo Soluzioni d'Arredo — Editorial Motion Reel",
    category: "interior",
    location: "OE Atelier & Editorial Design",
    videoSrc: "assets/videos/editorial-catalog-motion.mp4",
    poster: "assets/portfolio/editorial-catalog-poster.jpg",
    image: "assets/portfolio/editorial-catalog-poster.jpg",
    flex: 1.45,
    desc: "Motion reel editoriale: sfogliando il catalogo d'arredo tra render d'interni fotorealistici, moodboard materici, campionari tessili e finiture opache di design."
  },
  {
    id: 26,
    type: 'video',
    title: "Corporate Lounge & Acoustic Pods — Motion Reel",
    category: "commercial",
    location: "Milano Financial District",
    videoSrc: "assets/videos/corporate-lounge-pods-motion.mp4",
    poster: "assets/portfolio/corporate-lounge-pods-poster.jpg",
    image: "assets/portfolio/corporate-lounge-pods-poster.jpg",
    flex: 1.75,
    desc: "Spazio lounge direzionale e hub di incontro con capsule meeting acustiche in legno e tessuto imbottito, illuminazione architetturale lineare e palette cromatica contemporanea."
  }
];

// B2B TARGET TAGS (Cataloghi/Product & Ingegneria/BIM)
const PORTFOLIO_TARGETS = {
  engineering: [1, 2, 3, 4, 17, 26],
  catalog: [7, 13, 16, 25, 26]
};

// ENGLISH DICTIONARY FOR BILINGUAL PORTFOLIO ITEMS
const PORTFOLIO_EN = {
  1: { title: "Contemporary Villa — Wireframe vs Photoreal", location: "Bari, Puglia", desc: "From polygonal 3D clay model to final photorealistic rendering with physical water reflections and natural stone facade." },
  2: { title: "Modern Living — Mesh & Light Study", location: "Turin Hills, Italy", desc: "Geometric and indirect light bounce validation in Clay before final material sampling of textiles, timber, and metals." },
  3: { title: "Executive Tower at Dusk — Motion Reel", location: "Rome Business District", desc: "Looping 3D architectural film with volumetric twilight lighting across curtain-wall executive towers." },
  4: { title: "Green Terraces Residence — Architectural Motion", location: "Milan, Porta Nuova", desc: "Cinematic walkthrough across cantilevered hanging gardens and bioclimatic residential facades." },
  5: { title: "Grand Resort & Wellness Spa", location: "Polignano a Mare, Puglia", desc: "High-impact coastal luxury hospitality visualization with custom Mediterranean foliage and sea water caustics." },
  6: { title: "Restored Traditional Masseria", location: "Valle d'Itria, Puglia", desc: "Lime-washed Puglian limestone paired with Corten steel and microcement architectural insertions." },
  7: { title: "Royal Avenue Luxury Penthouse", location: "London, Kensington", desc: "High-profile residential interior featuring fluted wood paneling, honed Calacatta marble, and balanced daylighting." },
  8: { title: "Panoramic Seafront Penthouse", location: "Bari Waterfront", desc: "Bespoke interior styling with smoked oak chevron flooring, custom millwork, and grazing linear lighting." },
  9: { title: "Bistro Lounge & Speakeasy Bar", location: "Rome Historic Center", desc: "Dramatic 2200K evening hospitality lighting over brushed brass, green marble, and velvet seating." },
  10: { title: "Monolithic Stone Villa", location: "Trani, Adriatic Coast", desc: "Private monolithic residence in bush-hammered Trani stone with cantilevered coastal sundeck terraces." },
  11: { title: "Industrial Design Penthouse", location: "Milan, Tortona", desc: "Double-height open-space loft with exposed steel trusses, iconic design pieces, and crisp zenithal daylight." },
  12: { title: "Minimalist Terraced Villa", location: "Costa Smeralda, Sardinia", desc: "Interlocking white stereometric volumes tailored to rocky coastal topography with pocket glass walls." },
  13: { title: "Seaside Penthouse — Living & Panoramic Dining", location: "Polignano a Mare, Italy", desc: "Open-plan sea-view living with sculptural circular columns, natural oak, linen furniture, and continuous glazing." },
  14: { title: "Seaside Penthouse — Solarium Lounge & Sea View", location: "Polignano a Mare, Italy", desc: "Sea-facing outdoor lounge with modular seating, terracotta olive urn, and ventilated travertine facade." },
  15: { title: "Rooftop Penthouse & Jacuzzi — Cinematic Motion", location: "Polignano a Mare, Italy", desc: "Cinematic terrace reel featuring infinity hydro-massage pool, island kitchen, and zenithal Mediterranean light." },
  16: { title: "Contemporary Residence — Sliding Glass & Dining", location: "Bari Coast, Puglia", desc: "Night architectural framing across flush sliding glass, teak deck, solid-wood dining table, and backlit feature wall." },
  17: { title: "Green Terraces Residence — Four Seasons Study", location: "Milan, Porta Nuova", desc: "Photometric and bioclimatic cross-fade study across Spring, Summer, Autumn foliage, and Winter snow." },
  18: { title: "Masseria San Nicola — Pergola & Pool Lounge", location: "Fasano, Valle d'Itria", desc: "Photorealistic Mediterranean zenithal study: whitewashed wood pergola, terracotta amphorae, and infinity pool." },
  19: { title: "Puglian Estate — Traditional Farmhouse & Pool", location: "Ostuni, Puglia", desc: "Heritage rural architecture with limewashed masonry, sage shutters, centuries-old olive trees, and warm shadows." },
  20: { title: "Cypress & Lavender Avenue — Masseria Entryway", location: "Monopoli, Puglia", desc: "Axial perspective over ancient chianche limestone paving, native lavender borders, and vaulted portal arch." },
  21: { title: "Cinematic Motion Reel — Masseria Rain & Sun", location: "Puglia Luxury Estate", desc: "Cinematic atmospheric loop with rain droplets, dynamic water ripples, and warm interior contrast." },
  22: { title: "Mediterranean Villa — Pure Volumes & Summer Light", location: "Bari Coast, Italy", desc: "Minimalist cylindrical and stereometric limewashed volumes under crisp midday Mediterranean sun." },
  23: { title: "Material Residence — Rain, Corten & Concrete", location: "Valle d'Itria, Puglia", desc: "Complex wet-surface storm lighting with specular reflections on board-formed concrete and weathered Corten." },
  24: { title: "Rain Pool Villa — Cinematic Motion Reel", location: "Monopoli, Puglia", desc: "Dynamic rain simulation with animated pool ripples, wet timber decking, and glowing warm interiors." },
  25: { title: "Furniture Catalogs — Editorial Motion Reel", location: "OE Atelier & Industrial Catalogs", desc: "Editorial showcase built for furniture manufacturers: photoreal room sets, finish swatches, and tactile close-ups." },
  26: { title: "Corporate Lounge & Acoustic Pods — Motion Reel", location: "Milan Financial District", desc: "Executive corporate hub with acoustic timber/fabric meeting pods and integrated architectural linear lighting." }
};

// STATE MANAGEMENT
let activeFilter = 'all';
let currentLang = 'it';
let currentLightboxIndex = 0;
let displayedItems = [];
let isZoomed = false;
let isAudioMuted = false;

// DOM SELECTORS
const gridContainer = document.getElementById('portfolio-grid');
const visibleCountEl = document.getElementById('visible-count');
const filterBtns = document.querySelectorAll('.filter-btn');
const shuffleBtn = document.getElementById('shuffle-btn');

// LIGHTBOX / FULLSCREEN VIEWER SELECTORS
const lightbox = document.getElementById('lightbox');
const lbTitle = document.getElementById('lb-title');
const lbMeta = document.getElementById('lb-meta');
const lbDesc = document.getElementById('lb-desc');
const lbCurrent = document.getElementById('lb-current');
const lbTotal = document.getElementById('lb-total');
const lbClose = document.getElementById('lb-close');
const lbBrandBack = document.getElementById('lb-brand-back');
const lbPrev = document.getElementById('lb-prev');
const lbNext = document.getElementById('lb-next');
const lbZoom = document.getElementById('lb-zoom');
const lbAudioToggle = document.getElementById('lb-audio-toggle');
const lbStageTrack = document.getElementById('lb-stage-track');

// STANDALONE SECTION COMPARISON SLIDER
const comparisonSlider = document.getElementById('comparison-slider');
const compareClayLayer = document.getElementById('compare-clay-layer');
const compareHandle = document.getElementById('compare-handle');

// REEL MODAL (YOUTUBE)
const videoModal = document.getElementById('video-modal');
const videoIframe = document.getElementById('video-iframe');
const videoClose = document.getElementById('video-close');
const reelTriggers = document.querySelectorAll('[data-video-id]');

// THEME TOGGLE
const themeToggle = document.getElementById('theme-toggle');

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  const navWorksCount = document.getElementById('nav-works-count');
  if (navWorksCount) {
    navWorksCount.textContent = portfolioData.length;
  }

  try {
    const savedLang = localStorage.getItem('oe_visual_lang');
    if (savedLang === 'en' || savedLang === 'it') {
      currentLang = savedLang;
    }
  } catch (e) {}

  // Start with curated high-impact stream as requested by Benny (guarded defensively)
  try { shuffleAndDisplay(); } catch (e) { console.warn('[OE Visual] shuffleAndDisplay:', e); }
  try { setupFilters(); } catch (e) { console.warn('[OE Visual] setupFilters:', e); }
  try { setupWorkDropdown(); } catch (e) { console.warn('[OE Visual] setupWorkDropdown:', e); }
  try { setupStandaloneComparison(); } catch (e) { console.warn('[OE Visual] setupStandaloneComparison:', e); }
  try { setupLightbox(); } catch (e) { console.warn('[OE Visual] setupLightbox:', e); }
  try { setupReelModal(); } catch (e) { console.warn('[OE Visual] setupReelModal:', e); }
  try { setupTheme(); } catch (e) { console.warn('[OE Visual] setupTheme:', e); }
  try { setupLanguageSwitch(); } catch (e) { console.warn('[OE Visual] setupLanguageSwitch:', e); }
  try { setupScrollSpy(); } catch (e) { console.warn('[OE Visual] setupScrollSpy:', e); }
  try { setupTeamAvatars(); } catch (e) { console.warn('[OE Visual] setupTeamAvatars:', e); }
  try { setupContactConfigurator(); } catch (e) { console.warn('[OE Visual] setupContactConfigurator:', e); }
  try { setupHashRouter(); } catch (e) { console.warn('[OE Visual] setupHashRouter:', e); }
  try { setupWeldingSpark(); } catch (e) { console.warn('[OE Visual] setupWeldingSpark:', e); }
});

/**
 * Fisher-Yates Array Shuffle
 */
function shuffleArray(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Filter matching across categories, types, and B2B targets
 */
function matchesFilter(item, filter) {
  if (filter === 'all') return true;
  if (filter === 'compare') return item.type === 'compare';
  if (filter === 'video') return item.type === 'video';
  if (filter === 'seasons') return item.type === 'seasons';
  if (PORTFOLIO_TARGETS[filter]) {
    return PORTFOLIO_TARGETS[filter].includes(item.id);
  }
  return item.category === filter;
}

/**
 * Curated-random impact ordering & dynamic autoplay selection (1-2 random reels autoplay, rest hover-play)
 */
function shuffleAndDisplay() {
  const pool = portfolioData.filter(item => matchesFilter(item, activeFilter));

  let ordered;
  if (activeFilter === 'all') {
    const pickOne = (ids, used) => {
      const candidates = shuffleArray(pool.filter(i => ids.includes(i.id) && !used.has(i.id)));
      if (candidates.length > 0) {
        used.add(candidates[0].id);
        return candidates[0];
      }
      return null;
    };

    const used = new Set();
    // Row 1-2 curated flagship diversity (architecture motion, 4K masseria hover, wireframe/BIM slider, hospitality/catalog)
    const anchors = [
      pickOne([4, 3, 26], used),
      pickOne([18], used),
      pickOne([1, 2], used),
      pickOne([5, 7, 13, 25], used),
      pickOne([24, 15, 21], used),
      pickOne([25, 22, 23, 8], used)
    ].filter(Boolean);

    const rest = shuffleArray(pool.filter(i => !used.has(i.id)));
    ordered = [...anchors, ...rest];
  } else {
    ordered = shuffleArray(pool);
  }

  // Pick up to 2 flagship video items at random to autoplay cleanly on load; all other animated items load static & play on hover
  const videoItems = ordered.filter(i => i.type === 'video');
  const earlyPriority = videoItems.slice(0, Math.min(4, videoItems.length));
  const autoCount = Math.min(2, videoItems.length);
  const pickedAuto = new Set(shuffleArray(earlyPriority).slice(0, autoCount).map(i => i.id));
  if (pickedAuto.size < autoCount) {
    shuffleArray(videoItems).forEach(v => {
      if (pickedAuto.size < autoCount) pickedAuto.add(v.id);
    });
  }
  ordered.forEach(item => {
    item._runtimeAutoplay = item.type === 'video' && pickedAuto.has(item.id);
  });

  displayedItems = ordered;
  renderPortfolioGrid();
}

function getLocalizedItem(item) {
  if (currentLang === 'en' && PORTFOLIO_EN[item.id]) {
    return { ...item, ...PORTFOLIO_EN[item.id] };
  }
  return item;
}

/**
 * Render the full-bleed grid with 0 lateral voids and thin white lines
 */
function renderPortfolioGrid() {
  if (!gridContainer) return;
  gridContainer.innerHTML = '';
  if (visibleCountEl) {
    visibleCountEl.textContent = displayedItems.length;
  }

  // Group items into justified rows
  const rows = groupItemsIntoRows(displayedItems);

  let globalIndex = 0;

  rows.forEach(row => {
    const rowEl = document.createElement('div');
    rowEl.className = `gallery-row ${row.className || ''}`;
    if (row.height) {
      rowEl.style.height = `${row.height}px`;
    }

    row.items.forEach(item => {
      const itemIdx = globalIndex++;
      const card = createCardElement(item, itemIdx);
      rowEl.appendChild(card);
    });

    gridContainer.appendChild(rowEl);
  });

  // Attach interactive slider drag listeners to inline compare cards
  setupInlineCompareSliders();

  // Attach continuous cross-fade autoplay & tab listeners to seasons cards
  setupSeasonsSliders();
}

/**
 * Dynamic row packing: guarantees 100% width and uniform white spacing
 */
function groupItemsIntoRows(items) {
  const rows = [];
  const list = [...items];

  while (list.length > 0) {
    if (list.length === 1) {
      // Single hero item
      rows.push({ items: [list.shift()], height: 560, className: 'row-hero' });
    } else if (list.length === 3 || list.length === 6) {
      // Trio row
      rows.push({
        items: [list.shift(), list.shift(), list.shift()],
        height: 440,
        className: 'row-trio'
      });
    } else {
      // Duo row (2 items)
      rows.push({
        items: [list.shift(), list.shift()],
        height: 520
      });
    }
  }

  return rows;
}

function attachHoverVideoBehaviour(card) {
  const hoverVideo = card.querySelector('.card-hover-video');
  if (!hoverVideo) return;
  card.addEventListener('mouseenter', () => {
    card.classList.add('is-hover-playing');
    hoverVideo.play().catch(() => {});
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('is-hover-playing');
    hoverVideo.pause();
    hoverVideo.currentTime = 0;
  });
}

/**
 * Card Element Factory (Render, Video Loop, or Wireframe Slider)
 */
function createCardElement(rawItem, index) {
  const item = getLocalizedItem(rawItem);
  const card = document.createElement('div');
  card.style.flex = item.flex || 1;
  card.setAttribute('data-index', index);

  // TYPE 1: LOOPING VIDEO CARD (1-2 flagship random autoplay, rest 4K static -> hover-play)
  if (item.type === 'video') {
    const isHoverPlay = !item._runtimeAutoplay;
    card.className = isHoverPlay
      ? 'render-card card-video-card card-video-hover'
      : 'render-card card-video-card';
    card.innerHTML = `
      <div class="render-img-wrapper">
        ${isHoverPlay
          ? `<img src="${item.poster || item.image || ''}" alt="${item.title}" class="render-img card-hover-poster" loading="lazy">
             <video class="card-video card-hover-video" src="${item.videoSrc}" poster="${item.poster || ''}" loop muted playsinline preload="metadata"></video>`
          : `<video class="card-video" src="${item.videoSrc}" poster="${item.poster || ''}" autoplay loop muted playsinline preload="auto"></video>`
        }
      </div>
      <div class="render-overlay">
        <div class="overlay-corner-icon" title="${currentLang === 'en' ? 'Play fullscreen' : 'Riproduci a tutta pagina'}">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style="margin-left: 2px;">
            <polygon points="6 4 20 12 6 20 6 4"></polygon>
          </svg>
        </div>
        <span class="overlay-tag">${currentLang === 'en' ? 'Cinematic Video' : 'Cinematic Video'}</span>
        <h3 class="overlay-title">${item.title}</h3>
      </div>
    `;

    if (isHoverPlay) {
      attachHoverVideoBehaviour(card);
    }

    card.addEventListener('click', () => openLightbox(index));
    return card;
  }

  // TYPE 2: WIREFRAME-TO-RENDER INLINE SLIDER CARD (PULITO, ZERO SCRITTE INUTILI)
  if (item.type === 'compare') {
    card.className = 'render-card card-compare';
    card.innerHTML = `
      <div class="card-compare-wrap" data-card-idx="${index}">
        <div class="compare-card-layer compare-card-render">
          <img src="${item.imageRender}" alt="${item.title} — Photoreal Render">
        </div>
        <div class="compare-card-layer compare-card-wire" style="clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);">
          <img src="${item.imageWireframe}" alt="${item.title} — Wireframe Clay">
        </div>
        <div class="compare-card-handle" style="left: 50%;">
          <div class="handle-card-circle" aria-label="Trascina per confrontare">
            <span class="handle-o-line"></span>
          </div>
        </div>
      </div>

      <button class="card-fullscreen-btn" title="${currentLang === 'en' ? 'Open fullscreen' : 'Apri a tutta pagina'}" aria-label="Fullscreen">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 3 21 3 21 9"></polyline>
          <polyline points="9 21 3 21 3 15"></polyline>
          <line x1="21" y1="3" x2="14" y2="10"></line>
          <line x1="3" y1="21" x2="10" y2="14"></line>
        </svg>
      </button>

      <div class="compare-footer-info">
        <span class="overlay-tag">Wireframe / Render</span>
        <h3 class="compare-item-title">${item.title}</h3>
      </div>
    `;

    const fsBtn = card.querySelector('.card-fullscreen-btn');
    if (fsBtn) {
      fsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openLightbox(index);
      });
    }

    card.addEventListener('click', () => {
      if (!card.dataset.dragged) {
        openLightbox(index);
      }
      card.removeAttribute('data-dragged');
    });

    return card;
  }

  // TYPE 3: 4 SEASONS CROSS-FADE CARD
  if (item.type === 'seasons') {
    card.className = 'render-card card-seasons';
    card.id = 'work-stagioni';
    card.innerHTML = `
      <div class="seasons-card-viewport">
        <div class="seasons-layers-stack">
          ${item.seasons.map((s, sIdx) => `
            <div class="season-layer ${sIdx === 0 ? 'is-active' : ''}" data-season-idx="${sIdx}">
              <img src="${s.img}" alt="Studio bioclimatico — ${s.name}" class="season-img" loading="lazy">
            </div>
          `).join('')}
        </div>

        <div class="seasons-clean-overlay">
          <div class="overlay-corner-icon" title="${currentLang === 'en' ? 'Open fullscreen' : 'Apri a tutta pagina'}">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </div>
          <span class="overlay-tag">${currentLang === 'en' ? 'Bioclimatic Study' : 'Studio bioclimatico'}</span>
          <h3 class="overlay-title season-dynamic-title">${item.seasons[0].name}</h3>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openLightbox(index));
    return card;
  }

  // TYPE 4: STILL PHOTOREALISTIC RENDERING CARD (CON SUPPORTO OPZIONALE VIDEO ON HOVER)
  const hasHoverVideo = Boolean(item.hoverVideoSrc);
  card.className = hasHoverVideo
    ? 'render-card card-render card-video-hover'
    : 'render-card card-render';
  card.innerHTML = `
    <div class="render-img-wrapper">
      <img src="${item.image}" alt="${item.title}" class="render-img ${hasHoverVideo ? 'card-hover-poster' : ''}" loading="lazy">
      ${hasHoverVideo ? `<video class="card-video card-hover-video" src="${item.hoverVideoSrc}" poster="${item.image}" loop muted playsinline preload="metadata"></video>` : ''}
    </div>
    <div class="render-overlay">
      <div class="overlay-corner-icon" title="${currentLang === 'en' ? 'Open fullscreen' : 'Apri a tutta pagina'}">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 3 21 3 21 9"></polyline>
          <polyline points="9 21 3 21 3 15"></polyline>
          <line x1="21" y1="3" x2="14" y2="10"></line>
          <line x1="3" y1="21" x2="10" y2="14"></line>
        </svg>
      </div>
      <span class="overlay-tag">${formatCategory(item.category)}</span>
      <h3 class="overlay-title">${item.title}</h3>
    </div>
  `;

  if (hasHoverVideo) {
    attachHoverVideoBehaviour(card);
  }

  card.addEventListener('click', () => openLightbox(index));
  return card;
}

/**
 * Setup inline draggable sliders for card-compare elements
 */
function setupInlineCompareSliders() {
  const compareWraps = document.querySelectorAll('.card-compare-wrap');

  compareWraps.forEach(wrap => {
    const wireLayer = wrap.querySelector('.compare-card-wire');
    const handle = wrap.querySelector('.compare-card-handle');
    const parentCard = wrap.closest('.card-compare');
    if (!wireLayer || !handle) return;

    let isDragging = false;
    let startX = 0;

    const setSliderPos = (clientX) => {
      const rect = wrap.getBoundingClientRect();
      let x = clientX - rect.left;
      x = Math.max(0, Math.min(x, rect.width));
      const pct = Math.max(2, Math.min(98, (x / rect.width) * 100));

      wireLayer.style.clipPath = `polygon(0 0, ${pct}% 0, ${pct}% 100%, 0 100%)`;
      handle.style.left = `${pct}%`;
    };

    // Mouse Events
    handle.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      isDragging = true;
      startX = e.clientX;
      parentCard.removeAttribute('data-dragged');
    });

    wrap.addEventListener('mousedown', (e) => {
      if (e.target.closest('.card-fullscreen-btn')) return;
      isDragging = true;
      startX = e.clientX;
      setSliderPos(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      if (Math.abs(e.clientX - startX) > 5 && parentCard) {
        parentCard.setAttribute('data-dragged', 'true');
      }
      setSliderPos(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
      }
    });

    // Touch Events
    wrap.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) {
        isDragging = true;
        startX = e.touches[0].clientX;
        setSliderPos(e.touches[0].clientX);
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging || !e.touches || !e.touches[0]) return;
      if (Math.abs(e.touches[0].clientX - startX) > 5 && parentCard) {
        parentCard.setAttribute('data-dragged', 'true');
      }
      setSliderPos(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });
  });
}

/**
 * Setup continuous fast cross-fade autoplay on seasons cards (Studio Bioclimatico)
 * Passaggio veloce (2.0s per stagione), pulito come le altre card.
 */
let activeSeasonsTimers = [];

function setupSeasonsSliders() {
  // Clear any existing intervals
  activeSeasonsTimers.forEach(t => clearInterval(t));
  activeSeasonsTimers = [];

  const seasonsCards = document.querySelectorAll('.card-seasons');
  seasonsCards.forEach(card => {
    const cardIdx = parseInt(card.getAttribute('data-index'), 10);
    const item = displayedItems[cardIdx];
    if (!item || !item.seasons || item.seasons.length === 0) return;

    const layers = card.querySelectorAll('.season-layer');
    const dynamicTitle = card.querySelector('.season-dynamic-title');

    let currentSeason = 0;
    const seasonDuration = 2000; // Passaggio veloce: 2.0s per stagione

    function applySeason(idx) {
      currentSeason = idx;

      // Update layers opacity with fast smooth cross-fade
      layers.forEach((l, lIdx) => {
        if (lIdx === idx) {
          l.classList.add('is-active');
        } else {
          l.classList.remove('is-active');
        }
      });

      // Update season dynamic title (Primavera -> Estate -> Autunno -> Inverno)
      if (dynamicTitle && item.seasons[idx]) {
        dynamicTitle.style.opacity = '0';
        dynamicTitle.style.transform = 'translateY(3px)';
        setTimeout(() => {
          dynamicTitle.textContent = item.seasons[idx].name;
          dynamicTitle.style.opacity = '1';
          dynamicTitle.style.transform = 'translateY(0)';
        }, 140);
      }
    }

    // Continuous fast cycle loop
    const timer = setInterval(() => {
      const nextSeason = (currentSeason + 1) % item.seasons.length;
      applySeason(nextSeason);
    }, seasonDuration);

    activeSeasonsTimers.push(timer);
  });
}

function formatCategory(cat) {
  switch (cat) {
    case 'exterior': return 'Exterior CGI';
    case 'interior': return 'Interior CGI';
    case 'commercial': return 'Retail & Hospitality';
    case 'catalog': return currentLang === 'en' ? 'Catalogs & Product' : 'Cataloghi & Product';
    case 'engineering': return currentLang === 'en' ? 'Engineering & BIM' : 'Ingegneria & BIM';
    case 'compare': return 'Wireframe / Clay';
    case 'video': return 'Cinematic 3D Video';
    case 'seasons': return currentLang === 'en' ? 'Bioclimatic Study' : 'Studio Bioclimatico';
    default: return 'Architectural CGI';
  }
}

/**
 * Synchronized Filter Controller (Filter Bar + Work Dropdown Menu)
 */
function setFilter(filterVal) {
  activeFilter = filterVal;

  // Sync horizontal filter bar buttons
  filterBtns.forEach(btn => {
    if (btn.getAttribute('data-filter') === filterVal) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Sync header dropdown menu items
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  dropdownItems.forEach(item => {
    if (item.getAttribute('data-filter') === filterVal) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  shuffleAndDisplay();
}

/**
 * Filter and Shuffle event listeners
 */
function setupFilters() {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter') || 'all';
      setFilter(filter);
    });
  });

  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', () => {
      // Visual feedback on shuffle button
      shuffleBtn.style.transform = 'rotate(180deg)';
      setTimeout(() => { shuffleBtn.style.transform = ''; }, 350);
      shuffleAndDisplay();
    });
  }
}

/**
 * Architectural Work Dropdown Flyout
 */
function setupWorkDropdown() {
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  const workParent = document.getElementById('nav-work-parent');
  const workLink = document.getElementById('nav-work-link');
  const brandLink = document.getElementById('brand-link');

  // Dynamic counts for dropdown categories
  const counts = {
    all: portfolioData.length,
    exterior: portfolioData.filter(i => i.category === 'exterior').length,
    interior: portfolioData.filter(i => i.category === 'interior').length,
    commercial: portfolioData.filter(i => i.category === 'commercial').length,
    catalog: PORTFOLIO_TARGETS.catalog.length,
    engineering: PORTFOLIO_TARGETS.engineering.length,
    compare: portfolioData.filter(i => i.type === 'compare').length,
    video: portfolioData.filter(i => i.type === 'video').length,
    seasons: portfolioData.filter(i => i.type === 'seasons').length,
  };

  dropdownItems.forEach(item => {
    const filter = item.getAttribute('data-filter');
    const countEl = item.querySelector('.dropdown-count');
    if (countEl && counts[filter] !== undefined) {
      countEl.textContent = counts[filter];
    }

    item.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Close dropdown if opened on touch
      if (workParent) {
        workParent.classList.remove('is-open');
      }

      if (filter === 'seasons') {
        setFilter('all');
        setTimeout(() => {
          const seasonsEl = document.getElementById('work-stagioni');
          if (seasonsEl) {
            seasonsEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            seasonsEl.classList.add('season-highlight-pulse');
            setTimeout(() => seasonsEl.classList.remove('season-highlight-pulse'), 2400);
          }
        }, 150);
      } else {
        setFilter(filter || 'all');
        const worksSec = document.getElementById('works');
        if (worksSec) {
          worksSec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Mobile / Touch toggle support & Desktop click on "Work"
  if (workLink) {
    workLink.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        if (workParent) {
          workParent.classList.toggle('is-open');
        }
      } else {
        // Desktop: clicking "Work" resets to all works, reshuffles, scrolls to top of gallery
        e.preventDefault();
        setFilter('all');
        const worksSec = document.getElementById('works');
        if (worksSec) {
          worksSec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  // Click on Brand Logo: resets to all works, reshuffles, scrolls to works
  if (brandLink) {
    brandLink.addEventListener('click', (e) => {
      e.preventDefault();
      setFilter('all');
      const worksSec = document.getElementById('works');
      if (worksSec) {
        worksSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Click outside to close mobile dropdown
  document.addEventListener('click', (e) => {
    if (workParent && !workParent.contains(e.target)) {
      workParent.classList.remove('is-open');
    }
  });
}

/**
 * Hash router for deep linking e.g. #stagioni or #works
 */
function setupHashRouter() {
  function handleHash() {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#stagioni' || hash === '#le-quattro-stagioni') {
      if (activeFilter !== 'all' && activeFilter !== 'exterior' && activeFilter !== 'seasons') {
        setFilter('all');
      }
      setTimeout(() => {
        const seasonsEl = document.getElementById('work-stagioni');
        if (seasonsEl) {
          seasonsEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          seasonsEl.classList.add('season-highlight-pulse');
          setTimeout(() => seasonsEl.classList.remove('season-highlight-pulse'), 2400);
        }
      }, 300);
    }
    if (hash.startsWith('#lightbox')) {
      const parts = hash.split('-');
      const idx = parts.length > 1 ? parseInt(parts[1], 10) : 0;
      setTimeout(() => openLightbox(isNaN(idx) ? 0 : idx), 300);
    }
  }

  window.addEventListener('hashchange', handleHash);
  if (window.location.hash) {
    setTimeout(handleHash, 450);
  }
}

/**
 * Standalone Section Comparison Slider (Section 01)
 */
function setupStandaloneComparison() {
  if (!comparisonSlider || !compareClayLayer || !compareHandle) return;

  let isDragging = false;

  const update = (clientX) => {
    const rect = comparisonSlider.getBoundingClientRect();
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const pct = Math.max(2, Math.min(98, (x / rect.width) * 100));

    compareClayLayer.style.clipPath = `polygon(0 0, ${pct}% 0, ${pct}% 100%, 0 100%)`;
    compareHandle.style.left = `${pct}%`;
  };

  comparisonSlider.addEventListener('mousedown', (e) => {
    isDragging = true;
    update(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    update(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  comparisonSlider.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches && e.touches[0]) update(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches || !e.touches[0]) return;
    update(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

/**
 * Museum-Grade Lightbox & Fullscreen Viewer ("A tutta pagina")
 * - Side-by-side horizontal slide track
 * - Mouse wheel & trackpad horizontal scrolling (Benny's Directive)
 * - Brand logo back button in top-left (Benny's Directive)
 * - Full-screen edge-to-edge layout ("a tutta pagina")
 * - Renders, Looping Videos, Wireframe Sliders, and 4-Seasons Bioclimatic Study
 */

let lbSeasonsInterval = null;

function setupLightbox() {
  if (!lightbox) return;

  // Close with Top-Left Brand Logo (Benny's Request: "metti il logo in alto a sinistra per tornare indietro")
  if (lbBrandBack) {
    lbBrandBack.addEventListener('click', closeLightbox);
  }

  // Close with top-right X button
  if (lbClose) {
    lbClose.addEventListener('click', closeLightbox);
  }

  // Next / Prev Navigation Buttons
  if (lbNext) lbNext.addEventListener('click', () => stepLightbox(1));
  if (lbPrev) lbPrev.addEventListener('click', () => stepLightbox(-1));

  // Zoom Button (for photoreal still renders)
  if (lbZoom) lbZoom.addEventListener('click', toggleZoom);

  // Audio Toggle Button (for 3D architectural videos)
  if (lbAudioToggle) lbAudioToggle.addEventListener('click', toggleAudio);

  // Lightbox -> Quote CTA Bridge
  const lbQuoteBtn = document.getElementById('lb-quote-btn');
  if (lbQuoteBtn) {
    lbQuoteBtn.addEventListener('click', () => {
      const currentRawItem = displayedItems[currentLightboxIndex];
      closeLightbox();
      if (currentRawItem && typeof window.prefillContactFromProject === 'function') {
        window.prefillContactFromProject(currentRawItem);
      }
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Keyboard Navigation (Esc, Left/Right arrows, Z for zoom, M for mute)
  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') stepLightbox(1);
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'z' || e.key === 'Z') toggleZoom();
    if (e.key === 'm' || e.key === 'M') toggleAudio();
  });

  // Close when clicking directly on the backdrop
  lightbox.addEventListener('click', (e) => {
    if (e.target.classList.contains('lightbox-backdrop')) {
      closeLightbox();
    }
  });

  // MOUSE WHEEL & TRACKPAD HORIZONTAL SCROLLING (BENNY'S DIRECTIVE: "scorrere in orizzontale affiancando le immagini con lo scroll del mouse")
  let isWheelThrottled = false;
  let wheelDeltaSum = 0;

  lightbox.addEventListener('wheel', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (isZoomed) {
      resetZoom();
    }

    e.preventDefault();

    if (isWheelThrottled) return;

    // Determine dominant scroll direction: deltaX (trackpad swipe) or deltaY (mouse wheel)
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    wheelDeltaSum += delta;

    if (Math.abs(wheelDeltaSum) >= 18) {
      if (wheelDeltaSum > 0) {
        stepLightbox(1);
      } else {
        stepLightbox(-1);
      }
      wheelDeltaSum = 0;
      isWheelThrottled = true;
      setTimeout(() => {
        isWheelThrottled = false;
      }, 260); // Clean 260ms cooldown for smooth, controlled paging
    }
  }, { passive: false });

  // TOUCH SWIPE NAVIGATION FOR TOUCHSCREENS
  let touchStartX = 0;
  let touchStartY = 0;

  lightbox.addEventListener('touchstart', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.touches && e.touches[0]) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (!touchStartX || !e.changedTouches || !e.changedTouches[0]) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        stepLightbox(1);
      } else {
        stepLightbox(-1);
      }
    }
    touchStartX = 0;
    touchStartY = 0;
  }, { passive: true });

  // Re-center active slide on window resize
  window.addEventListener('resize', () => {
    if (lightbox && lightbox.classList.contains('active')) {
      goToLightboxSlide(currentLightboxIndex, true);
    }
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  renderLightboxTrack();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  resetZoom();
  try { setupWeldingSpark(); } catch (e) {}
  requestAnimationFrame(() => {
    goToLightboxSlide(index, true);
  });
  setTimeout(() => {
    if (lightbox && lightbox.classList.contains('active')) {
      goToLightboxSlide(currentLightboxIndex, true);
    }
  }, 60);
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
  // Stop all active videos
  if (lbStageTrack) {
    lbStageTrack.querySelectorAll('video').forEach(v => {
      v.pause();
    });
  }
  stopLightboxSeasons();
  resetZoom();
}

function stepLightbox(direction) {
  if (displayedItems.length === 0) return;
  const targetIndex = currentLightboxIndex + direction;
  // Clamping at ends preserves seamless orientation in the 24-piece collection
  if (targetIndex >= 0 && targetIndex < displayedItems.length) {
    goToLightboxSlide(targetIndex);
  }
}

function goToLightboxSlide(index, isInstant = false) {
  if (displayedItems.length === 0) return;
  index = Math.max(0, Math.min(index, displayedItems.length - 1));

  // Stop prior video or seasons
  stopLightboxSeasons();
  if (lbStageTrack) {
    lbStageTrack.querySelectorAll('video').forEach(v => v.pause());
  }
  resetZoom();

  currentLightboxIndex = index;
  const rawItem = displayedItems[currentLightboxIndex];
  if (!rawItem) return;
  const item = getLocalizedItem(rawItem);

  // Move the horizontal track (Center the active slide in the viewport)
  if (lbStageTrack) {
    const slide = lbStageTrack.children[index];
    if (slide) {
      const slideLeft = slide.offsetLeft;
      const slideWidth = slide.offsetWidth;
      const viewportWidth = window.innerWidth;
      const maxScroll = Math.max(0, lbStageTrack.scrollWidth - viewportWidth);
      let targetX = slideLeft - (viewportWidth - slideWidth) / 2;
      targetX = Math.max(0, Math.min(targetX, maxScroll));

      if (isInstant) {
        lbStageTrack.style.transition = 'none';
        lbStageTrack.style.transform = `translateX(-${targetX}px)`;
        void lbStageTrack.offsetWidth; // Force reflow
        lbStageTrack.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
      } else {
        lbStageTrack.style.transform = `translateX(-${targetX}px)`;
      }
    }
  }

  // Update header text (Notice: NO badge per Benny's directive)
  if (lbTitle) lbTitle.textContent = item.title;
  if (lbMeta) lbMeta.textContent = `${formatCategory(item.category)} · ${item.location}`;

  // Update footer text
  if (lbDesc) lbDesc.textContent = item.desc;
  if (lbCurrent) lbCurrent.textContent = index + 1;
  if (lbTotal) lbTotal.textContent = displayedItems.length;

  // Update arrow availability
  if (lbPrev) {
    lbPrev.style.opacity = index === 0 ? '0.2' : '1';
    lbPrev.style.pointerEvents = index === 0 ? 'none' : 'auto';
  }
  if (lbNext) {
    lbNext.style.opacity = index === displayedItems.length - 1 ? '0.2' : '1';
    lbNext.style.pointerEvents = index === displayedItems.length - 1 ? 'none' : 'auto';
  }

  // Contextual controls: Audio, Zoom, Video Auto-Play, Seasons Auto-Play
  const activeSlide = lbStageTrack ? lbStageTrack.children[index] : null;

  if (item.type === 'video') {
    if (lbZoom) lbZoom.style.display = 'none';
    if (lbAudioToggle) lbAudioToggle.style.display = 'flex';
    if (activeSlide) {
      const vid = activeSlide.querySelector('video');
      if (vid) {
        vid.muted = isAudioMuted;
        vid.play().catch(() => {});
      }
    }
    updateAudioIcon();
  } else if (item.type === 'seasons') {
    if (lbZoom) lbZoom.style.display = 'none';
    if (lbAudioToggle) lbAudioToggle.style.display = 'none';
    if (activeSlide) {
      setupLightboxSeasonsInSlide(activeSlide, item);
    }
  } else if (item.type === 'compare') {
    if (lbZoom) lbZoom.style.display = 'none';
    if (lbAudioToggle) lbAudioToggle.style.display = 'none';
  } else {
    // Photoreal Render
    if (lbZoom) lbZoom.style.display = 'flex';
    if (lbAudioToggle) lbAudioToggle.style.display = 'none';
  }
}

/**
 * Builds all slides side-by-side in the horizontal track
 */
function renderLightboxTrack() {
  if (!lbStageTrack) return;
  lbStageTrack.innerHTML = '';

  displayedItems.forEach((item, index) => {
    let slide;
    if (item.type === 'video') {
      slide = createVideoSlide(item, index);
    } else if (item.type === 'compare') {
      slide = createCompareSlide(item, index);
    } else if (item.type === 'seasons') {
      slide = createSeasonsSlide(item, index);
    } else {
      slide = createRenderSlide(item, index);
    }

    // Clicking an adjacent slide scrolls it to center
    slide.addEventListener('click', (e) => {
      if (e.target.closest('.compare-handle') || 
          e.target.closest('.lb-seasons-tabs-bar') || 
          e.target.closest('.lb-seasons-pause-btn') || 
          e.target.closest('video[controls]')) {
        return;
      }
      if (index !== currentLightboxIndex) {
        goToLightboxSlide(index);
      }
    });

    lbStageTrack.appendChild(slide);
  });
}

function createRenderSlide(item, index) {
  const slide = document.createElement('div');
  slide.className = 'lb-slide lb-slide-render';
  slide.dataset.index = index;
  const flexVal = item.flex || 1.35;
  slide.style.flex = `0 0 calc(100vh * ${flexVal})`;
  slide.style.width = `calc(100vh * ${flexVal})`;
  slide.innerHTML = `
    <div class="lb-img-wrapper">
      <img src="${item.image}" alt="${item.title}" class="lb-fullscreen-img" loading="lazy" />
    </div>
  `;
  const img = slide.querySelector('.lb-fullscreen-img');
  img.addEventListener('dblclick', toggleZoom);
  return slide;
}

function createVideoSlide(item, index) {
  const slide = document.createElement('div');
  slide.className = 'lb-slide lb-slide-video';
  slide.dataset.index = index;
  const flexVal = item.flex || 1.4;
  slide.style.flex = `0 0 calc(100vh * ${flexVal})`;
  slide.style.width = `calc(100vh * ${flexVal})`;
  slide.innerHTML = `
    <div class="lb-video-wrapper">
      <video src="${item.videoSrc}" poster="${item.poster || item.image || ''}" playsinline loop controls class="lb-fullscreen-video"></video>
    </div>
  `;
  return slide;
}

function createCompareSlide(item, index) {
  const slide = document.createElement('div');
  slide.className = 'lb-slide lb-slide-compare';
  slide.dataset.index = index;
  const flexVal = item.flex || 1.5;
  slide.style.flex = `0 0 calc(100vh * ${flexVal})`;
  slide.style.width = `calc(100vh * ${flexVal})`;
  slide.innerHTML = `
    <div class="lb-compare-wrapper">
      <div class="lb-compare-slider">
        <div class="lb-compare-layer lb-layer-render">
          <img src="${item.imageRender}" alt="${item.title} - Render">
        </div>
        <div class="lb-compare-layer lb-layer-wire">
          <img src="${item.imageWireframe}" alt="${item.title} - Wireframe">
        </div>
        <div class="compare-handle">
          <div class="handle-circle" aria-label="Trascina per confrontare">
            <span class="handle-o-line"></span>
          </div>
        </div>
      </div>
    </div>
  `;
  setupCompareSliderElement(slide.querySelector('.lb-compare-slider'));
  return slide;
}

function setupCompareSliderElement(slider) {
  if (!slider) return;
  const wireLayer = slider.querySelector('.lb-layer-wire');
  const handle = slider.querySelector('.compare-handle');
  if (!wireLayer || !handle) return;

  let isDragging = false;

  const update = (clientX) => {
    const rect = slider.getBoundingClientRect();
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const pct = Math.max(2, Math.min(98, (x / rect.width) * 100));

    wireLayer.style.clipPath = `polygon(0 0, ${pct}% 0, ${pct}% 100%, 0 100%)`;
    handle.style.left = `${pct}%`;
  };

  slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    update(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    update(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  slider.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches && e.touches[0]) update(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches || !e.touches[0]) return;
    update(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

function createSeasonsSlide(item, index) {
  const slide = document.createElement('div');
  slide.className = 'lb-slide lb-slide-seasons';
  slide.dataset.index = index;
  const flexVal = item.flex || 1.6;
  slide.style.flex = `0 0 calc(100vh * ${flexVal})`;
  slide.style.width = `calc(100vh * ${flexVal})`;
  slide.innerHTML = `
    <div class="lb-seasons-wrapper">
      <div class="lb-seasons-slider">
        <div class="lb-seasons-layers-wrap">
          ${item.seasons.map((s, idx) => `
            <div class="lb-season-layer ${idx === 0 ? 'is-active' : ''}" data-season-index="${idx}">
              <img src="${s.img}" alt="${s.name} - ${s.sub}">
            </div>
          `).join('')}
        </div>
        <div class="lb-seasons-caption">
          <span class="lb-season-eyebrow">Studio Bioclimatico</span>
          <h3 class="lb-season-name">${item.seasons[0].name}</h3>
          <p class="lb-season-sub" style="display: none;"></p>
        </div>
        <div class="lb-seasons-tabs-bar" role="tablist">
          ${item.seasons.map((s, idx) => `
            <button class="lb-season-tab ${idx === 0 ? 'is-active' : ''}" data-season="${idx}" type="button" role="tab">
              <span class="lb-season-tab-name">${s.name.toUpperCase()}</span>
              <span class="lb-season-progress"><span class="lb-season-fill"></span></span>
            </button>
          `).join('')}
        </div>
        <button class="lb-seasons-pause-btn" title="Pausa / Riproduci ciclo continuo" type="button">
          <svg class="pause-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
          <svg class="play-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="display: none;">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </button>
      </div>
    </div>
  `;
  return slide;
}

function stopLightboxSeasons() {
  if (lbSeasonsInterval) {
    clearInterval(lbSeasonsInterval);
    lbSeasonsInterval = null;
  }
}

function setupLightboxSeasonsInSlide(slide, item) {
  stopLightboxSeasons();
  if (!item || !item.seasons || item.seasons.length === 0) return;

  const layers = slide.querySelectorAll('.lb-season-layer');
  const tabs = slide.querySelectorAll('.lb-season-tab');
  const seasonName = slide.querySelector('.lb-season-name');
  const seasonSub = slide.querySelector('.lb-season-sub');
  const pauseBtn = slide.querySelector('.lb-seasons-pause-btn');

  let currentSeason = 0;
  let isPaused = false;
  const seasonDuration = 2200;
  const tickInterval = 50;
  let elapsed = 0;

  function updatePauseBtn() {
    if (!pauseBtn) return;
    const pauseIcon = pauseBtn.querySelector('.pause-icon');
    const playIcon = pauseBtn.querySelector('.play-icon');
    if (!pauseIcon || !playIcon) return;
    if (isPaused) {
      pauseIcon.style.display = 'none';
      playIcon.style.display = 'block';
      pauseBtn.title = 'Riproduci dissolvenza';
    } else {
      pauseIcon.style.display = 'block';
      playIcon.style.display = 'none';
      pauseBtn.title = 'Pausa dissolvenza';
    }
  }

  function applySeason(idx, resetElapsed = true) {
    currentSeason = idx;
    if (resetElapsed) elapsed = 0;

    layers.forEach((l, lIdx) => {
      if (lIdx === idx) {
        l.classList.add('is-active');
      } else {
        l.classList.remove('is-active');
      }
    });

    tabs.forEach((tab, tIdx) => {
      const fill = tab.querySelector('.lb-season-fill');
      if (tIdx === idx) {
        tab.classList.add('is-active');
        if (fill) fill.style.width = '0%';
      } else {
        tab.classList.remove('is-active');
        if (fill) fill.style.width = tIdx < idx ? '100%' : '0%';
      }
    });

    if (seasonName && item.seasons[idx]) {
      seasonName.style.opacity = '0';
      setTimeout(() => {
        seasonName.textContent = item.seasons[idx].name;
        if (seasonSub) seasonSub.textContent = item.seasons[idx].sub || '';
        seasonName.style.opacity = '1';
      }, 180);
    }
  }

  tabs.forEach((tab, tIdx) => {
    tab.onclick = (e) => {
      e.stopPropagation();
      applySeason(tIdx, true);
    };
  });

  if (pauseBtn) {
    pauseBtn.onclick = (e) => {
      e.stopPropagation();
      isPaused = !isPaused;
      updatePauseBtn();
    };
  }

  applySeason(0, true);

  lbSeasonsInterval = setInterval(() => {
    if (isPaused) return;
    elapsed += tickInterval;
    const progress = Math.min(100, (elapsed / seasonDuration) * 100);

    const activeTab = tabs[currentSeason];
    if (activeTab) {
      const fill = activeTab.querySelector('.lb-season-fill');
      if (fill) fill.style.width = `${progress}%`;
    }

    if (elapsed >= seasonDuration) {
      elapsed = 0;
      const nextSeason = (currentSeason + 1) % item.seasons.length;
      applySeason(nextSeason, true);
    }
  }, tickInterval);
}

function toggleAudio() {
  isAudioMuted = !isAudioMuted;
  if (lbStageTrack) {
    const currentSlide = lbStageTrack.children[currentLightboxIndex];
    if (currentSlide) {
      const vid = currentSlide.querySelector('video');
      if (vid) {
        vid.muted = isAudioMuted;
      }
    }
  }
  updateAudioIcon();
}

function updateAudioIcon() {
  if (!lbAudioToggle) return;
  const onIcon = lbAudioToggle.querySelector('.audio-unmuted-icon');
  const offIcon = lbAudioToggle.querySelector('.audio-muted-icon');
  if (!onIcon || !offIcon) return;

  if (isAudioMuted) {
    onIcon.style.display = 'none';
    offIcon.style.display = 'block';
    lbAudioToggle.title = 'Attiva Audio';
  } else {
    onIcon.style.display = 'block';
    offIcon.style.display = 'none';
    lbAudioToggle.title = 'Disattiva Audio';
  }
}

function toggleZoom() {
  if (!lbStageTrack) return;
  const currentSlide = lbStageTrack.children[currentLightboxIndex];
  if (!currentSlide) return;
  const img = currentSlide.querySelector('.lb-fullscreen-img');
  if (!img) return;

  isZoomed = !isZoomed;
  if (isZoomed) {
    img.classList.add('zoomed');
    if (lbZoom) {
      lbZoom.classList.add('active');
      const inIcon = lbZoom.querySelector('.zoom-in-icon');
      const outIcon = lbZoom.querySelector('.zoom-out-icon');
      if (inIcon) inIcon.style.display = 'none';
      if (outIcon) outIcon.style.display = 'block';
    }
  } else {
    resetZoom();
  }
}

function resetZoom() {
  isZoomed = false;
  if (lbZoom) {
    lbZoom.classList.remove('active');
    const inIcon = lbZoom.querySelector('.zoom-in-icon');
    const outIcon = lbZoom.querySelector('.zoom-out-icon');
    if (inIcon) inIcon.style.display = 'block';
    if (outIcon) outIcon.style.display = 'none';
  }
  if (lbStageTrack) {
    const allImgs = lbStageTrack.querySelectorAll('.lb-fullscreen-img.zoomed');
    allImgs.forEach(img => img.classList.remove('zoomed'));
  }
}

/**
 * YouTube Reel Modal
 */
function setupReelModal() {
  if (!videoModal || !videoIframe || !videoClose) return;

  reelTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const videoId = btn.getAttribute('data-video-id');
      if (!videoId) return;

      videoIframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeVideo = () => {
    videoModal.classList.remove('active');
    videoIframe.src = '';
    document.body.style.overflow = '';
  };

  videoClose.addEventListener('click', closeVideo);

  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideo();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
      closeVideo();
    }
  });
}

/**
 * Light / Dark Theme Management
 */
function setupTheme() {
  const savedTheme = localStorage.getItem('oe_visual_theme') || 'light';
  applyTheme(savedTheme);

  // Global delegated click handler: guarantees every click on either button or inner SVG toggles theme cleanly
  document.addEventListener('click', (e) => {
    const toggleBtn = e.target.closest('#theme-toggle, #lb-theme-toggle');
    if (toggleBtn) {
      e.preventDefault();
      e.stopPropagation();
      const isDark = document.body.classList.contains('theme-dark') || document.documentElement.classList.contains('theme-dark');
      const newTheme = isDark ? 'light' : 'dark';
      applyTheme(newTheme);
    }
  });
}

function applyTheme(theme) {
  const isDark = (theme === 'dark');
  document.body.classList.toggle('theme-dark', isDark);
  document.body.classList.toggle('theme-light', !isDark);
  document.documentElement.classList.toggle('theme-dark', isDark);
  document.documentElement.classList.toggle('theme-light', !isDark);
  localStorage.setItem('oe_visual_theme', theme);

  const toggleButtons = document.querySelectorAll('#theme-toggle, #lb-theme-toggle');
  toggleButtons.forEach(btn => {
    btn.setAttribute('aria-label', isDark ? 'Passa al tema chiaro' : 'Passa al tema scuro');
    btn.setAttribute('title', isDark ? 'Tema Chiaro' : 'Tema Scuro');
  });
}

/**
 * Navbar Smooth Scroll Spy
 */
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-target') === current) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   INTERACTIVE TEAM AVATARS: BENNY, MICHELE, MARCO & ANGELO (v3.3)
   Axiom Compliant: €0.00 cost, Local Web Speech API Voice Synthesis, Real Q&A
   ========================================================================== */
const teamAvatarData = {
  benedetto: {
    name: "Arch. Benedetto Brattoli",
    role: "Founder & Direttore Creativo",
    status: "In Studio · Disponibile al dialogo",
    photo: "assets/team/benedetto.jpg?v=3.4",
    waPhone: "393478631379",
    voicePitch: 1.0,
    voiceRate: 0.98,
    intro: "Benvenuto in OE Visual! Sono Benedetto Brattoli. Il nostro segreto è saper leggere l'architettura prima ancora del 3D: orientamento solare, contrasto materico e pulizia geometrica. Clicca sulle domande o scrivimi direttamente su WhatsApp per analizzare insieme i tuoi disegni.",
    answers: {
      segreto: "Il segreto di un render vincente non è l'effetto speciale, ma la sensibilità architettonica. Studiamo la vera orografia del luogo, la luce solare all'ora esatta del giorno e l'anima dei materiali — che sia pietra di Trani o microcemento. È questo che emoziona il cliente e chiude la trattativa immobiliare.",
      tempi: "Per le prime bozze d'inquadratura volumetrica e studio luce Clay bastano solitamente 48–72 ore. La consegna finale del set completo in altissima risoluzione avviene entro 5–7 giorni lavorativi, con tutte le revisioni intermedie incluse fino alla tua piena approvazione."
    }
  },
  michele: {
    name: "Ing. Michele De Pinto",
    role: "Co-Founder & Direttore Tecnico",
    status: "In Studio / Coordinamento BIM",
    photo: "assets/team/michele.jpg?v=3.4",
    waPhone: "393478631379",
    voicePitch: 0.94,
    voiceRate: 1.0,
    intro: "Buongiorno! Sono l'Ing. Michele De Pinto. Per noi la precisione geometrica è un valore fondamentale. Qualsiasi file ci invierai, lo convertiamo e ottimizziamo rispettando tolleranze strutturali e nodi costruttivi.",
    answers: {
      file: "Importiamo qualsiasi formato di modellazione e disegno: file BIM Revit (.rvt), file IFC standard, modelli SketchUp (.skp), Rhino (.3dm), 3ds Max, Blender, o semplici planimetrie DWG bidimensionali e PDF di progetto che ricostruiamo noi in 3D con precisione millimetrica.",
      video: "Assolutamente sì. Realizziamo Cinema Reel e animazioni cinematografiche fluide a 60fps in 4K, simulazioni delle fasi costruttive e di cantiere per concorsi o bandi pubblici, e video teaser d'impatto pensati per catturare investitori internazionali e buyer sui canali social."
    }
  },
  marco: {
    name: "Arch. Marco Brunori",
    role: "Co-Founder & Senior Architect",
    status: "In Studio Design & Styling",
    photo: "assets/team/marco.jpg?v=3.4",
    waPhone: "393478631379",
    voicePitch: 1.06,
    voiceRate: 0.98,
    intro: "Ciao! Sono l'Arch. Marco Brunori. Negli interni e nel retail di lusso, la magia nasce dall'accordo armonico tra illuminazione calda radente e morbidezza materica. Come posso aiutarti sul tuo progetto?",
    answers: {
      arredi: "Lavoriamo a stretto contatto con il moodboard del tuo progetto. Inseriamo complementi d'arredo dei più prestigiosi brand internazionali di design contemporaneo, oppure modelliamo da schede tecniche fornite dal committente ogni singolo mobile custom, illuminazione decorativa e tessuto artigianale.",
      cataloghi: "Creiamo cataloghi fotografici virtuali per brand d'arredo, cucine e rivestimenti industriali. Il render sostituisce i costosi set fotografici tradizionali: permette di variare all'infinito legni, laccature, marmi o inquadrature con una flessibilità totale e costi certi e contenuti."
    }
  },
  angelo: {
    name: "Angelo Croce",
    role: "3D Visualizer & Senior Modeler",
    status: "In Studio 3D · Modellazione & Lighting",
    photo: "assets/team/angelo.jpg?v=3.4",
    waPhone: "393478631379",
    voicePitch: 1.02,
    voiceRate: 1.0,
    intro: "Ciao! Sono Angelo Croce, 3D Modeler & Visualizer di OE Visual. Mi occupo di trasformare disegni e concept in modelli tridimensionali ricchi di dettaglio e rendering fotorealistici. Clicca sui quesiti per scoprire il nostro processo.",
    answers: {
      modellazione: "Partiamo da schizzi concettuali, rilievi fotografici o file CAD bidimensionali: costruiamo il modello poligonale con topologia pulita, pronto sia per rendering statici ad altissima risoluzione che per animazioni fluide.",
      materiali: "Utilizziamo shader fisicamente corretti (PBR) con mappe personalizzate di rugosità, bump e riflessione per riprodurre fedelmente la tattilità di ogni materiale: dal marmo venato al legno spazzolato, dai metalli satinati ai tessuti d'arredo."
    }
  }
};

let activeSpeakerKey = 'benedetto';
let currentSpeechText = teamAvatarData.benedetto.intro;
let currentQuestionKey = 'intro';
let currentAudio = null;
let currentUtterance = null;
let isSpeaking = false;
let typewriterInterval = null;

function setupTeamAvatars() {
  const avatarCards = document.querySelectorAll('.avatar-card');
  const askBtns = document.querySelectorAll('.avatar-ask-btn');
  const speakBtns = document.querySelectorAll('.avatar-speak-btn');
  const consoleReadBtn = document.getElementById('console-read-btn');
  const voiceWave = document.getElementById('voice-wave');

  // Activate Benny by default
  activateAvatarSpeaker('benedetto', null, false);

  // Click on avatar card triggers intro & speaks directly
  avatarCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.avatar-ask-btn') || e.target.closest('.avatar-speak-btn') || e.target.closest('.avatar-wa-btn')) {
        return;
      }
      const member = card.getAttribute('data-member');
      if (member) activateAvatarSpeaker(member, null, true);
    });
  });

  // Question buttons: select, show answer & speak directly with neural voice
  askBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const member = btn.getAttribute('data-member');
      const question = btn.getAttribute('data-q');
      if (member && question) {
        activateAvatarSpeaker(member, question, true);
      }
    });
  });

  // Perched interactive miniature figures click (v3.2)
  const perchFigures = document.querySelectorAll('.avatar-card-perch');
  perchFigures.forEach(perch => {
    perch.addEventListener('click', (e) => {
      e.stopPropagation();
      const member = perch.getAttribute('data-member');
      if (member) {
        activateAvatarSpeaker(member, null, true);
      }
    });
  });

  // Direct Speak buttons on cards
  speakBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const member = btn.getAttribute('data-member');
      if (member) {
        activateAvatarSpeaker(member, null, true);
      }
    });
  });

  // Console Read/Listen Toggle Button
  if (consoleReadBtn) {
    consoleReadBtn.addEventListener('click', () => {
      if (isSpeaking) {
        stopVoiceSpeech();
      } else {
        playVoiceSpeech(currentSpeechText, activeSpeakerKey, currentQuestionKey);
      }
    });
  }

  // Pre-load voices if supported
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      // Voices loaded
    };
  }
}

/**
 * 60fps Biomechanical 10-Frame Walk + Tablet-Reading Idle Engine for Arch. Benedetto Brattoli
 * Frames 0..7: 8-phase articulated gait cycle (hip, knee & ankle-compensated suede shoes)
 * Frame 8: Natural standing pose (feet planted flat on the border line)
 * Frame 9: Standing tablet-tapping / head-nodding interaction pose
 */
function initBennyBiomechanicalRig() {
  const canvas = document.getElementById('benny-perch-canvas');
  const perch = document.getElementById('benny-perch-rig');
  if (!canvas || !perch) return;

  const ctx = canvas.getContext('2d');
  const atlas = new Image();
  atlas.src = 'assets/team/figures/benny-walk-atlas.png?v=3.5';

  let state = 'WALK_RIGHT'; // WALK_RIGHT -> PAUSE_RIGHT -> WALK_LEFT -> PAUSE_LEFT
  let posX = 0;
  const maxPosX = 144;
  const walkSpeed = 28; // px per second — synchronized with 8-frame stride length
  const frameRate = 8.8; // walk frames per second
  let walkCyclePos = 0;
  let pauseElapsed = 0;
  let facingDir = 1;
  let lastTime = performance.now();

  function renderFrame(frameIdx) {
    ctx.clearRect(0, 0, 100, 114);
    const sx = Math.max(0, Math.min(9, Math.floor(frameIdx))) * 100;
    ctx.drawImage(atlas, sx, 0, 100, 114, 0, 0, 100, 114);
  }

  function tick(now) {
    const dt = Math.min(0.05, (now - lastTime) / 1000);
    lastTime = now;

    if (state === 'WALK_RIGHT') {
      facingDir = 1;
      posX += walkSpeed * dt;
      walkCyclePos = (walkCyclePos + frameRate * dt) % 8;
      renderFrame(walkCyclePos);
      if (posX >= maxPosX) {
        posX = maxPosX;
        state = 'PAUSE_RIGHT';
        pauseElapsed = 0;
      }
    } else if (state === 'PAUSE_RIGHT') {
      pauseElapsed += dt;
      // Stand naturally on both feet (frame 8) and tap tablet twice with stylus (frame 9)
      const isTapping = (pauseElapsed > 0.6 && pauseElapsed < 1.0) || (pauseElapsed > 1.5 && pauseElapsed < 1.9);
      renderFrame(isTapping ? 9 : 8);
      // Turn toward left while standing at 2.2s, then start walking at 2.6s
      if (pauseElapsed > 2.25) facingDir = -1;
      if (pauseElapsed >= 2.65) {
        state = 'WALK_LEFT';
        walkCyclePos = 0;
      }
    } else if (state === 'WALK_LEFT') {
      facingDir = -1;
      posX -= walkSpeed * dt;
      walkCyclePos = (walkCyclePos + frameRate * dt) % 8;
      renderFrame(walkCyclePos);
      if (posX <= 0) {
        posX = 0;
        state = 'PAUSE_LEFT';
        pauseElapsed = 0;
      }
    } else if (state === 'PAUSE_LEFT') {
      pauseElapsed += dt;
      const isTapping = (pauseElapsed > 0.5 && pauseElapsed < 0.9) || (pauseElapsed > 1.4 && pauseElapsed < 1.8);
      renderFrame(isTapping ? 9 : 8);
      if (pauseElapsed > 2.1) facingDir = 1;
      if (pauseElapsed >= 2.5) {
        state = 'WALK_RIGHT';
        walkCyclePos = 0;
      }
    }

    perch.style.transform = `translateX(${posX.toFixed(1)}px) scaleX(${facingDir})`;
    requestAnimationFrame(tick);
  }

  atlas.onload = () => {
    renderFrame(8);
    lastTime = performance.now();
    requestAnimationFrame(tick);
  };
}

/**
 * Updates Dialogue Screen & triggers Typewriter
 */
function activateAvatarSpeaker(memberKey, questionKey = null, autoSpeak = false) {
  const member = teamAvatarData[memberKey];
  if (!member) return;

  activeSpeakerKey = memberKey;

  // Highlight card
  document.querySelectorAll('.avatar-card').forEach(card => {
    if (card.getAttribute('data-member') === memberKey) {
      card.classList.add('active-speaker');
    } else {
      card.classList.remove('active-speaker');
    }
  });

  // Update Console Elements
  const consoleAvatarImg = document.getElementById('console-avatar-img');
  const consoleSpeakerName = document.getElementById('console-speaker-name');
  const consoleSpeakerStatus = document.getElementById('console-speaker-status');
  const consoleSpeechText = document.getElementById('console-speech-text');
  const consoleWaBtn = document.getElementById('console-wa-btn');

  if (consoleAvatarImg) consoleAvatarImg.src = member.photo;
  if (consoleSpeakerName) consoleSpeakerName.textContent = member.name;
  if (consoleSpeakerStatus) consoleSpeakerStatus.textContent = member.status;

  // Determine message
  let text = member.intro;
  currentQuestionKey = 'intro';
  if (questionKey && member.answers && member.answers[questionKey]) {
    text = member.answers[questionKey];
    currentQuestionKey = questionKey;
  }
  currentSpeechText = text;

  // Typewriter display
  typewriterSpeech(consoleSpeechText, text);

  // Update WhatsApp link
  if (consoleWaBtn) {
    const waText = encodeURIComponent(`Buongiorno ${member.name}, vorrei approfondire un progetto per OE Visual`);
    consoleWaBtn.href = `https://wa.me/${member.waPhone}?text=${waText}`;
    const namePart = member.name.replace('Arch. ', '').replace('Ing. ', '');
    consoleWaBtn.innerHTML = `<span>Approfondisci su WhatsApp con ${namePart} →</span>`;
  }

  // Audio Playback
  if (autoSpeak) {
    playVoiceSpeech(text, memberKey, currentQuestionKey);
  } else {
    stopVoiceSpeech();
  }
}

/**
 * Typewriter effect for speech box
 */
function typewriterSpeech(targetEl, text, speed = 14) {
  if (!targetEl) return;
  if (typewriterInterval) clearInterval(typewriterInterval);

  targetEl.textContent = '';
  let index = 0;

  typewriterInterval = setInterval(() => {
    if (index < text.length) {
      targetEl.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(typewriterInterval);
      typewriterInterval = null;
    }
  }, speed);
}

/**
 * Real Neural Italian Voice MP3 Playback (Gemini Pro TTS) + Talking Figure State
 */
function setTalkingVisualState(memberKey, talking) {
  document.querySelectorAll('.avatar-card').forEach(card => {
    if (talking && card.getAttribute('data-member') === memberKey) {
      card.classList.add('is-talking');
    } else {
      card.classList.remove('is-talking');
    }
  });
}

function playVoiceSpeech(text, memberKey, questionKey = 'intro') {
  stopVoiceSpeech();

  const voiceWave = document.getElementById('voice-wave');
  const readBtn = document.getElementById('console-read-btn');
  const audioLabel = document.getElementById('console-audio-label');

  const onTalkStart = () => {
    isSpeaking = true;
    setTalkingVisualState(memberKey, true);
    if (voiceWave) voiceWave.classList.add('speaking');
    if (readBtn) readBtn.classList.add('active-speaking');
    if (audioLabel) audioLabel.textContent = "Pausa / Interrompi";
  };

  const onTalkEnd = () => {
    isSpeaking = false;
    setTalkingVisualState(memberKey, false);
    if (voiceWave) voiceWave.classList.remove('speaking');
    if (readBtn) readBtn.classList.remove('active-speaking');
    if (audioLabel) audioLabel.textContent = "Riascolta la risposta";
  };

  const audioSrc = `assets/team/audio/${memberKey}_${questionKey || 'intro'}.mp3`;
  const audio = new Audio(audioSrc);
  currentAudio = audio;

  audio.addEventListener('play', onTalkStart);
  audio.addEventListener('ended', onTalkEnd);
  audio.addEventListener('error', () => {
    // Fallback to browser Web Speech API if MP3 missing/offline
    fallbackWebSpeech(text, memberKey, onTalkStart, onTalkEnd);
  });

  audio.play().catch(() => {
    fallbackWebSpeech(text, memberKey, onTalkStart, onTalkEnd);
  });
}

function fallbackWebSpeech(text, memberKey, onTalkStart, onTalkEnd) {
  if (!('speechSynthesis' in window)) {
    onTalkEnd();
    return;
  }
  const member = teamAvatarData[memberKey] || teamAvatarData.benedetto;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'it-IT';
  utterance.rate = member.voiceRate || 0.98;
  utterance.pitch = member.voicePitch || 1.0;

  const voices = window.speechSynthesis.getVoices();
  const itVoice = voices.find(v => v.lang.startsWith('it') || v.lang === 'it_IT');
  if (itVoice) utterance.voice = itVoice;

  utterance.onstart = onTalkStart;
  utterance.onend = onTalkEnd;
  utterance.onerror = onTalkEnd;

  currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

function stopVoiceSpeech() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  isSpeaking = false;
  setTalkingVisualState(null, false);
  const voiceWave = document.getElementById('voice-wave');
  const readBtn = document.getElementById('console-read-btn');
  const audioLabel = document.getElementById('console-audio-label');

  if (voiceWave) voiceWave.classList.remove('speaking');
  if (readBtn) readBtn.classList.remove('active-speaking');
  if (audioLabel) audioLabel.textContent = "Ascolta la risposta";
}

/* ==========================================================================
   ELEVATED CONTACT SECTION & PROJECT CONFIGURATOR
   Interactive Pills, 1-Click Clipboard Email, Dynamic WhatsApp Brief Forwarder
   ========================================================================== */
function setupContactConfigurator() {
  // Sector / Target Profile Pills
  const sectorPills = document.querySelectorAll('#sector-pills .choice-pill');
  let selectedSector = 'Studio di Architettura';
  const selectPillByVal = (pills, targetVal) => {
    let matched = false;
    pills.forEach(p => {
      if ((p.getAttribute('data-val') || '') === targetVal) {
        pills.forEach(x => x.classList.remove('active'));
        p.classList.add('active');
        matched = true;
      }
    });
    return matched;
  };

  sectorPills.forEach(pill => {
    pill.addEventListener('click', () => {
      sectorPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedSector = pill.getAttribute('data-val') || pill.textContent.trim();
    });
  });

  // Service Pills Selection
  const servicePills = document.querySelectorAll('#service-pills .choice-pill');
  let selectedService = 'Villa Unifamiliare';
  servicePills.forEach(pill => {
    pill.addEventListener('click', () => {
      servicePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedService = pill.getAttribute('data-val') || pill.textContent.trim();
    });
  });

  // Timeline Pills Selection
  const timelinePills = document.querySelectorAll('#timeline-pills .choice-pill');
  let selectedTimeline = 'Standard (2-3 settimane)';
  timelinePills.forEach(pill => {
    pill.addEventListener('click', () => {
      timelinePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedTimeline = pill.getAttribute('data-val') || pill.textContent.trim();
    });
  });

  // Expose Lightbox -> Contact Prefill Helper
  window.prefillContactFromProject = (rawItem) => {
    const locItem = getLocalizedItem(rawItem);
    const notesEl = document.getElementById('f-notes');
    const form = document.getElementById('project-inquiry-form');
    const successBanner = document.getElementById('form-success-banner');
    if (form && form.style.display === 'none') {
      form.style.display = '';
      if (successBanner) successBanner.style.display = 'none';
    }

    let targetService = 'Villa Unifamiliare';
    let targetSector = 'Studio di Architettura';

    if (PORTFOLIO_TARGETS.catalog.includes(rawItem.id)) {
      targetService = 'Cataloghi & Product Design';
      targetSector = 'Azienda / Cataloghi Prodotto';
    } else if (PORTFOLIO_TARGETS.engineering.includes(rawItem.id) || rawItem.type === 'compare' || rawItem.type === 'seasons') {
      targetService = 'Ingegneria / BIM / Fotoinserimento';
      targetSector = 'Ingegnere / Geometra';
    } else if (rawItem.type === 'video') {
      targetService = 'Video Animazione 3D';
    } else if (rawItem.category === 'commercial') {
      targetService = 'Retail & Hospitality';
      targetSector = 'Real Estate / Immobiliare';
    } else if (rawItem.category === 'interior') {
      targetService = 'Interni & Living';
    }

    if (selectPillByVal(sectorPills, targetSector)) selectedSector = targetSector;
    if (selectPillByVal(servicePills, targetService)) selectedService = targetService;

    if (notesEl && locItem) {
      const prefix = currentLang === 'en' ? 'Reference style' : 'Riferimento progetto';
      const refLine = `${prefix}: "${locItem.title}" (${locItem.location})`;
      notesEl.value = refLine + '\n';
      notesEl.focus({ preventScroll: true });
    }
  };

  // Copy Email Button with Visual Tooltip Feedback
  const copyBtn = document.getElementById('copy-email-btn');
  const copyBtnLabel = document.getElementById('copy-btn-label');
  if (copyBtn && copyBtnLabel) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('visual@oevisual.it').then(() => {
        copyBtnLabel.textContent = currentLang === 'en' ? 'Copied! ✓' : 'Copiata! ✓';
        copyBtn.style.color = '#10b981';
        setTimeout(() => {
          copyBtnLabel.textContent = currentLang === 'en' ? 'Copy' : 'Copia';
          copyBtn.style.color = '';
        }, 2200);
      }).catch(() => {
        copyBtnLabel.textContent = 'visual@oevisual.it';
      });
    });
  }

  // Project Inquiry Form Submission
  const form = document.getElementById('project-inquiry-form');
  const successBanner = document.getElementById('form-success-banner');
  const successWaForward = document.getElementById('success-wa-forward');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('f-name')?.value || (currentLang === 'en' ? 'Client' : 'Professionista');
      const email = document.getElementById('f-email')?.value || '';
      const phone = document.getElementById('f-phone')?.value || '';
      const city = document.getElementById('f-city')?.value || '';
      const notes = document.getElementById('f-notes')?.value || '';

      // Build pre-filled WhatsApp message for Benny (+39 347 863 1379)
      const waMessage = `Richiesta Preventivo OE Visual:%0A` +
        `• Settore: ${encodeURIComponent(selectedSector)}%0A` +
        `• Studio/Nome: ${encodeURIComponent(name)}%0A` +
        `• Servizio: ${encodeURIComponent(selectedService)}%0A` +
        `• Tempistiche: ${encodeURIComponent(selectedTimeline)}%0A` +
        `• Email: ${encodeURIComponent(email)}%0A` +
        (phone ? `• Telefono: ${encodeURIComponent(phone)}%0A` : '') +
        (city ? `• Città: ${encodeURIComponent(city)}%0A` : '') +
        (notes ? `• Dettagli: ${encodeURIComponent(notes)}` : '');

      const waUrl = `https://wa.me/393478631379?text=${waMessage}`;

      if (successWaForward) {
        successWaForward.href = waUrl;
      }

      // Hide form & show confirmed luxury banner
      form.style.display = 'none';
      if (successBanner) {
        successBanner.style.display = 'flex';
        successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
}

/**
 * ==========================================================================
 * OE VISUAL — ARCHITECTURAL WELDING SPARK ENGINE (SCINTILLA TIPO SALDATURA)
 * Animates a glowing welding spark with molten heat trail & flying spatter
 * in an infinite loop along the exact black line of Benny's original logo drawing.
 * High contrast on both pure white and dark backgrounds.
 * ==========================================================================
 */
function setupWeldingSpark() {
  const canvases = document.querySelectorAll('.logo-weld-canvas');
  if (!canvases.length) return;

  // Exact mathematical geometry of Benny's original logo drawing (284 x 246)
  // Left circle: Center (73, 102.5), Radius 60 (x: 13..133, y: 42.5..162.5)
  // Right P shape: Center (188, 102.5), Radius 60 (x: 188..248, spine x: 188)
  const R = 60;
  const Cy = 102.5;
  const C1x = 73.0;
  const C2x = 188.0;

  const L1 = 2 * Math.PI * R;   // Arc 1: Left circle C1 clockwise ~ 377px
  const L2 = 2 * (2 * R);        // Bar 1: Horizontal diameter round-trip ~ 240px
  const L3 = 0.5 * Math.PI * R;  // Arc 2: Lower-left arc of C2 ~ 94.25px
  const L4 = 2 * R;              // Stem 1: Full vertical spine upward ~ 120px
  const L5 = 0.5 * Math.PI * R;  // Arc 3: Upper-right arc of C2 ~ 94.25px
  const L6 = R;                  // Bar 2: Center horizontal bar ~ 60px
  const L7 = R;                  // Stem 2: Center to top apex ~ 60px
  const L8 = 0.5 * Math.PI * R;  // Arc 4: Upper-left arc of C2 returning to tangency ~ 94.25px

  const totalLength = L1 + L2 + L3 + L4 + L5 + L6 + L7 + L8;

  function getWeldPoint(d) {
    d = ((d % totalLength) + totalLength) % totalLength;
    if (d < L1) {
      let t = (d / L1) * 2 * Math.PI;
      return { x: C1x + R * Math.cos(t), y: Cy + R * Math.sin(t) };
    }
    d -= L1;
    if (d < L2) {
      let half = L2 / 2;
      if (d < half) {
        let u = d / half;
        return { x: (C1x + R) - u * (2 * R), y: Cy };
      } else {
        let u = (d - half) / half;
        return { x: (C1x - R) + u * (2 * R), y: Cy };
      }
    }
    d -= L2;
    if (d < L3) {
      let u = d / L3;
      let t = Math.PI - u * (Math.PI / 2);
      return { x: C2x + R * Math.cos(t), y: Cy + R * Math.sin(t) };
    }
    d -= L3;
    if (d < L4) {
      let u = d / L4;
      return { x: C2x, y: (Cy + R) - u * (2 * R) };
    }
    d -= L4;
    if (d < L5) {
      let u = d / L5;
      let t = -Math.PI / 2 + u * (Math.PI / 2);
      return { x: C2x + R * Math.cos(t), y: Cy + R * Math.sin(t) };
    }
    d -= L5;
    if (d < L6) {
      let u = d / L6;
      return { x: (C2x + R) - u * R, y: Cy };
    }
    d -= L6;
    if (d < L7) {
      let u = d / L7;
      return { x: C2x, y: Cy - u * R };
    }
    d -= L7;
    let u = d / L8;
    let t = -Math.PI / 2 - u * (Math.PI / 2);
    return { x: C2x + R * Math.cos(t), y: Cy + R * Math.sin(t) };
  }

  canvases.forEach(canvas => {
    if (canvas._sparkRunning) return;
    canvas._sparkRunning = true;

    const ctx = canvas.getContext('2d');
    const nativeW = 284, nativeH = 246;

    // HiDPI / Retina Crispness
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = nativeW * dpr;
    canvas.height = nativeH * dpr;
    ctx.scale(dpr, dpr);

    let distance = Math.random() * totalLength;
    const baseSpeed = 95; // pixels/sec
    let currentSpeed = baseSpeed;
    let lastTime = performance.now();

    // Heat history for incandescent cooling seam
    const trail = [];
    const MAX_TRAIL = 22;

    // Flying welding spatter (micro-scintille gialle bilanciate)
    const particles = [];
    const MAX_PARTICLES = 24;

    function spawnSparks(x, y, count = 2, boost = 1) {
      for (let i = 0; i < count; i++) {
        if (particles.length >= MAX_PARTICLES) break;
        const angle = Math.random() * Math.PI * 2;
        const spd = (26 + Math.random() * 68) * boost;
        const life = 0.22 + Math.random() * 0.34;
        // Monochromatic yellow / gold tones
        const colorPalette = ['#ffd700', '#ffea00', '#ffcc00', '#ffb700', '#fff4a3'];
        const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd - 12,
          life: life,
          maxLife: life,
          size: 1.3 + Math.random() * 1.8,
          color: chosenColor
        });
      }
    }

    // Interactive subtle flare on hover
    const parentLink = canvas.closest('.brand-link') || canvas.closest('.lb-brand-back') || canvas.parentElement;
    let isHovered = false;
    if (parentLink) {
      parentLink.addEventListener('mouseenter', () => {
        isHovered = true;
        currentSpeed = baseSpeed * 1.4;
        const pt = getWeldPoint(distance);
        spawnSparks(pt.x, pt.y, 8, 1.35);
      });
      parentLink.addEventListener('mouseleave', () => {
        isHovered = false;
        currentSpeed = baseSpeed;
      });
    }

    function render(now) {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      distance = (distance + currentSpeed * dt) % totalLength;
      const pt = getWeldPoint(distance);

      // Trailing heat along the black line
      trail.push({ x: pt.x, y: pt.y });
      while (trail.length > MAX_TRAIL) trail.shift();

      // Emit micro-sparks
      if (Math.random() < (isHovered ? 0.85 : 0.62)) {
        spawnSparks(pt.x, pt.y, Math.floor(1 + Math.random() * (isHovered ? 3 : 2)));
      }

      // Update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= dt;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += 125 * dt; // gravity
        p.vx *= 0.94;    // air drag
      }

      ctx.clearRect(0, 0, nativeW, nativeH);

      // 1. Draw golden cooling seam along the logo line
      if (trail.length > 2) {
        ctx.save();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        for (let i = 0; i < trail.length - 1; i++) {
          const ratio = i / trail.length; // 0 (oldest) to 1 (newest)
          ctx.beginPath();
          ctx.moveTo(trail[i].x, trail[i].y);
          ctx.lineTo(trail[i+1].x, trail[i+1].y);

          // Monochromatic yellow-gold heat trail
          const alpha = 0.30 + ratio * 0.70;
          ctx.strokeStyle = `rgba(255, 208, 0, ${alpha})`;
          ctx.lineWidth = 1.6 + ratio * 2.8;
          ctx.shadowColor = '#ffd000';
          ctx.shadowBlur = 6 * ratio;
          ctx.stroke();

          // Inner bright yellow-white filament
          if (ratio > 0.65) {
            ctx.beginPath();
            ctx.moveTo(trail[i].x, trail[i].y);
            ctx.lineTo(trail[i+1].x, trail[i+1].y);
            ctx.strokeStyle = `rgba(255, 250, 190, ${(ratio - 0.65) * 2.6})`;
            ctx.lineWidth = 1.0 + ratio * 1.2;
            ctx.shadowColor = '#ffea00';
            ctx.shadowBlur = 3;
            ctx.stroke();
          }
        }
        ctx.restore();
      }

      // 2. Draw flying micro-sparks (monochromatic yellow/gold)
      for (const p of particles) {
        const alpha = Math.max(0, p.life / p.maxLife);
        ctx.save();

        ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
        ctx.shadowBlur = 2.5;

        ctx.strokeStyle = p.color;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;

        // Streak line along velocity vector
        ctx.lineWidth = Math.max(0.9, p.size * alpha * 0.8);
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * 0.03, p.y - p.vy * 0.03);
        ctx.stroke();

        // Spark tip point
        ctx.beginPath();
        ctx.arc(p.x, p.y, (p.size * 0.55) * alpha, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 3. Balanced Monochromatic Yellow Welding Spark Head
      const flicker = 0.88 + Math.random() * 0.24;
      const arcScale = isHovered ? 1.2 : 1.0;

      ctx.save();

      // (A) Subtle contrast rim shadow for clean visibility on light background
      const shadowRadius = 16 * flicker * arcScale;
      const gradContrast = ctx.createRadialGradient(pt.x, pt.y, 1, pt.x, pt.y, shadowRadius);
      gradContrast.addColorStop(0, 'rgba(60, 40, 0, 0.28)');
      gradContrast.addColorStop(0.6, 'rgba(30, 20, 0, 0.10)');
      gradContrast.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradContrast;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, shadowRadius, 0, Math.PI * 2);
      ctx.fill();

      // (B) Warm Yellow Ambient Glow
      const flashRadius = 26 * flicker * arcScale;
      const gradAmbient = ctx.createRadialGradient(pt.x, pt.y, 1, pt.x, pt.y, flashRadius);
      gradAmbient.addColorStop(0, 'rgba(255, 215, 0, 0.42)');
      gradAmbient.addColorStop(0.5, 'rgba(255, 190, 0, 0.16)');
      gradAmbient.addColorStop(1, 'rgba(255, 180, 0, 0)');
      ctx.fillStyle = gradAmbient;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, flashRadius, 0, Math.PI * 2);
      ctx.fill();

      // (C) Yellow-Gold Core Corona
      const coronaRadius = 15 * flicker * arcScale;
      const gradOuter = ctx.createRadialGradient(pt.x, pt.y, 0.5, pt.x, pt.y, coronaRadius);
      gradOuter.addColorStop(0, 'rgba(255, 240, 120, 0.98)');
      gradOuter.addColorStop(0.45, 'rgba(255, 205, 0, 0.72)');
      gradOuter.addColorStop(0.8, 'rgba(255, 175, 0, 0.25)');
      gradOuter.addColorStop(1, 'rgba(255, 160, 0, 0)');
      ctx.fillStyle = gradOuter;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, coronaRadius, 0, Math.PI * 2);
      ctx.fill();

      // (D) Crisp Yellow Star Glint
      const flareLenH = 21 * flicker * arcScale;
      const flareLenV = 13 * flicker * arcScale;

      ctx.lineCap = 'round';
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.9)';
      ctx.shadowColor = '#ffd000';
      ctx.shadowBlur = 6;
      ctx.lineWidth = 1.7 * flicker;
      ctx.beginPath();
      ctx.moveTo(pt.x - flareLenH, pt.y);
      ctx.lineTo(pt.x + flareLenH, pt.y);
      ctx.moveTo(pt.x, pt.y - flareLenV);
      ctx.lineTo(pt.x, pt.y + flareLenV);
      ctx.stroke();

      // Diagonal glint
      const diagLen = 7.5 * flicker * arcScale;
      ctx.lineWidth = 1.1 * flicker;
      ctx.strokeStyle = 'rgba(255, 245, 170, 0.92)';
      ctx.beginPath();
      ctx.moveTo(pt.x - diagLen, pt.y - diagLen);
      ctx.lineTo(pt.x + diagLen, pt.y + diagLen);
      ctx.moveTo(pt.x - diagLen, pt.y + diagLen);
      ctx.lineTo(pt.x + diagLen, pt.y - diagLen);
      ctx.stroke();

      // (E) Pinpoint Warm-White/Yellow Core
      ctx.fillStyle = '#fffde6';
      ctx.shadowColor = '#ffd700';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 3.2 * flicker, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  });

  console.log('%c[OE VISUAL] ✨ Architectural Welding Spark Engine Active (' + canvases.length + ' canvas)', 'color: #ff5500; font-weight: bold; font-size: 12px;');
}

// Autonomous Self-Executing Runner: Starts immediately without waiting for other modules
(function initWeldingSparkAutonomous() {
  function launch() {
    try {
      setupWeldingSpark();
    } catch (e) {
      console.error('[OE Visual] Spark launch error:', e);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', launch);
  } else {
    launch();
  }
  window.addEventListener('load', launch);
})();

/* ==========================================================================
   V8.0: BILINGUAL IT / EN ENGINE (MINIMAL HEADER SWITCH)
   ========================================================================== */
const I18N_UI = {
  it: {
    filter_all: 'All Selected Works',
    filter_exterior: 'Exteriors',
    filter_interior: 'Interiors',
    filter_commercial: 'Retail & Hospitality',
    filter_catalog: 'Cataloghi & Product Design',
    filter_engineering: 'Ingegneria, BIM & Fotoinserimenti',
    filter_compare: 'Wireframe / Clay Sliders',
    filter_video: 'Cinema Reel (Video)',
    filter_seasons: 'Studio Bioclimatico',
    nav_studio: 'Studio',
    nav_contact: 'Contact',
    studio_sub: '02 — CHI SIAMO & COSA FACCIAMO',
    studio_exp: '15+ Anni di Esperienza CGI',
    studio_headline: 'Saper leggere il progetto: architetti prima che artisti 3D.',
    studio_manifesto: 'Da oltre 15 anni ci occupiamo di Rendering 3D con elevato fotorealismo, animazioni cinematografiche e validazione geometrica per studi di architettura, società di ingegneria, sviluppatori immobiliari e brand d\'arredo. Il nostro gruppo di lavoro è composto da architetti e ingegneri: il nostro vero punto di forza consiste nel <strong>saper leggere il tuo progetto</strong>, comprenderne l\'orografia, la luce solare e le scelte materiche, per creare un\'opera visiva che sappia emozionare e chiudere la trattativa.',
    srv1_title: 'Rendering 3D Fotorealistico',
    srv1_desc: 'Viste esterne ed interne ad altissimo impatto per committenze private, concorsi e commercializzazione immobiliare. Modellazione accurata di vegetazione autoctona, caustiche della luce e finiture tattili (pietra a secco, microcemento, essenze lignee, metalli).',
    srv1_b1: 'Esterni, ville & complessi residenziali',
    srv1_b2: 'Interior design di lusso & retail',
    srv1_b3: 'Studio fotometrico della luce naturale',
    srv2_title: 'Cinema Reel & Video Motion 3D',
    srv2_desc: 'Animazioni tridimensionali fluide a 60fps con movimenti di camera cinematografici per presentazioni di progetti complessi, bandi di gara, video marketing per investitori internazionali e campagne social d\'alta gamma.',
    srv2_b1: 'Walkthrough d\'interni ed esterni 4K',
    srv2_b2: 'Simulazioni di cantiere & sequenze costruttive',
    srv2_b3: 'Video teaser per landing page e investitori',
    srv3_title: 'Validazione Geometrica & Clay Study',
    srv3_desc: 'Prima del fotorealismo, convalidiamo i volumi attraverso render Clay a contrasto puro. Analizziamo l\'orientamento solare, la pulizia dei nodi costruttivi e il corretto rimbalzo della luce indiretta negli ambienti.',
    srv3_b1: 'Controllo volumi e nodi prima della posa',
    srv3_b2: 'Studio comparativo Wireframe ↔ Rendering',
    srv3_b3: 'Ottimizzazione geometrie BIM (Revit, IFC, Rhino)',
    srv4_title: 'Cataloghi & Set Virtuali per l\'Industria',
    srv4_desc: 'Rendering per aziende ed industrie finalizzati alla stampa di cataloghi, brochure ed e-commerce. Progettiamo gli ambienti e le ambientazioni attorno al prodotto, con una versatilità superiore alla fotografia tradizionale e costi contenuti.',
    srv4_b1: 'Arredo bagno, cucine, contract & ufficio',
    srv4_b2: 'Close-up macro su dettagli e finiture',
    srv4_b3: 'Flessibilità totale su varianti colore e texture',
    tech_formats_label: 'Formati CAD / BIM Supportati',
    tech_workflow_label: 'Metodo Operativo in 3 Step',
    tech_step1: 'Invio Modello o Tavole DWG',
    tech_step2: 'Bozze Clay, Camere & Luce',
    tech_step3: 'Master 4K / Motion Reel',
    avatars_sub: 'IL TEAM DI OE VISUAL',
    avatars_title: 'Interagisci con noi.',
    avatars_subtitle: 'Clicca su un avatar per dialogare, porre una domanda di progetto o ascoltare la nostra voce in tempo reale.',
    console_listen: 'Ascolta la risposta',
    console_wa: 'Approfondisci su WhatsApp con noi →',
    contact_sub: '03 — INIZIAMO UN PROGETTO',
    contact_headline: 'Il tuo progetto merita di essere visto al massimo.',
    contact_lead: 'Risposta con preventivo dettagliato e tempi di consegna garantiti entro 24 ore. Tutte le revisioni sono incluse nel prezzo pattuito.',
    wa_badge: 'Canale Diretto Prioritario',
    wa_title: 'Hai un\'urgenza o vuoi un parere immediato sul tuo progetto?',
    wa_desc: 'Invia il link al file o scrivi direttamente all\'Arch. Benedetto Brattoli (riscontro garantito entro 2 ore).',
    wa_cta: 'Scrivi su WhatsApp in 1-Click',
    form_step0: '0. Chi sei / Settore',
    sec_arch: 'Studio Architettura',
    sec_eng: 'Ingegnere / Geometra',
    sec_re: 'Real Estate / Developer',
    sec_cat: 'Azienda / Cataloghi',
    form_step1: '1. Tipologia di Progetto / Servizio',
    srv_villa: 'Villa Unifamiliare',
    srv_res: 'Residenziale Pluripiano',
    srv_int: 'Interni & Living',
    srv_ret: 'Retail & Hospitality',
    srv_cat: 'Cataloghi & Product Design',
    srv_eng: 'Ingegneria / BIM / Fotoinserimento',
    srv_vid: 'Video Animazione 3D',
    srv_comp: 'Bando / Concorso',
    form_step2: '2. Tempistiche di Consegna Desiderate',
    time_urg: '⚡ Urgente (< 7 giorni)',
    time_std: 'Standard (2–3 settimane)',
    time_plan: 'In Programmazione',
    lbl_name: 'Nome e Cognome / Studio *',
    lbl_email: 'Email Diretta per il Preventivo *',
    lbl_phone: 'Telefono / WhatsApp',
    lbl_city: 'Città del Progetto',
    lbl_notes: 'Dettagli del Progetto & Link Modelli 3D / DWG',
    form_submit: 'Richiedi Preventivo Dettagliato in 24h',
    form_nda: '🔒 Riservatezza garantita: non condividiamo mai i tuoi dati o disegni.',
    form_ok_title: 'Richiesta Ricevuta con Successo!',
    form_ok_desc: 'Grazie. Il team di OE Visual ha preso in carico la tua richiesta e ti risponderà con un\'offerta economica dettagliata e tempistiche certe entro 24 ore.',
    form_ok_wa: 'Invia subito la richiesta anche su WhatsApp a Benny →',
    box_email_tag: 'Email Diretta Atelier',
    copy_lbl: 'Copia',
    box_email_sub: 'Per invio capitolati, bandi di concorso e perizie tecniche: studio@oevisual.it',
    box_rm_tag: 'Sede Roma Capitale',
    box_rm_badge: 'Centro Italia',
    lbl_direct_tel: 'Telefono Diretto:',
    box_ba_tag: 'Sede Puglia & Adriatico',
    box_ba_badge: 'Sud Italia',
    lbl_office_tel: 'Telefono Ufficio:',
    g1_title: 'Preventivo Garantito in 24h',
    g1_desc: 'Prezzo chiaro a corpo, senza voci impreviste.',
    g2_title: 'Tutte le Revisioni Incluse',
    g2_desc: 'Bozze intermedie di inquadratura e luce fino al tuo OK.',
    g3_title: 'Accordo di Riservatezza NDA',
    g3_desc: 'I tuoi modelli e brevetti sono tutelati legalmente al 100%.',
    lb_quote_btn: 'Preventivo per progetto simile →',
    footer_rights: '© 2026 OE Visual · Arch. Benedetto Brattoli · Tutti i diritti riservati (L. 633/1941).'
  },
  en: {
    filter_all: 'All Selected Works',
    filter_exterior: 'Exteriors',
    filter_interior: 'Interiors',
    filter_commercial: 'Retail & Hospitality',
    filter_catalog: 'Catalogs & Product Design',
    filter_engineering: 'Engineering, BIM & Photoinsertion',
    filter_compare: 'Wireframe / Clay Sliders',
    filter_video: 'Cinema Reel (Video)',
    filter_seasons: 'Bioclimatic Study',
    nav_studio: 'Studio',
    nav_contact: 'Contact',
    studio_sub: '02 — WHO WE ARE & WHAT WE DO',
    studio_exp: '15+ Years of CGI Excellence',
    studio_headline: 'Reading architecture first: architects before 3D artists.',
    studio_manifesto: 'For over 15 years we have crafted ultra-photorealistic 3D rendering, architectural film animations, and geometric validation for architecture practices, engineering firms, real estate developers, and furniture brands. Our team is made of licensed architects and engineers: our real edge is <strong>understanding every technical drawing</strong>, topography, solar path, and material palette to close the deal visually.',
    srv1_title: 'Photorealistic 3D Rendering',
    srv1_desc: 'High-impact exterior and interior stills for private commissions, competitions, and off-plan real estate marketing, with bespoke vegetation, water caustics, and tactile material shaders.',
    srv1_b1: 'Exteriors, luxury villas & residential complexes',
    srv1_b2: 'Bespoke interior design & hospitality',
    srv1_b3: 'Physically calibrated natural daylighting',
    srv2_title: 'Cinema Reel & 3D Architectural Film',
    srv2_desc: 'Smooth architectural motion films for international investor decks, tender competitions, phased construction visualizations, and luxury social campaigns.',
    srv2_b1: '4K exterior & interior walkthroughs',
    srv2_b2: 'Construction phasing & engineering sequences',
    srv2_b3: 'Landing page & investor motion teasers',
    srv3_title: 'Geometric Validation & Clay Study',
    srv3_desc: 'Before final texturing, we validate volumes, structural junctions, solar orientation, and indirect light bounce through pure high-contrast Clay studies.',
    srv3_b1: 'Pre-construction volume & detail check',
    srv3_b2: 'Wireframe ↔ Photoreal interactive comparison',
    srv3_b3: 'BIM model optimization (Revit, IFC, Rhino)',
    srv4_title: 'Catalogs & Virtual Product Sets',
    srv4_desc: 'Editorial CGI environments built around industrial furniture, kitchens, bath, and contract products — infinitely more flexible and cost-effective than physical studio photography.',
    srv4_b1: 'Kitchens, bath, living & contract catalogs',
    srv4_b2: 'Macro close-ups on fabrics, stone & wood',
    srv4_b3: 'Unlimited finish & color variant generation',
    tech_formats_label: 'Supported Native CAD / BIM Formats',
    tech_workflow_label: '3-Step Studio Workflow',
    tech_step1: 'Upload 3D Model or DWG Plans',
    tech_step2: 'Clay Camera & Lighting Sign-off',
    tech_step3: '4K Master Stills / Motion Reel',
    avatars_sub: 'THE OE VISUAL TEAM',
    avatars_title: 'Talk with our team.',
    avatars_subtitle: 'Click a team member to ask technical workflow questions or hear our real studio voice introductions.',
    console_listen: 'Play voice answer',
    console_wa: 'Continue on WhatsApp with us →',
    contact_sub: '03 — START A PROJECT',
    contact_headline: 'Your project deserves to be seen at its very best.',
    contact_lead: 'Detailed itemized quotation and guaranteed delivery schedule within 24 hours. All intermediate camera & lighting revisions included.',
    wa_badge: 'Priority Direct Line',
    wa_title: 'Urgent deadline or quick technical review needed?',
    wa_desc: 'Send your model link or write directly to Arch. Benedetto Brattoli (guaranteed reply within 2 hours).',
    wa_cta: 'Message on WhatsApp (1-Click)',
    form_step0: '0. Your Profile / Industry',
    sec_arch: 'Architecture Practice',
    sec_eng: 'Engineer / Surveyor',
    sec_re: 'Real Estate / Developer',
    sec_cat: 'Brand / Product Catalogs',
    form_step1: '1. Project / Service Type',
    srv_villa: 'Private Villa',
    srv_res: 'Multi-Unit Residential',
    srv_int: 'Interiors & Living',
    srv_ret: 'Retail & Hospitality',
    srv_cat: 'Catalogs & Product Design',
    srv_eng: 'Engineering / BIM / Photoinsertion',
    srv_vid: '3D Animation Film',
    srv_comp: 'Tender / Competition',
    form_step2: '2. Target Delivery Timeline',
    time_urg: '⚡ Urgent (< 7 days)',
    time_std: 'Standard (2–3 weeks)',
    time_plan: 'Scheduled / Ongoing',
    lbl_name: 'Full Name / Practice *',
    lbl_email: 'Direct Email for Quote *',
    lbl_phone: 'Phone / WhatsApp',
    lbl_city: 'Project City / Country',
    lbl_notes: 'Project Brief & 3D / DWG Download Link',
    form_submit: 'Request Detailed 24h Quote',
    form_nda: '🔒 Strict confidentiality: your drawings and models are never shared.',
    form_ok_title: 'Inquiry Received!',
    form_ok_desc: 'Thank you. Our team has received your brief and will reply within 24 hours with a tailored quotation and delivery schedule.',
    form_ok_wa: 'Forward this brief directly to Benny on WhatsApp →',
    box_email_tag: 'Direct Atelier Email',
    copy_lbl: 'Copy',
    box_email_sub: 'For tenders, BIM packages and technical documentation: studio@oevisual.it',
    box_rm_tag: 'Rome Studio',
    box_rm_badge: 'Central Italy',
    lbl_direct_tel: 'Direct Line:',
    box_ba_tag: 'Puglia Studio',
    box_ba_badge: 'Southern Italy',
    lbl_office_tel: 'Studio Line:',
    g1_title: 'Guaranteed 24h Quotation',
    g1_desc: 'Clear fixed-fee pricing with zero hidden extras.',
    g2_title: 'All Revisions Included',
    g2_desc: 'Iterative Clay camera and lighting sign-offs until final approval.',
    g3_title: 'NDA Protection',
    g3_desc: '100% legal confidentiality on unbuilt designs and product prototypes.',
    lb_quote_btn: 'Request quote for similar project →',
    footer_rights: '© 2026 OE Visual · Arch. Benedetto Brattoli · All rights reserved.'
  }
};

function setupLanguageSwitch() {
  const toggleBtn = document.getElementById('lang-toggle');
  applyLanguage(currentLang, false);
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'it' ? 'en' : 'it';
    applyLanguage(nextLang, true);
  });
}

function applyLanguage(lang, rerenderGallery = true) {
  currentLang = lang === 'en' ? 'en' : 'it';
  try {
    localStorage.setItem('oe_visual_lang', currentLang);
  } catch (e) {}

  document.documentElement.lang = currentLang;

  const opts = document.querySelectorAll('#lang-toggle .lang-opt');
  opts.forEach(opt => {
    opt.classList.toggle('is-active', opt.getAttribute('data-lang') === currentLang);
  });

  const dict = I18N_UI[currentLang] || I18N_UI.it;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] === undefined) return;
    if (el.getAttribute('data-i18n-html') === 'true') {
      el.innerHTML = dict[key];
    } else {
      el.textContent = dict[key];
    }
  });

  const placeholders = {
    'f-name': currentLang === 'en' ? 'e.g. Arch. Marco Bianchi' : 'Es. Arch. Marco Bianchi',
    'f-email': currentLang === 'en' ? 'architect@studio.com' : 'architetto@studio.it',
    'f-city': currentLang === 'en' ? 'e.g. London, Milan, Rome...' : 'Es. Roma, Milano, Bari...',
    'f-notes': currentLang === 'en'
      ? 'Briefly describe views, timeline, or paste a WeTransfer / Google Drive link to your 3D / DWG files...'
      : 'Descrivi brevemente il progetto (numero viste stimate, stile desiderato) oppure incolla il link WeTransfer / Google Drive ai file...'
  };
  Object.entries(placeholders).forEach(([id, val]) => {
    const input = document.getElementById(id);
    if (input) input.placeholder = val;
  });

  if (rerenderGallery) {
    renderPortfolioGrid();
    if (lightbox && lightbox.classList.contains('active')) {
      const rawItem = displayedItems[currentLightboxIndex];
      if (rawItem) {
        const locItem = getLocalizedItem(rawItem);
        if (lbTitle) lbTitle.textContent = locItem.title;
        if (lbMeta) lbMeta.textContent = `${formatCategory(locItem.category)} · ${locItem.location}`;
        if (lbDesc) lbDesc.textContent = locItem.desc;
      }
    }
  }
}
