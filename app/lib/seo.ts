import type { Metadata } from "next";

import type { GoogleReviewsData } from "@/app/lib/googleReviews";
import type { DoctorProfile } from "@/app/lib/data/doctorData";

// The one production origin. Canonicals, robots, sitemap, OG tags and JSON-LD all
// derive from this. It is intentionally hardcoded: an env-var fallback previously
// pointed every canonical at the Vercel preview domain and deindexed the site.
const PRODUCTION_URL = "https://www.promenadedds.com";

const configuredUrl = PRODUCTION_URL;

// Preview/branch deployments must never compete with production in the index.
export const isPreviewDeployment =
  process.env.VERCEL_ENV !== undefined && process.env.VERCEL_ENV !== "production";

export const siteConfig = {
  name: "Promenade Dental",
  url: configuredUrl.replace(/\/$/, ""),
  locale: "en_US",
  phone: "+1-480-802-8188",
  displayPhone: "(480) 802-8188",
  description:
    "Gentle family, cosmetic, restorative, emergency, and sleep dentistry in Fulton Ranch, Chandler, Arizona.",
  address: {
    streetAddress: "4905 S. Alma School Rd, Suite 1",
    addressLocality: "Chandler",
    addressRegion: "AZ",
    postalCode: "85248",
    addressCountry: "US",
  },
  // Confirmed against the pin on the Google Business Profile. Structured geo
  // should match the Business Profile exactly — a mismatch is a conflicting
  // location signal for the map pack.
  geo: {
    latitude: 33.23601223640666,
    longitude: -111.85916063707879,
  },
  mapUrl: "https://maps.app.goo.gl/ufAu9qeLdfAFBAMr9",
  areasServed: [
    "Chandler",
    "Fulton Ranch",
    "Ocotillo",
    "Sun Lakes",
    "South Chandler",
  ],
  /**
   * Mirrors the hours rendered in components/contact/ContactDetails.tsx. Keep the
   * two in sync — Google cross-checks structured hours against on-page hours and
   * against the Business Profile.
   */
  openingHours: [
    { days: ["Monday"], opens: "08:00", closes: "13:00" },
    { days: ["Tuesday", "Wednesday", "Thursday"], opens: "08:00", closes: "19:00" },
  ],
  /**
   * Profiles that describe *this business*. sameAs is the strongest signal Google
   * has for reconciling the site with the Business Profile and the citation set,
   * which matters here because the practice changed hands. Only verified-live
   * URLs belong in this list.
   */
  sameAs: [
    "https://maps.app.goo.gl/ufAu9qeLdfAFBAMr9",
    "https://www.yelp.com/biz/promenade-dental-chandler",
    "https://www.carecredit.com/doctor-locator/chandler-az/promenade-dental-hcc298/",
    "https://www.practo.com/chandler-az/clinic/promenade-dental-pllc-chandler",
    "https://reviews.birdeye.com/promenade-dental-155335382580658",
    "https://business.chandlerchamber.com/list/member/promenade-dental-34600",
  ],
} as const;

/**
 * The practice changed hands from its founding dentist to its current one, and
 * every third-party directory still names the founder. Modelling both people
 * explicitly — current dentist as `employee`, founder as `founder` — is how the
 * site tells Google that these are two real, distinct practitioners tied to one
 * business, rather than letting it guess from conflicting citations.
 */
