export default function SmartVault(){
  const balance = 208.30;
  const tx = [
    {id:"PAYOUT-001", amount:42.50, when:"2d ago"},
    {id:"PAYOUT-000", amount:165.80, when:"6d ago"},
  ];
  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-extrabold">SmartVault</h1>
      <div className="card">
        <div className="text-sm text-[color:var(--muted)]">Viral Earnings</div>
        <div className="text-4xl font-extrabold mt-1">${balance.toFixed(2)}</div>
      </div>
      <div className="grid gap-2">
        {tx.map(t=>(
          <div key={t.id} className="card flex items-center justify-between">
            <div>
              <div className="font-semibold">{t.id}</div>
              <div className="text-sm text-[color:var(--muted)]">{t.when}</div>
            </div>
            <div className="font-extrabold">${t.amount.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
