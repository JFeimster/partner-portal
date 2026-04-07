import { notFound } from 'next/navigation';
import { AppShell } from '@/components/layout/app-shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getPartnerOfferBySlug } from '@/lib/partner-offers';

export default function MultiOfferPage({ params }: { params: { slug: string } }) {
  const offer = getPartnerOfferBySlug(params.slug);

  if (!offer) return notFound();

  return (
    <AppShell>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-4xl font-black">{offer.title}</h1>
        <p className="mt-4 text-slate-300">{offer.description}</p>
        <div className="mt-6">
          <Button href={offer.ctaUrl} variant="brutal">Apply / Open Offer</Button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-xl font-bold">Who This Is For</h2>
          <ul className="mt-4 space-y-2 text-slate-300">
            {offer.audience.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-xl font-bold">Real Scenarios</h2>
          <ul className="mt-4 space-y-2 text-slate-300">
            {offer.scenarios.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-xl font-bold">What to Say</h2>
          <ul className="mt-4 space-y-2 text-slate-300">
            {offer.talkTracks.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-xl font-bold">Objections</h2>
          <ul className="mt-4 space-y-2 text-slate-300">
            {offer.objections.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </Card>
      </div>
    </AppShell>
  );
}
