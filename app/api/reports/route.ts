import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

const ROWS = Array.from({length:500}, (_,i)=>({
  id: randomUUID(),
  user: `user_${(i%50)+1}`,
  country: ['CA','US','UK','AU','DE'][i%5],
  clicks: Math.floor(Math.random()*5000),
  ctr: Number((Math.random()*0.2).toFixed(3)),
  revenue: Number((Math.random()*1000).toFixed(2))
}));

export async function GET(req: Request) {
  const sp = new URL(req.url).searchParams;
  const qUser = sp.get('user') ?? '';
  const country = sp.get('country') ?? '';
  const sort = sp.get('sort') ?? 'revenue:desc';
  const [col, dir] = sort.split(':');

  let data = ROWS.filter(r =>
    (!qUser || r.user.includes(qUser)) &&
    (!country || r.country === country)
  );
  data.sort((a:any,b:any)=> dir==='desc' ? (b[col]-a[col]) : (a[col]-b[col]));
  const page = Number(sp.get('page') ?? 1), pageSize = Number(sp.get('pageSize') ?? 25);
  const start = (page-1)*pageSize;
  return NextResponse.json({ items: data.slice(start,start+pageSize), total: data.length, page, pageSize });
}
