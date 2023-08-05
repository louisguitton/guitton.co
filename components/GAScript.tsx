/**
 * References:
 * - https://developers.google.com/analytics/devguides/collection/gtagjs/events
 * - https://mariestarck.com/add-google-analytics-to-your-next-js-application-in-5-easy-steps/
 * - https://support.google.com/analytics/answer/1033068
 * - https://nextjs.org/docs/basic-features/script
 */
import getConfig from "next/config";
import Script from "next/script";

const {
  publicRuntimeConfig: { isProduction, googleAnalyticsId, appVersion },
} = getConfig();

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
    );
  }
  return <></>;
};

export default GAScript;
