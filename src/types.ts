export interface Project {
  id: string;
  title: string;
  category: 'character' | 'environment' | 'animation' | 'commercial';
  thumbnail: string;
  images: string[];
  description: string;
  client?: string;
  software: string[];
  year: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'software' | 'technique';
}