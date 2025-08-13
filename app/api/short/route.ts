import { NextResponse } from 'next/server';
let MAP: Record<string, string> = {}; // slug -> target

export async function POST(req: Request){
  const { slug, target } = await req.json();
  if(!slug || !target) return NextResponse.json({ ok:false }, { status:400 });
  MAP[slug] = target;
  return NextResponse.json({ ok:true, slug, target, link:`/go/${slug}` });
}
