"use client";
import { useState } from "react";

export default function CreateBlog(){
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (
    <section className="grid gap-4 max-w-3xl">
      <h1 className="text-2xl font-extrabold">Create Blog</h1>
      <input className="input" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
      <textarea className="input" rows={12} placeholder="Write…" value={body} onChange={(e)=>setBody(e.target.value)} />
      <div className="flex gap-2">
        <button className="btn btn-secondary" onClick={()=>setBody(prev => prev + (prev?'\n\n':'') + "Naya draft…")}>Ask Naya</button>
        <button className="btn btn-primary">Publish (demo)</button>
      </div>
    </section>
  );
}
