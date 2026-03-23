import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <main className="pt-48 pb-40 px-8 max-w-[1800px] mx-auto bg-brand-white">
      <SectionHeader
        subtitle="Our Expertise"
        title="We partner with brands to create visuals that convert attention into value."
        description="Our services are tailored for hospitality, lifestyle, and commercial brands that demand a premium visual presence."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-black/5 mb-60">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-brand-white p-16 md:p-24 flex flex-col justify-between group hover:bg-brand-black transition-all duration-700"
          >
            <div>
              <p className="text-brand-accent text-[10px] uppercase tracking-[0.5em] font-light mb-12">0{service.id}</p>
              <h3 className="text-4xl md:text-5xl font-serif mb-8 group-hover:text-brand-white group-hover:italic transition-all duration-500">
                {service.title}
              </h3>
              <p className="text-brand-gray text-lg font-light leading-relaxed mb-12 group-hover:text-brand-white/70 transition-colors">
                {service.description}
              </p>
            </div>
            <div className="pt-12 border-t border-brand-black/5 flex justify-between items-center group-hover:border-brand-white/10">
              <span className="text-[10px] uppercase tracking-[0.3em] font-light text-brand-gray group-hover:text-brand-accent">
                {service.startingPrice}
              </span>
              <Link to="/contact" className="text-[10px] uppercase tracking-[0.3em] font-light group-hover:text-brand-white border-b border-transparent group-hover:border-brand-white pb-1 transition-all">
                Inquire
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative py-60 px-8 text-center bg-brand-black text-brand-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000" 
            alt="Atmospheric" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10">
          <h3 className="text-5xl md:text-8xl font-serif mb-16 max-w-5xl mx-auto leading-[0.9] font-light italic">
            "Visual storytelling is the most powerful tool for brand differentiation."
          </h3>
          <Link
            to="/contact"
            className="inline-block border border-brand-white text-brand-white px-20 py-6 text-[10px] uppercase tracking-[0.4em] font-light hover:bg-brand-white hover:text-brand-black transition-all duration-700"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </main>
  );
}
