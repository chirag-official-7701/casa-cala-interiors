import { Seo } from '../../components/common/Seo';
import { Button } from '../../components/common/Button';
import { ROUTES } from '../../constants/routes';
import styles from './ProjectNotFound.module.css';

/** Shown when a project slug does not resolve — graceful, on-brand. */
export function ProjectNotFound() {
  return (
    <div className={styles.wrap}>
      <Seo title="Project Not Found" path="/projects" noindex />
      <span className={styles.eyebrow}>Not Found</span>
      <h1 className={styles.title}>
        This project has moved or no longer exists.
      </h1>
      <p className={styles.text}>
        The project you are looking for could not be found. Browse the full
        portfolio to discover our latest work.
      </p>
      <Button to={ROUTES.projects} tone="dark" withArrow>
        View All Projects
      </Button>
    </div>
  );
}
