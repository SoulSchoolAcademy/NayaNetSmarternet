export default function Page(){
  return (
    <section className="grid gap-4">
      <div className="card">
        <div className="font-bold mb-2">Your Affiliate Link</div>
        <div className="flex items-center gap-3 bg-[#121a31] border border-[color:var(--border)] rounded-2xl px-3 py-2">
          <code>https://smartnet.life/join?ref=YOURCODE</code>
          <button className="btn btn-primary">Copy</button>
        </div>
      </div>
      <div className="card">
        <div className="font-bold">Payouts</div>
        <div className="text-[color:var(--muted)] text-sm">Connect Stripe / crypto later. UI is ready.</div>
      </div>
    </section>
  )
}
