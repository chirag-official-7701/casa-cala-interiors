import { motion, useReducedMotion } from 'framer-motion';
import type { ElementType } from 'react';
import { motionTag } from '../../utils/motionTag';
import {
  staggerContainer,
  lineChild,
  viewportOnce,
} from '../../constants/motion';
import styles from './TextReveal.module.css';

interface TextRevealProps {
  /** The text to animate, split into masked lines by explicit array entries. */
  lines: string[];
  as?: ElementType;
  className?: string;
  /** Animate as soon as mounted rather than on scroll (for hero headings). */
  immediate?: boolean;
}

/**
 * Reveals a heading line-by-line with a masked upward slide — the signature
 * editorial entrance. Pass pre-split lines for full control over line breaks.
 */
export function TextReveal({
  lines,
  as = 'h2',
  className,
  immediate = false,
}: TextRevealProps) {
  const reduce = useReducedMotion();
  const Tag = as;

  if (reduce) {
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className={styles.line}>
            <span className={styles.inner}>{line}</span>
          </span>
        ))}
      </Tag>
    );
  }

  const MotionTag = motionTag(as);
  const animateProps = immediate
    ? { initial: 'hidden' as const, animate: 'visible' as const }
    : {
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: viewportOnce,
      };

  return (
    <MotionTag
      className={className}
      variants={staggerContainer}
      {...animateProps}
    >
      {lines.map((line, i) => (
        <span key={i} className={styles.line}>
          <motion.span className={styles.inner} variants={lineChild}>
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
