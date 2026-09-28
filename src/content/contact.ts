/* =========================================================================
   CONTACT PAGE — CONTENT CONFIG
   All copy, labels and the contact-form strings. Studio email/phone/address
   come from src/constants/site.ts; the dropdown options come from there too
   (PROJECT_TYPES, BUDGET_RANGES).
   ========================================================================= */

export const CONTACT = {
  seo: {
    title: 'Contact',
    description:
      'Start a conversation with Casa Kala. Tell us about your space and ambitions and our studio will be in touch.',
  },
  hero: {
    eyebrow: 'Get in Touch',
    title: 'Let’s start a conversation.',
    lead: 'Whether you are planning a new home, a workplace or a hospitality space, we would love to hear about it. Share a few details and one of our team will be in touch.',
  },
  form: {
    eyebrow: 'Enquiry',
    title: ['Tell us about', 'your project'],
    fields: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      projectType: 'Project Type',
      budget: 'Budget Range',
      message: 'Message',
    },
    selectPlaceholder: 'Select…',
    budgetDefault: 'Prefer not to say',
    messagePlaceholder: 'Tell us about your space and ambitions…',
    submit: 'Start a Conversation',
    submitting: 'Sending…',
    success: {
      title: 'Message received.',
      reset: 'Send another message',
    },
  },
  info: {
    emailLabel: 'Email us',
    callLabel: 'Call us',
    visitLabel: 'Visit us',
    followLabel: 'Follow',
  },
} as const;
