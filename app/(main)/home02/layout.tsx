import type { Metadata } from 'next'
import '../../globals.css'

export const metadata: Metadata = {
  title: 'Promenade Dental | Elevated Care for Chandler Families',
  description:
    'Premium family dentistry in Chandler, AZ. Accepting most PPO plans, same-day emergencies, and new patients. Book your visit today.',
}

export default function Home02Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="home02-layout">
      {children}
    </div>
  )
}