"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/",           label: "Feed" },
  { href: "/apps",       label: "Apps" },
  { href: "/groups",     label: "Groups" },
  { href: "/pages",      label: "Pages" },
  { href: "/events",     label: "Events" },
  { href: "/messages",   label: "Messages" },
  { href: "/notifications", label: "Notifications" },
  { href: "/profile",    label: "Profile" },
  { href: "/settings",   label: "Settings" }
];

export default function SocialSidebar(){
  const p = usePathname();
  return (
    <aside className="h-screen sticky top-0 bg-[color:var(--panel)] border-r border-[color:var(--border)] p-4">
      <div className="flex items-center gap-3 px-2 mb-6">
        <img src="/brand/smartnet.svg" onError={(e)=>{ e.currentTarget.src="/logo.svg"; }} alt="SmartNet" className="w-7 h-7"/>
        <div className="font-extrabold tracking-tight">SmartNet</div>
      </div>
      <nav className="grid gap-1">
        {NAV.map(n=>(
          <Link key={n.href} href={n.href}
            className={`px-3 py-2 rounded-xl hover:bg-[#121a31] transition ${p===n.href?'bg-[#121a31] text-white':'text-[color:var(--muted)]'}`}>
            {n.label}
          </Link>
        ))}
        <Link href="/hub" className="px-3 py-2 rounded-xl mt-2 bg-[color:var(--brand)] text-white text-center">Open SmartHub</Link>
      </nav>
      <div className="mt-8 text-xs text-[color:var(--muted)] opacity-70 px-2">© {new Date().getFullYear()} SmartNet</div>
    </aside>
  );
}

