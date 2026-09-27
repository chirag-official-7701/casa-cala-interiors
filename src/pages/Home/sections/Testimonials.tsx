import { useCallback, useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { TESTIMONIALS } from '../../../data/testimonials';
import type { Testimonial } from '../../../types';
import { cn } from '../../../utils/cn';
import styles from './Testimonials.module.css';

/** First letters of the first two words of a name, e.g. "Layla Haddad" → "LH". */
function initials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

function Card({ t }: { t: Testimonial }) {
  return (
    <article className={styles.card}>
      <header className={styles.cardHead}>
        <span
          className={styles.avatar}
          style={{ backgroundColor: t.accent }}
          aria-hidden="true"
        >
          {initials(t.name)}
        </span>
        <div className={styles.person}>
          <span className={styles.name}>{t.name}</span>
          <span className={styles.location}>{t.location}</span>
        </div>
        <span
          className={styles.rating}
          aria-label={`Rated ${t.rating} out of 5`}
        >
          <Star size={13} strokeWidth={0} fill="currentColor" />
          {t.rating}/5
        </span>
      </header>

      <blockquote className={styles.quote}>{t.quote}</blockquote>

      <footer className={styles.date}>{t.date}</footer>
    </article>
  );
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const stepWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const first = track.firstElementChild as HTMLElement | null;
    if (!first) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap || '0') || 0;
    return first.offsetWidth + gap;
  }, []);

  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const max = TESTIMONIALS.length - 1;
      const clamped = Math.max(0, Math.min(index, max));
      track.scrollTo({ left: clamped * stepWidth(), behavior: 'smooth' });
    },
    [stepWidth],
  );

  // Keep the active dot in sync while the user scrolls/swipes.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const step = stepWidth();
        if (step) setActive(Math.round(track.scrollLeft / step));
      });
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [stepWidth]);

  return (
    <section className={styles.section} aria-label="What our clients say">
      <Container>
        <SectionHeading
          eyebrow="Kind Words"
          title={['What Our', 'Clients Say']}
          ghost="Clients"
          align="center"
          className={styles.head}
        />

        <div
          ref={trackRef}
          className={styles.track}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className={styles.slide}>
              <Card t={t} />
            </div>
          ))}
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => scrollToIndex(active - 1)}
            disabled={active === 0}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>

          <div className={styles.dots} role="tablist" aria-label="Choose slide">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(styles.dot, i === active && styles.dotActive)}
                onClick={() => scrollToIndex(i)}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.arrow}
            onClick={() => scrollToIndex(active + 1)}
            disabled={active >= TESTIMONIALS.length - 1}
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </Container>
    </section>
  );
}
