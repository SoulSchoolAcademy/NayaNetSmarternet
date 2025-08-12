"use client";
import { useState } from "react";

export default function CreatePost(){
  const [text, setText] = useState("");
  return (
    <section className="grid gap-4 max-w-2xl">
      <h1 className="text-2xl font-extrabold">Create Post</h1>
      <textarea
        className="input"
        rows={6}
        placeholder="Share something with your network…"
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />
      <div className="flex gap-2">
        <button className="btn btn-secondary" onClick={()=>setText("Naya, draft a post about…")}>Ask Naya</button>
        <button className="btn btn-primary">Publish (demo)</button>
      </div>
    </section>
  );
}
