import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  isExpanded: boolean;
  onToggle: (id: number) => void;
  sectionHeader?: string;
}

export const CourseCard = React.memo<CourseCardProps>(({ course, isExpanded, onToggle, sectionHeader }) => {
  const [activeLevel, setActiveLevel] = useState<string | null>(null);

  const handleLevelClick = (e: React.MouseEvent, levelName: string) => {
    e.stopPropagation();
    setActiveLevel(activeLevel === levelName ? null : levelName);
  };

  return (
    <div 
      onClick={() => onToggle(course.id)}
      className={`
        relative overflow-hidden border transition-all duration-500 ease-in-out cursor-pointer
        ${isExpanded 
          ? 'bg-white border-black ring-1 ring-black z-20' 
          : 'bg-white border-gray-300 hover:border-gray-400 hover:z-10'}
      `}
    >
      <div className="p-6 md:p-8 relative z-10">
        {/* Section Header (Very Small Font) */}
        {sectionHeader && (
          <div className="absolute top-0 left-0 right-0 px-8 py-2">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 block mb-2">
              {sectionHeader}
            </span>
          </div>
        )}

        <div className={`flex justify-between items-start mb-8 ${sectionHeader ? 'mt-4' : ''}`}>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-gray-500 border border-gray-200 px-1.5 py-0.5">
              {course.code}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-black">
              {course.category}
            </span>
          </div>
          <div className={`transition-transform duration-500 ease-in-out ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
            {isExpanded ? <ChevronUp className="w-5 h-5 text-black" /> : <ChevronDown className="w-5 h-5 text-black" />}
          </div>
        </div>

        <div className="flex justify-between items-start mb-4">
           <h3 className={`text-2xl md:text-3xl font-bold tracking-tight uppercase pr-4 whitespace-pre-line transition-colors duration-300 ${isExpanded ? 'text-[#D13627]' : 'text-black'}`}>
             {course.title}
           </h3>
           <div className={isExpanded ? "text-[#D13627]" : "text-gray-400"}>{course.icon}</div>
        </div>
        
        <p className={`text-gray-600 text-sm leading-relaxed mb-8 max-w-3xl font-medium border-l-2 pl-4 transition-colors duration-300 ${isExpanded ? 'border-[#D13627]' : 'border-black'}`}>
          {course.description}
        </p>

        {/* Expanded Content */}
        <div 
          className={`transition-all duration-500 ease-in-out ${isExpanded ? 'grid grid-rows-[1fr] opacity-100 mt-8 pt-8 border-t border-black bg-[#111111]' : 'grid grid-rows-[0fr] opacity-0 mt-0 bg-white'}`}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-0 border-none bg-transparent">
              {course.levels.map((level, idx) => (
                <div 
                  key={level.name}
                  onClick={(e) => handleLevelClick(e, level.name)}
                  className={`
                    group relative p-6 border-t border-white/10
                    ${idx === 0 ? 'border-t-0' : ''}
                    ${activeLevel === level.name ? '' : 'hover:bg-[#D13627]'}
                  `}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold uppercase tracking-wide text-sm text-white">
                      {level.name}
                    </h4>
                    {/* Dot Indicator logic: 
                        - Active: Red
                        - Inactive: Gray
                        - Hover: White
                    */}
                    {activeLevel === level.name ? 
                      <div className="w-2 h-2 bg-[#D13627]" /> : 
                      <div className="w-2 h-2 bg-gray-600 group-hover:bg-white" />
                    }
                  </div>
                  <p className="text-[10px] uppercase tracking-widest mb-6 text-gray-400 group-hover:text-white/90">
                    {level.label}
                  </p>
                  
                  {/* Syllabus List */}
                  <div className={`overflow-hidden ${activeLevel === level.name ? 'block' : 'hidden'}`}>
                    <ul className="space-y-2 pt-4 border-t border-white/20">
                      {level.syllabus.map((item, idx) => (
                        <li key={idx} className="text-xs font-mono leading-tight flex items-start gap-2 text-white">
                          <span className="text-[#D13627] flex-shrink-0 group-hover:text-white">{'>'}</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
