"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/",          label: "Home" },
  { href: "/apps",      label: "Apps" },      // keeps the Divine 12 entry
  { href: "/onboarding",label: "Onboarding" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/affiliate", label: "Affiliate" },
  { href: "/qna",       label: "Q&A" },
  { href: "/media",     label: "Media" },
  { href: "/profile",   label: "Profile" },
  { href: "/settings",  label: "Settings" },
];

export default function Sidebar() {
  const p = usePathname();
  return (
    <aside className="h-screen sticky top-0 bg-[color:var(--panel)] border-r border-[color:var(--border)] p-4">
      <div className="flex items-center gap-3 px-2 mb-6">
        <img src="/brand/smartnet.svg" onError={(e)=>{ e.currentTarget.src="/logo.svg"; }} alt="SmartNet" className="w-7 h-7" />
        <div className="font-extrabold tracking-tight">SmartNet</div>
      </div>
      <nav className="grid gap-1">
        {NAV.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-3 py-2 rounded-xl hover:bg-[#121a31] transition ${
              p === item.href ? "bg-[#121a31] text-white" : "text-[color:var(--muted)]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-8 text-xs text-[color:var(--muted)] opacity-70 px-2">
        © {new Date().getFullYear()} SmartNet
      </div>
    </aside>
  );
}

