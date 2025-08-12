"use client";
import useSWR from "swr";
import KPI from "../../components/KPI";
import Chart from "../../components/Chart";
const fetcher = (u)=>fetch(u).then(r=>r.json());

export default function HubHome(){
  const { data } = useSWR("/api/stats", fetcher);
  const stats = data || { kpis:{}, series:[] };
  const { revenue=0, clicks=0, signups=0, conversion=0 } = stats.kpis;

  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-extrabold">Command Station</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KPI title="Revenue" value={`$${revenue.toLocaleString()}`} hint="Last 30d" />
        <KPI title="Clicks" value={clicks.toLocaleString()} hint="Traffic" />
        <KPI title="Signups" value={signups.toLocaleString()} hint="New" />
        <KPI title="Conversion" value={`${conversion}%`} hint="Visit→Join" />
      </div>
      <div className="card"><div className="font-bold mb-2">Performance</div><Chart data={stats.series}/></div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="card">
          <div className="font-bold mb-2">Mail Composer</div>
          <textarea className="input" rows={6} placeholder="Draft an email…"></textarea>
          <div className="flex gap-2 mt-2">
            <button className="btn btn-secondary">Ask Naya to Draft</button>
            <button className="btn btn-primary">Send (demo)</button>
          </div>
        </div>
        <div className="card">
          <div className="font-bold mb-2">Recent Activity</div>
          <ul className="text-sm text-[color:var(--muted)] space-y-1">
            <li>+24 signups • Campaign A</li>
            <li>$208.30 earnings • Week to date</li>
            <li>1 new affiliate • Creator plan</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
