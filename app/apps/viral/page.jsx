"use client";
import { useMemo, useState } from "react";

const enc = encodeURIComponent;

export default function ViralOptimizer(){
  const [base, setBase]     = useState("https://smartnet.app/landing");
  const [source, setSource] = useState("smartnet");
  const [medium, setMedium] = useState("social");
  const [campaign, setCampaign] = useState("launch");

  const url = useMemo(()=>{
    const u = new URL(base);
    if (source)   u.searchParams.set("utm_source", source);
    if (medium)   u.searchParams.set("utm_medium", medium);
    if (campaign) u.searchParams.set("utm_campaign", campaign);
    return u.toString();
  }, [base, source, medium, campaign]);

  const copy = (t)=>navigator.clipboard?.writeText(t);

  const shares = [
    { label:"Facebook", href:`https://www.facebook.com/sharer/sharer.php?u=${enc(url)}` },
    { label:"X (Twitter)", href:`https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc("Join me on SmartNet!")}` },
    { label:"LinkedIn", href:`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
    { label:"Email", href:`mailto:?subject=${enc("SmartNet invite")}&body=${enc(url)}` }
  ];

  const snippets = [
    `Join me on SmartNet — my invite link: ${url}`,
    `I’m building on SmartNet. Tap to see: ${url}`,
    `Creator mode on. My hub: ${url}`
  ];

  return (
    <section className="grid gap-6 max-w-4xl">
      <h1 className="text-2xl font-extrabold">Viral Optimizer</h1>

      <div className="card grid gap-3">
        <input className="input" value={base} onChange={e=>setBase(e.target.value)} placeholder="Base URL" />
        <div className="grid sm:grid-cols-3 gap-3">
          <input className="input" value={source} onChange={e=>setSource(e.target.value)} placeholder="utm_source" />
          <input className="input" value={medium} onChange={e=>setMedium(e.target.value)} placeholder="utm_medium" />
          <input className="input" value={campaign} onChange={e=>setCampaign(e.target.value)} placeholder="utm_campaign" />
        </div>
        <div className="flex gap-2">
          <input className="input flex-1" value={url} readOnly />
          <button className="btn btn-secondary" onClick={()=>copy(url)}>Copy</button>
        </div>
      </div>

      <div className="card">
        <div className="font-bold mb-2">Share Links</div>
        <div className="flex flex-wrap gap-2">
          {shares.map((s,i)=>(
            <a key={i} className="btn btn-primary" href={s.href} target="_blank">Share on {s.label}</a>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="font-bold mb-2">Suggested Copy</div>
        <div className="grid gap-2">
          {snippets.map((t,i)=>(
            <div key={i} className="flex gap-2">
              <input className="input flex-1" value={t} readOnly />
              <button className="btn btn-secondary" onClick={()=>copy(t)}>Copy</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
