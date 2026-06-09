"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertCircle, Phone, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function EmergencyBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".emg-content",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        }
      );

      // Pulse the icon
      gsap.to(".emg-pulse", {
        scale: 1.15,
        duration: 0.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Marquee
      if (document.querySelector(".emg-marquee-inner")) {
        const inner = document.querySelector(".emg-marquee-inner") as HTMLElement;
        const totalWidth = inner.scrollWidth / 2;
        gsap.to(inner, {
          x: -totalWidth,
          duration: 18,
          ease: "none",
          repeat: -1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const strips = Array.from({ length: 6 }, () => [
    "Dental Emergency?",
    "Call Now →",
    "(480) 802-8188",
    "Same-Day Appointments",
    "·",
  ]).flat();

  return (
    <section ref={sectionRef} className="bg-[#fdfaf5] pb-24 overflow-hidden">
      <div className="w-[90%] mx-auto">
        <div className="emg-content opacity-0 bg-gradient-to-br from-[#1A365D] to-[#0f2240] rounded-3xl overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-white/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-40 h-40 rounded-full bg-[#ffa07a]/5 translate-y-1/2 pointer-events-none" />

          {/* Scrolling text strip */}
          {/* <div className="overflow-hidden border-b border-white/10 py-2 bg-[#ffa07a]/10">
            <div className="emg-marquee-inner flex whitespace-nowrap gap-6">
              {strips.map((s, i) => (
                <span
                  key={i}
                  className={`font-['Poppins'] text-xs font-bold tracking-widest uppercase ${
                    s === "·" ? "text-[#ffa07a]/40" : s.includes("(555)") ? "text-[#ffa07a]" : "text-white/50"
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div> */}

          {/* Main content */}
          <div className="grid md:grid-cols-[1fr_auto] items-center gap-8 p-10 md:p-14">
            <div className="flex items-start md:items-center gap-6 flex-col md:flex-row">
              {/* Pulsing icon */}
              <div className="relative shrink-0">
                <div className="emg-pulse w-16 h-16 rounded-2xl bg-[#ffa07a]/20 border border-[#ffa07a]/30 flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-[#ffa07a]" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-400 border-2 border-[#1A365D] animate-pulse" />
              </div>

              <div>
                <p className="text-[#ffa07a] font-['Cormorant_Garamond'] font-semibold tracking-[0.2em] uppercase text-sm mb-1">
                  Dental Emergency
                </p>
                <h3 className="text-2xl md:text-4xl font-bold font-['Sora'] text-white leading-tight mb-2">
                  In Pain Right Now?
                  <br />
                  <span className="text-[#ffa07a]">We Have Same-Day Slots.</span>
                </h3>
                <p className="text-white/50 font-['Poppins'] text-sm font-medium max-w-lg">
                  Broken tooth, severe pain, swelling, or a lost crown — call
                  us before 10am and we'll see you today. No referral needed.
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="tel:+15551234567"
                target="_blank"
                className="inline-flex items-center justify-center gap-3 bg-[#ffa07a] text-white font-bold font-['Poppins'] text-base px-8 py-4 rounded-xl hover:bg-white hover:text-[#ffa07a] transition-all duration-300 group shadow-lg shadow-[#ffa07a]/20 whitespace-nowrap"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Call (555) 123-4567
              </a>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 font-['Poppins'] font-semibold text-sm px-6 py-3 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-300 group"
              >
                Or book online
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Bottom feature strips */}
          <div className="grid grid-cols-3 border-t border-white/10 divide-x divide-white/10">
            {[
              { label: "Response time", value: "Under 2 hrs" },
              { label: "Emergency slots", value: "Daily 8–10am" },
              { label: "After hours", value: "On-call line" },
            ].map((f) => (
              <div key={f.label} className="px-6 py-4 text-center">
                <p className="text-white font-bold font-['Sora'] text-lg md:text-2xl">{f.value}</p>
                <p className="text-white/40 font-['Poppins'] text-xs mt-0.5">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}