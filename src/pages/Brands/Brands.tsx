import { PageTransition } from '../../components/animations/PageTransition';
import { Seo } from '../../components/common/Seo';
import { ComingSoonSection } from '../../components/common/ComingSoonSection';
import { BRANDS } from '../../content/brands';

export default function Brands() {
  return (
    <PageTransition>
      <Seo
        title={BRANDS.seo.title}
        path="/brands"
        description={BRANDS.seo.description}
      />
      <ComingSoonSection
        eyebrow={BRANDS.eyebrow}
        title={[...BRANDS.title]}
        message={BRANDS.message}
        themes={[...BRANDS.themes]}
      />
    </PageTransition>
  );
}
