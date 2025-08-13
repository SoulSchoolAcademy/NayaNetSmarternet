import Link from "next/link";

const GROUPS = [
  { id:"kelowna",  name:"Kelowna Creators", members:842 },
  { id:"bitcoin",  name:"Bitcoin Canada",   members:5120 },
  { id:"wellness", name:"Wellness & Biohacking", members:2310 },
];

export default function GroupsIndex(){
  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-extrabold">Groups</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {GROUPS.map(g=>(
          <Link key={g.id} href={`/groups/${g.id}`} className="card hover:opacity-95">
            <div className="font-semibold">{g.name}</div>
            <div className="text-sm text-[color:var(--muted)]">{g.members.toLocaleString()} members</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

