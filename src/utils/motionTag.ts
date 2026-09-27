import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ComponentType, ElementType } from 'react';

/**
 * framer-motion's `motion(Component)` must not be called during render — doing
 * so creates a brand-new component every render and remounts the subtree. This
 * caches the wrapped motion component per element type so it is stable.
 *
 * The created component is typed permissively (as a div's motion props, which
 * cover the shared set we use — variants/initial/animate/className/transition),
 * since the concrete element type is only known at runtime.
 */
type AnyMotionComponent = ComponentType<HTMLMotionProps<'div'>>;

const cache = new Map<ElementType, AnyMotionComponent>();

export function motionTag(as: ElementType): AnyMotionComponent {
  const existing = cache.get(as);
  if (existing) return existing;
  const created = motion.create(as) as AnyMotionComponent;
  cache.set(as, created);
  return created;
}
