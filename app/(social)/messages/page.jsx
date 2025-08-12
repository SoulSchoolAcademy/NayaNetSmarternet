import Link from "next/link";
const DMS = [
  { id:"naya",    name:"Naya",    last:"I can summarize today’s topics." },
  { id:"olivia",  name:"Olivia",  last:"See you at the meetup?" },
  { id:"ethan",   name:"Ethan",   last:"Bitcoin update 📈" }
];
export default function Messages(){
  return (
    <section className="grid gap-4 max-w-xl">
      <h1 className="text-2xl font-extrabold">Messages</h1>
      <div className="grid gap-2">
        {DMS.map(d=>(
          <Link key={d.id} href={`/messages/${d.id}`} className="card hover:opacity-95">
            <div className="font-semibold">{d.name}</div>
            <div className="text-sm text-[color:var(--muted)]">{d.last}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
