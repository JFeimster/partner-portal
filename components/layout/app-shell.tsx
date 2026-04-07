import { ReactNode } from 'react';
import Link from 'next/link';

export function AppShell({ children }: { children: ReactNode }) {
  const nav = [
    ['Dashboard', '/app/dashboard'],
    ['Start Here', '/app/start-here'],
    ['Offers', '/app/offers'],
    ['Training', '/app/training'],
    ['Resources', '/app/resources'],
    ['Performance', '/app/performance'],
    ['Support', '/app/support'],
  ];

  return (
    <div className="min-h-screen p-6 md:p-10">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-300">Moonshine Capital</p>
          <h2 className="mt-2 text-xl font-bold">Partner OS</h2>
          <nav className="mt-6 space-y-2">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="block rounded-xl px-4 py-2 text-sm hover:bg-white/10">
                {label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="rounded-3xl border border-white/10 bg-white/5 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
