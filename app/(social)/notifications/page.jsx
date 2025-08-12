export default function Notifications(){
  const items = [
    {t:"Olivia liked your post", ts:"1h"},
    {t:"Ethan mentioned you in Bitcoin Canada", ts:"3h"},
    {t:"New event: Kelowna Creator Meetup", ts:"1d"},
  ];
  return (
    <section className="grid gap-4 max-w-xl">
      <h1 className="text-2xl font-extrabold">Notifications</h1>
      <div className="grid gap-2">
        {items.map((n,i)=>(
          <div key={i} className="card flex items-center justify-between">
            <div>{n.t}</div>
            <div className="text-xs text-[color:var(--muted)]">{n.ts}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
