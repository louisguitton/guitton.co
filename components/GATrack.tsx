"use client";
import getConfig from "next/config";
import { usePathname } from "next/navigation";
import { FC, useEffect } from "react";

const {
  publicRuntimeConfig: { isProduction },
} = getConfig();

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
  category = "engagement",
  label = "(not set)",
  value?: number
) => {
  {
    isProduction &&
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
  }
};

export const GATrack: FC<{
  action: string;
  category: string;
}> = ({ action, category }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) logEvent(action, category, pathname);
  }, [action, category, pathname]);
  return <></>;
};

export default GATrack;
