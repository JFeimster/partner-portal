import Link from 'next/link';
import { PublicShell } from '@/components/layout/public-shell';
import { Button } from '@/components/ui/button';
import { partnerOffers } from '@/lib/partner-offers';

export default function PublicOffersPage() {
  return (
    <PublicShell>
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-sky-300">Moonshine Capital</p>
        <h1 className="mt-3 text-5xl font-black tracking-tight">Real offers for real operators.</h1>
        <p className="mt-4 text-lg text-slate-300">
          These aren’t generic finance fairy tales. These are capital lanes built around real business pain: missed payroll, stuck inventory, broken equipment, and cash-flow choke points.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {partnerOffers.map((offer) => (
          <Link key={offer.slug} href={`/app/offers_v3/${offer.slug}`} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-sky-400/30 hover:bg-white/10">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">{offer.category}</p>
            <h2 className="mt-3 text-xl font-black">{offer.title}</h2>
            <p className="mt-3 text-slate-300">{offer.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Button href="/become-a-partner" variant="brutal">Become a Partner</Button>
      </div>
    </PublicShell>
  );
}
