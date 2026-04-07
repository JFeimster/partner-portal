import Link from 'next/link';
import { AppShell } from '@/components/layout/app-shell';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { offers } from '@/lib/mock-data';

export default function OffersPage() {
  return (
    <AppShell>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {offers.map((offer) => (
          <Link key={offer.id} href={`/app/offers/${offer.slug}`}>
            <Card className="hover:border-sky-400/30 hover:bg-white/10 transition">
              <Badge tone="accent">{offer.category}</Badge>
              <h2 className="mt-3 text-xl font-black">{offer.name}</h2>
              <p className="mt-2 text-slate-300">{offer.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
