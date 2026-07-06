import Footer from "@/app/components/home3/Footer";
import Navbar from "@/app/components/home3/Navbar";
import InsuranceCarriers from "@/app/components/insurance/InsuranceCarriers";
import InsuranceFaqs from "@/app/components/insurance/InsuranceFaqs";
import InsuranceHero from "@/app/components/insurance/InsuranceHero";
import InsuranceHowItWorks from "@/app/components/insurance/InsuranceHowItWorks";
import InsuranceNoCoverageCta from "@/app/components/insurance/InsuranceNoCoverageCta";


export default function InsurancePage() {
  return (
    <>
    <Navbar  textColor = 'text-ivory' hoverColor = 'hover:text-ivory/80'  />
    <main className="bg-bg font-sans text-ivory">
      <InsuranceHero />
      <InsuranceHowItWorks />
      <InsuranceCarriers />
      <InsuranceFaqs />
      <InsuranceNoCoverageCta />
    </main>
    <Footer/>
    </>
  )
}