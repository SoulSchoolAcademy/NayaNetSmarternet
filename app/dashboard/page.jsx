"use client";
import useSWR from "swr";
import KPI from "../../components/KPI";
import Chart from "../../components/Chart";

const fetcher = (url)=>fetch(url).then(r=>r.json());

export default function Page(){
  const { data } = useSWR("/api/stats", fetcher);
  const stats = data || { kpis:{}, series:[] };
  const { revenue=0, clicks=0, signups=0, conversion=0 } = stats.kpis;

  return (
    <section className="grid gap-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KPI title="Revenue" value={`$${revenue.toLocaleString()}`} hint="Last 30 days"/>
        <KPI title="Clicks" value={clicks.toLocaleString()} hint="Traffic"/>
        <KPI title="Signups" value={signups.toLocaleString()} hint="New members"/>
        <KPI title="Conversion" value={`${conversion}%`} hint="Visit → Join"/>
      </div>
      <div className="card">
        <div className="font-bold mb-2">Performance</div>
        <Chart data={stats.series} />
      </div>
    </section>
  );
}
