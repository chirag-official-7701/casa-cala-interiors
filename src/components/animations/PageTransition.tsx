import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { pageVariants } from '../../constants/motion';

/** Wraps each route so pages fade/slide in and out via AnimatePresence. */
export function PageTransition({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
