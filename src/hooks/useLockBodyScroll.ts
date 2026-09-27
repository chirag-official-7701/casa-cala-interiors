import { useEffect } from 'react';

/** Locks body scroll while `locked` is true (e.g. the mobile menu is open). */
export function useLockBodyScroll(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    return () => {
      document.body.style.overflow = original;
      document.body.style.paddingRight = '';
    };
  }, [locked]);
}
