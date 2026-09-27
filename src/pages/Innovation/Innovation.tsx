import { PageTransition } from '../../components/animations/PageTransition';
import { Seo } from '../../components/common/Seo';
import { ComingSoonSection } from '../../components/common/ComingSoonSection';

export default function Innovation() {
  return (
    <PageTransition>
      <Seo
        title="Innovation"
        path="/innovation"
        description="Casa Kala is exploring the future of living — smart spaces, sustainable materials and design-led technology."
      />
      <ComingSoonSection
        eyebrow="Innovation"
        title={['Designing', 'What’s Next.']}
        message="We are exploring the future of living — where smart spaces, sustainable materials and design-led technology come together to shape how we will inhabit our environments tomorrow."
        themes={[
          'Smart Spaces',
          'Sustainable Materials',
          'Future Living',
          'Design Technology',
          'Wellbeing',
        ]}
      />
    </PageTransition>
  );
}
