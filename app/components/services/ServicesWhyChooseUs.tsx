'use client';

import { useScrollReveal } from "@/app/lib/useScrollReveal";

const META = [
  {
    title: 'Care Led by Dr. Shriya',
    body: 'Every patient is cared for by Dr. Shriya Sarin, whose approach combines clear communication, gentle treatment, and personalized recommendations. Her focus is helping patients understand their options and feel comfortable with every step of their care.',
  },
  {
    title: 'Complete Treatment Planning',
    body: 'Dental concerns are rarely isolated. A missing tooth, cracked tooth, gum issue, bite problem, or cosmetic concern can affect other areas of your oral health. We evaluate the full picture before recommending treatment.',
  },
  {
    title: 'Conveniently Located in Fulton Ranch',
    body: 'Our office is located at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248, making dental care convenient for patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.',
  },
  {
    title: 'New Patients Welcome',
    body: 'Whether you need preventive care, cosmetic treatment, restorative dentistry, a second opinion, or urgent dental attention, our team welcomes new patients and is here to help you take the next step with confidence.',
  },
] as const;

export default function WhyChooseUs() {
  const [leadRef, leadIn] = useScrollReveal();

  return (
    <section className="py-20 bg-bg-2">
      <div className="lg:px-site max-w-[90%] mx-auto">

        {/* Lead */}
        <p
  ref={leadRef as React.RefObject<HTMLParagraphElement>}
  className={[
    'font-serif font-light text-3xl lg:text-[clamp(40px,4.6vw,80px)] leading-[1.3] tracking-[-0.01em] text-ivory-2 text-center max-w-5xl mx-auto',
    'transition-all duration-1000 ease-out',
    leadIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
  ].join(' ')}
>
  Why choose{' '}
  <em className="not-italic text-coral">Promenade Dental</em>{' '}
  for dental treatment?
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
    <span className="absolute top-6 right-6 text-coral/40 font-serif text-3xl">
  0{index + 1}
</span>
      <h4 className="font-serif text-[24px] lg:text-[28px] text-white mb-4">
  {item.title}
</h4>

<p className="text-muted text-[15px] lg:text-[16px] leading-[1.9] lg:max-w-[80%]">
  {item.body}
</p>
    </div>
  );
}