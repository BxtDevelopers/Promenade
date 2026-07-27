'use client';

import { useScrollReveal } from '@/app/lib/useScrollReveal';

const DETAILS = [
  {
    label: 'Call Us',
    value: '(480) 802-8188',
    href: 'tel:+14808028188',
    icon: 'M3 5a2 2 0 0 1 2-2h2.28a1 1 0 0 1 .97.757l.91 3.64a1 1 0 0 1-.27.96l-1.42 1.42a12.05 12.05 0 0 0 5.66 5.66l1.42-1.42a1 1 0 0 1 .96-.27l3.64.91a1 1 0 0 1 .757.97V19a2 2 0 0 1-2 2h-1C9.163 21 3 14.837 3 7V6z',
  },
  {
    label: 'Visit Us',
    value: '4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248',
    href: 'https://maps.app.goo.gl/ufAu9qeLdfAFBAMr9',
    icon: 'M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  },
  {
    label: 'Email Us',
    value: 'info@promenadedds.com',
    href: 'mailto:info@promenadedds.com',
    icon: 'M3 6h18v12H3V6zm0 0 9 7 9-7',
  },
  //\u00b7 Fri\u2013Mon Closed
  {
    label: 'Office Hours',
    value: 'Tue\u2013Thur 8am\u20137pm',
    href: undefined,
    icon: 'M12 8v4l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z',
  },
] as const;

export default function ContactDetails() {
  return (
    <section className="py-section">
      <div className="px-site max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {DETAILS.map((item, i) => (
            <DetailCard key={item.label} item={item} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DetailCard({
  item,
  delay,
}: {
  item: (typeof DETAILS)[number];
  delay: number;
}) {
  const [ref, inView] = useScrollReveal();

  const Inner = (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'relative rounded-[22px] px-7 py-8 h-full overflow-hidden',
        'border border-ivory/40 bg-ivory/5 coral-underline',
        'transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
        'hover:border-coral/40 hover:bg-coral/5 hover:-translate-y-[5px]',
      ].join(' ')}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(34px)',
        transitionDelay: `${delay}s`,
      }}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7 h-7 mb-5">
        <path
          d={item.icon}
          fill="none"
          stroke="currentColor"
          className="text-coral"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <h3 className="font-serif font-normal text-[19px] text-ivory mb-2">
        {item.label}
      </h3>
      <p className="text-muted text-[14.5px] font-light leading-[1.65]">
        {item.value}
      </p>
    </div>
  );

  if (!item.href) return Inner;

  return (
    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block h-full">
      {Inner}
    </a>
  );
}