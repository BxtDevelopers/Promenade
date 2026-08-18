// // app/contact/page.tsx

import ContactDetails from "@/app/components/contact/ContactDetails";
import ContactForm from "@/app/components/contact/ContactForm";
import ContactHero from "@/app/components/contact/ContactHero";
import FAQSection from "@/app/components/contact/FaqsSection";
import InsuranceInfo from "@/app/components/contact/InsuranceInfo";
import LocationMap from "@/app/components/contact/LocationMap";
import ClosingCTA from "@/app/components/home/ClosingCTA";
import Footer from "@/app/components/home3/Footer";
import Navbar from "@/app/components/home3/Navbar";
import { buildFaqJsonLd, buildPageMetadata } from "@/app/lib/seo";
import JsonLd from "@/app/components/common/JsonLd";
import { FAQS } from "@/app/lib/data/contactFaqs";

export const metadata = buildPageMetadata({
  title: 'Contact Promenade Dental | Chandler, AZ Dentist',
  description: 'Contact Promenade Dental in Fulton Ranch, Chandler to request an appointment, ask about insurance, or get help with an urgent dental concern.',
  path: '/contact-us',
});

// import ContactFAQSection from "@/app/components/contact/ContactFAQSection";
// import ContactFormSection from "@/app/components/contact/ContactFormSection";
// import ContactHero from "@/app/components/contact/ContactHero";
// import EmergencyBanner from "@/app/components/contact/EmergencyBanner";
// import CTASection from "@/app/components/Hero1/CtaSection";
// import FAQSection from "@/app/components/Hero1/FaqSection";
// import Footer from "@/app/components/Hero1/Footer";
// import Navbar from "@/app/components/Hero1/Navbar";


// export default function ContactPage() {
//   return (
//     <main>
//         <Navbar/>
//       <ContactHero />
//       <ContactFormSection />
//         {/* <ContactFAQSection /> */}
//       <FAQSection/>
//       {/* <EmergencyBanner /> */}
//       {/* <CTASection/> */}
//       <Footer />
//     </main>
//   );
// }



export default function ContactPage() {
  return (
    <>
    <JsonLd data={buildFaqJsonLd(FAQS, "/contact-us")} />
    <Navbar textColor = 'text-ink' hoverColor = 'hover:text-ink/80' />
    <main className="bg-bg text-ink">
      <ContactHero />
      <ContactDetails />
      <ContactForm />
      <LocationMap />
      <InsuranceInfo />
      <FAQSection />
      <ClosingCTA/>
    </main>
    <Footer/>
    </>
  );
}
