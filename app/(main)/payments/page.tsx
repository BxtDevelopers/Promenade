import Footer from "@/app/components/home3/Footer";
import Navbar from "@/app/components/home3/Navbar";
import PaymentsBenefitsPanel from "@/app/components/payments/PaymentsBenefitsPanel";
import PaymentsCta from "@/app/components/payments/PaymentsCta";
import PaymentsFaqs from "@/app/components/payments/PaymentsFaqs";
import PaymentsHero from "@/app/components/payments/PaymentsHero";
import PaymentsHowItWorks from "@/app/components/payments/PaymentsHowItWorks";
import PaymentsProviders from "@/app/components/payments/PaymentsProviders";
import PaymentsUses from "@/app/components/payments/PaymentsUses";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata({
  title: 'Dental Payment Options | Promenade Dental Chandler',
  description: 'Review flexible dental payment and financing options available to Promenade Dental patients in Chandler, Arizona.',
  path: '/payments',
});

export default function PaymentsPage() {
  return (
    <>
    <Navbar  textColor = 'text-ink' hoverColor = 'hover:text-ink/80'  />
    <main className="bg-bg font-sans text-ink">
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
