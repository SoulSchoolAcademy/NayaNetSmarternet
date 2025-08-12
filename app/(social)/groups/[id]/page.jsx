"use client";
import { useState } from "react";

export default function GroupDetail({ params }){
  const { id } = params;
  const [text,setText] = useState("");
  const [posts,setPosts] = useState([{u:"Naya",t:`Welcome to ${id} group!`}]);

  return (
    <section className="grid gap-4 max-w-3xl">
      <h1 className="text-2xl font-extrabold capitalize">{id.replace(/-/g," ")}</h1>
      <div className="card grid gap-2">
        <textarea className="input" rows={4} placeholder="Post to group…" value={text} onChange={e=>setText(e.target.value)} />
        <div className="flex gap-2">
          <button className="btn btn-secondary" onClick={()=>setText("Naya, draft a group post about …")}>Ask Naya</button>
          <button className="btn btn-primary" onClick={()=>{ if(!text.trim()) return; setPosts([{u:"You",t:text},...posts]); setText(""); }}>Post</button>
        </div>
      </div>
      <div className="grid gap-3">
        {posts.map((p,i)=>(
          <div key={i} className="card">
            <div className="text-sm text-[color:var(--muted)]">{p.u}</div>
            <div>{p.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
