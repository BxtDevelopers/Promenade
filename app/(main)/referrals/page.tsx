import Footer from "@/app/components/home3/Footer";
import Navbar from "@/app/components/home3/Navbar";
import ReferralsCta from "@/app/components/referrals/ReferralsCta";
import ReferralsForm from "@/app/components/referrals/ReferralsForm";
import ReferralsHero from "@/app/components/referrals/ReferralsHero";
import ReferralsHowItWorks from "@/app/components/referrals/ReferralsHowItWorks";
import ReferralsTestimonials from "@/app/components/referrals/ReferralsTestimonials";
import ReferralsWhyRefer from "@/app/components/referrals/ReferralsWhyRefer";


export default function ReferralsPage() {
  return (
    <>
    <Navbar  textColor = 'text-ivory' hoverColor = 'hover:text-ivory/80'  />
    <main className="bg-bg font-sans text-ivory">
      <ReferralsHero />
      <ReferralsHowItWorks />
      <ReferralsForm />
      <ReferralsWhyRefer />
      <ReferralsTestimonials />
      <ReferralsCta />
    </main>
    <Footer/>
    </>
  )
}