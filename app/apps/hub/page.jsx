import KPI from "@/components/KPI";

export default function SmartHub(){
  const k = { revenue: 23840, clicks: 182114, signups: 6124, conversion: 3.4 };
  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-extrabold">SmartHub</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KPI title="Revenue" value={`$${k.revenue.toLocaleString()}`} hint="Last 30 days" />
        <KPI title="Clicks" value={k.clicks.toLocaleString()} hint="Traffic" />
        <KPI title="Signups" value={k.signups.toLocaleString()} hint="New members" />
        <KPI title="Conversion" value={`${k.conversion}%`} hint="Visit → Join" />
      </div>
      <div className="card">More detailed reports go here.</div>
    </section>
  );
}

