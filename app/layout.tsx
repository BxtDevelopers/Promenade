import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "./components/common/ScrollToTop";
import { BookingModalProvider } from "./components/common/BookingModalProvider";
import { GoogleReviewsProvider } from "./context/GoogleReviewsContext";
import { CherryFloatingButton } from "./components/common/CherryWidget";
import { getGoogleReviews } from "./lib/googleReviews";
import { buildOrganizationJsonLd, siteConfig } from "./lib/seo";
import JsonLd from "./components/common/JsonLd";
import GoogleTag from "./components/common/GoogleTag";
import ConsentDefaults from "./components/common/ConsentDefaults";
import AttributionCapture from "./components/common/AttributionCapture";
import OpenAiPixel from "./components/common/OpenAiPixel";
import { getAnalyticsConfig, getOpenAiPixelConfig } from "./lib/analyticsConfig";
import { getBookingWidgetConfig } from "./lib/bookingConfig";
import { getNexHealthConfig } from "./lib/nexhealth";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "healthcare",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const googleReviews = await getGoogleReviews();
  const analyticsConfig = getAnalyticsConfig();
  const openAiPixelConfig = getOpenAiPixelConfig();
  const bookingWidgetConfig = getBookingWidgetConfig();
  // Presence only — the credentials stay on the server.
  const nexHealthEnabled = getNexHealthConfig() !== null;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* First thing in head, and before any tag loads — Consent Mode
            defaults are order-sensitive. Rendered unconditionally: the state
            must be declared even on builds where no measurement ID is set, so
            that turning a tag on later cannot land in an undeclared state. */}
        <ConsentDefaults />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <JsonLd data={buildOrganizationJsonLd(googleReviews)} />
        <GoogleReviewsProvider value={googleReviews}>
        <BookingModalProvider widgetConfig={bookingWidgetConfig} nexHealthEnabled={nexHealthEnabled}>
          {children}
          </BookingModalProvider>
          </GoogleReviewsProvider>
        <ScrollToTop />
        <CherryFloatingButton />
        <AttributionCapture />
        {analyticsConfig && <GoogleTag config={analyticsConfig} />}
        {openAiPixelConfig && <OpenAiPixel config={openAiPixelConfig} />}
        </body>
    </html>
  );
}
