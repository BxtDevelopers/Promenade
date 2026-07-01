import { ShieldCheck } from 'lucide-react'
import Reveal from '../common/Reveal'

export default function WarrantyGuarantee() {
  return (
    <section className="bg-bg-2 py-[clamp(60px,7vw,100px)]">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal
          className="relative overflow-hidden rounded-[26px] border border-line px-[clamp(40px,5vw,68px)] py-[clamp(40px,5vw,68px)] text-center"
          delay={0}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: 'radial-gradient(80% 120% at 50% 0, rgba(232,154,114,.08), transparent 60%)',
            }}
          />
          <div className="relative mx-auto mb-[22px] flex h-[58px] w-[58px] items-center justify-center rounded-full border border-coral/50">
            <ShieldCheck className="h-[30px] w-[30px] text-coral" strokeWidth={1.5} />
          </div>
          <div className="relative text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            We stand behind our work
          </div>
          <h2 className="relative mt-[10px] font-serif text-[clamp(30px,4.2vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-ivory">
            A guarantee, <em className="italic font-normal text-coral">not just a promise</em>.
          </h2>
          <p className="relative mx-auto mt-5 max-w-[56ch] text-[16px] font-light leading-[1.7] text-muted">
            The same dentists who do your work stand behind it &mdash; so you can invest in your
            smile with confidence. Keep your routine visits with us, and if covered dental work
            fails under normal use, we&apos;ll take care of it.
          </p>
        </Reveal>
      </div>
    </section>
  )
}