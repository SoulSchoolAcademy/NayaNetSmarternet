import { NextResponse } from 'next/server';
let QUEUE = [
  { id:'n1', type:'like', text:'Alex liked your post', ts: Date.now()-60000 },
  { id:'n2', type:'comment', text:'Jess commented: 🔥', ts: Date.now()-120000 }
];
export async function GET(){ return NextResponse.json({ items: QUEUE }); }
export async function POST(){ /* mark read */ QUEUE = []; return NextResponse.json({ ok:true }); }
