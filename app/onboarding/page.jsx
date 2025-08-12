import Link from "next/link";

export default function Page(){
  return (
    <div className="card max-w-2xl">
      <h1 className="text-3xl font-extrabold mb-3">Onboarding</h1>
      <ol className="text-[color:var(--muted)] list-decimal ml-6 space-y-2">
        <li>Watch the intro (embed later)</li>
        <li>Connect payout method</li>
        <li>Copy your affiliate link</li>
        <li>Complete your profile</li>
        <li>Tour the dashboard</li>
      </ol>
      <Link href="/dashboard" className="btn btn-primary mt-4">Finish • Go to Dashboard</Link>
    </div>
  )
}
