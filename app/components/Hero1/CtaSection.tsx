"use client";
import { useEffect, useRef, useState } from "react";
import { Phone, ArrowRight, Clock, Star } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta" className="overflow-hidden" ref={ref}>
      <div className="w-[90%] mx-auto">
        <div className="relative rounded-[2.5rem] bg-[#1A365D] overflow-hidden">

          {/* ── BACKGROUND DECORATION ── */}
          <div className="absolute inset-0 pointer-events-none">

            {/* Fine dot grid — full cover */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dotgrid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dotgrid)" />
            </svg>

            {/* Salmon radial wipe — dims the dot grid on the right so card pops */}
            <div className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse 55% 80% at 75% 50%, rgba(26,54,93,0.92) 30%, transparent 100%)" }} />

            {/* Large warm glow blob top-right */}
            <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(255,160,122,0.22) 0%, transparent 70%)" }} />

            {/* Smaller warm glow bottom-left */}
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-2xl"
              style={{ background: "radial-gradient(circle, rgba(255,160,122,0.1) 0%, transparent 70%)" }} />

            {/* Diagonal salmon stripe — top-left to mid */}
            <div className="absolute -top-10 -left-10 w-[420px] h-[2px] opacity-20"
              style={{ background: "linear-gradient(90deg, transparent, #ffa07a, transparent)", transform: "rotate(35deg)", transformOrigin: "left center" }} />
            <div className="absolute top-16 -left-10 w-[320px] h-px opacity-10"
              style={{ background: "linear-gradient(90deg, transparent, #ffa07a, transparent)", transform: "rotate(35deg)", transformOrigin: "left center" }} />

            {/* Large faint ring — left side */}
            <svg className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.05]" viewBox="0 0 500 500" fill="none">
              <circle cx="250" cy="250" r="240" stroke="white" strokeWidth="1.5" />
              <circle cx="250" cy="250" r="180" stroke="#ffa07a" strokeWidth="1" strokeDasharray="5 9" />
              <circle cx="250" cy="250" r="110" stroke="white" strokeWidth="0.8" strokeDasharray="3 7" />
            </svg>

            {/* Corner cross marks */}
            {[
              { top: "10%", left: "6%"  },
              { top: "10%", right: "6%" },
              { bottom: "10%", left: "6%" },
              { bottom: "10%", right: "6%" },
            ].map((pos, i) => (
              <svg key={i} className="absolute w-5 h-5 opacity-[0.15]" style={pos} viewBox="0 0 20 20" fill="#ffa07a">
                <rect x="8.5" y="0" width="3" height="20" rx="1.5" />
                <rect x="0" y="8.5" width="20" height="3" rx="1.5" />
              </svg>
            ))}

            {/* Thin horizontal rule lines */}
            <div className="absolute left-0 right-0 top-[30%] h-px opacity-[0.06]"
              style={{ background: "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)" }} />
            <div className="absolute left-0 right-0 top-[70%] h-px opacity-[0.06]"
              style={{ background: "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)" }} />
          </div>

          {/* ── Content ── */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-6 lg:p-20">

            {/* Left */}
            <div
              className="transition-all duration-700"
              style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-30px)" }}
            >
              <div className="inline-flex items-center gap-2 bg-[#ffa07a]/20 border border-[#ffa07a]/40 text-[#ffa07a] text-[12px] font-medium font-['Poppins'] tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffa07a] animate-pulse" />
                Limited Spots This Month
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-['Sora'] text-white leading-tight mb-6">
                Your Best Smile<br />
                <span className="italic text-[#ffa07a]">Starts Today</span>
              </h2>

              <p className="text-xl text-white/65 font-['Poppins'] font-medium leading-relaxed mb-8 max-w-xl">
                New patients get a complimentary exam and X-rays on their first visit — a $200 value, on us. No strings, no pressure, just exceptional care.
              </p>

              <div className="flex flex-wrap gap-5 mb-10">
                {[
                  { icon: Star, text: "4.9 Google Rating" },
                  { icon: Clock, text: "Same-day Appointments" },
                  { icon: Phone, text: "Call in Under 60 Seconds" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                    <item.icon className="w-3.5 h-3.5 text-[#ffa07a]" />
                    <span className="text-sm text-white/70 font-['Poppins'] font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 bg-[#ffa07a] text-white font-semibold font-['Poppins'] text-[15px] px-9 py-4 rounded-full hover:bg-white hover:text-[#1A365D] transition-all duration-300 shadow-xl shadow-[#ffa07a]/20"
                >
                  Claim My Exam
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-semibold font-['Poppins'] text-[15px] px-9 py-4 rounded-full hover:border-white/50 hover:bg-white/8 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  (555) 123-4567
                </a>
              </div>
            </div>

            {/* Right — offer card */}
            <div
              className="transition-all duration-700 delay-200"
              style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(30px)" }}
            >
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl"
                  style={{ background: "linear-gradient(90deg, #1A365D 0%, #ffa07a 100%)" }} />
                <div className="absolute bottom-8 right-8 grid grid-cols-4 gap-1.5 opacity-10 pointer-events-none">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-[#1A365D]" />
                  ))}
                </div>

                <div className="flex flex-col-reverse md:flex-row items-start justify-between mb-7">
                  <div>
                    <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-[#ffa07a] font-['Poppins'] mb-1">New Patient Offer</p>
                    <h3 className="text-4xl font-bold font-['Sora'] text-[#1A365D] leading-tight">First Visit Package</h3>
                  </div>
                  <div className="lg:text-right mb-4 md:mb-0">
                    <span className="block text-lg line-through text-[#94A3B8] font-['Poppins']">$200 value</span>
                    <span className="block text-3xl font-bold font-['Poppins'] text-[#ffa07a]">$99</span>
                  </div>
                </div>

                <div className="space-y-3 mb-7">
                  {[
                    "Comprehensive oral examination",
                    "Full set of digital X-rays",
                    "Personalised treatment consultation",
                    "Smile goals assessment",
                    "No obligation, no pressure",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 group">
                      <div className="w-5 h-5 rounded-full bg-[#ffa07a]/10 border border-[#ffa07a]/30 flex items-center justify-center shrink-0 group-hover:bg-[#1A365D] group-hover:border-[#1A365D] transition-all duration-300">
                        <svg className="w-3 h-3 text-[#ffa07a] group-hover:text-white transition-colors duration-300" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-[15px] text-[#1A365D] font-['Poppins'] font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 w-full text-center bg-[#1A365D] text-white font-semibold font-['Poppins'] text-[15px] py-4 rounded-xl hover:bg-[#ffa07a] transition-colors duration-300 group"
                  >
                    Book My First Visit
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-center text-[12px] text-[#94A3B8] font-['Poppins'] mt-3">
                    Offer valid for new patients only · Limited availability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}