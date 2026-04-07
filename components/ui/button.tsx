import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'brutal';
  className?: string;
};

const variants = {
  primary: 'bg-emerald-400 text-slate-950 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(16,185,129,0.25)]',
  secondary: 'border border-white/15 bg-white/5 text-white hover:bg-white/10',
  ghost: 'text-slate-200 hover:bg-white/5',
  brutal: 'border-2 border-black bg-sky-400 text-slate-950 shadow-[6px_6px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0_0_#000]',
};

export function Button({ children, href, variant = 'primary', className = '' }: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button className={classes}>{children}</button>;
}
