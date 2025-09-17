import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Alerts from "./pages/Alerts.jsx";
import ExternalLinks from "./pages/ExternalLinks.jsx";
import SatelliteDetails from "./pages/SatelliteDetails.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";

function ProtectedRoute({ children }) {
const { user } = useAuth();
if (!user) return <Navigate to="/login" replace />;
return children;
}

export default function App() {
return (
<AuthProvider>
<Routes>
<Route path="/login" element={<Login />} />
<Route
path="/app"
element={
<ProtectedRoute>
<DashboardLayout />
</ProtectedRoute>
}
>
<Route index element={<Dashboard />} />
<Route path="alerts" element={<Alerts />} />
<Route path="links" element={<ExternalLinks />} />
<Route path="satellite/:id" element={<SatelliteDetails />} />
</Route>
<Route path="*" element={<Navigate to="/login" replace />} />
</Routes>
</AuthProvider>
);
}