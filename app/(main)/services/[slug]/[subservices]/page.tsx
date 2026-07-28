// import { notFound } from 'next/navigation';
// import { SERVICES, getServiceBySlug } from '@/app/lib/serviceData';
// import ServiceHero from '@/app/components/services/subServices/ServiceHero';
// import ServiceOverview from '@/app/components/services/subServices/ServiceOverview';
// import ServiceProcess from '@/app/components/services/subServices/ServiceProcess';
// import ServiceBenefits from '@/app/components/services/subServices/ServiceBenefits';
// import ServiceGallery from '@/app/components/services/subServices/ServiceGallery';
// import ServiceFAQ from '@/app/components/services/subServices/ServiceFAQ';
// import ServiceCTA from '@/app/components/services/subServices/ServiceCTA';
// import PracticeGallery from '@/app/components/home/Gallery';
// import ServiceStats from '@/app/components/services/subServices/ServiceStats';
// import ServiceTestimonials from '@/app/components/services/subServices/ServiceTestimonials';
// import ServiceComparison from '@/app/components/services/subServices/ServiceComparison';
// import ServiceDoctor from '@/app/components/services/subServices/ServiceDoctor';
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
// import { SUB_SERVICES } from '@/app/lib/subServiceData';
// import ServiceFeatures from '@/app/components/services/subServices/ServiceFeatures';
// import SuitabilitySection from '@/app/components/services/subServices/SuitabilitySection';
// import MaintenanceGridSection from '@/app/components/services/subServices/MaintenanceGridSection';
// import WarningSection from '@/app/components/services/subServices/WarningSection';
// import EducationSection2 from '@/app/components/services/subServices/EducationSection2';
// import ImmediateGuidanceAlert from '@/app/components/services/subServices/ImmediateGuidance';
// import ComparisonSection from '@/app/components/services/subServices/ComparisonSection';
// import ReplacementSection from '@/app/components/services/subServices/ReplacementSection';
// import Navbar from '@/app/components/home3/Navbar';
// import Footer from '@/app/components/home3/Footer';

import Footer from "@/app/components/home3/Footer";
import InsuranceSection from "@/app/components/home3/InsuranceSection";
import Navbar from "@/app/components/home3/Navbar";
import TeamSection from "@/app/components/home3/TeamSection";
import TestimonialsMarquee from "@/app/components/home3/Testimonials";
import ImmediateGuidanceAlert from "@/app/components/services/subServices/ImmediateGuidance";
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
import { SUB_SERVICES } from "@/app/lib/data/subServiceData";
import { buildPageMetadata } from "@/app/lib/seo";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// export function generateStaticParams() {
//   return SUB_SERVICES.map((service) => ({
//     service: service.serviceSlug,
//     subservices: service.slug,
//   }));
// }

// type Props = {
//   params: Promise<{
//     slug: string;
//     subservices: string;
//   }>;
// };

// export function getSubService(
//   serviceSlug: string,
//   subServiceSlug: string
// ) {
//   return SUB_SERVICES.find(
//     (item) =>
//       item.serviceSlug === serviceSlug &&
//       item.slug === subServiceSlug
//   );
// }

// export async function generateMetadata({
//   params,
// }: Props): Promise<Metadata> {
//   const { slug, subservices } = await params;

//   const page = getSubService(
//     slug,
//     subservices
//   );

//   if (!page) {
//     return {
//       title: 'Service Not Found | Promenade Dental',
//     };
//   }

//   return {
//     title: page.metaTitle,
//     description: page.metaDescription,
//   };
// }

// export default async function ServicePage({
//   params,
// }: Props) {
//   const { slug, subservices } = await params;
//   const page = getSubService(
//     slug,
//     subservices
//   );
//   if (!page) {
//     notFound();
//   }

//   return (
//   <main>
//     <Navbar />
//     {page.hero && (<ServiceHero {...page.hero} />)}
//     {page.immediateGuidance && (<ImmediateGuidanceAlert data={page.immediateGuidance}/>)}
//     {page.overview && (<ServiceOverview {...page.overview}/> )}
//      {page.whyItMatters && (<ServiceBenefits
//   eyebrow={page.whyItMatters.eyebrow}
//   heading={page.whyItMatters.heading}
//   description={page.whyItMatters.description}
//   benefits={page.whyItMatters.items}
// />)}
// {
//   page.features && (
//     <ServiceFeatures data={page.features}/>
//   )
// }
// {
//   page.comparisonSection && (
//     <ComparisonSection data={page.comparisonSection}/>
//   )
// }
// { page?.warningSection && (
//   <WarningSection data={page?.warningSection} />)
// }
// {page?.servicesGrid && (<FamilyDentalServices 
// eyebrow={page?.servicesGrid.eyebrow}
// heading={page.servicesGrid.heading}
// intro={page?.servicesGrid.intro}
// services={page?.servicesGrid.services}
//  />)}
//  {page?.symptomsSection && (
//          <SymptomsSection data={page?.symptomsSection} />
//        )}
//  {page.educationSection && (
//    <EducationSection data={page.educationSection} />
//  )}
//  {page.educationSection2 && (
//   <EducationSection2 data={page.educationSection2}/>
//  )}
//  {page.suitability && (
//   <SuitabilitySection data={page.suitability}/>
//  )}
//  {page.comparison &&(<ServiceDecisionSection data={page.comparison}/> )}
//  {page.solutionsGrid && (<SolutionsGridSection data={page.solutionsGrid}/>)}
//  {page.replacementOptions  && (
//   <ReplacementSection data={page.replacementOptions}/>
//  )}
//  {page.process && (
//    <ServiceProcess data={page.process} />
//  )}
// {page.maintenance && (
//    <MaintenanceGridSection data={page.maintenance} />
//  )}
//  {page.benefits && (
//         <WhyChooseSection data={page.benefits} />
//        )}
//        {page.localArea && (
//          <LocalAreaSection data={page.localArea} />
//        )}
//        {page.relatedServices && (
//          <RelatedServicesSection data={page.relatedServices} />
//        )}
//        {page.faq && (
//          <ServiceFAQSection data={page.faq} />
//        )}
//        {page.cta && (
//          <FinalCTASection data={page.cta} />
//        )} 
//    <Footer />
//   </main>
// );


