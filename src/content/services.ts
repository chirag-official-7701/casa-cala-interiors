/* =========================================================================
   SERVICES PAGE — CONTENT CONFIG
   Page copy only. The service entries + process steps live in
   src/data/services.ts.
   ========================================================================= */

export const SERVICES_PAGE = {
  seo: {
    title: 'Services',
    description:
      'From interior design and space planning to turnkey delivery, Casa Kala offers complete design and execution across residential, commercial and hospitality.',
  },
  hero: {
    eyebrow: 'What We Do',
    title: ['Our Services'],
    image: '1615529182904-14819c35db37',
    imageAlt: 'A calm, considered interior with layered natural materials',
    intro:
      'A complete design offering — from first concept to the final styled detail — delivered by one accountable studio.',
  },
  cta: {
    text: 'Not sure where to begin? Tell us about your space and we’ll guide you to the right approach.',
    buttonLabel: 'Start a Conversation',
  },
} as const;
