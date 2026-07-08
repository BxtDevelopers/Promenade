'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import AnnouncementBar from './AnnouncementBar'
import Navbar from './Navbar'
import Hero from './Hero'
import QuickActions from './Quickactions'
import StatsBand from '../home/StatsBand'
import WhyUs from './WhyUs'
import DoctorsSection from './Doctors'
import WarrantySection from './Warrantysection'
import ProblemsSection from './ProblemSection'
import ServicesGrid from './Services'
import NewPatientFlow from './NewPatientFlow'
import InsuranceSection from './InsuranceSection'
import ClosingCTA from './ClosingCTA'
import Footer from './Footer'
import MobileBar from './MobileBar'
import OfferModal from './OfferModal'
import TestimonialsMarquee from './Testimonials'
import FirstVisitTimeline from './FirstVisitTimeline'


export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="relative">
      {/* Scroll-reveal observer (client-side only) */}
      <ScrollReveal />

      {/* Top announcement bar */}
      <AnnouncementBar onOpenModal={() => setModalOpen(true)} />

      {/* Navigation */}
      <Navbar  textColor = 'text-ivory' hoverColor = 'hover:text-ivory/80'  />

      {/* ── Sections in page order ── */}
      <Hero />
      <QuickActions />
      <StatsBand />
      <TestimonialsMarquee />
      <WhyUs />
      <DoctorsSection />
      <WarrantySection />
      <ProblemsSection />
      <ServicesGrid />
      <NewPatientFlow />
      <FirstVisitTimeline />
      <InsuranceSection />
      <ClosingCTA />
      <Footer />

      {/* Mobile sticky bar */}
      <MobileBar />

      {/* Welcome offer modal */}
      <OfferModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}