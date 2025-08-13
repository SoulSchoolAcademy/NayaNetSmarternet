"use client";
import { useEffect, useRef } from "react";

export default function LeaderRing({
  value = 72,          // 0..100
  size = 140,
  stroke = 14,
  label = "Score",
  sublabel = "+12%",
  color = "#7c5cff"
}) {
  const radius = (size - stroke) / 2;
  const C = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, value));
  const targetOffset = C * (1 - clamped / 100);

  const fgRef = useRef(null);

  useEffect(() => {
    // animate strokeDashoffset
    const el = fgRef.current;
    if (!el) return;
    // start at full offset then animate down
    el.style.transition = "none";
    el.style.strokeDashoffset = `${C}`;
    requestAnimationFrame(() => {
      el.style.transition = "stroke-dashoffset 900ms cubic-bezier(.2,.8,.2,1)";
      el.style.strokeDashoffset = `${targetOffset}`;
    });
  }, [C, targetOffset]);

  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="block">
        {/* subtle glow */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {/* track */}
        <circle
          cx={size/2} cy={size/2} r={radius}
          stroke="rgba(255,255,255,.08)"
          strokeWidth={stroke}
          fill="none"
        />
        {/* progress */}
        <circle
          ref={fgRef}
          cx={size/2} cy={size/2} r={radius}
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={C}
          strokeDashoffset={C}
          style={{ filter: "url(#glow)" }}
          transform={`rotate(-90 ${size/2} ${size/2})`}
        />
      </svg>

      {/* center content */}
      <div className="absolute inset-0 grid place-items-center text-center select-none">
        <div className="leading-none text-3xl font-extrabold">{Math.round(clamped)}</div>
        <div className="text-xs text-[color:var(--muted)]">{label}</div>
        {sublabel && <div className="text-[10px] mt-0.5" style={{ color }}>{sublabel}</div>}
      </div>
    </div>
  );
}
