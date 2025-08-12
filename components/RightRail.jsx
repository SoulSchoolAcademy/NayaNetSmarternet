export default function RightRail(){
  const online = [
    {name:"Naya"}, {name:"Olivia"}, {name:"Ethan"}, {name:"Julia"}, {name:"Daniel"}
  ];
  return (
    <div className="grid gap-4">
      <div className="card">
        <div className="font-bold mb-2">Online Users</div>
        <div className="grid gap-2">
          {online.map((u,i)=>(
            <div key={i} className="flex items-center justify-between">
              <div>{u.name}</div>
              <button className="btn btn-secondary px-3 py-1 text-xs">Message</button>
            </div>
          ))}
        </div>
      </div>
      <div className="card">
        <div className="font-bold mb-2">Trending</div>
        <ul className="list-disc pl-5 text-sm text-[color:var(--muted)] space-y-1">
          <li>Kelowna Meetup tonight</li>
          <li>Bitcoin breaks resistance</li>
          <li>Top biohacks this week</li>
        </ul>
      </div>
    </div>
  );
}
