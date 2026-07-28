import InsuranceInfo from "@/app/components/contact/InsuranceInfo";
import DentalProblemsSection from "@/app/components/Hero1/ProblemCards";
import BeforeAfterSection from "@/app/components/home/BeforeAfterSection";
import ClosingCTA from "@/app/components/home/ClosingCTA";
import ConnectedCareSection from "@/app/components/home/ConnectedCareSection";
import Doctors from "@/app/components/home/Doctors";
import FAQSection from "@/app/components/home/FaqSection";
import Footer from "@/app/components/home/Footer";
import Gallery from "@/app/components/home/Gallery";
import Hero from "@/app/components/home/Hero";
import InsuranceSection from "@/app/components/home/InsuranceSection";
import Intro from "@/app/components/home/Intro";
import Navbar from "@/app/components/home/Navbar";
import NewPatientFlow from "@/app/components/home3/NewPatientFlow";
import NewPatientsSection from "@/app/components/home/NewPatientsSection";
import PatientJourney from "@/app/components/home/PatientJourney";
import PatientTypesSection from "@/app/components/home/PatientTypesSection";
import ProblemsSection from "@/app/components/home/ProblemsSection";
import ScrollStory from "@/app/components/home/ScrollStory";
import ServiceArea from "@/app/components/home/ServiceArea";
import Services from "@/app/components/home/Services";
import StickyMobileFooter from "@/app/components/home/StickyMobileFooter";
import Testimonials from "@/app/components/home/Testimonials";
import WhyChooseUs from "@/app/components/home/WhyChooseUs";
import StatsBand from "@/app/components/home3/StatsBand";
import ScrollReveal from "@/app/components/home3/ScrollReveal";
import QuickActions from "@/app/components/home3/Quickactions";

export default function Home() {
  return (
    <main>
      <ScrollReveal/>
      <Navbar />
      <Hero />
      <QuickActions/>
      <StatsBand/>
      <Intro />
      <Services/>
      <ScrollStory/>
      <ProblemsSection/>
      {/* <PatientTypesSection/> */}
      <WhyChooseUs/>
      <NewPatientFlow/>
      <BeforeAfterSection/>
      <NewPatientsSection/>
      <InsuranceSection/>
      {/* <ConnectedCareSection/> */}
      {/* <ServiceArea/> */}
      <FAQSection/>
      <ClosingCTA/>
      {/* <Gallery/>
      <PatientJourney/>
      <Testimonials/> */}
      
      <Footer />
      <StickyMobileFooter/>
    </main>
  )
}