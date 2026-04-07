import { AppShell } from '@/components/layout/app-shell';
import { StatCard } from '@/components/dashboard/stat-card';
import { ActivationChecklist } from '@/components/dashboard/activation-checklist';
import { ActivityFeed } from '@/components/dashboard/activity-feed';
import { NextAction } from '@/components/dashboard/next-action';
import { dashboardStats, activationChecklist, activityLog } from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} />
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <ActivationChecklist items={activationChecklist} />
        <NextAction />
      </div>

      <div className="mt-8">
        <ActivityFeed items={activityLog} />
      </div>
    </AppShell>
  );
}
