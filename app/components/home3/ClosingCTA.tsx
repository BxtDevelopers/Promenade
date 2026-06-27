import Link from 'next/link'

const BASE = 'https://promenade-dental.vercel.app'

export default function ClosingCTA() {
  return (
    <section className="relative text-center overflow-hidden py-[clamp(84px,10vw,150px)]">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_50%,rgba(232,154,114,0.14),transparent_65%)]" />

      <div className="relative mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)]">
        <span className="block text-[11.5px] tracking-[0.32em] uppercase font-medium text-coral mb-[22px]">
          New patients welcome
        </span>

        <h2 className="rv font-serif font-light tracking-[-0.03em] leading-none text-ivory text-[clamp(40px,7vw,90px)]">
          Your best smile
          <br />
          <em className="italic text-coral">starts here.</em>
        </h2>

        <div className="rv flex items-center justify-center gap-[18px] mt-[42px] flex-wrap">
          <Link
            href={`${BASE}/contact-us`}
            className="inline-flex items-center gap-3 rounded-full font-sans font-semibold text-[14px] tracking-[0.05em] uppercase text-bg bg-coral no-underline whitespace-nowrap transition-all duration-300 hover:bg-ivory hover:-translate-y-0.5 px-[30px] py-[17px] shadow-[0_20px_44px_-18px_rgba(232,154,114,0.7)]"
          >
            Schedule my first visit →
          </Link>
          <Link
            href="tel:+14808028188"
            className="inline-block rounded-full text-ivory bg-transparent no-underline whitespace-nowrap font-sans text-[14px] tracking-[0.05em] uppercase font-medium transition-all duration-300 hover:border-ivory px-[30px] py-[17px] border border-[rgba(244,236,221,0.14)]"
          >
            Call (480) 802-8188
          </Link>
        </div>

        <div className="rv mt-12 text-[14px] font-light leading-[1.9] text-muted">
          <b className="text-ivory font-medium">Most major PPO plans accepted · New patients welcome</b>
          <br />
          Promenade Dental — Fulton Ranch · 4905 S. Alma School Road, Suite 1 · Chandler, AZ 85248
          <br />
          (480) 802-8188 · Mon–Fri 8am–7pm · Sat 9am–5pm
        </div>
      </div>
    </section>
  )
}