// "use client";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function AboutHero() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const morphRef = useRef<SVGPathElement>(null);
//   const headingRef = useRef<HTMLHeadingElement>(null);
//   const subRef = useRef<HTMLParagraphElement>(null);
//   const pillsRef = useRef<HTMLDivElement>(null);
//   const lineRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Morph blob animation
//       const paths = [
//         "M60,20 C80,0 100,10 110,35 C125,60 115,85 95,95 C75,105 40,105 25,85 C10,65 15,45 30,30 C40,20 45,35 60,20Z",
//         "M55,15 C78,5 105,20 115,45 C128,70 110,92 88,98 C65,104 35,98 20,78 C5,58 12,38 28,25 C42,14 38,22 55,15Z",
//         "M65,18 C85,2 108,15 118,40 C130,65 112,90 90,100 C68,110 38,104 22,82 C6,60 10,40 28,28 C45,16 50,30 65,18Z",
//       ];
//       let i = 0;
//       const morphTl = gsap.timeline({ repeat: -1, yoyo: true });
//       morphTl.to(morphRef.current, { attr: { d: paths[1] }, duration: 4, ease: "sine.inOut" })
//              .to(morphRef.current, { attr: { d: paths[2] }, duration: 4, ease: "sine.inOut" })
//              .to(morphRef.current, { attr: { d: paths[0] }, duration: 4, ease: "sine.inOut" });

//       // Blob slow float
//       gsap.to(".about-blob", {
//         y: -18,
//         x: 10,
//         duration: 6,
//         ease: "sine.inOut",
//         yoyo: true,
//         repeat: -1,
//       });

//       // Staggered text reveal
//       const chars = headingRef.current?.querySelectorAll(".char");
//       //@ts-ignore
//       gsap.fromTo(chars,
//         { y: 80, opacity: 0, rotateX: -40 },
//         { y: 0, opacity: 1, rotateX: 0, duration: 0.9, stagger: 0.03, ease: "back.out(1.6)", delay: 0.3 }
//       );

//       gsap.fromTo(subRef.current,
//         { y: 30, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.9 }
//       );

//       gsap.fromTo(lineRef.current,
//         { scaleX: 0, transformOrigin: "left" },
//         { scaleX: 1, duration: 1.2, ease: "expo.out", delay: 1.1 }
//       );

//       gsap.fromTo(pillsRef.current?.children ?? [],
//         { y: 20, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power3.out", delay: 1.3 }
//       );

//       gsap.fromTo(
//   ".doctor-image",
//   {
//     y: 80,
//     opacity: 0,
//     scale: 0.92,
//   },
//   {
//     y: 0,
//     opacity: 1,
//     scale: 1,
//     duration: 1.2,
//     ease: "power4.out",
//     delay: 0.5,
//   }
// );

// gsap.fromTo(
//   ".floating-card",
//   {
//     y: 20,
//     opacity: 0,
//   },
//   {
//     y: 0,
//     opacity: 1,
//     stagger: 0.2,
//     duration: 0.8,
//     delay: 1.2,
//   }
// );

//       // Scrolling parallax on the blob
//       gsap.to(".about-blob", {
//         scrollTrigger: { trigger: sectionRef.current, scrub: 1.5 },
//         y: 60,
//         ease: "none",
//       });

//       // Small dot grid parallax
//       gsap.to(".dot-grid", {
//         scrollTrigger: { trigger: sectionRef.current, scrub: 2 },
//         y: 40,
//         ease: "none",
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const words = ["Decades", "of", "Dedicated", "Smiles"];

//   const pills = [
//     { label: "Est. 2009", accent: false },
//     { label: "Award-Winning Care", accent: true },
//     { label: "5,000+ Patients", accent: false },
//     { label: "Toronto, ON", accent: false },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       id="about-hero"
//       className="relative min-h-screen pt-36 pb-20 lg:pt-20 lg:pb-0 bg-[#fdfaf5] flex flex-col justify-center overflow-hidden"
//     >
//       {/* Dot grid background */}
//       <div className="dot-grid absolute inset-0 pointer-events-none" style={{
//         backgroundImage: "radial-gradient(circle, #1A365D18 1px, transparent 1px)",
//         backgroundSize: "28px 28px",
//       }} />
    
