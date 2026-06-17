// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { SERVICES, getServiceBySlug } from '@/app/lib/serviceData';
import ServiceHero from '@/app/components/services/subServices/ServiceHero';
import ServiceOverview from '@/app/components/services/subServices/ServiceOverview';
import ServiceProcess from '@/app/components/services/subServices/ServiceProcess';
import ServiceBenefits from '@/app/components/services/subServices/ServiceBenefits';
import ServiceGallery from '@/app/components/services/subServices/ServiceGallery';
import ServiceFAQ from '@/app/components/services/subServices/ServiceFAQ';
import ServiceCTA from '@/app/components/services/subServices/ServiceCTA';
import Navbar from '@/app/components/home/Navbar';
import Footer from '@/app/components/home/Footer';
import PracticeGallery from '@/app/components/home/Gallery';
import ServiceStats from '@/app/components/services/subServices/ServiceStats';
import ServiceTestimonials from '@/app/components/services/subServices/ServiceTestimonials';
import ServiceComparison from '@/app/components/services/subServices/ServiceComparison';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
   <main>
  <Navbar />

  <ServiceHero {...service.hero} />

  <ServiceOverview {...service.overview} />

  <ServiceBenefits
    eyebrow={service.benefits.eyebrow}
    heading={service.benefits.heading}
    benefits={service.benefits.items}
  />

  {service.stats && (
    <ServiceStats
      eyebrow={service.stats.eyebrow}
      heading={service.stats.heading}
      stats={service.stats.items}
    />
  )}

  <PracticeGallery />

  <ServiceProcess {...service.process} />

  {service.testimonials && (
    <ServiceTestimonials
      eyebrow={service.testimonials.eyebrow}
      heading={service.testimonials.heading}
      testimonials={service.testimonials.items}
    />
  )}

  {service.comparison && (
    <ServiceComparison
      eyebrow={service.comparison.eyebrow}
      heading={service.comparison.heading}
      subtitle={service.comparison.subtitle}
      without={service.comparison.without}
      withUs={service.comparison.withUs}
    />
  )}

  <ServiceFAQ
    eyebrow={service.faq.eyebrow}
    heading={service.faq.heading}
    faqs={service.faq.items}
  />

  <ServiceCTA {...service.cta} />

  <Footer />
</main>
  );
}