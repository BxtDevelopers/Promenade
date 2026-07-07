'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

export interface EducationSection2Data {
  eyebrow: string;
  heading: React.ReactNode | string;
  bodyParagraphs: string[]; // Array to easily handle multiple paragraphs without a special callout box
  image: string;
  imageAlt: string;
  cta: {
    label: string;
    href: string;
  };
}

export default function EducationSection2({
  data,
}: {
  data: EducationSection2Data;
}) {
  const [imgRef, imgIn] = useScrollReveal();
  const [textRef, textIn] = useScrollReveal();

  return (
    <section className="py-section relative overflow-hidden bg-bg-2 isolate">
      {/* Subtle background glow behind the text */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-coral/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="px-site max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Arched Image */}
        <div className="relative w-full order-1 lg:order-2">
          {/* 
            Responsive Aspect Ratios:
            Mobile: Square-ish (aspect-square)
            Tablet: Wider, cinematic crop (md:aspect-[4/3])
            Desktop: Taller, portrait-leaning crop to match text height (lg:aspect-[4/5])
          */}
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:h-[700px] rounded-[24px] overflow-hidden border border-line bg-ivory/5 group">
            {/* 
              Using standard <img> for drop-in readiness. 
              If using Next.js <Image>, replace this with:
              <Image src={data.image} alt={data.imageAlt} fill className="object-cover" /> 
            */}
            <img 
              src={data.image} 
              alt={data.imageAlt} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle gradient overlay to ensure it blends beautifully into dark mode */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right Column: Content */}
        <div 
          ref={textRef as React.RefObject<HTMLDivElement>}
          className={[
            "flex flex-col order-1 lg:order-2 transition-all duration-1000 delay-200 ease-out",
            textIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          ].join(' ')}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-[11.5px] font-bold tracking-[0.2em] uppercase text-coral">
              {data.eyebrow}
            </span>
            <span className="h-[1px] w-12 bg-coral/40 block" aria-hidden="true" />
          </div>
          
          <h2 className="font-serif font-light text-3xl lg:text-6xl leading-[1.15] tracking-[-0.02em] text-white mb-8">
            {data.heading}
          </h2>
          
          <div className="flex flex-col gap-5 mb-10">
            {data.bodyParagraphs.map((paragraph, index) => (
              <p key={index} className="text-muted text-lg font-light leading-[1.75]">
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <Link 
              href={data.cta.href}
              className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-coral/50 bg-coral/5 text-white font-medium text-[15px] hover:bg-coral hover:text-white hover:border-coral transition-all duration-300 shadow-[0_0_20px_rgba(232,154,114,0.0)] hover:shadow-[0_0_20px_rgba(232,154,114,0.3)]"
            >
              {data.cta.label}
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}