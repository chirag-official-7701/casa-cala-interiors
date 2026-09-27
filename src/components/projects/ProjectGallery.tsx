import type { GalleryImage } from '../../types';
import { ImageReveal } from '../animations/ImageReveal';
import { cn } from '../../utils/cn';
import styles from './ProjectGallery.module.css';

interface ProjectGalleryProps {
  images: GalleryImage[];
}

/** Premium portfolio gallery — orientation-aware, offset masonry rhythm. */
export function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <div className={styles.gallery}>
      {images.map((img, i) => {
        const portrait = img.orientation === 'portrait';
        return (
          <figure
            key={`${img.src}-${i}`}
            className={cn(
              styles.item,
              portrait ? styles.portrait : styles.landscape,
            )}
          >
            <ImageReveal
              src={img.src}
              alt={img.alt}
              ratio={portrait ? '4 / 5' : '3 / 2'}
              ratioValue={portrait ? 1.25 : 0.667}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </figure>
        );
      })}
    </div>
  );
}
