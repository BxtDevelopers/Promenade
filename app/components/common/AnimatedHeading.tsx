"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * AnimatedHeading
 *
 * Props:
 *  - text           {string}   required  — the main heading text
 *  - highlight      {string}   optional  — words/phrase rendered in salmon accent
 *  - highlightPos   {"inline"|"newline"}  default "inline" — puts highlight on same line or below
 *  - as             {string}   default "h2" — HTML tag
 *  - className      {string}   optional  — extra Tailwind classes on the wrapper
 *  - stagger        {number}   default 0.055 — seconds between each word
 *  - delay          {number}   default 0 — initial delay before animation starts
 */
export default function AnimatedHeading({
  text = "",
  highlight = "",
  highlightPos = "inline",
  as: Tag = "h2",
  className = "",
  stagger = 0.095,
  delay = 0.2,
}) {
  const containerRef = useRef(null);

  // Split both strings into word arrays
  const mainWords = text.trim().split(/\s+/);
  const highlightWords = highlight ? highlight.trim().split(/\s+/) : [];

  useEffect(() => {
    const ctx = gsap.context(() => {
        //@ts-ignore
      const words = containerRef.current.querySelectorAll(".word");

      gsap.fromTo(
        words,
        {
          y: "110%",
          opacity: 0,
          rotateX: -40,
          transformOrigin: "50% 0%",
        },
        {
          y: "0%",
          opacity: 1,
          rotateX: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: stagger,
          delay: delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [stagger, delay]);

  return (
    //@ts-ignore
    <Tag
      ref={containerRef}
      className={`overflow-visible ${className}`}
      style={{ perspective: "600px" }}
    >
      {/* Main text words */}
      {mainWords.map((word, i) => (
        <span
          key={`main-${i}`}
          className="inline-block overflow-hidden"
          style={{ verticalAlign: "bottom" }}
        >
          <span
            className="word inline-block will-change-transform"
            style={{ opacity: 0 }}
          >
            {word}
          </span>
          {/* Space between words — not a word itself */}
          {(i < mainWords.length - 1 || highlightWords.length > 0) && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}

      {/* Line break if highlightPos is newline */}
      {highlight && highlightPos === "newline" && <br />}

      {/* Highlighted words */}
      {highlightWords.map((word, i) => (
        <span
          key={`hl-${i}`}
          className="inline-block overflow-hidden"
          style={{ verticalAlign: "bottom" }}
        >
          <span
            className="word inline-block will-change-transform text-[#ffa07a]"
            style={{ opacity: 0 }}
          >
            {word}
          </span>
          {i < highlightWords.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </Tag>
  );
}