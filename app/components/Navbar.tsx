/*
 * Navbar enhancements based on design review:
 * - Upgraded sticky behavior for a polished, seamless scroll transition[cite: 75].
 * - Implemented a distinct, brand-aligned hover state (animated underline) for desktop links[cite: 75].
 * - Redesigned the 'Book Appointment' CTA with high-contrast accent colors and hover elevation to drive clicks[cite: 76].
 * - Overhauled the mobile menu into a full-screen, intentional experience with refined typography and spacing[cite: 74].
 */

"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", active: true },
  {
    label: "Treatments",
    href: "#services",
    children: [
      { label: "General Dentistry", href: "#services" },
      { label: "Cosmetic Dentistry", href: "#services" },
      { label: "Orthodontics", href: "#services" },
      { label: "Dental Implants", href: "#services" },
    ],
  },
  { label: "Emergency", href: "#" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(26,54,93,0.05)] py-2"
          : "bg-transparent py-4"
      }`}
    >
      {/* Top micro-bar */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          scrolled ? "h-0 opacity-0" : "h-9 opacity-100 mb-2"
        }`}
      >
        <div className="bg-[#1A365D] text-white/80 text-xs font-['DM_Sans'] tracking-widest uppercase flex items-center justify-center gap-6 h-full px-4 rounded-full max-w-max mx-auto">
          <span className="hidden md:inline">Mon–Fri 8am–7pm · Sat 9am–5pm</span>
          <span className="hidden md:inline w-1 h-1 rounded-full bg-[#ffa07a]" />
          <span className="font-medium text-[#ffa07a]">Emergency Appointments</span>
          <span className="w-1 h-1 rounded-full bg-[#ffa07a]" />
          <a href="tel:+15551234567" className="hover:text-white transition-colors flex items-center gap-2">
            <Phone className="w-3 h-3" />
            (555) 123-4567
          </a>
        </div>
      </div>

      <div className="w-[92%] max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-none group relative z-50">
          <span
            className={`text-2xl md:text-3xl font-black font-['Poppins'] tracking-tight transition-colors duration-500 text-[#1A365D]`}
          >
            Promenade
            <span className="text-[#ffa07a] ml-1.5 inline-block group-hover:-translate-y-1 transition-transform duration-300">✦</span>
          </span>
          <span
            className={`text-[10px] tracking-[0.4em] uppercase font-['DM_Sans'] font-medium mt-1 transition-colors duration-500 text-[#1A365D]/50 `}
          >
            Dental Studio
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={link.href}
                className={`flex items-center gap-1.5 py-2 text-[15px] font-medium font-['DM_Sans'] transition-colors duration-300 relative ${
                  scrolled
                    ? link.active ? "text-[#ffa07a]" : "text-[#1A365D] hover:text-[#ffa07a]"
                    : link.active ? "text-[#ffa07a]" : "text-[#1A365D] hover:text-[#ffa07a]"
                }`}
              >
                {link.label}
                {link.children && (
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === link.label ? "rotate-180" : ""}`} />
                )}
                
                {/* Custom Active/Hover Indicator */}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#ffa07a] transition-all duration-300 ${link.active ? "w-full" : "w-0 group-hover:w-full"}`} />
              </a>

              {/* Dropdown Menu */}
              {link.children && (
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white rounded-2xl shadow-[0_30px_60px_rgba(26,54,93,0.12)] border border-[#FDE8D8]/50 overflow-hidden transition-all duration-300 origin-top ${
                    openDropdown === link.label ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                  }`}
                >
                  <div className="p-3">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="flex items-center gap-3 px-4 py-3 text-[15px] font-medium font-['DM_Sans'] text-[#1A365D]/80 hover:text-[#1A365D] hover:bg-[#FDE8D8]/30 rounded-xl transition-all group/item"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffa07a] scale-0 group-hover/item:scale-100 transition-transform" />
                        <span className="group-hover/item:translate-x-1 transition-transform">{child.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-[#ffa07a] text-[#1A365D] text-[15px] font-bold font-['DM_Sans'] px-7 py-3.5 rounded-full shadow-[0_8px_20px_rgba(255,160,122,0.3)] hover:shadow-[0_8px_25px_rgba(255,160,122,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Book Appointment
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden relative z-50 p-2.5 rounded-full transition-colors ${
            scrolled || mobileOpen ? "bg-[#1A365D]/5 text-[#1A365D]" : "bg-[#1A365D]/40 text-white backdrop-blur-sm"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Full-Screen Overlay */}
      <div
      className={`fixed inset-0 bg-[#FDE8D8] z-40 lg:hidden transition-all duration-500 ease-[0.22,1,0.36,1] ${
        mobileOpen
          ? "translate-y-0 opacity-100 visible"
          : "-translate-y-full opacity-0 invisible pointer-events-none"
      }`}
    >
        <div className="flex flex-col h-full pt-28 px-8 pb-12 overflow-y-auto">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <div 
                key={link.label}
                className="border-b border-[#1A365D]/10 pb-4"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <button
  onClick={() => {
    if (link.children) {
      setMobileDropdown(
        mobileDropdown === link.label ? null : link.label
      );
    } else {
      setMobileOpen(false);
    }
  }}
  className="w-full flex items-center justify-between text-left text-xl font-semibold font-['Poppins'] text-[#1A365D]"
>
  <span>{link.label}</span>

  {link.children && (
    <ChevronDown
      className={`w-6 h-6 text-[#ffa07a] transition-transform duration-300 ${
        mobileDropdown === link.label ? "rotate-180" : ""
      }`}
    />
  )}
</button>
                
                {/* Mobile Sub-links */}
                {link.children && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileDropdown === link.label
                      ? "max-h-96 mt-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col gap-3 pl-4 border-l-2 border-[#ffa07a]/30">
                                  {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-lg font-['DM_Sans'] font-medium text-[#1A365D]/70 hover:text-[#ffa07a] transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-auto pt-10 flex flex-col gap-4">
            <a
              href="tel:+15551234567"
              className="flex items-center justify-center gap-3 py-4 text-[#1A365D] font-['DM_Sans'] text-lg font-medium bg-white/50 rounded-2xl"
            >
              <Phone className="w-5 h-5 text-[#ffa07a]" />
              (555) 123-4567
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#1A365D] text-white font-bold font-['DM_Sans'] text-lg px-8 py-5 rounded-full hover:bg-[#ffa07a] hover:text-[#1A365D] transition-colors shadow-lg"
            >
              Book Appointment
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}