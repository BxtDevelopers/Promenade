import type { Metadata } from 'next'
import TermsContent from '@/app/components/legal/TermsContent'
import Navbar from '@/app/components/home3/Navbar'
import Footer from '@/app/components/home3/Footer'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Promenade Dental — Chandler, AZ',
  description: 'The terms that govern your use of this website and requests made through it.',
}

export default function TermsPage() {
  return (
    <>
      <Navbar textColor="text-ivory" hoverColor="hover:text-ivory/80" />
      <main className="bg-bg text-ivory">
        <TermsContent />
      </main>
      <Footer />
    </>
  )
}