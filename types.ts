import { ReactNode } from 'react';

export interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}