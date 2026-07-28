'use client';
import { useScrollReveal } from "@/app/lib/useScrollReveal";

const META = [
  {
    title: 'Same Dentist Every Visit',
    body: 'Continuity matters in dentistry. Seeing the same dentist means your care is guided by someone who understands your history, monitors changes over time, and builds a genuine relationship with you and your family.',
  },
  {
    title: 'Gentle, Unhurried Care',
    body: 'Dental visits should never feel rushed. We prioritize clear communication, patient comfort, and thoughtful treatment planning, giving you the time and confidence to make informed decisions.',
  },
  {
    title: 'Comprehensive Dentistry',
    body: 'From preventive checkups and cosmetic improvements to restorative treatments, implants, and emergency care, we provide complete dentistry designed around your long-term oral health.',
  },
  {
    title: 'Trusted Local Care',
    body: 'Conveniently located in Fulton Ranch, we proudly care for patients from Chandler, Ocotillo, Sun Lakes, and surrounding communities with a personal, relationship-focused approach.',
  },
] as const;

export default function WhyChooseUs() {
  const [leadRef, leadIn] = useScrollReveal();

  return (
    <section className="py-section">
      <div className="lg:px-site max-w-[90%] mx-auto">

        {/* Lead */}
        <p
         ref={leadRef as React.RefObject<HTMLParagraphElement>}
        className={[
            'font-serif font-light text-3xl text-center lg:text-[clamp(40px,4.6vw,80px)] leading-[1.3] tracking-[-0.01em] text-cream',
            '',
            'transition-all duration-1000 ease-out',
            leadIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ].join(' ')}
        >
        Why patients choose{' '}
        <em className="not-italic text-coral">Promenade Dental</em>.
        </p>

        {/* 2-col meta grid — stacked on mobile, 2-col on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12 md:mt-16">
          {META.map((item, i) => (
            <MetaCard key={item.title} item={item} delay={i * 0.09} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function MetaCard({
  item,
  delay,
  index
}: {
  item: { title: string; body: string};
  delay: number;
  index:number 
}) {
  const [ref, inView] = useScrollReveal();
  return (
    <div
  ref={ref as React.RefObject<HTMLDivElement>}
  className="
    group
    relative
    overflow-hidden
    rounded-[28px]
    border border-white/10
    bg-white/[0.02]
    backdrop-blur-sm
    p-8 lg:p-10
    transition-all duration-1000 ease-out
    hover:border-coral/30
    hover:bg-white/[0.04]
  "
  style={{
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : 'translateY(34px)',
    transitionDelay: `${delay}s`,
  }}
>
    <span className="absolute top-1 lg:top-6 right-6 text-coral/40 font-serif text-3xl">
  0{index + 1}
</span>
      <h4 className="font-serif text-[24px] lg:text-[28px] text-ink mb-4">
  {item.title}
</h4>

<p className="text-muted text-[15px] lg:text-[16px] leading-[1.9] max-w-[42ch]">
  {item.body}
</p>
    </div>
  );
}


