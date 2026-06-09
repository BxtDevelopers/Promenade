"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Phone, Clock, MapPin } from "lucide-react";

const floatingCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: "(480) 802-8188",
    sub: "Mon–Sat, 8am–7pm",
    color: "#ffa07a",
    position: "top-[50%] left-[3%]",
    delay: 0.6,
  },
  {
    icon: Clock,
    label: "Same-Day Available",
    value: "Emergency Slots",
    sub: "Call before 10am",
    color: "#ffa07a",
    position: "top-[18%] right-[4%]",
    delay: 0.8,
  },
  {
    icon: MapPin,
    label: "Find Us",
    value: "4905 S Alma School Rd",
    sub: "Chandler, AZ 85248, USA",
    color: "#ffa07a",
    position: "bottom-[18%] right-[3%]",
    delay: 1.0,
  },
];

export default function ContactHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(pillRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(headRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.4")
        .fromTo(subRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .fromTo(
          ".contact-hero-btn",
          { opacity: 0, y: 16, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.12 },
          "-=0.4"
        )
        .fromTo(
          ".float-card",
          { opacity: 0, scale: 0.85, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "back.out(1.4)" },
          "-=0.3"
        );

      // Gentle float animation on cards
      gsap.utils.toArray<HTMLElement>(".float-card").forEach((card, i) => {
        gsap.to(card, {
          y: i % 2 === 0 ? -10 : 10,
          duration: 2.5 + i * 0.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      // Decorative ring rotation
      gsap.to(".hero-ring", {
        rotation: 360,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[88vh] bg-[#1A365D] overflow-hidden flex items-center lg:py-20"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 110%, #ffa07a18 0%, transparent 70%)",
        }}
      />

      {/* Rotating dashed ring */}
      <svg
        className="hero-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.1] pointer-events-none"
        viewBox="0 0 700 700"
        fill="none"
      >
        <circle cx="350" cy="350" r="320" stroke="#ffa07a" strokeWidth="1.5" strokeDasharray="12 8" />
        <circle cx="350" cy="350" r="260" stroke="white" strokeWidth="1" strokeDasharray="6 12" />
      </svg>

      {/* Dot grids */}
      <div className="absolute top-16 left-8 grid grid-cols-5 gap-2 pointer-events-none opacity-10">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-[#ffa07a]" />
        ))}
      </div>
      <div className="absolute bottom-16 right-8 grid grid-cols-5 gap-2 pointer-events-none opacity-10">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-white" />
        ))}
      </div>

      {/* Floating info cards */}
      {floatingCards.map((card) => (
        <div
          key={card.label}
          className={`float-card absolute ${card.position} hidden lg:flex items-center gap-4 bg-white/[0.08] backdrop-blur-md border border-white/15 rounded-2xl px-5 py-4 opacity-0 z-10 hover:bg-white/[0.14] transition-colors duration-300`}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: card.color + "25", border: `1px solid ${card.color}40` }}
          >
            <card.icon className="w-5 h-5" style={{ color: card.color }} />
          </div>
          <div>
            <p className="text-white/50 font-['Poppins'] text-xs font-medium">{card.label}</p>
            <p className="text-white font-['Sora'] font-bold text-sm">{card.value}</p>
            <p className="text-white/40 font-['Poppins'] text-xs">{card.sub}</p>
          </div>
        </div>
      ))}

      {/* Centre content */}
      <div className="w-[90%] mx-auto text-center relative z-10 py-32">
        <span
          ref={pillRef}
          className="inline-block text-sm font-semibold tracking-[0.28em] uppercase text-[#ffa07a] font-['Cormorant_Garamond'] mb-6 opacity-0"
        >
          Get in Touch
        </span>

        <h1
          ref={headRef}
          className="text-5xl md:text-7xl lg:text-[7rem] font-bold font-['Sora'] text-white leading-[1.0] mb-7 opacity-0"
        >
          We'd Love to
          <br />
          <span className="text-[#ffa07a] relative inline-block">
            Hear From You
            <svg
              className="absolute -bottom-2 left-0 w-full opacity-40"
              viewBox="0 0 500 14"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 10 Q125 2, 250 9 Q375 16, 498 7"
                stroke="#ffa07a"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p
          ref={subRef}
          className="text-xl md:text-2xl text-white/60 font-['Poppins'] font-medium max-w-2xl mx-auto leading-relaxed mb-12 opacity-0"
        >
          Whether you're booking your first visit, have a question, or need
          urgent care — we're here, and we're listening.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="contact-hero-btn opacity-0 inline-flex items-center gap-3 bg-[#ffa07a] text-white font-semibold font-['Poppins'] text-base px-10 py-4 rounded-full hover:bg-white hover:text-[#ffa07a] transition-all duration-300 shadow-lg shadow-[#ffa07a]/20"
          >
            Book Appointment
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 10h12M12 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="tel:+14808028188"
            className="contact-hero-btn opacity-0 inline-flex items-center gap-3 border border-white/30 text-white font-semibold font-['Poppins'] text-base px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>

      {/* Bottom wave mask into next section */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 L0,80 Z" fill="#fdfaf5" />
        </svg>
      </div>
    </section>
  );
}