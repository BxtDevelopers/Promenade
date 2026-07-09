import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "./components/common/ScrollToTop";

export const metadata: Metadata = {
  title: "Promenade Dental",
  description:
    "Promenade Dental offers general, cosmetic, and orthodontic dentistry in a warm, modern environment. Book your free consultation today.",
  keywords: "dentist Toronto, cosmetic dentistry, Invisalign, dental implants, teeth whitening",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}  <ScrollToTop /></body>
    </html>
  );
}