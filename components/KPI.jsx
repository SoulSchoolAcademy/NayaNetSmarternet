export default function KPI({ title, value, hint }){
  return (
    <div className="card">
      <div className="text-sm text-[color:var(--muted)]">{title}</div>
      <div className="kpi mt-1">{value}</div>
      {hint && <div className="text-xs text-[color:var(--muted)] mt-1">{hint}</div>}
    </div>
  )
}
