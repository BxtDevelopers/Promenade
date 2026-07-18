import Footer from "@/app/components/home3/Footer"
import Navbar from "@/app/components/home3/Navbar"
import OffersCta from "@/app/components/offers/OffersCta"
import OffersFinancingBanner from "@/app/components/offers/OffersFinancingBanner"
import OffersGrid from "@/app/components/offers/OffersGrid"
import OffersHero from "@/app/components/offers/OffersHero"
import OffersHowToClaim from "@/app/components/offers/OffersHowToClaim"
import OffersTerms from "@/app/components/offers/OffersTerms"


export const metadata = {
  title: 'Offers & Specials | Promenade Dental',
  description: 'New patient specials, senior discounts, and whitening offers at Promenade Dental in Chandler, AZ.',
}

export default function OffersPage() {
  return (
    <>
      <Navbar  textColor = 'text-ivory' hoverColor = 'hover:text-ivory/80'  />
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