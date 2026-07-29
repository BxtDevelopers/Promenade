'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

const FAQS = [
  {
    q: 'What dental services does Promenade Dental provide?',
    a: 'Promenade Dental provides family dentistry, preventive care, cosmetic dentistry, teeth whitening, ZOOM! whitening, veneers, dental bonding, crowns, bridges, fillings, root canals, dentures, dental implants, and emergency dental care.',
  },
  {
    q: 'Do you provide both family and cosmetic dentistry?',
    a: 'Yes. Promenade Dental provides both family dental care and cosmetic dentistry in Chandler, AZ. This allows patients to receive routine care, smile improvement, and restorative treatment in one office.',
  },
  {
    q: 'Do you offer teeth whitening?',
    a: 'Yes. Promenade Dental offers professional teeth whitening, including ZOOM! whitening when appropriate. Whitening is part of the cosmetic dentistry services offered at the practice.',
  },
  {
    q: 'What should I do if I have tooth pain?',
    a: 'If you have tooth pain, call Promenade Dental so the team can help guide you. Tooth pain may come from decay, infection, cracks, gum issues, or bite pressure, so an exam is needed to identify the cause.',
  },
  {
    q: 'Can you replace missing teeth?',
    a: 'Yes. Missing teeth may be replaced with dental implants, dental bridges, dentures, or implant-supported restorations depending on your oral health, bone support, bite, and goals.',
  },
  {
    q: 'Are new patients accepted?',
    a: 'Yes. Promenade Dental welcomes new patients looking for dental services in Chandler, Fulton Ranch, Ocotillo, Sun Lakes, and nearby communities.',
  },
  {
    q: 'Where is Promenade Dental located?',
    a: 'Promenade Dental is located at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248, in the Fulton Ranch area.',
  },
] as const;

export default function ServiceFAQSection() {
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
          <h2 className="font-serif font-light text-3xl lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ink">
  Questions about our
  <br />
  <em className="not-italic text-coral">dental services</em>.
</h2>
        </div>

        {/* Accordion */}
        <div className="max-w-[760px] mx-auto divide-y divide-coral border-y border-coral">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-serif font-normal text-[18px] md:text-[20px] text-ink group-hover:text-coral transition-colors">
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
                  <p className="text-muted text-[14.5px] font-light leading-[1.7] pb-6 lg:max-w-[80%]">
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