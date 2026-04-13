'use client'

import React from 'react';
import { weeklyRituals } from '../data/rituals';

export default function RitualsSection() {
  const currentDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
  const todayRitual = weeklyRituals.find(r => r.day === currentDay);
  const otherRituals = weeklyRituals.filter(r => r.day !== currentDay);

  return (
    <section id="rituals" className="max-w-6xl mx-auto px-6 space-y-12">
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
  );
}
