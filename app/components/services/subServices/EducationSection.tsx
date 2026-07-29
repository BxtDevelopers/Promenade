'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface EducationData {
  eyebrow: string;
  heading: string;
  body: string;
  supportingText: string;
  image: string;
  imageAlt: string;
  cta: {
    label: string;
    href: string;
  };
}

export default function EducationSection({
  data,
}: {
  data: EducationData;
}) {
  return (
    <section className="py-section relative border-t border-line/50 overflow-hidden">
      {/* 
        Grid Layout: 
        1 column on mobile/tablet (grid-cols-1)
        2 columns on desktop (lg:grid-cols-2)
      */}
      <div className="px-site max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Content */}
        <div className="flex flex-col mx-auto lg:mx-0 order-2 lg:order-1">
          <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral mb-5">
            {data.eyebrow}
          </span>
          
          <h2 className="font-serif font-light text-3xl lg:text-6xl leading-[1.2em] tracking-[-0.02em] text-ink">
            {data.heading}
          </h2>
          
          <p className="text-muted text-lg font-light leading-[1.7] mb-8">
            {data.body}
          </p>

          {/* Highlighted Callout for Supporting Text */}
          <div className="pl-6 border-l border-coral/40 py-2 mb-10">
            <p className="text-ink/90 text-[17px] font-light leading-[1.65]">
              {data.supportingText}
            </p>
          </div>

          <div>
            <Link 
              href={data.cta.href}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-coral text-ink font-medium text-[15px] hover:bg-coral/90 transition-all duration-300 ease-out"
            >
              {data.cta.label}
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full order-1 lg:order-2">
          {/* 
            Responsive Aspect Ratios:
            Mobile: Square-ish (aspect-square)
            Tablet: Wider, cinematic crop (md:aspect-[4/3])
            Desktop: Taller, portrait-leaning crop to match text height (lg:aspect-[4/5])
          */}
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:h-[700px] rounded-[24px] overflow-hidden border border-line bg-ink/5 group">
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

      </div>
    </section>
  );
}