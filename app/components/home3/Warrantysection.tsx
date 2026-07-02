import { Check, ArrowRight, ShieldCheck, Wallet, Users } from 'lucide-react'
import Link from 'next/link'

const points = [
  {
    title: 'Clear pricing upfront',
    desc: 'You approve every step and cost before anything starts — no surprise bills.',
    icon: Wallet,
  },
  {
    title: 'Workmanship guaranteed',
    desc: "If something we placed doesn't hold up under normal use, we'll make it right.",
    icon: ShieldCheck,
  },
  {
    title: 'One team, accountable',
    desc: 'The same dentists who do the work stand behind it, visit after visit.',
    icon: Users,
  },
]

export default function WarrantySection() {
  return (
    <section
      id="warranty"
      className="py-16 md:py-24 lg:py-[clamp(60px,7vw,100px)] px-4 md:px-8"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Main Asymmetrical Dark Card */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-bg-2 shadow-2xl shadow-slate-900">
          
          {/* Ambient Background Gradients */}
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(232,154,114,0.15),transparent_60%)] pointer-events-none blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 p-8 md:p-14 lg:p-20">
            
            {/* Left Column: The Hook (Spans 5 cols on desktop) */}
            <div className="flex flex-col justify-center text-left lg:col-span-5">
              <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e89a72]/10 border border-[#e89a72]/20">
                <Check className="h-6 w-6 text-[#e89a72]" strokeWidth={3} />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#e89a72]">
                Our promise
              </span>

              <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-[clamp(40px,4vw,56px)] font-light leading-[1.05] tracking-tight text-white">
                No surprises — <br className="hidden lg:block" />
                <em className="italic text-[#e89a72]">we stand behind our work.</em>
              </h2>

              <p className="mt-6 max-w-[48ch] text-base leading-relaxed font-light text-slate-300">
                You&apos;ll know the plan and the price before we begin, and the dentistry we do is backed by our comprehensive care guarantee.
              </p>

              <div className="mt-10">
                <Link
                  href="/warranty"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#e89a72] px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-slate-900 transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95"
                >
                  Read full guarantee
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: The Value Props (Spans 6 cols on desktop, offset by 1) */}
            <div className="flex flex-col justify-center gap-4 lg:col-span-6 lg:col-start-7">
              {points.map((p, index) => {
                const Icon = p.icon
                return (
                  <div
                    key={p.title}
                    className="group relative flex items-start gap-5 rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#e89a72]/40 hover:bg-white/10"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-800 border border-white/10 transition-colors duration-300 group-hover:border-[#e89a72]/50">
                      <Icon className="h-5 w-5 text-[#e89a72]" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-serif text-[20px] mb-1.5 text-white transition-colors duration-300 group-hover:text-[#e89a72]">
                        {p.title}
                      </h3>
                      <p className="text-[15px] font-light leading-relaxed text-slate-400">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}