'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_LINKS = ['Doctors', 'Treatments', 'Experience', 'Reviews', 'Visit'] as const;

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-20">
      <div className="px-site max-w-[1240px] mx-auto flex items-center justify-between h-[90px]">

        {/* Logo */}
        <div className="font-serif font-normal text-[21px] tracking-logo uppercase text-ivory">
          Promenade<strong className="font-medium">·</strong>Dental
        </div>

        {/* Nav links — hidden below md */}
        <ul className="hidden lg:flex gap-[34px] list-none text-[13.5px] tracking-nav font-normal">
          {NAV_LINKS.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-ivory/[0.78] no-underline transition-colors duration-300 hover:text-ivory"
              >
                {item}
              </a>
            </li>
          ))}
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
              {NAV_LINKS.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="text-ivory/80 no-underline text-[16px] tracking-nav font-normal hover:text-ivory transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
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