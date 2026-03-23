import { Project, Service, CaseStudy } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern Coastal Retreat',
    category: 'Hospitality',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600',
    client: 'Azure Villas',
    year: '2024'
  },
  {
    id: '2',
    title: 'Urban Lifestyle Series',
    category: 'Lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1600',
    client: 'Vogue Kenya',
    year: '2023'
  },
  {
    id: '3',
    title: 'Artisan Culinary Campaign',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1600',
    client: 'The Gourmet Kitchen',
    year: '2024'
  },
  {
    id: '4',
    title: 'Executive Portraits',
    category: 'Portraits',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1600',
    client: 'TechHub Nairobi',
    year: '2023'
  },
  {
    id: '5',
    title: 'Luxury Safari Lodge',
    category: 'Hospitality',
    imageUrl: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=1600',
    client: 'Mara Plains',
    year: '2024'
  },
  {
    id: '6',
    title: 'Streetwear Editorial',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1523381235312-3a1647fa9918?auto=format&fit=crop&q=80&w=1600',
    client: 'Urban Threads',
    year: '2023'
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Commercial Photography',
    description: 'High-impact visuals for advertising and marketing campaigns that capture brand essence.',
    startingPrice: 'Contact for Quote'
  },
  {
    id: '2',
    title: 'Brand Campaigns',
    description: 'Full-scale visual storytelling from concept to execution for lifestyle and luxury brands.',
    startingPrice: 'Starting from $1,500'
  },
  {
    id: '3',
    title: 'Product & Food',
    description: 'Meticulously styled and lit imagery that makes products and culinary creations irresistible.',
    startingPrice: 'Starting from $800'
  },
  {
    id: '4',
    title: 'Hospitality & Airbnb',
    description: 'Cinematic interior and lifestyle photography for hotels, villas, and premium rentals.',
    startingPrice: 'Starting from $1,200'
  },
  {
    id: '5',
    title: 'Creative Direction',
    description: 'Strategic planning of mood, lighting, and narrative to ensure visual consistency.',
    startingPrice: 'Custom Quote'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    client: 'The Sands Resort',
    goal: 'Rebrand the resort as a premium wellness destination for international travelers.',
    direction: 'Soft, natural lighting with a focus on serene spaces and organic textures.',
    execution: 'A 3-day shoot capturing dawn-to-dusk experiences, emphasizing the connection between architecture and nature.',
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1600',
    results: '30% increase in direct bookings within the first quarter of the new campaign launch.'
  }
];
