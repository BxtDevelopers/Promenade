import DentalProblemsSection from "@/app/components/Hero1/ProblemCards";
import ClosingCTA from "@/app/components/home/ClosingCTA";
import ConnectedCareSection from "@/app/components/home/ConnectedCareSection";
import Doctors from "@/app/components/home/Doctors";
import FAQSection from "@/app/components/home/FaqSection";
import Footer from "@/app/components/home/Footer";
import Gallery from "@/app/components/home/Gallery";
import Hero from "@/app/components/home/Hero";
import Intro from "@/app/components/home/Intro";
import Navbar from "@/app/components/home/Navbar";
import NewPatientsSection from "@/app/components/home/NewPatientsSection";
import PatientJourney from "@/app/components/home/PatientJourney";
import PatientTypesSection from "@/app/components/home/PatientTypesSection";
import ScrollStory from "@/app/components/home/ScrollStory";
import ServiceArea from "@/app/components/home/ServiceArea";
import Services from "@/app/components/home/Services";
import Testimonials from "@/app/components/home/Testimonials";
import WhyChooseUs from "@/app/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      {/* <Doctors /> */}
      <Services/>
      <ScrollStory/>
      <PatientTypesSection/>
      <WhyChooseUs/>
      <NewPatientsSection/>
      <ConnectedCareSection/>
      {/* <ServiceArea/> */}
      <FAQSection/>
      <ClosingCTA/>
      {/* <Gallery/>
      <PatientJourney/>
      <Testimonials/> */}
      
      <Footer />
    </main>
  )
}