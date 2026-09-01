import { isPreviewDeployment } from "@/app/lib/seo";

/**
 * Origin that serves the Dentva scheduling widget.
 *
 * Declared as a constant rather than derived from the token so that the
 * postMessage listener in <DentvaBookingModal /> has a fixed origin to compare
 * against. An origin check that is computed from configuration is one
 * misconfiguration away from accepting messages from anywhere.
 */
export const DENTVA_ORIGIN = "https://client.dentva.ai";

export type BookingWidgetConfig = {
  /** Dentva public booking token. Not a secret — it ships in the iframe URL. */
  token: string;
  /** Fully-qualified embed URL for the booking iframe. */
  url: string;
};

/**
 * Server-side resolution of the scheduling widget configuration.
 *
 * Same shape and reasoning as getAnalyticsConfig() in lib/analyticsConfig.ts:
 * read on the server, handed to the client component as props, and returning
 * null when nothing is configured so the site can ship without it.
 *
 * Returning null is not a degraded state. The in-house request form
 * (<BookingModal />) remains the fallback, so an unset token means patients
 * still have a working booking path — it just is not real-time scheduling.
 *
 * Preview deployments are excluded because every booking made against the
 * widget lands in the practice's live schedule. A QA click that puts a fake
 * patient in a real chair is a worse failure than a preview without booking.
 */
export function getBookingWidgetConfig(): BookingWidgetConfig | null {
  if (isPreviewDeployment) return null;

  const token = process.env.DENTVA_BOOKING_TOKEN ?? "";
  if (!token) return null;

  return {
    token,
    url: `${DENTVA_ORIGIN}/book/${encodeURIComponent(token)}`,
  };
}
