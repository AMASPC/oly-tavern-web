import Link from "next/link";

/**
 * Custom 404 Page
 *
 * Branded 404 that keeps visitors on-site instead of
 * showing a generic browser error. Styled inline so it
 * works even if CSS fails to load.
 */
export default function NotFound() {
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
      <p
        style={{
          fontSize: "8rem",
          fontWeight: 900,
          color: "#f59e0b",
          lineHeight: 1,
          margin: 0,
          opacity: 0.3,
        }}
      >
        404
      </p>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
          color: "#f59e0b",
          marginBottom: 12,
          marginTop: -16,
        }}
      >
        Wrong Turn
      </h1>
      <p
        style={{
          fontSize: "1.125rem",
          color: "#a8a29e",
          maxWidth: 480,
          lineHeight: 1.6,
          marginBottom: 32,
        }}
      >
        This page doesn&apos;t exist — but the tavern does.
        Come on in.
      </p>
      <Link
        href="/"
        style={{
          background: "#f59e0b",
          color: "#1c1917",
          border: "none",
          padding: "16px 40px",
          fontSize: "1rem",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          textDecoration: "none",
          display: "inline-block",
        }}
      >
        Back To The Tavern
      </Link>
    </div>
  );
}
