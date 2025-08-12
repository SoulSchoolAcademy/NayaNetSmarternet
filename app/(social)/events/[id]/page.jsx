"use client";
import { useState } from "react";

export default function EventDetail({ params }){
  const title = params.id.replace(/-/g," ").replace(/\b\w/g, m=>m.toUpperCase());
  const [rsvp, setRsvp] = useState("going");
  const [notes,setNotes] = useState("");

  return (
    <section className="grid gap-4 max-w-2xl">
      <h1 className="text-2xl font-extrabold">{title}</h1>
      <div className="card grid gap-3">
        <label className="text-sm text-[color:var(--muted)]">RSVP</label>
        <select className="input" value={rsvp} onChange={e=>setRsvp(e.target.value)}>
          <option value="going">Going</option>
          <option value="maybe">Maybe</option>
          <option value="not">Not going</option>
        </select>
        <textarea className="input" rows={4} placeholder="Add a note…" value={notes} onChange={e=>setNotes(e.target.value)} />
        <button className="btn btn-primary w-fit">Save RSVP (demo)</button>
      </div>
    </section>
  );
}
