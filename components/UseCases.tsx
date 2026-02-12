import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { Building2, Landmark, Warehouse, ShieldAlert, Home, Plane } from 'lucide-react';

const cases = [
  { title: "Border Security", icon: ShieldAlert, color: "text-red-400" },
  { title: "Museums", icon: Landmark, color: "text-amber-400" },
  { title: "Banks & Vaults", icon: Building2, color: "text-emerald-400" },
  { title: "Warehouses", icon: Warehouse, color: "text-blue-400" },
  { title: "Smart Homes", icon: Home, color: "text-purple-400" },
  { title: "Restricted Zones", icon: Plane, color: "text-orange-400" },
];

export const UseCases: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-white">Versatile Applications</h2>
        <p className="text-slate-500 mt-4">One system, endless security possibilities.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {cases.map((item, idx) => (
          <GlassCard key={idx} className="p-6 flex flex-col items-center justify-center aspect-[4/3] group cursor-default" hoverEffect delay={idx * 0.05}>
            <div className={`p-4 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <item.icon className={`w-8 h-8 ${item.color}`} />
            </div>
            <h3 className="text-lg font-medium text-slate-200">{item.title}</h3>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};