// //return (
// //    <main>
// //   <Navbar />

// //   {page.hero && (<ServiceHero {...page.hero} />)} 
// //   {page.overview && (<ServiceOverview {...page.overview}/> )}
// //   {page.whyItMatters && (<ServiceBenefits
// //   eyebrow={page.whyItMatters.eyebrow}
// //   heading={page.whyItMatters.heading}
// //   description={page.whyItMatters.description}
// //   benefits={page.whyItMatters.items}
// // />)}
// // {
// //   page.features && (
// //     <ServiceFeatures data={page.features}/>
// //   )
// // }
  
// //   {/* {page?.servicesGrid && (<FamilyDentalServices 
// //   eyebrow={page?.servicesGrid.eyebrow}
// //   heading={page.servicesGrid.heading}
// //   intro={page?.servicesGrid.intro}
// //   services={page?.servicesGrid.services}
// // />)}
// // {page.educationSection && (
// //   <EducationSection data={page.educationSection} />
// // )}

// // {page.comparison &&(<ServiceDecisionSection data={page.comparison}/> )}
// // {page.solutionsGrid && (<SolutionsGridSection data={page.solutionsGrid}/>)}

// //   {page.patientTypesSection && (<PatientTypesSection data={page.patientTypesSection} />)}
// //   {page.process && (
// //   <ServiceProcess data={page.process} />
// // )}

// //    {page.symptomsSection && (
// //         <SymptomsSection data={page.symptomsSection} />
// //       )}

// //       {page.benefits && (
// //         <WhyChooseSection data={page.benefits} />
// //       )}

// //       {page.localArea && (
// //         <LocalAreaSection data={page.localArea} />
// //       )}
// //       {page.relatedServices && (
// //         <RelatedServicesSection data={page.relatedServices} />
// //       )}
// //       {page.faq && (
// //         <ServiceFAQSection data={page.faq} />
// //       )}
// //       {page.cta && (
// //         <FinalCTASection data={page.cta} />
// //       )} */}
// //   <Footer />
// // </main>
// //   );
// }

export function generateStaticParams() {
  return SUB_SERVICES.map((service) => ({
    slug: service.serviceSlug,
    subservices: service.slug,
  }));
}

type Props = {
  params: Promise<{
    slug: string;
    subservices: string;
  }>;
};

export function getSubService(
  serviceSlug: string,
  subServiceSlug: string
) {
  return SUB_SERVICES.find(
    (item) =>
      item.serviceSlug === serviceSlug &&
      item.slug === subServiceSlug
  );
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug, subservices } = await params;

  const page = getSubService(
    slug,
    subservices
  );

  if (!page) {
    return {
      title: 'Service Not Found | Promenade Dental',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return buildPageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/services/${page.serviceSlug}/${page.slug}`,
  });
}

export default async function ServicePage({
  params,
}: Props) {
  const { slug, subservices } = await params;
  const page = getSubService(
    slug,
    subservices
  );
  if (!page) {
    notFound();
  }

  return (
   <main>
  <Navbar />

  <ServiceHero {...page.hero} /> 
  {page.immediateGuidance && (<ImmediateGuidanceAlert data={page.immediateGuidance}/>)}
  <ServiceOverview {...page.overview}/> 
  {page.symptomsSection && (
       <SymptomsSection data={page.symptomsSection} />
       )}
       <ServiceBenefits
  eyebrow={page.whyItMatters.eyebrow}
  heading={page.whyItMatters.heading}
  description={page.whyItMatters.description}
  benefits={page.whyItMatters.items}
/>
       {page.process && (
  <ServiceProcess data={page.process} />
 )}
 {page.maintenance && (
    <MaintenanceGridSection data={page.maintenance} />
  )}
  {page.benefits && (
        <WhyChooseSection data={page.benefits} />
       )}
       
  <InsuranceSection />
  {page.localArea && (
           <LocalAreaSection data={page.localArea} />
         )}
  {page.relatedServices && (
         <RelatedServicesSection data={page.relatedServices} />
       )}
       <TestimonialsMarquee />
       {page.faq && (
         <ServiceFAQSection data={page.faq} />
       )}
       {page.cta && (
         <FinalCTASection data={page.cta} />
       )}
       <Footer />
  </main>
  );
}
