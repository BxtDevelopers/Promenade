import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Promenade Dental",
  description:
    "Learn about Promenade Dental — our story, values, technology, and commitment to the community. Award-winning dental care in Toronto since 2009.",
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