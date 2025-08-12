export default function SmartSync(){
  const people = [
    {name:"Naya",    city:"Vancouver", tag:"AI"},
    {name:"Daniel",  city:"Canada",    tag:"Finance"},
    {name:"Olivia",  city:"Yoga",      tag:"Recipes"},
    {name:"Ethan",   city:"Tech",      tag:"Bitcoin"},
    {name:"Julia",   city:"Design",    tag:"Wellness"},
  ];
  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-extrabold">SmartSync</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {people.map((p,i)=>(
          <div key={i} className="card">
            <div className="font-semibold">{p.name}</div>
            <div className="text-sm text-[color:var(--muted)]">{p.city} • {p.tag}</div>
            <button className="btn btn-primary mt-2">Message</button>
          </div>
        ))}
      </div>
    </section>
  );
}
