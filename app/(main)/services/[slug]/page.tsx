// // app/services/[slug]/page.tsx
// import { notFound } from 'next/navigation';
// import { SERVICES, getServiceBySlug } from '@/app/lib/serviceData';
// import ServiceHero from '@/app/components/services/subServices/ServiceHero';
// import ServiceOverview from '@/app/components/services/subServices/ServiceOverview';
// import ServiceProcess from '@/app/components/services/subServices/ServiceProcess';
// import ServiceBenefits from '@/app/components/services/subServices/ServiceBenefits';
// import FamilyDentalServices from '@/app/components/services/subServices/FamilyDentalServices';
// import EducationSection from '@/app/components/services/subServices/EducationSection';
// import PatientTypesSection from '@/app/components/services/subServices/PatientTypesSection';
// import SymptomsSection from '@/app/components/services/subServices/SymptomsSection';
// import WhyChooseSection from '@/app/components/services/subServices/WhyChooseSection';
// import LocalAreaSection from '@/app/components/services/subServices/LocalAreaSection';
// import RelatedServicesSection from '@/app/components/services/subServices/RelatedServicesSection';
// import ServiceFAQSection from '@/app/components/services/subServices/ServiceFAQ';
// import FinalCTASection from '@/app/components/services/subServices/ServiceCTA';
// import ServiceDecisionSection from '@/app/components/services/subServices/ServiceDecisionSection';
// import type { Metadata } from 'next';
// import SolutionsGridSection from '@/app/components/services/subServices/SolutionsGridSection';
// import ServiceFeatures from '@/app/components/services/subServices/ServiceFeatures';
// import SuitabilitySection from '@/app/components/services/subServices/SuitabilitySection';
// import MaintenanceGridSection from '@/app/components/services/subServices/MaintenanceGridSection';
// import Navbar from '@/app/components/home3/Navbar';
// import Footer from '@/app/components/home3/Footer';

import Footer from "@/app/components/home3/Footer";
import InsuranceSection from "@/app/components/home3/InsuranceSection";
import Navbar from "@/app/components/home3/Navbar";
import TeamSection from "@/app/components/home3/TeamSection";
import TestimonialsMarquee from "@/app/components/home3/Testimonials";
import LocalAreaSection from "@/app/components/services/subServices/LocalAreaSection";
import MaintenanceGridSection from "@/app/components/services/subServices/MaintenanceGridSection";
import RelatedServicesSection from "@/app/components/services/subServices/RelatedServicesSection";
import ServiceBenefits from "@/app/components/services/subServices/ServiceBenefits";
import FinalCTASection from "@/app/components/services/subServices/ServiceCTA";
import ServiceFAQSection from "@/app/components/services/subServices/ServiceFAQ";
import ServiceHero from "@/app/components/services/subServices/ServiceHero";
import ServiceOverview from "@/app/components/services/subServices/ServiceOverview";
import ServiceProcess from "@/app/components/services/subServices/ServiceProcess";
import ServiceTestimonials from "@/app/components/services/subServices/ServiceTestimonials";
import SymptomsSection from "@/app/components/services/subServices/SymptomsSection";
import WhyChooseSection from "@/app/components/services/subServices/WhyChooseSection";
import { getServiceBySlug, SERVICES } from "@/app/lib/data/serviceData";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildPageMetadata,
  buildServiceJsonLd,
} from "@/app/lib/seo";
import JsonLd from "@/app/components/common/JsonLd";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// export function generateStaticParams() {
//   return SERVICES.map((s) => ({ slug: s.slug }));
// }

// type Props = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// export async function generateMetadata({
//   params,
// }: Props): Promise<Metadata> {
//   const { slug } = await params;

//   const service = getServiceBySlug(slug);

//   if (!service) {
//     return {
//       title: 'Service Not Found | Promenade Dental',
//     };
//   }

//   return {
//     title: service.metaTitle,
//     description: service.metaDescription,
//     openGraph: {
//       title: service.metaTitle,
//       description: service.metaDescription,
//       type: 'website',
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: service.metaTitle,
//       description: service.metaDescription,
//     },
//   };
// }

// export default async function ServicePage({ params }: Props) {
//   const { slug } = await params;

//   const service = getServiceBySlug(slug);

//   if (!service) {
//     notFound();
//   }

//   return (
//    <main>
//   <Navbar />

//   <ServiceHero {...service.hero} /> 
//   <ServiceOverview {...service.overview}/> 
//   <ServiceBenefits
//   eyebrow={service.whyItMatters.eyebrow}
//   heading={service.whyItMatters.heading}
//   description={service.whyItMatters.description}
//   benefits={service.whyItMatters.items}
// />
// {
//   service.features && (
//     <ServiceFeatures data={service.features}/>
//   )
// }
// <FamilyDentalServices 
//   eyebrow={service.servicesGrid.eyebrow}
//   heading={service.servicesGrid.heading}
//   intro={service.servicesGrid.intro}
//   services={service.servicesGrid.services}
// />
// {service.educationSection && (
//   <EducationSection data={service.educationSection} />
// )}
// {service.suitability && (
//   <SuitabilitySection data={service.suitability}/>
//  )}

// {service.comparison &&(<ServiceDecisionSection data={service.comparison}/> )}
// {service.solutionsGrid && (<SolutionsGridSection data={service.solutionsGrid}/>)}

//   {service.patientTypesSection && (<PatientTypesSection data={service.patientTypesSection} />)}
//   {service.process && (
//   <ServiceProcess data={service.process} />
// )}
// {service.maintenance && (
//    <MaintenanceGridSection data={service.maintenance} />
//  )}

//    {service.symptomsSection && (
//         <SymptomsSection data={service.symptomsSection} />
//       )}

//       {service.benefits && (
//         <WhyChooseSection data={service.benefits} />
//       )}

//       {service.localArea && (
//         <LocalAreaSection data={service.localArea} />
//       )}
//       {service.relatedServices && (
//         <RelatedServicesSection data={service.relatedServices} />
//       )}
//       {service.faq && (
//         <ServiceFAQSection data={service.faq} />
//       )}
//       {service.cta && (
//         <FinalCTASection data={service.cta} />
//       )}
//   <Footer />
// </main>
//   );
// }


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
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return buildPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const path = `/services/${service.slug}`;

  return (
   <main>
  <JsonLd
    data={buildServiceJsonLd({
      name: service.name,
      description: service.metaDescription,
      path,
    })}
  />
  <JsonLd
    data={buildBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.name, path },
    ])}
  />
  {service.faq && <JsonLd data={buildFaqJsonLd(service.faq.items, path)} />}
  <Navbar />

  <ServiceHero {...service.hero} /> 
  <ServiceOverview {...service.overview}/> 
  {service.symptomsSection && (
       <SymptomsSection data={service.symptomsSection} />
       )}
       <ServiceBenefits
  eyebrow={service.whyItMatters.eyebrow}
  heading={service.whyItMatters.heading}
  description={service.whyItMatters.description}
  benefits={service.whyItMatters.items}
/>
       {service.process && (
  <ServiceProcess data={service.process} />
 )}
 {service.maintenance && (
    <MaintenanceGridSection data={service.maintenance} />
  )}
  {service.benefits && (
        <WhyChooseSection data={service.benefits} />
       )}
       
  <InsuranceSection />
  {service.localArea && (
         <LocalAreaSection data={service.localArea} />
       )}
  {service.relatedServices && (
         <RelatedServicesSection data={service.relatedServices} />
       )}
      <TestimonialsMarquee />
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
