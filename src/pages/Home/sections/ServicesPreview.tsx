import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { Image } from '../../../components/common/Image';
import { Button } from '../../../components/common/Button';
import { SERVICES } from '../../../data/services';
import { ROUTES } from '../../../constants/routes';
import styles from './ServicesPreview.module.css';

/**
 * An interactive service index: hovering a row previews its image in a floating
 * panel (desktop). Fully functional as a plain link list on touch/keyboard.
 */
export function ServicesPreview() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const preview = active !== null ? SERVICES[active] : null;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <SectionHeading
            eyebrow="What We Do"
            title={['Services']}
            tone="dark"
          />
          <Button to={ROUTES.services} variant="ghost" tone="dark" withArrow>
            All Services
          </Button>
        </div>

        <div className={styles.body}>
          <ul className={styles.list} onMouseLeave={() => setActive(null)}>
            {SERVICES.map((service, i) => (
              <li key={service.id}>
                <Link
                  to={`${ROUTES.services}#${service.slug}`}
                  className={styles.row}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span className={styles.number}>{service.number}</span>
                  <span className={styles.title}>{service.title}</span>
                  <span className={styles.summary}>{service.summary}</span>
                  <ArrowUpRight
                    className={styles.arrow}
                    size={20}
                    strokeWidth={1.4}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.previewPane} aria-hidden="true">
            <AnimatePresence mode="wait">
              {preview && !reduce && (
                <motion.div
                  key={preview.id}
                  className={styles.previewInner}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={preview.image}
                    alt=""
                    ratio="4 / 5"
                    ratioValue={1.25}
                    sizes="30vw"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
