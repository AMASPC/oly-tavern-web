import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 py-24 px-6 border-t border-stone-800/50" id="location">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 items-start">
        <div className="space-y-6">
          <h3 className="text-3xl font-black uppercase tracking-tighter text-amber-500 italic">The Town Tavern</h3>
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
            <span className="text-stone-500 text-xs font-bold">© {new Date().getFullYear()} The Town Tavern.</span>
            <span className="text-stone-700 text-[10px] font-black uppercase tracking-[0.3em]">Neighborhood Living Room.</span>
        </div>
      </div>
    </footer>
  );
}
