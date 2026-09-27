import { useEffect, useState } from 'react';

/**
 * Returns true once the window has scrolled past `threshold` px.
 * Used to shrink/opacify the header. Passive listener + rAF throttle.
 */
export function useScrolled(threshold = 40): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > threshold);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
