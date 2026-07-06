import AboutClosingCTA from '@/app/components/about2/AboutClosingCTA'
import AboutHero from '@/app/components/about2/AboutHero'
import MeetDoctors from '@/app/components/about2/MeetDoctors'
import OurStory from '@/app/components/about2/OurStory'
import VisitUs from '@/app/components/about2/VisitUs'
import WhyChooseUs from '@/app/components/about2/WhyChooseUs'
import Nav from '@/app/components/home/Navbar'
import Footer from '@/app/components/home3/Footer'
import Navbar from '@/app/components/home3/Navbar'
import type { Metadata } from 'next'


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
      <WhyChooseUs />
      <VisitUs />
      <AboutClosingCTA />
      <Footer/>
    </main>
  )
}