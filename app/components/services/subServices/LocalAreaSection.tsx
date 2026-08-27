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

  return (
    <section className="py-section bg-bg-2 border-t border-line relative overflow-hidden">
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
            <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-accent mb-4">
              {data.eyebrow}
            </span>
            <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-white mb-6">
              {data.heading}
            </h2>

            <div className="mb-8 space-y-4">
              {data.body.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-body text-[15px] md:text-[16px] font-light leading-[1.7] max-w-[80%]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* ── Call Button ── */}
            <div className="mt-8">
              <a
                href={`tel:+1${data.address.phone.replace(/[^\d+]/g, '')}`}
                className={[
                  'inline-flex items-center justify-center gap-3',
                  'rounded-xl border border-coral/30 bg-coral/5 text-accent font-medium text-base sm:text-[15px]',
                  'px-8 py-3.5',
                  'transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-coral/10 hover:border-coral/40 active:translate-y-0',
                ].join(' ')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {data.address.phone}
              </a>
            </div>
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
          </div>

        </div>
      </div>
    </section>
  );
}