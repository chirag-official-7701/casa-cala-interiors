import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Logo } from '../navigation/Logo';
import { MobileMenu } from '../navigation/MobileMenu';
import { Button } from '../common/Button';
import { NAV_ITEMS } from '../../data/navigation';
import { useScrolled } from '../../hooks/useScrolled';
import { cn } from '../../utils/cn';
import styles from './Header.module.css';

interface HeaderProps {
  /** True when the page opens with a dark, full-bleed hero the nav sits over. */
  overHero?: boolean;
}

export function Header({ overHero = true }: HeaderProps) {
  const scrolled = useScrolled(48);
  const [menuOpen, setMenuOpen] = useState(false);

  // Solid (light) once scrolled, or on pages without a dark hero.
  const solid = scrolled || !overHero;

  return (
    <>
      <header
        className={cn(
          styles.header,
          solid ? styles.solid : styles.transparent,
          scrolled && styles.compact,
        )}
      >
        <div className={styles.inner}>
          <Logo tone={solid ? 'light' : 'dark'} />

          <nav className={styles.nav} aria-label="Primary">
            <ul className={styles.list}>
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(styles.link, isActive && styles.active)
                    }
                  >
                    <span className={styles.linkLabel}>{item.label}</span>
                    {item.comingSoon && (
                      <span className={styles.dot} aria-hidden="true" />
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Button
              to="/contact"
              variant="primary"
              tone={solid ? 'light' : 'dark'}
              className={styles.cta}
            >
              Start a Project
            </Button>
            <button
              type="button"
              className={styles.menuBtn}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={26} strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
