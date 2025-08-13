"use client";
import { useState } from "react";
export function Tabs({ tabs, initial=0, onChange, children }) {
  const [i,setI] = useState(initial);
  const select = (idx)=>{ setI(idx); onChange?.(idx); };
  return (
    <div className="grid gap-3">
      <div className="flex gap-2">
        {tabs.map((t,idx)=>(
          <button key={t} onClick={()=>select(idx)}
            className={`px-4 py-2 rounded-xl border ${i===idx?"bg-[#121a31] border-[color:var(--brand)]":"border-[color:var(--border)] text-[color:var(--muted)] hover:bg-[#121a31]"}`}>
            {t}
          </button>
        ))}
      </div>
      <div>{Array.isArray(children) ? children[i] : children}</div>
    </div>
  );
}
