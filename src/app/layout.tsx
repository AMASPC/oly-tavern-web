import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WebVitals from "./components/WebVitals";
import Analytics from "./components/Analytics";
import { ServiceWorkerRegistrar } from "./components/ServiceWorkerRegistrar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Town Tavern | Olympia's Neighborhood Living Room",
  description: "Experience the neighborhood vibe at The Town Tavern in Olympia, WA. Cold drinks, tavern favorites, and a friendly crowd. No pretense, just a cozy hole-in-the-wall.",
  openGraph: {
    title: "The Town Tavern | Olympia's Neighborhood Living Room",
    description: "Cold drinks, tavern favorites, and Olympia's friendliest crowd. Absolutely no pretense.",
    url: "https://olytavern.com",
    siteName: "The Town Tavern",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://olytavern.com/og-image.svg",
        width: 1200,
        height: 630,
        alt: "The Town Tavern - Your Neighborhood Living Room in Olympia, WA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Town Tavern | Olympia, WA",
    description: "Your Neighborhood Living Room. Cold drinks, solid bites, and a friendly crowd.",
    images: ["https://olytavern.com/og-image.svg"],
  },
  alternates: {
    canonical: "https://olytavern.com",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <WebVitals />
        <Analytics />
        <ServiceWorkerRegistrar />
        {children}
      </body>
    </html>
  );
}
