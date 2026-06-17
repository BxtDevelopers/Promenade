// components/services/ServiceCTA.tsx
'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function ServiceCTA({
  title,
  highlight,
  subtitle,
  buttonText,
  buttonHref,
}: {
  title: string;
  highlight: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
}) {
  const archGroupRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const group = archGroupRef.current;
    if (!group) return;
    group.innerHTML = '';
    const CX = 500, CY = 320;
    for (let a = 0; a < 8; a++) {
      const r = 80 + a * 38;
      const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      p.setAttribute('d', `M${CX - r} ${CY} A${r} ${r} 0 0 1 ${CX + r} ${CY}`);
      p.setAttribute('pathLength', '1');
      p.style.cssText = [
        'fill:none',
        `stroke:${a === 2 || a === 5 ? 'rgba(232,154,114,0.4)' : 'rgba(244,236,221,0.1)'}`,
        'stroke-linecap:round',
        'stroke-dasharray:1',
        'stroke-dashoffset:1',
        `transition:stroke-dashoffset 1.4s ease ${a * 0.06}s`,
      ].join(';');
      group.appendChild(p);
    }
    requestAnimationFrame(() => requestAnimationFrame(() => {
      group.querySelectorAll('path').forEach((p) => ((p as SVGPathElement).style.strokeDashoffset = '0'));
    }));
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 1000 320" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          <g ref={archGroupRef} />
        </svg>
      </div>
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(60%_60%_at_50%_100%,rgba(232,154,114,0.1),transparent_70%)]" />

      <div className="relative z-[2] px-site max-w-[1240px] mx-auto py-section flex flex-col items-center text-center">
        <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.1] tracking-[-0.02em] text-ivory max-w-[20ch]">
          {title} <em className="not-italic text-coral">{highlight}</em>
        </h2>
        <p className="text-muted text-body-lg font-light leading-[1.7] max-w-[48ch] mt-6 mb-10">{subtitle}</p>
        <Link
          href={buttonHref}
          className="inline-flex items-center gap-3 border-none font-sans font-semibold text-[13px] md:text-[14px] tracking-wide2 uppercase px-[30px] py-[17px] rounded-full cursor-pointer whitespace-nowrap transition-all duration-300 shadow-btn text-bg bg-coral hover:bg-ivory hover:-translate-y-0.5"
        >
          {buttonText} →
        </Link>
      </div>
    </section>
  );
}