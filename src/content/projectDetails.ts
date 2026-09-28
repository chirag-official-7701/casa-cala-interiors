/* =========================================================================
   PROJECT DETAIL PAGE — CONTENT CONFIG
   Static labels for every project detail page. The per-project content
   (title, description, stats, gallery, etc.) lives in src/data/projects.ts.
   ========================================================================= */

export const PROJECT_DETAIL = {
  backLabel: 'All Projects',
  meta: {
    location: 'Location',
    year: 'Year',
    category: 'Category',
  },
  philosophyEyebrow: 'Design Philosophy',
  philosophyTitle: ['The Approach'],
  galleryLabel: 'Gallery',
  pager: {
    prev: 'Previous',
    next: 'Next',
  },
} as const;
