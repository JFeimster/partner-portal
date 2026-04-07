import { PublicShell } from '@/components/layout/public-shell';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <PublicShell>
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-sky-300">
          Moonshine Capital
        </p>

        <h1 className="mt-3 text-5xl font-black tracking-tight">
          A partner portal built to get operators funded — and keep them moving.
        </h1>

        <p className="mt-4 text-lg text-slate-300">
          This is not about chasing banks. This is about understanding real business pain and connecting owners to capital that actually fits.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/become-a-partner" variant="brutal">
            Start as a Partner
          </Button>

          <Button href="/offers" variant="secondary">
            View Offers
          </Button>
        </div>
      </div>
    </PublicShell>
  );
}
