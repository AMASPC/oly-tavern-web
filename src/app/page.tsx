'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    const checkKitchenStatus = () => {
      const now = new Date()
      const day = now.getDay() // 0 = Sun, 5 = Fri, 6 = Sat
      const hour = now.getHours()
      
      const isWeekend = day === 0 || day === 5 || day === 6
      const isKitchenHours = hour >= 10 && hour < 14
      setIsOpen(isWeekend && isKitchenHours)
    }
    
    checkKitchenStatus()
    const interval = setInterval(checkKitchenStatus, 60000)
    return () => clearInterval(interval)
  }, [])

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    "name": "The Towne Tavern",
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

  const tavernMenu = [
    { name: "Chicken Strips", price: "$9" },
    { name: "Fish n' Chips", price: "$10" },
    { name: "Popcorn Shrimp", price: "$9" },
    { name: "Fried Pickles", price: "$8" },
    { name: "Corn Dog", price: "$2.5" },
    { name: "Chili Bowl", price: "$5", extra: "+$1 Cheese" },
    { name: "Popcorn", price: "$2" },
    { name: "Mozzarella Sticks (6)", price: "$9" },
    { name: "Jalapeño Poppers (6)", price: "$9" },
    { name: "Fried Mushrooms", price: "$8" },
    { name: "Onion Rings", price: "$10" },
    { name: "Buffalo Wings (6/12/18)", price: "$9/$15/$20" },
    { name: "Sampler Platter", price: "$16", detail: "Strips, Wings, Poppers, Mozz, Fries" },
    { name: "Basket of Fries", price: "$6" },
    { name: "Tots or JoJos", price: "$7" },
  ]

  const deesBreakfast = [
    { name: "Towne Special*", price: "$11", detail: "2 eggs, hashbrowns, toast, choice of sausage or bacon" },
    { name: "Biscuits & Gravy*", price: "$5 / $10", detail: "Half or Whole order available" },
    { name: "Pancakes", price: "$4.5", detail: "2 or 3 fluffy pancakes" },
    { name: "French Toast", price: "$5 / $8", detail: "Half or Whole order" },
    { name: "Kitchen Burrito*", price: "$9", detail: "Eggs, bacon, cheese, and tots" },
  ]

  const deesLunch = [
    { name: "Classic Burger*", price: "$8", detail: "Goop, lettuce, onion, tomato, pickle", extra: "+$1 Chz / +$2 Bacon" },
    { name: "The Reuben*", price: "$9", detail: "Corned beef, kraut, swiss on rye" },
    { name: "BLT*", price: "$7", detail: "Bacon, lettuce, tomato on toast" },
    { name: "Grilled Cheese", price: "$8", detail: "American, Pepperjack, or Swiss. (Turkey/Ham available)" },
  ]

  const soups = [
    { day: "Friday", type: "Cheddar Broccoli" },
    { day: "Saturday", type: "Navy Bean & Ham" },
    { day: "Sunday", type: "Hamburger Veggie" },
  ]

  const weeklyRituals = [
    { day: "Monday", title: "Happy Hour & Pull Tabs", detail: "10AM - 7PM Daily Rituals", highlight: "Full Board Available" },
    { day: "Tuesday", title: "Arcade Games", detail: "25¢ Plays / $1 for 5", highlight: "Retro Vibes" },
    { day: "Wednesday", title: "Tacos & Bingo", detail: "Alisha's Tacos & Bingo with Caroleen", highlight: "Starts at 6:30PM" },
    { day: "Thursday", title: "Tavern Classics", detail: "Cold Pints & Warm Welcomes", highlight: "The Social Hub" },
    { day: "Friday", title: "Jukebox High", detail: "AMI Music App Takeover", highlight: "Your Soundtrack" },
    { day: "Saturday", title: "Punch Boards", detail: "Classic Social Gaming", highlight: "Big Wins" },
    { day: "Sunday", title: "Free Pool", detail: "All Day / Every Table", highlight: "Rack 'Em Up" },
  ]

  const currentDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
  const todayRitual = weeklyRituals.find(r => r.day === currentDay);
  const otherRituals = weeklyRituals.filter(r => r.day !== currentDay);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-500/30 font-sans">
        
        {/* Navigation Bar */}
        <nav className="fixed top-0 w-full z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800/50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <span className="text-amber-500 font-black uppercase tracking-tighter text-xl">The Towne Tavern</span>
            <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
              <a href="#menu" className="hover:text-amber-500 transition-colors">Menu</a>
              <a href="#events" className="hover:text-amber-500 transition-colors">Vibe</a>
              <a href="#location" className="hover:text-amber-500 transition-colors">Visit</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-amber-900/10 via-stone-950 to-stone-950 -z-10" />
          
          <div className="space-y-6 max-w-4xl">
            <div className="inline-block px-4 py-1 border border-amber-500/30 text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] animate-pulse">
              Olympia, Washington
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter leading-[0.85] uppercase">
              The <br />
              <span className="text-amber-500">Towne Tavern.</span>
            </h1>
            <p className="text-xl md:text-3xl text-stone-400 font-medium italic opacity-80">
              "Olympia&apos;s Neighborhood Living Room"
            </p>
          </div>
          
          <div className="mt-12 flex flex-col items-center gap-6">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=2020+Pacific+Ave+SE+Olympia+WA+98506"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-amber-500 text-stone-950 px-12 py-5 font-black text-xl uppercase tracking-widest hover:bg-amber-400 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
            >
              Get Directions
            </a>
            <p className="text-stone-500 text-xs font-bold uppercase tracking-widest">Open Daily 10AM — 2AM</p>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-24 space-y-40" id="menu">
          
          {/* Daily Tavern Menu */}
          <section className="space-y-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-8">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">Daily Pub Grub</h2>
              <span className="text-stone-500 font-bold uppercase tracking-widest text-sm">Served Open to Close</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
              {tavernMenu.map((item) => (
                <div key={item.name} className="flex justify-between items-start group border-b border-stone-900 pb-4 hover:border-amber-500/20 transition-colors">
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight group-hover:text-amber-500 transition-colors">{item.name}</h3>
                    {item.detail && <p className="text-stone-500 text-sm font-medium italic leading-none">{item.detail}</p>}
                    {item.extra && <p className="text-amber-500/60 text-[10px] uppercase font-bold tracking-widest leading-none">{item.extra}</p>}
                  </div>
                  <span className="text-xl md:text-2xl font-bold text-stone-400">{item.price}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Dee's Kitchen Section */}
          <section className="relative p-8 md:p-16 bg-stone-900/30 border border-stone-800/50 rounded-lg space-y-20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-950 px-6 py-1 text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap">
              {isOpen ? "Kitchen Is Serving Now" : "Weekend Kitchen Serving Fri-Sun 10am-2pm"}
            </div>

            <div className="text-center space-y-4">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">Dee&apos;s Kitchen</h2>
              <p className="text-stone-400 text-sm md:text-lg font-bold uppercase tracking-[0.3em]">Olympia Classics & Weekend Comfort</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-20">
              <div className="space-y-12">
                <h3 className="text-3xl font-black italic uppercase border-b-4 border-amber-500 inline-block">Breakfast</h3>
                <div className="space-y-8">
                  {deesBreakfast.map((item) => (
                    <div key={item.name} className="flex justify-between items-start group">
                      <div className="space-y-1">
                        <h4 className="text-xl font-black uppercase tracking-tight group-hover:text-amber-500 transition-colors">{item.name}</h4>
                        <p className="text-stone-500 text-sm italic">{item.detail}</p>
                      </div>
                      <span className="text-xl font-bold text-stone-400">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-12">
                <h3 className="text-3xl font-black italic uppercase border-b-4 border-amber-500 inline-block">Mid-Day Bites</h3>
                <div className="space-y-8">
                  {deesLunch.map((item) => (
                    <div key={item.name} className="flex justify-between items-start group">
                      <div className="space-y-1">
                        <h4 className="text-xl font-black uppercase tracking-tight group-hover:text-amber-500 transition-colors">{item.name}</h4>
                        <p className="text-stone-500 text-sm italic">{item.detail}</p>
                        {item.extra && <p className="text-amber-500/50 text-[10px] uppercase font-bold tracking-widest">{item.extra}</p>}
                      </div>
                      <span className="text-xl font-bold text-stone-400">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Soup Schedule */}
            <div className="pt-20 border-t border-stone-800">
              <h3 className="text-2xl font-black uppercase tracking-widest text-center mb-10 text-stone-500 italic">Daily Weekend Soups</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {soups.map((soup) => (
                  <div key={soup.day} className="p-6 bg-stone-950/50 border border-stone-800 text-center space-y-2 hover:border-amber-500 transition-colors">
                    <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">{soup.day}</span>
                    <p className="text-lg font-black uppercase leading-tight">{soup.type}</p>
                    <span className="text-stone-600 text-[10px] font-bold">CUP $4 / BOWL $6</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Weekly Rituals Section */}
          <section className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-8">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">Weekly Rituals</h2>
              <span className="text-stone-500 font-bold uppercase tracking-widest text-sm">Now @ The Tavern</span>
            </div>

            <div className="space-y-12">
              {/* Today's Feature */}
              {todayRitual && (
                <div className="relative group overflow-hidden bg-amber-500 text-stone-950 p-12 md:p-20 border-4 border-amber-400/50 shadow-[0_0_50px_rgba(245,158,11,0.1)]">
                  <div className="absolute top-6 right-6 px-4 py-1 bg-stone-950 text-amber-500 text-xs font-black uppercase tracking-[0.3em]">
                    Happening Today
                  </div>
                  
                  <div className="max-w-3xl space-y-6">
                    <span className="text-stone-950/70 text-lg font-black uppercase tracking-[0.4em]">{todayRitual.day}</span>
                    <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                      {currentDay === 'Thursday' ? "Quiet Pints & Classics" : todayRitual.title}
                    </h3>
                    <p className="text-xl md:text-2xl font-bold leading-relaxed max-w-2xl text-stone-900">
                      {currentDay === 'Thursday' 
                        ? "Tonight is about the simple things. Cold beer, warm conversation, and the true social baseline of Olympia." 
                        : todayRitual.detail}
                    </p>
                    <div className="inline-block px-6 py-2 bg-stone-950 text-amber-500 text-sm font-black uppercase tracking-widest mt-8">
                      {todayRitual.highlight}
                    </div>
                  </div>
                  
                  {/* Visual Flourish */}
                  <div className="absolute -bottom-10 -right-10 text-[200px] font-black opacity-10 uppercase tracking-tighter pointer-events-none select-none italic">
                    {todayRitual.day}
                  </div>
                </div>
              )}

              {/* Rest of the Week */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 border-t border-stone-800/50">
                <div className="space-y-6 lg:col-span-3">
                   <h4 className="text-xs font-black uppercase tracking-[0.4em] text-stone-600">Coming Up Next</h4>
                </div>
                {otherRituals.map((ritual) => (
                  <div 
                    key={ritual.day} 
                    className="p-8 bg-stone-900/10 border border-stone-800/50 hover:border-amber-500/30 transition-all group"
                  >
                    <span className="text-stone-500 text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-amber-500/60 transition-colors">
                      {ritual.day}
                    </span>
                    <h3 className="text-2xl font-black uppercase tracking-tighter mt-4 leading-none">
                      {ritual.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-stone-500 group-hover:text-stone-400 transition-colors">
                      {ritual.detail}
                    </p>
                  </div>
                ))}
                
                {/* WiFi Card Integrated as a Grid Item */}
                <div className="p-8 bg-stone-900/10 border border-stone-800/50 flex flex-col justify-between items-start group hover:border-amber-500/30 transition-all">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600">Connectivity</span>
                    <h3 className="text-2xl font-black uppercase tracking-tighter leading-none group-hover:text-amber-500 transition-colors italic">WiFi Access</h3>
                  </div>
                  <div className="mt-8 space-y-1">
                    <p className="text-xs font-bold text-stone-500 uppercase tracking-widest">Network: <span className="text-stone-200">TownGuest</span></p>
                    <p className="text-xs font-bold text-stone-500 uppercase tracking-widest">Pass: <span className="text-stone-200">town1234</span></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vibe Section */}
          <section className="py-20 text-center space-y-12" id="events">
             <div className="max-w-4xl mx-auto space-y-8">
               <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Absolutely No Pretense.</h2>
               <p className="text-xl md:text-3xl text-stone-400 font-serif italic leading-relaxed">
                  &ldquo;A cozy hole-in-the-wall where the crowd is tight-knit, the drinks are strong, and everyone knows a friendly face.&rdquo;
               </p>
             </div>
             <div className="flex flex-wrap justify-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-amber-500/60">
                <span>Bar Bingo</span>
                <span className="text-stone-800">•</span>
                <span>Classic Arcade</span>
                <span className="text-stone-800">•</span>
                <span>Pool</span>
                <span className="text-stone-800">•</span>
                <span>Jukebox</span>
                <span className="text-stone-800">•</span>
                <span>Pull Tabs</span>
             </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="bg-stone-950 py-24 px-6 border-t border-stone-800/50" id="location">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 items-start">
            <div className="space-y-6">
              <h3 className="text-3xl font-black uppercase tracking-tighter text-amber-500 italic">The Towne Tavern</h3>
              <address className="not-italic text-stone-400 text-lg leading-relaxed font-bold">
                2020 Pacific Ave SE<br />
                Olympia, WA 98506
              </address>
              <div className="pt-2">
                 <a 
                  href="https://www.google.com/maps/search/?api=1&query=2020+Pacific+Ave+SE+Olympia+WA+98506"
                  className="text-stone-600 hover:text-amber-500 underline underline-offset-8 transition-colors text-xs font-bold uppercase tracking-widest"
                 >
                  View Maps
                 </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-600">Established in Olympia</span>
              <div className="text-stone-200 text-3xl font-black italic leading-none">
                10:00 AM — 2:00 AM<br />
                <span className="text-amber-500 uppercase text-xs not-italic font-black tracking-[0.3em]">Open 365 Days</span>
              </div>
            </div>

            <div className="md:text-right flex flex-col md:items-end gap-2">
                <span className="text-stone-500 text-xs font-bold">© {new Date().getFullYear()} The Towne Tavern.</span>
                <span className="text-stone-700 text-[10px] font-black uppercase tracking-[0.3em]">Neighborhood Living Room.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
