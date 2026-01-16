import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Header } from './components/Header';
import { AICard } from './components/AICard';
import { CourseCard } from './components/CourseCard';
import { COURSES_DATA } from './constants';
import { playClickSound } from './sound';

export default function App() {
  const [expandedCourseId, setExpandedCourseId] = useState<number | null>(null);
  const previousExpandedIdRef = useRef<number | null>(null);

  // Disable right-click context menu
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  useEffect(() => {
    if (expandedCourseId !== null && expandedCourseId !== previousExpandedIdRef.current) {
      playClickSound();

      // Only trigger vibration on mobile devices
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile && navigator.vibrate) {
        navigator.vibrate(15); // Short haptic pulse
      }
    }
    previousExpandedIdRef.current = expandedCourseId;
  }, [expandedCourseId]);

  const toggleCourse = useCallback((id: number) => {
    setExpandedCourseId(prev => prev === id ? null : id);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-black font-sans relative">
      {/* Global Dotted Grid Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40" 
        style={{ 
          backgroundImage: 'radial-gradient(#a1a1aa 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }} 
      />

      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-8 md:px-16 py-12 max-w-[1400px]">
          
          {/* Introduction / Context Block */}
          <div className="mb-16 border-b border-black pb-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-10">
                <p className="text-base text-gray-600 leading-relaxed max-w-3xl md:max-w-6xl font-medium border-l-2 border-[#D13627] pl-6">
                  This catalog offers a complete set of well-developed syllabi covering media production, digital experience design, interactive content creation, immersive storytelling, and next-generation digital workflows, all authored by Joe Nasr. The <span className="text-black font-bold">AI Card</span> creates customized syllabi that adjust learning objectives to specific timeframes, skill levels, and educational needs, while consistently maintaining strong academic standards, clarity, and instructional coherence.
                </p>
              </div>
              <div className="md:col-span-2 flex justify-start md:justify-end">
                 <div className="text-right hidden md:block">
                    <p className="text-[10px] font-mono text-gray-400 uppercase">
                      Pedagogical Database<br/>
                      Status: Online
                    </p>
                 </div>
              </div>
            </div>
          </div>

          {/* The AI Card Section */}
          <AICard />

          {/* Course Catalog Title */}
          <div className="flex items-center justify-between mb-12 pb-6 border-b-4 border-black">
            <h2 className="text-4xl md:text-6xl font-extrabold text-black tracking-tighter uppercase">
              Index
            </h2>
            <span className="text-xs font-bold uppercase tracking-widest bg-[#D13627] text-white px-2 py-1">
              {String(COURSES_DATA.length).padStart(2, '0')} Modules
            </span>
          </div>

          {/* Courses Grid - Single Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-300 border border-gray-300 shadow-sm">
            {COURSES_DATA.map((course) => {
              return (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  isExpanded={expandedCourseId === course.id}
                  onToggle={toggleCourse}
                  sectionHeader={course.section}
                />
              );
            })}
          </div>
        </main>

        <footer className="border-t border-gray-300 py-12 bg-white mt-24">
          <div className="container mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-end gap-8 md:gap-4">
            
            {/* Left: Logo & Copyright */}
            <div className="flex flex-col gap-2 w-full md:w-1/4">
              <div className="w-8 h-8 bg-black"></div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-black">
                &copy; 2025 Training Days.<br/>International Design System.
              </p>
            </div>

            {/* Center: Legal Text */}
            <p className="text-[8px] text-gray-400 text-center w-full md:w-1/2 px-4 order-first md:order-none mb-4 md:mb-0">
              All materials in this app are the exclusive intellectual property of Joe Nasr. No copying, teaching, distribution, or use in any academic, corporate, governmental, or training environment is permitted without prior approval or written consent from the owner. Unauthorized use may result in legal action and financial penalties determined by the owner.
            </p>

            {/* Right: Status */}
            <div className="text-right w-full md:w-1/4">
              <p className="text-[10px] font-mono text-gray-500">
                STATUS: OPERATIONAL<br/>
                VER: 3.0.0
              </p>
            </div>

          </div>
        </footer>
      </div>
    </div>
  );
}