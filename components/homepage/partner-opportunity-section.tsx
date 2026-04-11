import { Button } from '@/components/ui/button';

export function PartnerOpportunitySection() {
  return (
    <section className="rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-8">
      <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Partner Opportunity</p>
      <h2 className="mt-3 text-4xl font-black tracking-tight">If you already serve business owners, this can become a serious lane for you too.</h2>
      <p className="mt-4 max-w-3xl text-slate-100">
        Moonshine is built for partners who want better positioning, better offer paths, and a more useful answer than “go ask your bank again.”
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/become-a-partner" variant="brutal">Become a Partner</Button>
        <Button href="/app/support" variant="secondary">Get Support</Button>
      </div>
    </section>
  );
}
