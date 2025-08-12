"use client";
import { useState } from "react";

export default function SmartMail(){
  const [to,setTo] = useState("");
  const [subject,setSubject] = useState("");
  const [body,setBody] = useState("");

  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-extrabold">SmartMail</h1>
      <div className="card grid gap-3">
        <input className="input" placeholder="To (comma-separated)" value={to} onChange={e=>setTo(e.target.value)} />
        <input className="input" placeholder="Subject" value={subject} onChange={e=>setSubject(e.target.value)} />
        <textarea className="input" placeholder="Write your message…" rows={6} value={body} onChange={e=>setBody(e.target.value)} />
        <div className="flex gap-2">
          <button className="btn btn-secondary" onClick={()=>setBody(prev=>prev + (prev?'\n':'') + "Draft by Naya…")}>Ask Naya for Draft</button>
          <button className="btn btn-primary">Send (demo)</button>
        </div>
      </div>
    </section>
  );
}
