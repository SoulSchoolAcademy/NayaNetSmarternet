import Link from "next/link";
const EVENTS = [
  { id:"kelowna-meetup", name:"Kelowna Creator Meetup", when:"Aug 20, 7pm", where:"Downtown Kelowna" },
  { id:"bitcoin-talk",   name:"Bitcoin & AI",           when:"Aug 28, 5pm", where:"Vancouver" },
];
export default function EventsIndex(){
  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-extrabold">Events</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {EVENTS.map(e=>(
          <Link key={e.id} href={`/events/${e.id}`} className="card hover:opacity-95">
            <div className="font-semibold">{e.name}</div>
            <div className="text-sm text-[color:var(--muted)]">{e.when} • {e.where}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
