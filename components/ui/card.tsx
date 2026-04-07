import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-slate-950/40 p-6 backdrop-blur ${className}`}>
      {children}
    </div>
  );
}
