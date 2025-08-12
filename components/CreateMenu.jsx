"use client";
import Link from "next/link";

const items = [
  { href: "/create/post",    label: "Create Post" },
  { href: "/create/image",   label: "Create Image" },
  { href: "/create/video",   label: "Create Video" },
  { href: "/create/avatar",  label: "Create Avatar" },
  { href: "/create/blog",    label: "Create Blog" },
  { href: "/create/event",   label: "Create Event" },
  { href: "/create/group",   label: "Create Group" },
  { href: "/create/page",    label: "Create Page" },
];

export default function CreateMenu({ onPick }){
  return (
    <div
      role="menu"
      className="absolute mt-2 w-56 rounded-xl border border-[color:var(--border)] bg-[color:var(--panel)] shadow-lg overflow-hidden"
    >
      {items.map((it, i)=>(
        <Link
          key={i}
          href={it.href}
          onClick={onPick}
          className="block px-3 py-2 text-sm hover:bg-[#121a31]"
          role="menuitem"
        >
          {it.label}
        </Link>
      ))}
    </div>
  );
}
