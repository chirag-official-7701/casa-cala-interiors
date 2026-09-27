import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { NAV_ITEMS } from '../../data/navigation';
import { SITE, SOCIALS } from '../../constants/site';
import { Logo } from './Logo';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { EASE_OUT } from '../../constants/motion';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const panelVariants = {
  closed: { clipPath: 'inset(0 0 100% 0)' },
  open: {
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 0.6,
      ease: EASE_OUT,
      when: 'beforeChildren',
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
  exit: {
    clipPath: 'inset(0 0 100% 0)',
    transition: { duration: 0.45, ease: EASE_OUT },
  },
};

const itemVariants = {
  closed: { y: 40, opacity: 0 },
  open: { y: 0, opacity: 1, transition: { duration: 0.5, ease: EASE_OUT } },
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const reduce = useReducedMotion();
  const { pathname } = useLocation();
  const closeRef = useRef<HTMLButtonElement>(null);
  const prevPath = useRef(pathname);

  useLockBodyScroll(open);

  // Close on route change.
  useEffect(() => {
    if (pathname !== prevPath.current) {
      prevPath.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  // Close on Escape; focus the close button when opened.
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          className={styles.menu}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          variants={reduce ? undefined : panelVariants}
          initial={reduce ? { opacity: 0 } : 'closed'}
          animate={reduce ? { opacity: 1 } : 'open'}
          exit={reduce ? { opacity: 0 } : 'exit'}
        >
          <div className={styles.top}>
            <Logo tone="dark" onClick={onClose} />
            <button
              ref={closeRef}
              type="button"
              className={styles.close}
              onClick={onClose}
              aria-label="Close menu"
            >
              <X size={28} strokeWidth={1.4} />
            </button>
          </div>

          <nav className={styles.nav} aria-label="Mobile">
            <ul>
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.to}
                  variants={reduce ? undefined : itemVariants}
                >
                  <Link to={item.to} className={styles.link} onClick={onClose}>
                    <span className={styles.index}>0{i + 1}</span>
                    <span className={styles.linkText}>{item.label}</span>
                    {item.comingSoon && (
                      <span className={styles.soon}>Soon</span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            className={styles.footer}
            variants={reduce ? undefined : itemVariants}
          >
            <a href={`mailto:${SITE.email}`} className={styles.contact}>
              {SITE.email}
            </a>
            <div className={styles.socials}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
