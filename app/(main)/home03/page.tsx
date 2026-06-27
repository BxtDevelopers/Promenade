import HomePage from '@/app/components/home3/HomePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:       'Promenade Dental | Gentle Family & Cosmetic Dentistry in Chandler, AZ',
  description: 'Gentle family and cosmetic dentistry in Fulton Ranch, Chandler AZ. See the same dentist every visit. Most PPO plans accepted, same-day emergencies, new patients welcome.',
  keywords:    'dentist Chandler AZ, family dentist Chandler, cosmetic dentistry Chandler, sleep apnea dentist Chandler, emergency dentist Chandler, Fulton Ranch dentist, teeth whitening Chandler Arizona',
}

export default function Page() {
  return <HomePage />
}