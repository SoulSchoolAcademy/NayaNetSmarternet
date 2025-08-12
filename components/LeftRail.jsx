export default function LeftRail(){
  const links = [
    { label:"News Feed", href:"#"},
    { label:"My Groups", href:"#"},
    { label:"My Pages", href:"#"},
    { label:"Explore", href:"#"},
    { label:"Events", href:"#"},
    { label:"Saved Posts", href:"#"},
  ];
  const people = [
    { name:"Naya", tag:"AI"},
    { name:"Olivia", tag:"Wellness"},
    { name:"Ethan", tag:"Bitcoin"},
    { name:"Julia", tag:"Design"},
  ];
  return (
    <div className="grid gap-4">
      <div className="card">
        <div className="font-bold mb-2">Menu</div>
        <div className="grid gap-2">
          {links.map((l,i)=>(
            <a key={i} href={l.href} className="text-[color:var(--muted)] hover:text-white">{l.label}</a>
          ))}
        </div>
      </div>
      <div className="card">
        <div className="font-bold mb-2">People</div>
        <div className="grid gap-2">
          {people.map((p,i)=>(
            <div key={i} className="flex items-center justify-between">
              <div>{p.name} <span className="text-[color:var(--muted)] text-xs">• {p.tag}</span></div>
              <button className="btn btn-secondary px-3 py-1 text-xs">Message</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
