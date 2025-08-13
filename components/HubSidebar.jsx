"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/hub",            label: "Overview" },
  { href: "/hub/analytics",  label: "Analytics" },
  { href: "/hub/mail",       label: "Mail" },
  { href: "/hub/leaderboard",label: "Leaderboard" }, // NEW
  { href: "/hub/affiliates", label: "Affiliates" },
  { href: "/hub/settings",   label: "Settings" }
];

export default function HubSidebar(){
  const p = usePathname();
  return (
    <aside className="h-screen sticky top-0 bg-[color:var(--panel)] border-r border-[color:var(--border)] p-4">
      <div className="flex items-center gap-3 px-2 mb-6">
        <img src="/brand/smartnet.svg" onError={(e)=>{ e.currentTarget.src="/logo.svg"; }} alt="SmartNet" className="w-7 h-7"/>
        <div className="font-extrabold tracking-tight">SmartHub</div>
      </div>
      <nav className="grid gap-1">
        {NAV.map(n=>(
          <Link key={n.href} href={n.href}
            className={`px-
