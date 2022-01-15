/**
 * References:
 * - https://developers.google.com/analytics/devguides/collection/gtagjs/events
 * - https://mariestarck.com/add-google-analytics-to-your-next-js-application-in-5-easy-steps/
 * - https://support.google.com/analytics/answer/1033068
 * - https://nextjs.org/docs/basic-features/script
 */
import Script from 'next/script'
import getConfig from 'next/config'

const {
  publicRuntimeConfig: { appVersion, googleAnalyticsId, isProduction },
} = getConfig()

const GAScript = () => {
  if (isProduction) {
    return (
      <>
        <Script
          // Examples of scripts that are good candidates to load with afterInteractive strategy include analytics and tag managers
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        />

        <Script strategy="afterInteractive" id="ga-script">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}', {
                app_name: 'guitton.co',
                app_version: '${appVersion}',
                page_path: window.location.pathname,
              });
          `}
        </Script>
      </>
    )
  }
  return <></>
}

export default GAScript

/**
 * Log custom event to Google Analytics
 * Ref: https://developers.google.com/analytics/devguides/collection/gtagjs/events
 * @param action name the type of event or interaction you want to measure for a particular web object.
 * @param category A category is a name that you supply as a way to group objects that you want to analyze.
 *  Typically, you will use the same category name multiple times over related UI elements that you want to group under a given category.
 * @param label With labels, you can provide additional information for events that you want to analyze,
 *  such as movie titles in videos, or the names of downloaded files.
 * @param value The value component is an integer, and is used to assign a numerical value to a page object.
 */
export const logEvent = (
  action: string,
  category: string = 'engagement',
  label: string = '(not set)',
  value?: number
) => {
  {
    isProduction &&
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
  }
}
