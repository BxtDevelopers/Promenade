/**
 * Google tag (gtag.js) wiring for GA4 + Google Ads conversion tracking.
 *
 * Both products are served by one `gtag.js` load with two `config` calls —
 * loading the Ads tag separately would double the script weight and split the
 * consent/linker state between them.
 *
 * The IDs are resolved on the server (see lib/analyticsConfig.ts) and handed
 * to <GoogleTag />, which registers them here so that `trackLead()` can be
 * called from any form without threading configuration through the tree.
 */

export type AnalyticsConfig = {
  gaMeasurementId: string;
  googleAdsId: string;
  /** Conversion label for form submissions. */
  leadLabel: string;
  /** Conversion label for taps on a tel: link. */
  callLabel: string;
};

/**
 * Populated by <GoogleTag /> during its render, which happens in the root
 * layout — so it is set long before any form or phone link can be interacted
 * with. Null means the tag was never configured, and every call below becomes
 * a no-op.
 */
let config: AnalyticsConfig | null = null;

export function setAnalyticsConfig(next: AnalyticsConfig) {
  config = next;
}

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
  if (!config) return;

  gtag("event", "generate_lead", { lead_type: type, ...params });

  const label = type === "phone_call" ? config.callLabel : config.leadLabel;
  if (config.googleAdsId && label) {
    gtag("event", "conversion", { send_to: `${config.googleAdsId}/${label}` });
  }
}
