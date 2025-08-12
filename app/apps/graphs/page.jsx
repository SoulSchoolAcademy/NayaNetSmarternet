"use client";
import { useMemo, useState } from "react";
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, AreaChart, Area,
  BarChart, Bar, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, Radar
} from "recharts";

const COLORS = ["#7c5cff","#22d3ee","#34d399","#fbbf24","#f472b6","#60a5fa"];

const DATASETS = {
  weekly:  ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d,i)=>({ name:d, a: 20+i*6, b: 18+i*5 })),
  monthly: Array.from({length:12},(_,i)=>({ name:`M${i+1}`, a: 100+ (i*12)%60, b: 80+(i*9)%50 })),
  funnel:  [{name:"Visit",v:1000},{name:"Signup",v:240},{name:"Active",v:120},{name:"Paid",v:48}],
};

export default function GraphsLab(){
  const [dataset,setDataset] = useState("weekly");
  const [smooth,setSmooth] = useState(true);
  const data = useMemo(()=>DATASETS[dataset], [dataset]);

  return (
    <section className="grid gap-6">
      <h1 className="text-2xl font-extrabold">Graphs Lab</h1>

      <div className="card grid sm:grid-cols-3 gap-3">
        <select className="input" value={dataset} onChange={e=>setDataset(e.target.value)}>
          <option value="weekly">Weekly Series</option>
          <option value="monthly">Monthly Series</option>
          <option value="funnel">Funnel (mock)</option>
        </select>
        <label className="input flex items-center gap-2">
          <input type="checkbox" checked={smooth} onChange={(e)=>setSmooth(e.target.checked)} />
          Smooth lines
        </label>
        <div className="text-[color:var(--muted)] text-sm self-center">Interactive gallery of your chart types</div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {/* Area */}
        <div className="card">
          <div className="font-bold mb-2">Area</div>
          <div style={{height:240}}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <XAxis dataKey="name" stroke="#8b94a7"/><YAxis stroke="#8b94a7"/><Tooltip/>
                <Area type={smooth?"monotone":"linear"} dataKey="a" stroke="#7c5cff" fill="#7c5cff33" strokeWidth={3}/>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Line */}
        <div className="card">
          <div className="font-bold mb-2">Line</div>
          <div style={{height:240}}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#8b94a7"/><YAxis stroke="#8b94a7"/><Tooltip/>
                <Line type={smooth?"monotone":"linear"} dataKey="b" stroke="#22d3ee" strokeWidth={3} dot={false}/>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bars */}
        <div className="card">
          <div className="font-bold mb-2">Bar</div>
          <div style={{height:240}}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#8b94a7"/><YAxis stroke="#8b94a7"/><Tooltip/>
                <Bar dataKey="a" fill="#7c5cff" radius={[8,8,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie */}
        <div className="card">
          <div className="font-bold mb-2">Pie</div>
          <div style={{height:240}}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={DATASETS.funnel} dataKey="v" nameKey="name" cx="50%" cy="50%" outerRadius={90}>
                  {DATASETS.funnel.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Radar */}
        <div className="card">
          <div className="font-bold mb-2">Radar</div>
          <div style={{height:260}}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={[{k:"Growth",v:90},{k:"Engage",v:75},{k:"Shop",v:62},{k:"Invite",v:85},{k:"Retention",v:70}]}>
                <PolarGrid stroke="#1d2438"/>
                <PolarAngleAxis dataKey="k" stroke="#8b94a7"/>
                <Radar dataKey="v" stroke="#34d399" fill="#34d39933" strokeWidth={3}/>
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sparklines */}
        <div className="card">
          <div className="font-bold mb-2">Sparklines</div>
          <div className="grid grid-cols-2 gap-3">
            {Array.from({length:4}).map((_,i)=>(
              <div key={i} style={{height:80}}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={DATASETS.weekly.map((d,j)=>({ name:d.name, v: d.a + (i*5) - j }))}>
                    <Line type="monotone" dataKey="v" stroke="#fbbf24" dot={false} strokeWidth={2}/>
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
