import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import CTASection from "../components/CtaSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ReviewsSection from "../components/ReviewsSection";
import ServicesSection from "../components/ServicesSection";
import StatsBar from "../components/StatsBar";
import Team from "../components/Team";


export default function HomePage() {
  return (
    <main className="antialiased">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <Team/>
      <CTASection/>
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}