'use client'

import React, { useState, useEffect } from 'react';
import { tavernMenu, deesBreakfast, deesLunch, soups } from '../data/menus';

export default function MenuSection() {
  const [isKitchenOpen, setIsKitchenOpen] = useState(false);

  useEffect(() => {
    const checkKitchenStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sun, 5 = Fri, 6 = Sat
      const hour = now.getHours();
      
      const isWeekend = day === 0 || day === 5 || day === 6;
      const isKitchenHours = hour >= 10 && hour < 14;
      setIsKitchenOpen(isWeekend && isKitchenHours);
    };
    
    checkKitchenStatus();
    const interval = setInterval(checkKitchenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
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
                {'detail' in item && item.detail && <p className="text-stone-500 text-sm font-medium italic leading-none">{item.detail}</p>}
                {'extra' in item && item.extra && <p className="text-amber-500/60 text-[10px] uppercase font-bold tracking-widest leading-none">{item.extra}</p>}
              </div>
              <span className="text-xl md:text-2xl font-bold text-stone-400">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Dee's Kitchen Section */}
      <section className="relative p-8 md:p-16 bg-stone-900/30 border border-stone-800/50 rounded-lg space-y-20">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-950 px-6 py-1 text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap">
          {isKitchenOpen ? "Kitchen Is Serving Now" : "Weekend Kitchen Serving Fri-Sun 10am-2pm"}
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
                    {'extra' in item && item.extra && <p className="text-amber-500/50 text-[10px] uppercase font-bold tracking-widest">{item.extra}</p>}
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
    </main>
  );
}
