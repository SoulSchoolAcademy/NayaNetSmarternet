import Link from "next/link";

export default function Topbar(){
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-black/30 border-b border-[color:var(--border)]">
      <div className="container py-3 flex items-center gap-3">
        <img src="/brand/smartnet.svg" onError={(e)=>{ e.currentTarget.src="/logo.svg"; }} alt="SmartNet" className="h-6 w-auto"/>
        <div className="flex-1" />
        <Link href="/"   className="btn btn-secondary">Social</Link>
        <Link href="/hub" className="btn btn-primary">SmartHub</Link>
      </div>
    </header>
  );
}
