import React from 'react';
import { GlassCard } from './ui/GlassCard';

export const ScienceCards: React.FC = () => {
  return (
    <section className="py-24 bg-black/40 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 mb-16 text-center">
          The Science Behind the Magic
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <GlassCard className="p-8" hoverEffect delay={0.1}>
            <div className="text-cyan-400 text-6xl font-thin mb-6 opacity-50">01</div>
            <h3 className="text-2xl font-semibold text-white mb-4">Ultrasonic Waves</h3>
            <p className="text-slate-400 leading-relaxed">
              Just like bats, the system emits high-frequency sound pulses (40kHz) that are inaudible to the human ear. These waves travel through the air, seeking obstacles.
            </p>
          </GlassCard>

          <GlassCard className="p-8" hoverEffect delay={0.2}>
            <div className="text-blue-400 text-6xl font-thin mb-6 opacity-50">02</div>
            <h3 className="text-2xl font-semibold text-white mb-4">Echo & Reflection</h3>
            <p className="text-slate-400 leading-relaxed">
              When the sound wave hits an intruder, it bounces back. The sensor's receiver catches this "echo." The physics is simple: Angle of Incidence = Angle of Reflection.
            </p>
          </GlassCard>

          <GlassCard className="p-8" hoverEffect delay={0.3}>
            <div className="text-indigo-400 text-6xl font-thin mb-6 opacity-50">03</div>
            <h3 className="text-2xl font-semibold text-white mb-4">Distance Calculation</h3>
            <div className="bg-white/5 rounded-lg p-3 mb-4 font-mono text-xs text-cyan-200 border border-white/10">
              Distance = (Speed × Time) / 2
            </div>
            <p className="text-slate-400 leading-relaxed">
              The microcontroller measures the exact time taken for the echo to return. Since we know the speed of sound (343 m/s), we can calculate the precise distance.
            </p>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};