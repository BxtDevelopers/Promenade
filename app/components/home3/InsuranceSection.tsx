import { ShieldCheck } from 'lucide-react'

const carriers = ['Delta Dental', 'Cigna', 'MetLife', 'Aetna']

export default function InsuranceSection() {
  return (
    <section id="insurance" className="py-16 md:py-24 lg:py-[clamp(60px,7vw,100px)] px-4 md:px-8">
      <div className="mx-auto max-w-[1240px]">
        {/* Main Vibrant Coral Card */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-coral/60 p-8 md:p-14 lg:p-20 shadow-xl shadow-coral/60">
          
          {/* Subtle overlay gradient to give the coral some depth */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,white_0%,transparent_40%,rgba(0,0,0,0.1)_100%)] opacity-30 pointer-events-none" />

          <div className="relative z-10 grid items-center grid-cols-1 lg:grid-cols-[1.2fr_.8fr] gap-12 lg:gap-20">
            
            {/* Left Side: The Pitch */}
            <div className="text-left">
              {/* Pill badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 backdrop-blur-sm border border-white/30 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-coral" strokeWidth={2.5} />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-coral">
                  Insurance
                </span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-[clamp(36px,4.5vw,56px)] font-light leading-[1.05] tracking-tight text-white">
                Most PPO plans <br className="hidden lg:block" />
                <em className="italic text-white">accepted.</em>
              </h2>

              <p className="mt-6 max-w-[42ch] text-base md:text-lg leading-relaxed font-medium text-slate-800">
                We&apos;re in-network with most major plans and we&apos;ll maximize your benefits for you — zero surprises, just great care.
              </p>
            </div>

            {/* Right Side: Carrier Cards */}
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {carriers.map(c => (
                <div
                  key={c}
                  className="group flex items-center justify-center rounded-2xl bg-white px-4 py-8 text-center shadow-lg shadow-orange-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/20"
                >
                  <span className="font-serif text-lg md:text-xl font-medium text-slate-800 transition-colors duration-300 group-hover:text-[#e89a72]">
                    {c}
                  </span>
                </div>
              ))}
              
              {/* Reassurance text below the grid */}
              <div className="col-span-2 mt-2 text-center">
                <p className="text-sm font-semibold text-slate-900/70 tracking-wide">
                  + Many other plans accepted
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}