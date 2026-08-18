import type { NextConfig } from "next";

/**
 * 301-equivalent redirects for the two site generations that preceded this one:
 * a ProSites-era site (/procedures/*, /photo-gallery/*, /our-practice/*, *.aspx)
 * and a WordPress site (/specialty/<service>-chandler-az/). Every one of these
 * paths still exists in Google's index and 404s without these rules, so the
 * link equity they carry is currently discarded rather than passed on.
 *
 * Next.js emits 308 for `permanent: true`; Google treats 308 and 301
 * identically for consolidation.
 *
 * Order matters — these are matched top to bottom, so the exact per-page rules
 * must precede the section-level catch-alls at the end.
 */
const legacyRedirects = [
  // --- WordPress geo-targeted service pages -------------------------------
  // The highest-value set: these are the pages that earned local rankings.
  ["/specialty/family-dentistry-chandler-az", "/services/family-dentistry"],
  [
    "/specialty/exams-chandler-az",
    "/services/family-dentistry/dental-exams-cleanings",
  ],
  [
    "/specialty/cleanings-chandler-az",
    "/services/family-dentistry/dental-exams-cleanings",
  ],
  [
    "/specialty/nightguards-chandler-az",
    "/services/family-dentistry/night-guards-teeth-grinding",
  ],
  ["/specialty/cosmetic-dentistry-chandler-az", "/services/cosmetic-dentistry"],
  ["/specialty/veneers-chandler-az", "/services/cosmetic-dentistry/veneers"],
  [
    "/specialty/zoom-teeth-whitening-chandler-az",
    "/services/cosmetic-dentistry/teeth-whitening",
  ],
  [
    "/specialty/restorative-dentistry-chandler-az",
    "/services/restorative-dentistry",
  ],
  [
    "/specialty/crowns-chandler-az",
    "/services/restorative-dentistry/dental-crowns",
  ],
  [
    "/specialty/root-canal-chandler-az",
    "/services/restorative-dentistry/root-canals",
  ],
  ["/specialty/dentures-chandler-az", "/services/restorative-dentistry/dentures"],
  [
    "/specialty/extractions-chandler-az",
    "/services/restorative-dentistry/tooth-extractions",
  ],
  // The practice does not place implants; the legacy implant pages point at the
  // restorative hub, which covers the replacement options that are offered.
  ["/specialty/implants-chandler-az", "/services/restorative-dentistry"],
  ["/specialty/invisalign-chandler-az", "/services/cosmetic-dentistry/invisalign"],

  // --- ProSites procedure pages -------------------------------------------
  [
    "/procedures/general-dentistry/dental-exams-cleanings",
    "/services/family-dentistry/dental-exams-cleanings",
  ],
  [
    "/procedures/general-dentistry/dental-x-rays",
    "/services/family-dentistry/dental-exams-cleanings",
  ],
  [
    "/procedures/general-dentistry/home-care",
    "/services/family-dentistry/dental-exams-cleanings",
  ],
  [
    "/procedures/general-dentistry/how-to-properly-brush-floss",
    "/services/family-dentistry/dental-exams-cleanings",
  ],
  ["/procedures/general-dentistry", "/services/family-dentistry"],
  [
    "/procedures/cosmetic-dentistry/porcelain-veneers",
    "/services/cosmetic-dentistry/veneers",
  ],
  [
    "/procedures/cosmetic-dentistry/porcelain-crowns-caps",
    "/services/restorative-dentistry/dental-crowns",
  ],
  [
    "/procedures/cosmetic-dentistry/porcelain-fixed-bridges",
    "/services/restorative-dentistry/dental-bridges",
  ],
  [
    "/procedures/cosmetic-dentistry/composite-fillings",
    "/services/restorative-dentistry/tooth-colored-fillings",
  ],
  [
    "/procedures/restorations/composite-fillings",
    "/services/restorative-dentistry/tooth-colored-fillings",
  ],
  [
    "/procedures/restorations/crowns-caps",
    "/services/restorative-dentistry/dental-crowns",
  ],
  [
    "/procedures/restorations/fixed-bridges",
    "/services/restorative-dentistry/dental-bridges",
  ],
  [
    "/procedures/restorations/root-canal-therapy",
    "/services/restorative-dentistry/root-canals",
  ],
  [
    "/procedures/restorations/dentures-partial-dentures",
    "/services/restorative-dentistry/dentures",
  ],
  ["/procedures/restorations/dental-implants", "/services/restorative-dentistry"],
  ["/procedures/restorations", "/services/restorative-dentistry"],
  ["/procedures/orthodontics", "/services/cosmetic-dentistry/invisalign"],

  // --- Whitening / Invisalign standalone pages ----------------------------
  ["/zoom-whitening", "/services/cosmetic-dentistry/teeth-whitening"],
  ["/ZoomWhitening.aspx", "/services/cosmetic-dentistry/teeth-whitening"],
  [
    "/specials/professional-teeth-whitening",
    "/services/cosmetic-dentistry/teeth-whitening",
  ],
  ["/invisalign", "/services/cosmetic-dentistry/invisalign"],

  // --- Practice / about ----------------------------------------------------
  ["/about", "/about-us"],
  ["/meet-dr-wei", "/about-us"],
  ["/meet-the-team", "/about-us"],
  ["/our-practice", "/about-us"],
  ["/OurPractice.aspx", "/about-us"],

  // --- Reviews -------------------------------------------------------------
  ["/reviews", "/about-us"],
  ["/patient-reviews", "/about-us"],
  ["/testimonials", "/about-us"],
  ["/testimonial", "/about-us"],

  // --- Contact / location / appointments -----------------------------------
  ["/contact", "/contact-us"],
  ["/get-in-touch", "/contact-us"],
  ["/location", "/contact-us"],
  ["/appointment-request", "/contact-us"],

  // --- Patient info --------------------------------------------------------
  ["/patient-info", "/contact-us"],
  ["/PatientInfo.aspx", "/contact-us"],

  // --- Offers --------------------------------------------------------------
  ["/specials", "/offers"],

  // --- Misc ----------------------------------------------------------------
  ["/dental-videos", "/"],
  ["/DentalVideos.aspx", "/"],
  ["/blogs", "/"],
  ["/disclosures", "/privacy-policy"],
  ["/sitemap.aspx", "/sitemap.xml"],

  // A live external link points here; the real slug is longer.
  ["/services/sleep-apnea", "/services/sleep-apnea-snoring-solutions"],
] as const;

