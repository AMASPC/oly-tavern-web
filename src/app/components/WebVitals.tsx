"use client";

import { useEffect } from "react";

/**
 * Web Vitals & Error Tracking Component
 *
 * Tracks Core Web Vitals (LCP, INP, CLS, FCP, TTFB) and client-side errors.
 * Reports to console in development and sends beacon to /api/vitals in production
 * (future Hub integration). Also catches unhandled errors and promise rejections.
 *
 * Zero visual footprint — renders nothing to the DOM.
 */

interface VitalMetric {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  id: string;
  delta: number;
  navigationType: string;
}

function getRatingColor(rating: string): string {
  if (rating === "good") return "#22c55e";
  if (rating === "needs-improvement") return "#f59e0b";
  return "#ef4444";
}

function reportMetric(metric: VitalMetric) {
  const payload = {
    event: "web-vital",
    metric: metric.name,
    value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
    rating: metric.rating,
    id: metric.id,
    page: globalThis.location?.pathname ?? "/",
    timestamp: new Date().toISOString(),
    userAgent: globalThis.navigator?.userAgent ?? "",
  };

  if (process.env.NODE_ENV === "development") {
    const color = getRatingColor(metric.rating);
    console.log(
      `%c[WebVital] ${metric.name}: ${payload.value} (${metric.rating})`,
      `color: ${color}; font-weight: bold;`
    );
  }

  // Beacon to Hub analytics endpoint (non-blocking, fire-and-forget)
  if (globalThis.navigator && "sendBeacon" in globalThis.navigator) {
    try {
      globalThis.navigator.sendBeacon(
        "/api/vitals",
        new Blob([JSON.stringify(payload)], { type: "application/json" })
      );
    } catch {
      // Silently fail — vitals reporting should never crash the app
    }
  }
}

export default function WebVitals() {
  useEffect(() => {
    // Dynamically import web-vitals to avoid blocking initial render
    import("web-vitals").then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      onCLS(reportMetric as Parameters<typeof onCLS>[0]);
      onFCP(reportMetric as Parameters<typeof onFCP>[0]);
      onLCP(reportMetric as Parameters<typeof onLCP>[0]);
      onTTFB(reportMetric as Parameters<typeof onTTFB>[0]);
      onINP(reportMetric as Parameters<typeof onINP>[0]);
    }).catch(() => {
      // web-vitals not available — non-critical
    });

    // Global error handler
    const handleError = (event: ErrorEvent) => {
      const errorPayload = {
        event: "client-error",
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        page: globalThis.location?.pathname,
        timestamp: new Date().toISOString(),
        userAgent: globalThis.navigator?.userAgent,
      };

      console.error("[ErrorTracker]", errorPayload);

      if (globalThis.navigator && "sendBeacon" in globalThis.navigator) {
        try {
          globalThis.navigator.sendBeacon(
            "/api/errors",
            new Blob([JSON.stringify(errorPayload)], { type: "application/json" })
          );
        } catch {
          // Silent fail
        }
      }
    };

    // Unhandled promise rejection handler
    const handleRejection = (event: PromiseRejectionEvent) => {
      const errorPayload = {
        event: "unhandled-rejection",
        message: String(event.reason),
        page: globalThis.location?.pathname,
        timestamp: new Date().toISOString(),
        userAgent: globalThis.navigator?.userAgent,
      };

      console.error("[ErrorTracker] Unhandled Promise Rejection:", errorPayload);

      if (globalThis.navigator && "sendBeacon" in globalThis.navigator) {
        try {
          globalThis.navigator.sendBeacon(
            "/api/errors",
            new Blob([JSON.stringify(errorPayload)], { type: "application/json" })
          );
        } catch {
          // Silent fail
        }
      }
    };

    globalThis.addEventListener("error", handleError);
    globalThis.addEventListener("unhandledrejection", handleRejection);

    return () => {
      globalThis.removeEventListener("error", handleError);
      globalThis.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  // Zero visual footprint
  return null;
}
