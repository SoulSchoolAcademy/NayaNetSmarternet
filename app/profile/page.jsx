export default function Page(){
  return (
    <div className="card max-w-3xl">
      <h1 className="text-3xl font-extrabold mb-3">Your Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6">
        <img src="/avatar.svg" alt="avatar" className="w-28 h-28 rounded-full border border-[color:var(--border)] bg-[#121a31] p-2"/>
        <div className="grid gap-3">
          <input className="input" placeholder="Display name" defaultValue="Shawn" />
          <input className="input" placeholder="Email" defaultValue="shawn@smartnet.life" />
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  )
}

