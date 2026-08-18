import Footer from "@/app/components/home3/Footer";
import Navbar from "@/app/components/home3/Navbar";
import TestimonialsMarquee from "@/app/components/home3/Testimonials";
import JsonLd from "@/app/components/common/JsonLd";
import LocalAreaSection from "@/app/components/services/subServices/LocalAreaSection";
import RelatedServicesSection from "@/app/components/services/subServices/RelatedServicesSection";
import FinalCTASection from "@/app/components/services/subServices/ServiceCTA";
import ServiceHero from "@/app/components/services/subServices/ServiceHero";
import { AREAS } from "@/app/lib/data/areaData";
import { buildBreadcrumbJsonLd, buildPageMetadata, siteConfig } from "@/app/lib/seo";

export const metadata = buildPageMetadata({
  title: "Areas We Serve | Promenade Dental — Chandler, AZ",
  description:
    "Promenade Dental serves Fulton Ranch, Sun Lakes, Ocotillo, and south Chandler from S. Alma School Rd, Chandler AZ 85248.",
  path: "/areas",
  keywords: [
    "dentist Fulton Ranch",
    "dentist Sun Lakes AZ",
    "dentist Ocotillo Chandler",
    "dentist south Chandler",
  ],
});

export default function AreasPage() {
  return (
    <main>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Areas We Serve", path: "/areas" },
        ])}
      />
      <Navbar />

      <ServiceHero
        eyebrow="Areas We Serve"
        title="Dentistry for south Chandler,"
        highlight="starting in Fulton Ranch."
        description="Promenade Dental is located on S. Alma School Road in Fulton Ranch. These are the communities closest to us — and the ones we know best."
        image="/assets/h-hero.jpg"
        trustPoints={[
          "Located in Fulton Ranch, Chandler AZ 85248",
          "Same dentist every visit",
          "Same-day emergency appointments",
        ]}
        primaryCTA={{ label: "Book an Appointment", href: "/contact-us" }}
        secondaryCTA={{ label: "Call (480) 802-8188", href: "tel:+14808028188" }}
      />

      <RelatedServicesSection
        data={{
          eyebrow: "Communities",
          heading: "The neighbourhoods we serve",
          intro:
            "Each of these communities is a short drive from the practice. Choose yours for local details, hours, and the care most requested there.",
          services: AREAS.map((area) => ({
            title: area.name,
            description: area.metaDescription,
            href: `/areas/${area.slug}`,
          })),
        }}
      />

      <LocalAreaSection
        data={{
          eyebrow: "Visit Us",
          heading: "Find us on S. Alma School Road",
          body: "Promenade Dental is located in the Fulton Ranch area of Chandler, convenient to Ocotillo, Sun Lakes, and south Chandler.",
          address: {
            practice: siteConfig.name,
            street: siteConfig.address.streetAddress,
            cityStateZip: `${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode}`,
            phone: siteConfig.displayPhone,
          },
          cta: { label: "Get Directions", href: siteConfig.mapUrl },
        }}
      />

      <TestimonialsMarquee />

      <FinalCTASection
        data={{
          title: "Whichever neighbourhood you are in,",
          highlight: "we are close by.",
          subtitle:
            "Family, cosmetic, restorative, and emergency dentistry from S. Alma School Rd in Chandler.",
          buttonText: "Book an Appointment",
          buttonHref: "/contact-us",
          image: "/assets/dental-lobby.jpg",
        }}
      />

      <Footer />
    </main>
  );
}
