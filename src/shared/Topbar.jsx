import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { FaBars } from "react-icons/fa6";
import { FaSatellite } from "react-icons/fa";
import { useState } from "react";

export default function Topbar({ onLogoClick }) {
const { user, logout } = useAuth();
const [open, setOpen] = useState(false);

return (
<header className="sticky top-0 z-40 bg-[#111827]/95 backdrop-blur border-b border-white/5">
<div className="max-w-screen-2xl mx-auto px-4 py-3 flex items-center justify-between">
<button onClick={onLogoClick} className="flex items-center gap-3 group">
<div className="p-2 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple shadow-glow">
<FaSatellite className="text-white" />
</div>
<div className="font-extrabold text-lg bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-purple group-hover:opacity-90">
Satellite Health Monitor
</div>
</button>
<div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-3 rounded-full px-2 py-1 hover:bg-white/5 transition"
      >
        <img
          alt="avatar"
          className="w-9 h-9 rounded-full ring-2 ring-white/10"
          src={`https://api.dicebear.com/9.x/bottts/svg?seed=${user?.name || "user"}`}
        />
        <span className="hidden sm:block">{user?.name}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-[#1f2937] border border-white/10 rounded-xl overflow-hidden shadow-xl">
          <button className="w-full text-left px-4 py-2 hover:bg-white/5">Settings</button>
          <button
            className="w-full text-left px-4 py-2 hover:bg-white/5"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  </div>
</header>
);
}