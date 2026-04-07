import { Shell } from '../../components/shell';

export default function SupportPage() {
  return (
    <Shell
      title="Support"
      description="This is where stuck partners get unstuck before hesitation turns into ghost mode."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
          <h2 className="text-xl font-semibold">Book Support</h2>
          <p className="mt-3 text-slate-300">
            Replace this with your booking URL, live office hours link, or embedded scheduler.
          </p>
          <a
            href="https://cal.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-xl bg-emerald-400 px-4 py-3 font-semibold text-slate-950"
          >
            Open Booking
          </a>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
          <h2 className="text-xl font-semibold">Support Channels</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>Email support inbox</li>
            <li>Community chat / Discord</li>
            <li>Weekly office hours</li>
            <li>Technical setup help</li>
          </ul>
        </div>
      </div>
    </Shell>
  );
}
