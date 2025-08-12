"use client";
import { useState } from "react";
import LeftRail from "../components/LeftRail";
import RightRail from "../components/RightRail";
import FeedComposer from "../components/FeedComposer";
import FeedPost from "../components/FeedPost";

export default function Page(){
  const [posts, setPosts] = useState([
    { id: "p3", user: "Naya", text: "Welcome to SmartNet ✨", ts: Date.now() - 3600e3 },
    { id: "p2", user: "Shawn", text: "Shipping the Divine 12 today.", ts: Date.now() - 7200e3 },
    { id: "p1", user: "Daniel", text: "Anyone at the Kelowna meetup tonight?", ts: Date.now() - 86400e3 },
  ]);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[260px_1fr_320px] gap-6">
      <aside className="hidden lg:block"><LeftRail /></aside>

      <div className="grid gap-4">
        <FeedComposer onPost={(text)=>setPosts([{ id:crypto.randomUUID(), user:"You", text, ts:Date.now() }, ...posts])} />
        <div className="grid gap-3">
          {posts.map(p => <FeedPost key={p.id} post={p} />)}
        </div>
      </div>

      <aside className="hidden xl:block"><RightRail /></aside>
    </section>
  );
}
