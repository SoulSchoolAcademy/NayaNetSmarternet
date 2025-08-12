"use client";
import { useState } from "react";

export default function ShopSmart(){
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);
  const demo = ["Headphones", "Yoga mat", "Cold plunge", "LED desk light", "Magnesium", "Matcha"];

  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-extrabold">ShopSmart</h1>
      <div className="card grid gap-3">
        <input className="input" placeholder="Search anything…" value={q} onChange={e=>setQ(e.target.value)} />
        <div className="flex gap-2">
          <button className="btn btn-primary" onClick={()=>setResults(demo.filter(x=>x.toLowerCase().includes(q.toLowerCase())))}>
            Search
          </button>
          <button className="btn btn-secondary" onClick={()=>setResults(["Naya suggests: Blue-light glasses","Naya suggests: Foam roller","Naya suggests: Standing desk pad"])}>
            Ask Naya
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {results.map((r,i)=>(
          <div key={i} className="card">
            <div className="font-semibold">{r}</div>
            <div className="text-sm text-[color:var(--muted)]">Demo listing • replace with API</div>
            <button className="btn btn-primary mt-2">View</button>
          </div>
        ))}
      </div>
    </section>
  );
}
