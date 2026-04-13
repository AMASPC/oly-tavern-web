import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-amber-500 font-black uppercase tracking-tighter text-xl">The Town Tavern</span>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
          <a href="#menu" className="hover:text-amber-500 transition-colors">Menu</a>
          <a href="#events" className="hover:text-amber-500 transition-colors">Vibe</a>
          <a href="#location" className="hover:text-amber-500 transition-colors">Visit</a>
        </div>
      </div>
    </nav>
  );
}
