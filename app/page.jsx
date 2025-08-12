import Link from "next/link";
import AppIcon from "../src/icons/AppIcon";

export default function Page(){
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <div className="card">
        <div className="badge mb-3">Welcome</div>
        <h1 className="text-4xl font-extrabold leading-tight">
          Beautiful. Fast. Functional.<br/>The SmartNet pro starter.
        </h1>
        <p className="text-[color:var(--muted)] mt-2">
          Polished UI, sidebar layout, KPIs, charts, and real routes. Built to deploy without drama.
        </p>
        <div className="flex gap-3 mt-5">
          <Link href="/onboarding" className="btn btn-primary">Start Onboarding</Link>
          <Link href="/dashboard" className="btn btn-secondary">Open Dashboard</Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="card">
          <AppIcon name="SmartWorld" size={56} className="mb-2" />
          <h2 className="font-bold">Media Library</h2>
          <p className="text-[color:var(--muted)] text-sm">Thumbnails, posters, course content.</p>
        </div>
        <div className="card">
          <AppIcon name="SmartTalk" size={56} className="mb-2" />
          <h2 className="font-bold">AI Q&amp;A</h2>
          <p className="text-[color:var(--muted)] text-sm">Ask + get visual answers. Hook your model later.</p>
        </div>
        <div className="card">
          <AppIcon name="SmartCoin" size={56} className="mb-2" />
          <h2 className="font-bold">Affiliate Mode</h2>
          <p className="text-[color:var(--muted)] text-sm">Every member gets a link. Track clicks and payouts.</p>
        </div>
        <div className="card">
          <AppIcon name="SmartFeed" size={56} className="mb-2" />
          <h2 className="font-bold">Analytics</h2>
          <p className="text-[color:var(--muted)] text-sm">Dashboard pulls from a mock API you can replace.</p>
        </div>
      </div>
    </section>
  );
}