//       {/* Large decorative blob */}
//       <div className="about-blob absolute -right-24 top-1/2 -translate-y-1/2 w-[480px] h-[480px] pointer-events-none opacity-[0.13]">
//         <svg viewBox="0 0 140 120" className="w-full h-full">
//           <path
//             ref={morphRef}
//             d="M60,20 C80,0 100,10 110,35 C125,60 115,85 95,95 C75,105 40,105 25,85 C10,65 15,45 30,30 C40,20 45,35 60,20Z"
//             fill="#ffa07a"
//           />
//         </svg>
//       </div>

//       {/* Vertical label on left */}
//       <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-3 pointer-events-none">
//         <div className="w-px h-28 bg-gradient-to-b from-transparent via-[#ffa07a]/60 to-transparent" />
//         <span
//           className="text-[10px] tracking-[0.4em] font-semibold text-[#ffa07a] font-['Poppins'] uppercase"
//           style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
//         >
//           About Promenade
//         </span>
//       </div>

//       <div className="w-[90%] mx-auto relative z-10 py-20 lg:pt-32 lg:pb-16">
//             <div className="grid lg:grid-cols-2 gap-16 items-center">
//         <div className="max-w-3xl">
//           {/* Animated heading */}
//           <h1
//             ref={headingRef}
//             className="font-['Sora'] font-bold text-[#1A365D] leading-[1.05] mb-6"
//             style={{ fontSize: "clamp(3rem, 8vw, 7rem)", perspective: "800px" }}
//             aria-label="Decades of Dedicated Smiles"
//           >
//             {words.map((word, wi) => (
//               <span key={wi} className="inline-block overflow-hidden mr-[0.22em] last:mr-0 align-bottom">
//                 {word.split("").map((ch, ci) => (
//                   <span key={ci} className="char inline-block" style={{ willChange: "transform" }}>
//                     {ch}
//                   </span>
//                 ))}
//               </span>
//             ))}
//           </h1>

//           {/* Accent line */}
//           <div
//             ref={lineRef}
//             className="h-1 w-40 rounded-full bg-gradient-to-r from-[#ffa07a] to-[#ff7a3d] mb-8"
//           />

//           {/* Subtext */}
//           <p
//             ref={subRef}
//             className="text-xl md:text-2xl text-[#64748B] font-['Poppins'] font-medium max-w-2xl leading-relaxed mb-12"
//           >
//             We didn't set out to open a dental clinic — we set out to change how people feel about visiting one. Fifteen years on, that mission still drives everything we do.
//           </p>

//           {/* Pills */}
//           <div ref={pillsRef} className="flex flex-wrap gap-3">
//             {pills.map((p) => (
//               <span
//                 key={p.label}
//                 className={`px-5 py-2.5 rounded-full text-sm font-semibold font-['Poppins'] border transition-all duration-300 ${
//                   p.accent
//                     ? "bg-[#ffa07a] text-white border-[#ffa07a] shadow-lg shadow-[#ffa07a]/30"
//                     : "bg-white text-[#1A365D] border-[#1A365D]/20 hover:border-[#ffa07a]/60 hover:shadow-md"
//                 }`}
//               >
//                 {p.label}
//               </span>
//             ))}
//           </div>
//           </div>
//           <div className="relative hidden lg:flex justify-center items-center">
  
//   {/* Glow */}
//   <div className="absolute w-[520px] h-[520px] rounded-full bg-[#ffa07a]/15 blur-3xl" />

//   {/* Ring */}
//   <div className="absolute w-[480px] h-[480px] rounded-full border border-[#ffa07a]/20" />

//   {/* Doctor image */}
//   <div className="relative z-10">
//     <img
//       src="/assets/about-hero-01.png"
//       alt="Lead Dentist"
//       className="w-[580px] h-[820px] object-cover rounded-[3rem]"
//     />
//   </div>

//   {/* Experience Card */}
//   <div className="absolute left-0 top-20 bg-white rounded-3xl px-6 py-4 shadow-xl">
//     <p className="text-3xl font-bold text-[#1A365D]">15+</p>
//     <p className="text-sm text-slate-500">Years Experience</p>
//   </div>

//   {/* Patients Card */}
//   <div className="absolute right-0 bottom-24 bg-white rounded-3xl px-6 py-4 shadow-xl">
//     <p className="text-3xl font-bold text-[#1A365D]">5000+</p>
//     <p className="text-sm text-slate-500">Happy Patients</p>
//   </div>

