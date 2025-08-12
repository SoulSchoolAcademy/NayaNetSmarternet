export default function SmartSounds(){
  const tracks = [
    {title:"Focus Alpha", len:"15:00"},
    {title:"Deep Sleep Delta", len:"30:00"},
    {title:"Morning Uplift", len:"10:00"},
  ];
  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-extrabold">SmartSounds</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {tracks.map((t,i)=>(
          <div key={i} className="card">
            <div className="font-semibold">{t.title}</div>
            <div className="text-sm text-[color:var(--muted)]">{t.len}</div>
            <button className="btn btn-primary mt-2">Play</button>
          </div>
        ))}
      </div>
    </section>
  );
}
