import { PageTransition } from '../../components/animations/PageTransition';
import { Seo } from '../../components/common/Seo';
import { ComingSoonSection } from '../../components/common/ComingSoonSection';

export default function Brands() {
  return (
    <PageTransition>
      <Seo
        title="Our Brands"
        path="/brands"
        description="Casa Kala is curating an ecosystem of design-led brands. Something beautiful is coming."
      />
      <ComingSoonSection
        eyebrow="Our Brands"
        title={['Our', 'Brands.']}
        message="We are building a curated ecosystem of design-led brands — furniture, materials and objects chosen with the same care as our interiors. Something beautiful is coming."
        themes={[
          'Furniture',
          'Materials',
          'Lighting',
          'Objects',
          'Collaborations',
        ]}
      />
    </PageTransition>
  );
}
