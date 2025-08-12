export default function SmartWorld(){
  const areas = ["Kelowna","Vancouver","Canada","Global"];
  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-extrabold">SmartWorld</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {areas.map(a=>(
          <div key={a} className="card">
            <div className="font-semibold">{a}</div>
            <div className="text-sm text-[color:var(--muted)]">Communities & events</div>
            <button className="btn btn-primary mt-2">Open</button>
          </div>
        ))}
      </div>
    </section>
  );
}
