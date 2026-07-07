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
    <Navbar textColor = 'text-ivory' hoverColor = 'hover:text-ivory/80' />
    <main className="bg-bg text-ivory">
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