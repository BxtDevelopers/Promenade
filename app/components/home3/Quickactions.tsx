import Link from 'next/link'
import { CalendarCheck, ShieldAlert } from 'lucide-react'
import { LiaToothSolid } from 'react-icons/lia'

const BASE = 'https://promenade-dental.vercel.app'

const actions = [
  {
    href: `/contact-us`,
    icon: <CalendarCheck className="w-[22px] h-[22px] flex-none text-coral" strokeWidth={1.6} />,
    title: 'Book your first visit',
    sub: 'New patients welcome',
  },
  {
    href: `/services`,
    icon: <LiaToothSolid  className="w-[22px] h-[22px] flex-none text-coral" strokeWidth={1.6} />,
    title: 'Our services',
    sub: 'Family · cosmetic · sleep apnea',
  },
  {
    href: `/services/emergency-dentistry`,
    icon: <ShieldAlert className="w-[22px] h-[22px] flex-none text-coral" strokeWidth={1.6} />,
    title: 'Dental emergency',
    sub: 'Same-day relief',
  },
]

export default function QuickActions() {
  return (
    <section className="border-y border-coral/20 hidden lg:block">
      <div className="grid mx-auto max-w-[1240px] grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(244,236,221,0.14)]">
        {actions.map((a) => (
          <Link
            key={a.title}
            href={a.href}
            className="flex md:items-center justify-start gap-[14px] no-underline text-ivory transition-colors duration-300 hover:bg-[rgba(232,154,114,0.08)] p-[24px_18px]"
          >
            {a.icon}
            <div>
              <b className="font-semibold text-md tracking-[0.02em]">{a.title}</b>
              <span className="block text-xs mt-[1px] text-muted">
                {a.sub}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}