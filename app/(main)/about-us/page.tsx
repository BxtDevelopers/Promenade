
// import AboutHero from "@/app/components/about/AboutHero";
// import ClinicSpace from "@/app/components/about/ClinicSpace";
// import CommunitySection from "@/app/components/about/CommunitySection";
// import CoreValues from "@/app/components/about/CoreValues";
// import OurPromise from "@/app/components/about/OurPromise";
// import OurStory from "@/app/components/about/OurStory";
// import ContactSection from "@/app/components/Hero1/ContactSection";
// import Footer from "@/app/components/Hero1/Footer";
// import Navbar from "@/app/components/Hero1/Navbar";
// import Team from "@/app/components/Hero1/Team";

// export default function AboutPage() {
//   return (
//     <main>
//       <Navbar />
//       <AboutHero />
//       <OurStory />
//       <CoreValues />
//       <ClinicSpace />
//       <CommunitySection />
//       <OurPromise />
//       <Team />
//       <ContactSection />
//       <Footer />
//     </main>
//   );
// }

// import AboutCTA from '@/app/components/about/AboutCTA';
// import AboutHero from '@/app/components/about/AboutHero';
// import ByTheNumbers from '@/app/components/about/ByThenumbers';
// import MeetTheDoctors from '@/app/components/about/Meetthedoctors';
// import OurStory from '@/app/components/about/OurStory';
// import OurValues from '@/app/components/about/OurValues';
// import ClosingCTA from '@/app/components/home/ClosingCTA';
// import Footer from '@/app/components/home/Footer';
// import PracticeGallery from '@/app/components/home/Gallery';
// import Navbar from "@/app/components/home/Navbar";


// export default function AboutPage() {
//   return (
//     <>
//     <Navbar/>
//     <main className="bg-bg text-ivory">
//       <AboutHero />
//       <OurStory />
//       <OurValues />
//       <MeetTheDoctors />
//       <ByTheNumbers />
//       <PracticeGallery />
//       <ClosingCTA/>
//     </main>
//     <Footer/>
//     </>
//   );
// }

import AboutClosingCTA from '@/app/components/about2/AboutClosingCTA'
import AboutHero from '@/app/components/about2/AboutHero'
import MeetDoctors from '@/app/components/about2/MeetDoctors'
import OurStory from '@/app/components/about2/OurStory'
import VisitUs from '@/app/components/about2/VisitUs'
import WhyChooseUs from '@/app/components/about2/WhyChooseUs'
import Footer from '@/app/components/home3/Footer'
import Navbar from '@/app/components/home3/Navbar'
import type { Metadata } from 'next'
import TeamSection from '@/app/components/about2/TeamSection'


export const metadata: Metadata = {
  title: 'About Us | Promenade Dental — Chandler, AZ',
  description:
    'For 18 years, Chandler families have trusted Promenade Dental for calm, unhurried care. Meet Dr. Shriya Sarin and founding dentist Dr. James Wei.',
}

export default function AboutPage() {
  return (
    <main className="bg-bg text-ivory ">
      <Navbar  textColor = 'text-ivory' hoverColor = 'hover:text-ivory/80'  />
      <AboutHero />
      <OurStory />
      <MeetDoctors />
      <TeamSection/>
      <WhyChooseUs />
      <VisitUs />
      <AboutClosingCTA />
      <Footer/>
    </main>
  )
}