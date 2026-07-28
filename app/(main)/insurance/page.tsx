import Footer from "@/app/components/home3/Footer";
import InsuranceSection from "@/app/components/home3/InsuranceSection";
import Navbar from "@/app/components/home3/Navbar";
import InsuranceCarriers from "@/app/components/insurance/InsuranceCarriers";
import InsuranceFaqs from "@/app/components/insurance/InsuranceFaqs";
import InsuranceHero from "@/app/components/insurance/InsuranceHero";
import InsuranceHowItWorks from "@/app/components/insurance/InsuranceHowItWorks";
import InsuranceNoCoverageCta from "@/app/components/insurance/InsuranceNoCoverageCta";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata({
  title: 'Dental Insurance in Chandler, AZ | Promenade Dental',
  description: 'Learn how Promenade Dental works with PPO dental insurance plans and helps Chandler patients understand coverage and out-of-pocket costs.',
  path: '/insurance',
});

export default function InsurancePage() {
  return (
    <>
    <Navbar  textColor = 'text-ivory' hoverColor = 'hover:text-ivory/80'  />
    <main className="bg-bg font-sans text-ivory">
      <InsuranceHero />
      <InsuranceHowItWorks />
      <InsuranceSection/>
      {/* <InsuranceCarriers /> */}
      <InsuranceFaqs />
      <InsuranceNoCoverageCta />
    </main>
    <Footer/>
    </>
  )
}
