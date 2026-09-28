import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Logo } from '../navigation/Logo';
import { ScrollReveal } from '../animations/ScrollReveal';
import { TextReveal } from '../animations/TextReveal';
import { NAV_ITEMS } from '../../data/navigation';
import { SITE, SOCIALS } from '../../constants/site';
import { FOOTER } from '../../content/common';
import styles from './Footer.module.css';

export function Footer() {
  const year = FOOTER.copyrightYear;

  return (
    <footer className={styles.footer}>
      <Container>
        {/* Closing statement */}
        <div className={styles.cta}>
          <span className={styles.eyebrow}>{FOOTER.eyebrow}</span>
          <TextReveal
            as="p"
            className={styles.statement}
            lines={[...FOOTER.statement]}
          />
          <ScrollReveal delay={0.15}>
            <Link to="/contact" className={styles.ctaLink}>
              {FOOTER.ctaLabel}
              <ArrowUpRight size={28} strokeWidth={1.3} />
            </Link>
          </ScrollReveal>
        </div>

        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo tone="dark" />
            <p className={styles.blurb}>{SITE.description}</p>
          </div>

          <nav className={styles.col} aria-label="Footer">
            <h2 className={styles.colTitle}>{FOOTER.columns.explore}</h2>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={styles.footLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.col}>
            <h2 className={styles.colTitle}>{FOOTER.columns.studio}</h2>
            <ul>
              <li>
                <a href={`mailto:${SITE.email}`} className={styles.footLink}>
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.phoneHref} className={styles.footLink}>
                  {SITE.phone}
                </a>
              </li>
              <li className={styles.address}>{SITE.location}</li>
            </ul>
          </div>

          <div className={styles.col}>
            <h2 className={styles.colTitle}>{FOOTER.columns.follow}</h2>
            <ul>
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footLink}
                  >
                    {s.label}
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <p className={styles.credit}>{FOOTER.credit}</p>
        </div>
      </Container>
    </footer>
  );
}
