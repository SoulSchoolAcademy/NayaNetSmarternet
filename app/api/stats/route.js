export async function GET(){
  const points = Array.from({length: 24}, (_,i)=>({ x: i, y: Math.round(50 + Math.sin(i/2)*30 + Math.random()*20) }));
  const kpis = { revenue: 23840, clicks: 182114, signups: 6124, conversion: 3.4 };
  return Response.json({ kpis, series: points });
}

