/**
 * References:
 * - https://developers.google.com/analytics/devguides/collection/gtagjs/events
 * - https://mariestarck.com/add-google-analytics-to-your-next-js-application-in-5-easy-steps/
 * - https://support.google.com/analytics/answer/1033068
 * - https://nextjs.org/docs/basic-features/script
 */
import Script from "next/script";

// TODO: fix https://nextjs.org/docs/app/api-reference/next-config-js/runtime-configuration
// const {
//   publicRuntimeConfig: { isProduction },
// } = getConfig();
const isProduction = false;

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
