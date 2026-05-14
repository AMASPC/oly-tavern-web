import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import RitualsSection from '../components/RitualsSection';
import VibeSection from '../components/VibeSection';
import Footer from '../components/Footer';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    "name": "The Towne Tavern",
    "alternateName": "The Town Tavern",
    "description": "Relaxed neighborhood haunt featuring a beer selection, pool, pull-tabs, and weekly bingo. Olympia's neighborhood living room.",
    "image": "https://olytavern.com/og-image.png",
    "@id": "https://olytavern.com",
    "url": "https://olytavern.com",
    "telephone": "+1-360-786-6812",
    "priceRange": "$$",
    "servesCuisine": ["American", "Pub Food"],
    "hasMenu": "https://olytavern.com/#menu",
    "acceptsReservations": "False",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2020 Pacific Ave SE",
      "addressLocality": "Olympia",
      "addressRegion": "WA",
      "postalCode": "98506",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.0423,
      "longitude": -122.8732
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.2",
      "reviewCount": "86",
      "bestRating": "5"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "10:00",
      "closes": "02:00"
    },
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "tel:+13607866812",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Call The Towne Tavern"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-500/30 font-sans">
        <Navbar />
        <Hero />
        <div className="space-y-40">
          <MenuSection />
          <RitualsSection />
          <VibeSection />
        </div>
        <Footer />
      </div>
    </>
  );
}
