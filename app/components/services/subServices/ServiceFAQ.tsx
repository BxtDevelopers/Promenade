// components/services/ServiceFAQ.tsx
'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

export default function ServiceFAQ({
  eyebrow,
  heading,
  faqs,
}: {
  eyebrow: string;
  heading: string;
  faqs: { q: string; a: string }[];
}) {
  const [headRef, headIn] = useScrollReveal();

  return (
    <section className="pb-24 bg-bg-2">
      <div className="px-site max-w-[900px] mx-auto">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={[
            'mb-12 text-center transition-all duration-1000 ease-out',
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral mb-4">
            {eyebrow}
          </span>
          <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-ivory">
            {heading}
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <FAQItem key={i} faq={f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-line rounded-[18px] overflow-hidden bg-ivory/[0.02] transition-colors duration-300 hover:border-coral/30">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between gap-4 text-left px-6 py-5">
        <span className="font-serif font-normal text-[17px] md:text-[18px] text-ivory">{faq.q}</span>
        <span className={[
          'flex-shrink-0 w-8 h-8 rounded-full border border-coral/40 flex items-center justify-center text-coral transition-transform duration-400',
          open ? 'rotate-45' : '',
        ].join(' ')}>
          <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M6 1v10M1 6h10" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,0.84,0.34,1)]"
        style={{ maxHeight: open ? '240px' : '0px' }}
      >
        <p className="px-6 pb-5 text-muted text-[14.5px] font-light leading-[1.75]">{faq.a}</p>
      </div>
    </div>
  );
}