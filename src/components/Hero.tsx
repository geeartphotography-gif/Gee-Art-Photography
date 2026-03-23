import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-black">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 2.5, ease: [0.19, 1, 0.22, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000"
          alt="Cinematic Photography"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black/80 z-[1]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-col items-center"
        >
          <p className="text-brand-white text-[10px] uppercase tracking-[0.5em] font-light mb-8 opacity-80">
            Visual Storytelling Studio
          </p>
          
          <h1 className="text-brand-white text-6xl md:text-[10rem] font-serif mb-12 leading-[0.9] tracking-tight max-w-6xl">
            Crafting <br />
            <span className="italic font-light">Presence.</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-8 items-center mt-4">
            <Link
              to="/portfolio"
              className="group relative text-brand-white text-[10px] uppercase tracking-[0.3em] py-4 px-12 overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-brand-black">View Portfolio</span>
              <div className="absolute inset-0 bg-brand-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19, 1, 0.22, 1]" />
              <div className="absolute inset-0 border border-brand-white/30" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Side Labels */}
      <div className="hidden lg:flex absolute left-12 bottom-12 z-20 flex-col gap-4">
        <p className="text-brand-white/40 text-[8px] uppercase tracking-[0.4em] vertical-rl rotate-180">Mombasa — Nairobi</p>
      </div>
      
      <div className="hidden lg:flex absolute right-12 bottom-12 z-20 flex-col gap-4">
        <p className="text-brand-white/40 text-[8px] uppercase tracking-[0.4em] vertical-rl">Est. 2026</p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="w-[1px] h-16 bg-gradient-to-b from-brand-white/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
