// src/types/resume.ts
export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  achievements: string[];
}