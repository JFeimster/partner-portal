import { Shell } from '../../components/shell';
import { onboardingSteps } from '../../lib/data';

export default function OnboardingPage() {
  return (
    <Shell
      title="Onboarding"
      description="Turn confusion into motion. This page gives new partners a clean path from sign-up to first traction."
    >
      <div className="grid gap-4">
        {onboardingSteps.map((step, index) => (
          <div key={step} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-400/20 font-bold text-sky-300">
              {index + 1}
            </div>
            <div>
              <h2 className="text-lg font-semibold">{step}</h2>
              <p className="mt-2 text-slate-300">
                Add your real workflow, form embeds, or CRM sync here. This starter is ready for your actual onboarding stack.
              </p>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
}
