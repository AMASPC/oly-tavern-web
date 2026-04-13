export const businessInfo = {
  name: "The Town Tavern",
  phone: "360-357-9752",
  address: "2020 Pacific Ave SE, Olympia, WA 98506",
  googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=2020+Pacific+Ave+SE+Olympia+WA+98506",
  hours: "10:00 AM - 2:00 AM Daily",
  socials: {
    facebook: "https://www.facebook.com/TheTownTavern",
  }
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  "name": "The Town Tavern",
  "image": "https://olytavern.com/og-image.png",
  "@id": "https://olytavern.com",
  "url": "https://olytavern.com",
  "telephone": businessInfo.phone,
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
