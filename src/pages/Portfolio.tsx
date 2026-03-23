import { useState } from 'react';
import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';
import PortfolioGrid from '../components/PortfolioGrid';
import { PROJECTS } from '../constants';
import { Category } from '../types';
import { cn } from '../lib/utils';

const CATEGORIES: (Category | 'All')[] = ['All', 'Commercial', 'Hospitality', 'Lifestyle', 'Portraits'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<(Category | 'All')>('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <main className="pt-48 pb-40 px-8 max-w-[1800px] mx-auto bg-brand-white">
      <SectionHeader
        subtitle="Portfolio"
        title="Selected Works"
        description="A curated collection of visual narratives crafted for brands that demand presence."
      />

      {/* Category Filter */}
      <div className="flex flex-wrap gap-12 mb-24 border-b border-brand-black/5 pb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'text-[10px] uppercase tracking-[0.4em] font-light transition-all relative pb-2',
              activeCategory === cat ? 'text-brand-black' : 'text-brand-gray hover:text-brand-black'
            )}
          >
            {cat}
            {activeCategory === cat && (
              <motion.span 
                layoutId="activeCategory"
                className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-accent" 
              />
            )}
          </button>
        ))}
      </div>

      <PortfolioGrid projects={filteredProjects} />
    </main>
  );
}
