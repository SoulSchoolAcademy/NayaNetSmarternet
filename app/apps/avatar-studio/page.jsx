"use client";
import { useEffect, useRef, useState } from "react";

export default function AvatarStudio(){
  const [text, setText] = useState("Hello SmartNet! Let’s create in any language.");
  const [voices, setVoices] = useState([]);
  const [voiceIndex, setVoiceIndex] = useState(0);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [avatar, setAvatar] = useState("/avatar.svg");
  const fileRef = useRef(null);

  useEffect(() => {
    const load = () => setVoices(window.speechSynthesis.getVoices());
    load();
    window.speechSynthesis.onvoiceschanged = load;
  }, []);

  const speak = () => {
    if (!text.trim()) return;
    const u = new SpeechSynthesisUtterance(text);
    if (voices[voiceIndex]) u.voice = voices[voiceIndex];
    u.rate = rate;
    u.pitch = pitch;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };

  const onPick = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    setAvatar(url);
  };

  return (
    <section className="grid gap-6 max-w-4xl">
      <h1 className="text-2xl font-extrabold">Avatar Studio</h1>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="card grid gap-3">
          <div className="flex items-center gap-3">
            <img src={avatar} alt="avatar" className="w-16 h-16 rounded-full border border-[color:var(--border)]"/>
            <button className="btn btn-secondary" onClick={()=>fileRef.current?.click()}>Upload Avatar</button>
            <input ref={fileRef} type="file" accept="image/*" hidden onChange={onPick}/>
          </div>
          <textarea className="input" rows={6} value={text} onChange={e=>setText(e.target.value)} />
          <div className="grid sm:grid-cols-3 gap-3">
            <select className="input" value={voiceIndex} onChange={e=>setVoiceIndex(Number(e.target.value))}>
              {voices.map((v,i)=><option key={i} value={i}>{v.lang} • {v.name}</option>)}
            </select>
            <label className="grid gap-1 text-sm">
              <span className="text-[color:var(--muted)]">Rate: {rate.toFixed(1)}</span>
              <input type="range" min="0.5" max="2" step="0.1" value={rate} onChange={e=>setRate(Number(e.target.value))}/>
            </label>
            <label className="grid gap-1 text-sm">
              <span className="text-[color:var(--muted)]">Pitch: {pitch.toFixed(1)}</span>
              <input type="range" min="0.5" max="2" step="0.1" value={pitch} onChange={e=>setPitch(Number(e.target.value))}/>
            </label>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-primary" onClick={speak}>Speak</button>
            <button className="btn btn-secondary" onClick={()=>setText("Hola, SmartNet. Creamos en cualquier idioma.")}>Spanish demo</button>
          </div>
          <div className="text-sm text-[color:var(--muted)]">Note: uses your browser’s built-in voices. We can later swap to a studio-quality TTS API.</div>
        </div>

        <div className="card">
          <div className="font-bold mb-2">Preview</div>
          <div className="flex items-center gap-3">
            <img src={avatar} className="w-24 h-24 rounded-full border border-[color:var(--border)]" alt="avatar"/>
            <div>
              <div className="font-semibold">Speaking Avatar</div>
              <div className="text-sm text-[color:var(--muted)]">Language: {voices[voiceIndex]?.lang || "auto"}</div>
            </div>
          </div>
          <div className="text-sm text-[color:var(--muted)] mt-3">Lip-sync/video generation can be added next (plugins or API).</div>
        </div>
      </div>
    </section>
  );
}
