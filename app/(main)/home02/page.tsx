import DentalProblemsSection from "@/app/components/Hero1/ProblemCards";
import ClosingCTA from "@/app/components/home/ClosingCTA";
import Doctors from "@/app/components/home/Doctors";
import Footer from "@/app/components/home/Footer";
import Gallery from "@/app/components/home/Gallery";
import Hero from "@/app/components/home/Hero";
import Intro from "@/app/components/home/Intro";
import Navbar from "@/app/components/home/Navbar";
import PatientJourney from "@/app/components/home/PatientJourney";
import ScrollStory from "@/app/components/home/ScrollStory";
import Services from "@/app/components/home/Services";
import Testimonials from "@/app/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <Doctors />
      <ScrollStory/>
      <Services/>
      <Gallery/>
      <PatientJourney/>
      <Testimonials/>
      <ClosingCTA/>
      <Footer />
    </main>
  )
}