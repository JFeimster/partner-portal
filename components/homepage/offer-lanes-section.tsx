import Link from 'next/link';
import { partnerOffers } from '@/lib/partner-offers';

export function OfferLanesSection() {
  return (
    <section>
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Capital Lanes</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight">Not every problem needs the same capital.</h2>
        <p className="mt-4 text-slate-300">
          Moonshine Capital organizes funding into real-world lanes so owners and partners can stop guessing and start matching the right situation to the right path.
        </p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {partnerOffers.map((offer) => (
          <Link key={offer.slug} href={`/app/offers_v3/${offer.slug}`} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-sky-400/30 hover:bg-white/10">
            <p className="text-xs uppercase tracking-[0.2em] text-sky-300">{offer.category}</p>
            <h3 className="mt-3 text-xl font-black">{offer.title}</h3>
            <p className="mt-3 text-slate-300">{offer.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
