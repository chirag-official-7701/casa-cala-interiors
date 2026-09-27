import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { Service } from '../../types';
import { ImageReveal } from '../animations/ImageReveal';
import { EASE_OUT } from '../../constants/motion';
import { cn } from '../../utils/cn';
import styles from './ServiceItem.module.css';

interface ServiceItemProps {
  service: Service;
  /** Alternate the image side for editorial rhythm. */
  index: number;
}

export function ServiceItem({ service, index }: ServiceItemProps) {
  const reduce = useReducedMotion();
  const flipped = index % 2 === 1;

  return (
    <article
      id={service.slug}
      className={cn(styles.item, flipped && styles.flipped, 'zoomParent')}
    >
      <div className={styles.media}>
        <ImageReveal
          src={service.image}
          alt={service.title}
          ratio="5 / 4"
          ratioValue={0.8}
          sizes="(max-width: 900px) 100vw, 50vw"
          zoomOnHover
        />
      </div>

      <div className={styles.body}>
        <div className={styles.numberRow}>
          <motion.span
            className={styles.number}
            aria-hidden="true"
            initial={reduce ? undefined : { opacity: 0, x: flipped ? 30 : -30 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            {service.number}
          </motion.span>
          <h3 className={styles.title}>{service.title}</h3>
        </div>

        <p className={styles.description}>{service.description}</p>

        <ul className={styles.deliverables}>
          {service.deliverables.map((d) => (
            <li key={d}>
              <Check size={15} strokeWidth={1.5} aria-hidden="true" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
