import type { Service, ProcessStep } from '../types';

/* Services — numbered, editorial. Order defines the on-page numbering. */
export const SERVICES: Service[] = [
  {
    id: 's-interior-design',
    number: '01',
    slug: 'interior-design',
    title: 'Interior Design',
    summary: 'Complete interior design solutions from concept to execution.',
    description:
      'We shape complete interiors from first concept to final styling — spatial narrative, material palettes, bespoke joinery, lighting and art. Every decision is made in service of how a space should feel to live and work in.',
    image: '1618221195710-dd6b41faaea6',
    deliverables: [
      'Concept & mood direction',
      'Material & finish schedules',
      'FF&E specification',
      'Styling & handover',
    ],
  },
  {
    id: 's-space-planning',
    number: '02',
    slug: 'space-planning',
    title: 'Space Planning',
    summary: 'Functional and intelligent space planning.',
    description:
      'Great interiors begin with a great plan. We study how you move, gather and work, then organise space to make daily life feel effortless — balancing flow, privacy, light and proportion.',
    image: '1615529182904-14819c35db37',
    deliverables: [
      'Spatial studies',
      'Circulation & zoning',
      'Ergonomic layouts',
      'Test-fits',
    ],
  },
  {
    id: 's-residential',
    number: '03',
    slug: 'residential-interiors',
    title: 'Residential Interiors',
    summary: 'Luxury homes, apartments and villas.',
    description:
      'From city apartments to landmark villas, we craft homes that are deeply personal and quietly luxurious. Our residential work is defined by tactile materials, considered detailing and a sense of calm.',
    image: '1600566753086-00f18fb6b3ea',
    deliverables: [
      'Villas & townhouses',
      'Apartments & penthouses',
      'Bespoke joinery',
      'Art & styling',
    ],
  },
  {
    id: 's-commercial',
    number: '04',
    slug: 'commercial-interiors',
    title: 'Commercial Interiors',
    summary: 'Offices, workspaces and commercial environments.',
    description:
      'We design workplaces that people actually want to be in — spaces that express brand, support focus and make collaboration feel natural. Function and beauty are held in equal regard.',
    image: '1497366216548-37526070297c',
    deliverables: [
      'Workplace strategy',
      'Headquarters & studios',
      'Client & hospitality zones',
      'Brand environments',
    ],
  },
  {
    id: 's-hospitality',
    number: '05',
    slug: 'hospitality-design',
    title: 'Hospitality Design',
    summary: 'Hotels, restaurants and hospitality spaces.',
    description:
      'Hospitality is about memory. We design hotels, restaurants and lounges that engage every sense, creating atmospheres guests remember long after they leave.',
    image: '1445019980597-93fa8acb246c',
    deliverables: [
      'Hotels & resorts',
      'Restaurants & bars',
      'Lobbies & lounges',
      'Guest experience',
    ],
  },
  {
    id: 's-turnkey',
    number: '06',
    slug: 'turnkey-solutions',
    title: 'Turnkey Solutions',
    summary: 'Complete design and execution management.',
    description:
      'One studio, one point of accountability. We manage the entire journey — design, procurement, contractors and installation — and hand you the keys to a finished space, delivered to the last detail.',
    image: '1512917774080-9991f1c4c750',
    deliverables: [
      'Design & documentation',
      'Procurement',
      'Site management',
      'Snagging & handover',
    ],
  },
];

/* Design process — animated on scroll. */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We listen closely — to your life, your ambitions and the site itself — and translate them into a clear design brief.',
  },
  {
    number: '02',
    title: 'Concept',
    description:
      'We shape a spatial narrative: mood, materiality and the big architectural moves that will define the project.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'The concept is resolved into considered layouts, palettes and detailed drawings for every room.',
  },
  {
    number: '04',
    title: 'Develop',
    description:
      'We engineer the details — joinery, lighting, finishes — and coordinate every specialist and supplier.',
  },
  {
    number: '05',
    title: 'Execute',
    description:
      'Our team manages the site with precision, protecting the design intent from first fix to final coat.',
  },
  {
    number: '06',
    title: 'Deliver',
    description:
      'We style, snag and hand over a finished space — then stay close to ensure it lives beautifully.',
  },
];
