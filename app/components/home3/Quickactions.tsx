'use client'

import Link from 'next/link'
import { CalendarCheck, ShieldAlert, ArrowRight } from 'lucide-react'
import { LiaToothSolid } from 'react-icons/lia'
import { useBookingModal } from '../common/BookingModalProvider'

const actions = [
  {
    action: 'book' as const,
    icon: <CalendarCheck className="w-[22px] h-[22px] flex-none text-coral" strokeWidth={1.6} />,
    title: 'Book your first visit',
    sub: 'New patients welcome',
    cta: 'Click here to book',
  },
  {
    href: '/services',
    icon: <LiaToothSolid className="w-[22px] h-[22px] flex-none text-coral" strokeWidth={1.6} />,
    title: 'Our services',
    sub: 'Family · cosmetic · sleep apnea',
    cta: 'Click here to explore',
  },
  {
    href: '/services/emergency-dentistry',
    icon: <ShieldAlert className="w-[22px] h-[22px] flex-none text-coral" strokeWidth={1.6} />,
    title: 'Dental emergency',
    sub: 'Same-day relief',
    cta: 'Click here for help',
  },
]

export default function QuickActions() {
  const { openBookingModal } = useBookingModal()

  const itemClass =
    'group flex md:items-center justify-start gap-[14px] no-underline text-ivory transition-colors duration-300 hover:bg-[rgba(232,154,114,0.08)] p-[24px_18px] w-full text-left'
  return (
    <section className="border-y border-coral/20 hidden lg:block">
      <div className="grid mx-auto max-w-[1240px] grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(244,236,221,0.14)]">
        {actions.map((a) =>
          a.action === 'book' ? (
            <button key={a.title} type="button" onClick={openBookingModal} className={itemClass}>
              {a.icon}
              <div>
                <b className="font-semibold text-md tracking-[0.02em]">{a.title}</b>
                <span className="block text-xs mt-[1px] text-muted">{a.sub}</span>
               <span className="mt-[6px] inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.05em] text-coral  -translate-x-1 transition-all duration-300 group-hover:translate-x-0">
                  {a.cta}
                  <ArrowRight className="h-3 w-3" strokeWidth={2.2} />
                </span>
              </div>
            </button>
          ) : (
            <Link key={a.title} href={a.href!} className={itemClass}>
              {a.icon}
              <div>
                <b className="font-semibold text-md tracking-[0.02em]">{a.title}</b>
                <span className="block text-xs mt-[1px] text-muted">{a.sub}</span>
               <span className="mt-[6px] inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.05em] text-coral  -translate-x-1 transition-all duration-300 group-hover:translate-x-0">
                {a.cta}
                <ArrowRight className="h-3 w-3" strokeWidth={2.2} />
              </span>
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  )
}