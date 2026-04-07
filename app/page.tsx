import Link from 'next/link';

export default function HomePage() {
  const cards = [
    ['Dashboard', '/dashboard', 'See momentum, numbers, and next moves.'],
    ['Onboarding', '/onboarding', 'Get new partners activated fast.'],
    ['Training', '/training', 'Build confidence and close the skill gap.'],
    ['Affiliate Links', '/affiliate-links', 'Grab links, tools, and launch assets.'],
    ['Resources', '/resources', 'Swipe files, docs, and partner materials.'],
    ['Performance', '/performance', 'Track clicks, apps, and wins.'],
    ['Support', '/support', 'Book help and stay unstuck.'],
  ];

  return (
    <div className="min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft md:p-12">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">Moonshine Capital</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            A partner portal built to get affiliates moving — and keep them moving.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            Organized, motivating, and designed for activation and retention instead of “good luck, champ” chaos.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/dashboard" className="rounded-2xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950">
              Enter Dashboard
            </Link>
            <Link href="/onboarding" className="rounded-2xl border border-white/15 px-5 py-3 font-semibold">
              View Onboarding
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map(([title, href, desc]) => (
            <Link key={href} href={href} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-sky-400/30 hover:bg-white/10">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-slate-300">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
