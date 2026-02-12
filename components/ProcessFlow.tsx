import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Waves, Target, Ear, Cpu, BellRing, ArrowRight } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

const steps = [
  { icon: Radio, title: "Ultrasonic Sensor", desc: "Emits trigger pulse" },
  { icon: Waves, title: "Sound Waves", desc: "Travels through air" },
  { icon: Target, title: "Object Detected", desc: "Wave hits intruder" },
  { icon: Ear, title: "Echo Received", desc: "Reflected wave returns" },
  { icon: Cpu, title: "ESP32 Logic", desc: "Calculates distance" },
  { icon: BellRing, title: "Alert System", desc: "Buzzer activates" },
];

export const ProcessFlow: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-semibold text-white mb-4">How E.D.I.T.H Works</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">A seamless journey from sound wave to security alert, powered by the speed of sound.</p>
      </div>

      <div className="relative">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <GlassCard className="w-full aspect-square flex flex-col items-center justify-center p-4 text-center group" hoverEffect>
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <step.icon className="w-6 h-6 text-cyan-300" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </GlassCard>
              
              {index < steps.length - 1 && (
                <div className="md:hidden mt-4 text-slate-600">
                  <ArrowRight className="w-6 h-6 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};