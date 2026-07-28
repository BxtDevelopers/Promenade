import Footer from "@/app/components/home3/Footer"
import Navbar from "@/app/components/home3/Navbar"
import OffersCta from "@/app/components/offers/OffersCta"
import OffersFinancingBanner from "@/app/components/offers/OffersFinancingBanner"
import OffersGrid from "@/app/components/offers/OffersGrid"
import OffersHero from "@/app/components/offers/OffersHero"
import OffersHowToClaim from "@/app/components/offers/OffersHowToClaim"
import OffersTerms from "@/app/components/offers/OffersTerms"
import { buildPageMetadata } from "@/app/lib/seo"


export const metadata = buildPageMetadata({
  title: 'Offers & Specials | Promenade Dental',
  description: 'New patient specials, senior discounts, and whitening offers at Promenade Dental in Chandler, AZ.',
  path: '/offers',
})

export default function OffersPage() {
  return (
    <>
      <Navbar  textColor = 'text-ink' hoverColor = 'hover:text-ink/80'  />
      <OffersHero />
      <OffersGrid />
      <OffersHowToClaim />
      <OffersTerms />
      {/* <OffersFinancingBanner /> */}
      <OffersCta />
      <Footer />
    </>
  )
}
