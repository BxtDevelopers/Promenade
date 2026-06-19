'use client';

interface ServiceCard {
  title: string;
  description: string;
  bestFor: string;
}

interface ServiceGroup {
  eyebrow: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  cards: ServiceCard[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    eyebrow: 'Family & Preventive Dentistry',
    heading: 'Healthy teeth start with showing up.',
    body: 'Preventive care keeps your teeth, gums, and mouth healthy before problems become serious — for children, adults, and seniors alike. We help families build healthy dental habits and monitor changes over time.',
    ctaLabel: 'Explore Family Dentistry',
    ctaHref: '/services/general-family-dentistry',
    cards: [
      {
        title: 'Dental Exams & Cleanings',
        description: 'Routine exams and professional cleanings detect cavities, gum disease, enamel wear, and early signs of oral health problems. Cleanings remove plaque and tartar that brushing cannot reach.',
        bestFor: 'Routine checkups · Plaque buildup · Preventive care · New patient evaluation',
      },
      {
        title: "Children's Dentistry",
        description: 'Early care helps young patients feel comfortable while protecting growing teeth and gums. We monitor development, prevent cavities, and build positive dental habits.',
        bestFor: "Kids' dental visits · Family care · Cavity prevention · Dental education",
      },
      {
        title: 'Gum Disease Treatment',
        description: 'Gum disease can cause bleeding gums, bad breath, recession, and tooth loss if left untreated. Treatment may include deep cleaning, periodontal maintenance, and home care guidance.',
        bestFor: 'Bleeding gums · Gum infection · Periodontal disease · Bad breath',
      },
      {
        title: 'Night Guards for Grinding',
        description: 'A custom night guard protects teeth from grinding and clenching during sleep — preventing worn enamel, jaw soreness, headaches, and cracked teeth.',
        bestFor: 'Bruxism · Jaw tension · Worn teeth · Cracked tooth prevention',
      },
    ],
  },
  {
    eyebrow: 'Cosmetic Dentistry',
    heading: 'The smile you`ve imagined, made real.',
    body: 'Cosmetic dentistry improves your smile while considering tooth health, gum balance, and natural-looking results. Dr. Shriya plans every treatment around your goals, facial features, and oral health.',
    ctaLabel: 'Explore Cosmetic Dentistry',
    ctaHref: '/services/cosmetic-dentistry',
    cards: [
      {
        title: 'Teeth Whitening',
        description: 'Professional whitening brightens stains from coffee, tea, wine, and aging. We offer ZOOM! in-office whitening for patients who want dramatic results under expert supervision.',
        bestFor: 'Yellow teeth · Stained teeth · Dull smile · ZOOM! whitening',
      },
      {
        title: 'Porcelain Veneers',
        description: 'Thin custom porcelain restorations placed on the front surface of teeth to improve color, shape, and spacing — for chipped, stained, small, or uneven teeth.',
        bestFor: 'Smile enhancement · Chipped teeth · Gaps · Permanent cosmetic improvement',
      },
      {
        title: 'Cosmetic Dental Bonding',
        description: 'Tooth-colored material repairs small chips, closes minor gaps, and reshapes uneven edges. A conservative option for smaller cosmetic changes with minimal prep.',
        bestFor: 'Chipped tooth · Small gaps · Uneven edges · Minor cosmetic fixes',
      },
      {
        title: 'Smile Makeover',
        description: 'A smile makeover combines multiple cosmetic or restorative treatments into one planned result — whitening, veneers, bonding, crowns, or tooth replacement.',
        bestFor: 'Multiple cosmetic concerns · Full smile improvement · Worn or uneven smile',
      },
    ],
  },
  {
    eyebrow: 'Restorative Dentistry',
    heading: 'Rebuild strength. Protect what`s left.',
    body: 'Restorative dentistry repairs teeth that are damaged, decayed, infected, or missing. The goal is to rebuild strength, protect natural teeth, restore chewing comfort, and prevent future complications.',
    ctaLabel: 'Explore Restorative Dentistry',
    ctaHref: '/services/crowns-bridges',
    cards: [
      {
        title: 'Tooth-Colored Fillings',
        description: 'Fillings repair cavities using material matched to your natural tooth color — stopping decay from spreading and restoring normal tooth shape.',
        bestFor: 'Cavities · Small decay · Replacing old fillings · Minor tooth repair',
      },
      {
        title: 'Dental Crowns',
        description: 'A crown covers and protects a weakened or damaged tooth — recommended for cracked, broken, or heavily filled teeth, and after root canal therapy.',
        bestFor: 'Cracked teeth · Broken teeth · Large fillings · Post-root canal restoration',
      },
      {
        title: 'Dental Bridges',
        description: 'A bridge replaces one or more missing teeth by anchoring an artificial tooth to neighboring teeth or implants — restoring chewing and preventing shifting.',
        bestFor: 'Missing teeth · Fixed tooth replacement · Alternative to removable dentures',
      },
      {
        title: 'Root Canal Therapy',
        description: 'Root canal therapy treats infection inside a tooth — removing infected tissue, relieving pain, and preserving the natural tooth whenever possible.',
        bestFor: 'Severe toothache · Infected tooth · Deep decay · Dental abscess',
      },
      {
        title: 'Tooth Extractions',
        description: 'Extraction is recommended when a tooth cannot be saved due to severe decay, fracture, or infection. Dr. Shriya discusses replacement options when appropriate.',
        bestFor: 'Severely damaged teeth · Non-restorable teeth · Infection · Painful teeth',
      },
      {
        title: 'Dentures & Partial Dentures',
        description: 'Removable appliances that replace multiple missing teeth — improving chewing, speech, facial support, and smile appearance.',
        bestFor: 'Several missing teeth · Full tooth loss · Removable tooth replacement',
      },
    ],
  },
  {
    eyebrow: 'Dental Implants',
    heading: 'A permanent tooth that feels like your own.',
    body: 'Dental implants replace missing teeth with stable, natural-looking restorations. Missing teeth affect how you chew, pressure other teeth, cause shifting, and affect bite balance — implant planning considers all of it.',
    ctaLabel: 'Explore Dental Implants',
    ctaHref: '/services/dental-implants',
    cards: [
      {
        title: 'Single Tooth Implant',
        description: 'Replaces one missing tooth without relying on neighboring teeth for support — a fixed, natural-looking replacement that stands entirely on its own.',
        bestFor: 'One missing tooth · Fixed replacement · Avoiding a traditional bridge',
      },
      {
        title: 'Implant-Supported Bridge',
        description: 'Replaces multiple missing teeth using implants as anchors — reducing the need to prepare healthy neighboring teeth while restoring full function.',
        bestFor: 'Several missing teeth · Stronger bridge support · Fixed replacement option',
      },
      {
        title: 'Implant-Supported Dentures',
        description: 'More stable than traditional removable dentures — improving chewing comfort and reducing movement while speaking or eating.',
        bestFor: 'Loose dentures · Multiple missing teeth · Full-arch tooth replacement',
      },
    ],
  },
  {
    eyebrow: 'Emergency Dentistry',
    heading: 'Urgent care when you need it most.',
    body: 'Tooth pain, swelling, broken teeth, and knocked-out teeth should not be ignored — they may involve infection, trauma, or nerve damage. Call Promenade Dental and our team will guide you on the next step.',
    ctaLabel: 'Call for Emergency Care',
    ctaHref: 'tel:+14808028188',
    cards: [
      {
        title: 'Toothache Relief',
        description: 'Tooth pain may be caused by cavities, infection, gum disease, cracked teeth, or bite pressure. The right treatment depends on the cause — an exam is always the first step.',
        bestFor: 'Severe toothache · Throbbing pain · Sensitivity · Dental infection',
      },
      {
        title: 'Broken or Chipped Tooth',
        description: 'A broken, chipped, or cracked tooth should be evaluated to determine whether bonding, a filling, a crown, or root canal therapy is the right path.',
        bestFor: 'Chipped tooth · Broken tooth · Cracked tooth · Damaged restoration',
      },
      {
        title: 'Knocked-Out Tooth',
        description: 'A knocked-out permanent tooth is time-sensitive. Call us immediately — in some cases, fast action may improve the chances of saving the tooth.',
        bestFor: 'Dental trauma · Knocked-out tooth · Sports injury · Accident-related tooth loss',
      },
    ],
  },
];

