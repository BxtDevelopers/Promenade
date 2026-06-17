// components/services/ServiceGallery.tsx
'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

export default function ServiceGallery({
  eyebrow,
  heading,
  images,
}: {
  eyebrow: string;
  heading: string;
  images: string[];
}) {
  const [headRef, headIn] = useScrollReveal();

  return (
    <section className="py-section">
      <div className="px-site max-w-[1240px] mx-auto">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={[
            'mb-12 max-w-[640px] transition-all duration-1000 ease-out',
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral mb-4">
            {eyebrow}
          </span>
          <h2 className="font-serif font-light text-3xl lg:text-[clamp(34px,4vw,58px)] leading-[1.08] tracking-[-0.02em] text-ivory">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[14px]">
          {images.map((src, i) => (
            <GalleryTile key={i} src={src} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryTile({ src, index }: { src: string; index: number }) {
  const [ref, inView] = useScrollReveal();
  const tall = index % 3 === 1;
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'relative overflow-hidden border border-line transition-all duration-1000 ease-out',
        tall ? 'rounded-arch row-span-2 aspect-[3/4.4]' : 'rounded-arch-sm aspect-[3/3.6]',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
      ].join(' ')}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <Image src={src} alt="" fill className="object-cover transition-transform duration-700 ease-out hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
    </div>
  );
}