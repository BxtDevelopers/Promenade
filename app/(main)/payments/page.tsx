import Footer from "@/app/components/home3/Footer";
import Navbar from "@/app/components/home3/Navbar";
import PaymentsBenefitsPanel from "@/app/components/payments/PaymentsBenefitsPanel";
import PaymentsCta from "@/app/components/payments/PaymentsCta";
import PaymentsFaqs from "@/app/components/payments/PaymentsFaqs";
import PaymentsHero from "@/app/components/payments/PaymentsHero";
import PaymentsHowItWorks from "@/app/components/payments/PaymentsHowItWorks";
import PaymentsProviders from "@/app/components/payments/PaymentsProviders";
import PaymentsUses from "@/app/components/payments/PaymentsUses";


export default function PaymentsPage() {
  return (
    <>
    <Navbar/>
    <main className="bg-bg font-sans text-ivory">
      <PaymentsHero />
      <PaymentsHowItWorks />
      <PaymentsProviders />
      <PaymentsUses />
      <PaymentsBenefitsPanel />
      <PaymentsFaqs />
      <PaymentsCta />
    </main>
    <Footer/>
    </>
  )
}