"use client";
import { useState } from "react";

export default function SmartTalk(){
  const [text,setText] = useState("");
  const [feed,setFeed] = useState([
    {user:"Naya", msg:"Welcome to SmartTalk ✨"},
    {user:"Shawn", msg:"Let’s ship this."}
  ]);

  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-extrabold">SmartTalk</h1>
      <div className="card grid gap-3">
        <input className="input" placeholder="Say something…" value={text} onChange={e=>setText(e.target.value)} />
        <div className="flex gap-2">
          <button className="btn btn-primary" onClick={()=>{ if(!text) return; setFeed([{user:"You",msg:text},...feed]); setText(""); }}>
            Post
          </button>
          <button className="btn btn-secondary" onClick={()=>setFeed([{user:"Naya", msg:"I can summarize today’s trending topics for you."}, ...feed])}>
            Ask Naya
          </button>
        </div>
      </div>

      <div className="grid gap-3">
        {feed.map((p,i)=>(
          <div key={i} className="card">
            <div className="text-sm text-[color:var(--muted)]">{p.user}</div>
            <div>{p.msg}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
