import { ReactNode } from 'react';

export interface Level {
  name: string;
  label: string;
  syllabus: string[];
}

export interface Course {
  id: number;
  title: string;
  code: string;
  section: string;
  category: string;
  icon: ReactNode;
  description: string;
  levels: Level[];
}