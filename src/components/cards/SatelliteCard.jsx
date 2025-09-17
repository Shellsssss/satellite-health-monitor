import React from "react";
import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";
import SatelliteModal from "../modals/SatelliteModal.jsx";

export default function SatelliteCard({ sat }) {
const [open, setOpen] = useState(false);
const mini = Array.from({ length: 10 }, (_, i) => ({ t: i, v: 60 + Math.round(Math.random() * 20 - 10) }));
const dot =
sat.status === "normal" ? "bg-green-400" : sat.status === "warning" ? "bg-yellow-400" : "bg-red-400";

return (
<>
<div
className="bg-[#0f172a]/60 rounded-2xl border border-white/10 p-4 hover:shadow-glow transition cursor-pointer"
onClick={() => setOpen(true)}
>
<div className="flex items-center justify-between mb-2">
<div className="font-semibold">{sat.name}</div>
<div className={`w-3 h-3 rounded-full ${dot}`} />
</div>
<div className="h-24">
<ResponsiveContainer width="100%" height="100%">
<AreaChart data={mini}>
<XAxis dataKey="t" hide />
<YAxis hide />
<Tooltip contentStyle={{ background: "#111827", border: "1px solid #374151" }} />
<Area type="monotone" dataKey="v" stroke="#60a5fa" fill="#60a5fa33" strokeWidth={2} />
</AreaChart>
</ResponsiveContainer>
</div>
<div className="mt-2 text-xs text-white/60">Tap for details</div>
<div className="mt-1">
<Link
to={`/app/satellite/${sat.id}`}
onClick={(e) => e.stopPropagation()}
className="text-accent-blue hover:underline text-sm"
>
Open details page
</Link>
</div>
</div>
  <SatelliteModal sat={sat} open={open} onClose={() => setOpen(false)} />
</>
);
}