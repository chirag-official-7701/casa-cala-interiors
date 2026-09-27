import { useReducedMotion } from 'framer-motion';
import type { ReactNode, ElementType } from 'react';
import { motionTag } from '../../utils/motionTag';
import { riseVariants, viewportOnce } from '../../constants/motion';

interface ScrollRevealProps {
  children: ReactNode;
  /** Render as a different element (defaults to div). */
  as?: ElementType;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
}

/**
 * Reveals its children with a subtle fade + rise the first time they enter the
 * viewport. Honours prefers-reduced-motion by rendering statically.
 */
export function ScrollReveal({
  children,
  as = 'div',
  className,
  delay = 0,
}: ScrollRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motionTag(as);

  return (
    <MotionTag
      className={className}
      variants={riseVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
