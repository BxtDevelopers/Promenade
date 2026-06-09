import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B1C2C',
        'bg-2': '#0E2335',
        panel: '#13293C',
        line: 'rgba(244,236,221,0.14)',
        ivory: '#F4ECDC',
        'ivory-2': '#EFE6D4',
        muted: '#94A6B6',
        'muted-2': '#6F8294',
        coral: '#E89A72',
        'coral-deep': '#D98155',
        sand: '#EDE2CF',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Hanken Grotesk', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.32em',
        logo: '0.14em',
        nav: '0.04em',
        wide2: '0.08em',
        wide3: '0.16em',
      },
      lineHeight: {
        tight2: '0.96',
        tight3: '0.92',
      },
      borderRadius: {
        arch: '280px 280px 22px 22px',
        'arch-sm': '220px 220px 22px 22px',
        'arch-lg': '999px',
      },
      boxShadow: {
        arch: '0 50px 90px -40px rgba(0,0,0,0.7)',
        btn: '0 20px 44px -18px rgba(232,154,114,0.7)',
      },
      keyframes: {
        kb: {
          to: { transform: 'scale(1.16)' },
        },
        fade: {
          to: { opacity: '1' },
        },
        lnrise: {
          to: { transform: 'translateY(0%)' },
        },
        cue: {
          '0%,100%': { transform: 'scaleY(0.5)', transformOrigin: 'top', opacity: '0.4' },
          '50%': { transform: 'scaleY(1)', opacity: '1' },
        },
        breathe: {
          '0%,100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        mq: {
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        kb: 'kb 30s ease-in-out infinite alternate',
        breathe: 'breathe 10s ease-in-out infinite',
        cue: 'cue 2.2s ease-in-out infinite',
        mq: 'mq 42s linear infinite',
        'mq-rev': 'mq 52s linear infinite reverse',
      },
      backgroundImage: {
        'hero-grade':
          'linear-gradient(180deg,transparent 0%,transparent 46%,rgba(11,28,44,.5) 76%,rgba(11,28,44,.96) 100%),radial-gradient(70% 60% at 72% 28%,rgba(232,154,114,.12),transparent 60%)',
        'story-veil':
          'linear-gradient(90deg,rgba(11,28,44,0.94),rgba(11,28,44,0.6) 52%,rgba(11,28,44,0.3)),linear-gradient(0deg,rgba(11,28,44,0.66),transparent 42%)',
      },
    },
  },
  plugins: [],
};

export default config;