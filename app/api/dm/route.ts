import { NextResponse } from 'next/server';
type Msg = { id: string; from: string; to: string; body: string; ts: number };
let MESSAGES: Msg[] = [];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const a = searchParams.get('a')!, b = searchParams.get('b')!;
  const thread = MESSAGES.filter(m => (m.from===a && m.to===b) || (m.from===b && m.to===a))
                         .sort((x,y)=>x.ts-y.ts);
  return NextResponse.json({ items: thread });
}
export async function POST(req: Request) {
  const { from, to, body } = await req.json();
  const msg = { id:`m_${Date.now()}`, from, to, body, ts: Date.now() };
  MESSAGES.push(msg);
  return NextResponse.json({ ok:true, item: msg });
}
