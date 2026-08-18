import Footer from "@/app/components/home3/Footer";
import InsuranceSection from "@/app/components/home3/InsuranceSection";
import Navbar from "@/app/components/home3/Navbar";
import TestimonialsMarquee from "@/app/components/home3/Testimonials";
import JsonLd from "@/app/components/common/JsonLd";
import LocalAreaSection from "@/app/components/services/subServices/LocalAreaSection";
import RelatedServicesSection from "@/app/components/services/subServices/RelatedServicesSection";
import ServiceBenefits from "@/app/components/services/subServices/ServiceBenefits";
import FinalCTASection from "@/app/components/services/subServices/ServiceCTA";
import ServiceFAQSection from "@/app/components/services/subServices/ServiceFAQ";
import ServiceHero from "@/app/components/services/subServices/ServiceHero";
import ServiceOverview from "@/app/components/services/subServices/ServiceOverview";
import { AREAS, getAreaBySlug } from "@/app/lib/data/areaData";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildPageMetadata,
  siteConfig,
} from "@/app/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return AREAS.map((area) => ({ slug: area.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    return {
      title: "Area Not Found | Promenade Dental",
      robots: { index: false, follow: false },
    };
  }

  return buildPageMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/areas/${area.slug}`,
  });
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const path = `/areas/${area.slug}`;

  return (
    <main>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Areas We Serve", path: "/areas" },
          { name: area.name, path },
        ])}
      />
      <JsonLd data={buildFaqJsonLd(area.faq.items, path)} />
      <Navbar />

      <ServiceHero {...area.hero} />
      <ServiceOverview {...area.overview} />
      <ServiceBenefits
        eyebrow={area.whyHere.eyebrow}
        heading={area.whyHere.heading}
        description={area.whyHere.description}
        benefits={area.whyHere.items}
      />
      <InsuranceSection />
      <LocalAreaSection
        data={{
          eyebrow: "Visit Us",
          heading: `Serving ${area.name} from Fulton Ranch`,
          body: `Promenade Dental is located on S. Alma School Road in the Fulton Ranch area of Chandler, convenient to ${area.name} and the surrounding communities.`,
          address: {
            practice: siteConfig.name,
            street: siteConfig.address.streetAddress,
            cityStateZip: `${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode}`,
            phone: siteConfig.displayPhone,
          },
          cta: { label: "Get Directions", href: siteConfig.mapUrl },
        }}
      />
      <RelatedServicesSection data={area.services} />
      <TestimonialsMarquee />
      <ServiceFAQSection data={area.faq} />
      <FinalCTASection data={area.cta} />
      <Footer />
    </main>
  );
}
