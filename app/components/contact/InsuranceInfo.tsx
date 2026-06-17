'use client';

import { useScrollReveal } from '@/app/lib/useScrollReveal';

const PLANS = [
  'Delta Dental',
  'Cigna',
  'MetLife',
  'Aetna',
  'Guardian',
  'United Concordia',
  'Humana',
  'Ameritas',
] as const;

export default function InsuranceInfo() {
  const [leadRef, leadIn] = useScrollReveal();
  const [gridRef, gridIn] = useScrollReveal();

  return (
    <section className="py-section bg-bg-2">
      <div className="px-site max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-[60px] items-start">

          {/* Lead */}
          <div
            ref={leadRef as React.RefObject<HTMLDivElement>}
            className={[
              'transition-all duration-1000 ease-out',
              leadIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
          >
            <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral font-sans mb-4">
              Insurance &amp; New Patients
            </span>
            <h2 className="font-serif font-light text-3xl
              lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ivory max-w-[16ch]">
              Most major PPO plans{' '}
              <em className="not-italic text-coral">accepted</em>.
            </h2>
            <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.7] mt-6 max-w-[42ch]">
              Not sure if you&apos;re covered? Send us your insurance details
              before your visit and we&apos;ll confirm your benefits ahead of
              time — no surprises at checkout.
            </p>
          </div>

          {/* Plan grid */}
          <div
            ref={gridRef as React.RefObject<HTMLDivElement>}
            className={[
              'grid grid-cols-2 sm:grid-cols-4 gap-[14px] mt-auto',
              'transition-all duration-1000 ease-out delay-150',
              gridIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
          >
            {PLANS.map((plan) => (
              <div
                key={plan}
                className="rounded-2xl border border-line bg-ivory/[0.02] px-4 py-6 flex items-center justify-center text-center"
              >
                <span className="font-serif font-normal text-[15px] text-ivory-2">
                  {plan}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}