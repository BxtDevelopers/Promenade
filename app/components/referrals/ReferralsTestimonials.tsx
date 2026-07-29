import { Star } from 'lucide-react'
import Reveal from '../common/Reveal'

const TESTIMONIALS = [
  {
    quote:
      "I'm terrified of the dentist, but the team helped me overcome the fear. I actually enjoy coming now.",
    name: 'Peter L.',
  },
  {
    quote:
      "Our whole family goes here \u2014 gentle and thorough, and our kids actually like the dentist now.",
    name: 'Sue Z.',
  },
  {
    quote: "Everyone here is so nice and professional. The best dental care I've had in my whole life.",
    name: 'Joyce F.',
  },
  {
    quote: "Friendly, honest, and never pushy. I've already sent two friends their way.",
    name: 'Roy R.',
  },
]

function Chip({ quote, name }: { quote: string; name: string }) {
  return (
    <div className="w-[min(390px,82vw)] shrink-0 rounded-[20px] border border-line bg-ink px-[26px] py-6">
      <div className="mb-3 flex gap-[3px] text-coral">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-coral text-coral" />
        ))}
      </div>
      <p className="font-serif text-[18px] font-light leading-[1.45] text-cream">{quote}</p>
      <cite className="mt-[14px] block text-[12px] not-italic uppercase tracking-[0.08em] text-muted">
        {name}
      </cite>
    </div>
  )
}

export default function ReferralsTestimonials() {
  const track = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section className="py-[clamp(74px,8vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal delay={0}>
          <div className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            In their words
          </div>
          <h2 className="mt-[14px] font-serif text-[clamp(30px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
            Real reviews from <em className="italic font-normal text-coral">real patients</em>.
          </h2>
        </Reveal>
      </div>

      <div
        className="mt-[clamp(40px,5vw,60px)] overflow-hidden"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)',
        }}
      >
        <div className="referrals-marquee-track flex w-max gap-[18px]">
          {track.map((t, i) => (
            <Chip key={`${t.name}-${i}`} quote={t.quote} name={t.name} />
          ))}
        </div>
      </div>

      <style>{`
        .referrals-marquee-track {
          animation: referrals-marquee 46s linear infinite;
        }
        .referrals-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes referrals-marquee {
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .referrals-marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}