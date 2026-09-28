import { PageTransition } from '../../components/animations/PageTransition';
import { Seo } from '../../components/common/Seo';
import { Button } from '../../components/common/Button';
import { TextReveal } from '../../components/animations/TextReveal';
import { NOT_FOUND } from '../../content/notFound';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <PageTransition>
      <Seo title={NOT_FOUND.seo.title} path="/404" noindex />
      <section className={styles.wrap}>
        <span className={styles.code} aria-hidden="true">
          {NOT_FOUND.code}
        </span>
        <span className={styles.eyebrow}>{NOT_FOUND.eyebrow}</span>
        <TextReveal
          as="h1"
          immediate
          className={styles.title}
          lines={[...NOT_FOUND.title]}
        />
        <p className={styles.text}>{NOT_FOUND.text}</p>
        <div className={styles.actions}>
          <Button to={NOT_FOUND.primaryCta.to} tone="dark" withArrow>
            {NOT_FOUND.primaryCta.label}
          </Button>
          <Button to={NOT_FOUND.secondaryCta.to} variant="ghost" tone="dark">
            {NOT_FOUND.secondaryCta.label}
          </Button>
        </div>
      </section>
    </PageTransition>
  );
}
