/*
 * Updates applied based on design feedback:
 * - Typography: Updated heading typography to Poppins for stronger visual authority, and body/subtitle text to DM Sans to establish clear hierarchy and character[cite: 5].
 * - Cards & Components: Replaced the flat offer card with deep shadow layering, rounded corners matching the design system, and a tactile hover interaction[cite: 5].
 * - Micro-interactions & Motion: Refined the intersection observer entrance animations to be smoother and more purposeful, guiding attention without excessive motion[cite: 5].
 * - Whitespace: Introduced generous section padding and structured gap spacing to establish a consistent spatial logic[cite: 5].
 */

"use client";
import { useEffect, useRef, useState } from "react";
import { Phone, ArrowRight, Clock, Star, CheckCircle2 } from "lucide-react";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta" className=" py-24 lg:py-32 overflow-hidden relative" ref={ref}>
      <div className="w-[92%] max-w-7xl mx-auto">
        <div className="relative rounded-[3rem] bg-[#1A365D] overflow-hidden shadow-[0_30px_60px_rgba(26,54,93,0.15)]">

          {/* Distinctive Brand Elements & Background Shapes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#ffa07a]/15 blur-[80px]" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#FDE8D8]/10 blur-[60px]" />
            
            {/* Architectural accent lines */}
            <svg className="absolute right-0 top-0 w-1/2 h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M100 0 L50 100 L100 100 Z" fill="currentColor" className="text-white" />
            </svg>
          </div>

          {/* Content Container */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-12 items-center p-8 lg:p-20">

            {/* Left Column: Copy & Trust */}
            <div
              className="transition-all duration-1000 ease-[0.22,1,0.36,1]"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
              }}
            >
              {/* Pill */}
              <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-[#ffa07a] text-[13px] font-bold font-['DM_Sans'] tracking-[0.15em] uppercase px-5 py-2 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-[#ffa07a] animate-pulse" />
                Limited Spots This Month
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] text-white leading-[1.1] mb-6 tracking-tight">
                Your Best Smile <br />
                <span className="text-[#ffa07a] relative inline-block mt-2">
                  Starts Today.
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[#ffa07a]/20 -z-10 rounded-full" />
                </span>
              </h2>

              <p className="text-[17px] text-white/80 font-['DM_Sans'] font-medium leading-relaxed mb-10 max-w-lg">
                New patients receive a comprehensive exam and digital X-rays on their first visit — a $99 value. No hidden fees, no pressure, just exceptional care.
              </p>

              {/* Trust signals */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-8 mb-12">
                {[
                  { icon: Star, text: "4.9 Google Rating" },
                  { icon: Clock, text: "Same-day Appointments" },
                  { icon: Phone, text: "Call in Under 60s" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                    <item.icon className="w-4 h-4 text-[#ffa07a]" />
                    <span className="text-[14px] text-white/90 font-['DM_Sans'] font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-5">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 bg-[#ffa07a] text-[#1A365D] font-bold font-['DM_Sans'] text-[16px] px-9 py-4.5 rounded-full hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(255,160,122,0.25)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.3)]"
                >
                  Claim My Exam
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white font-bold font-['DM_Sans'] text-[16px] px-9 py-4.5 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  (555) 123-4567
                </a>
              </div>
            </div>

            {/* Right Column: Tactile Offer Card */}
            <div
              className="transition-all duration-1000 delay-200 ease-[0.22,1,0.36,1]"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
              }}
            >
              <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 group hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
                
                {/* Subtle card highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDE8D8] blur-[50px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 relative z-10 gap-4">
                  <div>
                    <p className="text-[13px] font-bold tracking-[0.2em] uppercase text-[#ffa07a] font-['DM_Sans'] mb-2">
                      Exclusive Offer
                    </p>
                    <h3 className="text-3xl lg:text-4xl font-bold font-['Poppins'] text-[#1A365D] leading-tight">
                      First Visit Package
                    </h3>
                  </div>
                  <div className="sm:text-right flex sm:flex-col items-center sm:items-end gap-3 sm:gap-0">
                    <span className="text-[15px] line-through text-[#1A365D]/40 font-['DM_Sans'] font-medium">$200 value</span>
                    <span className="text-4xl font-black font-['Poppins'] text-[#ffa07a] leading-none">$99</span>
                  </div>
                </div>

                {/* Included items */}
                <div className="space-y-4 mb-10 relative z-10">
                  {[
                    "Comprehensive oral examination",
                    "Full set of digital X-rays",
                    "Personalised treatment consultation",
                    "Smile goals assessment",
                    "No obligation, no pressure guarantee",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3.5">
                      <CheckCircle2 className="w-5 h-5 text-[#ffa07a] shrink-0 mt-0.5" />
                      <span className="text-[16px] text-[#1A365D]/80 font-['DM_Sans'] font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#1A365D]/10 pt-8 relative z-10">
                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 w-full bg-[#1A365D] text-white font-bold font-['DM_Sans'] text-[16px] py-4.5 rounded-full hover:bg-[#ffa07a] hover:text-[#1A365D] transition-colors duration-300 shadow-md hover:shadow-xl"
                  >
                    Book My First Visit
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <p className="text-center text-[13px] text-[#1A365D]/50 font-['DM_Sans'] font-medium mt-4 uppercase tracking-wider">
                    Valid for new patients only
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