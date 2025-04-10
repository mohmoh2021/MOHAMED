import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Cyberpunk Character Design',
    category: 'character',
    thumbnail: 'https://images.unsplash.com/photo-1636690619068-eb397e936da2',
    images: [
      'https://images.unsplash.com/photo-1636690619068-eb397e936da2?w=1920&q=80',
      'https://images.unsplash.com/photo-1633467083849-97c7ea6729c9?w=1920&q=80',
      'https://images.unsplash.com/photo-1635322505840-69e19c05d59b?w=1920&q=80',
    ],
    description: 'A detailed character design for a cyberpunk-themed project, featuring intricate mechanical augmentations and dynamic posing. Created with advanced sculpting techniques and procedural texturing.',
    software: ['Maya', 'ZBrush', 'Substance Painter'],
    year: 2024,
  },
  {
    id: '2',
    title: 'Ancient Temple Environment',
    category: 'environment',
    thumbnail: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01',
    images: [
      'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=1920&q=80',
      'https://images.unsplash.com/photo-1635322505840-69e19c05d59b?w=1920&q=80',
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1920&q=80',
    ],
    description: 'A highly detailed environment piece showcasing an ancient temple with procedural texturing and advanced lighting techniques. Extensive use of displacement mapping and custom materials.',
    software: ['Blender', 'World Machine', 'Substance Designer'],
    year: 2023,
  },
  {
    id: '3',
    title: 'Sci-Fi Vehicle Concept',
    category: 'commercial',
    thumbnail: 'https://images.unsplash.com/photo-1635322505840-69e19c05d59b',
    images: [
      'https://images.unsplash.com/photo-1635322505840-69e19c05d59b?w=1920&q=80',
      'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=1920&q=80',
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1920&q=80',
    ],
    description: 'Commercial project featuring a futuristic vehicle design. Developed from concept sketches to final rendered asset with full interior and exterior details.',
    software: ['Blender', 'Substance Painter', 'Marvelous Designer'],
    year: 2024,
  },
  {
    id: '4',
    title: 'Fantasy Character Animation',
    category: 'animation',
    thumbnail: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead',
    images: [
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1920&q=80',
      'https://images.unsplash.com/photo-1633467083849-97c7ea6729c9?w=1920&q=80',
      'https://images.unsplash.com/photo-1636690619068-eb397e936da2?w=1920&q=80',
    ],
    description: 'Character animation sequence for a fantasy game project. Features complex rigging and motion capture integration with manual animation refinements.',
    software: ['Blender', 'Maya', 'Motion Builder'],
    year: 2023,
  },
];