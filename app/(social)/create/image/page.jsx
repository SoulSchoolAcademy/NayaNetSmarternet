"use client";
import { useState } from "react";

export default function CreateImage(){
  const [prompt, setPrompt] = useState("");
  return (
    <section className="grid gap-4 max-w-2xl">
      <h1 className="text-2xl font-extrabold">Create Image</h1>
      <input className="input" placeholder="Describe the image…" value={prompt} onChange={(e)=>setPrompt(e.target.value)} />
      <div className="flex gap-2">
        <button className="btn btn-secondary">Generate (demo)</button>
        <button className="btn btn-primary">Upload</button>
      </div>
    </section>
  );
}
