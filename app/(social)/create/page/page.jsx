"use client";
import { useState } from "react";

export default function CreatePage(){
  const [name,setName] = useState("");
  const [category,setCategory] = useState("Brand");
  return (
    <section className="grid gap-4 max-w-xl">
      <h1 className="text-2xl font-extrabold">Create Page</h1>
      <input className="input" placeholder="Page name" value={name} onChange={(e)=>setName(e.target.value)} />
      <select className="input" value={category} onChange={(e)=>setCategory(e.target.value)}>
        <option>Brand</option>
        <option>Community</option>
        <option>Creator</option>
      </select>
      <button className="btn btn-primary w-fit">Create (demo)</button>
    </section>
  );
}
