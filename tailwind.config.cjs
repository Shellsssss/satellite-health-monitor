/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
darkMode: "class",
theme: {
extend: {
colors: {
navy: {
900: "#0B0E16",
800: "#1A1D29",
700: "#1C2233",
},
accent: {
blue: "#3B82F6",
purple: "#6366F1",
},
textgray: "#D1D5DB",
},
boxShadow: {
glow: "0 0 20px rgba(99, 102, 241, 0.25)",
},
keyframes: {
float: {
"0%, 100%": { transform: "translateY(0)" },
"50%": { transform: "translateY(-4px)" },
},
star: {
"0%": { opacity: "0.1", transform: "translateY(0)" },
"50%": { opacity: "1" },
"100%": { opacity: "0.1", transform: "translateY(-1000px)" },
},
slide: {
"0%": { transform: "translateX(-100%)" },
"100%": { transform: "translateX(0%)" },
},
},
animation: {
float: "float 6s ease-in-out infinite",
stars: "star 30s linear infinite",
slide: "slide 200ms ease-out",
},
},
},
plugins: [],
};