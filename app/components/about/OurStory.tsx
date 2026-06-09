"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sprout,
  Sparkles,
  Gem,
  Trophy,
  Heart,
  Stethoscope,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2009",
    title: "The First Chair",
    body: "Dr. Sarah Mitchell opened Promenade Dental with two dental chairs, a bold vision, and a single belief: every patient deserves to feel heard.",
    icon: Sprout,
  },
  {
    year: "2012",
    title: "Cosmetic Wing Opens",
    body: "We expanded our services to include cosmetic dentistry and welcomed Dr. James Okafor as our orthodontic specialist.",
    icon: Sparkles,
  },
  {
    year: "2015",
    title: "Invisalign Diamond",
    body: "Certified as an Invisalign Diamond Provider after completing over 1,000 successful clear aligner cases — one of only a handful in Toronto.",
    icon: Gem,
  },
  {
    year: "2018",
    title: "Award-Winning Year",
    body: "Named 'Best Dental Clinic in Toronto' by Toronto Life magazine. We celebrated by giving back — 200 free check-ups for underserved youth.",
    icon: Trophy,
  },
  {
    year: "2021",
    title: "Implant Centre Launch",
    body: "Opened a dedicated implant centre and welcomed Dr. Priya Sharma, a fellowship-trained implantologist with expertise in full-arch restorations.",
    icon: Stethoscope,
  },
  {
    year: "2024",
    title: "5,000 Smiles Strong",
    body: "We crossed the milestone of 5,000 patients — a number that humbles us and reminds us why we come in every morning.",
    icon: Heart,
  },
];

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll of the track
      const cards = gsap.utils.toArray<HTMLElement>(".milestone-card");
      const totalWidth = trackRef.current!.scrollWidth - window.innerWidth + 80;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalWidth + 400}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(trackRef.current, { x: -totalWidth, ease: "none" });

      // Progress line
      tl.to(lineRef.current, { scaleX: 1, ease: "none" }, 0);

      // Card stagger fade-in as they scroll into view
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.3, scale: 0.92 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl,
              start: "left 80%",
              end: "left 40%",
              scrub: true,
            },
          }
        );
      });

      // Section header reveal
      gsap.fromTo(
        ".story-header > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".story-header", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="our-story"
      className="relative bg-white overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-[90%] mx-auto pt-24 pb-8">
        {/* Header */}
        <div className="story-header mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="inline-block text-sm font-semibold tracking-[0.28em] uppercase text-[#ffa07a] font-['Cormorant_Garamond'] mb-4">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-6xl font-bold font-['Sora'] text-[#1A365D] leading-tight">
              15 Years of <br />
              <span className="text-[#ffa07a]">Crafting Smiles</span>
            </h2>
          </div>
          <p className="text-[#64748B] font-['Poppins'] font-medium text-lg max-w-md leading-relaxed">
            Scroll through the moments that shaped who we are — and who we're still becoming.
          </p>
        </div>

        {/* Progress line */}
        <div className="relative h-px w-full bg-[#e2e8f0] mb-12">
          <div
            ref={lineRef}
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#ffa07a] to-[#ff7a3d] origin-left"
            //@ts-ignore
            style={{ scaleX: 0, width: "100%" }}
          />
        </div>
      </div>

      {/* Horizontal scrolling track */}
      <div
        ref={trackRef}
        className="flex gap-7 pl-[5%] pr-40 pb-24"
        style={{ width: "max-content" }}
      >
        {milestones.map((m, i) =>
        {
            const Icon = m.icon;
        return(
          <div
            key={m.year}
            className="milestone-card group relative flex-shrink-0 w-80 md:w-96"
          >
            {/* Connector dot on top */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 rounded-full bg-[#ffa07a] ring-4 ring-[#ffa07a]/20 group-hover:scale-125 transition-transform duration-300 shrink-0" />
              <span className="font-['Cormorant_Garamond'] font-bold text-5xl text-[#1A365D]/60 leading-none">
                {m.year}
              </span>
            </div>

            {/* Card body */}
            <div className="bg-[#fdfaf5] rounded-3xl p-8 border border-[#e9e4da] hover:border-[#ffa07a]/40 hover:shadow-xl shadow-sm transition-all duration-400 group-hover:-translate-y-2 h-64 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10">
                    <Icon className="w-7 h-7 text-primary" />
                    </div>
                <h3 className="font-['Sora'] font-semibold text-[#1A365D] text-xl mb-3 leading-snug">
                  {m.title}
                </h3>
                <p className="text-[#64748B] font-['Poppins'] text-sm leading-relaxed">
                  {m.body}
                </p>
              </div>
            </div>

            {/* Step number */}
            <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-[#1A365D] flex items-center justify-center text-white text-xs font-bold font-['Poppins'] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {String(i + 1).padStart(2, "0")}
            </div>
          </div>
        )})}

        {/* End cap */}
        <div className="flex-shrink-0 w-20 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#ffa07a]/10 border-2 border-[#ffa07a] flex items-center justify-center">
            <svg className="w-5 h-5 text-[#ffa07a]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 10h12M12 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}