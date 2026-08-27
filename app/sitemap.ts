import type { MetadataRoute } from "next";
import { SERVICES } from "@/app/lib/data/serviceData";
import { SUB_SERVICES } from "@/app/lib/data/subServiceData";
import { AREAS } from "@/app/lib/data/areaData";
import { absoluteUrl } from "@/app/lib/seo";

/*
 * lastmod dates.
 *
 * This file previously stamped every URL with `new Date()`, so all 38 entries
 * claimed to have changed at the same millisecond — and that instant moved
 * forward on every single deploy, whether or not a word of copy changed. A
 * lastmod that says "everything changed just now, every time" carries no
 * information, and crawlers discount the whole file for it. Google's guidance
 * is explicit: an inaccurate lastmod is worse than none at all.
 *
 * These are date-only (the sitemaps.org spec takes a W3C Datetime, and a plain
 * YYYY-MM-DD is one) and stable across builds. Bump the entry for a page when
 * you meaningfully change that page's content — not for styling or dependency
 * bumps. If you are not sure, leave it: a slightly stale honest date is worth
 * more than a fresh invented one.
 */
const CONTENT_UPDATED = {
  home: "2026-08-27",
  services: "2026-08-27",
  areas: "2026-08-27",
  about: "2026-08-27",
  doctor: "2026-08-27",
  contact: "2026-08-27",
  insurance: "2026-08-27",
  payments: "2026-08-27",
  offers: "2026-08-27",
  referrals: "2026-08-27",
  warranty: "2026-08-27",
  legal: "2026-08-27",
} as const;

const staticRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1, lastModified: CONTENT_UPDATED.home },
  { path: "/services", changeFrequency: "monthly", priority: 0.9, lastModified: CONTENT_UPDATED.services },
  { path: "/areas", changeFrequency: "monthly", priority: 0.7, lastModified: CONTENT_UPDATED.areas },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.7, lastModified: CONTENT_UPDATED.about },
  { path: "/dr-shriya-sarin", changeFrequency: "monthly", priority: 0.8, lastModified: CONTENT_UPDATED.doctor },
  { path: "/contact-us", changeFrequency: "monthly", priority: 0.8, lastModified: CONTENT_UPDATED.contact },
  { path: "/insurance", changeFrequency: "monthly", priority: 0.7, lastModified: CONTENT_UPDATED.insurance },
  { path: "/payments", changeFrequency: "monthly", priority: 0.6, lastModified: CONTENT_UPDATED.payments },
  { path: "/offers", changeFrequency: "weekly", priority: 0.7, lastModified: CONTENT_UPDATED.offers },
  { path: "/referrals", changeFrequency: "monthly", priority: 0.5, lastModified: CONTENT_UPDATED.referrals },
  { path: "/warranty", changeFrequency: "monthly", priority: 0.5, lastModified: CONTENT_UPDATED.warranty },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.2, lastModified: CONTENT_UPDATED.legal },
  {
    path: "/terms-and-conditions",
    changeFrequency: "yearly",
    priority: 0.2,
    lastModified: CONTENT_UPDATED.legal,
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: route.lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...SERVICES.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified: CONTENT_UPDATED.services,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...AREAS.map((area) => ({
      url: absoluteUrl(`/areas/${area.slug}`),
      lastModified: CONTENT_UPDATED.areas,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...SUB_SERVICES.map((service) => ({
      url: absoluteUrl(
        `/services/${service.serviceSlug}/${service.slug}`,
      ),
      lastModified: CONTENT_UPDATED.services,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
