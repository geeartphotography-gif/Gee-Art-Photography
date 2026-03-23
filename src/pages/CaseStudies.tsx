import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import SectionHeader from '../components/SectionHeader';
import { CASE_STUDIES } from '../constants';

export default function CaseStudies() {
  return (
    <main className="pt-48 pb-40 px-8 max-w-[1800px] mx-auto bg-brand-white">
      <SectionHeader
        subtitle="Case Studies"
        title="Impact through storytelling."
        description="A deeper look into how we help brands achieve their goals through intentional visual direction."
      />

      <div className="space-y-60">
        {CASE_STUDIES.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center"
          >
            <div className={cn('lg:col-span-7', index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2')}>
              <div className="aspect-[16/10] overflow-hidden bg-brand-black/5">
                <img 
                  src={study.imageUrl} 
                  alt={study.client} 
                  className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className={cn('lg:col-span-5', index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1')}>
              <p className="text-brand-accent text-[10px] uppercase tracking-[0.5em] font-light mb-6">Client: {study.client}</p>
              <h3 className="text-5xl md:text-6xl font-serif mb-12 leading-[1.1] font-light">Elevating {study.client}'s Wellness Narrative</h3>
              
              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Project Goal</h4>
                    <p className="text-brand-gray text-base font-light leading-relaxed">{study.goal}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Creative Direction</h4>
                    <p className="text-brand-gray text-base font-light leading-relaxed">{study.direction}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Execution</h4>
                  <p className="text-brand-gray text-base font-light leading-relaxed">{study.execution}</p>
                </div>
                
                {study.results && (
                  <div className="p-12 bg-brand-black text-brand-white">
                    <h4 className="text-brand-accent text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Final Impact</h4>
                    <p className="text-brand-white font-serif text-2xl italic font-light leading-relaxed">"{study.results}"</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
