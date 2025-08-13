import Link from "next/link";
const PAGES = [
  { id:"smartnet", name:"SmartNet Official" },
  { id:"soulschool", name:"SoulSchool Academy" },
  { id:"vortex", name:"Vortex Labs" },
];
export default function PagesIndex(){
  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-extrabold">Pages</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {PAGES.map(p=>(
          <Link key={p.id} href={`/pages/${p.id}`} className="card hover:opacity-95">
            <div className="font-semibold">{p.name}</div>
            <div className="text-sm text-[color:var(--muted)]">Page • Follow</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

