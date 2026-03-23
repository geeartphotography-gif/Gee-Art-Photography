import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({ title, subtitle, description, align = 'left', className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-24', align === 'center' ? 'text-center' : 'text-left', className)}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-accent text-[10px] uppercase tracking-[0.4em] font-medium mb-6"
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="text-5xl md:text-7xl font-serif mb-8 leading-[1.1] font-light"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          className="text-brand-gray max-w-2xl text-lg md:text-xl font-light leading-relaxed text-balance mx-auto md:mx-0"
          style={align === 'center' ? { margin: '0 auto' } : {}}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
