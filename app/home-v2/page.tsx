import { PublicShell } from '@/components/layout/public-shell';
import { HeroSection } from '@/components/homepage/hero-section';
import { TrustStrip } from '@/components/homepage/trust-strip';
import { OfferLanesSection } from '@/components/homepage/offer-lanes-section';
import { ScenariosSection } from '@/components/homepage/scenarios-section';
import { PartnerOpportunitySection } from '@/components/homepage/partner-opportunity-section';

export default function HomeV2Page() {
  return (
    <PublicShell>
      <div className="space-y-16">
        <HeroSection />
        <TrustStrip />
        <OfferLanesSection />
        <ScenariosSection />
        <PartnerOpportunitySection />
      </div>
    </PublicShell>
  );
}
