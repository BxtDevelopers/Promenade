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
            <span className="font-serif font-normal text-[18px] tracking-[0.1em] uppercase text-ivory block mb-4">
              Promenade<span className="font-medium text-coral">·</span>Dental
            </span>
            <p className="text-[14px] font-light leading-[1.65] text-[color:var(--muted)]">
              Modern family dentistry designed around comfort, transparency, and long-term oral health — for every stage of life.
            </p>
          </div>

          {/* Treatments */}
          <div>
            <h5 className="footer-col-heading">Treatments</h5>
            <ul className="list-none space-y-[10px]">
              {[
                [`${BASE}/services/family-dentistry`,      'Family & Preventive'],
                [`${BASE}/services/cosmetic-dentistry`,    'Cosmetic Dentistry'],
                [`${BASE}/services/restorative-dentistry`, 'Restorative Dentistry'],
                [`${BASE}/services/sleep-apnea`,           'Sleep Apnea'],
                [`${BASE}/services/emergency-dentistry`,   'Emergency Care'],
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
                [`${BASE}/about-us`,    'About Us'],
                [`${BASE}/about-us`,    'Meet Dr. Shriya'],
                [`${BASE}/contact-us`,  'New Patients'],
                ['#insurance',          'Insurance'],
                [`${BASE}/contact-us`,  'Contact'],
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