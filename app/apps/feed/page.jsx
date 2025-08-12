"use client";
import { useState } from "react";
const TOPICS = ["Canada","Economy","Bitcoin","AI","Wellness","Music"];

export default function SmartFeed(){
  const [topic,setTopic] = useState("AI");
  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-extrabold">SmartFeed</h1>
      <div className="card">
        <div className="flex flex-wrap gap-2">
          {TOPICS.map(t=>(
            <button key={t}
              className={`btn ${t===topic?'btn-primary':'btn-secondary'}`}
              onClick={()=>setTopic(t)}>{t}</button>
          ))}
        </div>
      </div>
      <div className="grid gap-3">
        {Array.from({length:4}).map((_,i)=>(
          <div key={i} className="card">
            <div className="text-sm text-[color:var(--muted)]">{topic} • curated</div>
            <div>Demo post #{i+1} for {topic}. Replace with real feed API.</div>
          </div>
        ))}
      </div>
    </section>
  );
}
