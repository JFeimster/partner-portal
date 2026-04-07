import { Shell } from '../../components/shell';
import { trainings } from '../../lib/data';

export default function TrainingPage() {
  return (
    <Shell
      title="Training"
      description="Training should reduce hesitation, tighten positioning, and make partners more dangerous in the wild."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {trainings.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{item.level}</span>
            </div>
            <p className="mt-3 text-slate-300">Runtime: {item.length}</p>
          </div>
        ))}
      </div>
    </Shell>
  );
}
