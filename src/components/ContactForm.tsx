import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, MessageCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, this would send an email
    alert('Thank you for your inquiry. We will get back to you shortly.');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl md:text-5xl font-serif mb-10 font-light leading-tight">Let's craft your <br /><span className="italic">narrative.</span></h3>
        <p className="text-brand-gray mb-16 text-xl font-light leading-relaxed">
          Whether you're looking to elevate your brand's visual presence or capture a unique story, we're here to help. 
          Fill out the form or reach out directly via WhatsApp for a quicker response.
        </p>
        
        <div className="space-y-12">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-light text-brand-accent mb-4">Direct Contact</h4>
            <a href="mailto:hello@geeart.com" className="text-3xl font-serif font-light hover:text-brand-accent transition-colors">hello@geeart.com</a>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-light text-brand-accent mb-6">Quick Chat</h4>
            <a 
              href="https://wa.me/254700000000" 
              className="inline-flex items-center gap-4 border border-brand-black px-12 py-5 text-[10px] uppercase tracking-[0.3em] font-light hover:bg-brand-black hover:text-brand-white transition-all duration-500"
            >
              <MessageCircle size={16} strokeWidth={1} /> WhatsApp Quick Link
            </a>
          </div>
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="space-y-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-[0.3em] font-light text-brand-gray">Name</label>
            <input
              type="text"
              required
              className="w-full bg-transparent border-b border-brand-black/10 py-4 focus:outline-none focus:border-brand-accent transition-colors font-light"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-[0.3em] font-light text-brand-gray">Email</label>
            <input
              type="email"
              required
              className="w-full bg-transparent border-b border-brand-black/10 py-4 focus:outline-none focus:border-brand-accent transition-colors font-light"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-[0.3em] font-light text-brand-gray">Project Type</label>
            <select
              className="w-full bg-transparent border-b border-brand-black/10 py-4 focus:outline-none focus:border-brand-accent transition-colors font-light appearance-none"
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            >
              <option value="">Select Category</option>
              <option value="commercial">Commercial Campaign</option>
              <option value="hospitality">Hospitality / Airbnb</option>
              <option value="lifestyle">Lifestyle Portrait</option>
              <option value="product">Product / Food</option>
            </select>
          </div>
          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-[0.3em] font-light text-brand-gray">Budget Range</label>
            <select
              className="w-full bg-transparent border-b border-brand-black/10 py-4 focus:outline-none focus:border-brand-accent transition-colors font-light appearance-none"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            >
              <option value="">Select Range</option>
              <option value="500-1000">$500 - $1,000</option>
              <option value="1000-2500">$1,000 - $2,500</option>
              <option value="2500-5000">$2,500 - $5,000</option>
              <option value="5000+">$5,000+</option>
            </select>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-[0.3em] font-light text-brand-gray">Message</label>
          <textarea
            rows={4}
            required
            className="w-full bg-transparent border-b border-brand-black/10 py-4 focus:outline-none focus:border-brand-accent transition-colors resize-none font-light"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand-black text-brand-white py-6 text-[10px] uppercase tracking-[0.4em] font-light hover:bg-brand-accent transition-all duration-700 flex items-center justify-center gap-4"
        >
          <Send size={14} strokeWidth={1} /> Send Inquiry
        </button>
      </motion.form>
    </div>
  );
}
