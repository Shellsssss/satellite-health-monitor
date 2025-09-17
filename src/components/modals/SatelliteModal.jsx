import React from "react";
import { AreaChart, Area, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import { satelliteTelemetry } from "../../data/mockData.js";
import { IoClose } from "react-icons/io5";

export default function SatelliteModal({ sat, open, onClose }) {
if (!open) return null;
const data = satelliteTelemetry(sat.id);

const indicator = sat.status === "normal" ? "Normal" : sat.status === "warning" ? "Warning" : "Critical";
const color =
sat.status === "normal" ? "#34d399" : sat.status === "warning" ? "#f59e0b" : "#ef4444";

return (
<div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-3">
<div className="w-full max-w-5xl bg-[#111827] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
<div className="p-4 flex items-center justify-between border-b border-white/10">
<div className="font-semibold">{sat.name} — Details</div>
<button onClick={onClose} className="p-2 hover:bg-white/10 rounded-xl">
<IoClose className="text-xl" />
</button>
</div>
    <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-white/5 rounded-xl p-3">
        <div className="text-sm mb-2">Battery Voltage</div>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip contentStyle={{ background: "#111827", border: "1px solid #374151" }} />
              <Line type="monotone" dataKey="battery" stroke="#34d399" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-3">
        <div className="text-sm mb-2">Solar Panel Output</div>
        <div className="h-40">
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

      <div className="bg-white/5 rounded-xl p-3">
        <div className="text-sm mb-2">Thermal State</div>
        <div className="h-40">
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

      <div className="bg-white/5 rounded-xl p-3">
        <div className="text-sm mb-2">Communications Signal</div>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip contentStyle={{ background: "#111827", border: "1px solid #374151" }} />
              <Legend />
              <Line type="monotone" dataKey="comms" stroke="#a78bfa" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>

    <div className="px-4 pb-4">
      <div className="text-sm">
        Status Indicator: <span style={{ color }}>{indicator}</span>
      </div>
    </div>
  </div>
</div>
);
}