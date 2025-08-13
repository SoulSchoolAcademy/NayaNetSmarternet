'use client';
export default function IntegrationGate({
  enabled, children, placeholder = 'This feature will unlock soon ✨'
}: { enabled: boolean; children: React.ReactNode; placeholder?: string; }) {
  if (!enabled) return <div className="rounded-xl border p-6 opacity-70">{placeholder}</div>;
  return <>{children}</>;
}
