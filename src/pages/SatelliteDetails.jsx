import React from "react";
import { useParams } from "react-router-dom";
import { satelliteTelemetry, satellites } from "../data/mockData.js";
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from "recharts";

export default function SatelliteDetails() {
const { id } = useParams();
const sat = satellites.find((s) => s.id === id) || { name: `Satellite-${id}`, status: "normal" };
const data = satelliteTelemetry(id);

return (
<div className="space-y-6">
<div className="flex items-center gap-3">
<div className={`w-3 h-3 rounded-full ${           sat.status === "normal" ? "bg-green-400" : sat.status === "warning" ? "bg-yellow-400" : "bg-red-400"         }`} />
<div className="text-xl font-semibold">{sat.name} — Detailed Telemetry</div>
</div>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
    <div className="bg-[#0f172a]/60 rounded-2xl border border-white/10 p-4">
      <div className="font-semibold mb-2">Voltage vs Baseline</div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip contentStyle={{ background: "#111827", border: "1px solid #374151" }} />
            <Line type="monotone" dataKey="battery" stroke="#34d399" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="solar" stroke="#6366F1" strokeWidth={1} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="bg-[#0f172a]/60 rounded-2xl border border-white/10 p-4">
      <div className="font-semibold mb-2">Thermal Deviations</div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip contentStyle={{ background: "#111827", border: "1px solid #374151" }} />
            <Bar dataKey="thermal" fill="#f59e0b" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="bg-[#0f172a]/60 rounded-2xl border border-white/10 p-4">
      <div className="font-semibold mb-2">Power Generation</div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip contentStyle={{ background: "#111827", border: "1px solid #374151" }} />
            <Area type="monotone" dataKey="solar" stroke="#60a5fa" fill="#60a5fa33" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>

  <div className="bg-white/5 rounded-2xl border border-white/10 p-4">
    <div className="font-semibold mb-2">Possible Causes & Recommendations</div>
    <ul className="list-disc list-inside text-sm text-white/90 space-y-1">
      <li>Check battery cell health; consider replacing degraded modules within 2 weeks.</li>
      <li>Monitor thermal control loops during eclipse; adjust radiator setpoints.</li>
      <li>Compare with historical baseline during similar orbital conditions.</li>
    </ul>
  </div>
</div>
);
}