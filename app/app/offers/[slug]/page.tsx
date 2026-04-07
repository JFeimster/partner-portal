import { notFound } from 'next/navigation';
import { AppShell } from '@/components/layout/app-shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { offers } from '@/lib/mock-data';

export default function OfferDetail({ params }: { params: { slug: string } }) {
  const offer = offers.find((o) => o.slug === params.slug);

  if (!offer) return notFound();

  return (
    <AppShell>
      <Card>
        <h1 className="text-3xl font-black">{offer.name}</h1>
        <p className="mt-3 text-slate-300">{offer.description}</p>

        <div className="mt-6">
          <h2 className="font-bold">Requirements</h2>
          <ul className="mt-2 space-y-2 text-slate-300">
            {offer.requirements.map((r, i) => (
              <li key={i}>• {r}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="font-bold">Positioning</h2>
          <p className="mt-2 text-slate-300">Replace this with real talk tracks and what to say / what NOT to say.</p>
        </div>

        <div className="mt-8">
          <Button href={offer.affiliate_link} variant="brutal">Open Affiliate Link</Button>
        </div>
      </Card>
    </AppShell>
  );
}
