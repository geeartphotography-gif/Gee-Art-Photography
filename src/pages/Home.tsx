import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import PortfolioGrid from '../components/PortfolioGrid';
import { PROJECTS, SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <main className="bg-brand-white">
      <Hero />

      {/* Intro Section */}
      <section className="py-40 px-8 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <SectionHeader
              subtitle="The Studio"
              title="We don't just take photos — we craft visual narratives that elevate brands into experiences."
              className="mb-0"
            />
          </div>
          <div className="lg:col-span-4 flex justify-end">
            <Link
              to="/about"
              className="group flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-light hover:text-brand-accent transition-all duration-500"
            >
              <div className="w-12 h-[1px] bg-brand-black group-hover:w-20 transition-all duration-500" />
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Works - Editorial Grid */}
      <section className="pb-40 px-8 max-w-[1800px] mx-auto">
        <PortfolioGrid projects={featuredProjects} />
        
        <div className="mt-24 flex justify-center">
          <Link
            to="/portfolio"
            className="border border-brand-black px-16 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-brand-black hover:text-brand-white transition-all duration-700"
          >
            Explore Full Portfolio
          </Link>
        </div>
      </section>

      {/* Philosophy - Split Layout */}
      <section className="py-40 bg-brand-black text-brand-white overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="aspect-[4/5] relative"
          >
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=1200"
              alt="Artistic process"
              className="w-full h-full object-cover opacity-60 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-[20px] border-brand-black/20" />
          </motion.div>
          
          <div className="space-y-12">
            <p className="text-brand-accent text-[10px] uppercase tracking-[0.5em] font-light">The Philosophy</p>
            <h2 className="text-5xl md:text-8xl font-serif leading-[0.9] font-light">
              Intentionality <br />
              <span className="italic">in every frame.</span>
            </h2>
            <p className="text-brand-gray text-xl font-light leading-relaxed max-w-lg">
              Every brand has a soul. Our mission is to uncover it through cinematic storytelling and technical precision. 
              We partner with those who demand excellence and value the power of a single, perfect image.
            </p>
            <div className="pt-8">
              <Link
                to="/services"
                className="text-[10px] uppercase tracking-[0.4em] font-light border-b border-brand-accent pb-2 hover:text-brand-accent transition-colors"
              >
                Our Expertise
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot - Minimalist */}
      <section className="py-40 px-8 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <h2 className="text-4xl md:text-6xl font-serif font-light max-w-xl leading-tight">
            Tailored visual solutions for the <span className="italic">discerning brand.</span>
          </h2>
          <p className="text-brand-gray text-lg font-light max-w-sm">
            From hospitality to luxury lifestyle, we provide end-to-end creative direction and execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-black/5">
          {SERVICES.slice(0, 4).map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-white p-12 hover:bg-brand-black hover:text-brand-white transition-all duration-700 group"
            >
              <p className="text-[10px] text-brand-accent mb-8 font-light tracking-widest">0{service.id}</p>
              <h3 className="text-2xl font-serif mb-6 group-hover:italic transition-all duration-500">{service.title}</h3>
              <p className="text-brand-gray text-sm font-light leading-relaxed group-hover:text-brand-white/70 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action - Dramatic */}
      <section className="py-60 px-8 text-center bg-brand-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <h2 className="text-[30vw] font-serif font-bold whitespace-nowrap">G.A.P</h2>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="relative z-10"
        >
          <p className="text-brand-accent text-[10px] uppercase tracking-[0.5em] font-light mb-12">Collaborate with us</p>
          <h2 className="text-6xl md:text-[10rem] font-serif mb-20 leading-[0.8] font-light tracking-tighter">
            Elevate your <br />
            <span className="italic">Narrative.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-brand-black text-brand-white px-20 py-6 text-[10px] uppercase tracking-[0.4em] font-light hover:bg-brand-accent transition-all duration-700"
          >
            Start a Project
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
