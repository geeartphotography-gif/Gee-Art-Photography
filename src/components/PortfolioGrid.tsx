import { motion } from 'motion/react';
import { Project } from '../types';
import { cn } from '../lib/utils';

interface PortfolioGridProps {
  projects: Project[];
  className?: string;
}

export default function PortfolioGrid({ projects, className }: PortfolioGridProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20', className)}>
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
          className="group relative aspect-[4/5] overflow-hidden bg-brand-black"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="absolute bottom-0 left-0 w-full p-10 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
            <p className="text-brand-white text-[10px] uppercase tracking-[0.4em] font-light mb-4">
              {project.category}
            </p>
            <h3 className="text-brand-white text-3xl md:text-4xl font-serif font-light">
              {project.title}
            </h3>
            <div className="w-12 h-[1px] bg-brand-accent mt-6 transition-all duration-700 group-hover:w-24" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
