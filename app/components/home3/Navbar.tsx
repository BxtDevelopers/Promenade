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
import { SERVICES } from '@/app/lib/data/serviceData'
import { SUB_SERVICES } from '@/app/lib/data/subServiceData'
import Image from 'next/image'


export default function Navbar({ 
  textColor = 'text-white', 
  hoverColor = 'hover:text-white/80' 
}) {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen]       = useState(false)
  const [patientsOpen, setPatientsOpen] = useState(false)
  
  // Mobile drawer state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Mobile dropdown states
  const [mobileAboutOpen, setMobileAboutOpen]       = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobilePatientsOpen, setMobilePatientsOpen] = useState(false)

  // Dynamically group classes based on how many parent SERVICES you have
  const gridCols = SERVICES.length > 0 ? `grid-cols-${SERVICES.length}` : 'grid-cols-3';

  return (
    <>
      <nav className="absolute lg:max-w-[90%] mx-auto px-6 top-6 lg:top-11 left-0 right-0 z-20">
        <div className="flex items-center mx-auto h-[90px] lg:px-4 md:px-[clamp(20px,3vw,44px)]">
          {/* Logo */}
          <Link href="/" className="flex items-center no-underline">
          <Image
            src="/assets/PDlogo_red3.webp"
            alt="Promenade Dental"
            width={220}
            height={60}
            priority
            className="w-48 md:w-56 h-auto"
          />
        </Link>

          {/* Desktop Nav links — hidden below 1180px (xl) */}
          <ul className="hidden xl:flex gap-[30px] list-none text-[14px] tracking-[0.08em] uppercase font-medium ml-auto mr-[34px]">
              <li 
              className="relative group"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <Link href='/' className={`flex items-center gap-[6px] bg-transparent border-none cursor-pointer ${textColor} ${hoverColor} transition-colors duration-[250ms] font-medium text-[14px] tracking-[0.08em] uppercase font-sans py-2`}>
                Home
              </Link>
            </li>
            {/* About */}
            <li 
              className="relative group"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <Link href='/about-us' className={`flex items-center gap-[6px] bg-transparent border-none cursor-pointer ${textColor} ${hoverColor} transition-colors duration-[250ms] font-medium text-[14px] tracking-[0.08em] uppercase font-sans py-2`}>
                About
              </Link>
            </li>

            {/* Services (Dynamic Mega Menu) */}
            <li 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`flex items-center gap-[6px] bg-transparent border-none cursor-pointer ${textColor} ${hoverColor} transition-colors duration-[250ms] font-medium text-[14px] tracking-[0.08em] uppercase font-sans py-2`}>
                Services
                <ChevronDown 
                  className={`w-[14px] h-[14px] transition-transform duration-250 ${servicesOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              {servicesOpen && (
                <div className={`absolute top-[calc(100%+2px)] -left-120 grid ${gridCols} gap-x-6 rounded-2xl p-[20px_22px] z-50 min-w-[1024px] bg-[#173552] border border-[rgba(244,236,221,0.22)] shadow-[0_30px_64px_-24px_rgba(0,0,0,0.9),0_0_0_1px_rgba(0,0,0,0.25)]`}>
                  
                  {/* Map through main SERVICES categories and include the index */}
                  {SERVICES.map((category, index) => {
                    // Filter matching sub-services for this category
                    const categorySubServices = SUB_SERVICES.filter(
                      (sub) => sub.serviceSlug === category.slug
                    );
                    const isSleepApnea =
                    category.slug === 'sleep-apnea-snoring-solutions'

                    return (
                      <div key={category.slug} className="flex flex-col h-full">
                        {isSleepApnea ? (
                            <span className="font-serif text-[11.5px] tracking-[0.12em] uppercase text-coral px-[14px] pt-1 pb-[9px] mx-[6px] mb-[5px] border-b border-[rgba(244,236,221,0.13)] block">
                              More Treatments
                            </span>
                          ) : (
                            <Link
                              href={`/services/${category.slug}`}
                              className="font-serif text-[11.5px] tracking-[0.12em] uppercase text-coral hover:text-coral/70 px-[14px] pt-1 pb-[9px] mx-[6px] mb-[5px] border-b border-[rgba(244,236,221,0.13)]"
                            >
                              {category.name}
                            </Link>
                          )}
                        
                        <div className="flex-1">
                            {isSleepApnea ? (
                              <Link
                                href={`/services/${category.slug}`}
                                className="block px-[14px] py-[10px] rounded-[10px] text-[13px] text-white/80 normal-case font-[450] no-underline hover:bg-[rgba(232,154,114,0.18)] hover:text-white hover:shadow-[inset_3px_0_0_theme(colors.coral)] transition-all duration-[160ms]"
                              >
                                Sleep Apnea & Snoring
                              </Link>
                            ) : (
                              categorySubServices.map((sub) => (
                                <Link
                                  key={sub.slug}
                                  href={`/services/${category.slug}/${sub.slug}`}
                                  className="block px-[14px] py-[10px] rounded-[10px] text-[13px] text-white/80 normal-case font-[450] no-underline hover:bg-[rgba(232,154,114,0.18)] hover:text-white hover:shadow-[inset_3px_0_0_theme(colors.coral)] transition-all duration-[160ms]"
                                >
                                  {sub.name}
                                </Link>
                              ))
                            )}
                          </div>
                        
                        {/* Render "View all services" ONLY in the last column */}
                        {index === SERVICES.length - 1 && (
                          <Link
                            href={`/services`}
                            className="block px-[14px] py-[10px] rounded-[10px] text-[13px] text-coral normal-case font-[450] no-underline mt-2 border-t border-[rgba(244,236,221,0.14)] pt-3 hover:bg-[rgba(232,154,114,0.18)] transition-all duration-[160ms]"
                          >
                            View all services →
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </li>

            <li className="flex items-center">
              <Link href={`/warranty`} className={`${textColor} ${hoverColor} no-underline transition-colors duration-[250ms]`}>
                Warranty
              </Link>
            </li>

            <li className="flex items-center">
              <Link href="/offers" className={`${textColor} ${hoverColor} no-underline transition-colors duration-[250ms]`}>
                Offers
              </Link>
            </li>

            {/* New patients */}
            <li 
              className="relative group"
              onMouseEnter={() => setPatientsOpen(true)}
              onMouseLeave={() => setPatientsOpen(false)}
            >
              <button className={`flex items-center gap-[6px] bg-transparent border-none cursor-pointer ${textColor} ${hoverColor} transition-colors duration-[250ms] font-medium text-[14px] tracking-[0.08em] uppercase font-sans py-2`}>
                New patients
                <ChevronDown 
                  className={`w-[14px] h-[14px] transition-transform duration-250 ${patientsOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              {patientsOpen && (
                <div className="absolute top-[calc(100%+1px)] right-0 min-w-[236px] rounded-2xl p-[13px] z-50 bg-[#173552] border border-[rgba(244,236,221,0.22)] shadow-[0_30px_64px_-24px_rgba(0,0,0,0.9),0_0_0_1px_rgba(0,0,0,0.25)]">
                  {[
                    ['/#new-patients', 'Your First Visit'],
                    ['/insurance', 'Insurance '],
                    ['/payments', 'Payment Plans'],
                    ['/referrals','Refer a Friend'],
                    [`/contact-us`, 'New Patient Forms'],
                  ].map(([href, label]) => (
                    <Link key={label} href={href} className="block px-[14px] py-[10px] rounded-[10px] text-[13px] text-white/80 normal-case font-[450] no-underline hover:bg-[rgba(232,154,114,0.18)] hover:text-white hover:shadow-[inset_3px_0_0_theme(colors.coral)] transition-all duration-[160ms]">{label}</Link>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* Desktop CTA buttons */}
          <div className="hidden xl:flex items-center gap-[18px] ml-auto xl:ml-0">
            <Link
              href="tel:+14808028188"
              className={`${textColor} ${hoverColor} inline-block  no-underline text-[13px] tracking-[0.03em] whitespace-nowrap rounded-full px-[18px] py-[10px] transition-all duration-300 hover:border-ivory/70 border border-[rgba(244,236,221,0.32)]`}
            >
              (480) 802-8188
            </Link>
            <Link
              href={`/contact-us`}
              className="inline-block rounded-full text-bg bg-coral font-sans text-[13px] tracking-[0.06em] uppercase font-medium px-[22px] py-[11px] no-underline whitespace-nowrap transition-all duration-300 hover:bg-ivory hover:border-ivory hover:-translate-y-px border border-coral shadow-[0_14px_30px_-16px_rgba(232,154,114,0.7)]"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Toggle (Hidden on XL) */}
          <div className="xl:hidden ml-auto flex items-center gap-4">
            <button 
              className={`${textColor} ${hoverColor} p-1`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-[80px] left-0 right-0 max-h-[calc(100vh-90px)] overflow-y-auto bg-[#0B1C2C] border-b border-[rgba(244,236,221,0.14)] px-6 py-4 shadow-2xl z-40 flex flex-col gap-2">
            
            {/* Home */}
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-white uppercase tracking-wider text-[14px] py-3 border-b border-[rgba(244,236,221,0.05)]">
              Home
            </Link>

            {/* Mobile About Dropdown */}
            <div>
              <Link href='/about-us'
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="flex w-full items-center justify-between text-white uppercase tracking-wider text-[14px] py-3 border-b border-[rgba(244,236,221,0.05)] text-left"
              >
                About
              </Link>
            </div>

            {/* Mobile Services Dropdown */}
            <div>
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between text-white uppercase tracking-wider text-[14px] py-3 border-b border-[rgba(244,236,221,0.05)] text-left"
              >
                Services
                <ChevronDown className={`w-4 h-4 text-coral transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="flex flex-col gap-5 pl-4 pt-4 pb-2 border-b border-[rgba(244,236,221,0.05)]">
                  {SERVICES.map((category) => (
                    <div key={category.slug} className="flex flex-col gap-2">
                      <Link href={`/services/${category.slug}`} onClick={() => setMobileMenuOpen(false)} className="text-coral text-[12px] uppercase font-serif tracking-widest no-underline">
                        {category.name}
                      </Link>
                      <div className="flex flex-col gap-3 pl-3 mt-1">
                        {SUB_SERVICES.filter(sub => sub.serviceSlug === category.slug).map(sub => (
                          <Link key={sub.slug} href={`/services/${category.slug}/${sub.slug}`} onClick={() => setMobileMenuOpen(false)} className="text-white/80 text-[13px] no-underline hover:text-white">
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link href={`/services`} onClick={() => setMobileMenuOpen(false)} className="text-coral text-[13px] no-underline mt-2 pt-2 border-t border-[rgba(244,236,221,0.05)]">
                    View all services →
                  </Link>
                </div>
              )}
            </div>

            <Link href={`/warranty`} onClick={() => setMobileMenuOpen(false)} className="text-white uppercase tracking-wider text-[14px] py-3 border-b border-[rgba(244,236,221,0.05)]">Warranty</Link>
            <Link href="/offers" onClick={() => setMobileMenuOpen(false)} className="text-white uppercase tracking-wider text-[14px] py-3 border-b border-[rgba(244,236,221,0.05)]">Offers</Link>

            {/* Mobile New Patients Dropdown */}
            <div>
              <button 
                onClick={() => setMobilePatientsOpen(!mobilePatientsOpen)}
                className="flex w-full items-center justify-between text-white uppercase tracking-wider text-[14px] py-3 border-b border-[rgba(244,236,221,0.05)] text-left"
              >
                New Patients
                <ChevronDown className={`w-4 h-4 text-coral transition-transform ${mobilePatientsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobilePatientsOpen && (
                <div className="flex flex-col gap-3 pl-4 pt-3 pb-2">
                  {[
                    ['/#new-patients', 'Your First Visit'],
                    ['/insurance', 'Insurance '],
                    ['/payments', 'Payment Plans'],
                    ['/referrals','Refer a Friend'],
                    [`/contact-us`, 'New Patient Forms'],
                  ].map(([href, label]) => (
                    <Link key={label} href={href} onClick={() => setMobileMenuOpen(false)} className="text-white/80 text-[13px] no-underline hover:text-white">
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}
      </nav>

      {/* Sticky Mobile Action Bar */}
      <div className="fixed left-0 right-0 bottom-0 z-50 hidden max-[760px]:grid grid-cols-3 bg-[#0B1C2C]/95 backdrop-blur-[10px] border-t border-[rgba(244,236,221,0.14)] pb-safe">
        <Link 
          href="tel:+14808028188"
          className="flex flex-col items-center justify-center gap-[5px] p-[11px_6px] no-underline text-white text-[10.5px] tracking-[0.1em] uppercase font-medium"
        >
          <Phone className="w-[19px] h-[19px] stroke-[1.7]" />
          Call
        </Link>
        <Link 
          href={`/contact-us`}
          className="flex flex-col items-center justify-center gap-[5px] p-[11px_6px] no-underline text-bg bg-coral text-[10.5px] tracking-[0.1em] uppercase font-semibold"
        >
          <Calendar className="w-[19px] h-[19px] stroke-[1.7]" />
          Book
        </Link>
        <Link 
          href="https://maps.app.goo.gl/ufAu9qeLdfAFBAMr9"
          className="flex flex-col items-center justify-center gap-[5px] p-[11px_6px] no-underline text-white text-[10.5px] tracking-[0.1em] uppercase font-medium"
        >
          <MapPin className="w-[19px] h-[19px] stroke-[1.7]" />
          Directions
        </Link>
      </div>
    </>
  )
}