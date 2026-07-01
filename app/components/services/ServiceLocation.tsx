'use client';

import { useScrollReveal } from '@/app/lib/useScrollReveal';

export default function LocationMap() {
  const [ref, inView] = useScrollReveal();

  return (
    <section className="py-section">
      <div className="lg:px-site max-w-[90%] mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={[
            'transition-all duration-1000 ease-out',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral font-sans mb-4">
  Serving Chandler & Surrounding Communities
</span>
          <h2 className="font-serif font-light text-3xl
  lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ivory ">
  Dental care near{' '}
  <em className="not-italic text-coral">
    Fulton Ranch & Ocotillo
  </em>.
</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mt-12 md:mt-16">

          {/* Map embed */}
          <div className="relative rounded-2xl overflow-hidden border border-line aspect-[16/11] lg:aspect-auto lg:min-h-[420px]">
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
          <div className="rounded-[22px] border border-line bg-ivory/[0.02] p-7 md:p-9 flex flex-col justify-between">
  <div>
    <h3 className="font-serif font-normal text-[22px] text-ivory mb-4">
      Promenade Dental
    </h3>

    <p className="text-muted text-[14.5px] font-light leading-[1.8]">
      Promenade Dental serves patients looking for dental care near
      Fulton Ranch, Ocotillo, Sun Lakes, and Chandler 85248.
    </p>

    <div className="h-px bg-line my-6" />

    <p className="text-muted text-[14.5px] font-light leading-[1.8]">
      Our office provides preventive, cosmetic, restorative,
      implant, and emergency dental services for patients who
      want local care from a dentist who takes time to explain
      treatment clearly.
    </p>

    <div className="h-px bg-line my-6" />

    <p className="text-muted text-[14.5px] font-light leading-[1.8]">
      Whether you're searching for a dentist in Chandler,
      a cosmetic dentist near Fulton Ranch, a family dentist
      near Ocotillo, or emergency dental care near Chandler
      85248, we're here to help you take the next step.
    </p>

    <div className="flex flex-wrap gap-2 mt-6">
      {[
        'Fulton Ranch',
        'Ocotillo',
        'Sun Lakes',
        'South Chandler',
        'Chandler 85248',
      ].map((area) => (
        <span
          key={area}
          className="px-3 py-1.5 rounded-full border border-line text-[12px] text-muted"
        >
          {area}
        </span>
      ))}
    </div>
  </div>

  <a
    href="https://maps.app.goo.gl/ufAu9qeLdfAFBAMr9"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center mt-8 text-ivory border border-line font-sans font-medium text-[14.5px] px-8 py-4 rounded-full transition-colors duration-300 hover:border-coral"
  >
    Get Directions &rarr;
  </a>
</div>

        </div>
      </div>
    </section>
  );
}