/**
 * Section-level catch-alls. These run after the exact rules above and mop up
 * the remaining legacy children — including the URL-encoded variants
 * (`invisalign%C2%AE`, `zoom_%C2%AE`) that are impractical to enumerate.
 *
 * `:path+` (one or more) rather than `:path*` (zero or more) is deliberate:
 * `/about-us` and `/services` are live pages on the current site, and a `*`
 * wildcard would match the parent itself and redirect it to itself forever.
 */
const legacySectionRedirects = [
  ["/procedures/cosmetic-dentistry/:path+", "/services/cosmetic-dentistry"],
  ["/procedures/orthodontics/:path+", "/services/cosmetic-dentistry/invisalign"],
  ["/procedures/restorations/:path+", "/services/restorative-dentistry"],
  ["/procedures/general-dentistry/:path+", "/services/family-dentistry"],
  ["/procedures/:path*", "/services"],
  ["/photo-gallery/other-procedures/:path+", "/services/restorative-dentistry"],
  ["/photo-gallery/:path*", "/services/cosmetic-dentistry"],
  ["/patient-info/:path+", "/contact-us"],
  ["/our-practice/:path+", "/about-us"],
  ["/about-us/:path+", "/about-us"],
  ["/specials/:path+", "/offers"],
  ["/invisalign/:path+", "/services/cosmetic-dentistry/invisalign"],
  ["/zoom-whitening/:path+", "/services/cosmetic-dentistry/teeth-whitening"],
  // Every legacy section carried a DentalVideos.aspx leaf.
  ["/:path*/DentalVideos.aspx", "/"],
] as const;

const nextConfig: NextConfig = {
  /* config options here */
  images: {
  domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return [...legacyRedirects, ...legacySectionRedirects].map(
      ([source, destination]) => ({ source, destination, permanent: true }),
    );
  },
};

export default nextConfig;
