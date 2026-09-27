import type { ElementType } from 'react';
import { TextReveal } from '../animations/TextReveal';
import { cn } from '../../utils/cn';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  /** Small uppercase label above the title. */
  eyebrow?: string;
  /** Title lines — each array entry is a masked reveal line. */
  title: string[];
  /** Faint oversized watermark behind the title (editorial signature). */
  ghost?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  as?: ElementType;
  className?: string;
}

/**
 * The studio's signature editorial heading: an eyebrow, a large serif title
 * that reveals line-by-line, and an optional oversized "ghost" watermark.
 */
export function SectionHeading({
  eyebrow,
  title,
  ghost,
  align = 'left',
  tone = 'light',
  as = 'h2',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(styles.heading, styles[align], styles[tone], className)}>
      {ghost && (
        <span className={styles.ghost} aria-hidden="true">
          {ghost}
        </span>
      )}
      <div className={styles.content}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <TextReveal as={as} lines={title} className={styles.title} />
      </div>
    </div>
  );
}
