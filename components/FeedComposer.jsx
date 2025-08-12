"use client";
import { useState } from "react";

export default function FeedComposer({ onPost }){
  const [text,setText] = useState("");
  return (
    <div className="card grid gap-3">
      <textarea
        className="input"
        rows={3}
        placeholder="Share something with your network…"
        value={text}
        onChange={e=>setText(e.target.value)}
      />
      <div className="flex items-center gap-2">
        <button
          className="btn btn-primary"
          onClick={()=>{ if(!text.trim()) return; onPost(text.trim()); setText(""); }}>
          Post
        </button>
        <button className="btn btn-secondary" onClick={()=>setText("Naya, draft a post about today’s launch.")}>
          Ask Naya
        </button>
      </div>
    </div>
  );
}
