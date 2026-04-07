import { AppShell } from '@/components/layout/app-shell';
import { ActivationChecklist } from '@/components/dashboard/activation-checklist';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { activationChecklist, supportChannels } from '@/lib/mock-data';

export default function StartHerePage() {
  return (
    <AppShell>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ActivationChecklist items={activationChecklist} />
        <Card className="border-sky-400/30 bg-sky-400/10">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-300">Start Here</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight">Get activated fast.</h1>
          <p className="mt-3 text-slate-200">Do not wander around the portal like a confused pilgrim. Pick your lane, complete the core setup, and book your launch call.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/app/offers" variant="brutal">Choose Offer Lane</Button>
            <Button href="/app/support" variant="secondary">Book Launch Call</Button>
          </div>
        </Card>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {supportChannels.map((item) => (
          <Card key={item}>
            <h2 className="text-lg font-bold">{item}</h2>
            <p className="mt-2 text-sm text-slate-300">Wire this to your real booking flow later. For now, this makes the support architecture explicit.</p>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
