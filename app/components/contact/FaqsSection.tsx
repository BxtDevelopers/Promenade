'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';
import { FAQS } from '@/app/lib/data/contactFaqs';


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
            'text-center max-w-[640px] mx-auto mb-12 md:mb-16',
            'transition-all duration-1000 ease-out',
            leadIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral font-sans mb-4">
            Good to Know
          </span>
          <h2 className="font-serif font-light text-3xl
            lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ink">
            Questions, <em className="not-italic text-coral">answered</em>.
          </h2>
        </div>

        {/* Accordion */}
        <div className="max-w-[760px] mx-auto divide-y divide-coral/80 border-y border-coral/80">
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
                  <p className="text-ink text-[14.5px] font-light leading-[1.7] pb-6 max-w-[60ch]">
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