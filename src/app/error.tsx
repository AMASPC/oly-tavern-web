"use client";

import { useEffect } from "react";

/**
 * Next.js Error Boundary
 *
 * Catches rendering errors and displays a graceful fallback UI
 * instead of a blank page. Logs errors for observability.
 */
export default function GlobalError({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  useEffect(() => {
    // Log to console for Cloud Logging / devtools
    console.error("[ErrorBoundary]", {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    });

    // Beacon error to Hub
    if (globalThis.navigator && "sendBeacon" in globalThis.navigator) {
      try {
        globalThis.navigator.sendBeacon(
          "/api/errors",
          new Blob(
            [
              JSON.stringify({
                event: "render-error",
                message: error.message,
                digest: error.digest,
                page: globalThis.location?.pathname,
                timestamp: new Date().toISOString(),
              }),
            ],
            { type: "application/json" }
          )
        );
      } catch {
        // Silent fail
      }
    }
  }, [error]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#1c1917",
        color: "#fafaf9",
        fontFamily: "system-ui, sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: 48,
          height: 4,
          background: "#f59e0b",
          marginBottom: 32,
          borderRadius: 2,
        }}
      />
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
          color: "#f59e0b",
          marginBottom: 12,
        }}
      >
        Something Went Wrong
      </h2>
      <p
        style={{
          fontSize: "1.125rem",
          color: "#a8a29e",
          maxWidth: 480,
          lineHeight: 1.6,
          marginBottom: 32,
        }}
      >
        We hit a snag loading the page. This has been logged and we&apos;re on it.
      </p>
      <button
        onClick={reset}
        type="button"
        style={{
          background: "#f59e0b",
          color: "#1c1917",
          border: "none",
          padding: "16px 40px",
          fontSize: "1rem",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        onMouseOver={(e) => { e.currentTarget.style.background = "#fbbf24"; }}
        onFocus={(e) => { e.currentTarget.style.background = "#fbbf24"; }}
        onMouseOut={(e) => { e.currentTarget.style.background = "#f59e0b"; }}
        onBlur={(e) => { e.currentTarget.style.background = "#f59e0b"; }}
      >
        Try Again
      </button>
      {error.digest && (
        <p
          style={{
            marginTop: 24,
            fontSize: "0.75rem",
            color: "#57534e",
            fontFamily: "monospace",
          }}
        >
          Error ID: {error.digest}
        </p>
      )}
    </div>
  );
}
