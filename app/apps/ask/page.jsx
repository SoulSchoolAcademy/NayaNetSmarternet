import Link from "next/link";

export default function SmartAsk(){
  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-extrabold">SmartAsk</h1>
      <div className="card">
        <div className="text-sm text-[color:var(--muted)]">Ask Naya for answers, summaries, or visuals.</div>
        <Link href="/qna" className="btn btn-primary mt-2">Open Q&A</Link>
      </div>
    </section>
  );
}
