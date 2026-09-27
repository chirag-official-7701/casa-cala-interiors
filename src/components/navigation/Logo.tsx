import { Link } from 'react-router-dom';
import { SITE } from '../../constants/site';
import styles from './Logo.module.css';
import { cn } from '../../utils/cn';

interface LogoProps {
  tone?: 'light' | 'dark';
  className?: string;
  onClick?: () => void;
}

/**
 * Horizontal brand lockup: the Casa Kala monogram beside the wordmark and
 * tagline. The mark is the shared /public/logo-mark.svg brand asset; the
 * wordmark is live text so it stays crisp and adapts to light/dark.
 */
export function Logo({ tone = 'light', className, onClick }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn(styles.logo, styles[tone], className)}
      aria-label={`${SITE.name} — home`}
      onClick={onClick}
    >
      <img
        className={styles.mark}
        src="/logo-mark.svg"
        alt=""
        width={49}
        height={44}
        aria-hidden="true"
      />
      <span className={styles.lockup}>
        <span className={styles.word}>{SITE.name}</span>
        <span className={styles.tagline}>{SITE.tagline}</span>
      </span>
    </Link>
  );
}
