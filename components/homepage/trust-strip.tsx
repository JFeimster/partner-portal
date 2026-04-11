export function TrustStrip() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
      <h2 className="text-2xl font-black tracking-tight">Built for the gap between opportunity and cash.</h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        This is for operators and partners dealing with real timing pressure, not perfect-bank-fantasy businesses.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
          <h3 className="text-lg font-bold">Operators first</h3>
          <p className="mt-2 text-slate-300">Start with the actual business problem, not lender theater.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
          <h3 className="text-lg font-bold">Multiple lanes</h3>
          <p className="mt-2 text-slate-300">Different pressure points need different capital paths.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
          <h3 className="text-lg font-bold">Partner-ready</h3>
          <p className="mt-2 text-slate-300">A better answer for the people already serving business owners.</p>
        </div>
      </div>
    </section>
  );
}