const DOCTORS = {
  current: {
    id: "#dr-sarin",
    name: "Dr. Shriya Sarin",
    honorific: "DMD",
    jobTitle: "Dentist & Owner",
    // The dedicated profile page. Giving the Person node a `url` is what lets
    // Google resolve the entity to a page it can crawl, rather than to a
    // fragment that only ever appears inside another page's graph.
    profilePath: "/dr-shriya-sarin",
    // National Provider Identifier — a stable, government-issued identifier that
    // survives directory churn.
    npi: "1326770538",
    sameAs: [
      "https://doctor.webmd.com/doctor/shriya-sarin-1398f657-9705-46f6-b601-e6de0319f2e6-overview",
      "https://health.usnews.com/dentists/shriya-sarin-3152191",
    ],
  },
  founder: {
    id: "#dr-wei",
    name: "Dr. James Wei",
    honorific: "DDS",
    jobTitle: "Founding Dentist",
    profilePath: null,
    sameAs: [
      "https://www.healthgrades.com/dentist/dr-james-wei-x5fgt",
      "https://doctor.webmd.com/doctor/james-wei-ae74a645-cdbc-4c5f-bf18-d1dccbc3ed0a-overview",
    ],
  },
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
  const blockIndexing = noIndex || isPreviewDeployment;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    robots: blockIndexing
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

function personJsonLd(doctor: (typeof DOCTORS)[keyof typeof DOCTORS]) {
  return {
    "@type": "Person",
    "@id": `${siteConfig.url}/${doctor.id}`,
    name: doctor.name,
    honorificPrefix: "Dr.",
    honorificSuffix: doctor.honorific,
    jobTitle: doctor.jobTitle,
    worksFor: { "@id": `${siteConfig.url}/#dentist` },
    ...(doctor.profilePath ? { url: absoluteUrl(doctor.profilePath) } : {}),
    sameAs: [...doctor.sameAs],
    ...("npi" in doctor
      ? {
          identifier: {
            "@type": "PropertyValue",
            propertyID: "NPI",
            value: doctor.npi,
          },
        }
      : {}),
  };
}

/**
 * Builds the site-wide organization graph.
 *
 * `reviews` is optional and only ever contributes `aggregateRating`. Google
 * requires that a marked-up rating also be visible on the page, so the rating is
 * omitted entirely when the Places lookup failed or returned nothing — never
 * substitute a placeholder.
 */
export function buildOrganizationJsonLd(reviews?: GoogleReviewsData) {
  const hasRating =
    reviews?.available === true &&
    reviews.totalReviews > 0 &&
    reviews.rating > 0;

  return {
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
        description: siteConfig.description,
        image: absoluteUrl("/assets/h-hero.jpg"),
        logo: absoluteUrl("/assets/PDlogo_red3.webp"),
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          ...siteConfig.address,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
        openingHoursSpecification: siteConfig.openingHours.map((slot) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [...slot.days],
          opens: slot.opens,
          closes: slot.closes,
        })),
        areaServed: siteConfig.areasServed.map((name) => ({
          "@type": "City",
          name,
        })),
        sameAs: [...siteConfig.sameAs],
        hasMap: siteConfig.mapUrl,
        medicalSpecialty: "Dentistry",
        /*
         * Makes the appointment request machine-readable.
         *
         * The practice has no real-time scheduler — requests arrive by email
         * and are keyed into Dentrix by hand — so there is no booking widget to
         * embed and this is not pretending otherwise. What it does is tell
         * Google, Gemini and ChatGPT that a booking entry point exists and
         * where it is, which is what they look for when deciding whether a
         * business can be booked. The site audit found no booking path at all;
         * this is the part of that gap fixable without a vendor.
         *
         * If the practice ever turns on Dentrix Online Booking or a third-party
         * scheduler, point urlTemplate at it and embed the widget on
         * /contact-us — and add the same URL as the Google Business Profile
         * booking link, which is currently empty.
         */
        potentialAction: {
          "@type": "ReserveAction",
          name: "Request an appointment",
          target: {
            "@type": "EntryPoint",
            urlTemplate: absoluteUrl("/contact-us#contact"),
            inLanguage: "en-US",
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
          result: {
            "@type": "Reservation",
            name: "Dental appointment request",
          },
        },
        founder: { "@id": `${siteConfig.url}/${DOCTORS.founder.id}` },
        employee: { "@id": `${siteConfig.url}/${DOCTORS.current.id}` },
        ...(hasRating
          ? {
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: reviews!.rating,
                reviewCount: reviews!.totalReviews,
                bestRating: 5,
                worstRating: 1,
              },
            }
          : {}),
      },
      personJsonLd(DOCTORS.current),
      personJsonLd(DOCTORS.founder),
    ],
  };
}

