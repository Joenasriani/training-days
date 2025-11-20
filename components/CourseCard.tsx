import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  isExpanded: boolean;
  onToggle: () => void;
  sectionHeader?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, isExpanded, onToggle, sectionHeader }) => {
  const [activeLevel, setActiveLevel] = useState<string | null>(null);

  const handleLevelClick = (e: React.MouseEvent, levelName: string) => {
    e.stopPropagation();
    setActiveLevel(activeLevel === levelName ? null : levelName);
  };

  return (
    <div 
      onClick={onToggle}
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
           <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight uppercase pr-4 whitespace-pre-line">{course.title}</h3>
           <div className={isExpanded ? "text-[#D13627]" : "text-gray-400"}>{course.icon}</div>
        </div>
        
        <p className={`text-gray-600 text-sm leading-relaxed mb-8 max-w-3xl font-medium border-l-2 pl-4 transition-colors duration-300 ${isExpanded ? 'border-[#D13627]' : 'border-black'}`}>
          {course.description}
        </p>

        {/* Expanded Content */}
        <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-8 pt-8 border-t border-gray-200' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-0 border border-gray-200 bg-gray-50">
              {course.levels.map((level, idx) => (
                <div 
                  key={level.name}
                  onClick={(e) => handleLevelClick(e, level.name)}
                  className={`
                    group relative p-6
                    ${idx !== 0 ? 'border-t border-gray-200' : ''}
                    ${activeLevel === level.name 
                      ? 'bg-black text-white' 
                      : 'bg-white hover:bg-gray-100 text-black'}
                  `}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold uppercase tracking-wide text-sm">
                      {level.name}
                    </h4>
                    {activeLevel === level.name ? 
                      <div className="w-2 h-2 bg-[#D13627]" /> : 
                      <div className="w-2 h-2 bg-gray-300 group-hover:bg-black transition-colors duration-150" />
                    }
                  </div>
                  <p className={`text-[10px] uppercase tracking-widest mb-6 ${activeLevel === level.name ? 'text-gray-400' : 'text-gray-500'}`}>
                    {level.label}
                  </p>
                  
                  {/* Syllabus List */}
                  <div className={`overflow-hidden ${activeLevel === level.name ? 'block' : 'hidden'}`}>
                    <ul className="space-y-2 pt-4 border-t border-white/20">
                      {level.syllabus.map((item, idx) => (
                        <li key={idx} className="text-xs font-mono leading-tight flex items-start gap-2">
                          <span className="text-[#D13627] flex-shrink-0">{'>'}</span>
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
};