// "use client";
// import { useState, useEffect, useRef } from "react";
// import { ArrowRight } from "lucide-react";
// import { gsap } from "gsap";

// const slides = [
//   {
//     subtitle: "Your Smile, Our Passion",
//     title: "Advanced Dental & Cosmetic Care",
//     description:
//       "Experience dentistry redefined — where cutting-edge technology meets compassionate care. Transform your smile with our award-winning team.",
//     cta1: "Book a Free Consultation",
//     cta2: "Explore Services",
//   },
//   {
//     subtitle: "Painless & Comfortable",
//     title: "Gentle Care & Modern Techniques",
//     description:
//       "We believe dental visits shouldn't be something you dread. Our anxiety-free environment and advanced techniques ensure a calm, comfortable experience every time.",
//     cta1: "Meet Our Doctors",
//     cta2: "Our Technology",
//   },
//   {
//     subtitle: "Smile Transformation",
//     title: "Invisalign & Teeth Whitening",
//     description:
//       "Straighter, brighter teeth without the hassle. Our certified Invisalign providers and professional whitening treatments deliver stunning results in record time.",
//     cta1: "Get a Smile Makeover",
//     cta2: "See Before & After",
//   },
//   {
//     subtitle: "Trusted by 5,000+ Patients",
//     title: "Implants & Restorative Dentistry",
//     description:
//       "Missing teeth? Worn enamel? We restore full function and natural beauty with state-of-the-art implants, crowns, and veneers designed to last a lifetime.",
//     cta1: "Start Your Restoration",
//     cta2: "View Gallery",
//   },
// ];

// const ctaHrefs = [
//   { cta1: "#contact", cta2: "#services" },
//   { cta1: "#about", cta2: "#services" },
//   { cta1: "#contact", cta2: "#services" },
//   { cta1: "#contact", cta2: "#services" },
// ];

// const slideImages = [
//   "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1600&q=80",
//   "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1600&q=80",
//   "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1600&q=80",
//   "https://images.pexels.com/photos/19976588/pexels-photo-19976588.jpeg",
// ];

// const VIDEO_DURATION = 6000;

// // Split a title on " & " and return structured parts
// function parseTitleParts(title: string) {
//   const parts = title.split(" & ");
//   return {
//     line1: parts[0] + (parts[1] ? " &" : ""),
//     line2: parts[1] ?? null,
//   };
// }

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
//   const mountedRef = useRef(true);

//   // Animation target refs
//   const badgeRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const descRef = useRef<HTMLParagraphElement>(null);
//   const ctaRef = useRef<HTMLDivElement>(null);
//   const statsRef = useRef<HTMLDivElement>(null);
//   const dotsRef = useRef<HTMLDivElement>(null);

//   // ─── Mount animation (runs once on load) ───────────────────────────────────
//   useEffect(() => {
//     mountedRef.current = true;

//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ delay: 0.1 });

//       // Badge slides up
//       tl.fromTo(
//         badgeRef.current,
//         { y: 20, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
//       );

//       // Title words cascade in (same style as AnimatedHeading)
//       const words = titleRef.current?.querySelectorAll(".hero-word");
//       if (words?.length) {
//         tl.fromTo(
//           words,
//           { y: "110%", opacity: 0, rotateX: -40, transformOrigin: "50% 0%" },
//           {
//             y: "0%",
//             opacity: 1,
//             rotateX: 0,
//             duration: 0.7,
//             ease: "power3.out",
//             stagger: 0.07,
//           },
//           "-=0.25"
//         );
//       }

//       // Description fades + slides up
//       tl.fromTo(
//         descRef.current,
//         { y: 18, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" },
//         "-=0.3"
//       );

//       // CTA buttons scale + fade in
//       tl.fromTo(
//         ctaRef.current?.children ?? [],
//         { y: 14, opacity: 0, scale: 0.97 },
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 0.45,
//           ease: "back.out(1.4)",
//           stagger: 0.1,
//         },
//         "-=0.25"
//       );

//       // Stats badges stagger in
//       tl.fromTo(
//         statsRef.current?.children ?? [],
//         { x: -12, opacity: 0 },
//         {
//           x: 0,
//           opacity: 1,
//           duration: 0.4,
//           ease: "power2.out",
//           stagger: 0.08,
//         },
//         "-=0.2"
//       );

//       // Slide dots drop in from below
//       tl.fromTo(
//         dotsRef.current,
//         { y: 16, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
//         "-=0.15"
//       );
//     });

//     return () => {
//       ctx.revert();
//       mountedRef.current = false;
//     };
//   }, []);

//   // ─── Re-animate content on slide change ────────────────────────────────────
//   useEffect(() => {
//     if (isTransitioning) return;

//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ delay: 0.15 });

//       tl.fromTo(
//         badgeRef.current,
//         { y: 12, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
//       );

//       const words = titleRef.current?.querySelectorAll(".hero-word");
//       if (words?.length) {
//         tl.fromTo(
//           words,
//           { y: "110%", opacity: 0, rotateX: -40, transformOrigin: "50% 0%" },
//           {
//             y: "0%",
//             opacity: 1,
//             rotateX: 0,
//             duration: 0.65,
//             ease: "power3.out",
//             stagger: 0.065,
//           },
//           "-=0.2"
//         );
//       }

