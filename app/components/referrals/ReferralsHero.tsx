import { Check } from 'lucide-react'
import Reveal from '../common/Reveal'

const BADGES = ['$50 for your friend', '$50 for you', 'No limit on referrals']

export default function ReferralsHero() {
  return (
    <section className="relative overflow-hidden pb-[clamp(36px,4vw,56px)] pt-[clamp(120px,15vw,184px)]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(60% 70% at 74% 16%, rgba(232,154,114,.13), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-site">
        <Reveal className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral" delay={0}>
          Refer a friend
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-[18px] font-serif text-[clamp(40px,6.6vw,82px)] font-light leading-[1] tracking-[-0.025em] text-ivory">
            Send a friend our way.
            <br />
            <em className="font-normal italic text-coral">We&rsquo;ll thank you both.</em>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-[22px] max-w-[54ch] text-[clamp(16px,1.4vw,19px)] font-light leading-[1.6] text-ivory-2">
            If someone you know has been putting off the dentist &mdash; or just hasn&rsquo;t
            found one they trust &mdash; introduce them to Dr.&nbsp;Shriya. They&rsquo;ll be
            welcomed like family, and you&rsquo;ll both get a little something for it.
          </p>
        </Reveal>

        <Reveal className="mt-[26px] flex flex-wrap gap-2.5" delay={0.15}>
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-ivory/[0.04] px-4 py-[9px] text-[12.5px] tracking-[0.03em] text-ivory-2"
            >
              <Check className="h-3.5 w-3.5 stroke-[2.4] text-coral" />
              {badge}
            </span>
          ))}
        </Reveal>

        <Reveal className="mt-[30px] flex flex-wrap items-center gap-3.5" delay={0.2}>
          <a
            href="#refer"
            className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-coral px-[30px] py-[17px] font-sans text-sm font-semibold uppercase tracking-[0.05em] text-bg shadow-[0_20px_44px_-18px_rgba(232,154,114,.7)] transition hover:-translate-y-0.5 hover:bg-ivory"
          >
            Refer a friend
          </a>
          <a
            href="tel:+14808028188"
            className="whitespace-nowrap rounded-full border border-ivory/30 px-[22px] py-[15px] text-[13px] tracking-[0.03em] text-ivory transition hover:border-ivory/70"
          >
            Call (480) 802-8188
          </a>
        </Reveal>

        <Reveal
          className="relative mt-[30px] grid grid-cols-1 items-center gap-5 overflow-hidden rounded-[26px] border border-line px-[clamp(30px,4vw,46px)] py-[clamp(30px,4vw,46px)] sm:grid-cols-[1fr_auto_1fr]"
          delay={0.25}
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10 rounded-[26px]"
            style={{
              background: 'linear-gradient(135deg, rgba(232,154,114,.08), transparent 62%)',
            }}
          />
          <div className="text-center">
            <b className="block font-serif text-[clamp(46px,8vw,72px)] font-light leading-[0.9] text-coral">
              $50
            </b>
            <span className="mt-2.5 block text-sm text-ivory-2">
              off your friend&rsquo;s first visit
            </span>
          </div>
          <div className="rotate-90 text-center font-serif text-[34px] text-muted sm:rotate-0">+</div>
          <div className="text-center">
            <b className="block font-serif text-[clamp(46px,8vw,72px)] font-light leading-[0.9] text-coral">
              $50
            </b>
            <span className="mt-2.5 block text-sm text-ivory-2">
              credit toward your next visit
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}