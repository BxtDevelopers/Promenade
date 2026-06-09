// app/contact/page.tsx


import ContactFAQSection from "@/app/components/contact/ContactFAQSection";
import ContactFormSection from "@/app/components/contact/ContactFormSection";
import ContactHero from "@/app/components/contact/ContactHero";
import EmergencyBanner from "@/app/components/contact/EmergencyBanner";
import CTASection from "@/app/components/Hero1/CtaSection";
import FAQSection from "@/app/components/Hero1/FaqSection";
import Footer from "@/app/components/Hero1/Footer";
import Navbar from "@/app/components/Hero1/Navbar";


export default function ContactPage() {
  return (
    <main>
        <Navbar/>
      <ContactHero />
      <ContactFormSection />
        {/* <ContactFAQSection /> */}
      <FAQSection/>
      {/* <EmergencyBanner /> */}
      {/* <CTASection/> */}
      <Footer />
    </main>
  );
}