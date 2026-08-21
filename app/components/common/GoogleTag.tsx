'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import {
  setAnalyticsConfig,
  trackLead,
  type AnalyticsConfig,
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
 *
 * The root layout renders this only when the tag is configured, so `config` is
 * always present here.
 */
export default function GoogleTag({ config }: { config: AnalyticsConfig }) {
  // Registered during render rather than in an effect: a visitor cannot
  // interact before hydration, but a form's success handler must never race
  // an effect that has not run yet.
  setAnalyticsConfig(config);

  useEffect(() => {
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

  // Either ID can load gtag.js; GA4 is preferred as the primary because it is
  // the property that also receives the page views.
  const primaryId = config.gaMeasurementId || config.googleAdsId;

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
          config.gaMeasurementId && `gtag('config', '${config.gaMeasurementId}');`,
          config.googleAdsId && `gtag('config', '${config.googleAdsId}');`,
        ]
          .filter(Boolean)
          .join('\n')}
      </Script>
    </>
  );
}
