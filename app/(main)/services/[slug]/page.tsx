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
import ServiceDoctor from '@/app/components/services/subServices/ServiceDoctor';
import FamilyDentalServices from '@/app/components/services/subServices/FamilyDentalServices';
import EducationSection from '@/app/components/services/subServices/EducationSection';
import PatientTypesSection from '@/app/components/services/subServices/PatientTypesSection';
import SymptomsSection from '@/app/components/services/subServices/SymptomsSection';
import WhyChooseSection from '@/app/components/services/subServices/WhyChooseSection';
import LocalAreaSection from '@/app/components/services/subServices/LocalAreaSection';
import RelatedServicesSection from '@/app/components/services/subServices/RelatedServicesSection';
import ServiceFAQSection from '@/app/components/services/subServices/ServiceFAQ';
import FinalCTASection from '@/app/components/services/subServices/ServiceCTA';
import ServiceDecisionSection from '@/app/components/services/subServices/ServiceDecisionSection';
import type { Metadata } from 'next';
import SolutionsGridSection from '@/app/components/services/subServices/SolutionsGridSection';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | Promenade Dental',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

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
  <ServiceOverview {...service.overview}/> 
  <ServiceBenefits
  eyebrow={service.whyItMatters.eyebrow}
  heading={service.whyItMatters.heading}
  description={service.whyItMatters.description}
  benefits={service.whyItMatters.items}
/>
<FamilyDentalServices 
  eyebrow={service.servicesGrid.eyebrow}
  heading={service.servicesGrid.heading}
  intro={service.servicesGrid.intro}
  services={service.servicesGrid.services}
/>
{service.educationSection && (
  <EducationSection data={service.educationSection} />
)}

{service.comparison &&(<ServiceDecisionSection data={service.comparison}/> )}
{service.solutionsGrid && (<SolutionsGridSection data={service.solutionsGrid}/>)}

  {service.patientTypesSection && (<PatientTypesSection data={service.patientTypesSection} />)}
  {service.process && (
  <ServiceProcess data={service.process} />
)}

   {service.symptomsSection && (
        <SymptomsSection data={service.symptomsSection} />
      )}

      {service.benefits && (
        <WhyChooseSection data={service.benefits} />
      )}

      {service.localArea && (
        <LocalAreaSection data={service.localArea} />
      )}
      {service.relatedServices && (
        <RelatedServicesSection data={service.relatedServices} />
      )}
      {service.faq && (
        <ServiceFAQSection data={service.faq} />
      )}
      {service.cta && (
        <FinalCTASection data={service.cta} />
      )}
  <Footer />
</main>
  );
}