import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types';
import { ImageReveal } from '../animations/ImageReveal';
import { ROUTES } from '../../constants/routes';
import { cn } from '../../utils/cn';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  /** Portrait cards create the asymmetric rhythm on the grid. */
  orientation?: 'portrait' | 'landscape';
  /** Nudge down for a staggered, editorial grid. */
  offset?: boolean;
  priority?: boolean;
}

export function ProjectCard({
  project,
  orientation = 'landscape',
  offset = false,
  priority = false,
}: ProjectCardProps) {
  return (
    <Link
      to={ROUTES.projectDetail(project.slug)}
      className={cn(styles.card, 'zoomParent', offset && styles.offset)}
      aria-label={`${project.title} — ${project.category} in ${project.location}`}
    >
      <div className={styles.media}>
        <ImageReveal
          src={project.thumbnail}
          alt={`${project.title}, ${project.location}`}
          ratio={orientation === 'portrait' ? '4 / 5' : '3 / 2'}
          ratioValue={orientation === 'portrait' ? 1.25 : 0.667}
          sizes="(max-width: 700px) 100vw, 50vw"
          zoomOnHover
          priority={priority}
        />
        <span className={styles.year}>{project.year}</span>
        <span className={styles.view} aria-hidden="true">
          <ArrowUpRight size={20} strokeWidth={1.5} />
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span>{project.category}</span>
          <span className={styles.dotSep} aria-hidden="true" />
          <span>{project.location}</span>
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.excerpt}>{project.excerpt}</p>
      </div>
    </Link>
  );
}
