import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const ThemeSection: React.FC = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-black z-0" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center justify-center p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8"
        >
          <Sparkles className="w-5 h-5 text-cyan-300 mr-2" />
          <span className="text-cyan-200 text-sm font-medium uppercase tracking-widest">Exhibition Theme</span>
        </motion.div>
        
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
          Creating Magic with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Everyday Science</span>
        </h2>
        
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
          E.D.I.T.H proves that you don't need vibranium or arc reactors to build the future. 
          By combining basic physics—the properties of sound—with accessible micro-electronics, 
          we create an invisible wall of protection. It's not magic; it's engineering disguised as magic.
        </p>
      </div>
    </section>
  );
};