import type { Metadata } from "next";

const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://promenade-dental.vercel.app";

export const siteConfig = {
  name: "Promenade Dental",
  url: configuredUrl.replace(/\/$/, ""),
  locale: "en_US",
  phone: "+1-480-802-8188",
  displayPhone: "(480) 802-8188",
  description:
    "Gentle family, cosmetic, restorative, implant, emergency, and sleep dentistry in Fulton Ranch, Chandler, Arizona.",
  address: {
    streetAddress: "4905 S. Alma School Rd, Suite 1",
    addressLocality: "Chandler",
    addressRegion: "AZ",
    postalCode: "85248",
    addressCountry: "US",
  },
  areasServed: [
    "Chandler",
    "Fulton Ranch",
    "Ocotillo",
    "Sun Lakes",
    "South Chandler",
  ],
} as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} in Chandler, Arizona`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: `${siteConfig.url}/`,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en-US",
      publisher: {
        "@id": `${siteConfig.url}/#dentist`,
      },
    },
    {
      "@type": ["Dentist", "LocalBusiness"],
      "@id": `${siteConfig.url}/#dentist`,
      name: siteConfig.name,
      url: `${siteConfig.url}/`,
      telephone: siteConfig.phone,
      image: absoluteUrl("/assets/h-hero.jpg"),
      logo: absoluteUrl("/assets/PDlogo_red3.webp"),
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        ...siteConfig.address,
      },
      areaServed: siteConfig.areasServed.map((name) => ({
        "@type": "City",
        name,
      })),
      hasMap: "https://maps.app.goo.gl/ufAu9qeLdfAFBAMr9",
      medicalSpecialty: "Dentistry",
    },
  ],
};
