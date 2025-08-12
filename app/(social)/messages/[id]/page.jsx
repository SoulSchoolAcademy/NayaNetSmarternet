"use client";
import { useState } from "react";

export default function Thread({ params }){
  const peer = params.id.replace(/\b\w/g,m=>m.toUpperCase());
  const [text,setText] = useState("");
  const [msgs,setMsgs] = useState([{from:peer, body:"Welcome to DM."}]);

  return (
    <section className="grid gap-4 max-w-2xl">
      <h1 className="text-2xl font-extrabold">Chat with {peer}</h1>
      <div className="grid gap-2">
        {msgs.map((m,i)=>(
          <div key={i} className={`card ${m.from==='You'?'bg-[#121a31]':''}`}>
            <div className="text-sm text-[color:var(--muted)]">{m.from}</div>
            <div>{m.body}</div>
          </div>
        ))}
      </div>
      <div className="card grid gap-2">
        <input className="input" placeholder="Type a message…" value={text} onChange={e=>setText(e.target.value)} />
        <div className="flex gap-2">
          <button className="btn btn-secondary" onClick={()=>setText("Naya, draft a friendly reply…")}>Ask Naya</button>
          <button className="btn btn-primary" onClick={()=>{ if(!text.trim()) return; setMsgs([...msgs,{from:'You',body:text}]); setText(""); }}>Send</button>
        </div>
      </div>
    </section>
  );
}
