import type { AnalyticsConfig } from "@/app/lib/analytics";

/**
 * Server-side resolution of the Google tag configuration.
 *
 * The IDs are read here, in a Server Component context, and handed to
 * <GoogleTag /> as props. They are deliberately NOT `NEXT_PUBLIC_`: nothing
 * about a measurement ID needs to be a build-time client constant, and keeping
 * the prefix off means they can be marked Sensitive in Vercel alongside the
 * real credentials.
 *
 * To be clear about what this does and does not buy: the values still reach
 * the browser. They must — gtag.js is fetched from a URL containing the
 * measurement ID, and the conversion `send_to` is evaluated client-side. This
 * is about where configuration lives, not about secrecy.
 *
 * Most routes are statically prerendered, so these are captured at build time
 * on those pages; changing one in Vercel still requires a redeploy.
 */
export function getAnalyticsConfig(): AnalyticsConfig | null {
  // Preview and branch deployments must never report into the production
  // property. Same signal the canonical/robots logic uses in lib/seo.ts.
  const isPreviewDeployment =
    process.env.VERCEL_ENV !== undefined && process.env.VERCEL_ENV !== "production";

  if (isPreviewDeployment) return null;

  const gaMeasurementId = process.env.GA_MEASUREMENT_ID ?? "";
  const googleAdsId = process.env.GOOGLE_ADS_ID ?? "";

  // Nothing configured — ship the site with no tag at all.
  if (!gaMeasurementId && !googleAdsId) return null;

  return {
    gaMeasurementId,
    googleAdsId,
    leadLabel: process.env.GOOGLE_ADS_LEAD_LABEL ?? "",
    callLabel: process.env.GOOGLE_ADS_CALL_LABEL ?? "",
  };
}
