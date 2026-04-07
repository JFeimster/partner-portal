import { Shell } from '../../components/shell';
import { stats, trainings } from '../../lib/data';

export default function DashboardPage() {
  return (
    <Shell
      title="Dashboard"
      description="This is the operator panel — fast visibility into activation, momentum, and the next best move for your partners."
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
            <p className="text-sm text-slate-400">{item.label}</p>
            <p className="mt-2 text-3xl font-bold">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
          <h2 className="text-xl font-semibold">Activation Queue</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>Finish profile + payout details</li>
            <li>Save top 3 affiliate links</li>
            <li>Complete quick-start training</li>
            <li>Install funding widget or copy outreach assets</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
          <h2 className="text-xl font-semibold">Recommended Next Training</h2>
          <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
            <p className="font-semibold">{trainings[0].title}</p>
            <p className="mt-2 text-sm text-slate-300">{trainings[0].length} · {trainings[0].level}</p>
          </div>
        </div>
      </section>
    </Shell>
  );
}
