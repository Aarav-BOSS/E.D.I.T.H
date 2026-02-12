import React from 'react';
import { motion } from 'framer-motion';
import { GlassCardProps } from '../../types';

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  hoverEffect = false,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      whileHover={hoverEffect ? { 
        y: -5, 
        boxShadow: "0 20px 40px -10px rgba(6, 182, 212, 0.15)",
        borderColor: "rgba(255,255,255,0.2)"
      } : {}}
      className={`glass-panel rounded-3xl relative overflow-hidden ${className}`}
    >
      {/* Subtle shine effect on top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
      
      {children}
    </motion.div>
  );
};