//       tl.fromTo(
//         descRef.current,
//         { y: 14, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" },
//         "-=0.25"
//       );

//       tl.fromTo(
//         ctaRef.current?.children ?? [],
//         { y: 10, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.38, ease: "power2.out", stagger: 0.08 },
//         "-=0.2"
//       );
//     });

//     return () => ctx.revert();
//   }, [currentSlide, isTransitioning]);

//   // ─── Progress / auto-advance logic (unchanged) ─────────────────────────────
//   const cleanupInterval = () => {
//     if (progressIntervalRef.current) {
//       clearInterval(progressIntervalRef.current);
//       progressIntervalRef.current = null;
//     }
//   };

//   const startProgress = (slideIndex: number) => {
//     cleanupInterval();
//     setProgress(0);
//     const startTime = Date.now();
//     progressIntervalRef.current = setInterval(() => {
//       if (!mountedRef.current) { cleanupInterval(); return; }
//       const elapsed = Date.now() - startTime;
//       const pct = Math.min((elapsed / VIDEO_DURATION) * 100, 100);
//       setProgress(pct);
//       if (elapsed >= VIDEO_DURATION) {
//         cleanupInterval();
//         if (mountedRef.current) transitionTo((slideIndex + 1) % slides.length);
//       }
//     }, 50);
//   };

//   const transitionTo = (index: number) => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setTimeout(() => {
//       if (!mountedRef.current) return;
//       setCurrentSlide(index);
//       setProgress(0);
//       setIsTransitioning(false);
//     }, 500);
//   };

//   const handleSlideSwitch = (index: number) => {
//     if (index === currentSlide || isTransitioning) return;
//     cleanupInterval();
//     transitionTo(index);
//   };

//   useEffect(() => {
//     if (!isTransitioning) startProgress(currentSlide);
//     return cleanupInterval;
//   }, [currentSlide, isTransitioning]);

//   // ─── Render ─────────────────────────────────────────────────────────────────
//   const current = slides[currentSlide];
//   const { line1, line2 } = parseTitleParts(current.title);

//   // Helper: wrap each word in the clip+word span pair (same pattern as AnimatedHeading)
//   const renderWords = (text: string, colorClass = "text-white") =>
//     text.split(" ").map((word, i, arr) => (
//       <span
//         key={i}
//         className="inline-block overflow-hidden"
//         style={{ verticalAlign: "bottom" }}
//       >
//         <span
//           className={`hero-word inline-block will-change-transform ${colorClass}`}
//           style={{ opacity: 0 }}
//         >
//           {word}
//         </span>
//         {i < arr.length - 1 && <span className="inline-block">&nbsp;</span>}
//       </span>
//     ));

//   return (
//     <div className='overflow-hidden'>
//     <section
//       id="home"
//       className="relative min-h-screen flex flex-col justify-end text-white overflow-hidden"
//     >
//       {/* Background images */}
//       {slideImages.map((src, i) => (
//         <div
//           key={i}
//           className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//             currentSlide === i && !isTransitioning ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <img
//             src={src}
//             alt=""
//             className="w-full h-full object-cover"
//             loading={i === 0 ? "eager" : "lazy"}
//           />
//         </div>
//       ))}

//       <div className="absolute inset-0 bg-black/70 z-10" />
//       {/* <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 rounded-full bg-[#ffa07a]/8 blur-3xl z-10 pointer-events-none" /> */}

//       {/* Main content — remove the old opacity/translate transition; GSAP handles it */}
//       <div className="relative z-20 w-[90%] mx-auto pt-32 pb-10 lg:pb-36">
//         <div className="space-y-6 max-w-3xl">

//           {/* Subtitle badge */}
//           <div
//             ref={badgeRef}
//             style={{ opacity: 0 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2"
//           >
//             <span className="w-2 h-2 rounded-full bg-[#F4845F] animate-pulse" />
//             <span className="text-xs font-medium tracking-[0.2em] uppercase font-['Cormorant_Garamond'] text-white/90">
//               {current.subtitle}
//             </span>
//           </div>

//           {/* Title — word-split for GSAP, same architecture as AnimatedHeading */}
//           <h1
//             ref={titleRef}
//             className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight font-['Sora']"
//             style={{ perspective: "600px" }}
//           >
//             <span className="block">{renderWords(line1)}</span>
//             {line2 && (
//               <span className="block">
//                 {renderWords(line2, "text-[#F4A87C]")}
//               </span>
//             )}
//           </h1>

//           {/* Description */}
//           <p
//             ref={descRef}
//             style={{ opacity: 0 }}
//             className="text-lg md:text-xl leading-relaxed text-white/80 max-w-2xl font-['Poppins'] font-light"
//           >
//             {current.description}
//           </p>

