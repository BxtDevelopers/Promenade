'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

const FAQS = [
  {
    q: 'Do you accept new patients?',
    a: 'Yes. Promenade Dental welcomes new patients looking for family, cosmetic, restorative, implant, and emergency dental care in Chandler, AZ.',
  },
  {
    q: 'Where is Promenade Dental located?',
    a: 'Promenade Dental is located at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248, in the Fulton Ranch area.',
  },
  {
    q: 'What dental services do you provide?',
    a: 'We provide family dentistry, preventive care, cosmetic dentistry, teeth whitening, veneers, bonding, restorative dentistry, crowns, bridges, fillings, root canals, dentures, dental implants, and emergency dental care.',
  },
  {
    q: 'Do you provide cosmetic dentistry?',
    a: 'Yes. Cosmetic dental services include teeth whitening, ZOOM! whitening, porcelain veneers, cosmetic bonding, and smile makeover planning.',
  },
  {
    q: 'Can I visit for a dental emergency?',
    a: 'If you have tooth pain, swelling, a broken tooth, a knocked-out tooth, or another urgent dental concern, call Promenade Dental at (480) 802-8188 so the team can guide you on the next step.',
  },
  {
    q: 'Is Promenade Dental a family dental office?',
    a: 'Yes. Promenade Dental provides dental care for families, adults, and children, with a focus on prevention, comfort, and long-term oral health.',
  },
  {
    q: 'Will I see the same dentist?',
    a: 'Yes. Promenade Dental is built around personalized care with Dr. Shriya, so patients can experience continuity and familiarity across visits.',
  },
] as const;

export default function FAQSection() {
  const [leadRef, leadIn] = useScrollReveal();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-section">
      <div className="px-site max-w-[1240px] mx-auto">

        {/* Lead */}
        <div
          ref={leadRef as React.RefObject<HTMLDivElement>}
          className={[
            'text-center max-w-[740px] mx-auto mb-12 md:mb-16',
            'transition-all duration-1000 ease-out',
            leadIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral font-sans mb-4">
  Frequently Asked Questions
</span>
          <h2 className="font-serif font-light text-3xl lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ivory">
  Questions about
  <em className="not-italic text-coral"> Promenade Dental</em>.
</h2>
        </div>

        {/* Accordion */}
        <div className="max-w-[760px] mx-auto divide-y divide-line border-y border-line">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-serif font-normal text-[18px] md:text-[20px] text-ivory group-hover:text-coral transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={[
                      'shrink-0 w-8 h-8 rounded-full border border-line flex items-center justify-center transition-all duration-300',
                      isOpen ? 'border-coral rotate-45' : '',
                    ].join(' ')}
                  >
                    <svg viewBox="0 0 12 12" className="w-3 h-3" aria-hidden="true">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" className="text-coral" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-400 ease-out"
                  style={{ maxHeight: isOpen ? '240px' : '0px' }}
                >
                  <p className="text-muted text-[14.5px] font-light leading-[1.7] pb-6 max-w-[60ch]">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}