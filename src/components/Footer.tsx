import { Link } from 'react-router-dom';
import { Instagram, Twitter, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="text-3xl font-serif tracking-widest font-semibold mb-6 block">
            G.A.P
          </Link>
          <p className="text-brand-gray max-w-md text-sm leading-relaxed">
            Gee Art Photography is a premium commercial and visual storytelling studio. 
            We craft visual narratives that elevate brands into experiences.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-brand-gray">
            <li><Link to="/portfolio" className="hover:text-brand-white transition-colors">Portfolio</Link></li>
            <li><Link to="/services" className="hover:text-brand-white transition-colors">Services</Link></li>
            <li><Link to="/case-studies" className="hover:text-brand-white transition-colors">Case Studies</Link></li>
            <li><Link to="/about" className="hover:text-brand-white transition-colors">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-brand-gray">
            <li><a href="mailto:hello@geeart.com" className="hover:text-brand-white transition-colors">hello@geeart.com</a></li>
            <li><a href="https://wa.me/254700000000" className="hover:text-brand-white transition-colors flex items-center gap-2">
              <MessageCircle size={16} /> WhatsApp
            </a></li>
            <li className="flex gap-4 pt-4">
              <a href="#" className="hover:text-brand-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-white transition-colors"><Mail size={20} /></a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-brand-gray">
        <p>© 2026 Gee Art Photography. All rights reserved.</p>
        <p>Crafted in Mombasa, Kenya</p>
      </div>
    </footer>
  );
}
