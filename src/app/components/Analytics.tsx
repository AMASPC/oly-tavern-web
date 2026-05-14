"use client";

import { useEffect } from "react";

/**
 * Google Analytics 4 Component
 *
 * Loads GA4 via gtag.js. Renders nothing to the DOM.
 * Set NEXT_PUBLIC_GA_MEASUREMENT_ID in your environment
 * or replace the fallback below with your actual ID.
 *
 * Respects user privacy: only loads in production.
 */

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

export default function Analytics() {
  useEffect(() => {
    // Only load in production and only if we have an ID
    if (process.env.NODE_ENV !== "production") return;
    if (!GA_MEASUREMENT_ID) return;

    // Prevent double-loading
    if (document.querySelector(`script[src*="googletagmanager"]`)) return;

    // Load gtag.js
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize dataLayer
    /* eslint-disable @typescript-eslint/no-explicit-any */
    (globalThis as any).dataLayer = (globalThis as any).dataLayer || [];
    function gtag(...args: any[]) {
      (globalThis as any).dataLayer.push(args);
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, {
      page_path: globalThis.location?.pathname,
      anonymize_ip: true,
    });
  }, []);

  return null;
}
