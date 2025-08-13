"use client";
import { useMemo, useState } from "react";
import LeaderRing from "../../../components/LeaderRing";

const COLORS = {
  gold:  "#f5d44f",
  silver:"#bfc7d5",
  bronze:"#d09a6f",
  brand: "#7c5cff",
  green: "#34d399"
};

const ALL = [
  { id:"you",      name:"You",       city:"Kelowna", country:"Canada", relation:"team",     invites:42,  sales:18,  content:27,  activity:86, delta:+12 },
  { id:"naya",     name:"Naya",      city:"Vancouver", country:"Canada", relation:"friends", invites:38,  sales:22,  content:35,  activity:91, delta:+6  },
  { id:"olivia",   name:"Olivia",    city:"Toronto", country:"Canada", relation:"team",     invites:31,  sales:15,  content:42,  activity:84, delta:+9  },
  { id:"ethan",    name:"Ethan",     city:"Seattle", country:"USA",    relation:"recruits", invites:24,  sales:28,  content:18,  activity:77, delta:+4  },
  { id:"julia",    name:"Julia",     city:"Kelowna", country:"Canada", relation:"friends",  invites:29,  sales:12,  content:25,  activity:72, delta:+3  },
  { id:"marco",    name:"Marco",     city:"Miami",   country:"USA",    relation:"all",      invites:53,  sales:34,  content:12,  activity:88, delta:+15 },
  { id:"hana",     name:"Hana",      city:"Tokyo",   country:"Japan",  relation:"all",      invites:40,  sales:17,  content:30,  activity:82, delta:+7  },
  { id:"li",       name:"Li",        city:"Vancouver", country:"Canada", relation:"recruits", invites:22,  sales:9,   content:41,  activity:69, delta:+2  },
  { id:"sara",     name:"Sara",      city:"Kelowna", country:"Canada", relation:"team",     invites:34,  sales:11,  content:20,  activity:73, delta:+5  },
  { id:"dave",     name:"Dave",      city:"Chicago", country:"USA",    relation:"friends",  invites:15,  sales:19,  content:14,  activity:60, delta:-2 }
];

// Composite score (tweakable): invites 40%, sales 40%, content 20%, activity as multiplier
function scoreOf(u, time = "week") {
  const t = time === "month" ? 1.4 : 1; // slight boost on monthly mode
  const base = (u.invites*0.4 + u.sales*0.4 + u.content*0.2) * t;
  return Math.round(base * (0.6 + u.activity/200)); // activity 0..100 nudges 0.6..1.1x
}

function badgeOf(rank, delta) {
  if (rank === 1) return { name: "Top 1%", color: COLORS.gold };
  if (rank <= 3)  return { name: "Podium",  color: COLORS.silver };
  if (delta >= 10) return { name: "Climber", color: COLORS.green };
  return null;
}

