import Link from "next/link";
import AppIcon from "../../src/icons/AppIcon";

const APPS = [
  { key:"ShopSmart",  href:"/apps/shop",   title:"ShopSmart",  blurb:"Search anything or ask Naya." },
  { key:"SmartTalk",  href:"/apps/talk",   title:"SmartTalk",  blurb:"Your social/chat feed." },
  { key:"SmartSync",  href:"/apps/sync",   title:"SmartSync",  blurb:"Find and connect with people." },
  { key:"SmartFeed",  href:"/apps/feed",   title:"SmartFeed",  blurb:"Topic feeds you care about." },
  { key:"SmartHub",   href:"/apps/hub",    title:"SmartHub",   blurb:"Back office & analytics." },
  { key:"SmartMail",  href:"/apps/mail",   title:"SmartMail",  blurb:"Email/SNC messages with AI." },
  { key:"SmartSounds",href:"/apps/sounds", title:"SmartSounds",blurb:"Biohacking + Spotify API." },
  { key:"SmartNotes", href:"/apps/notes",  title:"SmartNotes", blurb:"Speak to save notes." },
  { key:"SmartWorld", href:"/apps/world",  title:"SmartWorld", blurb:"Local + global communities." },
  { key:"SmartVault", href:"/apps/vault",  title:"SmartVault", blurb:"Earnings & payouts." },
  { key:"SmartCoin",  href:"/apps/coin",   title:"SmartCoin",  blurb:"Rewards & boosters." },
  { key:"SmartAsk",   href:"/apps/ask",    title:"SmartAsk",   blurb:"Ask Naya. Visual answers." },

  // NEW
  { key:"AvatarStudio",   href:"/apps/avatar-studio", title:"Avatar Studio",   blurb:"Talking avatars in any language." },
  { key:"ViralOptimizer", href:"/apps/viral",         title:"Viral Optimizer", blurb:"Share text + UTM links in 1 click." },
  { key:"VisualAnswers",  href:"/apps/visual",        title:"Nine Visual Answers", blurb:"Auto charts for your question." }
];

export default function AppsPage(){
  return (
    <section className="grid gap-6">
      <h1 className="text-3xl font-extrabold">Divine 12 + Studios</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {APPS.map(a=>(
          <Link key={a.key} href={a.href} className="card hover:opacity-95 transition">
            <div className="flex items-start gap-3">
              <AppIcon name={a.key} />
              <div>
                <div className="font-bold">{a.title}</div>
                <div className="text-[color:var(--muted)] text-sm">{a.blurb}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
