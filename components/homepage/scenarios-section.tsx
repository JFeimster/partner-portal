export function ScenariosSection() {
  const scenarios = [
    'Missed payroll this week',
    'Inventory stuck and cannot restock fast enough',
    'Equipment down and revenue stopped cold',
    'Tax deadline is real and waiting makes it worse',
    'Contract won, cash not in hand yet',
  ];

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
      <p className="text-xs uppercase tracking-[0.2em] text-red-300">Real Scenarios</p>
      <h2 className="mt-3 text-4xl font-black tracking-tight">Real problems. Real timing. Real use cases.</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {scenarios.map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-slate-200">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
