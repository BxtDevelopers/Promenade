'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { SERVICES } from '@/app/lib/serviceData';

const NAV_LINKS = [
  {
    label: 'Home',
    href: '/home02',
  },
  {
    label: 'About Us',
    href: '/about-us',
  },
  {
    label: 'Contact',
    href: '/contact-us',
  },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <nav
  className={`
    fixed top-0 left-0 right-0 z-50
    transition-all duration-300
    ${
      scrolled
        ? 'bg-bg/95 backdrop-blur-xl border-b border-line shadow-lg'
        : 'bg-transparent'
    }
  `}
>
      <div className="px-site max-w-[90%] mx-auto flex items-center justify-between h-[90px]">

        {/* Logo */}
        <a href="/home02" className="flex items-center">
              <img
                src="/assets/PDlogo_red3.webp"
                alt="Promenade Dental Logo"
                className="w-52 md:w-56 h-auto transition-opacity duration-300"
              />
            </a>

        {/* Nav links — hidden below md */}
        <ul className="hidden lg:flex items-center gap-[34px] list-none text-[13.5px] tracking-nav font-normal">
  {NAV_LINKS.slice(0, 2).map((item) => (
    <li key={item.label}>
      <Link
        href={item.href}
        className="text-ivory/[0.78] transition-colors duration-300 hover:text-ivory"
      >
        {item.label}
      </Link>
    </li>
  ))}

  {/* Treatments Dropdown */}
  <li className="relative group">
    <button className="flex items-center gap-1 text-ivory/[0.78] hover:text-ivory transition-colors">
      Services
      <ChevronDown size={14} />
    </button>

    <div
      className="
        absolute left-1/2 -translate-x-1/2 top-full mt-4
        w-[320px]
        opacity-0 invisible
        group-hover:opacity-100 group-hover:visible
        transition-all duration-300
        bg-panel border border-line rounded-2xl
        p-3 shadow-xl
      "
    >
      <Link
        href="/services"
        className="block px-4 py-3 rounded-lg text-coral hover:bg-bg-2 transition-colors"
      >
        View All Services
      </Link>

      <div className="h-px bg-line my-2" />

      {SERVICES.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="block px-4 py-3 rounded-lg text-ivory/80 hover:text-ivory hover:bg-bg-2 transition-colors"
        >
          {service.name}
        </Link>
      ))}
    </div>
  </li>

  <li>
    <Link
      href="/contact-us"
      className="text-ivory/[0.78] transition-colors duration-300 hover:text-ivory"
    >
      Contact
    </Link>
  </li>
</ul>

        {/* Actions */}
        <div className="flex items-center gap-[22px]">
          <a
            href="tel:+14808028188"
            className="hidden md:block text-ivory text-[13.5px] tracking-nav opacity-85 no-underline"
          >
            (480) 802-8188
          </a>

          {/* Book button — hidden on mobile, shown on md+ */}
          <div className="hidden md:block">
            <NavBookButton />
          </div>

          {/* Hamburger — visible below md */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 cursor-pointer"
          >
            <span
              className={[
                'block w-6 h-px bg-ivory transition-all duration-300 origin-center',
                menuOpen ? 'rotate-45 translate-y-[6px]' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block w-6 h-px bg-ivory transition-all duration-300',
                menuOpen ? 'opacity-0 scale-x-0' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block w-6 h-px bg-ivory transition-all duration-300 origin-center',
                menuOpen ? '-rotate-45 -translate-y-[6px]' : '',
              ].join(' ')}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 0.84, 0.34, 1] }}
            className="lg:hidden absolute top-[90px] left-0 right-0 bg-bg/95 backdrop-blur-md border-t border-line px-site pb-8 pt-6"
          >
            <ul className="flex flex-col gap-5 list-none mb-7">
              <li>
  <Link
    href="/home02"
    onClick={() => setMenuOpen(false)}
    className="text-ivory/80 text-[16px]"
  >
    Home
  </Link>
</li>

<li>
  <Link
    href="/about-us"
    onClick={() => setMenuOpen(false)}
    className="text-ivory/80 text-[16px]"
  >
    About Us
  </Link>
</li>

<li>
  <div className="text-ivory font-medium mb-2">
    Services
  </div>

  <div className="pl-4 flex flex-col gap-3">
    {SERVICES.map((service) => (
      <Link
        key={service.slug}
        href={`/services/${service.slug}`}
        onClick={() => setMenuOpen(false)}
        className="text-muted hover:text-ivory transition-colors"
      >
        {service.name}
      </Link>
    ))}
  </div>
</li>

<li>
  <Link
    href="/contact-us"
    onClick={() => setMenuOpen(false)}
    className="text-ivory/80 text-[16px]"
  >
    Contact
  </Link>
</li>
            </ul>
            <a
              href="tel:+14808028188"
              className="block text-muted text-[14px] tracking-nav mb-5 no-underline"
            >
              (480) 802-8188
            </a>
            <NavBookButton />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavBookButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        'rounded-full px-[22px] py-[11px] font-sans text-[13px] tracking-wide2 uppercase font-medium cursor-pointer transition-all duration-300',
        hovered
          ? 'bg-ivory text-bg border border-ivory'
          : 'bg-transparent text-ivory border border-ivory/40',
      ].join(' ')}
    >
      Book a Visit
    </button>
  );
}