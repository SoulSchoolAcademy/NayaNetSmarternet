"use client";
import { useState } from "react";

export default function CreateGroup(){
  const [name,setName] = useState("");
  const [privacy,setPrivacy] = useState("public");
  return (
    <section className="grid gap-4 max-w-xl">
      <h1 className="text-2xl font-extrabold">Create Group</h1>
      <input className="input" placeholder="Group name" value={name} onChange={(e)=>setName(e.target.value)} />
      <select className="input" value={privacy} onChange={(e)=>setPrivacy(e.target.value)}>
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>
      <button className="btn btn-primary w-fit">Create (demo)</button>
    </section>
  );
}
