"use client";
import { useState } from "react";

export default function SmartNotes(){
  const [note,setNote] = useState("");
  const [list,setList] = useState([]);
  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-extrabold">SmartNotes</h1>
      <div className="card grid gap-3">
        <textarea className="input" placeholder="Speak or type a note…" rows={5} value={note} onChange={e=>setNote(e.target.value)} />
        <div className="flex gap-2">
          <button className="btn btn-secondary" onClick={()=>setNote("Naya summary: …")}>Ask Naya to summarize</button>
          <button className="btn btn-primary" onClick={()=>{ if(!note) return; setList([{text:note,ts:new Date().toISOString()} ,...list]); setNote(""); }}>
            Save Note
          </button>
        </div>
      </div>
      <div className="grid gap-2">
        {list.map((n,i)=>(
          <div key={i} className="card">
            <div className="text-sm text-[color:var(--muted)]">{new Date(n.ts).toLocaleString()}</div>
            <div>{n.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
