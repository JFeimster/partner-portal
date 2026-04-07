import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function OfferHero({
  category,
  name,
  description,
  affiliateLink,
}: {
  category: string;
  name: string;
  description: string;
  affiliateLink: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_50px_rgba(2,6,23,0.25)]">
      <Badge tone="accent">{category}</Badge>
      <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{name}</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-300">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={affiliateLink} variant="brutal">Open Affiliate Link</Button>
        <Button href="/app/support" variant="secondary">Book Positioning Call</Button>
      </div>
    </div>
  );
}
