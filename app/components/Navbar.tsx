"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
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
  { label: "Emergency Dentistry", href: "#" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-[0_2px_40px_rgba(26,54,93,0.10)] border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="w-[95%] mx-auto flex items-center justify-between h-20">
        {/* Logo - text only */}
        <a href="#home" className="flex flex-col leading-none group">
          <span className={`text-2xl font-bold font-['Cormorant_Garamond'] tracking-tight transition-colors ${scrolled ? "text-[#1A365D]" : "text-white"}`}>
            Promenade Dental
          </span>
          <span className={`text-[10px] tracking-[0.22em] uppercase font-['Poppins'] transition-colors ${scrolled ? "text-[#ffa07a]" : "text-white/70"}`}>
            Studio · Est. 2009
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={link.href}
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-[15px] font-medium font-['Poppins'] transition-all duration-200 ${
                  scrolled
                    ? "text-[#1A365D] hover:text-[#ffa07a]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
              </a>
              {link.children && openDropdown === link.label && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fade-in">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-5 py-3.5 text-[14px] font-['Poppins'] text-[#1A365D] hover:bg-gray-50 hover:text-[#ffa07a] transition-colors"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+15551234567"
            className={`flex items-center gap-2 text-[15px] font-medium font-['Poppins'] transition-colors ${
              scrolled ? "text-[#1A365D]" : "text-white/90"
            }`}
          >
            <Phone className="w-4 h-4" />
            (555) 123-4567
          </a>
          <a
            href="#contact"
            className="bg-[#ffa07a] text-white text-[14px] font-semibold font-['Poppins'] px-7 py-3 rounded-full hover:bg-[#d05a24] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-full transition-colors ${scrolled ? "text-[#1A365D]" : "text-white"}`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3.5 text-[#1A365D] font-medium font-['Poppins'] text-[15px] rounded-xl hover:bg-gray-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="#contact"
              className="block w-full text-center bg-[#ffa07a] text-white font-semibold font-['Poppins'] px-6 py-3.5 rounded-full"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}