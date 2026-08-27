import Image from 'next/image'
import Link from 'next/link'
import MakeAPaymentButton from '@/app/components/common/MakeAPaymentButton'
import { FaInstagram } from 'react-icons/fa6'
import { INSTAGRAM_URL } from '@/app/lib/seo'


export default function Footer() {
  return (
    <footer className="border-t border-[rgba(244,236,221,0.14)] pt-[54px] pb-[30px]">
      <div className="mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)]">
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-[40px] mb-[44px]">
          
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center no-underline">
              <Image
                src="/assets/PDlogo_red3.webp"
                alt="Promenade Dental"
                width={220}
                height={60}
                priority
                className="w-48 md:w-72 h-auto mb-2"
              />
            </Link>
            <p className="text-[14px] font-light leading-[1.65] text-[color:var(--muted)]">
              Modern family dentistry designed around comfort, transparency, and long-term oral health — for every stage of life.
            </p>

            {/* The site audit scored Social 0/100 — not because the practice
                has no presence, but because nothing on the site linked to it,
                so neither visitors nor crawlers could find it. The same URL is
                in siteConfig.sameAs, which is what ties the profile to the
                business in structured data. Add further profiles in both
                places, and only once the URL is confirmed live. */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Promenade Dental on Instagram (opens in a new tab)"
              className="mt-5 inline-flex items-center gap-2 text-[14px] no-underline text-body transition-colors duration-[250ms] hover:text-accent"
            >
              <FaInstagram size={18} aria-hidden="true" />
              <span>@promenadedental_chandler</span>
            </a>
          </div>

          {/* Treatments */}
          <div>
            <h2 className="footer-col-heading">Treatments</h2>
            <ul className="list-none space-y-[10px]">
              {[
                [`/services/family-dentistry`,      'Family & Preventive'],
                [`/services/cosmetic-dentistry`,    'Cosmetic Dentistry'],
                [`/services/cosmetic-dentistry/invisalign`, 'Invisalign & Aligners'],
                [`/services/restorative-dentistry`, 'Restorative Dentistry'],
                [`/services/emergency-dentistry`,   'Emergency Care'],
                [`/services/sleep-apnea-snoring-solutions`,   'Sleep Apnea'],
              ].map(([href, label]) => (
                <li key={label}>
                  <Link 
                    href={href} 
                    className="no-underline text-[14px] transition-colors duration-[250ms] hover:text-accent text-[color:var(--muted)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice */}
          <div>
            <h2 className="footer-col-heading">Practice</h2>
            <ul className="list-none space-y-[10px]">
              {[
                [`/about-us`,    'About Us'],
                [`/contact-us`,  'New Patients'],
                ['/insurance',     'Insurance'],
                ['/offers',     'Offers'],
                ['/referrals',  'Referrals'],
                ['/areas', 'Areas We Serve'],
                ['/areas/fulton-ranch', 'Fulton Ranch'],
                ['/areas/sun-lakes', 'Sun Lakes'],
                ['/areas/ocotillo', 'Ocotillo'],
                [`/contact-us`,  'Contact'],
              ].map(([href, label]) => (
                <li key={label}>
                  <Link 
                    href={href} 
                    className="no-underline text-[14px] transition-colors duration-[250ms] hover:text-accent text-[color:var(--muted)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <MakeAPaymentButton
                  variant="pill"
                  className="no-underline text-[14px] text-accent transition-colors duration-[250ms] hover:text-accent/70"
                >
                  Make a Payment
                </MakeAPaymentButton>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h2 className="footer-col-heading">Visit Us</h2>
            <ul className="list-none space-y-[10px]">
              <li>
                <Link
                  href="https://maps.app.goo.gl/ufAu9qeLdfAFBAMr9"
                  className="no-underline text-[14px] leading-[1.55] transition-colors duration-[250ms] hover:text-accent text-[color:var(--muted)]"
                >
                  4905 S. Alma School Rd, Suite 1<br />Chandler, AZ 85248
                </Link>
              </li>
              <li>
                <Link 
                  href="tel:+14808028188" 
                  className="no-underline text-[14px] transition-colors duration-[250ms] hover:text-accent text-[color:var(--muted)]"
                >
                  (480) 802-8188
                </Link>
              </li>
              <li>
                <Link 
                  href="mailto:info@promenadedds.com" 
                  className="no-underline text-[14px] transition-colors duration-[250ms] hover:text-accent text-[color:var(--muted)]"
                >
                  info@promenadedds.com
                </Link>
              </li>
              <li className="text-[13px] font-light text-[color:var(--muted-2)] leading-[1.7]">
              <div><span className='font-semibold'>Mon</span> : 8am&ndash;1pm (by appt only)</div>
              <div><span className='font-semibold'>Tue&ndash;Thu</span> : 8am&ndash;7pm</div>
              <div><span className='font-semibold'>Fri&ndash;Sun</span> : Closed</div>
            </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(244,236,221,0.14)] pt-6 flex items-center justify-between gap-[18px] flex-wrap text-[12.5px] tracking-[0.04em] text-[color:var(--muted-2)]">
          <span>© 2026 Promenade Dental · Chandler, AZ</span>
          <div className="flex items-center gap-[6px]">
            <Link
              href="/privacy-policy"
              className="no-underline transition-colors duration-[250ms] hover:text-accent"
            >
              Privacy
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              href="/terms-and-conditions"
              className="no-underline transition-colors duration-[250ms] hover:text-accent"
            >
              Terms
            </Link>
            <span aria-hidden="true">·</span>
            {/* Worded exactly as CCPA compliance scanners look for. The section
                it lands on states plainly that we do not sell — see the note in
                legal/PrivacyPolicyContent.tsx. */}
            <Link
              href="/privacy-policy#do-not-sell"
              className="no-underline transition-colors duration-[250ms] hover:text-accent"
            >
              Do Not Sell My Personal Information
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
  )
}