import { Shell } from '../../components/shell';
import { resources } from '../../lib/data';

export default function ResourcesPage() {
  return (
    <Shell
      title="Resources"
      description="The toolbox: docs, scripts, guides, and tactical assets partners need to stay sharp and useful."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {resources.map((resource) => (
          <div key={resource.title} className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">{resource.category}</p>
            <h2 className="mt-3 text-lg font-semibold">{resource.title}</h2>
          </div>
        ))}
      </div>
    </Shell>
  );
}
