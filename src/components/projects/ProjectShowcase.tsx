import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Project } from '../../types';
import { ImageReveal } from '../animations/ImageReveal';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ROUTES } from '../../constants/routes';
import { cn } from '../../utils/cn';
import styles from './ProjectShowcase.module.css';

interface ProjectShowcaseProps {
  projects: Project[];
}

/**
 * Full-width editorial project rows: an oversized ghost title, two staggered
 * images and a dark info card that overlaps them — alternating side by side to
 * give the page a magazine rhythm instead of a uniform card wall.
 */
export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  return (
    <div className={styles.list}>
      {projects.map((project, i) => {
        const flipped = i % 2 === 1;
        const to = ROUTES.projectDetail(project.slug);
        const secondary = project.gallery[0] ?? {
          src: project.heroImage,
          alt: project.title,
        };

        return (
          <ScrollReveal
            as="article"
            key={project.id}
            className={cn(styles.row, flipped && styles.flipped)}
          >
            <span className={styles.ghost} aria-hidden="true">
              {project.title}
            </span>

            <div className={styles.images}>
              <Link
                to={to}
                className={cn(styles.media, styles.primary, 'zoomParent')}
                aria-hidden="true"
                tabIndex={-1}
              >
                <ImageReveal
                  src={project.heroImage}
                  alt={`${project.title}, ${project.location}`}
                  ratio="4 / 3"
                  ratioValue={0.75}
                  sizes="(max-width: 900px) 100vw, 48vw"
                  zoomOnHover
                  priority={i < 2}
                />
              </Link>

              <Link
                to={to}
                className={cn(styles.media, styles.secondary, 'zoomParent')}
                aria-hidden="true"
                tabIndex={-1}
              >
                <ImageReveal
                  src={secondary.src}
                  alt={secondary.alt}
                  ratio="4 / 3"
                  ratioValue={0.75}
                  sizes="(max-width: 900px) 100vw, 48vw"
                  zoomOnHover
                />
              </Link>
            </div>

            <div className={styles.card}>
              <span className={styles.eyebrow}>{project.category}</span>
              <h2 className={styles.title}>
                <Link to={to}>{project.title}</Link>
              </h2>
              <span className={styles.divider} aria-hidden="true" />
              <div className={styles.meta}>
                <span>{project.location}</span>
                <span>{project.year}</span>
              </div>
              <p className={styles.excerpt}>{project.excerpt}</p>
              <Link to={to} className={styles.link}>
                View Project
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
