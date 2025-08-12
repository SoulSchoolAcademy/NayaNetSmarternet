"use client";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Chart({ data = [] }){
  return (
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7c5cff" stopOpacity={1} />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="x" stroke="#324163" />
          <YAxis stroke="#324163" />
          <Tooltip />
          <Area type="monotone" dataKey="y" stroke="url(#g)" fill="url(#g)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
