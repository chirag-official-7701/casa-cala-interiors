/* =========================================================================
   HOME PAGE — CONTENT CONFIG
   -------------------------------------------------------------------------
   All text/images for the home page and its sections. Edit here only.
   (The project list, testimonials, track-record numbers and process steps
   are collections that live in src/data/*.)
   ========================================================================= */

export const HOME = {
  hero: {
    /** The location is appended automatically from src/constants/site.ts */
    eyebrowLead: 'Interior Architecture Studio',
    title: ['Spaces Designed', 'to Inspire.'],
    lead: 'We create refined interiors where architecture, functionality and timeless design come together.',
    image: '1600585154340-be6161a56a0c',
    imageAlt: 'A light-filled contemporary interior with sculptural furniture',
    primaryCta: { label: 'Explore Projects', to: '/projects' },
    secondaryCta: { label: 'Start a Conversation', to: '/contact' },
    scrollLabel: 'Scroll',
  },

  featured: {
    eyebrow: 'Selected Work',
    title: ['Featured', 'Projects'],
    ghost: 'Projects',
    intro:
      'A selection of recent residential, commercial and hospitality interiors — each a considered response to place and purpose.',
    ctaLabel: 'View All Projects',
  },

  trackRecords: {
    eyebrow: 'By The Numbers',
    title: ['Track', 'Records'],
    ghost: 'Records',
  },

  philosophy: {
    eyebrow: 'Our Philosophy',
    title: ['Designing Spaces', 'With Purpose.'],
    lead: 'We approach every project as a study in how people live, work and feel. Architecture, light and material are composed with intent — creating interiors that are quietly beautiful and deeply human.',
    pillars: [
      {
        title: 'Materiality',
        text: 'Honest, tactile materials chosen to age with grace.',
      },
      {
        title: 'Craftsmanship',
        text: 'An obsession with the details you feel more than see.',
      },
      {
        title: 'Functionality',
        text: 'Spaces that make everyday life feel effortless.',
      },
      {
        title: 'Sustainability',
        text: 'Considered choices that respect people and place.',
      },
    ],
    images: [
      {
        src: '1615529182904-14819c35db37',
        alt: 'A serene interior detail with layered natural textures',
      },
      {
        src: '1600210492486-724fe5c67fb0',
        alt: '',
      },
    ],
  },

  process: {
    eyebrow: 'How We Work',
    title: ['A Considered', 'Process.'],
    ghost: 'Process',
    intro:
      'Six deliberate stages take a project from first conversation to final handover — each one protecting the design intent.',
  },

  testimonials: {
    eyebrow: 'Kind Words',
    title: ['What Our', 'Clients Say'],
    ghost: 'Clients',
  },

  services: {
    eyebrow: 'What We Do',
    title: ['Services'],
    ctaLabel: 'All Services',
  },
} as const;
