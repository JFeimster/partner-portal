export function OfferFit({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
      <h2 className="text-xl font-bold">Who This Is For</h2>
      <ul className="mt-4 space-y-2 text-slate-300">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
