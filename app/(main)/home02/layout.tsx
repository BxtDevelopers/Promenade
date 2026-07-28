import { buildPageMetadata } from '@/app/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Promenade Dental | Gentle Family & Cosmetic Dentistry in Chandler, AZ',
  description: 'Family and cosmetic dentistry in Fulton Ranch, Chandler, AZ.',
  path: '/',
  noIndex: true,
})

export default function Home02Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
