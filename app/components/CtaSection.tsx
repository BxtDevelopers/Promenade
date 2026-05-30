"use client";
import { useEffect, useRef, useState } from "react";
import { Phone, ArrowRight, Clock, Star } from "lucide-react";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
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
    <section id="cta" className="bg-white  overflow-hidden" ref={ref}>
      <div className="w-[90%] mx-auto">
        <div className="relative rounded-[2.5rem] bg-[#1A365D] overflow-hidden">

          {/* Decorative background shapes */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#ffa07a]/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full border border-white/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full border border-white/5" />
          </div>

          {/* Content */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-6 lg:p-20">

            {/* Left */}
            <div
              className="transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-30px)",
              }}
            >
              {/* Pill */}
              <div className="inline-flex items-center gap-2 bg-[#ffa07a] text-white text-[12px] font-medium font-['Poppins'] tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Limited Spots This Month
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-['Cormorant_Garamond'] text-white leading-tight mb-6">
                Your Best Smile{" "}
                <span className="italic text-[#F4A87C]">Starts Today</span>
              </h2>

              <p className="text-[16px] text-white/70 font-['Poppins'] font-light leading-relaxed mb-8 max-w-md">
                New patients get a complimentary exam and X-rays on their first visit — a $200 value, on us. No strings, no pressure, just exceptional care.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-6 mb-10">
                {[
                  { icon: Star, text: "4.9 Google Rating" },
                  { icon: Clock, text: "Same-day Appointments" },
                  { icon: Phone, text: "Call in Under 60 Seconds" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-[#F4845F]" />
                    <span className="text-[14px] text-white/70 font-['Poppins'] font-light">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 bg-[#ffa07a] text-white font-semibold font-['Poppins'] text-[15px] px-9 py-4 rounded-full hover:bg-[#d05a24] transition-all duration-300 shadow-xl hover:shadow-[0_8px_30px_rgba(232,101,42,0.5)]"
                >
                  Claim My Exam
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white font-semibold font-['Poppins'] text-[15px] px-9 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  (555) 123-4567
                </a>
              </div>
            </div>

            {/* Right — offer card */}
            <div
              className="transition-all duration-700 delay-200"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(30px)",
              }}
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
                {/* Header */}
                <div className="flex flex-col-reverse md:flex-row items-start justify-between mb-7">
                  <div>
                    <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-[#ffa07a] font-['Poppins'] mb-1">
                      New Patient Offer
                    </p>
                    <h3 className="text-3xl font-light font-['Cormorant_Garamond'] text-[#1A365D] leading-tight">
                      First Visit Package
                    </h3>
                  </div>
                  <div className="lg:text-right">
                    <span className="block text-[13px] line-through text-[#94A3B8] font-['Poppins']">$200 value</span>
                    <span className="block text-2xl font-bold font-['Poppins'] text-[#ffa07a]">99$</span>
                  </div>
                </div>

                {/* Included items */}
                <div className="space-y-3 mb-7">
                  {[
                    "Comprehensive oral examination",
                    "Full set of digital X-rays",
                    "Personalised treatment consultation",
                    "Smile goals assessment",
                    "No obligation, no pressure",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#1A365D] flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
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
                    className="block w-full text-center bg-[#1A365D] text-white font-semibold font-['Poppins'] text-[15px] py-4 rounded-xl hover:bg-[#ffa07a] transition-colors duration-300"
                  >
                    Book My First Visit →
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