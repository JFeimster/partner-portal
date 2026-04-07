import { Shell } from '../../components/shell';
import { affiliateLinks } from '../../lib/data';

export default function AffiliateLinksPage() {
  return (
    <Shell
      title="Affiliate Links"
      description="Centralized links, tools, and launch assets so nobody is hunting through old emails like a raccoon in a dumpster."
    >
      <div className="grid gap-4">
        {affiliateLinks.map((link) => (
          <div key={link.name} className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-lg font-semibold">{link.name}</h2>
                <p className="mt-2 text-sm text-slate-300">{link.type}</p>
              </div>
              <a
                href={link.url}
                className="rounded-xl bg-sky-400 px-4 py-2 text-center font-semibold text-slate-950"
                target="_blank"
                rel="noreferrer"
              >
                Open Link
              </a>
            </div>
            <p className="mt-3 break-all text-sm text-slate-400">{link.url}</p>
          </div>
        ))}
      </div>
    </Shell>
  );
}
