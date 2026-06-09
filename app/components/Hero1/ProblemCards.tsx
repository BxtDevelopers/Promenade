"use client";

import { useEffect, useRef } from "react";
import {
  HeartPulse,
  ShieldAlert,
  SmilePlus,
  BadgeAlert,
  Sparkles,
} from "lucide-react";
import { FaTooth } from "react-icons/fa6";

const problems = [
  {
    number: "01",
    title: "Severe Tooth Pain",
    description:
      "Persistent toothaches, sensitivity, and discomfort that interfere with your daily life.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&q=80",
  },
  {
    number: "02",
    title: "Broken or Chipped Teeth",
    description:
      "Quick restoration solutions to protect damaged teeth and restore function.",
    icon: ShieldAlert,
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80",
  },
  {
    number: "03",
    title: "Missing Teeth",
    description:
      "Dental implants, bridges, and modern restorative treatments for a complete smile.",
    icon: FaTooth,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80",
  },
  {
    number: "04",
    title: "Gum Disease",
    description:
      "Advanced periodontal care to prevent tooth loss and improve oral health.",
    icon: BadgeAlert,
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&q=80",
  },
  {
    number: "05",
    title: "Crooked Teeth",
    description:
      "Clear aligners and orthodontic treatments to create a straighter smile.",
    icon: SmilePlus,
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80",
  },
  {
    number: "06",
    title: "Smile Makeovers",
    description:
      "Cosmetic dentistry solutions designed to improve confidence and aesthetics.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80",
  },
];

export default function DentalProblemsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame: number;
    let paused = false;

    const scroll = () => {
      if (!paused) {
        container.scrollLeft += 0.7;

        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    const stop = () => {
      paused = true;
    };

    const start = () => {
      paused = false;
    };

    container.addEventListener("mouseenter", stop);
    container.addEventListener("mouseleave", start);

    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeEventListener("mouseenter", stop);
      container.removeEventListener("mouseleave", start);
    };
  }, []);

  return (
    <section
      id="problems"
      className="relative min-h-screen py-20 lg:py-60 overflow-hidden mt-32"
    >
      {/* Replace with your image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/dental-office.webp')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 h-full flex items-center">
        <div className="w-[92%] mx-auto">
          <div className="grid lg:grid-cols-[520px_1fr] gap-10 items-center min-w-0">
            {/* Left Content */}
            <div className="max-w-xl">
              <span className="inline-flex items-center px-6 py-2 rounded-full border border-white/30 text-white text-sm font-medium font-['Poppins'] mb-8">
                Dental Problems We Solve
              </span>

              <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-bold text-white font-['Cormorant_Garamond']">
                Comprehensive
                <br />
                Solutions For
                <br />
                <span className="text-[#ffa07a]">
                  Every Smile
                </span>
              </h2>

              <p className="mt-8 text-lg text-white/70 leading-relaxed font-['Poppins'] max-w-md">
                From emergency dental care to cosmetic enhancements,
                we provide advanced treatments for the most common
                oral health concerns.
              </p>
            </div>

            {/* Right Cards */}
            <div className="relative overflow-hidden min-w-0 max-w-full">
            <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide pb-4 cursor-grab active:cursor-grabbing"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
                {problems.map((problem) => {
                  const Icon = problem.icon;

                  return (
                    <div
                      key={problem.number}
                      /* Removed snap-start here */
                      className="group relative min-w-[340px] md:min-w-[380px] h-[580px] rounded-[32px] overflow-hidden shrink-0 scroll-hide"
                    >
                      <img
                        src={problem.image}
                        alt={problem.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

                      <div className="absolute top-8 left-8">
                        <div className="w-14 h-14 rounded-2xl bg-[#ffa07a] flex items-center justify-center">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      <div className="absolute bottom-8 left-8 right-8">
                        <span className="block text-white text-5xl font-bold mb-4 font-['Sora']">
                          {problem.number}
                        </span>

                        <h3 className="text-white text-3xl leading-tight font-semibold mb-4 font-['Sora']">
                          {problem.title}
                        </h3>

                        <p className="text-white/80 text-base leading-relaxed font-['Poppins']">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Fade div removed entirely */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      `}</style>
    </section>
  );
}