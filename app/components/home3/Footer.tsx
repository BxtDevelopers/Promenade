import Image from 'next/image'
import Link from 'next/link'

const BASE = 'https://promenade-dental.vercel.app'

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(244,236,221,0.14)] pt-[54px] pb-[30px]">
      <div className="mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)]">
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-[40px] mb-[44px]">
          
          {/* Brand */}
          <div>
            <Link href="/home03" className="flex items-center no-underline">
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
          </div>

          {/* Treatments */}
          <div>
            <h5 className="footer-col-heading">Treatments</h5>
            <ul className="list-none space-y-[10px]">
              {[
                [`/services/family-dentistry`,      'Family & Preventive'],
                [`/services/cosmetic-dentistry`,    'Cosmetic Dentistry'],
                [`/services/restorative-dentistry`, 'Restorative Dentistry'],
                [`/services/dental-implants`,           'Dental Implants'],
                [`/services/emergency-dentistry`,   'Emergency Care'],
              ].map(([href, label]) => (
                <li key={label}>
                  <Link 
                    href={href} 
                    className="no-underline text-[14px] transition-colors duration-[250ms] hover:text-ivory text-[color:var(--muted)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice */}
          <div>
            <h5 className="footer-col-heading">Practice</h5>
            <ul className="list-none space-y-[10px]">
              {[
                [`/about-us02`,    'About Us'],
                [`/about-us02`,    'Meet Dr. Shriya'],
                [`/contact-us`,  'New Patients'],
                ['/insurance',     'Insurance'],
                [`/contact-us`,  'Contact'],
              ].map(([href, label]) => (
                <li key={label}>
                  <Link 
                    href={href} 
                    className="no-underline text-[14px] transition-colors duration-[250ms] hover:text-ivory text-[color:var(--muted)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h5 className="footer-col-heading">Visit Us</h5>
            <ul className="list-none space-y-[10px]">
              <li>
                <Link
                  href="https://maps.app.goo.gl/ufAu9qeLdfAFBAMr9"
                  className="no-underline text-[14px] leading-[1.55] transition-colors duration-[250ms] hover:text-ivory text-[color:var(--muted)]"
                >
                  4905 S. Alma School Rd, Suite 1<br />Chandler, AZ 85248
                </Link>
              </li>
              <li>
                <Link 
                  href="tel:+14808028188" 
                  className="no-underline text-[14px] transition-colors duration-[250ms] hover:text-ivory text-[color:var(--muted)]"
                >
                  (480) 802-8188
                </Link>
              </li>
              <li className="text-[13px] font-light text-[color:var(--muted-2)]">
                Mon–Fri: 8am–7pm · Sat: 9am–5pm
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(244,236,221,0.14)] pt-6 flex items-center justify-between gap-[18px] flex-wrap text-[12.5px] tracking-[0.04em] text-[color:var(--muted-2)]">
          <span>© 2026 Promenade Dental · Chandler, AZ</span>
          <span>Privacy · Terms · Accessibility</span>
        </div>
        
      </div>
    </footer>
  )
}