//           {/* CTAs */}
//           <div ref={ctaRef} className="flex flex-col md:flex-row gap-4 pt-2">
//             <a
//               href={ctaHrefs[currentSlide].cta1}
//               style={{ opacity: 0 }}
//               className="group inline-flex items-center justify-center gap-3 bg-[#ffa07a] text-white font-semibold px-9 py-4.5 hover:bg-[#d05a24] hover:shadow-[0_8px_30px_rgba(232,101,42,0.4)] transition-all duration-300 rounded-full font-['Poppins'] text-base"
//             >
//               {current.cta1}
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </a>
//             <a
//               href={ctaHrefs[currentSlide].cta2}
//               style={{ opacity: 0 }}
//               className="inline-flex items-center justify-center gap-3 border-2 border-white/60 text-white font-medium px-9 py-4.5 hover:bg-white hover:text-[#1A365D] transition-all duration-300 rounded-full font-['Poppins'] text-base"
//             >
//               {current.cta2}
//             </a>
//           </div>

//           {/* Trust badges */}
//           <div ref={statsRef} className="flex items-center gap-8 pt-4 flex-wrap">
//             {["5★ Google Rating", "5,000+ Happy Patients", "15+ Years Experience"].map((badge) => (
//               <div key={badge} className="flex items-center gap-2" style={{ opacity: 0 }}>
//                 <div className="w-1.5 h-1.5 rounded-full bg-[#F4845F]" />
//                 <span className="text-lg text-white/70 font-['Poppins']">{badge}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Slide dots */}
//       <div ref={dotsRef} className="relative z-20 pb-10" style={{ opacity: 0 }}>
//         <div className="w-[90%] mx-auto">
//           <div className="flex items-center gap-3">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleSlideSwitch(index)}
//                 disabled={isTransitioning}
//                 className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 disabled:cursor-not-allowed"
//                 style={{ width: currentSlide === index ? "64px" : "24px" }}
//               >
//                 <div className="absolute inset-0 bg-white/20 rounded-full" />
//                 {currentSlide === index && (
//                   <div
//                     className="absolute inset-y-0 left-0 bg-[#ffa07a] rounded-full transition-none"
//                     style={{ width: `${progress}%` }}
//                   />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//     </div>
//   );
// }

"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background zoom
      gsap.to(".hero-bg-img", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
        scale: 1.1,
      });

      const tl = gsap.timeline({ delay: 0.2 });

      // Left text and arrow slide in
      tl.fromTo(
        ".hero-left-content",
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
      )
      // Floating card pop in
      .fromTo(
        ".hero-right-card",
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.2)" },
        "-=0.6"
      )
      // Main title rise up
      .fromTo(
        ".hero-title",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
        "-=0.5"
      );

      // Subtle float animation for the right card to make it feel alive
      gsap.to(".hero-right-card", {
        y: -6,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-white"
    >
      {/* Background Image */}
        <img
          src="/assets/h-hero.jpg" // replace with your uploaded image
          alt="Happy Family at Promenade Dental"
          className="hidden lg:block absolute inset-0 w-full h-full lg:object-cover object-center "
          style={{ transformOrigin: "center center" }}
        />



{/* Content */}
<div className="relative z-10 h-full flex items-center py-20 lg:pt-60">
  <div className="w-[90%] mx-auto">
    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* LEFT CONTENT */}
      <div className="max-w-3xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 my-6">
          <span className="w-10 h-px bg-[#ffa07a]" />
          <span className="uppercase tracking-[0.35em] text-xs font-semibold text-[#ffa07a] font-['Poppins']">
            Chandler's Trusted Family Dentist
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="font-black text-[#1A365D] mb-8 font-['Sora'] text-4xl md:text-5xl lg:text-7xl leading-tight hero-title"
        >
          Where Healthy
          <br />
          Smiles
          <span className="text-[#ffa07a]"> Begin & Thrive</span>
        </h1>

        {/* Description */}
        <p className="max-w-xl text-lg md:text-xl text-[#64748B] leading-relaxed font-['Poppins'] mb-10">
          From preventive family dentistry and cosmetic smile makeovers
          to dental implants and emergency care, Promenade Dental delivers
          personalized treatment designed around your comfort, confidence,
          and long-term oral health.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#ffa07a] text-white font-semibold font-['Poppins'] hover:bg-[#6f1010] transition-all duration-300"
          >
            Schedule Your Visit
          </a>

          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[#ffa07a] text-[#ffa07a] font-semibold font-['Poppins'] hover:bg-[#ffa07a] hover:text-white transition-all duration-300"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE - HIDDEN ON MOBILE */}
      <div className="flex md:hidden justify-center lg:justify-end">
        <div className="relative">
          <img
            src="/assets/h-hero-mobile.jpg"
            alt="Happy Family Smiles"
            className="w-full max-w-[500px] lg:max-w-[650px] object-contain"
          />

          {/* Floating Review Badge */}
          <div className="absolute bottom-8 left-0 bg-white rounded-2xl shadow-xl px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/100?img=32"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/100?img=52"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>

              <div>
                <div className="font-bold text-[#1A365D]">4.9 ★★★★★</div>
                <div className="text-sm text-gray-500">
                  5,000+ Happy Patients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
    </section>
  );
}