import { NextResponse } from 'next/server';
let EVENTS = [
  { id:'e1', title:'Launch Jam', when:Date.now()+86400000, rsvps:new Set<string>() },
  { id:'e2', title:'Creator AMA', when:Date.now()+172800000, rsvps:new Set<string>() }
];
export async function GET(){ return NextResponse.json({ events: EVENTS.map(e=>({ ...e, rsvps:Array.from(e.rsvps) })) }); }
export async function POST(req: Request){
  const { eventId, userId, going } = await req.json();
  const ev = EVENTS.find(e=>e.id===eventId);
  if(!ev) return NextResponse.json({ ok:false }, { status:404 });
  if(going) ev.rsvps.add(userId); else ev.rsvps.delete(userId);
  return NextResponse.json({ ok:true, rsvps:Array.from(ev.rsvps) });
}
