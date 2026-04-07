import { AppShell } from '@/components/layout/app-shell';
import { Card } from '@/components/ui/card';
import { resources } from '@/lib/mock-data';

export default function ResourcesPage() {
  return (
    <AppShell>
      <div className="grid gap-4 md:grid-cols-2">
        {resources.map((r) => (
          <Card key={r.id}>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">{r.category}</p>
            <h2 className="mt-2 text-lg font-bold">{r.title}</h2>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
