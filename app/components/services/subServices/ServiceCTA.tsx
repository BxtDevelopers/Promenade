// // components/services/ServiceCTA.tsx
// 'use client';

// import Link from 'next/link';
// import { useEffect, useRef } from 'react';

// export default function ServiceCTA({
//   title,
//   highlight,
//   subtitle,
//   buttonText,
//   buttonHref,
// }: {
//   title: string;
//   highlight: string;
//   subtitle: string;
//   buttonText: string;
//   buttonHref: string;
// }) {
//   const archGroupRef = useRef<SVGGElement>(null);

//   useEffect(() => {
//     const group = archGroupRef.current;
//     if (!group) return;
//     group.innerHTML = '';
//     const CX = 500, CY = 320;
//     for (let a = 0; a < 8; a++) {
//       const r = 80 + a * 38;
//       const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//       p.setAttribute('d', `M${CX - r} ${CY} A${r} ${r} 0 0 1 ${CX + r} ${CY}`);
//       p.setAttribute('pathLength', '1');
//       p.style.cssText = [
//         'fill:none',
//         `stroke:${a === 2 || a === 5 ? 'rgba(232,154,114,0.4)' : 'rgba(244,236,221,0.1)'}`,
//         'stroke-linecap:round',
//         'stroke-dasharray:1',
//         'stroke-dashoffset:1',
//         `transition:stroke-dashoffset 1.4s ease ${a * 0.06}s`,
//       ].join(';');
//       group.appendChild(p);
//     }
//     requestAnimationFrame(() => requestAnimationFrame(() => {
//       group.querySelectorAll('path').forEach((p) => ((p as SVGPathElement).style.strokeDashoffset = '0'));
//     }));
//   }, []);

//   return (
//     <section className="relative overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         <svg className="w-full h-full" viewBox="0 0 1000 320" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
//           <g ref={archGroupRef} />
//         </svg>
//       </div>
//       <div className="absolute inset-0 z-[1] bg-[radial-gradient(60%_60%_at_50%_100%,rgba(232,154,114,0.1),transparent_70%)]" />

//       <div className="relative z-[2] px-site max-w-[1240px] mx-auto py-section flex flex-col items-center text-center">
//         <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.1] tracking-[-0.02em] text-ivory max-w-[20ch]">
//           {title} <em className="not-italic text-coral">{highlight}</em>
//         </h2>
//         <p className="text-muted text-body-lg font-light leading-[1.7] max-w-[48ch] mt-6 mb-10">{subtitle}</p>
//         <Link
//           href={buttonHref}
//           className="inline-flex items-center gap-3 border-none font-sans font-semibold text-[13px] md:text-[14px] tracking-wide2 uppercase px-[30px] py-[17px] rounded-full cursor-pointer whitespace-nowrap transition-all duration-300 shadow-btn text-bg bg-coral hover:bg-ivory hover:-translate-y-0.5"
//         >
//           {buttonText} →
//         </Link>
//       </div>
//     </section>
//   );
// }

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

// 1. Data Interface
interface CTAData {
  title: string;
  highlight: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  image?: string; // Added to support the requested image layout
}

export default function FinalCTASection({ data }: { data: CTAData }) {
  const [ref, inView] = useScrollReveal();

  return (
    <section className="py-section bg-bg">
      <div className="lg:px-site max-w-[90%] mx-auto">
        
        {/* ── Banner Container ── */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={[
            'relative w-full min-h-[500px] rounded-[32px] overflow-hidden flex items-center border border-line',
            'transition-all duration-1000 ease-out',
            inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.98]',
          ].join(' ')}
        >
          
          {/* ── Background Image / Fallback ── */}
          {data.image ? (
            <>
              <Image
                src={data.image}
                alt="Family Dental Care"
                fill
                className="object-cover object-center"
              />
              {/* Your custom global gradient veil to ensure text readability */}
              <div className="absolute inset-0 bg-story-veil z-10" />
            </>
          ) : (
            /* Fallback background if no image is passed */
            <div className="absolute inset-0 bg-bg-2 z-0">
              <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_at_center,rgba(232,154,114,0.15),transparent_70%)]" />
            </div>
          )}

          {/* ── Content ── */}
          <div className="relative z-20 w-full px-2 py-8 md:p-16 lg:p-20">
            <div className="max-w-[700px] mx-auto text-center">
              
              <h2 className="font-serif font-light text-[clamp(40px,5vw,72px)] leading-[1.05] tracking-[-0.02em] text-ivory mb-6">
                {data.title} {" "}
                <em className="not-italic text-coral">{data.highlight}</em>
              </h2>
              
              <p className="text-ivory-2 font-light text-[16px] md:text-[18px] leading-[1.7] mb-10">
                {data.subtitle}
              </p>
              
              <Link
                href={data.buttonHref}
                className="inline-flex items-center justify-center py-[16px] px-10 rounded-full font-sans font-semibold text-[13px] tracking-wide2 uppercase bg-coral text-bg border-none transition-all duration-300 hover:bg-ivory hover:text-bg hover:-translate-y-1 shadow-[0_12px_24px_-8px_rgba(232,154,114,0.4)]"
              >
                {data.buttonText} →
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}