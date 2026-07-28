'use client';

import { useScrollReveal } from '@/app/lib/useScrollReveal';

const CARRIERS = [
  'Delta Dental',
  'BlueCross BlueShield',
  'MetLife',
  'Cigna',
  'Aetna',
  'United Healthcare',
];

export default function InsuranceSection() {
  const [ref, inView] = useScrollReveal();

  return (
    <section className="relative py-24 border-y border-white/10 overflow-hidden isolate bg-bg">
      {/* Eye-Catching Ambient Background Glows */}
      <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-coral/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="lg:px-site max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Copy */}
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={[
              'transition-all duration-1000 ease-out',
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
          >
            {/* Lead-in Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block text-[12px] font-bold tracking-[0.2em] uppercase text-coral font-sans">
                Insurance & Payment
              </span>
            </div>

            {/* Gradient Headline */}
            <h2 className="font-serif font-light text-4xl lg:text-[clamp(40px,4.5vw,64px)] leading-[1.1] tracking-[-0.02em] text-ink mb-6">
              We work with <br />
              <strong className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-coral to-amber-300">
                most PPO plans.
              </strong>
            </h2>

            <p className="text-muted text-[16px] md:text-[17px] font-light leading-[1.75] mb-4 max-w-[48ch]">
              Dental insurance shouldn't be a headache. We accept most major PPO plans and handle the paperwork for you. Our team will verify your benefits and break down costs <em className="text-ink not-italic font-medium">before</em> treatment begins—no surprises.
            </p>

            <p className="text-muted text-[16px] md:text-[17px] font-light leading-[1.75] mb-10 max-w-[48ch]">
              No insurance? No problem. We accept all major credit cards, HSA/FSA accounts, and offer flexible financing for larger treatments.
            </p>

            {/* Upgraded Action Buttons */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="/insurance"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-coral/50 rounded-full text-[14px] text-ink font-medium transition-all duration-300 shadow-lg"
              >
                View insurance details
                <svg className="w-4 h-4 text-coral group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="tel:+14808028188"
                className="inline-flex items-center gap-2 text-[14px] text-ink/60 font-light hover:text-coral transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call with questions
              </a>
            </div>
          </div>

          {/* Right — Interactive Cards & Chips */}
          <div 
            className={[
              "flex flex-col gap-8 transition-all duration-1000 delay-300 ease-out",
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
            ].join(' ')}
          >
            {/* Glassmorphic Carriers Container */}
            <div className="p-8 rounded-[24px] bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-2xl">
              <p className="text-[12px] font-bold tracking-[0.15em] uppercase text-ink mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Commonly Accepted Carriers
              </p>
              
              <div className="flex flex-wrap gap-3">
                {CARRIERS.map((name) => (
                  <span
                    key={name}
                    className="px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-ink/80 text-[14px] tracking-wide hover:bg-coral hover:text-white hover:border-coral transition-all duration-300 cursor-default shadow-sm"
                  >
                    {name}
                  </span>
                ))}
                <span className="px-4 py-2.5 rounded-full border border-dashed border-white/20 text-muted text-[14px] tracking-wide">
                  + Many More
                </span>
              </div>
              
              <p className="text-muted text-[13.5px] font-light leading-[1.6] mt-6 pt-6 border-t border-white/10">
                Not sure if we take your plan? Call us and we'll verify your exact coverage before your visit.
              </p>
            </div>

            {/* Premium In-House Savings Plan Callout */}
            <div className="group relative p-8 rounded-[24px] bg-gradient-to-br from-coral/10 via-bg to-bg border border-coral/20 overflow-hidden hover:border-coral/40 transition-colors duration-500 shadow-[0_0_30px_rgba(250,114,104,0.05)]">
              {/* Decorative background accent inside the card */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-coral/10 blur-[30px] rounded-full group-hover:bg-coral/20 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-ink font-serif text-2xl group-hover:text-coral transition-colors">No Insurance?</h3>
                  <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center text-coral">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                
                <p className="text-muted text-[15px] font-light leading-[1.7] mb-6">
                  Ask about our <strong className="text-ink font-medium">In-House Membership Plan</strong>. Pay one simple annual fee for all your preventive care, plus get exclusive discounts on other treatments.
                </p>
                
                <a href="/membership" className="inline-flex items-center text-[14px] font-medium text-coral hover:text-amber-300 transition-colors">
                  Learn about memberships
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
