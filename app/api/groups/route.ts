import { NextResponse } from 'next/server';
type Group = { id: string; name: string; members: Set<string> };
const GROUPS: Record<string, Group> = {
  g1: { id: 'g1', name: 'Creators', members: new Set() },
  g2: { id: 'g2', name: 'Analysts', members: new Set() }
};

export async function GET() {
  return NextResponse.json({ groups: Object.values(GROUPS).map(g => ({ ...g, members: Array.from(g.members) })) });
}
export async function POST(req: Request) {
  const { action, groupId, userId } = await req.json();
  const g = GROUPS[groupId];
  if (!g) return NextResponse.json({ ok:false }, { status:404 });
  if (action === 'join') g.members.add(userId);
  if (action === 'leave') g.members.delete(userId);
  return NextResponse.json({ ok:true, group: { ...g, members: Array.from(g.members) } });
}
