'use client';

import { useScrollReveal } from '@/app/lib/useScrollReveal';

// 1. Data Interface
interface Address {
  practice: string;
  street: string;
  cityStateZip: string;
  phone: string;
}

interface LocalAreaData {
  eyebrow: string;
  heading: string;
  body: string;
  address: Address;
  cta: {
    label: string;
    href: string;
  };
}

export default function LocalAreaSection({ data }: { data: LocalAreaData }) {
  const [contentRef, contentIn] = useScrollReveal();
  const [mapRef, mapIn] = useScrollReveal();

  // Create a URL-safe query for the free Google Maps embed
  const mapQuery = encodeURIComponent(`${data.address.practice} ${data.address.street} ${data.address.cityStateZip}`);

  return (
    <section className="py-section bg-bg border-t border-line relative overflow-hidden">
      <div className="lg:px-site max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
          
          {/* ── Left: Content & Address Card ── */}
          <div
            ref={contentRef as React.RefObject<HTMLDivElement>}
            className={[
              'transition-all duration-1000 ease-out',
              contentIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
          >
            <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral mb-4">
              {data.eyebrow}
            </span>
            <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-ivory mb-6">
              {data.heading}
            </h2>
            
            {/* Render paragraphs dynamically based on \n\n in the data */}
            <div className="mb-10 space-y-4">
              {data.body.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-muted text-[15px] md:text-[16px] font-light leading-[1.7] max-w-[80%]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Address Card */}
            {/* <div className="rounded-[22px] p-7 md:p-8 border border-line bg-panel/[0.4] max-w-[45ch]">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-coral/10 border border-coral/20 flex items-center justify-center shrink-0 mt-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-coral">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-[20px] text-ivory mb-1">
                    {data.address.practice}
                  </h3>
                  <p className="text-muted font-light text-[15px] leading-relaxed">
                    {data.address.street}<br />
                    {data.address.cityStateZip}
                  </p>
                  <p className="text-ivory font-light text-[15px] mt-2 flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral/70">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.041l-3.286-.47s-1.396.671-1.848 1.123c-.451.452-1.164.57-1.745.247-1.46-.814-2.906-1.921-3.951-3.411-.795-1.127-.58-2.09.076-2.613l1.109-1.015c.423-.388.55-.99.317-1.523l-1.516-3.486c-.276-.635-.98-1.002-1.674-.834l-1.304.316A2.25 2.25 0 002.25 6.75z" />
                    </svg>
                    {data.address.phone}
                  </p>
                </div>
              </div>

              <a
                href={data.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-[14px] rounded-full font-sans font-semibold text-[13px] tracking-wide2 uppercase bg-coral text-bg border-none cursor-pointer transition-all duration-300 hover:bg-ivory hover:text-bg hover:-translate-y-0.5 shadow-btn"
              >
                {data.cta.label} →
              </a>
            </div> */}
          </div>

          {/* ── Right: Map Embed ── */}
          <div
            ref={mapRef as React.RefObject<HTMLDivElement>}
            className={[
              'relative w-full aspect-[4/3] lg:aspect-square max-h-[600px] rounded-[22px] overflow-hidden border border-line bg-panel/[0.4]',
              'transition-all duration-1000 ease-out delay-150',
              mapIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
          >
            {/* Dark overlay to help the map blend into the dark theme slightly */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(11,28,44,0.4)] z-10 rounded-[22px]" />
            
            <iframe
              title="Promenade Dental Location"
              src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-90 contrast-125"
            />
          </div>

        </div>
      </div>
    </section>
  );
}