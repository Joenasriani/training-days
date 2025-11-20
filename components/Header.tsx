import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [shadowOpacity, setShadowOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Target max opacity is 0.06 (6%)
      // We want to reach full shadow after scrolling 100px
      const maxOpacity = 0.06;
      const scrollThreshold = 100;
      
      // Calculate opacity based on scroll position
      // (scrollY / 100) * 0.06
      const calculatedOpacity = Math.min(maxOpacity, (scrollY / scrollThreshold) * maxOpacity);
      
      setShadowOpacity(calculatedOpacity);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="sticky top-0 z-50 bg-[#F5F5F7] border-b border-gray-300 px-8 md:px-16 py-6 flex justify-between items-start transition-shadow duration-100 ease-linear"
      style={{ boxShadow: `0 4px 6px rgba(209, 54, 39, ${shadowOpacity})` }}
    >
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-black">
          <div className="w-2 h-2 bg-[#D13627] rounded-full" />
          <span className="text-[9px] font-bold uppercase tracking-widest">Architecture System v3</span>
        </div>
        <h1 className="text-5xl font-extrabold text-black tracking-tighter leading-[0.9]">
          TRAINING<br/>DAYS
        </h1>
      </div>
      <div className="text-[8px] font-bold text-black uppercase tracking-widest border border-black px-2 py-1 hidden sm:block">
        Corporate Training and Knowledge Development
      </div>
    </header>
  );
};