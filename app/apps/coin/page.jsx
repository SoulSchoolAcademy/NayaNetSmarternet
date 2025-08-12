export default function SmartCoin(){
  const boosters = [
    {name:"Invite Boost", desc:"Earn extra when friends join."},
    {name:"Creator Boost", desc:"Post daily for bonus."},
    {name:"Shop Boost", desc:"Buy via ShopSmart links."},
  ];
  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-extrabold">SmartCoin</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {boosters.map((b,i)=>(
          <div key={i} className="card">
            <div className="font-semibold">{b.name}</div>
            <div className="text-sm text-[color:var(--muted)]">{b.desc}</div>
            <button className="btn btn-primary mt-2">Activate</button>
          </div>
        ))}
      </div>
    </section>
  );
}
