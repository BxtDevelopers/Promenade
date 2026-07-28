
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
//     <main className="bg-bg text-ink">
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
import TeamSection from '@/app/components/about2/TeamSection'
import { buildPageMetadata } from '@/app/lib/seo'


export const metadata = buildPageMetadata({
  title: 'About Us | Promenade Dental — Chandler, AZ',
  description:
    'For 23+ years, Chandler families have trusted Promenade Dental for calm, unhurried care. Meet Dr. Shriya Sarin and founding dentist Dr. James Wei.',
  path: '/about-us',
})

export default function AboutPage() {
  return (
    <main className="bg-bg text-ink ">
      <Navbar  textColor = 'text-ink' hoverColor = 'hover:text-ink/80'  />
      <AboutHero />
      <OurStory />
      {/* The intro video leads the doctor detail — it was previously buried
          below the (very long) MeetDoctors block, ~11,900px down the page. */}
      <TeamSection/>
      <MeetDoctors />
      <WhyChooseUs />
      <VisitUs />
      <AboutClosingCTA />
      <Footer/>
    </main>
  )
}
