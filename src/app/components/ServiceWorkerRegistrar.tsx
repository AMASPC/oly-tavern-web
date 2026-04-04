"use client";

import { useEffect } from "react";

/**
 * Service Worker Registrar
 *
 * Registers the service worker for offline fallback.
 * Only registers in production to avoid caching issues during development.
 */
export function ServiceWorkerRegistrar() {
  useEffect(() => {
    if (
      globalThis.navigator !== undefined &&
      "serviceWorker" in globalThis.navigator &&
      process.env.NODE_ENV === "production"
    ) {
      globalThis.navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          console.log("[SW] Registered, scope:", reg.scope);
        })
        .catch((err) => {
          console.warn("[SW] Registration failed:", err);
        });
    }
  }, []);

  return null;
}
