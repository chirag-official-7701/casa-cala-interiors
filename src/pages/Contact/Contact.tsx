import { Mail, Phone, MapPin } from 'lucide-react';
import { PageTransition } from '../../components/animations/PageTransition';
import { Seo } from '../../components/common/Seo';
import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { ScrollReveal } from '../../components/animations/ScrollReveal';
import { ContactForm } from '../../components/forms/ContactForm';
import { SITE, SOCIALS } from '../../constants/site';
import { CONTACT } from '../../content/contact';
import styles from './Contact.module.css';

export default function Contact() {
  const { seo, hero, form, info } = CONTACT;
  return (
    <PageTransition>
      <Seo title={seo.title} path="/contact" description={seo.description} />

      <section className={styles.hero}>
        <Container>
          <span className={styles.eyebrow}>{hero.eyebrow}</span>
          <h1 className={styles.title}>{hero.title}</h1>
          <p className={styles.lead}>{hero.lead}</p>
        </Container>
      </section>

      <section className={styles.main}>
        <Container>
          <div className={styles.grid}>
            <div className={styles.formCol}>
              <SectionHeading eyebrow={form.eyebrow} title={[...form.title]} />
              <div className={styles.formWrap}>
                <ContactForm />
              </div>
            </div>

            <aside
              className={styles.infoCol}
              aria-label="Studio contact details"
            >
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>{info.emailLabel}</span>
                <a href={`mailto:${SITE.email}`} className={styles.infoLink}>
                  <Mail size={16} strokeWidth={1.5} aria-hidden="true" />
                  {SITE.email}
                </a>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>{info.callLabel}</span>
                <a href={SITE.phoneHref} className={styles.infoLink}>
                  <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
                  {SITE.phone}
                </a>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>{info.visitLabel}</span>
                <p className={styles.infoText}>
                  <MapPin size={16} strokeWidth={1.5} aria-hidden="true" />
                  {SITE.location}
                </p>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>{info.followLabel}</span>
                <ul className={styles.socials}>
                  {SOCIALS.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map placeholder — swap for an embedded map when ready. */}
              <ScrollReveal className={styles.map}>
                <div
                  className={styles.mapInner}
                  role="img"
                  aria-label={`Map showing ${SITE.locationShort}`}
                >
                  <span className={styles.mapPin} aria-hidden="true">
                    <MapPin size={22} strokeWidth={1.5} />
                  </span>
                  <span className={styles.mapCity}>{SITE.locationShort}</span>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
