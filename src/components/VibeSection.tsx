import React from 'react';

export default function VibeSection() {
  return (
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
  );
}
