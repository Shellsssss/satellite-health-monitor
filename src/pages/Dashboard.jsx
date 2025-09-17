import React from "react";
import OverviewCards from "../components/cards/OverviewCards.jsx";
import SatelliteCard from "../components/cards/SatelliteCard.jsx";
import { satellites, news } from "../data/mockData.js";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Dashboard() {
return (
<div className="space-y-6">
<OverviewCards />
  <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
    <div className="xl:col-span-2 space-y-4">
      <div className="text-lg font-semibold">Satellites</div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {satellites.map((s) => (
          <SatelliteCard key={s.id} sat={s} />
        ))}
      </div>
    </div>

    <div className="space-y-4">
      <div className="bg-[#0f172a]/60 rounded-2xl border border-white/10 p-4">
        <div className="font-semibold mb-3">Latest Space News</div>
        <div className="space-y-2">
          {news.map((n) => (
            <a
              key={n.id}
              href={n.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 p-2 rounded-lg hover:bg-white/5 transition"
            >
              <span className="mt-1 text-accent-blue"><FaExternalLinkAlt /></span>
              <span className="text-sm">{n.title} → Read More</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
);
}