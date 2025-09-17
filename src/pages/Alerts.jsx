import React from "react";
import { useNavigate } from "react-router-dom";

const alerts = [
{
id: 1,
satId: "2",
severity: "amber",
title: "Satellite-2 → Voltage drop detected.",
desc: "Possible battery degradation. Suggested: replace cells within 2 weeks.",
},
{
id: 2,
satId: "5",
severity: "red",
title: "Satellite-5 → Thermal fluctuations detected in eclipse phase.",
desc: "Possible radiator malfunction. Suggested: adjust thermal control system.",
},
];

export default function Alerts() {
const navigate = useNavigate();

return (
<div className="space-y-4">
<div className="text-xl font-semibold">Active Alerts</div>
  <div className="space-y-3">
    {alerts.map((a) => (
      <div
        key={a.id}
        onClick={() => navigate(`/app/satellite/${a.satId}`)}
        className={`cursor-pointer rounded-2xl p-4 border hover:shadow-glow transition ${
          a.severity === "red"
            ? "bg-red-900/30 border-red-500/30"
            : "bg-amber-900/30 border-amber-500/30"
        }`}
      >
        <div className="text-lg font-semibold">⚠️ {a.title}</div>
        <div className="text-sm text-white/80 mt-1">{a.desc}</div>
      </div>
    ))}
  </div>
</div>
);
}