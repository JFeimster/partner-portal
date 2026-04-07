type StatCardProps = {
  label: string;
  value: string;
};

export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 shadow-[0_10px_30px_rgba(2,6,23,0.2)]">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-black tracking-tight">{value}</p>
    </div>
  );
}
