import { ReactNode } from 'react';
import { Sidebar } from './sidebar';

export function Shell({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <div className="min-h-screen p-6 md:p-10">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <main className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft md:p-8">
          <header className="mb-8 border-b border-white/10 pb-6">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">Activation HQ</p>
            <h1 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h1>
            <p className="mt-3 max-w-3xl text-slate-300">{description}</p>
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
