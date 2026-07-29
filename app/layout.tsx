import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "./components/common/ScrollToTop";
import { BookingModalProvider } from "./components/common/BookingModalProvider";
import { GoogleReviewsProvider } from "./context/GoogleReviewsContext";
import { CherryFloatingButton } from "./components/common/CherryWidget";
import { getGoogleReviews } from "./lib/googleReviews";
import { organizationJsonLd, siteConfig } from "./lib/seo";

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

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <GoogleReviewsProvider value={googleReviews}>
        <BookingModalProvider>
          {children}
          </BookingModalProvider>
          </GoogleReviewsProvider>
        <ScrollToTop />
        <CherryFloatingButton />
        </body>
    </html>
  );
}
