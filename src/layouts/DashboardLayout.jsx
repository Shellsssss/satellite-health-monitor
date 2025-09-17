import React from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../shared/Sidebar.jsx";
import Topbar from "../shared/Topbar.jsx";
import ChatWidget from "../shared/ChatWidget.jsx";
import { useState } from "react";

export default function DashboardLayout() {
const [collapsed, setCollapsed] = useState(false);
const location = useLocation();
const navigate = useNavigate();

return (
<div className="min-h-screen bg-gradient-to-b from-navy-900 to-navy-800 text-textgray">
<Topbar onLogoClick={() => navigate("/app")} />
<div className="flex">
<Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
<main className="flex-1 p-5 lg:p-6 overflow-y-auto">
<Outlet key={location.pathname} />
</main>
</div>
<ChatWidget />
</div>
);
}