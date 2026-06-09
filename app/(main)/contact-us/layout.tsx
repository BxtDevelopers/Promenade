import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Promenade Dental",
  description:
    "Book an appointment or get in touch with Promenade Dental. Same-day emergency slots available. Call (555) 123-4567 or fill in our online form.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}