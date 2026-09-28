import { PageTransition } from '../../components/animations/PageTransition';
import { Seo } from '../../components/common/Seo';
import { ComingSoonSection } from '../../components/common/ComingSoonSection';
import { INNOVATION } from '../../content/innovation';

export default function Innovation() {
  return (
    <PageTransition>
      <Seo
        title={INNOVATION.seo.title}
        path="/innovation"
        description={INNOVATION.seo.description}
      />
      <ComingSoonSection
        eyebrow={INNOVATION.eyebrow}
        title={[...INNOVATION.title]}
        message={INNOVATION.message}
        themes={[...INNOVATION.themes]}
      />
    </PageTransition>
  );
}
