type ChecklistProps = {
  items: string[];
};

export function ActivationChecklist({ items }: ChecklistProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
      <h2 className="text-xl font-bold">Activation Checklist</h2>
      <ul className="mt-4 space-y-3 text-slate-300">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
