"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "How do I book an emergency appointment?",
    a: "Call us at (555) 123-4567 before 10am and we'll fit you in the same day. We reserve dedicated emergency slots every morning. If it's after hours, our voicemail gives you the on-call number.",
  },
  {
    q: "Do you accept my dental insurance?",
    a: "We welcome all major insurance plans and provide direct billing so you pay only your co-pay at the time of your visit. Our front desk team will verify your coverage before your appointment — no surprises.",
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Your insurance card (if applicable), a valid photo ID, and any previous dental X-rays you may have. If you're on medication, a list of what you take is very helpful. Arrive 10 minutes early to complete a brief health history form.",
  },
  {
    q: "Is parking available at the clinic?",
    a: "Yes — we have a complimentary private parking lot directly behind the building. Accessible spots are located closest to the entrance. TTC stops are also within a 5-minute walk.",
  },
  {
    q: "Do you offer payment plans or financing?",
    a: "Absolutely. We partner with Dentalcard and offer 0% interest financing for up to 12 months on approved credit. We can walk you through the options at your consultation — no pressure, just options.",
  },
  {
    q: "I'm anxious about dental visits — what do you offer?",
    a: "We understand completely. Our calming environment, nitrous oxide (laughing gas), and gentle chairside manner are specifically designed for anxious patients. We also offer oral sedation upon request. Just let us know when you book and we'll tailor your visit.",
  },
];

export default function ContactFAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => {
    const isOpening = open !== i;
    setOpen(isOpening ? i : null);
  };

  useEffect(() => {
    // Animate open/close
    faqs.forEach((_, i) => {
      const el = contentRefs.current[i];
      if (!el) return;
      if (open === i) {
        gsap.fromTo(el, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.45, ease: "power3.out" });
      } else {
        gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: "power3.in" });
      }
    });
  }, [open]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-header",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".faq-header", start: "top 85%" } }
      );
      gsap.fromTo(
        ".faq-item",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out", scrollTrigger: { trigger: ".faq-list", start: "top 80%" } }
      );
      gsap.fromTo(
        ".faq-cta",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".faq-cta", start: "top 90%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#fdfaf5] py-24 lg:py-32 overflow-hidden">
      {/* Divider wave from top */}
      <div className="w-[90%] mx-auto">
        <div className="grid lg:grid-cols-[380px_1fr] gap-16 items-start">
          {/* LEFT — sticky header */}
          <div className="lg:sticky lg:top-32">
            <div className="faq-header opacity-0">
              <span className="inline-block text-sm font-semibold tracking-[0.28em] uppercase text-[#ffa07a] font-['Cormorant_Garamond'] mb-4">
                Quick Answers
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-['Sora'] text-[#1A365D] mb-5 leading-tight">
                Frequently Asked{" "}
                <span className="text-[#ffa07a]">Questions</span>
              </h2>
              <p className="text-lg text-[#64748B] font-['Poppins'] leading-relaxed font-medium mb-8">
                Can't find what you're looking for? Just pick up the phone — our
                team loves chatting.
              </p>

              {/* CTA card */}
              <div className="faq-cta opacity-0 bg-[#1A365D] rounded-3xl p-7 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-[40px] bg-[#ffa07a]/10 pointer-events-none" />
                <p className="text-white font-bold font-['Sora'] text-xl mb-2">
                  Still have questions?
                </p>
                <p className="text-white/60 font-['Poppins'] text-sm mb-6 leading-relaxed">
                  Our friendly team is happy to answer anything before you book.
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 bg-[#ffa07a] text-white font-semibold font-['Poppins'] text-sm px-6 py-3 rounded-full hover:bg-white hover:text-[#ffa07a] transition-all duration-300"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.13 1.2 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — accordion */}
          <div className="faq-list space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="faq-item opacity-0 bg-white rounded-2xl border border-[#ffa07a]/15 overflow-hidden hover:border-[#ffa07a]/40 transition-border duration-300 shadow-sm hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-start gap-5 p-6 text-left group"
                >
                  {/* Number */}
                  <span
                    className="text-xs font-bold font-['Poppins'] w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300"
                    style={{
                      background: open === i ? "#ffa07a" : "#ffa07a18",
                      color: open === i ? "white" : "#ffa07a",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`flex-1 font-['Sora'] font-bold text-base leading-snug transition-colors duration-300 ${
                      open === i ? "text-[#ffa07a]" : "text-[#1A365D] group-hover:text-[#ffa07a]"
                    }`}
                  >
                    {faq.q}
                  </span>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
                      open === i ? "bg-[#ffa07a] rotate-0" : "bg-[#ffa07a]/10 rotate-0"
                    }`}
                  >
                    {open === i ? (
                      <Minus className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-[#ffa07a]" />
                    )}
                  </div>
                </button>

                {/* Answer — height animated via GSAP */}
                <div
                  ref={(el) => { contentRefs.current[i] = el; }}
                  style={{ height: 0, overflow: "hidden", opacity: 0 }}
                >
                  <div className="px-6 pb-6 pl-[4.5rem]">
                    <p className="text-[#64748B] font-['Poppins'] text-sm leading-relaxed font-medium border-t border-[#ffa07a]/10 pt-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}