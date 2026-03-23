export type Category = 'Commercial' | 'Lifestyle' | 'Hospitality' | 'Portraits';

export interface Project {
  id: string;
  title: string;
  category: Category;
  imageUrl: string;
  description?: string;
  client?: string;
  year?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  startingPrice?: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  goal: string;
  direction: string;
  execution: string;
  imageUrl: string;
  results?: string;
}
