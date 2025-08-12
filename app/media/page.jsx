const assets = [
  { title:'Soul School • Lesson 1', src:'/posters/lesson-1.jpg' },
  { title:'Soul School • Lesson 2', src:'/posters/lesson-2.jpg' },
  { title:'SmartNet • Intro', src:'/posters/smartnet-intro.jpg' },
];

export default function Page(){
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {assets.map((a,i)=>(
        <div key={i} className="card">
          <div className="font-semibold mb-2">{a.title}</div>
          <img src={a.src} alt={a.title} className="w-full rounded-xl border border-[color:var(--border)]"/>
        </div>
      ))}
    </section>
  )
}

