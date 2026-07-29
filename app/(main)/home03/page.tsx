import HomePage from '@/app/components/home3/HomePage'
import { buildPageMetadata } from '@/app/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Promenade Dental | Gentle Family & Cosmetic Dentistry in Chandler, AZ',
  description: 'Gentle family and cosmetic dentistry in Fulton Ranch, Chandler AZ. See the same dentist every visit. Most PPO plans accepted, same-day emergencies, new patients welcome.',
  path: '/',
  noIndex: true,
})

export default function Page() {
  return <HomePage />
}
