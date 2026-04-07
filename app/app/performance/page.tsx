import { AppShell } from '@/components/layout/app-shell';
import { Card } from '@/components/ui/card';
import { performanceSnapshots } from '@/lib/mock-data';

export default function PerformancePage() {
  const data = performanceSnapshots[0];

  return (
    <AppShell>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card><h2 className="font-bold">Clicks</h2><p>{data.clicks}</p></Card>
        <Card><h2 className="font-bold">Applications</h2><p>{data.applications}</p></Card>
        <Card><h2 className="font-bold">Funded</h2><p>{data.funded}</p></Card>
        <Card><h2 className="font-bold">Commissions</h2><p>${data.commissions}</p></Card>
      </div>
    </AppShell>
  );
}
