import CoverageGrid from '@/app/components/warranty/CoverageGrid'
import HowItWorks from '@/app/components/warranty/HowItWorks'
import WarrantyClosingCTA from '@/app/components/warranty/WarrantyClosingCTA'
import WarrantyFAQ from '@/app/components/warranty/WarrantyFAQ'
import WarrantyGuarantee from '@/app/components/warranty/WarrantyGuarantee'
import WarrantyHero from '@/app/components/warranty/WarrantyHero'
import Navbar from '@/app/components/home3/Navbar'
import Footer from '@/app/components/home3/Footer'
import { buildPageMetadata } from '@/app/lib/seo'


export const metadata = buildPageMetadata({
  title: 'Our Warranty | Promenade Dental — Chandler, AZ',
  description:
    "If something we placed doesn't hold up under normal use, we'll repair or replace it — at no cost to you. See what's covered.",
  path: '/warranty',
})

export default function WarrantyPage() {
  return (
    <>
    <Navbar  textColor = 'text-ivory' hoverColor = 'hover:text-ivory/80'  />
    <main className="bg-bg text-ivory">
      <WarrantyHero />
      <WarrantyGuarantee />
      <HowItWorks />
      <CoverageGrid />
      <WarrantyFAQ />
      <WarrantyClosingCTA />
    </main>
    <Footer/>
    </>
  )
}
