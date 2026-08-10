import Footer from "@/app/components/home3/Footer";
import Navbar from "@/app/components/home3/Navbar";
import PaymentsBenefitsPanel from "@/app/components/payments/PaymentsBenefitsPanel";
import PaymentsCta from "@/app/components/payments/PaymentsCta";
import PaymentsFaqs from "@/app/components/payments/PaymentsFaqs";
import PaymentsHero from "@/app/components/payments/PaymentsHero";
import PaymentsHowItWorks from "@/app/components/payments/PaymentsHowItWorks";
import PaymentsProviders from "@/app/components/payments/PaymentsProviders";
import PaymentsUses from "@/app/components/payments/PaymentsUses";
import { CherryFullPageWidget } from "@/app/components/common/CherryWidget";
import { buildPageMetadata } from "@/app/lib/seo";
import PayYourBill from "@/app/components/payments/PayYourBill";

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
      <PayYourBill />
      <PaymentsHowItWorks />
      <PaymentsProviders />
      {/* Cherry's interactive estimator, directly below the provider cards
          that link out to it. */}
      <CherryFullPageWidget />
      <PaymentsUses />
      <PaymentsBenefitsPanel />
      <PaymentsFaqs />
      <PaymentsCta />
    </main>
    <Footer/>
    </>
  )
}
