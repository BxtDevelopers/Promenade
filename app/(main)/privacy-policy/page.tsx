import Navbar from '@/app/components/home3/Navbar'
import Footer from '@/app/components/home3/Footer'
import PrivacyPolicyContent from '@/app/components/legal/PrivacyPolicyContent'
import { buildPageMetadata } from '@/app/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Privacy Policy | Promenade Dental — Chandler, AZ',
  description:
    'How Promenade Dental protects and uses your personal and health information, in our office and on this website.',
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar textColor="text-ivory" hoverColor="hover:text-ivory/80" />
      <main className="bg-bg text-ivory">
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </>
  )
}
