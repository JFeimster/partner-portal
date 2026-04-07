import { Shell } from '../../components/shell';
import { performance } from '../../lib/data';

export default function PerformancePage() {
  return (
    <Shell
      title="Performance"
      description="Give partners enough visibility to care, compete, and improve — without turning this into spreadsheet purgatory."
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40">
        <table className="w-full border-collapse text-left">
          <thead className="bg-white/5">
            <tr>
              <th className="px-5 py-4 text-sm font-semibold text-slate-200">Metric</th>
              <th className="px-5 py-4 text-sm font-semibold text-slate-200">Value</th>
            </tr>
          </thead>
          <tbody>
            {performance.map((row) => (
              <tr key={row.metric} className="border-t border-white/10">
                <td className="px-5 py-4 text-slate-200">{row.metric}</td>
                <td className="px-5 py-4 text-slate-300">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  );
}
