export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    "name": "The Town Tavern",
    "image": "https://thetown-tavern.web.app/og-image.jpg", // Placeholder
    "@id": "https://thetown-tavern.web.app",
    "url": "https://thetown-tavern.web.app",
    "telephone": "360-555-0123", // Example, not provided in prompt
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
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
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
      <div className="min-h-screen bg-stone-900 text-stone-100 selection:bg-amber-500/30">
        {/* Hero Section */}
        <header className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-amber-900/20 via-stone-900 to-stone-900 -z-10" />
          
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <p className="text-amber-500 font-bold uppercase tracking-[0.3em] text-sm">Olympia, WA</p>
            <h1 className="text-5xl md:text-8xl font-black mb-6 glow-amber tracking-tighter leading-[0.9]">
              Welcome to <br />
              <span className="text-amber-500">The Town Tavern.</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-medium text-stone-400 max-w-3xl mx-auto">
              Your Neighborhood Living Room.
            </h2>
          </div>
          
          <p className="max-w-2xl text-lg md:text-xl text-stone-300 font-light leading-relaxed my-8 animate-in fade-in duration-1000 delay-300">
            Cold drinks, solid bites, and Olympia&apos;s friendliest crowd. <br className="hidden md:block" />
            Absolutely no pretense.
          </p>

          <div className="animate-in fade-in zoom-in duration-700 delay-500">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=2020+Pacific+Ave+SE+Olympia+WA+98506"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-amber-500 text-stone-950 px-10 py-5 rounded-none font-black text-xl uppercase tracking-widest hover:bg-amber-400 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              id="cta-directions"
            >
              Get Directions
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-20 divide-y divide-stone-800 space-y-32">
          
          {/* Menu Section */}
          <section className="pt-20 grid lg:grid-cols-2 gap-20" id="menu">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-1 w-12 bg-amber-500" />
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Tavern Favorites</h2>
              </div>
              <ul className="text-xl md:text-2xl space-y-6 text-stone-300 font-medium list-inside">
                <li className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                  <span>Golden Mozzarella Sticks</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                  <span>Crispy Chicken Strips</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                  <span>Salted Pretzels & Mustard</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                  <span>Basket of Hot Fries</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                  <span>Classic Tater Tots</span>
                </li>
              </ul>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-1 w-12 bg-amber-500" />
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Full Bar</h2>
              </div>
              <ul className="text-xl md:text-2xl space-y-6 text-stone-300 font-medium">
                <li className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                  <span>Rotating NW Craft Taps</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                  <span>Ice Cold Domestic Longnecks</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                  <span>Classic Cocktails & Well Pours</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                  <span>Selected Local Wines</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Events Section */}
          <section className="pt-32" id="events">
            <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase tracking-tighter text-center italic">What&apos;s Happening</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 text-center uppercase tracking-widest text-xs md:text-sm font-bold">
              {["Bar Bingo", "Trivia Night", "Pool Table", "Golden Tee", "Pull Tabs"].map((event) => (
                <div key={event} className="aspect-square flex items-center justify-center p-4 bg-stone-800/40 border border-stone-700/50 hover:bg-stone-800 hover:border-amber-500/50 hover:text-amber-500 transition-all duration-300 cursor-default group">
                  <span className="group-hover:scale-110 transition-transform">{event}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Vibe Section */}
          <section className="pt-32 pb-20 text-center max-w-4xl mx-auto space-y-12" id="vibe">
            <div className="inline-block px-4 py-1 border border-amber-500/30 text-amber-500/60 uppercase tracking-[0.4em] text-[10px] font-bold">Local Spotlight</div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">The Vibe</h2>
            <p className="text-2xl md:text-4xl text-stone-300 font-serif leading-relaxed italic opacity-90">
              &ldquo;Found your neighborhood living room. A cozy hole-in-the-wall where the crowd is tight-knit, the drinks are strong, and everyone knows a friendly face.&rdquo;
            </p>
          </section>

        </main>

        {/* Footer */}
        <footer className="bg-stone-950 py-32 px-6 border-t border-stone-800/50 mt-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 items-start">
            <div className="space-y-6">
              <h3 className="text-3xl font-black uppercase tracking-tighter text-amber-500">The Town Tavern</h3>
              <address className="not-italic text-stone-400 text-xl leading-relaxed">
                2020 Pacific Ave SE<br />
                Olympia, WA 98506
              </address>
              <div className="pt-4">
                 <a 
                  href="https://www.google.com/maps/search/?api=1&query=2020+Pacific+Ave+SE+Olympia+WA+98506"
                  className="text-stone-500 hover:text-amber-500 underline underline-offset-8 transition-colors text-sm font-bold uppercase tracking-widest"
                 >
                  View on Google Maps
                 </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-stone-500">Hours of Operation</h3>
              <div className="text-stone-200 text-2xl font-black italic">
                10:00 AM - 2:00 AM<br />
                <span className="text-amber-500/80 uppercase text-lg not-italic font-bold tracking-widest">Open Every Day</span>
              </div>
            </div>

            <div className="space-y-6 md:text-right flex flex-col md:items-end">
               <span className="text-stone-600 text-sm font-medium">Established in Olympia</span>
               <div className="h-px w-24 bg-stone-800" />
               <span className="text-stone-500 text-sm">© {new Date().getFullYear()} The Town Tavern.</span>
               <span className="text-stone-700 text-[10px] uppercase tracking-widest">Absolutely No Pretense.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
