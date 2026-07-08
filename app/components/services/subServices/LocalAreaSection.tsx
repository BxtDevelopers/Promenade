'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

// 1. Data Interface
interface Address {
  practice: string;
  street: string;
  cityStateZip: string;
  phone: string;
}

interface Neighborhood {
  name: string;
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
  neighborhoods?: Neighborhood[];
}

const defaultNeighborhoods: Neighborhood[] = [
  { name: 'Fulton Ranch' },
  { name: 'Ocotillo'},
  { name: 'Sun Lakes' },
];

export default function LocalAreaSection({ data }: { data: LocalAreaData }) {
  const [contentRef, contentIn] = useScrollReveal();
  const [mapRef, mapIn] = useScrollReveal();

  const neighborhoods = data.neighborhoods?.length ? data.neighborhoods : defaultNeighborhoods;

  const [selected, setSelected] = useState<Neighborhood | null>(null);
  const [copied, setCopied] = useState(false);

  const practiceQuery = encodeURIComponent(
    `${data.address.practice} ${data.address.street} ${data.address.cityStateZip}`
  );

  const mapSrc = selected
    ? `https://maps.google.com/maps?saddr=${encodeURIComponent(`${selected.name}, Chandler, AZ`)}&daddr=${practiceQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    : `https://maps.google.com/maps?q=${practiceQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  const fullAddress = `${data.address.street}, ${data.address.cityStateZip}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — silently no-op rather than throw
    }
  };

  return (
    <section className="py-section bg-bg border-t border-line relative overflow-hidden">
      <div className="lg:pl-24 w-[90%] lg:w-full mx-auto">
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

            <div className="mb-8 space-y-4">
              {data.body.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-muted text-[15px] md:text-[16px] font-light leading-[1.7] max-w-[80%]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Neighborhood selector */}
            {/* <div className="mb-8">
              <div className="text-[11px] tracking-wide2 uppercase text-muted mb-3">
                Coming from…
              </div>
              <div className="flex flex-wrap gap-[10px]">
                {neighborhoods.map((n) => {
                  const active = selected?.name === n.name;
                  return (
                    <button
                      key={n.name}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSelected(active ? null : n)}
                      className={[
                        'inline-flex items-center gap-2 rounded-full px-4 py-[9px] text-[13px] font-light tracking-[0.01em] transition-all duration-300 border cursor-pointer',
                        active
                          ? 'bg-coral text-bg border-coral'
                          : 'text-ivory border-ivory  hover:border-coral/50 hover:text-coral',
                      ].join(' ')}
                    >
                      {n.name}
                    </button>
                  );
                })}
              </div>
              {selected && (
                <p className="text-muted text-[13px] font-light mt-3 transition-opacity duration-300">
                  Showing the drive from {selected.name} — to our door.
                </p>
              )}
            </div> */}

            {/* Address Card */}
            {/* <div className="rounded-[22px] p-7 md:p-8 border border-line bg-panel/[0.4] max-w-[45ch] transition-all duration-300 hover:border-coral/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-coral/10 border border-coral/20 flex items-center justify-center shrink-0 mt-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-coral">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-[20px] text-ivory mb-1">
                    {data.address.practice}
                  </h3>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="group text-left cursor-pointer"
                    aria-label="Copy address"
                  >
                    <p className="text-muted font-light text-[15px] leading-relaxed group-hover:text-ivory transition-colors duration-200">
                      {data.address.street}<br />
                      {data.address.cityStateZip}
                    </p>
                    <span className="inline-flex items-center gap-[6px] text-[12px] mt-[6px] text-coral/80 group-hover:text-coral transition-colors duration-200">
                      {copied ? (
                        <>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          Copied
                        </>
                      ) : (
                        <>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="8" y="8" width="12" height="12" rx="2" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16V5a1 1 0 011-1h11" />
                          </svg>
                          Copy address
                        </>
                      )}
                    </span>
                  </button>
                  <a
                  
                    href={`tel:${data.address.phone.replace(/[^\d+]/g, '')}`}
                    className="text-ivory font-light text-[15px] mt-3 flex items-center gap-2 w-fit hover:text-coral transition-colors duration-200"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral/70">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.041l-3.286-.47s-1.396.671-1.848 1.123c-.451.452-1.164.57-1.745.247-1.46-.814-2.906-1.921-3.951-3.411-.795-1.127-.58-2.09.076-2.613l1.109-1.015c.423-.388.55-.99.317-1.523l-1.516-3.486c-.276-.635-.98-1.002-1.674-.834l-1.304.316A2.25 2.25 0 002.25 6.75z" />
                    </svg>
                    {data.address.phone}
                  </a>
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
              'group relative w-full aspect-[4/3] lg:aspect-square max-h-[460px] overflow-hidden border border-line bg-panel/[0.4]',
              'transition-all duration-1000 ease-out delay-150',
              mapIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
          >
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(11,28,44,0.4)] z-10" />

            <iframe
              key={mapSrc}
              title="Promenade Dental Location"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-90 contrast-125"
            />

            {/* Hover affordance */}
            {/* <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${practiceQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-2 rounded-full px-4 py-[10px] text-[12.5px] font-medium tracking-wide2 uppercase bg-bg/80 text-ivory border border-line backdrop-blur-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-coral hover:text-bg hover:border-coral"
            >
              View larger map →
            </a> */}
          </div>

        </div>
      </div>
    </section>
  );
}