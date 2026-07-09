'use client';

import { useEffect, useRef } from 'react';
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
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Duplicate the content to create a seamless infinite scrolling loop
    track.innerHTML += track.innerHTML;
  }, []);

  return (
    <section className="py-24 bg-bg-2 overflow-hidden">
      {/* Header Container */}
      <div className="lg:px-site max-w-[90%] mx-auto">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={[
            'mb-12 md:mb-16 transition-all duration-1000 ease-out',
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral mb-4">
            {eyebrow}
          </span>
          <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-white">
            {heading}
          </h2>
        </div>
      </div>

      {/* Scrolling Marquee Container */}
      <div className="mt-[clamp(40px,5vw,60px)] marquee-mask">
        <div
          ref={trackRef}
          className="flex gap-[18px] w-max hover:[animation-play-state:paused]"
          style={{
            animation: 'mq 46s linear infinite',
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={[
                'flex-none w-[min(390px,82vw)] group relative rounded-[22px] px-7 pt-8 pb-7 flex flex-col',
                'border border-line bg-ivory coral-underline',
                'hover:border-coral/40 hover:bg-coral/5 transition-colors duration-300',
              ].join(' ')}
            >
              {/* Quote mark */}
              <svg 
                viewBox="0 0 32 26" 
                className="w-8 h-auto text-coral mb-5 flex-shrink-0" 
                fill="currentColor" 
                aria-hidden="true"
              >
                <path d="M0 26V15.6C0 6.9 5.2 1.3 13 0l1.7 3.5C9.9 4.8 6.9 7.9 6.9 13H13v13H0zm17.3 0V15.6c0-8.7 5.2-14.3 13-15.6L32 3.5c-4.8 1.3-7.8 4.4-7.8 9.5h6.1v13H17.3z" />
              </svg>

              <p className="text-ivory-2 text-[15px] font-light leading-[1.7] flex-grow">
                {t.quote}
              </p>

              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-line">
                <span className="w-9 h-9 rounded-full bg-coral/10 border border-coral/30 flex items-center justify-center font-serif text-coral text-[14px] flex-shrink-0">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-white text-[14px] font-medium font-sans">
                    {t.name}
                  </p>
                  <p className="text-muted-2 group-hover:text-coral text-[12.5px] font-light font-sans">
                    {t.context}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}