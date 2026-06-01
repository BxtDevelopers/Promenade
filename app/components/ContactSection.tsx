/*
 * Updates applied based on design feedback:
 * - Typography: Titles use Poppins for strong visual authority, while subtitles, form labels, and body text are updated to DM Sans for a clear hierarchy and character[cite: 8].
 * - Section Differentiation: Added a subtle warm background treatment to the section to break the clinical white uniformity and create visual rhythm[cite: 8].
 * - Cards & Components: Upgraded the form container and info cards with deep, layered shadows, refined border treatments, and tactile hover states[cite: 8].
 * - Whitespace & Layout: Implemented a generous spacing scale for paddings and grid gaps to give the layout breathing room and intentional structure[cite: 8].
 */

"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 5:00 PM" },
  { day: "Sunday", time: "Emergency Only" },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "", date: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-24 lg:py-32 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40vw] h-[40vw] rounded-full bg-[#ffa07a]/10 blur-[80px]" />
        <div className="absolute bottom-[10%] -left-[10%] w-[30vw] h-[30vw] rounded-full bg-white/60 blur-[60px]" />
      </div>

      <div className="w-[92%] max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-[#ffa07a]" />
            <span className="text-sm font-bold tracking-[0.25em] uppercase text-[#ffa07a] font-['DM_Sans']">
              Get in Touch
            </span>
            <span className="w-10 h-[2px] bg-[#ffa07a]" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] text-[#1A365D] mb-6 tracking-tight">
            Book Your <span className="text-[#ffa07a]">Appointment</span>
          </h2>
          <p className="text-[17px] text-[#1A365D]/70 font-['DM_Sans'] max-w-xl mx-auto font-medium leading-relaxed">
            Ready for a healthier, more beautiful smile? Fill out the form below and our team will confirm your appointment within 2 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map placeholder */}
            <div className="rounded-[2rem] overflow-hidden h-64 bg-[#1A365D] relative shadow-[0_15px_35px_rgba(26,54,93,0.15)] group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D] via-[#1A365D]/80 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <div className="text-white transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-14 h-14 bg-[#ffa07a] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(255,160,122,0.4)]">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-['Poppins'] font-bold text-[18px] mb-1">Promenade Dental Studio</p>
                  <p className="text-[15px] text-white/80 font-['DM_Sans'] font-medium">123 Smile Avenue, Suite 200</p>
                  <p className="text-[15px] text-white/80 font-['DM_Sans'] font-medium">Toronto, ON M5V 1J2</p>
                </div>
              </div>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {[
                { icon: Phone, label: "Call Us Today", value: "(555) 123-4567", href: "tel:+15551234567" },
                { icon: Mail, label: "Send an Email", value: "hello@promenadedental.ca", href: "mailto:hello@promenadedental.ca" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-5 p-5 bg-white rounded-[1.5rem] border border-[#1A365D]/5 hover:border-[#ffa07a]/30 shadow-[0_4px_15px_rgba(26,54,93,0.03)] hover:shadow-[0_15px_30px_rgba(26,54,93,0.08)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#FDE8D8] text-[#ffa07a] flex items-center justify-center shrink-0 group-hover:bg-[#ffa07a] group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[13px] text-[#1A365D]/60 font-['DM_Sans'] font-bold uppercase tracking-wider">{item.label}</p>
                    <p className="text-[16px] font-bold text-[#1A365D] font-['Poppins']">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div className="p-8 bg-white rounded-[2rem] border border-[#1A365D]/5 shadow-[0_10px_30px_rgba(26,54,93,0.05)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#1A365D]/5 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#ffa07a]" />
                </div>
                <span className="font-bold text-[#1A365D] font-['Poppins'] text-[18px]">Opening Hours</span>
              </div>
              <div className="space-y-4">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center text-[15px] font-['DM_Sans'] border-b border-[#1A365D]/5 pb-3 last:border-0 last:pb-0">
                    <span className="text-[#1A365D]/70 font-medium">{h.day}</span>
                    <span className={`font-bold ${h.time === "Emergency Only" ? "text-[#ffa07a]" : "text-[#1A365D]"}`}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 lg:p-16 bg-white rounded-[2.5rem] border border-[#1A365D]/5 shadow-[0_20px_50px_rgba(26,54,93,0.08)]">
                <div className="w-24 h-24 rounded-full bg-[#FDE8D8] text-[#ffa07a] flex items-center justify-center mb-8 shadow-inner">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold font-['Poppins'] text-[#1A365D] mb-4">Request Received!</h3>
                <p className="text-[17px] text-[#1A365D]/70 font-['DM_Sans'] leading-relaxed font-medium max-w-md">
                  Thank you, <span className="font-bold text-[#1A365D]">{form.name}</span>! Our team will confirm your appointment within 2 hours. Check your email at <span className="text-[#ffa07a]">{form.email}</span> for details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 inline-flex items-center gap-2 text-[#1A365D] font-bold font-['DM_Sans'] hover:text-[#ffa07a] transition-colors"
                >
                  Book another appointment <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-[2.5rem] border border-[#1A365D]/5 p-8 lg:p-12 space-y-7 shadow-[0_20px_60px_rgba(26,54,93,0.08)]"
              >
                <div className="grid md:grid-cols-2 gap-7">
                  {[
                    { id: "name", label: "Full Name *", type: "text", placeholder: "Jane Smith" },
                    { id: "email", label: "Email Address *", type: "email", placeholder: "jane@example.com" },
                    { id: "phone", label: "Phone Number", type: "tel", placeholder: "(555) 000-0000" },
                    { id: "date", label: "Preferred Date", type: "date", placeholder: "" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="block text-[14px] font-bold text-[#1A365D] font-['DM_Sans'] mb-2.5">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required={field.label.includes("*")}
                        placeholder={field.placeholder}
                        value={(form as any)[field.id]}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-[#1A365D]/5 text-[#1A365D] font-['DM_Sans'] font-medium text-[15px] placeholder-[#1A365D]/40 focus:outline-none focus:border-[#ffa07a]/50 focus:bg-white focus:shadow-[0_0_20px_rgba(255,160,122,0.15)] transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-[#1A365D] font-['DM_Sans'] mb-2.5">
                    Service Interested In
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-[#1A365D]/5 text-[#1A365D] font-['DM_Sans'] font-medium text-[15px] focus:outline-none focus:border-[#ffa07a]/50 focus:bg-white focus:shadow-[0_0_20px_rgba(255,160,122,0.15)] transition-all duration-300 cursor-pointer appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%231A365D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}
                  >
                    <option value="">Select a service...</option>
                    <option>General Dentistry / Check-up</option>
                    <option>Teeth Whitening</option>
                    <option>Invisalign / Orthodontics</option>
                    <option>Dental Implants</option>
                    <option>Veneers / Smile Makeover</option>
                    <option>Pediatric Dentistry</option>
                    <option>Emergency Care</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-[#1A365D] font-['DM_Sans'] mb-2.5">
                    Message or Special Request
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your concerns or any questions you have..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-[#1A365D]/5 text-[#1A365D] font-['DM_Sans'] font-medium text-[15px] placeholder-[#1A365D]/40 focus:outline-none focus:border-[#ffa07a]/50 focus:bg-white focus:shadow-[0_0_20px_rgba(255,160,122,0.15)] transition-all duration-300 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-[#1A365D] text-white font-bold font-['DM_Sans'] text-[16px] py-4.5 rounded-full hover:bg-[#ffa07a] hover:shadow-[0_10px_25px_rgba(255,160,122,0.4)] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    Book My Appointment
                  </button>
                </div>

                <p className="text-center text-[13px] text-[#1A365D]/50 font-['DM_Sans'] font-medium">
                  By submitting, you agree to our Privacy Policy. We keep your information secure.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}