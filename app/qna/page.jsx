export default function Page(){
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      <div className="card">
        <div className="font-bold mb-2">Ask</div>
        <div className="grid gap-3">
          <input className="input" placeholder="Ask anything..." />
          <button className="btn btn-primary">Send</button>
        </div>
      </div>
      <div className="card">
        <div className="font-bold mb-2">Answer</div>
        <div className="text-[color:var(--muted)] text-sm">This will render visual responses (charts/images). Placeholder now.</div>
      </div>
    </section>
  )
}
