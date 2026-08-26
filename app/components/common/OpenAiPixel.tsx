'use client';

import Script from 'next/script';
import type { OpenAiPixelConfig } from '@/app/lib/analyticsConfig';

/**
 * ChatGPT Ads pixel (oaiq).
 *
 * This is OpenAI's setup snippet, unchanged in behaviour: the same loader,
 * the same CDN URL, the same `init` call. It is expressed through next/script
 * rather than as a raw <script> in <head> for the same reason the Google tag
 * is — a synchronous third-party script in the document head blocks parsing,
 * and this site's traffic is predominantly mobile.
 *
 * `afterInteractive` still runs on page load, well before a visitor can
 * submit anything, so the pixel sees the landing URL — including the `oppref`
 * click reference it needs for attribution.
 *
 * Rendered from the root layout, so it initialises on every page. OpenAI asks
 * for the pixel on the pages where ad activity is measured, and an ad can point
 * at any page here: the landing page for each ad group is a service page, not
 * the homepage.
 */
export default function OpenAiPixel({ config }: { config: OpenAiPixelConfig }) {
  return (
    <Script id="oaiq-init" strategy="afterInteractive">
      {`!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",${JSON.stringify(
        { pixelId: config.pixelId, debug: config.debug },
      )});`}
    </Script>
  );
}
