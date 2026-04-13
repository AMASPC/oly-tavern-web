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
    "name": "The Town Tavern",
    "image": "https://olytavern.com/og-image.png",
    "@id": "https://olytavern.com",
    "url": "https://olytavern.com",
    "telephone": "360-357-9752", 
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "10:00",
      "closes": "02:00"
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
