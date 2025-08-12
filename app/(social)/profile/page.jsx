"use client";
import { useState } from "react";

export default function Profile(){
  const [name,setName] = useState("Shawn");
  const [bio,setBio] = useState("Creator • Automation • SmartNet");
  return (
    <section className="grid gap-4 max-w-2xl">
      <h1 className="text-2xl font-extrabold">Edit Profile</h1>
      <input className="input" value={name} onChange={e=>setName(e.target.value)} />
      <textarea className="input" rows={6} value={bio} onChange={e=>setBio(e.target.value)} />
      <button className="btn btn-primary w-fit">Save (demo)</button>
    </section>
  );
}
