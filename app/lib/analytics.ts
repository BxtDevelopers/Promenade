/**
 * Google tag (gtag.js) wiring for GA4 + Google Ads conversion tracking.
 *
 * Both products are served by one `gtag.js` load with two `config` calls —
 * loading the Ads tag separately would double the script weight and split the
 * consent/linker state between them.
 *
 * Every ID lives in an environment variable rather than the source. They are
 * `NEXT_PUBLIC_*` because gtag runs in the browser: these are public
 * identifiers by design (they ship in the HTML of every site running GA), not
 * secrets. Note that Next inlines `NEXT_PUBLIC_*` at BUILD time, so changing
 * one in Vercel requires a redeploy — it will not take effect on its own.
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "";

/**
 * Conversion *labels* from Google Ads (the part after the slash in
 * `AW-123456789/AbC-D_efGh`). Form fills and phone calls get separate actions
 * because they are worth different amounts and get bid on differently.
 */
const ADS_LEAD_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL ?? "";
const ADS_CALL_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL ?? "";

/**
 * Preview and branch deployments must not pollute the production property —
 * a handful of internal QA sessions is enough to skew conversion rate on a
 * site with this traffic volume. Vercel exposes `NEXT_PUBLIC_VERCEL_ENV`
 * automatically; when it is absent (local dev, self-hosted) we defer to
 * whether IDs were configured at all, so the tag can still be verified with
 * Tag Assistant from a local build.
 */
const isPreviewDeployment =
  process.env.NEXT_PUBLIC_VERCEL_ENV !== undefined &&
  process.env.NEXT_PUBLIC_VERCEL_ENV !== "production";

export const analyticsEnabled =
  Boolean(GA_MEASUREMENT_ID || GOOGLE_ADS_ID) && !isPreviewDeployment;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * `window.gtag` is defined synchronously by the inline snippet in
 * <GoogleTag />, so it exists long before a visitor can click anything. If it
 * is missing the tag was never configured (or was blocked by an extension) and
 * dropping the event is the correct behaviour — queueing it would only produce
 * a stale hit if the tag arrived minutes later.
 */
function gtag(...args: unknown[]) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag(...args);
}

export type LeadType =
  | "booking_request"
  | "contact_request"
  | "referral"
  | "phone_call";

/**
 * Records a lead in both properties at once.
 *
 * GA4 gets a single `generate_lead` event differentiated by parameter, so
 * every lead rolls up into one number while staying separable by source.
 * Google Ads gets the conversion action matching the lead type, which is what
 * Smart Bidding optimises against.
 */
export function trackLead(type: LeadType, params?: Record<string, unknown>) {
  if (!analyticsEnabled) return;

  gtag("event", "generate_lead", { lead_type: type, ...params });

  const label = type === "phone_call" ? ADS_CALL_LABEL : ADS_LEAD_LABEL;
  if (GOOGLE_ADS_ID && label) {
    gtag("event", "conversion", { send_to: `${GOOGLE_ADS_ID}/${label}` });
  }
}
