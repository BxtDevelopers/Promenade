/**
 * Google Consent Mode v2 defaults.
 *
 * The site audit flagged that no consent state was declared at all. Without it,
 * Google progressively withholds ad personalization, remarketing audiences and
 * modelled conversions — the exact measurement features the practice would be
 * paying for the moment it starts running ads.
 *
 * This renders a plain inline <script> in <head> rather than next/script. The
 * ordering requirement is absolute: the consent defaults must already sit in
 * dataLayer before gtag.js processes anything, or the first page view is
 * recorded under the wrong state. A raw script in head is the placement Google
 * documents, and it is the only one that cannot be reordered by a loading
 * strategy.
 *
 * Region policy, stated plainly because it is a judgement call:
 *
 *   - EEA, UK and Switzerland default to DENIED. These are the jurisdictions
 *     that actually require prior consent, and Google requires a declared
 *     denial there for Consent Mode to be considered implemented.
 *   - Everywhere else defaults to GRANTED. The practice is a single location
 *     in Chandler, Arizona; its patients are local. California's CCPA is an
 *     opt-out regime, not opt-in, and the practice does not sell or share
 *     personal information (see the Privacy Policy), so no prior consent is
 *     required for US visitors.
 *
 * The effect is that measurement continues to work normally for the audience
 * the practice actually serves, while EEA/UK/CH visitors are handled
 * conservatively and their hits are modelled rather than recorded.
 *
 * If the practice ever wants consent collected from US visitors too, this is
 * where it changes: drop the `region` argument from the denied default so it
 * applies globally, then add a banner that calls
 * `gtag('consent', 'update', { ... 'granted' })` on accept. `wait_for_update`
 * below already gives that banner 500ms to answer before tags fire.
 */

/** EU/EEA member states plus the UK, Switzerland, and the EEA non-EU three. */
const CONSENT_REQUIRED_REGIONS = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
  'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
  'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  'IS', 'LI', 'NO',
  'GB', 'CH',
]

const SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = window.gtag || gtag;

gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'granted',
  region: ${JSON.stringify(CONSENT_REQUIRED_REGIONS)},
  wait_for_update: 500
});

gtag('consent', 'default', {
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
  analytics_storage: 'granted',
  functionality_storage: 'granted',
  personalization_storage: 'granted',
  security_storage: 'granted'
});

// Strips ad click identifiers from the requests Google receives while consent
// is denied, and lets conversions still be modelled from them.
gtag('set', 'ads_data_redaction', true);
// Keeps campaign attribution working across pages when cookies are unavailable.
gtag('set', 'url_passthrough', true);
`.trim()

export default function ConsentDefaults() {
  return (
    <script
      id="google-consent-defaults"
      // Static string built at module scope from a constant array — no user or
      // request data reaches it.
      dangerouslySetInnerHTML={{ __html: SCRIPT }}
    />
  )
}
