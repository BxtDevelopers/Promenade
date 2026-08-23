/**
 * Campaign attribution: remembers which ad sent a visitor, so that a lead can
 * be credited to the campaign that paid for it.
 *
 * The problem this solves is that the tag fires a conversion at the moment a
 * form is submitted, which is usually several pages after the ad click. By
 * then the `utm_*` parameters are long gone from the URL, so every lead looks
 * identical regardless of whether it cost $0 or $40 to acquire. Running two ad
 * platforms against one funnel without this is unmeasurable.
 *
 * Deliberately not `useSearchParams()`: on a prerendered route that hook
 * client-renders the tree up to the nearest Suspense boundary, and this reads
 * the query string from the root layout — so it would opt the entire site out
 * of prerendering to service a fire-once side effect. Reading
 * `window.location.search` inside an effect costs nothing and changes no
 * rendering behaviour.
 */

export type Attribution = {
  source: string;
  medium: string;
  campaign: string;
  /** Ad group. Carried in `utm_content`. */
  content: string;
  term: string;
  /** Google's auto-tagged click ID. Required for offline conversion import. */
  gclid: string;
  /**
   * iOS click IDs. Google sends `gbraid`/`wbraid` instead of `gclid` when ATT
   * prevents user-level tracking, which on a practice's mobile traffic is a
   * large share of clicks — ignoring them would silently drop those leads from
   * any offline import.
   */
  gbraid: string;
  wbraid: string;
  /** Path the visitor arrived on — a fallback split when the tags are absent. */
  landingPage: string;
  referrer: string;
  /** ms epoch of the click, so the record can be expired. */
  timestamp: number;
};

const STORAGE_KEY = 'pd_attribution';

/**
 * Matches the 30-day lookback both Google Ads and GA4 use by default. A record
 * older than this has outlived the window the ad platforms would credit it in,
 * so keeping it would only manufacture disagreement with their reporting.
 */
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

/**
 * Values land in an HTML email and in GA4 event parameters, and anyone can put
 * anything in a query string. The API route escapes on output, but there is no
 * reason to carry markup this far in the first place — restrict to the
 * characters a real campaign name uses and cap the length.
 */
function sanitize(value: string | null): string {
  return (value ?? '')
    .replace(/[^A-Za-z0-9._\-/ ]/g, '')
    .trim()
    .slice(0, 120);
}

/**
 * True when the visit came from something that was paid for. Only these
 * overwrite a stored record — see `capture()`.
 */
function isPaid(a: Attribution): boolean {
  return Boolean(a.gclid || a.gbraid || a.wbraid || a.source);
}

function read(): Attribution | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Attribution;
    if (!parsed || typeof parsed.timestamp !== 'number') return null;
    if (Date.now() - parsed.timestamp > MAX_AGE_MS) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    // Private browsing, a disabled storage permission, or a corrupt value.
    // Attribution is telemetry; losing it must never break a booking.
    return null;
  }
}

/**
 * Records the current visit if it is attributable.
 *
 * The rule is "most recent paid touch wins, and organic never displaces paid".
 * A patient who clicks the ad, leaves to think about it, then returns a week
 * later by searching the practice by name has been paid for — crediting that
 * booking to organic would understate the campaign that actually produced it.
 * Between two paid clicks the later one wins, which is what both ad platforms
 * do.
 */
export function capture(): void {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams(window.location.search);

  const current: Attribution = {
    source: sanitize(params.get('utm_source')),
    medium: sanitize(params.get('utm_medium')),
    campaign: sanitize(params.get('utm_campaign')),
    content: sanitize(params.get('utm_content')),
    term: sanitize(params.get('utm_term')),
    gclid: sanitize(params.get('gclid')),
    gbraid: sanitize(params.get('gbraid')),
    wbraid: sanitize(params.get('wbraid')),
    landingPage: window.location.pathname.slice(0, 120),
    referrer: sanitize(document.referrer.replace(/^https?:\/\//, '').split('/')[0]),
    timestamp: Date.now(),
  };

  if (!isPaid(current)) {
    // Untagged visit. Record it only if nothing better is already stored, so
    // that organic leads still carry a landing page and referrer.
    if (read()) return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch {
    // Storage unavailable — proceed unattributed rather than throwing.
  }
}

/**
 * Attribution as GA4 event parameters.
 *
 * Prefixed `lead_` because GA4 reserves the unprefixed `source`, `medium` and
 * `campaign` names for its own session attribution; sending our own values
 * under those keys would collide with the dimensions the reports are built on.
 */
export function attributionParams(): Record<string, string> {
  const a = typeof window === 'undefined' ? null : read();
  if (!a) return {};

  const params: Record<string, string> = {};
  if (a.source) params.lead_source = a.source;
  if (a.medium) params.lead_medium = a.medium;
  if (a.campaign) params.lead_campaign = a.campaign;
  if (a.content) params.lead_ad_group = a.content;
  if (a.term) params.lead_term = a.term;
  if (a.gclid) params.lead_gclid = a.gclid;
  if (a.gbraid) params.lead_gbraid = a.gbraid;
  if (a.wbraid) params.lead_wbraid = a.wbraid;
  if (a.landingPage) params.lead_landing_page = a.landingPage;
  return params;
}

/**
 * Attribution as one human-readable line for the practice inbox.
 *
 * This is the half of the funnel the tag cannot see: every lead is retyped
 * into Dentrix by hand, so unless the channel is legible in the notification
 * email there is no way to ever join an ad spend to a patient who actually
 * showed up. One preformatted string rather than several fields keeps the
 * change to the mail route to a single escaped value.
 */
export function attributionLine(): string {
  const a = typeof window === 'undefined' ? null : read();
  if (!a) return '';

  const clickId = a.gclid || a.gbraid || a.wbraid;
  const channel = clickId && !a.source
    ? 'google / cpc'
    : [a.source, a.medium].filter(Boolean).join(' / ');

  const parts = [
    channel || `referrer: ${a.referrer || 'direct'}`,
    a.campaign && `campaign: ${a.campaign}`,
    a.content && `ad group: ${a.content}`,
    a.landingPage && `landed on: ${a.landingPage}`,
    clickId && `click id: ${clickId}`,
  ].filter(Boolean);

  return parts.join(' | ').slice(0, 300);
}
