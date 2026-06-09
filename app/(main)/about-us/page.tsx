
import AboutHero from "@/app/components/about/AboutHero";
import ClinicSpace from "@/app/components/about/ClinicSpace";
import CommunitySection from "@/app/components/about/CommunitySection";
import CoreValues from "@/app/components/about/CoreValues";
import OurPromise from "@/app/components/about/OurPromise";
import OurStory from "@/app/components/about/OurStory";
import ContactSection from "@/app/components/Hero1/ContactSection";
import Footer from "@/app/components/Hero1/Footer";
import Navbar from "@/app/components/Hero1/Navbar";
import Team from "@/app/components/Hero1/Team";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <OurStory />
      <CoreValues />
      <ClinicSpace />
      <CommunitySection />
      <OurPromise />
      <Team />
      <ContactSection />
      <Footer />
    </main>
  );
}