//   {/* Decorative dots */}
//   <div className="absolute -top-6 right-10 grid grid-cols-5 gap-2">
//     {Array.from({ length: 25 }).map((_, i) => (
//       <span
//         key={i}
//         className="w-2 h-2 rounded-full bg-[#ffa07a]/40"
//       />
//     ))}
//   </div>

//   {/* Decorative circle */}
//   <div className="absolute bottom-12 left-10 w-20 h-20 rounded-full border-4 border-[#ffa07a]/30" />
// </div>
//         </div>
//       </div>

//       {/* Bottom wave divider */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
//           <path d="M0,40 C360,80 1080,0 1440,50 L1440,80 L0,80 Z" fill="white" />
//         </svg>
//       </div>
//     </section>
//   );
// }

"use client";
// Drop-in replacement for your existing AboutHero section.
// ONLY the background colour, text colours, and decorative element colours have changed.
// All layout, refs, animations, and structure are identical to your original.

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const words = ["Decades", "of", "Dedicated", "Smiles"];

const pills = [
  { label: "Est. 2009", accent: true },
  { label: "Chandler, AZ" },
  { label: "5,000+ Patients" },
  { label: "Award-Winning Care" },
];

export default function AboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const morphRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Character-by-character heading reveal
      tl.fromTo(
        ".char",
        { opacity: 0, y: "110%", rotateX: -60 },
        { opacity: 1, y: "0%", rotateX: 0, duration: 0.8, stagger: 0.04 }
      )
        .fromTo(lineRef.current, { scaleX: 0, opacity: 0, transformOrigin: "left" }, { scaleX: 1, opacity: 1, duration: 0.7 }, "-=0.3")
        .fromTo(subRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.4")
        .fromTo(pillsRef.current?.children ?? [], { opacity: 0, y: 16, scale: 0.92 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1 }, "-=0.5");

      // Blob morph loop
      if (morphRef.current) {
  const paths = [
    "M60,20 C80,0 100,10 110,35 C125,60 115,85 95,95 C75,105 40,105 25,85 C10,65 15,45 30,30 C40,20 45,35 60,20Z",
    "M65,15 C88,2 108,18 115,42 C122,66 108,90 88,98 C68,106 35,100 22,78 C9,56 18,38 35,25 C48,14 50,24 65,15Z",
    "M55,22 C78,-2 102,12 112,38 C124,64 110,90 90,97 C70,104 38,102 24,82 C10,62 16,42 32,28 C44,16 38,42 55,22Z",
  ];

  gsap.timeline({
    repeat: -1,
    yoyo: true,
  })
    .to(morphRef.current, {
      attr: { d: paths[1] },
      duration: 4,
      ease: "sine.inOut",
    })
    .to(morphRef.current, {
      attr: { d: paths[2] },
      duration: 4,
      ease: "sine.inOut",
    })
    .to(morphRef.current, {
      attr: { d: paths[0] },
      duration: 4,
      ease: "sine.inOut",
    });
}

      // Rotating ring
      gsap.to(".hero-spin-ring", { rotation: 360, duration: 28, ease: "none", repeat: -1 });

      // Floating cards
      gsap.to(".float-card-exp", { y: -8, duration: 2.2, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".float-card-pat", { y: 8, duration: 2.8, ease: "sine.inOut", yoyo: true, repeat: -1 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-hero"
      className="relative min-h-screen pt-36 pb-20 lg:pt-20 lg:pb-0 bg-[#1A365D] flex flex-col justify-center overflow-hidden"
    >
      {/* Dot grid — white on navy */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial glow from bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 110%, #ffa07a22 0%, transparent 70%)",
        }}
      />

      {/* Blob — now lighter opacity so it reads on dark bg */}
      <div className="about-blob absolute -right-24 top-1/2 -translate-y-1/2 w-[480px] h-[480px] pointer-events-none opacity-[0.18]">
        <svg viewBox="0 0 140 120" className="w-full h-full">
          <path
            ref={morphRef}
            d="M60,20 C80,0 100,10 110,35 C125,60 115,85 95,95 C75,105 40,105 25,85 C10,65 15,45 30,30 C40,20 45,35 60,20Z"
            fill="#ffa07a"
          />
        </svg>
      </div>

      {/* Rotating dashed ring (decorative) */}
      <svg
        className="hero-spin-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.05] pointer-events-none"
        viewBox="0 0 700 700"
        fill="none"
      >
        <circle cx="350" cy="350" r="320" stroke="#ffa07a" strokeWidth="1.5" strokeDasharray="12 8" />
        <circle cx="350" cy="350" r="250" stroke="white" strokeWidth="1" strokeDasharray="6 12" />
      </svg>

      {/* Vertical label on left */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-3 pointer-events-none">
        <div className="w-px h-28 bg-gradient-to-b from-transparent via-[#ffa07a]/60 to-transparent" />
        <span
          className="text-[10px] tracking-[0.4em] font-semibold text-[#ffa07a] font-['Poppins'] uppercase"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          About Promenade
        </span>
      </div>

      <div className="w-[90%] mx-auto relative z-10 py-20 lg:pt-32 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT — text ── */}
          <div className="max-w-3xl">
            <h1
              ref={headingRef}
              className="font-['Sora'] font-bold text-white leading-[1.05] mb-6"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)", perspective: "800px" }}
              aria-label="Decades of Dedicated Smiles"
            >
              {words.map((word, wi) => (
                <span key={wi} className="inline-block overflow-hidden mr-[0.22em] last:mr-0 align-bottom">
                  {word.split("").map((ch, ci) => (
                    <span key={ci} className="char inline-block" style={{ willChange: "transform" }}>
                      {ch}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            {/* Accent line */}
            <div
              ref={lineRef}
              className="h-1 w-40 rounded-full bg-gradient-to-r from-[#ffa07a] to-[#ff7a3d] mb-8"
            />

            {/* Subtext — light on dark */}
            <p
              ref={subRef}
              className="text-xl md:text-2xl text-white/65 font-['Poppins'] font-medium max-w-2xl leading-relaxed mb-12"
            >
              We didn't set out to open a dental clinic — we set out to change how people feel about visiting one. Fifteen years on, that mission still drives everything we do.
            </p>

            {/* Pills */}
            <div ref={pillsRef} className="flex flex-wrap gap-3">
              {pills.map((p) => (
                <span
                  key={p.label}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold font-['Poppins'] border transition-all duration-300 ${
                    p.accent
                      ? "bg-[#ffa07a] text-white border-[#ffa07a] shadow-lg shadow-[#ffa07a]/30"
                      : "bg-white/10 text-white border-white/20 hover:border-[#ffa07a]/60 hover:bg-white/15"
                  }`}
                >
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT — image collage ── */}
          <div className="relative hidden lg:flex justify-center items-center">

            {/* Glow */}
            <div className="absolute w-[520px] h-[520px] rounded-full bg-[#ffa07a]/10 blur-3xl" />

            {/* Ring */}
            <div className="absolute w-[480px] h-[480px] rounded-full border border-[#ffa07a]/20" />

            {/* Doctor image */}
            <div className="relative z-10">
              <img
                src="/assets/about-hero-01.png"
                alt="Lead Dentist"
                className="w-[580px] h-[820px] object-cover rounded-[3rem]"
              />
            </div>

            {/* Experience Card */}
            <div className="float-card-exp absolute left-0 top-20 bg-white rounded-3xl px-6 py-4 shadow-2xl">
              <p className="text-3xl font-bold text-[#1A365D]">15+</p>
              <p className="text-sm text-slate-500 font-['Poppins']">Years Experience</p>
            </div>

            {/* Patients Card */}
            <div className="float-card-pat absolute right-0 bottom-24 bg-white rounded-3xl px-6 py-4 shadow-2xl">
              <p className="text-3xl font-bold text-[#1A365D]">5000+</p>
              <p className="text-sm text-slate-500 font-['Poppins']">Happy Patients</p>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-6 right-10 grid grid-cols-5 gap-2">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className="w-2 h-2 rounded-full bg-[#ffa07a]/40" />
              ))}
            </div>

            {/* Decorative circle */}
            <div className="absolute bottom-12 left-10 w-20 h-20 rounded-full border-4 border-[#ffa07a]/30" />
          </div>

        </div>
      </div>

      {/* Bottom wave — bleeds into the next (light) section */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,50 L1440,80 L0,80 Z" fill="#fdfaf5" />
        </svg>
      </div> */}
    </section>
  );
}