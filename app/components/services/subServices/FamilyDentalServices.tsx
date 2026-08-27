'use client';

import Link from 'next/link';
import { Sparkles, Smile, Activity, ShieldHalf, ArrowRight } from 'lucide-react';

const ICONS = [Sparkles, Smile, Activity, ShieldHalf];

interface Service {
  title: string;
  description: string;
  bestFor: string[];
  cta: string;
  href: string;
}

export default function FamilyDentalServices({
  eyebrow,
  heading,
  intro,
  services,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
  services: Service[];
}) {
  return (
    // Adding a subtle background difference or top border can help separate it from the previous section
    <section className="py-section relative border-t border-line/50 ">
      <div className="lg:px-site max-w-[90%] mx-auto">
        
        {/* Header - Slightly adjusted to a centered layout to break the visual rhythm from the previous section */}
        <div className="mb-16 text-center flex flex-col items-center">
          <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-accent mb-4">
            {eyebrow}
          </span>
          <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-ink mb-6 max-w-5xl">
            {heading}
          </h2>
          <p className="text-body text-lg font-light leading-relaxed max-w-3xl">
            {intro}
          </p>
        </div>

        {/* 2x2 Grid for 4 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = ICONS[index % ICONS.length];
            return <ServiceCard key={index} service={service} Icon={Icon} />;
          })}
        </div>
        
      </div>
    </section>
  );
}

function ServiceCard({ service, Icon }: { service: Service; Icon: any }) {
  return (
    <Link 
      href={service.href}
      className="group relative flex flex-col rounded-[24px] p-8 lg:p-10 border border-coral bg-ink hover:bg-coral/[0.1] transition-colors duration-500 overflow-hidden"
    >
      {/* Icon & Title Row */}
      <div className="flex items-center gap-5 mb-6">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-coral/10 text-accent group-hover:scale-110 transition-transform duration-500 ease-out">
          <Icon strokeWidth={1.5} className="w-7 h-7" />
        </div>
        <h3 className="font-serif text-2xl text-white group-hover:text-ink tracking-tight">
          {service.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-white/80 group-hover:text-ink font-light leading-[1.65] mb-8 flex-grow">
        {service.description}
      </p>

      {/* "Best For" Pills */}
      <div className="mb-10">
        <div className="text-[11px] uppercase tracking-widest text-ink mb-3 font-medium">
          Best For
        </div>
        <div className="flex flex-wrap gap-2">
          {service.bestFor.map((item, i) => (
            <span 
              key={i} 
              className="px-3 py-1.5 rounded-full text-[13px] border border-coral/60 text-white bg-ink"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Bottom Bar */}
      <div className="mt-auto pt-6 border-t border-line/50 group-hover:border-coral/50 flex items-center justify-between text-accent font-medium">
        <span className="text-[15px]">{service.cta}</span>
        <ArrowRight 
          className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300" 
        />
      </div>
    </Link>
  );
}