export default function LeaderboardPage(){
  // filters
  const [scope, setScope]       = useState("global"); // global | country | city | my
  const [country, setCountry]   = useState("Canada");
  const [city, setCity]         = useState("Kelowna");
  const [relation, setRelation] = useState("all");    // all | team | recruits | friends
  const [time, setTime]         = useState("week");   // week | month

  const filtered = useMemo(()=>{
    return ALL.filter(u => {
      const mScope =
        scope === "global" ? true :
        scope === "country" ? u.country === country :
        scope === "city" ? (u.country === country && u.city === city) :
        scope === "my" ? ["team","recruits","friends","you"].includes(u.relation) || u.id==="you" :
        true;
      const mRel = relation === "all" ? true : (u.relation === relation || u.id==="you");
      return mScope && mRel;
    }).map(u => ({ ...u, score: scoreOf(u, time) }))
      .sort((a,b)=> b.score - a.score)
      .map((u,i)=> ({ ...u, rank: i+1 }));
  }, [scope, country, city, relation, time]);

  const top3 = filtered.slice(0,3);
  const rest = filtered.slice(3, 20);

  return (
    <section className="grid gap-6">
      <div className="flex items-end justify-between gap-3 flex-wrap">
        <div>
          <h1 className="text-2xl font-extrabold">Leaderboard</h1>
          <div className="text-[color:var(--muted)] text-sm">Gamified affiliate rankings • filter by location & relation</div>
        </div>

        {/* Filters */}
        <div className="card grid sm:grid-cols-5 gap-2">
          <select className="input" value={scope} onChange={e=>setScope(e.target.value)}>
            <option value="global">Global</option>
            <option value="country">Country</option>
            <option value="city">City</option>
            <option value="my">My Network</option>
          </select>
          <select className="input" value={country} onChange={e=>setCountry(e.target.value)} disabled={scope==="global" || scope==="my"}>
            <option>Canada</option>
            <option>USA</option>
            <option>Japan</option>
          </select>
          <select className="input" value={city} onChange={e=>setCity(e.target.value)} disabled={scope!=="city"}>
            <option>Kelowna</option>
            <option>Vancouver</option>
            <option>Toronto</option>
          </select>
          <select className="input" value={relation} onChange={e=>setRelation(e.target.value)}>
            <option value="all">All</option>
            <option value="team">Team</option>
            <option value="recruits">Recruits</option>
            <option value="friends">Friends</option>
          </select>
          <select className="input" value={time} onChange={e=>setTime(e.target.value)}>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>
      </div>

      {/* Podium */}
      <div className="grid lg:grid-cols-3 gap-4">
        {top3.map((u,i)=>{
          const color = i===0 ? COLORS.gold : i===1 ? COLORS.silver : COLORS.bronze;
          const label = i===0 ? "Champion" : i===1 ? "2nd" : "3rd";
          const sub = `${u.delta>0?'+':''}${u.delta}%`;
          return (
            <div key={u.id} className="card grid place-items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(120px 60px at 50% -10%, rgba(124,92,255,0.15), transparent)"}}/>
              <LeaderRing value={u.score} label={label} sublabel={sub} color={color} size={180} stroke={16}/>
              <div className="mt-3 font-bold text-lg">{u.name}</div>
              <div className="text-sm text-[color:var(--muted)]">{u.city} • {u.country}</div>
              <div className="mt-3 grid grid-cols-4 gap-2 text-xs">
                <StatChip k="Inv" v={u.invites} />
                <StatChip k="Sales" v={u.sales} />
                <StatChip k="Content" v={u.content} />
                <StatChip k="Act" v={`${u.activity}%`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Table */}
      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-[color:var(--muted)]">
            <tr>
              <th className="text-left p-3">Rank</th>
              <th className="text-left p-3">Member</th>
              <th className="text-left p-3">Location</th>
              <th className="text-left p-3">Score</th>
              <th className="text-left p-3">Δ</th>
              <th className="text-left p-3">Inv</th>
              <th className="text-left p-3">Sales</th>
              <th className="text-left p-3">Content</th>
              <th className="text-left p-3">Badge</th>
            </tr>
          </thead>
          <tbody>
            {rest.map(u=>{
              const b = badgeOf(u.rank, u.delta);
              return (
                <tr key={u.id} className="border-t border-[color:var(--border)] hover:bg-[#121a31]">
                  <td className="p-3 font-mono">{u.rank}</td>
                  <td className="p-3">{u.name}</td>
                  <td className="p-3">{u.city}, {u.country}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <MiniRing value={u.score}/>
                      <span className="font-semibold">{u.score}</span>
                    </div>
                  </td>
                  <td className={`p-3 ${u.delta>=0?'text-green-400':'text-rose-400'}`}>{u.delta>0?`+${u.delta}%`:`${u.delta}%`}</td>
                  <td className="p-3">{u.invites}</td>
                  <td className="p-3">{u.sales}</td>
                  <td className="p-3">{u.content}</td>
                  <td className="p-3">{b ? <Badge {...b} /> : "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* CTA / Gamification copy */}
      <div className="card flex items-center justify-between gap-3">
        <div>
          <div className="font-bold">Level up your rank</div>
          <div className="text-sm text-[color:var(--muted)]">Invite creators, post daily, and convert shoppers to climb faster.</div>
        </div>
        <a href="/apps/viral" className="btn btn-primary">Open Viral Optimizer</a>
      </div>
    </section>
  );
}

function StatChip({ k, v }) {
  return (
    <div className="px-2 py-1 rounded-lg border border-[color:var(--border)] bg-[#121a31]">
      <span className="text-[color:var(--muted)] mr-1">{k}</span>
      <span className="font-semibold">{v}</span>
    </div>
  );
}

function MiniRing({ value }) {
  const size = 28, stroke = 4;
  const r = (size-stroke)/2, C = 2*Math.PI*r;
  const off = C * (1 - Math.max(0,Math.min(100,value))/100);
  return (
    <svg width={size} height={size}>
      <circle cx={size/2} cy={size/2} r={r} stroke="rgba(255,255,255,.12)" strokeWidth={stroke} fill="none"/>
      <circle cx={size/2} cy={size/2} r={r} stroke="#22d3ee" strokeWidth={stroke} fill="none"
        strokeLinecap="round" strokeDasharray={C} strokeDashoffset={off} transform={`rotate(-90 ${size/2} ${size/2})`} />
    </svg>
  );
}

function Badge({ name, color }) {
  return (
    <span className="inline-flex items-center gap-2 px-2 py-1 rounded-lg border border-[color:var(--border)]"
      style={{ backgroundColor: "rgba(0,0,0,.2)" }}>
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
      <span>{name}</span>
    </span>
  );
}
