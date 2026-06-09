"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  "General Check-up & Cleaning",
  "Cosmetic Dentistry",
  "Invisalign / Orthodontics",
  "Dental Implants",
  "Emergency Dentistry",
  "Teeth Whitening",
  "Veneers",
  "Pediatric Dentistry",
  "Other",
];

const hours = [
  { day: "Monday – Thursday", time: "8:00 am – 7:00 pm" },
  { day: "Friday", time: "8:00 am – 5:00 pm" },
  { day: "Saturday", time: "9:00 am – 3:00 pm" },
  { day: "Sunday", time: "Closed" },
];

type FormState = "idle" | "loading" | "success";

export default function ContactFormSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredTime: "",
    isNewPatient: "yes",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setFormState("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1800));
    setFormState("success");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section label
      gsap.fromTo(
        ".cf-label",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: ".cf-label", start: "top 88%" } }
      );

      // Form panel
      gsap.fromTo(
        ".cf-form-panel",
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".cf-form-panel", start: "top 82%" },
        }
      );

      // Info panel
      gsap.fromTo(
        ".cf-info-panel",
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".cf-info-panel", start: "top 82%" },
        }
      );

      // Info cards stagger
      gsap.fromTo(
        ".info-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".cf-info-panel", start: "top 78%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#fdfaf5] py-24 lg:py-32 overflow-hidden"
    >
      <div className="w-[90%] mx-auto">
        {/* Section label */}
        <div className="cf-label text-center mb-16 opacity-0">
          <span className="inline-block text-sm font-semibold tracking-[0.28em] uppercase text-[#ffa07a] font-['Cormorant_Garamond'] mb-4">
            Reach Out
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-['Sora'] text-[#1A365D] mb-5 leading-tight">
            Book Your <span className="text-[#ffa07a]">Appointment</span>
          </h2>
          <p className="text-xl text-[#64748B] font-['Poppins'] max-w-2xl mx-auto leading-relaxed font-medium">
            Fill in the form and we'll confirm within 2 business hours. Prefer
            to call? We love that too.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-start">
          {/* ── FORM PANEL ── */}
          <div className="cf-form-panel opacity-0">
            <div className="bg-white rounded-3xl shadow-xl shadow-[#1A365D]/[0.07] border border-[#ffa07a]/10 p-8 md:p-12 relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-[80px] bg-[#ffa07a]/5 pointer-events-none" />
              <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-[40px] bg-[#ffa07a]/8 pointer-events-none" />

              {formState === "success" ? (
                <SuccessState />
              ) : (
                <div className="space-y-7">
                  {/* New patient toggle */}
                  <div>
                    <label className="block text-sm font-semibold font-['Poppins'] text-[#1A365D] mb-3">
                      Are you a new patient?
                    </label>
                    <div className="flex gap-3">
                      {["yes", "no"].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, isNewPatient: val }))}
                          className={`flex-1 py-3 rounded-xl font-['Poppins'] font-semibold text-sm border-2 transition-all duration-300 ${
                            form.isNewPatient === val
                              ? "border-[#ffa07a] bg-[#ffa07a] text-white shadow-md shadow-[#ffa07a]/25"
                              : "border-[#ffa07a]/20 text-[#64748B] hover:border-[#ffa07a]/50"
                          }`}
                        >
                          {val === "yes" ? "Yes, I'm new here 👋" : "Existing patient"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Phone */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <FormField label="Full Name *" required>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full px-5 py-3.5 rounded-xl border border-[#e2e8f0] font-['Poppins'] text-sm text-[#1A365D] placeholder-[#94a3b8] focus:outline-none focus:border-[#ffa07a] focus:ring-2 focus:ring-[#ffa07a]/20 transition-all duration-200 bg-[#fdfaf5]"
                      />
                    </FormField>
                    <FormField label="Phone Number">
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="w-full px-5 py-3.5 rounded-xl border border-[#e2e8f0] font-['Poppins'] text-sm text-[#1A365D] placeholder-[#94a3b8] focus:outline-none focus:border-[#ffa07a] focus:ring-2 focus:ring-[#ffa07a]/20 transition-all duration-200 bg-[#fdfaf5]"
                      />
                    </FormField>
                  </div>

                  {/* Email */}
                  <FormField label="Email Address *" required>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="jane@example.com"
                      className="w-full px-5 py-3.5 rounded-xl border border-[#e2e8f0] font-['Poppins'] text-sm text-[#1A365D] placeholder-[#94a3b8] focus:outline-none focus:border-[#ffa07a] focus:ring-2 focus:ring-[#ffa07a]/20 transition-all duration-200 bg-[#fdfaf5]"
                    />
                  </FormField>

                  {/* Service + Preferred time */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <FormField label="Service Interested In">
                      <div className="relative">
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-5 py-3.5 rounded-xl border border-[#e2e8f0] font-['Poppins'] text-sm text-[#1A365D] focus:outline-none focus:border-[#ffa07a] focus:ring-2 focus:ring-[#ffa07a]/20 transition-all duration-200 bg-[#fdfaf5] appearance-none cursor-pointer"
                        >
                          <option value="">Select a service…</option>
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] pointer-events-none" />
                      </div>
                    </FormField>
                    <FormField label="Preferred Time">
                      <div className="relative">
                        <select
                          name="preferredTime"
                          value={form.preferredTime}
                          onChange={handleChange}
                          className="w-full px-5 py-3.5 rounded-xl border border-[#e2e8f0] font-['Poppins'] text-sm text-[#1A365D] focus:outline-none focus:border-[#ffa07a] focus:ring-2 focus:ring-[#ffa07a]/20 transition-all duration-200 bg-[#fdfaf5] appearance-none cursor-pointer"
                        >
                          <option value="">Any time…</option>
                          <option>Morning (8am – 12pm)</option>
                          <option>Afternoon (12pm – 4pm)</option>
                          <option>Evening (4pm – 7pm)</option>
                          <option>Saturday only</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] pointer-events-none" />
                      </div>
                    </FormField>
                  </div>

                  {/* Message */}
                  <FormField label="Tell Us More">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Any concerns, dental history, or questions you'd like us to know…"
                      className="w-full px-5 py-3.5 rounded-xl border border-[#e2e8f0] font-['Poppins'] text-sm text-[#1A365D] placeholder-[#94a3b8] focus:outline-none focus:border-[#ffa07a] focus:ring-2 focus:ring-[#ffa07a]/20 transition-all duration-200 bg-[#fdfaf5] resize-none"
                    />
                  </FormField>

                  {/* Submit */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={formState === "loading" || !form.name || !form.email}
                    className="w-full flex items-center justify-center gap-3 bg-[#1A365D] text-white font-bold font-['Poppins'] text-base py-4 rounded-xl hover:bg-[#ffa07a] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-[#1A365D]/20 group"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending your request…
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        Request Appointment
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-[#94a3b8] font-['Poppins']">
                    We'll confirm your appointment within 2 business hours.
                    <br />
                    No spam, ever. Your information stays private.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ── INFO PANEL ── */}
          <div className="cf-info-panel opacity-0 space-y-5 mt-2">
            {/* Contact cards */}
            {[
              {
                icon: Phone,
                title: "Phone",
                lines: ["(480) 802-8188"],
                color: "#ffa07a",
                href: "tel:+14808028188",
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["info@.promenadedds.com", "We reply within 2 hrs"],
                color: "#1A365D",
                href: "mailto:info@.promenadedds.com",
              }
            ].map((c) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                className="info-card opacity-0 flex items-start gap-5 bg-white rounded-2xl p-6 border border-[#ffa07a]/15 hover:border-[#ffa07a]/50 hover:shadow-lg shadow-sm transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: c.color + "15", border: `1px solid ${c.color}25` }}
                >
                  <c.icon className="w-5 h-5" style={{ color: c.color }} />
                </div>
                <div>
                  <p className="text-[#1A365D] font-['Poppins'] font-bold text-sm mb-1">{c.title}</p>
                  {c.lines.map((l, i) => (
                    <p key={i} className={`font-['Poppins'] text-sm ${i === 0 ? "text-[#1A365D] font-semibold" : "text-[#94a3b8]"}`}>
                      {l}
                    </p>
                  ))}
                </div>
                <svg
                  className="w-4 h-4 text-[#ffa07a] ml-auto mt-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 shrink-0"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 10h12M12 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}

            {/* Hours */}
            <div className="info-card opacity-0 bg-[#1A365D] rounded-2xl p-6 relative overflow-hidden">
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-[48px] bg-white/5 pointer-events-none" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#ffa07a]/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#ffa07a]" />
                </div>
                <p className="text-white font-bold font-['Poppins'] text-sm">Opening Hours</p>
              </div>
              <div className="space-y-2.5">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between">
                    <span className="text-white/60 font-['Poppins'] text-xs font-medium">{h.day}</span>
                    <span
                      className={`font-['Poppins'] text-xs font-bold ${
                        h.time === "Closed" ? "text-[#ffa07a]/60" : "text-white"
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              {/* Same-day badge */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-300 font-['Poppins'] text-xs font-semibold">
                    Same-day emergency appointments available
                  </span>
                </div>
              </div>
            </div>

            {/* Map embed placeholder */}
            <div className="info-card opacity-0 relative rounded-2xl overflow-hidden h-52 border border-[#ffa07a]/15 shadow-sm group cursor-pointer">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.1648363460204!2d-111.86182122431812!3d33.235984773475174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0007afcee24f%3A0xdf136c0da2f42f68!2s4905%20S%20Alma%20School%20Rd%20Ste%201%2C%20Chandler%2C%20AZ%2085248%2C%20USA!5e0!3m2!1sen!2sin!4v1780655341427!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                title="Promenade Dental location"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A365D]/70 to-transparent p-4 pointer-events-none">
                <p className="text-white font-['Poppins'] font-bold text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#ffa07a]" />
                  4905 S Alma School Rd, Chandler, AZ 85248, USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold font-['Poppins'] text-[#1A365D] mb-2">
        {label}
        {required && <span className="text-[#ffa07a] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

function SuccessState() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, scale: 0.92, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "back.out(1.4)" }
    );
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center text-center py-16 gap-6">
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-green-50 border-4 border-green-200 flex items-center justify-center">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>
        <div className="absolute inset-0 rounded-full border-2 border-green-300 animate-ping opacity-30" />
      </div>
      <div>
        <h3 className="text-2xl font-bold font-['Sora'] text-[#1A365D] mb-2">
          Request Received!
        </h3>
        <p className="text-[#64748B] font-['Poppins'] text-base leading-relaxed max-w-sm mx-auto">
          Thank you! We'll confirm your appointment by email or phone within
          <span className="text-[#ffa07a] font-semibold"> 2 business hours</span>. We
          can't wait to meet you.
        </p>
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="tel:+15551234567"
          className="inline-flex items-center gap-2 bg-[#1A365D] text-white font-semibold font-['Poppins'] text-sm px-6 py-3 rounded-full hover:bg-[#ffa07a] transition-colors duration-300"
        >
          <Phone className="w-4 h-4" />
          Call us directly
        </a>
      </div>
    </div>
  );
}