import { AppShell } from '@/components/layout/app-shell';
import { Card } from '@/components/ui/card';
import { trainingModules } from '@/lib/mock-data';

export default function TrainingPage() {
  return (
    <AppShell>
      <div className="grid gap-4 md:grid-cols-2">
        {trainingModules.map((t) => (
          <Card key={t.id}>
            <h2 className="text-lg font-bold">{t.title}</h2>
            <p className="mt-2 text-slate-300">{t.category} · {t.level}</p>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
