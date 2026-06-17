'use client';

import { useScrollReveal } from '@/app/lib/useScrollReveal';

export default function AboutCTA() {
  const [ref, inView] = useScrollReveal();

  return (
    <section className="py-section">
      <div className="px-site max-w-[1240px] mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={[
            'text-center max-w-[640px] mx-auto',
            'transition-all duration-1000 ease-out',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral font-sans mb-4">
            New Patients Welcome
          </span>

          <h2 className="font-serif font-light text-3xl
            lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ivory">
            Come see the difference{' '}
            <em className="not-italic text-coral">for yourself</em>.
          </h2>

          <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.7] mt-6 max-w-[44ch] mx-auto">
            Most major PPO plans accepted &middot; same-week appointments for
            new patients &middot; same-day emergency care available.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-coral text-bg font-sans font-medium text-[14.5px] px-8 py-4 rounded-full transition-colors duration-300 hover:bg-coral-deep"
            >
              Book an Appointment &rarr;
            </a>
            <a
              href="tel:+14808028188"
              className="inline-flex items-center justify-center text-ivory border border-line font-sans font-medium text-[14.5px] px-8 py-4 rounded-full transition-colors duration-300 hover:border-coral"
            >
              (480) 802-8188
            </a>
          </div>

          <p className="text-muted-2 text-[13px] font-light leading-[1.7] mt-10">
            4905 S. Alma School Road, Suite 1 &middot; Chandler, AZ 85248
            <br />
            Mon&ndash;Fri 8am&ndash;7pm &middot; Sat 9am&ndash;5pm
          </p>
        </div>
      </div>
    </section>
  );
}