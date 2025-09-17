import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useState, useEffect } from "react";
import { FaSatellite } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login() {
const { user, login } = useAuth();
const [email, setEmail] = useState("");
const [pass, setPass] = useState("");
const navigate = useNavigate();

useEffect(() => {
if (user) navigate("/app", { replace: true });
}, [user]);

const onSubmit = (e) => {
e.preventDefault();
login(email, pass);
navigate("/app");
};

// Generate star layers
const stars = new Array(120).fill(0);

return (
<div className="relative min-h-screen flex items-center justify-center overflow-hidden">
<div className="starfield">
<div className="layer" />
<div className="layer" />
<div className="layer" />
{stars.map((_, i) => (
<span
key={i}
className="layer"
style={{
top: Math.random() * 100 + "%",
left: Math.random() * 100 + "%",
animationDelay: `${Math.random() * 20}s`,
}}
/>
))}
</div>
  <div className="relative w-[90%] max-w-[350px] bg-[#1C2233]/90 border border-white/10 rounded-2xl shadow-xl p-6">
    <div className="flex flex-col items-center mb-4">
      <div className="p-3 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple shadow-glow mb-2 animate-float">
        <FaSatellite className="text-white text-xl" />
      </div>
      <h1 className="text-center font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-purple">
        Satellite Health Monitor
      </h1>
    </div>
    <form onSubmit={onSubmit} className="space-y-3">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-accent-blue"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-accent-purple"
        required
      />
      <button
        type="submit"
        className="w-full mt-2 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-glow transition"
      >
        Login
      </button>
    </form>
    <div className="text-center text-sm text-white/60 mt-3">
      <button className="hover:text-white/80">Forgot password?</button>
    </div>
  </div>
</div>
);
}