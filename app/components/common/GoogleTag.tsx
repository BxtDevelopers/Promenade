'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import {
  GA_MEASUREMENT_ID,
  GOOGLE_ADS_ID,
  analyticsEnabled,
  trackLead,
} from '@/app/lib/analytics';

/**
 * Loads the Google tag once for the whole site and tracks phone-tap leads.
 *
 * `afterInteractive` rather than `beforeInteractive`: measurement is not
 * required for the page to function, and the tag is heavy enough that blocking
 * on it would cost LCP on the mobile connections most of this traffic arrives
 * on.
 *
 * Page views on client-side navigations are left to GA4's enhanced measurement
 * ("page changes based on browser history events", on by default). Sending
 * them manually as well is the usual cause of doubled session counts, so the
 * tag is configured plainly and nothing extra is fired on route change.
 */
export default function GoogleTag() {
  useEffect(() => {
    if (!analyticsEnabled) return;

    /*
     * One delegated listener rather than an onClick on each of the ~66 tel:
     * links across the site — it covers links rendered later, and it cannot
     * drift out of sync as pages are added.
     *
     * A tap is not a completed call. Treat this as an upper bound on call
     * volume and reconcile against the phone system (or Google's forwarding
     * numbers) before drawing conclusions about cost per patient.
     */
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.('a[href^="tel:"]');
      if (!link) return;

      trackLead('phone_call', {
        phone_number: link.getAttribute('href')?.replace('tel:', ''),
        link_text: link.textContent?.trim().slice(0, 60),
      });
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  if (!analyticsEnabled) return null;

  // Either ID can load gtag.js; GA4 is preferred as the primary because it is
  // the property that also receives the page views.
  const primaryId = GA_MEASUREMENT_ID || GOOGLE_ADS_ID;

  return (
    <>
      <Script
        id="gtag-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {[
          'window.dataLayer = window.dataLayer || [];',
          'function gtag(){dataLayer.push(arguments);}',
          'window.gtag = gtag;',
          "gtag('js', new Date());",
          GA_MEASUREMENT_ID && `gtag('config', '${GA_MEASUREMENT_ID}');`,
          GOOGLE_ADS_ID && `gtag('config', '${GOOGLE_ADS_ID}');`,
        ]
          .filter(Boolean)
          .join('\n')}
      </Script>
    </>
  );
}
