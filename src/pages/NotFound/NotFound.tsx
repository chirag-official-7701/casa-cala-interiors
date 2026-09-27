import { PageTransition } from '../../components/animations/PageTransition';
import { Seo } from '../../components/common/Seo';
import { Button } from '../../components/common/Button';
import { TextReveal } from '../../components/animations/TextReveal';
import { ROUTES } from '../../constants/routes';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <PageTransition>
      <Seo title="Page Not Found" path="/404" noindex />
      <section className={styles.wrap}>
        <span className={styles.code} aria-hidden="true">
          404
        </span>
        <span className={styles.eyebrow}>Page Not Found</span>
        <TextReveal
          as="h1"
          immediate
          className={styles.title}
          lines={['This page has', 'wandered off.']}
        />
        <p className={styles.text}>
          The page you are looking for may have moved or no longer exists. Let’s
          get you back to something beautiful.
        </p>
        <div className={styles.actions}>
          <Button to={ROUTES.home} tone="dark" withArrow>
            Back Home
          </Button>
          <Button to={ROUTES.projects} variant="ghost" tone="dark">
            View Projects
          </Button>
        </div>
      </section>
    </PageTransition>
  );
}
