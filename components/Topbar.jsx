"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import CreateMenu from "./CreateMenu";

export default function Topbar(){
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (!btnRef.current) return;
      if (!btnRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-black/30 border-b border-[color:var(--border)]">
      <div className="container py-3 flex items-center gap-3">
        <img
          src="/brand/smartnet.svg"
          onError={(e)=>{ e.currentTarget.src="/logo.svg"; }}
          alt="SmartNet"
          className="h-6 w-auto"
        />

        {/* Create dropdown */}
        <div className="relative" ref={btnRef}>
          <button
            className="btn btn-primary"
            onClick={()=>setOpen(v=>!v)}
            aria-haspopup="menu"
            aria-expanded={open}
          >
            Create
          </button>
          {open && <CreateMenu onPick={()=>setOpen(false)} />}
        </div>

        <div className="flex-1" />
        <Link href="/" className="btn btn-secondary">Social</Link>
        <Link href="/hub" className="btn btn-secondary">SmartHub</Link>
      </div>
    </header>
  );
}

