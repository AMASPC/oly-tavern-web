import React from 'react';
import { weeklyRituals } from '../data/rituals';

export default function Hero() {
  const currentDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
  const todayRitual = weeklyRituals.find(r => r.day === currentDay);

  return (
    <header className="relative flex flex-col items-center justify-center min-h-screen pt-20 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-amber-900/10 via-stone-950 to-stone-950 -z-10" />
      
      <div className="space-y-6 max-w-4xl">
        <div className="flex flex-col items-center gap-4 animate-in fade-in duration-1000">
          <div className="inline-block px-4 py-1 border border-amber-500/30 text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px]">
            Olympia, Washington
          </div>
          
          {todayRitual && (
            <a 
              href="#rituals" 
              className="group flex items-center gap-3 px-4 py-2 bg-amber-500/10 border border-amber-500/20 hover:border-amber-500/50 transition-all rounded-full"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-500">
                Today: {todayRitual.title}
              </span>
              <svg className="w-3 h-3 text-amber-500 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          )}
        </div>

        <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter leading-[0.85] uppercase">
          The <br />
          <span className="text-amber-500">Town Tavern.</span>
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
  );
}