// ─── Card ─────────────────────────────────────────────────────────────────────


import Link from 'next/link';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

// Types assumed based on your original code
interface ServiceCard {
  title: string;
  description: string;
  bestFor: string;
}

interface ServiceGroup {
  eyebrow: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  cards: ServiceCard[];
}

function ServiceCard({ card, delay, isAlternate }: { card: ServiceCard; delay: number; isAlternate: boolean }) {
  const [ref, inView] = useScrollReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'group relative flex flex-col rounded-[20px] border p-6 lg:p-7 transition-colors duration-500',
        isAlternate 
          ? 'border-bg/30 bg-bg hover:border-coral hover:bg-bg/90' 
          : 'border-white/[0.07] bg-white/[0.02] hover:border-coral/25 hover:bg-white/[0.035]'
      ].join(' ')}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s cubic-bezier(0.16,0.84,0.34,1) ${delay}s, border-color 0.4s ease, background-color 0.4s ease`,
      }}
    >
      {/* Coral dot */}
      <span className="w-[6px] h-[6px] rounded-full bg-coral/60 mb-5 group-hover:bg-coral transition-colors duration-300 shrink-0" />

      <h4 className={[
        'font-serif font-normal text-[17px] lg:text-[18px] mb-3 leading-snug',
        isAlternate ? 'text-white' : 'text-ivory'
      ].join(' ')}>
        {card.title}
      </h4>

      <p className={[
        'text-[13.5px] lg:text-[14px] font-light leading-[1.85] flex-1 mb-6',
        isAlternate ? 'text-ivory/90' : 'text-muted'
      ].join(' ')}>
        {card.description}
      </p>

      {/* Best for — pinned to bottom */}
      <div className={`mt-auto pt-4 border-t ${isAlternate ? 'border-white/10' : 'border-white/[0.06]'}`}>
        <span className="text-coral font-medium uppercase tracking-[0.14em] text-[9.5px] block mb-1">
          Best for
        </span>
        <p className={[
          'text-[12px] font-light leading-[1.7]',
          isAlternate ? 'text-white' : 'text-ivory'
        ].join(' ')}>
          {card.bestFor}
        </p>
      </div>
    </div>
  );
}

// ─── Single group section ─────────────────────────────────────────────────────

function ServiceGroupSection({ group, index }: { group: ServiceGroup; index: number }) {
  const [headRef, headIn] = useScrollReveal();

  // Alternating background logic
  const isAlternate = index % 2 === 0;
  const bgClass = isAlternate ? 'bg-white' : 'bg-transparent';

  return (
    <div className={`py-16 md:py-20 lg:py-24 border-t ${isAlternate ? 'border-bg/10' : 'border-white/[0.06]'} first:border-t-0 ${bgClass}`}>
      {/* Inner container to keep content aligned */}
      <div className="px-site max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.65fr] gap-12 lg:gap-[clamp(48px,6vw,96px)] items-start">

          {/* Left — sticky copy */}
          <div
            ref={headRef as React.RefObject<HTMLDivElement>}
            className="lg:sticky lg:top-28"
            style={{
              opacity: headIn ? 1 : 0,
              transform: headIn ? 'none' : 'translateY(24px)',
              transition: 'opacity 0.75s ease, transform 0.75s cubic-bezier(0.16,0.84,0.34,1)',
            }}
          >
            {/* Index + eyebrow row */}
            <div className="flex items-center gap-3 mb-5 text-2xl lg:text-4xl font-serif">
              <span className={`font-serif tabular-nums text-coral`}>
                0{index + 1}
              </span>
              <span className={`w-5 h-px ${isAlternate ? 'bg-coral/50' : 'bg-coral/30'}`} />
              <p className="text-coral tracking-eyebrow uppercase font-medium">
                {group.eyebrow}
              </p>
            </div>

            <h2
              className={`font-serif font-light leading-[1.08] tracking-[-0.02em] ${isAlternate ? 'text-bg' : 'text-ivory'}`}
              style={{ fontSize: 'clamp(26px, 3.2vw, 32px)' }}
            >
              {group.heading}
            </h2>

            <p className={`text-body-lg font-light leading-[1.85] mt-5 max-w-[40ch] ${isAlternate ? 'text-bg/80' : 'text-muted'}`}>
              {group.body}
            </p>

            <div className="mt-4 pt-6">
              <Link
                href={group.ctaHref}
                className={[
                  'inline-flex items-center gap-2.5 text-[13px] font-medium tracking-[0.02em] rounded-full border px-5 py-2.5 transition-all duration-300',
                  isAlternate 
                    ? 'text-bg border-bg/20 hover:border-bg/50 hover:bg-bg/5' 
                    : 'text-ivory border-ivory/15 hover:border-ivory/50 hover:bg-ivory/[0.04]'
                ].join(' ')}
              >
                {group.ctaLabel}
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="text-coral" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
            {group.cards.map((card, i) => (
              <ServiceCard key={card.title} card={card} delay={i * 0.07} isAlternate={isAlternate} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── Section header ───────────────────────────────────────────────────────────

function SectionHeader() {
  const [ref, inView] = useScrollReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="pb-14 md:pb-16 px-site max-w-[90%] mx-auto"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,0.84,0.34,1)',
      }}
    >
      <p className="text-coral text-[11px] tracking-eyebrow uppercase font-medium mb-5">
        Our Dental Services
      </p>

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-20">
        <h2
          className="font-serif font-light leading-[1.05] tracking-[-0.02em] text-ivory max-w-[16ch]"
          style={{ fontSize: 'clamp(36px, 4.8vw, 72px)' }}
        >
          Complete care, under{' '}
          <em className="not-italic text-coral">one roof.</em>
        </h2>

        <p className="text-muted text-[15px] font-light leading-[1.8] max-w-[42ch] lg:text-right lg:pb-1.5">
          From routine cleanings to full smile makeovers — every service at
          Promenade Dental is provided by Dr. Shriya in one calm, consistent
          environment.
        </p>
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function ServicesHub() {
  return (
    <section className="py-section border-t border-line bg-bg">
      {/* Header stays inside its own restricted width */}
      <SectionHeader />
      
      {/* The mapping wrapper loses the max-w-[90%] so the backgrounds can span 100% width */}
      <div className="flex flex-col">
        {SERVICE_GROUPS.map((group, i) => (
          <ServiceGroupSection key={group.eyebrow} group={group} index={i} />
        ))}
      </div>
    </section>
  );
}