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

import { attributionParams } from '@/app/lib/attribution';

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
    /** ChatGPT Ads pixel queue, defined by the snippet in <OpenAiPixel />. */
    oaiq?: (...args: unknown[]) => void;
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

/**
 * Reports a conversion to the ChatGPT Ads pixel.
 *
 * The loader defines `window.oaiq` as a queue synchronously, so calls made
 * before the SDK finishes downloading are replayed rather than lost. If it is
 * missing entirely the pixel was never configured (OPENAI_PIXEL_ID unset) or
 * was blocked, and dropping the event is correct.
 */
function oaiq(...args: unknown[]) {
  if (typeof window === "undefined" || typeof window.oaiq !== "function") return;
  window.oaiq(...args);
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
 *
 * The campaign that produced the visitor is attached to the GA4 event (see
 * lib/attribution.ts). Without it every lead is indistinguishable, and two ad
 * platforms pointed at one funnel cannot be told apart. Note that this does
 * not de-duplicate the Ads conversion: Google is sent the same hit whatever
 * the source, and will claim credit for a lead another channel paid for.
 * Segment on `lead_source` in GA4, not on the Ads conversion count.
 */
export function trackLead(type: LeadType, params?: Record<string, unknown>) {
  /*
   * The ChatGPT pixel is reported first, and deliberately outside the `config`
   * guard below. That guard covers the *Google* tag; gating the OpenAI event on
   * it would silently drop every ChatGPT conversion if the Google IDs were ever
   * unset, which is a failure nobody would notice until a month of spend had
   * already been optimised against nothing.
   *
   * Form submissions only. A `tel:` tap is an upper bound on calls, not a lead
   * a form confirmed — counting it here would inflate the conversion the
   * campaign bids against, and the same distinction is already drawn on the
   * Google side by reporting phone taps under a separate conversion action.
   *
   * Every caller invokes trackLead() only after the API has returned ok, so
   * reaching this line means the submission was accepted, not merely attempted.
   */
  if (type !== "phone_call") {
    oaiq("measure", "lead_created", { type: "customer_action" });
  }

  if (!config) return;

  // Attribution first, so an explicit caller parameter always wins a collision.
  gtag("event", "generate_lead", {
    ...attributionParams(),
    lead_type: type,
    ...params,
  });

  const label = type === "phone_call" ? config.callLabel : config.leadLabel;
  if (config.googleAdsId && label) {
    gtag("event", "conversion", { send_to: `${config.googleAdsId}/${label}` });
  }
}
