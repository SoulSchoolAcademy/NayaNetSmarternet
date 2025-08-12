"use client";
import { useState } from "react";

export default function PageDetail({ params }){
  const title = params.id.charAt(0).toUpperCase() + params.id.slice(1);
  const [post,setPost] = useState("");
  const [feed,setFeed] = useState([{u:title, t:`Welcome to ${title} page` }]);

  return (
    <section className="grid gap-4 max-w-3xl">
      <h1 className="text-2xl font-extrabold">{title}</h1>
      <div className="card grid gap-2">
        <textarea className="input" rows={4} placeholder="Post an update…" value={post} onChange={e=>setPost(e.target.value)} />
        <div className="flex gap-2">
          <button className="btn btn-secondary" onClick={()=>setPost("Naya, draft a page update about …")}>Ask Naya</button>
          <button className="btn btn-primary" onClick={()=>{ if(!post.trim()) return; setFeed([{u:"You",t:post},...feed]); setPost(""); }}>Publish</button>
        </div>
      </div>
      <div className="grid gap-3">
        {feed.map((p,i)=>(
          <div key={i} className="card">
            <div className="text-sm text-[color:var(--muted)]">{p.u}</div>
            <div>{p.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
