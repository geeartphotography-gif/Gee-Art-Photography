import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-700 px-8 py-6',
        scrolled ? 'bg-brand-white/90 backdrop-blur-md py-4' : 'bg-transparent'
      )}
    >
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-serif tracking-[0.2em] font-light">
          G.A.P
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[10px] uppercase tracking-[0.25em] transition-all duration-300 relative group',
                location.pathname === link.path ? 'text-brand-black' : 'text-brand-gray hover:text-brand-black'
              )}
            >
              {link.name}
              <span className={cn(
                'absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-black transition-all duration-300 group-hover:w-full',
                location.pathname === link.path && 'w-full'
              )} />
            </Link>
          ))}
          <Link
            to="/contact"
            className="border border-brand-black px-8 py-3 text-[10px] uppercase tracking-[0.25em] hover:bg-brand-black hover:text-brand-white transition-all duration-500"
          >
            Inquire
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-black p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-white z-[60] flex flex-col items-center justify-center gap-10 md:hidden"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-brand-black"
            >
              <X size={32} strokeWidth={1} />
            </button>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-4xl font-serif tracking-wide',
                  location.pathname === link.path ? 'text-brand-black underline underline-offset-8' : 'text-brand-gray'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-10 border border-brand-black px-12 py-4 text-xs uppercase tracking-widest"
            >
              Start a Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
