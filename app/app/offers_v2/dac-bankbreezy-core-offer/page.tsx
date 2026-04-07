import { AppShell } from '@/components/layout/app-shell';
import { OfferHero } from '@/components/offers/offer-hero';
import { OfferTalkTracks } from '@/components/offers/offer-talk-tracks';
import { OfferObjections } from '@/components/offers/offer-objections';
import { DacProofPoints } from '@/components/offers/dac-proof-points';
import { DacAvatars } from '@/components/offers/dac-avatars';
import { DacBuckets } from '@/components/offers/dac-buckets';

export default function DacOfferPage() {
  return (
    <AppShell>
      <OfferHero
        category="Core Offer"
        name="DAC / BankBreezy Funding"
        description="Fast, flexible working capital for business owners who don’t have time to wait on banks."
        affiliateLink="https://www.distilledfunding.com/partners"
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <DacAvatars />
        <DacProofPoints />
      </div>

      <div className="mt-8">
        <DacBuckets />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <OfferTalkTracks />
        <OfferObjections />
      </div>
    </AppShell>
  );
}
