import { AppShell } from '@/components/layout/app-shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { supportChannels } from '@/lib/mock-data';

export default function SupportPage() {
  return (
    <AppShell>
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <Card className="border-emerald-400/30 bg-emerald-400/10">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Support</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight">Get unstuck fast.</h1>
          <p className="mt-3 text-slate-200">
            Pick the right lane, book the right call, and stop letting hesitation turn into ghost mode.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="https://www.distilledfunding.com/partners" variant="brutal">Open Partner Hub</Button>
            <Button href="/app/start-here" variant="secondary">Back to Start Here</Button>
          </div>
        </Card>
        <Card>
          <h2 className="text-xl font-bold">Support Channels</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            {supportChannels.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Card>
      </div>
    </AppShell>
  );
}
