// import AboutSection from "./components/Hero1/AboutSection";
// import ContactSection from "./components/Hero1/ContactSection";
// import CTASection from "./components/Hero1/CtaSection";
// import FAQSection from "./components/Hero1/FaqSection";
// import Footer from "./components/Hero1/Footer";
// import HeroSection from "./components/Hero1/HeroSection";
// import Navbar from "./components/Hero1/Navbar";
// import DentalProblemsSection from "./components/Hero1/ProblemCards";
// import ServicesSection from "./components/Hero1/ServicesSection";
// import StatsBar from "./components/Hero1/Stats";
// import Team from "./components/Hero1/Team";
// import ReviewsSection from "./components/ReviewsSection";


// export default function Page() {
//   return (
//     <main className="antialiased bg-[#fdfaf5]">
//       <Navbar />
//       <HeroSection />
//       <StatsBar />
//       <AboutSection />
//       <ServicesSection />
//       <DentalProblemsSection />
//       <Team/>
//       <CTASection/>
//       <ReviewsSection />
//       <FAQSection />
//       <ContactSection />
//       <Footer />
//     </main>
//   );
// }

import HomePage from '@/app/components/home3/HomePage'
import { buildPageMetadata } from '@/app/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Promenade Dental | Gentle Family & Cosmetic Dentistry in Chandler, AZ',
  description: 'Gentle family and cosmetic dentistry in Fulton Ranch, Chandler AZ. See the same dentist every visit. Most PPO plans accepted, same-day emergencies, new patients welcome.',
  path: '/',
  keywords: [
    'dentist Chandler AZ',
    'family dentist Chandler',
    'cosmetic dentistry Chandler',
    'sleep apnea dentist Chandler',
    'emergency dentist Chandler',
    'Fulton Ranch dentist',
  ],
})

export default function Page() {
  return <HomePage />
}
