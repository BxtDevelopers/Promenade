'use client';

import React from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

export default function ServiceArea() {
const [ref, inView] = useScrollReveal();

return ( <section className="py-section"> <div className="px-site max-w-[90%] mx-auto">

    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'transition-all duration-1000 ease-out',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      ].join(' ')}
    >
      <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral mb-4">
        Located in Fulton Ranch, Serving Chandler AZ
      </span>

      <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-16 items-start">

        {/* Content */}
        <div>
          <h2 className="font-serif font-light text-3xl lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ink max-w-[14ch]">
            Caring for patients across{' '}
            <em className="not-italic text-coral">Chandler.</em>
          </h2>

          <div className="mt-8 space-y-5 max-w-[65ch]">
            <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.85]">
              Promenade Dental is located in the Fulton Ranch area of
              Chandler, making our office convenient for patients in
              Chandler 85248, Ocotillo, Sun Lakes, and nearby South
              Chandler neighborhoods.
            </p>

            <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.85]">
              Whether you're searching for a dentist near Fulton Ranch,
              a family dentist near Ocotillo, a cosmetic dentist in
              Chandler, or an emergency dentist near Chandler 85248,
              our team is here to help with personalized, relationship-
              focused care.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {[
              'Fulton Ranch',
              'Ocotillo',
              'Sun Lakes',
              'South Chandler',
              'Chandler 85248',
            ].map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full border border-line bg-white/[0.02] text-muted text-[13px]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Card */}
        <div className="rounded-[28px] border border-line bg-white/[0.02] p-8 lg:p-10">
          <h3 className="font-serif text-[24px] text-ink mb-6">
            Promenade Dental
          </h3>

          <div className="space-y-6">
            <div>
              <p className="text-coral text-[12px] uppercase tracking-[0.15em] mb-2">
                Address
              </p>

              <p className="text-muted leading-[1.8]">
                4905 S. Alma School Rd, Suite 1
                <br />
                Chandler, AZ 85248
              </p>
            </div>

            <div className="h-px bg-line" />

            <div>
              <p className="text-coral text-[12px] uppercase tracking-[0.15em] mb-2">
                Phone
              </p>

              <a
                href="tel:+14808028188"
                className="text-ink hover:text-coral transition-colors"
              >
                (480) 802-8188
              </a>
            </div>

            <a
              href="https://maps.app.goo.gl/ufAu9qeLdfAFBAMr9"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center justify-center
                w-full
                mt-4
                bg-coral
                text-bg
                font-medium
                text-[14px]
                px-8
                py-4
                rounded-full
                transition-all
                duration-300
                hover:-translate-y-[2px]
              "
            >
              Get Directions →
            </a>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>

);
}
