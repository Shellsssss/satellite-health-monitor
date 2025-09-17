import React from "react";
import {
LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
BarChart, Bar, ScatterChart, Scatter, ZAxis
} from "recharts";
import { overviewLine, anomalyBars, riskScatter } from "../../data/mockData.js";

export default function OverviewCards() {
return (
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="bg-[#0f172a]/60 rounded-2xl border border-white/10 p-4 shadow-glow">
<div className="font-semibold mb-2">Fleet Health Index</div>
<div className="h-40">
<ResponsiveContainer width="100%" height="100%">
<LineChart data={overviewLine}>
<CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
<XAxis dataKey="name" stroke="#9ca3af" />
<YAxis stroke="#9ca3af" />
<Tooltip contentStyle={{ background: "#111827", border: "1px solid #374151" }} />
<Line type="monotone" dataKey="health" stroke="#60a5fa" strokeWidth={2} dot={false} />
</LineChart>
</ResponsiveContainer>
</div>
</div>
  <div className="bg-[#0f172a]/60 rounded-2xl border border-white/10 p-4 shadow-glow">
    <div className="font-semibold mb-2">Anomaly Frequency Trend</div>
    <div className="h-40">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={anomalyBars}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
          <XAxis dataKey="name" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip contentStyle={{ background: "#111827", border: "1px solid #374151" }} />
          <Bar dataKey="anomalies" fill="#6366F1" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>

  <div className="bg-[#0f172a]/60 rounded-2xl border border-white/10 p-4 shadow-glow">
    <div className="font-semibold mb-2">Risk Map</div>
    <div className="h-40">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
          <XAxis dataKey="x" stroke="#9ca3af" />
          <YAxis dataKey="y" stroke="#9ca3af" />
          <ZAxis dataKey="risk" range={[60, 400]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} contentStyle={{ background: "#111827", border: "1px solid #374151" }} />
          <Scatter data={riskScatter} fill="#22d3ee" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>
);
}