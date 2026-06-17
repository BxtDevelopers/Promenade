// components/services/ServiceTestimonials.tsx
'use client';

import { useScrollReveal } from '@/app/lib/useScrollReveal';

export default function ServiceTestimonials({
  eyebrow,
  heading,
  testimonials,
}: {
  eyebrow: string;
  heading: string;
  testimonials: { quote: string; name: string; context: string }[];
}) {
  const [headRef, headIn] = useScrollReveal();

  return (
    <section className="py-24">
      <div className="px-site max-w-[1240px] mx-auto">

        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={[
            'mb-12 md:mb-16 max-w-[440px] transition-all duration-1000 ease-out',
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral mb-4">
            {eyebrow}
          </span>
          <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-ivory">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} delay={i * 0.08} />
          ))}
        </div>

      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: { quote: string; name: string; context: string };
  delay: number;
}) {
  const [ref, inView] = useScrollReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'relative rounded-[22px] px-7 pt-8 pb-7 h-full flex flex-col',
        'border border-line bg-ivory/[0.02] coral-underline',
        'transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
        'hover:border-coral/40 hover:bg-coral/5 hover:-translate-y-[5px]',
      ].join(' ')}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(34px)',
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Quote mark */}
      <svg viewBox="0 0 32 26" className="w-8 h-auto text-coral/30 mb-5" fill="currentColor" aria-hidden="true">
        <path d="M0 26V15.6C0 6.9 5.2 1.3 13 0l1.7 3.5C9.9 4.8 6.9 7.9 6.9 13H13v13H0zm17.3 0V15.6c0-8.7 5.2-14.3 13-15.6L32 3.5c-4.8 1.3-7.8 4.4-7.8 9.5h6.1v13H17.3z" />
      </svg>

      <p className="text-ivory-2 text-[15px] font-light leading-[1.7] flex-grow">
        {testimonial.quote}
      </p>

      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-line">
        <span className="w-9 h-9 rounded-full bg-coral/10 border border-coral/30 flex items-center justify-center font-serif text-coral text-[14px] flex-shrink-0">
          {testimonial.name.charAt(0)}
        </span>
        <div>
          <p className="text-ivory text-[14px] font-medium font-sans">{testimonial.name}</p>
          <p className="text-muted-2 text-[12.5px] font-light font-sans">{testimonial.context}</p>
        </div>
      </div>
    </div>
  );
}