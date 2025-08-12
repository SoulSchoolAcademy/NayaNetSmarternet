"use client";
import { useMemo, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const COLORS = ["#7c5cff","#22d3ee","#34d399","#fbbf24","#f472b6","#60a5fa"];

export default function VisualAnswers(){
  const [q, setQ] = useState("How is my growth this week?");
  const seed = useMemo(()=>Math.random(), [q]);

  const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const series = days.map((d,i)=>({ name:d, value: Math.round(40 + 30*Math.sin(i + seed*6)) }));
  const pie = [
    { name: "Invites", value: 38 },
    { name: "Shop", value: 26 },
    { name: "Content", value: 21 },
    { name: "Referrals", value: 15 },
  ];

  return (
    <section className="grid gap-6">
      <h1 className="text-2xl font-extrabold">Nine Visual Answers</h1>
      <div className="card grid sm:grid-cols-[1fr_auto] gap-3">
        <input className="input" value={q} onChange={e=>setQ(e.target.value)} />
        <button className="btn btn-primary" onClick={()=>setQ(q.trim() || "Show me growth")}>Visualize</button>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="card">
          <div className="font-bold mb-2">Weekly Growth</div>
          <div style={{height:260}}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={series}>
                <XAxis dataKey="name" stroke="#8b94a7" />
                <YAxis stroke="#8b94a7" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#7c5cff" strokeWidth={3} dot={false}/>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="font-bold mb-2">Attribution Mix</div>
          <div style={{height:260}}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pie} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90}>
                  {pie.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="font-bold mb-1">Headline</div>
          <div className="text-3xl font-extrabold">208.30</div>
          <div className="text-sm text-[color:var(--muted)]">Viral Earnings • this week</div>
        </div>

        <div className="card">
          <div className="font-bold mb-1">Answer</div>
          <div className="text-sm text-[color:var(--muted)]">
            {`For “${q}”: growth peaked mid-week; Invites drive most conversions; Shop is rising.`}
          </div>
        </div>
      </div>
    </section>
  );
}
