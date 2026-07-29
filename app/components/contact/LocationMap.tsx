'use client';

import { useScrollReveal } from '@/app/lib/useScrollReveal';

export default function LocationMap() {
  const [ref, inView] = useScrollReveal();

  return (
    <section className="py-section">
      <div className="px-site max-w-[1240px] mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={[
            'transition-all duration-1000 ease-out',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral font-sans mb-4">
            Find Us
          </span>
          <h2 className="font-serif font-light text-3xl
            lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ink max-w-[18ch]">
            Right in the heart of{' '}
            <em className="not-italic text-coral">Fulton Ranch</em>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 mt-12 md:mt-16">

          {/* Map embed */}
          <div className="relative rounded-sm overflow-hidden border border-line aspect-[16/11] lg:aspect-auto lg:min-h-[420px]">
            <iframe
              title="Promenade Dental location"
              src="https://www.google.com/maps?q=4905+S+Alma+School+Rd+Suite+1+Chandler+AZ+85248&output=embed"
              className="absolute inset-0 w-full h-full grayscale-[0.3] contrast-[1.05]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address card */}
          <div className="rounded-[22px] border border-line bg-ink p-7 md:p-9 flex flex-col justify-between">
            <div>
              <h3 className="font-serif font-normal text-[22px] text-white mb-4">
                Promenade Dental
              </h3>
              <p className="text-muted text-[14.5px] font-light leading-[1.8]">
                4905 S. Alma School Rd, Suite 1
                <br />
                Chandler, AZ 85248
              </p>

              <div className="h-px bg-line my-6" />

              <p className="text-muted text-[14.5px] font-light leading-[1.8]">
                Mon 8am&ndash;1pm (by appt only) &middot; Tue&ndash;Thu 8am&ndash;7pm &middot; Fri&ndash;Sun Closed
              </p>

              <div className="h-px bg-line my-6" />

              <p className="text-muted text-[14.5px] font-light leading-[1.8]">
                Free parking available right outside the suite — no garage,
                no hassle.
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/ufAu9qeLdfAFBAMr9"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center mt-8 text-white border border-line font-sans font-medium text-[14.5px] px-8 py-4 rounded-full transition-colors duration-300 hover:border-coral"
            >
              Get Directions &rarr;
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}