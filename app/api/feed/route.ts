import { NextResponse } from 'next/server';

let FEED = Array.from({ length: 100 }, (_, i) => ({
  id: `post_${i+1}`,
  author: `user_${(i%7)+1}`,
  body: `Demo post #${i+1}`,
  likes: 0,
  comments: [] as { id: string; author: string; body: string }[],
  createdAt: Date.now() - i * 3600_000
}));

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page') ?? 1);
  const pageSize = Number(searchParams.get('pageSize') ?? 10);
  const start = (page - 1) * pageSize;
  const items = FEED.slice(start, start + pageSize);
  return NextResponse.json({ items, page, pageSize, total: FEED.length });
}

export async function POST(req: Request) {
  const { type, postId, body } = await req.json();
  if (type === 'like') {
    const post = FEED.find(p => p.id === postId);
    if (post) post.likes++;
    return NextResponse.json({ ok: true, likes: post?.likes ?? 0 });
  }
  if (type === 'comment') {
    const post = FEED.find(p => p.id === postId);
    if (!post) return NextResponse.json({ ok: false }, { status: 404 });
    post.comments.push({ id: `c_${Date.now()}`, author: 'you', body });
    return NextResponse.json({ ok: true, comments: post.comments });
  }
  return NextResponse.json({ ok: false }, { status: 400 });
}
