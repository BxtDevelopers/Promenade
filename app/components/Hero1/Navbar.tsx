
"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown, Clock } from "lucide-react";

const navLinks = [
  {
     label: "Home",
     href: "#home",
     children: [
       { label: "Home v2", href: "/home-1" },
     ],
  },
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
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Top announcement bar ── */}
      <div
        className="fixed top-0 left-0 right-0 z-50 hidden lg:flex items-center justify-center gap-6 px-6 py-2 text-white text-xs font-['Poppins'] font-medium"
        style={{ background: "#1A365D" }}
      >
        <span className="flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-[#ffa07a]" />
          Mon–Fri 8am–7pm &nbsp;·&nbsp; Sat 9am–5pm
        </span>
        <span className="hidden sm:flex items-center gap-1.5 text-white/50">|</span>
        <span className="hidden sm:flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ffa07a] animate-pulse" />
          New Patient Special: Exam + X-rays for
          <span className="text-[#ffa07a] font-bold ml-1">$99</span>
        </span>
      </div>

      {/* ── Main navbar ── */}
      <header
        className="fixed top-0 md:top-8 left-0 right-0 z-50 transition-all duration-500"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "bg-white/90 shadow-[0_4px_40px_rgba(26,54,93,0.10)]"
              : "bg-transparent"
          }`}
        >
          <div className="w-[95%] mx-auto flex items-center justify-between h-[72px]">

            {/* Logo */}
            <a href="#home" className="flex items-center">
              <img
                src="/assets/PDlogo_red3.webp"
                alt="Promenade Dental Logo"
                className="w-52 md:w-56 h-auto transition-opacity duration-300"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = activeLink === link.label;
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    //@ts-ignore
                    onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <a
                      href={link.href}
                      onClick={() => setActiveLink(link.label)}
                      className={`relative flex items-center gap-1 px-3.5 py-2 rounded-full text-[14px] font-medium font-['Poppins'] transition-all duration-200 ${
                        scrolled
                          ? isActive
                            ? "text-[#ffa07a]"
                            : "text-[#1A365D] hover:text-[#ffa07a]"
                          : isActive
                          ? "text-[#ffa07a]"
                          : "text-white hover:text-white/70"
                      }`}
                    >
                      {link.label}
                      {link.children && (
                        <ChevronDown
                          className="w-3 h-3 opacity-60 transition-transform duration-200 group-hover:rotate-180"
                        />
                      )}
                    </a>

                    {/* Dropdown */}
                    {link.children && openDropdown === link.label && (
                      <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-[0_16px_48px_rgba(26,54,93,0.14)]  overflow-hidden z-50">
                        {/* Dropdown top accent */}
                        {link.children.map((child, i) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="flex items-center gap-3 px-5 py-3.5 text-[13px] font-['Poppins'] font-medium text-[#1A365D] hover:bg-[#fdfaf5] hover:text-[#ffa07a] transition-colors group/item border-b border-gray-200 hover:border-[#ffa07a]/80 last:border-0"
                          >
                            {/* Tiny dot accent */}
                            <span className="w-1 h-1 rounded-full bg-[#ffa07a]/40 group-hover/item:bg-[#ffa07a] transition-colors shrink-0" />
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right side CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone */}
              <a
                href="tel:+15551234567"
                className={`flex items-center gap-2 text-[14px] font-medium font-['Poppins'] transition-colors group ${
                  scrolled ? "text-[#1A365D]" : "text-white/85"
                }`}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{ background: scrolled ? "#ffa07a18" : "rgba(255,255,255,0.12)" }}
                >
                  <Phone className="w-3.5 h-3.5 text-[#ffa07a]" />
                </div>
                <span className="group-hover:text-[#ffa07a] transition-colors">(555) 123-4567</span>
              </a>

              {/* Divider */}
              <div className={`w-px h-5 ${scrolled ? "bg-[#1A365D]/12" : "bg-white/20"}`} />

              {/* Book button */}
              <a
                href="#contact"
                className="relative overflow-hidden bg-[#ffa07a] text-white text-[14px] font-semibold font-['Poppins'] px-6 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-[#ffa07a]/25 hover:shadow-lg hover:shadow-[#ffa07a]/30 hover:-translate-y-0.5 group"
              >
                {/* Shine sweep on hover */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative">Book Appointment</span>
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                scrolled
                  ? "bg-[#1A365D]/06 text-[#1A365D] hover:bg-[#1A365D]/10"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ${
            mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ background: "white", borderTop: mobileOpen ? "1px solid rgba(26,54,93,0.06)" : "none" }}
        >
          <div className="px-5 py-5 space-y-1">
            {navLinks.map((link) => (
  <div key={link.label}>
    {link.children ? (
      <>
        <button
          onClick={() =>
            setMobileDropdown(
              mobileDropdown === link.label ? null : link.label
            )
          }
          className="w-full flex items-center justify-between px-4 py-3 text-[#1A365D] font-medium font-['Poppins'] text-[15px] rounded-xl hover:bg-[#fdfaf5] hover:text-[#ffa07a] transition-colors"
        >
          <span>{link.label}</span>

          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              mobileDropdown === link.label ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            mobileDropdown === link.label
              ? "max-h-60 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="pl-6 py-1 space-y-1">
            {link.children.map((child) => (
              <a
                key={child.label}
                href={child.href}
                onClick={() => {
                  setMobileOpen(false);
                  setMobileDropdown(null);
                  setActiveLink(link.label);
                }}
                className="block px-4 py-2 text-sm text-[#64748B] hover:text-[#ffa07a] transition-colors"
              >
                {child.label}
              </a>
            ))}
          </div>
        </div>
      </>
    ) : (
      <a
        href={link.href}
        onClick={() => {
          setMobileOpen(false);
          setActiveLink(link.label);
        }}
        className="flex items-center justify-between px-4 py-3 text-[#1A365D] font-medium font-['Poppins'] text-[15px] rounded-xl hover:bg-[#fdfaf5] hover:text-[#ffa07a] transition-colors"
      >
        {link.label}
      </a>
    )}
  </div>
))}

            {/* Mobile bottom actions */}
            <div className="pt-4 space-y-3 border-t border-[#1A365D]/06 mt-3">
              <a
                href="tel:+15551234567"
                className="flex items-center justify-center gap-2 w-full border-2 border-[#1A365D]/12 text-[#1A365D] font-semibold font-['Poppins'] px-6 py-3 rounded-full hover:border-[#ffa07a] hover:text-[#ffa07a] transition-colors"
              >
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center w-full bg-[#ffa07a] text-white font-semibold font-['Poppins'] px-6 py-3.5 rounded-full shadow-md shadow-[#ffa07a]/25"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

// "use client";
// import { useState, useEffect } from "react";
// import { Phone, Menu, X, ChevronDown } from "lucide-react";

// const navLinks = [
//   { label: "Home", href: "#home" },
//   {
//     label: "Treatments",
//     href: "#services",
//     children: [
//       { label: "General Dentistry", href: "#services" },
//       { label: "Cosmetic Dentistry", href: "#services" },
//       { label: "Orthodontics", href: "#services" },
//       { label: "Dental Implants", href: "#services" },
//     ],
//   },
//   { label: "Emergency Dentistry", href: "#" },
//   { label: "About", href: "#about" },
//   { label: "Reviews", href: "#reviews" },
//   { label: "FAQ", href: "#faq" },
//   { label: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [activeLink, setActiveLink] = useState("Home");

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         scrolled
//           // Whole navbar glass effect on scroll
//           ? "bg-white/75 backdrop-blur-md shadow-[0_2px_20px_rgba(26,54,93,0.05)] border-b border-white/20"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="w-[95%] mx-auto flex items-center justify-between h-20">
//         {/* Logo */}
//         <a 
//           href="#home" 
//           onClick={() => setActiveLink("Home")}
//           className="flex flex-col leading-none group"
//         >
//           <span className={`text-2xl font-bold font-['Cormorant_Garamond'] tracking-tight transition-colors ${scrolled ? "text-[#1A365D]" : "text-white"}`}>
//             Promenade Dental
//           </span>
//           <span className={`text-[10px] tracking-[0.22em] uppercase font-['Poppins'] transition-colors ${scrolled ? "text-[#ffa07a]" : "text-white/70"}`}>
//             Studio · Est. 2009
//           </span>
//         </a>

//         {/* Desktop Nav */}
//         <nav className="hidden lg:flex items-center gap-1">
//           {navLinks.map((link) => {
//             const isActive = activeLink === link.label;
            
//             return (
//               <div
//                 key={link.label}
//                 className="relative group"
//                 onMouseEnter={() => link.children && setOpenDropdown(link.label)}
//                 onMouseLeave={() => setOpenDropdown(null)}
//               >
//                 <a
//                   href={link.href}
//                   onClick={() => setActiveLink(link.label)}
//                   className={`flex items-center gap-1 px-4 py-2 rounded-md text-[15px] font-medium font-['Poppins'] transition-all duration-200 ${
//                     scrolled
//                       // SCROLLED STATE (Light Background)
//                       // Replace #E2E8F0 (active) and #EDF2F7 (hover) with your color-hex palette
//                       ? `text-[#1A365D] ${isActive ? "bg-[#E2E8F0]" : "hover:bg-[#EDF2F7]"}`
                      
//                       // TOP STATE (Dark/Image Background)
//                       // Replace #2C5282 (active) and #2A4365 (hover) with your color-hex palette
//                       : `text-white/90 ${isActive ? "bg-[#2C5282] text-white" : "hover:bg-[#2A4365] hover:text-white"}`
//                   }`}
//                 >
//                   {link.label}
//                   {link.children && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
//                 </a>

//                 {/* Dropdown Menu */}
//                 {link.children && openDropdown === link.label && (
//                   <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-fade-in">
//                     {link.children.map((child) => (
//                       <a
//                         key={child.label}
//                         href={child.href}
//                         onClick={() => {
//                           setActiveLink(link.label);
//                           setOpenDropdown(null);
//                         }}
//                         className="block px-5 py-3.5 text-[14px] font-['Poppins'] text-[#1A365D] hover:bg-[#EDF2F7] hover:text-[#ffa07a] transition-colors"
//                       >
//                         {child.label}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </nav>

//         {/* CTA */}
//         <div className="hidden lg:flex items-center gap-5">
//           <a
//             href="tel:+15551234567"
//             className={`flex items-center gap-2 text-[15px] font-medium font-['Poppins'] transition-colors ${
//               scrolled ? "text-[#1A365D]" : "text-white/90"
//             }`}
//           >
//             <Phone className="w-4 h-4" />
//             (555) 123-4567
//           </a>
//           <a
//             href="#contact"
//             className="bg-[#ffa07a] text-white text-[14px] font-semibold font-['Poppins'] px-7 py-3 rounded-md hover:bg-[#d05a24] transition-all duration-300 shadow-lg hover:shadow-xl"
//           >
//             Book Appointment
//           </a>
//         </div>

//         {/* Mobile toggle */}
//         <button
//           onClick={() => setMobileOpen(!mobileOpen)}
//           // Mobile menu toggle icon backgrounds
//           className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? "text-[#1A365D] hover:bg-[#EDF2F7]" : "text-white hover:bg-[#2A4365]"}`}
//         >
//           {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-6 space-y-1 shadow-xl">
//           {navLinks.map((link) => {
//             const isActive = activeLink === link.label;
            
//             return (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 onClick={() => {
//                   setActiveLink(link.label);
//                   setMobileOpen(false);
//                 }}
//                 className={`block px-4 py-3.5 font-medium font-['Poppins'] text-[15px] rounded-md transition-colors ${
//                   // Mobile link backgrounds
//                   isActive ? "bg-[#E2E8F0] text-[#1A365D]" : "text-[#1A365D] hover:bg-[#EDF2F7]"
//                 }`}
//               >
//                 {link.label}
//               </a>
//             );
//           })}
//           <div className="pt-4">
//             <a
//               href="#contact"
//               className="block w-full text-center bg-[#ffa07a] text-white font-semibold font-['Poppins'] px-6 py-3.5 rounded-md"
//             >
//               Book Appointment
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import { Phone, Menu, X, ChevronDown } from "lucide-react";

// const navLinks = [
//   { label: "Home", href: "#home" },
//   {
//     label: "Treatments",
//     href: "#services",
//     children: [
//       { label: "General Dentistry", href: "#services" },
//       { label: "Cosmetic Dentistry", href: "#services" },
//       { label: "Orthodontics", href: "#services" },
//       { label: "Dental Implants", href: "#services" },
//     ],
//   },
//   { label: "Emergency Dentistry", href: "#" },
//   { label: "About", href: "#about" },
//   { label: "Reviews", href: "#reviews" },
//   { label: "FAQ", href: "#faq" },
//   { label: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [activeLink, setActiveLink] = useState("Home");

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         scrolled
//           ? "bg-white/70 backdrop-blur-md shadow-[0_2px_20px_rgba(26,54,93,0.05)] border-b border-gray-200"
//           : "bg-transparent" // Or whatever background color you are using (like the cyan in your image)
//       }`}
//     >
//       <div className="w-[95%] mx-auto flex items-center justify-between h-20">
//         {/* Logo */}
//         <a 
//           href="#home" 
//           onClick={() => setActiveLink("Home")}
//           className="flex flex-col leading-none group"
//         >
//           <img src='/assets/PDlogo_red3.webp' alt='Promenade Dental Logo' className="w-72 h-auto" />
//         </a>

//         {/* Desktop Nav - Added h-full to make tabs stretch */}
//         <nav className="hidden lg:flex items-center h-full">
//           {navLinks.map((link) => {
//             const isActive = activeLink === link.label;
            
//             return (
//               <div
//                 key={link.label}
//                 // Added h-full to the wrapper
//                 className="relative group h-full"
//                 onMouseEnter={() => link.children && setOpenDropdown(link.label)}
//                 onMouseLeave={() => setOpenDropdown(null)}
//               >
//                 <a
//                   href={link.href}
//                   onClick={() => setActiveLink(link.label)}
//                   // Removed rounded corners, added h-full to stretch top-to-bottom
//                   className={`flex items-center gap-1 h-full px-5 text-[15px] font-medium font-['Poppins'] transition-all duration-200 ${
//                     scrolled
//                       // When scrolled (white bg), use a subtle gray block for hover/active
//                       ? `text-[#1A365D] ${isActive ? "bg-[#7B1E2B]/30 text-black" : "hover:bg-gray-100"}`
                      
//                       // Top state (Color/Image bg), uses the solid white block from your image
//                       : `${isActive ? "bg-[#7B1E2B] text-white" : "text-white/90 hover:bg-white hover:text-black"}`
//                   }`}
//                 >
//                   {link.label}
//                   {link.children && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
//                 </a>

//                 {/* Dropdown Menu */}
//                 {link.children && openDropdown === link.label && (
//                   <div className="absolute top-full left-0 w-56 bg-white shadow-xl border border-gray-100 overflow-hidden z-50 animate-fade-in">
//                     {link.children.map((child) => (
//                       <a
//                         key={child.label}
//                         href={child.href}
//                         onClick={() => {
//                           setActiveLink(link.label);
//                           setOpenDropdown(null);
//                         }}
//                         className="block px-5 py-3.5 text-[14px] font-['Poppins'] text-[#1A365D] hover:bg-[#7B1E2B]/30 transition-colors"
//                       >
//                         {child.label}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </nav>

//         {/* CTA */}
//         <div className="hidden lg:flex items-center gap-5">
//           <a
//             href="tel:+15551234567"
//             className={`flex items-center gap-2 text-[15px] font-medium font-['Poppins'] transition-colors ${
//               scrolled ? "text-[#1A365D]" : "text-white/90"
//             }`}
//           >
//             <Phone className="w-4 h-4" />
//             (555) 123-4567
//           </a>
//           <a
//             href="#contact"
//             className="bg-[#ffa07a] text-white text-[14px] font-semibold font-['Poppins'] px-7 py-3 rounded-md hover:bg-[#d05a24] transition-all duration-300 shadow-lg hover:shadow-xl"
//           >
//             Book Appointment
//           </a>
//         </div>

//         {/* Mobile toggle */}
//         <button
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? "text-[#1A365D] hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
//         >
//           {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-6 space-y-1 shadow-xl">
//           {navLinks.map((link) => {
//             const isActive = activeLink === link.label;
            
//             return (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 onClick={() => {
//                   setActiveLink(link.label);
//                   setMobileOpen(false);
//                 }}
//                 // Mobile links updated to match the square block look
//                 className={`block px-4 py-3.5 font-medium font-['Poppins'] text-[15px] transition-colors ${
//                   isActive ? "bg-gray-100 text-[#1A365D]" : "text-[#1A365D] hover:bg-gray-50"
//                 }`}
//               >
//                 {link.label}
//               </a>
//             );
//           })}
//           <div className="pt-4">
//             <a
//               href="#contact"
//               className="block w-full text-center bg-[#ffa07a] text-white font-semibold font-['Poppins'] px-6 py-3.5 rounded-md"
//             >
//               Book Appointment
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import { Phone, Menu, X, ChevronDown } from "lucide-react";

// const navLinks = [
//    {
//     label: "Home",
//     href: "#home",
//     children: [
//       { label: "Home v2", href: "/home-1" },
//     ],
//   },
//   {
//     label: "Treatments",
//     href: "#services",
//     children: [
//       { label: "General Dentistry", href: "#services" },
//       { label: "Cosmetic Dentistry", href: "#services" },
//       { label: "Orthodontics", href: "#services" },
//       { label: "Dental Implants", href: "#services" },
//     ],
//   },
//   { label: "Emergency Dentistry", href: "#" },
//   { label: "About", href: "#about" },
//   { label: "Reviews", href: "#reviews" },
//   { label: "FAQ", href: "#faq" },
//   { label: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
// const [mobileOpen, setMobileOpen] = useState(false);
// const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
// const [activeLink, setActiveLink] = useState("Home");

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   useEffect(() => {
//   if (mobileOpen) {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "";
//   }

//   return () => {
//     document.body.style.overflow = "";
//   };
// }, [mobileOpen]);

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-['Jost',sans-serif]`}
//       >
//         {/* ── Announcement Bar ── */}
//         <div
//           className={`hidden lg:flex items-center justify-center gap-6 bg-[#f95700] text-white/85 text-[11px] tracking-[0.12em] uppercase font-normal transition-all duration-500 overflow-hidden ${
//             scrolled ? "h-0 opacity-0" : "h-9 opacity-100"
//           }`}
//         >
//           <span>New patients welcome</span>
//           <span className="w-1 h-1 rounded-full bg-white/40 inline-block" />
//           <span>Same-day emergency appointments</span>
//           <span className="w-1 h-1 rounded-full bg-white/40 inline-block" />
//           <span>0% finance available</span>
//         </div>

//         {/* ── Main Nav ── */}
//         <div
//             className={`w-full px-5 lg:px-10 flex items-center justify-between transition-all duration-500 ${
//                 scrolled
//                 ? "h-16 border-b border-[#b88c3c]/25 bg-[#0a0602]/90 backdrop-blur-xl shadow-[0_4px_40px_rgba(0,0,0,0.5)]"
//                 : "h-20 border-b border-white/[0.04] bg-transparent"
//             }`}
//             >
//           {/* Logo */}
//           <a
//             href="#home"
//             onClick={() => setActiveLink("Home")}
//             className="flex items-center gap-3.5 flex-shrink-0 group"
//           >
//             <div className="flex flex-col leading-none">
//               <span className="text-[22px] font-semibold font-['Cormorant_Garamond'] text-white tracking-tight leading-none">
//                 Promenade Dental
//               </span>
//               <span className="text-[9px] tracking-[0.28em] uppercase font-['Jost'] text-[#c9922a] mt-0.5">
//                 Studio · Est. 2009
//               </span>
//             </div>
//           </a>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center gap-0.5">
//   {navLinks.map((link) => {
//     const isActive = activeLink === link.label;

//     return (
//       <div
//         key={link.label}
//         className="relative group"
//       >
//         <a
//           href={link.href}
//           onClick={() => setActiveLink(link.label)}
//           className={`flex items-center gap-1 px-3.5 py-2 text-[12px] font-normal tracking-[0.09em] uppercase transition-colors duration-200 whitespace-nowrap ${
//             isActive
//               ? "text-[#e8b86d]"
//               : "text-white/70 hover:text-white"
//           }`}
//         >
//           {link.label}

//           {link.children && (
//             <ChevronDown className="w-3 h-3 opacity-50 mt-px transition-transform duration-300 group-hover:rotate-180" />
//           )}
//         </a>

//         {link.children && (
//           <div
//             className="
//               absolute
//               top-[calc(100%+12px)]
//               left-1/2
//               -translate-x-1/2
//               w-56
//               bg-[#0a0602]
//               border
//               border-[#b88c3c]/20
//               shadow-[0_20px_60px_rgba(0,0,0,0.7)]
//               opacity-0
//               invisible
//               translate-y-2
//               transition-all
//               duration-300
//               group-hover:opacity-100
//               group-hover:visible
//               group-hover:translate-y-0
//               z-50
//               overflow-hidden
//             "
//             style={{ borderRadius: 2 }}
//           >
//             <div className="h-px bg-gradient-to-r from-transparent via-[#c9922a] to-transparent" />

//             {link.children.map((child) => (
//               <a
//                 key={child.label}
//                 href={child.href}
//                 onClick={() => setActiveLink(link.label)}
//                 className="block px-5 py-3.5 text-[11px] font-normal tracking-[0.1em] uppercase text-white/60 hover:text-[#e8b86d] border-b border-white/[0.04] last:border-b-0 transition-colors"
//               >
//                 {child.label}
//               </a>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   })}
// </nav>

//           {/* CTA */}
//           <div className="hidden lg:flex items-center gap-5">
//             {/* Phone */}
//             <a
//               href="tel:+15551234567"
//               className="flex items-center gap-2 text-[13px] text-white/55 hover:text-white/80 transition-colors tracking-[0.04em]"
//             >
//               <span className="w-7 h-7 rounded-full border border-[#b88c3c]/30 flex items-center justify-center flex-shrink-0">
//                 <Phone className="w-3 h-3" />
//               </span>
//               (555) 123-4567
//             </a>

//             {/* Divider */}
//             <div className="w-px h-6 bg-white/[0.08]" />

//             {/* Book CTA */}
//             <a
//               href="#contact"
//               className="book-btn inline-block px-6 py-2.5 border border-[#b88c3c]/45 text-[#e8b86d] text-[11px] font-medium tracking-[0.18em] uppercase hover:border-[#b8601e] transition-colors duration-300"
//               style={{ borderRadius: 1 }}
//             >
//               <span>Book Appointment</span>
//             </a>
//           </div>

//           {/* Mobile toggle */}
//           <button
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="lg:hidden p-1.5 border border-[#b88c3c]/30 text-[#e8b86d] hover:border-[#b88c3c]/60 transition-colors"
//             style={{ borderRadius: 2 }}
//           >
//             {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//           </button>
//         </div>

//         {/* ── Mobile Menu ── */}
//         {mobileOpen && (
//   <div className="lg:hidden bg-[#0a0602]/97 backdrop-blur-xl border-b border-[#b88c3c]/20 px-6 pb-7 pt-4">
//     <div className="h-px bg-gradient-to-r from-transparent via-[#c9922a]/50 to-transparent mb-4" />

//     {navLinks.map((link) => {
//       const isOpen = mobileDropdown === link.label;
//       const isActive = activeLink === link.label;

//       if (link.children) {
//         return (
//           <div key={link.label}>
//             <button
//               onClick={() =>
//                 setMobileDropdown(
//                   isOpen ? null : link.label
//                 )
//               }
//               className={`w-full flex items-center justify-between px-3 py-3.5 text-[12px] tracking-[0.12em] uppercase border-b border-white/[0.05] transition-colors ${
//                 isActive
//                   ? "text-[#e8b86d]"
//                   : "text-white/62"
//               }`}
//             >
//               {link.label}

//               <ChevronDown
//                 className={`w-4 h-4 transition-transform duration-300 ${
//                   isOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             <div
//               className={`overflow-hidden transition-all duration-300 ${
//                 isOpen
//                   ? "max-h-96"
//                   : "max-h-0"
//               }`}
//             >
//               {link.children.map((child) => (
//                 <a
//                   key={child.label}
//                   href={child.href}
//                   onClick={() => {
//                     setActiveLink(link.label);
//                     setMobileOpen(false);
//                     setMobileDropdown(null);
//                   }}
//                   className="block pl-8 py-3 text-[11px] tracking-[0.1em] uppercase text-white/55 border-b border-white/[0.03] hover:text-[#e8b86d]"
//                 >
//                   {child.label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         );
//       }

//       return (
//         <a
//           key={link.label}
//           href={link.href}
//           onClick={() => {
//             setActiveLink(link.label);
//             setMobileOpen(false);
//           }}
//           className={`block px-3 py-3.5 text-[12px] font-normal tracking-[0.12em] uppercase border-b border-white/[0.05] transition-colors ${
//             isActive
//               ? "text-[#e8b86d]"
//               : "text-white/62 hover:text-white/90"
//           }`}
//         >
//           {link.label}
//         </a>
//       );
//     })}

//     <div className="pt-5">
//       <a
//         href="#contact"
//         className="block w-full text-center bg-[#b8601e] text-white text-[11px] font-medium tracking-[0.18em] uppercase py-3.5"
//         style={{ borderRadius: 1 }}
//       >
//         Book Appointment
//       </a>
//     </div>
//   </div>
// )}
//       </header>
//     </>
//   );
// }