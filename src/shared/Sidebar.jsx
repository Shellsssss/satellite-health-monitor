import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRegBell, FaExternalLinkAlt, FaNewspaper, FaSatelliteDish, FaChartLine } from "react-icons/fa";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import clsx from "clsx";
// import { FaChartLine } from "react-icons/fa";

const items = [
{ to: "/app", label: "Dashboard", icon: <FaChartLine /> },
{ to: "/app/alerts", label: "Alerts", icon: <FaRegBell /> },
{ to: "/app/links", label: "External Links", icon: <FaExternalLinkAlt /> },
];

export default function Sidebar({ collapsed, setCollapsed }) {
const { pathname } = useLocation();

return (
<aside
className={clsx(
"relative h-[calc(100vh-64px)] bg-[#1F2937] border-r border-white/5 transition-all duration-200",
collapsed ? "w-16" : "w-64"
)}
>
<button
onClick={() => setCollapsed(!collapsed)}
className="absolute -right-3 top-4 z-10 bg-[#1F2937] border border-white/10 rounded-full p-1 hover:bg-white/5"
aria-label="Toggle sidebar"
>
{collapsed ? <IoChevronForwardOutline /> : <IoChevronBackOutline />}
</button>
  <nav className="p-3 space-y-2">
    {items.map((item) => {
      const active = pathname === item.to;
      return (
        <Link
          key={item.to}
          to={item.to}
          className={clsx(
            "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent-blue/10 hover:text-white transition",
            active ? "bg-accent-blue/20 text-white" : "text-textgray"
          )}
        >
          <span className="text-lg">{item.icon}</span>
          {!collapsed && <span>{item.label}</span>}
        </Link>
      );
    })}
    {!collapsed && (
      <div className="mt-4 text-xs text-white/40">
        Sections:
        <div className="mt-2 flex items-center gap-2 text-white/60">
          <FaSatelliteDish /> Satellites
        </div>
        <div className="flex items-center gap-2 text-white/60">
          <FaNewspaper /> News
        </div>
      </div>
    )}
  </nav>
</aside>
);
}