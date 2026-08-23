import type { MetadataRoute } from "next";
import { SERVICES } from "@/app/lib/data/serviceData";
import { SUB_SERVICES } from "@/app/lib/data/subServiceData";
import { AREAS } from "@/app/lib/data/areaData";
import { absoluteUrl } from "@/app/lib/seo";

const staticRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/areas", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.7 },
  { path: "/dr-shriya-sarin", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact-us", changeFrequency: "monthly", priority: 0.8 },
  { path: "/insurance", changeFrequency: "monthly", priority: 0.7 },
  { path: "/payments", changeFrequency: "monthly", priority: 0.6 },
  { path: "/offers", changeFrequency: "weekly", priority: 0.7 },
  { path: "/referrals", changeFrequency: "monthly", priority: 0.5 },
  { path: "/warranty", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.2 },
  {
    path: "/terms-and-conditions",
    changeFrequency: "yearly",
    priority: 0.2,
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...SERVICES.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...AREAS.map((area) => ({
      url: absoluteUrl(`/areas/${area.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...SUB_SERVICES.map((service) => ({
      url: absoluteUrl(
        `/services/${service.serviceSlug}/${service.slug}`,
      ),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
