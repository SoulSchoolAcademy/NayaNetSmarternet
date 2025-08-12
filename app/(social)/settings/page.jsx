"use client";
import { useState } from "react";

export default function Settings(){
  const [email,setEmail] = useState("you@example.com");
  const [privacy,setPrivacy] = useState("public");
  const [notify,setNotify] = useState(true);

  return (
    <section className="grid gap-4 max-w-2xl">
      <h1 className="text-2xl font-extrabold">Settings</h1>

      <div className="card grid gap-2">
        <div className="font-bold">Account</div>
        <input className="input" value={email} onChange={e=>setEmail(e.target.value)} />
      </div>

      <div className="card grid gap-2">
        <div className="font-bold">Privacy</div>
        <select className="input" value={privacy} onChange={e=>setPrivacy(e.target.value)}>
          <option value="public">Public</option>
          <option value="friends">Friends only</option>
          <option value="private">Private</option>
        </select>
      </div>

      <div className="card grid gap-2">
        <div className="font-bold">Notifications</div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={notify} onChange={e=>setNotify(e.target.checked)} />
          Email me activity summaries
        </label>
      </div>

      <button className="btn btn-primary w-fit">Save (demo)</button>
    </section>
  );
}
