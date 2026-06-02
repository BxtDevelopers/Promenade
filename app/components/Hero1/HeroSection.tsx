"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    subtitle: "Your Smile, Our Passion",
    title: "Advanced Dental & Cosmetic Care",
    description:
      "Experience dentistry redefined — where cutting-edge technology meets compassionate care. Transform your smile with our award-winning team.",
    cta1: "Book a Free Consultation",
    cta2: "Explore Services",
  },
  {
    subtitle: "Painless & Comfortable",
    title: "Gentle Care & Modern Techniques",
    description:
      "We believe dental visits shouldn't be something you dread. Our anxiety-free environment and advanced techniques ensure a calm, comfortable experience every time.",
    cta1: "Meet Our Doctors",
    cta2: "Our Technology",
  },
  {
    subtitle: "Smile Transformation",
    title: "Invisalign & Teeth Whitening",
    description:
      "Straighter, brighter teeth without the hassle. Our certified Invisalign providers and professional whitening treatments deliver stunning results in record time.",
    cta1: "Get a Smile Makeover",
    cta2: "See Before & After",
  },
  {
    subtitle: "Trusted by 5,000+ Patients",
    title: "Implants & Restorative Dentistry",
    description:
      "Missing teeth? Worn enamel? We restore full function and natural beauty with state-of-the-art implants, crowns, and veneers designed to last a lifetime.",
    cta1: "Start Your Restoration",
    cta2: "View Gallery",
  },
];

const ctaHrefs = [
  { cta1: "#contact", cta2: "#services" },
  { cta1: "#about", cta2: "#services" },
  { cta1: "#contact", cta2: "#services" },
  { cta1: "#contact", cta2: "#services" },
];

const slideImages = [
  "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1600&q=80",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1600&q=80",
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1600&q=80",
  "https://images.pexels.com/photos/19976588/pexels-photo-19976588.jpeg",
];

const VIDEO_DURATION = 6000;

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  const cleanupInterval = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  const startProgress = (slideIndex: number) => {
    cleanupInterval();
    setProgress(0);
    const startTime = Date.now();
    progressIntervalRef.current = setInterval(() => {
      if (!mountedRef.current) { cleanupInterval(); return; }
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / VIDEO_DURATION) * 100, 100);
      setProgress(pct);
      if (elapsed >= VIDEO_DURATION) {
        cleanupInterval();
        if (mountedRef.current) transitionTo((slideIndex + 1) % slides.length);
      }
    }, 50);
  };

  const transitionTo = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      if (!mountedRef.current) return;
      setCurrentSlide(index);
      setProgress(0);
      setIsTransitioning(false);
    }, 500);
  };

  const handleSlideSwitch = (index: number) => {
    if (index === currentSlide || isTransitioning) return;
    cleanupInterval();
    transitionTo(index);
  };

  useEffect(() => {
    if (!isTransitioning) startProgress(currentSlide);
    return cleanupInterval;
  }, [currentSlide, isTransitioning]);

  const current = slides[currentSlide];
  const titleParts = current.title.split(" & ");

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end text-white overflow-hidden">
      {slideImages.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            currentSlide === i && !isTransitioning ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={src} alt="" className="w-full h-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#ffa07a]/8 blur-3xl z-10 pointer-events-none" />

      <div
        className={`relative z-20 w-[90%] mx-auto pt-32 pb-10 lg:pb-36 transition-all duration-500 ${
          isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2">
            <span className="w-2 h-2 rounded-full bg-[#F4845F] animate-pulse" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase font-['Cormorant_Garamond'] text-white/90">
              {current.subtitle}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white font-['Sora']">
            <span className="block">{titleParts[0]} {titleParts[1] ? "&" : ""}</span>
            {titleParts[1] && <span className="block text-[#F4A87C]">{titleParts[1]}</span>}
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-white/80 max-w-2xl font-['Poppins'] font-light">
            {current.description}
          </p>

          <div className="flex flex-col md:flex-row gap-4 pt-2">
            <a
              href={ctaHrefs[currentSlide].cta1}
              className="group inline-flex items-center justify-center gap-3 bg-[#ffa07a] text-white font-semibold px-9 py-4.5 hover:bg-[#d05a24] hover:shadow-[0_8px_30px_rgba(232,101,42,0.4)] transition-all duration-300 rounded-full font-['Poppins'] text-base"
            >
              {current.cta1}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={ctaHrefs[currentSlide].cta2}
              className="inline-flex items-center justify-center gap-3 border-2 border-white/60 text-white font-medium px-9 py-4.5 hover:bg-white hover:text-[#1A365D] transition-all duration-300 rounded-full font-['Poppins'] text-base"
            >
              {current.cta2}
            </a>
          </div>

          <div className="flex items-center gap-8 pt-4 flex-wrap">
            {["5★ Google Rating", "5,000+ Happy Patients", "15+ Years Experience"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F4845F]" />
                <span className="text-lg text-white/70 font-['Poppins']">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-20 pb-10">
        <div className="w-[90%] mx-auto">
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideSwitch(index)}
                disabled={isTransitioning}
                className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 disabled:cursor-not-allowed"
                style={{ width: currentSlide === index ? "64px" : "24px" }}
              >
                <div className="absolute inset-0 bg-white/20 rounded-full" />
                {currentSlide === index && (
                  <div
                    className="absolute inset-y-0 left-0 bg-[#ffa07a] rounded-full transition-none"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}