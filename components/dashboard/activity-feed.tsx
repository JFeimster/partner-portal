type Activity = {
  id: string;
  action: string;
  metadata: string;
};

export function ActivityFeed({ items }: { items: Activity[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
      <h2 className="text-xl font-bold">Recent Activity</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.id} className="text-sm text-slate-300">
            <span className="font-semibold text-white">{item.action}</span>
            <div className="text-slate-400">{item.metadata}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
