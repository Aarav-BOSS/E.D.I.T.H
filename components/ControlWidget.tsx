import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Wifi, Activity, Battery, Lock } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export const ControlWidget: React.FC = () => {
  const [distance, setDistance] = useState(120);
  const [isScanning, setIsScanning] = useState(true);

  // Simulate sensor readings
  useEffect(() => {
    const interval = setInterval(() => {
      setDistance(prev => {
        const change = Math.random() * 10 - 5;
        const newVal = prev + change;
        return newVal > 400 ? 400 : newVal < 0 ? 0 : newVal;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 w-full flex justify-center">
      <GlassCard className="max-w-4xl w-full p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Main Status */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between h-64 relative overflow-hidden rounded-2xl bg-black/20 p-6 border border-white/5">
          <div className="flex justify-between items-start z-10">
            <div>
              <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">System Status</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                <span className="text-2xl font-semibold text-white">Active & Monitoring</span>
              </div>
            </div>
            <ShieldCheck className="w-8 h-8 text-cyan-400" />
          </div>

          <div className="z-10 mt-8">
             <div className="flex justify-between items-end">
                <div>
                   <div className="text-5xl font-mono text-white tracking-tighter">
                      {distance.toFixed(1)}<span className="text-2xl text-slate-500 ml-2">cm</span>
                   </div>
                   <div className="text-sm text-slate-400 mt-1">Real-time distance metrics</div>
                </div>
                <Activity className="w-12 h-12 text-cyan-500/50" />
             </div>
          </div>

          {/* Radar Background Animation */}
          <div className="absolute right-[-50px] bottom-[-50px] w-64 h-64 border border-white/5 rounded-full z-0 opacity-30">
             <div className="w-full h-full rounded-full border border-cyan-500/20 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-gradient-to-br from-cyan-500/40 to-transparent radar-sweep origin-top-left" />
             </div>
          </div>
        </div>

        {/* Status Grid */}
        <div className="col-span-1 grid grid-rows-2 gap-4 h-64">
           {/* ESP32 Status */}
           <div className="bg-black/20 rounded-2xl p-4 border border-white/5 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                 <Wifi className="w-6 h-6 text-green-400" />
                 <span className="text-xs text-green-400 font-bold bg-green-400/10 px-2 py-1 rounded-full">CONNECTED</span>
              </div>
              <div>
                 <div className="text-lg font-semibold text-white">ESP32 Core</div>
                 <div className="text-xs text-slate-500">2.4GHz WiFi Module Active</div>
              </div>
           </div>

           {/* Power & Lock */}
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/20 rounded-2xl p-4 border border-white/5 flex flex-col justify-center items-center gap-2">
                 <Battery className="w-8 h-8 text-white" />
                 <span className="text-sm font-medium text-slate-300">98%</span>
              </div>
              <div className="bg-cyan-500/20 rounded-2xl p-4 border border-cyan-500/30 flex flex-col justify-center items-center gap-2">
                 <Lock className="w-8 h-8 text-cyan-300" />
                 <span className="text-xs font-medium text-cyan-200 uppercase">Secure</span>
              </div>
           </div>
        </div>

      </GlassCard>
    </section>
  );
};