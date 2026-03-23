import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';

export default function About() {
  return (
    <main className="pt-48 pb-40 px-8 max-w-[1800px] mx-auto bg-brand-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start mb-60">
        <div className="lg:col-span-7">
          <SectionHeader
            subtitle="The Studio"
            title="We craft visual narratives, not just documentation."
            description="Gee Art Photography (G.A.P) is a premium commercial and visual storytelling studio based in Mombasa, Kenya, serving clients globally."
            className="mb-0"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 space-y-10 text-brand-gray text-xl font-light leading-relaxed"
        >
          <p>
            Founded on the principle that every brand has a soul, G.A.P was created to bridge the gap between simple imagery and powerful storytelling. 
            We partner with hospitality, lifestyle, and luxury brands to create visuals that convert attention into value.
          </p>
          <p>
            Our philosophy is simple: we approach every project as a unique narrative. 
            Whether it's the quiet luxury of a coastal villa or the vibrant energy of a brand campaign, 
            our goal is to capture the essence that makes your brand stand out.
          </p>
          <div className="pt-12 grid grid-cols-2 gap-12 border-t border-brand-black/5">
            <div>
              <h4 className="text-brand-black font-serif text-5xl font-light mb-4">100+</h4>
              <p className="text-[10px] uppercase tracking-[0.3em] font-light">Projects Completed</p>
            </div>
            <div>
              <h4 className="text-brand-black font-serif text-5xl font-light mb-4">50+</h4>
              <p className="text-[10px] uppercase tracking-[0.3em] font-light">Global Clients</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-60">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="aspect-[3/4] overflow-hidden bg-brand-black/5"
        >
          <img 
            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=800" 
            alt="BTS 1" 
            className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="aspect-[3/4] overflow-hidden bg-brand-black/5 md:mt-24"
        >
          <img 
            src="https://images.unsplash.com/photo-1452723312111-3a7d0db0e024?auto=format&fit=crop&q=80&w=800" 
            alt="BTS 2" 
            className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="aspect-[3/4] overflow-hidden bg-brand-black/5"
        >
          <img 
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800" 
            alt="BTS 3" 
            className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto text-center py-20 border-y border-brand-black/5">
        <h3 className="text-5xl md:text-7xl font-serif mb-12 italic font-light leading-tight">
          "I approach photography as storytelling, not documentation."
        </h3>
        <p className="text-brand-accent uppercase tracking-[0.5em] text-[10px] font-light">
          — Gee, Founder & Creative Director
        </p>
      </div>
    </main>
  );
}
