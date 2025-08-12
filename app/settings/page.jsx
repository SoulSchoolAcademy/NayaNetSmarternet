export default function Page(){
  return (
    <div className="card max-w-3xl">
      <h1 className="text-3xl font-extrabold mb-3">Settings</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card">
          <div className="font-bold">Notifications</div>
          <label className="block text-sm mt-2"><input type="checkbox" defaultChecked className="mr-2"/>Email updates</label>
          <label className="block text-sm mt-2"><input type="checkbox" className="mr-2"/>Push alerts</label>
        </div>
        <div className="card">
          <div className="font-bold">Security</div>
          <button className="btn btn-secondary mt-2">Reset password</button>
        </div>
      </div>
    </div>
  )
}
