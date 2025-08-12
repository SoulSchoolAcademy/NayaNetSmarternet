"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/onboarding", label: "Onboarding" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/affiliate", label: "Affiliate" },
  { href: "/qna", label: "Q&A" },
  { href: "/media", label: "Media" },
  { href: "/profile", label: "Profile" },
  { href: "/settings", label: "Settings" },
];

export default function Sidebar(){
  const p = usePathname();
  return (
    <aside className="h-screen sticky top-0 bg-[color:var(--panel)] border-r border-[color:var(--border)] p-4">
      <div className="flex items-center gap-3 px-2 mb-6">
        <img src="/logo.svg" alt="logo" className="w-7 h-7"/>
        <div className="font-extrabold tracking-tight">SmartNet</div>
      </div>
      <nav className="grid gap-1">
        {nav.map(n => (
          <Link key={n.href} href={n.href}
            className={`px-3 py-2 rounded-xl hover:bg-[#121a31] transition ${p===n.href?'bg-[#121a31] text-white':'text-[color:var(--muted)]'}`}>
            {n.label}
          </Link>
        ))}
      </nav>
      <div className="mt-8 text-xs text-[color:var(--muted)] opacity-70 px-2">© {new Date().getFullYear()} SmartNet</div>
    </aside>
  )
}
