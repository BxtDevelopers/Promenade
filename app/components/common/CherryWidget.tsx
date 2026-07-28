'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'

/**
 * Cherry patient-financing widgets, generated at
 * provider.withcherry.com/script-generator for slug `promenade-dental`.
 *
 * Two deliberate departures from the vendor's copy-paste snippet:
 *
 * 1. Cherry's snippet ships its own <link> to Google Fonts pulling ELEVEN
 *    families (Playfair, Slabo, Lato, Raleway, Montserrat, Oswald, Poppins,
 *    Roboto, Source Sans 3, PT Sans, Open Sans). We only use Poppins, and the
 *    root layout already loads it, so that link is omitted.
 *
 * 2. Cherry assumes a website builder where you paste HTML into a page. Here
 *    the loader runs through next/script (afterInteractive) and the mount
 *    points are rendered by React.
 *
 * The full-page widget and the floating button each call _hw("init", ...), so
 * they must not both mount on the same page — see FULL_WIDGET_PATH below.
 */

const LOADER = `
    (function (w, d, s, o, f, js, fjs) {
        w[o] = w[o] || function () {
            (w[o].q = w[o].q || []).push(arguments);
        };
        (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
        js.id = o;
        js.src = f;
        js.async = 1;
        fjs.parentNode.insertBefore(js, fjs);
    })(window, document, "script", "_hw", "https://files.withcherry.com/widgets/widget.js");
`

const VARIABLES = `
            slug: 'promenade-dental',
            name: "Promenade Dental",
            images: [21],
            customLogo: '',
            defaultPurchaseAmount: 2000,
            customImage: '',
            imageCategory: 'dental',
            language: 'en',
`

/** The page carrying the full widget; the floating button is suppressed here. */
export const FULL_WIDGET_PATH = '/payments'

export function CherryFullPageWidget() {
  return (
    <>
      <Script id="cherry-full-page" strategy="afterInteractive">
        {`${LOADER}
    _hw("init", {
        debug: false,
        variables: {${VARIABLES}        },
        styles: {
            primaryColor: '#e89a72',
            secondaryColor: '#e89a7210',
            fontFamily: 'Poppins',
            headerFontFamily: 'Poppins',
        }
    }, ['hero','calculator','howitworks','faq']);`}
      </Script>

      {/* Mount points Cherry injects into. */}
      <div id="all" />
      <div id="hero" />
      <div id="calculator" />
      <div id="howitworks" />
      <div id="testimony" />
      <div id="faq" />
    </>
  )
}

export function CherryFloatingButton() {
  const pathname = usePathname()

  // Both scripts call _hw("init", ...). Running them on the same page would
  // initialise the widget twice, so the floating button stands down wherever
  // the full-page widget lives.
  if (pathname === FULL_WIDGET_PATH) return null

  return (
    <>
      <Script id="cherry-floating-button" strategy="afterInteractive">
        {`${LOADER}
    _hw("init", {
        debug: false,
        variables: {${VARIABLES}        },
        styles: {
            primaryColor: '#e89a72',
            secondaryColor: '#e89a7210',
            fontFamily: 'Poppins',
            headerFontFamily: 'Poppins',
            floatingEstimator: {
                position: 'bottom-right',
                // Raised off the generator's default (0). At 0 the button sits
                // 32px from the bottom, where it covered the sticky mobile
                // CALL/BOOK/DIRECTIONS bar by 151x31px and the scroll-to-top
                // button by 42x30px — and Cherry's z-index of 9999 wins over
                // both, so it hid our own CTAs.
                offset: {
                    x: '0px',
                    y: '56px'
                },
                zIndex: 9999,
                ctaFontFamily: 'Poppins',
                bodyFontFamily: 'Poppins',
                ctaColor: '#e89a72',
                ctaTextColor: '#FFFFFF'
            }
        }
    }, ['floatingEstimator']);`}
      </Script>

      <div id="floatingEstimator" />
    </>
  )
}
