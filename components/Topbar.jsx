export default function Topbar(){
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-black/30 border-b border-[color:var(--border)]">
      <div className="container py-3 flex items-center gap-3">
        <img
          src="/brand/smartnet.svg"
          onError={(e)=>{ e.currentTarget.src="/logo.svg"; }}
          alt="SmartNet"
          className="h-6 w-auto"
        />
        <div className="badge">You’re hired • Ambassador mode</div>
        <div className="flex-1"></div>
        <div className="text-[color:var(--muted)]">Shawn</div>
        <img src="/avatar.svg" alt="avatar" className="w-8 h-8 rounded-full border border-[color:var(--border)] bg-[#121a31] p-1"/>
      </div>
    </header>
  );
}
