import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-sky-300">Moonshine Capital</p>
        <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
          Banks fund paperwork. We help real operators keep moving.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-300">
          Moonshine Capital helps contractors, sellers, gig workers, business owners, and referral partners find capital paths built for real-world pressure — missed payroll, stuck inventory, broken equipment, tax deadlines, and growth that cannot wait.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/offers" variant="brutal">Explore Capital Lanes</Button>
          <Button href="/become-a-partner" variant="secondary">Become a Partner</Button>
          <Button href="/app/start-here" variant="ghost">Enter the Portal</Button>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
          <span>Multiple capital lanes</span>
          <span>Built for timing pressure</span>
          <span>Partner tools and support</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-red-200">Scenario</p>
          <h3 className="mt-2 text-xl font-bold">Missed Payroll</h3>
          <p className="mt-2 text-slate-200">Work is real. Cash is late. Friday does not care.</p>
        </div>
        <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-yellow-200">Scenario</p>
          <h3 className="mt-2 text-xl font-bold">Inventory Stuck</h3>
          <p className="mt-2 text-slate-200">Sales are moving. Reorders are choking on timing.</p>
        </div>
        <div className="rounded-2xl border border-sky-400/30 bg-sky-400/10 p-5 md:col-span-2">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-200">Capital Lanes</p>
          <h3 className="mt-2 text-2xl font-bold">Choose the right lane instead of guessing.</h3>
          <p className="mt-2 text-slate-200">Contractor Capital. Ecom Growth Capital. Gig Worker Rescue. DAC / BankBreezy Core Offer.</p>
        </div>
      </div>
    </section>
  );
}
