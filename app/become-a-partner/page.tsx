import { PublicShell } from '@/components/layout/public-shell';
import { Button } from '@/components/ui/button';

export default function BecomePartner() {
  return (
    <PublicShell>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-black">Become a Partner</h1>
        <p className="mt-4 text-slate-300">
          Get paid to connect business owners with capital they actually need. No fluff, no bank delays.
        </p>
        <div className="mt-6">
          <Button href="https://tally.so/r/mOe658" variant="brutal">Apply Now</Button>
        </div>
      </div>
    </PublicShell>
  );
}
