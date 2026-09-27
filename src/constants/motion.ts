import type { Variants, Transition } from 'framer-motion';

/* Shared motion language. Keep easing/durations consistent across the app. */

export const EASE_OUT: Transition['ease'] = [0.22, 1, 0.36, 1];
export const EASE_IN_OUT: Transition['ease'] = [0.65, 0, 0.35, 1];

export const DUR = { fast: 0.35, med: 0.6, slow: 0.9 } as const;

/** Fade + rise, used by ScrollReveal. */
export const riseVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.med, ease: EASE_OUT },
  },
};

/** Container that staggers its children (e.g. lists of lines/items). */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** A single line/word for text reveals — masked rise. */
export const lineChild: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: DUR.slow, ease: EASE_OUT },
  },
};

/** Route-level page transition. */
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.med, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: DUR.fast, ease: EASE_IN_OUT },
  },
};

/** Standard viewport config for whileInView — animate once, a little early. */
export const viewportOnce = {
  once: true,
  amount: 0.25,
  margin: '0px 0px -10% 0px',
} as const;
