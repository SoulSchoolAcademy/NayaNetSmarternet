import { NextResponse } from 'next/server';
export const runtime = 'edge'; // ultrafast, no file writes in mock

export async function POST(req: Request) {
  const contentType = req.headers.get('content-type') || '';
  if (!contentType.includes('multipart/form-data')) {
    return NextResponse.json({ ok:false, error:'multipart required' }, { status:400 });
  }
  // We’re not storing; just pretend and return a URL shell would use.
  const fakeUrl = `https://cdn.smartnet.fake/${Date.now()}.jpg`;
  return NextResponse.json({ ok:true, url: fakeUrl });
}
