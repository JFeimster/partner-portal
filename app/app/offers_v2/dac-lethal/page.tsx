import { AppShell } from '@/components/layout/app-shell';
import { OfferHero } from '@/components/offers/offer-hero';
import { DacPositioningManifesto } from '@/components/offers/dac-positioning-manifesto';
import { DacAvatars } from '@/components/offers/dac-avatars';
import { DacProofPoints } from '@/components/offers/dac-proof-points';
import { DacBuckets } from '@/components/offers/dac-buckets';
import { OfferTalkTracks } from '@/components/offers/offer-talk-tracks';
import { OfferObjections } from '@/components/offers/offer-objections';
import { DacWhatNotToSay } from '@/components/offers/dac-what-not-to-say';

export default function DacLethalPage() {
  return (
    <AppShell>
      <OfferHero
        category="Core Offer"
        name="DAC / BankBreezy — Fast Capital for Operators"
        description="When banks stall, operators move. This is capital designed for reality — not paperwork perfection."
        affiliateLink="https://www.distilledfunding.com/partners"
      />

      <div className="mt-8">
        <DacPositioningManifesto />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <DacAvatars />
        <DacProofPoints />
      </div>

      <div className="mt-8">
        <DacBuckets />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <OfferTalkTracks />
        <DacWhatNotToSay />
      </div>

      <div className="mt-8">
        <OfferObjections />
      </div>
    </AppShell>
  );
}
