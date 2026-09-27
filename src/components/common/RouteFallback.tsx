import styles from './RouteFallback.module.css';

/** Minimal, brand-consistent loading state for lazily-loaded routes. */
export function RouteFallback() {
  return (
    <div className={styles.wrap} role="status" aria-live="polite">
      <span className={styles.loader} aria-hidden="true" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
