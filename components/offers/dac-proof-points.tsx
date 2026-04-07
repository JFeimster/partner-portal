export function DacProofPoints() {
  const points = [
    'Nationwide opportunity serving business owners who banks often turn away.',
    'Multiple funding channels instead of forcing every client into one box.',
    'Simple online intake flow designed to route applicants into the right funding path.',
    'Positioned around speed, flexibility, and business momentum — not bank theater.',
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
      <h2 className="text-xl font-bold">Why This Offer Hits</h2>
      <ul className="mt-4 space-y-3 text-slate-300">
        {points.map((point, i) => (
          <li key={i}>• {point}</li>
        ))}
      </ul>
    </div>
  );
}
