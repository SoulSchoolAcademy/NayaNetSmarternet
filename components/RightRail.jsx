export default function RightRail(){
  const tools = [
    { name:"SmartHub", desc:"Back office & analytics" },
    { name:"SmartMail", desc:"Email & SNC messages" },
    { name:"SmartCoin", desc:"Rewards & boosters" },
    { name:"ShopSmart", desc:"Search or ask Naya" },
  ];
  return (
    <div className="grid gap-4">
      <div className="card">
        <div className="font-bold mb-2">Tools</div>
        <div className="grid gap-2">
          {tools.map((t,i)=>(
            <div key={i} className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-[color:var(--muted)] text-xs">{t.desc}</div>
              </div>
              <a href={`/apps/${t.name.toLowerCase().replace("smart","")}`} className="btn btn-primary px-3 py-1 text-xs">Open</a>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="font-bold mb-2">Trending</div>
        <ul className="list-disc pl-5 text-sm text-[color:var(--muted)] space-y-1">
          <li>Kelowna meetup tonight</li>
          <li>Bitcoin breaks resistance</li>
          <li>Top biohacks this week</li>
        </ul>
      </div>
    </div>
  );
}
