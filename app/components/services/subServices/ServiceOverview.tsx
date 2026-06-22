// components/services/ServiceOverview.tsx
'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/app/lib/useScrollReveal';
import BookingForm from './BookingForm';

export default function ServiceOverview({
  eyebrow,
  heading,
  body,
  features,
  image,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  features: string[];
  image: string;
}) {
  const [textRef, textIn] = useScrollReveal();
  const [imgRef, imgIn] = useScrollReveal();

  return (
    <section className="py-24 bg-bg-2">
      <div className="lg:px-site max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[60px] items-center">

        <div
          ref={imgRef as React.RefObject<HTMLDivElement>}
          className={[
            'relative transition-all duration-1000 ease-out',
            imgIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
          style={{ transitionDelay: '0.15s' }}
        >
          <div className="relative rounded-2xl overflow-hidden w-full border border-line">
        {/* <Image
          src={image}
          alt={heading}
          fill
          className="object-cover"
        /> */}
        <BookingForm service={eyebrow}/>
      </div>
          <div className="absolute -z-10 -bottom-8 -right-8 w-40 h-40 rounded-full bg-coral/10 blur-3xl hidden md:block" />
        </div>

        <div
          ref={textRef as React.RefObject<HTMLDivElement>}
          className={[
            'transition-all duration-1000 ease-out',
            textIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral mb-4">
            {eyebrow}
          </span>
          <h2 className="font-serif font-light text-3xl md:text-7xl leading-[1.1] tracking-[-0.02em] text-ivory mb-8">
            {heading}
          </h2>
          <p className="text-muted lg:text-xl font-light leading-[1.5]  mb-10">
            {body}
          </p>

          <ul className="flex flex-col gap-4">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-4 text-ivory-2 text-lg md:text-xl font-light leading-relaxed">
                <svg viewBox="0 0 24 24" className="w-6 h-6 mt-1 flex-shrink-0 text-coral" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        

      </div>
    </section>
  );
}