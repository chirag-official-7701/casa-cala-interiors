import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import styles from './CustomCursor.module.css';

/**
 * A subtle custom cursor for pointer-capable desktops only. It is purely
 * decorative (aria-hidden) and never shown on touch or reduced-motion devices,
 * so it degrades gracefully. Uses direct DOM writes + rAF to avoid re-renders.
 */
export function CustomCursor() {
  const reduce = useReducedMotion();
  const finePointer = useMediaQuery('(pointer: fine)');
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);

  const enabled = finePointer && !reduce;

  useEffect(() => {
    if (!enabled) return;
    document.body.setAttribute('data-custom-cursor', 'true');

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (!active) setActive(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      const target = e.target as HTMLElement;
      setHovering(!!target.closest('a, button, [data-cursor="hover"]'));
    };

    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.body.removeAttribute('data-custom-cursor');
    };
  }, [enabled, active]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={styles.root}
      data-active={active}
      data-hover={hovering}
    >
      <div ref={ringRef} className={styles.ring} />
      <div ref={dotRef} className={styles.dot} />
    </div>
  );
}
