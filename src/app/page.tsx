import { SectionHero } from '@/components/section-hero';
import { SectionProblem } from '@/components/section-problem';
import { SectionFeatures } from '@/components/section-features';
import { SectionAudiences } from '@/components/section-audiences';
import { SectionHowItWorks } from '@/components/section-how-it-works';
import { SectionSafety } from '@/components/section-safety';
import { SectionTestimonials } from '@/components/section-testimonials';
import { SectionFAQ } from '@/components/section-faq';
import { SectionCTA } from '@/components/section-cta';

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionProblem />
      <SectionFeatures />
      <SectionHowItWorks />
      <SectionAudiences />
      <SectionSafety />
      <SectionTestimonials />
      <SectionFAQ />
      <SectionCTA />
    </>
  );
}
