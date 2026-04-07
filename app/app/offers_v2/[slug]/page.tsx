import { notFound } from 'next/navigation';
import { AppShell } from '@/components/layout/app-shell';
import { OfferHero } from '@/components/offers/offer-hero';
import { OfferFit } from '@/components/offers/offer-fit';
import { OfferTalkTracks } from '@/components/offers/offer-talk-tracks';
import { OfferObjections } from '@/components/offers/offer-objections';
import { offers } from '@/lib/mock-data';

export default function OfferConversionPage({ params }: { params: { slug: string } }) {
  const offer = offers.find((o) => o.slug === params.slug);
  if (!offer) return notFound();

  return (
    <AppShell>
      <OfferHero category={offer.category} name={offer.name} description={offer.description} affiliateLink={offer.affiliate_link} />
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <OfferFit items={offer.requirements} />
        <OfferTalkTracks />
      </div>
      <div className="mt-8">
        <OfferObjections />
      </div>
    </AppShell>
  );
}
