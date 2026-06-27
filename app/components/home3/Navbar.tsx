'use client'

import Link from 'next/link'
import { useState } from 'react'
import { 
  ChevronDown, 
  Phone, 
  Calendar, 
  MapPin, 
  Menu, 
  X 
} from 'lucide-react'

const BASE = 'https://promenade-dental.vercel.app'

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen]       = useState(false)
  const [patientsOpen, setPatientsOpen] = useState(false)
  
  // Mobile drawer state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav
        className="absolute top-11 left-0 right-0 z-20"
      >
        <div
          className="flex items-center mx-auto h-[90px] max-w-[1340px] px-[clamp(20px,3vw,44px)]"
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-serif font-normal text-[20px] tracking-[0.1em] uppercase text-ivory whitespace-nowrap no-underline max-[520px]:text-[18px]"
          >
            Promenade<span className="font-medium text-coral">·</span>Dental
          </Link>

          {/* Desktop Nav links — hidden below 1180px (xl) */}
          <ul className="hidden xl:flex gap-[30px] list-none text-[14px] tracking-[0.08em] uppercase font-medium ml-auto mr-[34px]">

            {/* About */}
            <li 
              className="relative group"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="flex items-center gap-[6px] bg-transparent border-none cursor-pointer text-ivory/80 hover:text-ivory transition-colors duration-[250ms] font-medium text-[14px] tracking-[0.08em] uppercase font-sans py-2">
                About
                <ChevronDown 
                  className={`w-[14px] h-[14px] text-coral transition-transform duration-250 ${aboutOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              {aboutOpen && (
                <div className="absolute top-[calc(100%+1px)] left-0 min-w-[236px] rounded-2xl p-[13px] z-50 bg-[#173552] border border-[rgba(244,236,221,0.22)] shadow-[0_30px_64px_-24px_rgba(0,0,0,0.9),0_0_0_1px_rgba(0,0,0,0.25)]">
                  {[
                    [`${BASE}/about-us`, 'Our Story'],
                    [`${BASE}/about-us`, 'Meet Dr. Shriya'],
                    [`${BASE}/about-us`, 'Our Office'],
                    ['#reviews', 'Patient Reviews'],
                  ].map(([href, label]) => (
                    <Link
                      key={label}
                      href={href}
                      className="block px-[14px] py-[10px] rounded-[10px] text-[13px] tracking-[0.01em] text-ivory/92 normal-case font-[450] no-underline transition-all duration-[160ms] hover:bg-[rgba(232,154,114,0.18)] hover:text-ivory hover:shadow-[inset_3px_0_0_theme(colors.coral)]"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {/* Services (mega) */}
            <li 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-[6px] bg-transparent border-none cursor-pointer text-ivory/80 hover:text-ivory transition-colors duration-[250ms] font-medium text-[14px] tracking-[0.08em] uppercase font-sans py-2">
                Services
                <ChevronDown 
                  className={`w-[14px] h-[14px] text-coral transition-transform duration-250 ${servicesOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              {servicesOpen && (
                <div className="absolute top-[calc(100%+1px)] right-0 grid grid-cols-3 gap-x-6 rounded-2xl p-[20px_22px] z-50 min-w-[600px] bg-[#173552] border border-[rgba(244,236,221,0.22)] shadow-[0_30px_64px_-24px_rgba(0,0,0,0.9),0_0_0_1px_rgba(0,0,0,0.25)]">
                  {/* Cosmetic */}
                  <div>
                    <div className="font-serif text-[11.5px] tracking-[0.12em] uppercase text-coral px-[14px] pt-1 pb-[9px] mx-[6px] mb-[5px] border-b border-[rgba(244,236,221,0.13)]">
                      Cosmetic
                    </div>
                    {[
                      [`${BASE}/services/cosmetic-dentistry`, 'Cosmetic Dentistry'],
                      [`${BASE}/services/veneers`, 'Porcelain Veneers'],
                      [`${BASE}/services/teeth-whitening`, 'Teeth Whitening'],
                      [`${BASE}/services/cosmetic-bonding`, 'Cosmetic Bonding'],
                      [`${BASE}/services/smile-makeover`, 'Smile Makeover'],
                    ].map(([href, label]) => (
                      <Link key={label} href={href} className="block px-[14px] py-[10px] rounded-[10px] text-[13px] text-ivory/92 normal-case font-[450] no-underline hover:bg-[rgba(232,154,114,0.18)] hover:text-ivory hover:shadow-[inset_3px_0_0_theme(colors.coral)] transition-all duration-[160ms]">{label}</Link>
                    ))}
                  </div>
                  {/* Family */}
                  <div>
                    <div className="font-serif text-[11.5px] tracking-[0.12em] uppercase text-coral px-[14px] pt-1 pb-[9px] mx-[6px] mb-[5px] border-b border-[rgba(244,236,221,0.13)]">
                      Family &amp; Restorative
                    </div>
                    {[
                      [`${BASE}/services/family-dentistry`, 'Family Dentistry'],
                      [`${BASE}/services/exams-cleanings`, 'Exams & Cleanings'],
                      [`${BASE}/services/restorative-dentistry`, 'Restorative Dentistry'],
                      [`${BASE}/services/fillings`, 'Tooth-Colored Fillings'],
                      [`${BASE}/services/crowns-bridges`, 'Crowns & Bridges'],
                      [`${BASE}/services/root-canals`, 'Root Canals'],
                    ].map(([href, label]) => (
                      <Link key={label} href={href} className="block px-[14px] py-[10px] rounded-[10px] text-[13px] text-ivory/92 normal-case font-[450] no-underline hover:bg-[rgba(232,154,114,0.18)] hover:text-ivory hover:shadow-[inset_3px_0_0_theme(colors.coral)] transition-all duration-[160ms]">{label}</Link>
                    ))}
                  </div>
                  {/* Specialty */}
                  <div>
                    <div className="font-serif text-[11.5px] tracking-[0.12em] uppercase text-coral px-[14px] pt-1 pb-[9px] mx-[6px] mb-[5px] border-b border-[rgba(244,236,221,0.13)]">
                      Specialty
                    </div>
                    {[
                      [`${BASE}/services/sleep-apnea`, 'Sleep Apnea'],
                      [`${BASE}/services/emergency-dentistry`, 'Emergency Care'],
                      [`${BASE}/services/childrens-dentistry`, "Children's Dentistry"],
                      [`${BASE}/services/gum-care`, 'Gum Care'],
                    ].map(([href, label]) => (
                      <Link key={label} href={href} className="block px-[14px] py-[10px] rounded-[10px] text-[13px] text-ivory/92 normal-case font-[450] no-underline hover:bg-[rgba(232,154,114,0.18)] hover:text-ivory hover:shadow-[inset_3px_0_0_theme(colors.coral)] transition-all duration-[160ms]">{label}</Link>
                    ))}
                    <Link
                      href={`${BASE}/services`}
                      className="block px-[14px] py-[10px] rounded-[10px] text-[13px] text-coral normal-case font-[450] no-underline mt-2 border-t border-[rgba(244,236,221,0.14)] pt-3 hover:bg-[rgba(232,154,114,0.18)] transition-all duration-[160ms]"
                    >
                      View all services →
                    </Link>
                  </div>
                </div>
              )}
            </li>

            <li className="flex items-center">
              <Link href={`${BASE}/warranty`} className="text-ivory/80 hover:text-ivory no-underline transition-colors duration-[250ms]">
                Warranty
              </Link>
            </li>

            <li className="flex items-center">
              <Link href="#reviews" className="text-ivory/80 hover:text-ivory no-underline transition-colors duration-[250ms]">
                Reviews
              </Link>
            </li>

            {/* New patients */}
            <li 
              className="relative group"
              onMouseEnter={() => setPatientsOpen(true)}
              onMouseLeave={() => setPatientsOpen(false)}
            >
              <button className="flex items-center gap-[6px] bg-transparent border-none cursor-pointer text-ivory/80 hover:text-ivory transition-colors duration-[250ms] font-medium text-[14px] tracking-[0.08em] uppercase font-sans py-2">
                New patients
                <ChevronDown 
                  className={`w-[14px] h-[14px] text-coral transition-transform duration-250 ${patientsOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              {patientsOpen && (
                <div className="absolute top-[calc(100%+1px)] right-0 min-w-[236px] rounded-2xl p-[13px] z-50 bg-[#173552] border border-[rgba(244,236,221,0.22)] shadow-[0_30px_64px_-24px_rgba(0,0,0,0.9),0_0_0_1px_rgba(0,0,0,0.25)]">
                  {[
                    ['#new-patients', 'Your First Visit'],
                    ['#insurance', 'Insurance & Financing'],
                    [`${BASE}/contact-us`, 'New Patient Forms'],
                    [`${BASE}/contact-us`, 'Book Online'],
                  ].map(([href, label]) => (
                    <Link key={label} href={href} className="block px-[14px] py-[10px] rounded-[10px] text-[13px] text-ivory/92 normal-case font-[450] no-underline hover:bg-[rgba(232,154,114,0.18)] hover:text-ivory hover:shadow-[inset_3px_0_0_theme(colors.coral)] transition-all duration-[160ms]">{label}</Link>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* Desktop CTA buttons */}
          <div className="hidden xl:flex items-center gap-[18px] ml-auto xl:ml-0">
            <Link
              href="tel:+14808028188"
              className="inline-block text-ivory no-underline text-[13px] tracking-[0.03em] whitespace-nowrap rounded-full px-[18px] py-[10px] transition-all duration-300 hover:border-ivory/70 border border-[rgba(244,236,221,0.32)]"
            >
              (480) 802-8188
            </Link>
            <Link
              href={`${BASE}/contact-us`}
              className="inline-block rounded-full text-bg bg-coral font-sans text-[13px] tracking-[0.06em] uppercase font-medium px-[22px] py-[11px] no-underline whitespace-nowrap transition-all duration-300 hover:bg-ivory hover:border-ivory hover:-translate-y-px border border-coral shadow-[0_14px_30px_-16px_rgba(232,154,114,0.7)]"
            >
              Book a Visit
            </Link>
          </div>

          {/* Mobile Menu Toggle (Hidden on XL) */}
          <div className="xl:hidden ml-auto flex items-center gap-4">
            <Link
              href={`${BASE}/contact-us`}
              className="inline-block rounded-full text-bg bg-coral font-sans text-[12px] tracking-[0.06em] uppercase font-medium px-4 py-[9px] no-underline whitespace-nowrap border border-coral"
            >
              Book
            </Link>
            <button 
              className="text-ivory p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer (Basic implementation) */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-[90px] left-0 right-0 bg-[#0B1C2C] border-b border-[rgba(244,236,221,0.14)] px-6 py-4 shadow-2xl z-40 flex flex-col gap-4">
            <Link href={`${BASE}/about-us`} className="text-ivory uppercase tracking-wider text-[14px] py-2 border-b border-[rgba(244,236,221,0.05)]">About</Link>
            <Link href={`${BASE}/services`} className="text-ivory uppercase tracking-wider text-[14px] py-2 border-b border-[rgba(244,236,221,0.05)]">Services</Link>
            <Link href={`${BASE}/warranty`} className="text-ivory uppercase tracking-wider text-[14px] py-2 border-b border-[rgba(244,236,221,0.05)]">Warranty</Link>
            <Link href="#reviews" className="text-ivory uppercase tracking-wider text-[14px] py-2 border-b border-[rgba(244,236,221,0.05)]">Reviews</Link>
            <Link href="#new-patients" className="text-ivory uppercase tracking-wider text-[14px] py-2">New Patients</Link>
          </div>
        )}
      </nav>

      {/* Sticky Mobile Action Bar (Visible only max-760px) */}
      <div className="fixed left-0 right-0 bottom-0 z-50 hidden max-[760px]:grid grid-cols-3 bg-[#0B1C2C]/95 backdrop-blur-[10px] border-t border-[rgba(244,236,221,0.14)] pb-safe">
        <Link 
          href="tel:+14808028188"
          className="flex flex-col items-center justify-center gap-[5px] p-[11px_6px] no-underline text-ivory text-[10.5px] tracking-[0.1em] uppercase font-medium"
        >
          <Phone className="w-[19px] h-[19px] stroke-[1.7]" />
          Call
        </Link>
        <Link 
          href={`${BASE}/contact-us`}
          className="flex flex-col items-center justify-center gap-[5px] p-[11px_6px] no-underline text-bg bg-coral text-[10.5px] tracking-[0.1em] uppercase font-semibold"
        >
          <Calendar className="w-[19px] h-[19px] stroke-[1.7]" />
          Book
        </Link>
        <Link 
          href="https://maps.app.goo.gl/ufAu9qeLdfAFBAMr9"
          className="flex flex-col items-center justify-center gap-[5px] p-[11px_6px] no-underline text-ivory text-[10.5px] tracking-[0.1em] uppercase font-medium"
        >
          <MapPin className="w-[19px] h-[19px] stroke-[1.7]" />
          Directions
        </Link>
      </div>
      
      {/* Spacer to prevent content from hiding behind the sticky bar on mobile */}
      <div className="hidden max-[760px]:block h-[64px] w-full" />
    </>
  )
}