/**
 * FAQPage markup for the Q&A blocks already rendered on every service and
 * sub-service page. The content is on-page and visible, which is what makes it
 * eligible for FAQ rich results.
 */
export function buildFaqJsonLd(
  items: readonly { q: string; a: string }[],
  path: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

/**
 * BreadcrumbList for the nested service URLs. Without it Google has to infer
 * hierarchy from the URL alone on three-level paths.
 */
export function buildBreadcrumbJsonLd(
  crumbs: readonly { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

/** Ties a service page to the practice as the thing that provides it. */
export function buildServiceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    url: absoluteUrl(path),
    procedureType: "https://schema.org/NoninvasiveProcedure",
    provider: { "@id": `${siteConfig.url}/#dentist` },
    availableAtOrFrom: { "@id": `${siteConfig.url}/#dentist` },
  };
}

/**
 * ProfilePage + Person for the dentist's own page.
 *
 * Two things make this different from the abbreviated Person node already in
 * the site-wide graph. It reuses the *same* `@id` (`#dr-sarin`), so the two are
 * one entity rather than two competing ones — this is the whole point of the
 * exercise, and getting it wrong would actively dilute the record. And it is
 * wrapped in `ProfilePage`, which is how schema.org expresses "this page is
 * about this person" as opposed to merely mentioning them.
 *
 * `alumniOf`, `knowsAbout` and `sameAs` are the corroboration surface: they
 * name the institutions, the subject matter and the third-party profiles that
 * a crawler can independently check. Everything here is also visible on the
 * page, which is the condition for it counting for anything.
 */
export function buildDoctorProfileJsonLd(doctor: DoctorProfile) {
  const personId = `${siteConfig.url}/#dr-sarin`;
  const pageUrl = absoluteUrl(doctor.path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#profile`,
        url: pageUrl,
        name: `${doctor.displayName} — ${doctor.jobTitle}, ${siteConfig.name}`,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        primaryImageOfPage: absoluteUrl(doctor.portrait.src),
      },
      {
        "@type": "Person",
        "@id": personId,
        name: doctor.name,
        honorificPrefix: doctor.honorificPrefix,
        honorificSuffix: doctor.honorificSuffix,
        jobTitle: doctor.jobTitle,
        description: doctor.summary,
        url: pageUrl,
        mainEntityOfPage: { "@id": `${pageUrl}#profile` },
        image: absoluteUrl(doctor.portrait.src),
        // Both directions are stated. `worksFor` alone leaves the practice
        // silent about her; the Dentist node's `employee` reference (see
        // buildOrganizationJsonLd) closes the loop.
        worksFor: { "@id": `${siteConfig.url}/#dentist` },
        workLocation: { "@id": `${siteConfig.url}/#dentist` },
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          ...siteConfig.address,
        },
        identifier: {
          "@type": "PropertyValue",
          propertyID: "NPI",
          value: doctor.npi,
        },
        // De-duplicated: the two Arizona qualifications share an institution,
        // and repeating it would assert two separate affiliations.
        alumniOf: [...new Set(doctor.education.map((e) => e.institution))].map(
          (institution) => ({
            "@type": "EducationalOrganization",
            name: institution,
          }),
        ),
        hasCredential: [
          ...doctor.education.map((entry) => ({
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "degree",
            name: entry.qualification,
            recognizedBy: {
              "@type": "EducationalOrganization",
              name: entry.institution,
            },
          })),
          ...doctor.training.map((entry) => ({
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "training",
            name: entry.title,
            recognizedBy: {
              "@type": "Organization",
              name: entry.organization,
            },
          })),
        ],
        knowsAbout: doctor.focusAreas.map((area) => area.title),
        knowsLanguage: [...doctor.languages],
        ...(doctor.memberships.length
          ? {
              memberOf: doctor.memberships.map((m) => ({
                "@type": "Organization",
                name: m.name,
                ...(m.url ? { url: m.url } : {}),
              })),
            }
          : {}),
        sameAs: [...doctor.sameAs],
      },
    ],
  };
}
