export default function Badge({ children, tone="default" }) {
  const tones = {
    default: "badge",
    success: "badge bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
    warning: "badge bg-amber-500/15 text-amber-300 border-amber-500/20",
    danger:  "badge bg-rose-500/15 text-rose-300 border-rose-500/20"
  };
  return <span className={tones[tone]}>{children}</span>;
}
