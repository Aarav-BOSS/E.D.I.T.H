import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { Check, X } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          
          {/* Traditional */}
          <div className="opacity-60 hover:opacity-100 transition-opacity duration-500">
             <h3 className="text-2xl font-bold text-slate-500 mb-8 text-center">Traditional CCTV</h3>
             <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                   <span className="text-slate-400">Low Light Performance</span>
                   <X className="text-red-500" />
                </div>
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                   <span className="text-slate-400">Privacy</span>
                   <span className="text-red-500 text-sm">Intrusive</span>
                </div>
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                   <span className="text-slate-400">Blind Spots</span>
                   <span className="text-red-500 text-sm">Yes</span>
                </div>
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                   <span className="text-slate-400">Cost</span>
                   <span className="text-slate-400 text-sm">Expensive</span>
                </div>
             </div>
          </div>

          {/* E.D.I.T.H */}
          <GlassCard className="p-8 bg-cyan-900/10 border-cyan-500/20">
             <div className="flex items-center justify-center gap-3 mb-8">
               <h3 className="text-3xl font-bold text-white tracking-widest">E.D.I.T.H</h3>
               <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
             </div>
             
             <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
                   <span className="text-cyan-100">Low Light Performance</span>
                   <div className="flex items-center gap-2 text-cyan-400">
                      <span className="text-sm">Works in Pitch Dark</span>
                      <Check className="w-5 h-5" />
                   </div>
                </div>
                <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
                   <span className="text-cyan-100">Privacy</span>
                   <div className="flex items-center gap-2 text-cyan-400">
                      <span className="text-sm">100% Private (No Video)</span>
                      <Check className="w-5 h-5" />
                   </div>
                </div>
                <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
                   <span className="text-cyan-100">Blind Spots</span>
                   <div className="flex items-center gap-2 text-cyan-400">
                      <span className="text-sm">Wide Area Waves</span>
                      <Check className="w-5 h-5" />
                   </div>
                </div>
                <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
                   <span className="text-cyan-100">Cost</span>
                   <div className="flex items-center gap-2 text-cyan-400">
                      <span className="text-sm">Affordable</span>
                      <Check className="w-5 h-5" />
                   </div>
                </div>
             </div>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};