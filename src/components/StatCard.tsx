import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: LucideIcon;
  color: 'sky' | 'emerald' | 'amber' | 'rose';
}

const colorVariants = {
  sky: {
    bg: 'bg-sky-50',
    icon: 'text-sky-600',
    text: 'text-sky-700'
  },
  emerald: {
    bg: 'bg-emerald-50',
    icon: 'text-emerald-600',
    text: 'text-emerald-700'
  },
  amber: {
    bg: 'bg-amber-50',
    icon: 'text-amber-600',
    text: 'text-amber-700'
  },
  rose: {
    bg: 'bg-rose-50',
    icon: 'text-rose-600',
    text: 'text-rose-700'
  }
};

export default function StatCard({ title, value, change, changeType, icon: Icon, color }: StatCardProps) {
  const colors = colorVariants[color];
  
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-600">{title}</p>
          <p className="text-2xl font-bold text-slate-900 mt-2">{value}</p>
          <div className="mt-2 flex items-center">
            <span className={`text-sm font-medium ${
              changeType === 'increase' ? 'text-emerald-600' : 
              changeType === 'decrease' ? 'text-rose-600' : 
              'text-slate-600'
            }`}>
              {change}
            </span>
            <span className="text-sm text-slate-500 ml-2">vs last week</span>
          </div>
        </div>
        <div className={`p-3 rounded-xl ${colors.bg}`}>
          <Icon className={`h-6 w-6 ${colors.icon}`} />
        </div>
      </div>
    </div>
  );
}