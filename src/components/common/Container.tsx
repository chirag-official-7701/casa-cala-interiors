import type { ReactNode, ElementType } from 'react';
import { cn } from '../../utils/cn';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  /** Narrow measure for text-heavy content. */
  narrow?: boolean;
  /** Remove horizontal padding (for full-bleed children). */
  bleed?: boolean;
  className?: string;
}

/** Centered max-width container with consistent responsive gutters. */
export function Container({
  children,
  as: Tag = 'div',
  narrow = false,
  bleed = false,
  className,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        styles.container,
        narrow && styles.narrow,
        bleed && styles.bleed,
        className,
      )}
    >
      {children}
    </Tag>
  );
}
