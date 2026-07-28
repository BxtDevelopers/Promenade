import TermsContent from '@/app/components/legal/TermsContent'
import Navbar from '@/app/components/home3/Navbar'
import Footer from '@/app/components/home3/Footer'
import { buildPageMetadata } from '@/app/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Terms & Conditions | Promenade Dental — Chandler, AZ',
  description: 'The terms that govern your use of this website and requests made through it.',
  path: '/terms-and-conditions',
})

export default function TermsPage() {
  return (
    <>
      <Navbar textColor="text-ink" hoverColor="hover:text-ink/80" />
      <main className="bg-bg text-ink">
        <TermsContent />
      </main>
      <Footer />
    </>
  )
}
