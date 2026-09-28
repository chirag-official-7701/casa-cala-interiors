import type { Project } from '../types';

/* =========================================================================
   Projects
   -------------------------------------------------------------------------
   The single source of truth for all project content. Add a new project by
   appending an object here — every listing, the home showcase and the detail
   page derive from this array.

   Images are Casa Kala's own project renders, stored locally under
   /public/images/projects/<slug>/. utils/image.ts serves any '/…' path
   untouched, so these need no CDN or Unsplash id.

   NOTE: titles, locations, years, descriptions and stats below were drafted
   from the visual content of each project set and are placeholders — refine
   them with the real brief details.
   ========================================================================= */

export const PROJECTS: Project[] = [
  {
    id: 'p-grand-palazzo-villa',
    slug: 'grand-palazzo-villa',
    title: 'Grand Palazzo Villa',
    location: 'Sushant Golf City, Lucknow',
    category: 'Residential',
    year: 2024,
    excerpt:
      'A grand family villa where classical proportion meets contemporary Indian glamour.',
    description:
      'The Grand Palazzo Villa is a full-scale residence conceived around a double-height arrival hall and a sweeping marble staircase. Book-matched stone, gilded detailing and bespoke joinery give the formal salons a sense of occasion, while carefully layered lighting keeps the scale intimate after dark. Every principal room was composed as a set piece — grand enough to host, warm enough to live in.',
    philosophy:
      'Grandeur only works when it is grounded. We balanced the villa’s scale with tactile materials and soft light, so that opulence reads as comfort rather than spectacle.',
    heroImage: '/images/projects/grand-palazzo-villa/hero.jpg',
    thumbnail: '/images/projects/grand-palazzo-villa/hero.jpg',
    gallery: [
      { src: '/images/projects/grand-palazzo-villa/1.jpg', alt: 'Double-height arrival hall in book-matched marble', orientation: 'portrait' },
      { src: '/images/projects/grand-palazzo-villa/2.jpg', alt: 'Formal living room with gilded detailing', orientation: 'portrait' },
      { src: '/images/projects/grand-palazzo-villa/3.jpg', alt: 'Living lounge framing a bespoke media wall', orientation: 'portrait' },
      { src: '/images/projects/grand-palazzo-villa/4.jpg', alt: 'Formal dining beneath a statement chandelier', orientation: 'portrait' },
    ],
    stats: [
      { label: 'Area', value: '1,650 m²' },
      { label: 'Duration', value: '24 months' },
      { label: 'Scope', value: 'Turnkey' },
      { label: 'Bedrooms', value: '7' },
    ],
    featuredLayout: 'wide',
  },
  {
    id: 'p-noir-dining-lounge',
    slug: 'noir-dining-lounge',
    title: 'Noir Dining Lounge',
    location: 'Connaught Place, New Delhi',
    category: 'Hospitality',
    year: 2023,
    excerpt:
      'A dark, sensorial dining lounge composed in stone, bronze and low light.',
    description:
      'Noir is an intimate fine-dining lounge designed to feel like a secret. Deep stone, smoked mirror and brushed bronze wrap the guest in shadow, while pools of warm light draw the eye from the host stand to the bar and on to the banquettes beyond. The result is a room that shifts from refined to romantic as the evening unfolds.',
    philosophy:
      'Restaurants are theatre. We designed with darkness as the primary material — using restraint and contrast so that the food, the guests and the light become the performance.',
    heroImage: '/images/projects/noir-dining-lounge/hero.jpg',
    thumbnail: '/images/projects/noir-dining-lounge/hero.jpg',
    gallery: [
      { src: '/images/projects/noir-dining-lounge/1.jpg', alt: 'Host stand framed by feature lighting', orientation: 'portrait' },
      { src: '/images/projects/noir-dining-lounge/2.jpg', alt: 'Intimate banquette seating in dark stone', orientation: 'portrait' },
      { src: '/images/projects/noir-dining-lounge/3.jpg', alt: 'Bar backlit in warm brass', orientation: 'portrait' },
      { src: '/images/projects/noir-dining-lounge/4.jpg', alt: 'Private dining alcove at dusk', orientation: 'portrait' },
    ],
    stats: [
      { label: 'Covers', value: '90' },
      { label: 'Duration', value: '12 months' },
      { label: 'Scope', value: 'Fit-out' },
      { label: 'Type', value: 'Fine Dining' },
    ],
    featuredLayout: 'split',
  },
  {
    id: 'p-verde-aesthetics-clinic',
    slug: 'verde-aesthetics-clinic',
    title: 'Verde Aesthetics Clinic',
    location: 'Civil Lines, Agra',
    category: 'Commercial',
    year: 2024,
    excerpt:
      'A calming aesthetic clinic where clinical precision meets spa-like warmth.',
    description:
      'Verde reimagines the aesthetic clinic as a place of calm rather than clinical anxiety. A soft sage palette, glazed partitions and generous greenery keep the space bright and reassuring, while the treatment suites are detailed with the precision the discipline demands. Circulation was choreographed so guests move from an inviting reception to private care in a single, seamless gesture.',
    philosophy:
      'Wellness begins the moment you walk in. We softened every clinical edge — with light, planting and warm materials — so that treatment feels like retreat.',
    heroImage: '/images/projects/verde-aesthetics-clinic/hero.jpg',
    thumbnail: '/images/projects/verde-aesthetics-clinic/hero.jpg',
    gallery: [
      { src: '/images/projects/verde-aesthetics-clinic/1.jpg', alt: 'Waiting lounge in soft sage and glass', orientation: 'portrait' },
      { src: '/images/projects/verde-aesthetics-clinic/2.jpg', alt: 'Consultation room with glazed partitions', orientation: 'portrait' },
      { src: '/images/projects/verde-aesthetics-clinic/3.jpg', alt: 'Treatment suite with a contoured chair', orientation: 'portrait' },
      { src: '/images/projects/verde-aesthetics-clinic/4.jpg', alt: 'Feature staircase linking the floors', orientation: 'portrait' },
    ],
    stats: [
      { label: 'Area', value: '320 m²' },
      { label: 'Duration', value: '7 months' },
      { label: 'Scope', value: 'Fit-out' },
      { label: 'Rooms', value: '6 suites' },
    ],
    featuredLayout: 'standard',
  },
  {
    id: 'p-serene-curves-residence',
    slug: 'serene-curves-residence',
    title: 'Serene Curves Residence',
    location: 'Sector 150, Noida',
    category: 'Residential',
    year: 2024,
    excerpt:
      'An apartment shaped by soft curves, cove lighting and quiet neutral tones.',
    description:
      'This residence trades hard corners for a language of gentle curves. Cove-lit ceilings wash the rooms in indirect light, marble floors ground a palette of warm neutrals, and a pistachio-toned kitchen adds a single note of colour. The plan flows without interruption, so the home feels calm, continuous and unmistakably contemporary-classic.',
    philosophy:
      'A curve slows you down. We used soft geometry and hidden light to give the apartment a sense of ease — a home that exhales.',
    heroImage: '/images/projects/serene-curves-residence/hero.jpg',
    thumbnail: '/images/projects/serene-curves-residence/hero.jpg',
    gallery: [
      { src: '/images/projects/serene-curves-residence/1.jpg', alt: 'Lounge in layered warm neutrals', orientation: 'portrait' },
      { src: '/images/projects/serene-curves-residence/2.jpg', alt: 'Pistachio-green kitchen with marble counters', orientation: 'portrait' },
      { src: '/images/projects/serene-curves-residence/3.jpg', alt: 'Walk-in wardrobe in warm timber', orientation: 'portrait' },
      { src: '/images/projects/serene-curves-residence/4.jpg', alt: 'En-suite bathroom in honed marble', orientation: 'portrait' },
    ],
    stats: [
      { label: 'Area', value: '260 m²' },
      { label: 'Duration', value: '9 months' },
      { label: 'Scope', value: 'Interior Design' },
      { label: 'Bedrooms', value: '3' },
    ],
    featuredLayout: 'tall',
  },
  {
    id: 'p-the-quiet-apartment',
    slug: 'the-quiet-apartment',
    title: 'The Quiet Apartment',
    location: 'Bandra West, Mumbai',
    category: 'Residential',
    year: 2023,
    excerpt:
      'A warm, pared-back apartment built around comfort and considered light.',
    description:
      'The Quiet Apartment is an exercise in warm restraint. A floating media wall anchors the living space, a marble feature wall gives the bedroom its calm, and a compact kitchen opens to a relaxed breakfast counter. Nothing shouts — every material was chosen to age well and to feel good under the hand.',
    philosophy:
      'Comfort is the real luxury. We edited to the essentials and invested in warmth, so daily life feels effortless.',
    heroImage: '/images/projects/the-quiet-apartment/hero.jpg',
    thumbnail: '/images/projects/the-quiet-apartment/hero.jpg',
    gallery: [
      { src: '/images/projects/the-quiet-apartment/1.jpg', alt: 'Master bedroom against a marble feature wall', orientation: 'landscape' },
      { src: '/images/projects/the-quiet-apartment/2.jpg', alt: 'Kitchen with a breakfast counter and warm lighting', orientation: 'landscape' },
      { src: '/images/projects/the-quiet-apartment/3.jpg', alt: 'Lounge framed by a hand-painted mural', orientation: 'landscape' },
      { src: '/images/projects/the-quiet-apartment/4.jpg', alt: 'Living space with layered soft seating', orientation: 'landscape' },
    ],
    stats: [
      { label: 'Area', value: '190 m²' },
      { label: 'Duration', value: '7 months' },
      { label: 'Scope', value: 'Interior Design' },
      { label: 'Bedrooms', value: '2' },
    ],
    featuredLayout: 'wide',
  },
  {
    id: 'p-cantilever-house',
    slug: 'cantilever-house',
    title: 'Cantilever House',
    location: 'DLF Phase 5, Gurugram',
    category: 'Residential',
    year: 2024,
    excerpt:
      'A modern villa of stacked, cantilevered volumes opening onto green terraces.',
    description:
      'Cantilever House is a study in overhang and shade. Deep, projecting volumes shelter a sequence of outdoor rooms — lounges, decks and sunken seating — that blur the line between architecture and landscape. Planting is woven through every level, so the home feels immersed in green even at the heart of the city.',
    philosophy:
      'In this climate, shade is generosity. We designed the villa around its overhangs, giving every terrace a cool, usable outdoor life.',
    heroImage: '/images/projects/cantilever-house/hero.jpg',
    thumbnail: '/images/projects/cantilever-house/hero.jpg',
    gallery: [
      { src: '/images/projects/cantilever-house/1.jpg', alt: 'Shaded deck framed by planting', orientation: 'portrait' },
      { src: '/images/projects/cantilever-house/2.jpg', alt: 'Sunken seating amid landscaped greenery', orientation: 'portrait' },
      { src: '/images/projects/cantilever-house/3.jpg', alt: 'Evening view of the terraced facade', orientation: 'portrait' },
      { src: '/images/projects/cantilever-house/4.jpg', alt: 'Outdoor lounge beneath deep overhangs', orientation: 'portrait' },
    ],
    stats: [
      { label: 'Plot', value: '2,000 m²' },
      { label: 'Duration', value: '22 months' },
      { label: 'Scope', value: 'Architecture & Interiors' },
      { label: 'Levels', value: '3' },
    ],
    featuredLayout: 'standard',
  },
  {
    id: 'p-courtyard-house',
    slug: 'courtyard-house',
    title: 'Courtyard House',
    location: 'Civil Lines, Jaipur',
    category: 'Residential',
    year: 2023,
    excerpt:
      'A warm-minimalist home organised around light, arches and natural timber.',
    description:
      'Courtyard House gathers its rooms around light. Soft arches frame the circulation, warm plaster and oak give the interiors their calm, and travertine floors carry the daylight deep into the plan. It is a home of few materials, handled with care — quietly Mediterranean in feeling, thoroughly contemporary in detail.',
    philosophy:
      'Less, but warmer. We kept the palette tight and let sunlight and shadow do the decorating.',
    heroImage: '/images/projects/courtyard-house/hero.jpg',
    thumbnail: '/images/projects/courtyard-house/hero.jpg',
    gallery: [
      { src: '/images/projects/courtyard-house/1.jpg', alt: 'Arched threshold in warm plaster', orientation: 'portrait' },
      { src: '/images/projects/courtyard-house/2.jpg', alt: 'Lounge in oak and travertine', orientation: 'portrait' },
      { src: '/images/projects/courtyard-house/3.jpg', alt: 'Dining framed by a garden view', orientation: 'portrait' },
      { src: '/images/projects/courtyard-house/4.jpg', alt: 'Hallway of soft, repeating arches', orientation: 'portrait' },
    ],
    stats: [
      { label: 'Area', value: '540 m²' },
      { label: 'Duration', value: '16 months' },
      { label: 'Scope', value: 'Turnkey' },
      { label: 'Bedrooms', value: '4' },
    ],
    featuredLayout: 'tall',
  },
  {
    id: 'p-lumiere-beauty-salon',
    slug: 'lumiere-beauty-salon',
    title: 'Lumière Beauty Salon',
    location: 'Hazratganj, Lucknow',
    category: 'Commercial',
    year: 2023,
    excerpt:
      'A glamorous beauty salon of soft arches, glowing mirrors and warm brass.',
    description:
      'Lumière was designed to make every guest feel lit from within. A run of halo-lit mirrors lines the styling floor, private rooms handle facials and treatments in calm seclusion, and a considered back-of-house keeps the experience effortless. Warm brass and soft arches give the salon its polished, feminine character.',
    philosophy:
      'Light is the first cosmetic. We built the salon around flattering, layered illumination so guests look — and feel — their best.',
    heroImage: '/images/projects/lumiere-beauty-salon/hero.jpg',
    thumbnail: '/images/projects/lumiere-beauty-salon/hero.jpg',
    gallery: [
      { src: '/images/projects/lumiere-beauty-salon/1.jpg', alt: 'Vanity mirrors framed in warm light', orientation: 'portrait' },
      { src: '/images/projects/lumiere-beauty-salon/2.jpg', alt: 'Private treatment room', orientation: 'portrait' },
      { src: '/images/projects/lumiere-beauty-salon/3.jpg', alt: 'Pantry and prep area', orientation: 'portrait' },
      { src: '/images/projects/lumiere-beauty-salon/4.jpg', alt: 'Product display and waiting lounge', orientation: 'portrait' },
    ],
    stats: [
      { label: 'Area', value: '180 m²' },
      { label: 'Duration', value: '6 months' },
      { label: 'Scope', value: 'Fit-out' },
      { label: 'Stations', value: '8' },
    ],
    featuredLayout: 'split',
  },
  {
    id: 'p-blush-beauty-lounge',
    slug: 'blush-beauty-lounge',
    title: 'Blush Beauty Lounge',
    location: 'Khan Market, New Delhi',
    category: 'Commercial',
    year: 2024,
    excerpt:
      'A blush-toned beauty lounge wrapped in soft arches and warm rosé light.',
    description:
      'Blush is a jewel-box of a retail lounge. Curved display niches, rosé-toned plaster and backlit shelving turn the products into the décor, while a compact seating vignette invites guests to linger. Every surface was tuned to photograph beautifully — a space designed for the age of the share.',
    philosophy:
      'A boutique should feel like a portrait studio. We shaped soft, blush-lit corners that make both the products and the guest look their best.',
    heroImage: '/images/projects/blush-beauty-lounge/hero.jpg',
    thumbnail: '/images/projects/blush-beauty-lounge/hero.jpg',
    gallery: [
      { src: '/images/projects/blush-beauty-lounge/1.jpg', alt: 'Curved retail shelving in soft rose', orientation: 'portrait' },
      { src: '/images/projects/blush-beauty-lounge/2.jpg', alt: 'Seating vignette beneath arched alcoves', orientation: 'portrait' },
      { src: '/images/projects/blush-beauty-lounge/3.jpg', alt: 'Backlit product display wall', orientation: 'portrait' },
      { src: '/images/projects/blush-beauty-lounge/4.jpg', alt: 'Reception in warm rosé tones', orientation: 'portrait' },
    ],
    stats: [
      { label: 'Area', value: '120 m²' },
      { label: 'Duration', value: '5 months' },
      { label: 'Scope', value: 'Fit-out' },
      { label: 'Type', value: 'Beauty Retail' },
    ],
    featuredLayout: 'tall',
  },
  {
    id: 'p-timber-house-cafe',
    slug: 'timber-house-cafe',
    title: 'Timber House Café',
    location: 'Hauz Khas, New Delhi',
    category: 'Hospitality',
    year: 2022,
    excerpt:
      'A rustic-industrial café of exposed timber, communal tables and warm light.',
    description:
      'Timber House is a café and roastery built around a sense of gather. Exposed structural timber, long communal tables and a generous coffee bar create an easy, all-day rhythm, while warm pendant lighting keeps the industrial shell feeling human. It is a room made for slow mornings and long conversations.',
    philosophy:
      'Hospitality is warmth made spatial. We used honest, tactile materials so the café feels lived-in from day one.',
    heroImage: '/images/projects/timber-house-cafe/hero.jpg',
    thumbnail: '/images/projects/timber-house-cafe/hero.jpg',
    gallery: [
      { src: '/images/projects/timber-house-cafe/1.jpg', alt: 'Communal tables in warm oak', orientation: 'portrait' },
      { src: '/images/projects/timber-house-cafe/2.jpg', alt: 'Lounge seating by the window', orientation: 'portrait' },
      { src: '/images/projects/timber-house-cafe/3.jpg', alt: 'Coffee bar and display', orientation: 'portrait' },
      { src: '/images/projects/timber-house-cafe/4.jpg', alt: 'Dining hall under pendant lighting', orientation: 'portrait' },
    ],
    stats: [
      { label: 'Covers', value: '70' },
      { label: 'Duration', value: '9 months' },
      { label: 'Scope', value: 'Turnkey' },
      { label: 'Type', value: 'Café & Roastery' },
    ],
    featuredLayout: 'wide',
  },
  {
    id: 'p-the-dressing-suite',
    slug: 'the-dressing-suite',
    title: 'The Dressing Suite',
    location: 'Fatehabad Road, Agra',
    category: 'Residential',
    year: 2024,
    excerpt:
      'A bespoke walk-in dressing suite in dark walnut, glass and brushed brass.',
    description:
      'The Dressing Suite is a piece of cabinetmaking as much as interior design. A central dressing island anchors the room, integrated lighting turns the walnut joinery into a display, and glazed cabinetry showcases accessories like objects in a gallery. Every drawer, rail and vanity was detailed to millimetre precision.',
    philosophy:
      'A dressing room is a private ritual. We designed it as bespoke joinery — considered, tactile and made to last a lifetime.',
    heroImage: '/images/projects/the-dressing-suite/hero.jpg',
    thumbnail: '/images/projects/the-dressing-suite/hero.jpg',
    gallery: [
      { src: '/images/projects/the-dressing-suite/1.jpg', alt: 'Walnut joinery with integrated lighting', orientation: 'portrait' },
      { src: '/images/projects/the-dressing-suite/2.jpg', alt: 'Vanity station framed by mirrors', orientation: 'portrait' },
      { src: '/images/projects/the-dressing-suite/3.jpg', alt: 'Glazed display cabinetry', orientation: 'portrait' },
      { src: '/images/projects/the-dressing-suite/4.jpg', alt: 'Jewellery and accessory drawers', orientation: 'portrait' },
    ],
    stats: [
      { label: 'Area', value: '45 m²' },
      { label: 'Duration', value: '4 months' },
      { label: 'Scope', value: 'Bespoke Joinery' },
      { label: 'Material', value: 'Walnut' },
    ],
    featuredLayout: 'tall',
  },
  {
    id: 'p-classic-bedroom-suites',
    slug: 'classic-bedroom-suites',
    title: 'Classic Bedroom Suites',
    location: 'Indirapuram, Ghaziabad',
    category: 'Residential',
    year: 2023,
    excerpt:
      'A collection of classic bedroom suites in warm neutrals and layered light.',
    description:
      'This project reworks a family home’s private quarters as a set of restful, classic suites. Layered tray ceilings, upholstered headboard walls and integrated media joinery give each room its own quiet character, unified by a warm neutral palette. The detailing is traditional in spirit but clean in execution.',
    philosophy:
      'A bedroom should be the calmest room in the house. We layered soft light and gentle classic detailing to make rest feel effortless.',
    heroImage: '/images/projects/classic-bedroom-suites/hero.jpg',
    thumbnail: '/images/projects/classic-bedroom-suites/hero.jpg',
    gallery: [
      { src: '/images/projects/classic-bedroom-suites/1.jpg', alt: 'Bedroom with an upholstered headboard wall', orientation: 'landscape' },
      { src: '/images/projects/classic-bedroom-suites/2.jpg', alt: 'Guest suite in warm beige tones', orientation: 'landscape' },
      { src: '/images/projects/classic-bedroom-suites/3.jpg', alt: 'Media wall with integrated lighting', orientation: 'landscape' },
      { src: '/images/projects/classic-bedroom-suites/4.jpg', alt: 'Dressing corner with a vanity', orientation: 'landscape' },
    ],
    stats: [
      { label: 'Suites', value: '4' },
      { label: 'Duration', value: '6 months' },
      { label: 'Scope', value: 'Interior Design' },
      { label: 'Style', value: 'Classic' },
    ],
    featuredLayout: 'standard',
  },
];

/** Lookup a project by slug (used by the detail route). */
export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

/** Get previous/next projects for detail-page navigation (wraps around). */
export function getAdjacentProjects(slug: string): {
  prev: Project;
  next: Project;
} | null {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  return { prev, next };
}
