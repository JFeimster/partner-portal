import Link from 'next/link';

const nav = [
  ['Dashboard', '/dashboard'],
  ['Onboarding', '/onboarding'],
  ['Training', '/training'],
  ['Affiliate Links', '/affiliate-links'],
  ['Resources', '/resources'],
  ['Performance', '/performance'],
  ['Support', '/support'],
];

export function Sidebar() {
  return (
    <aside className="w-full max-w-xs rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-sky-300">Moonshine Capital</p>
        <h2 className="mt-2 text-2xl font-bold">Partner Portal</h2>
        <p className="mt-2 text-sm text-slate-300">Built for activation, momentum, and retention.</p>
      </div>
      <nav className="space-y-2">
        {nav.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="block rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 transition hover:border-sky-400/30 hover:bg-sky-400/10"
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
