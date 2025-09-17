export const overviewLine = [
{ name: "Jan", health: 78 },
{ name: "Feb", health: 80 },
{ name: "Mar", health: 82 },
{ name: "Apr", health: 79 },
{ name: "May", health: 85 },
{ name: "Jun", health: 88 },
];

export const anomalyBars = [
{ name: "Jan", anomalies: 6 },
{ name: "Feb", anomalies: 5 },
{ name: "Mar", anomalies: 8 },
{ name: "Apr", anomalies: 4 },
{ name: "May", anomalies: 7 },
{ name: "Jun", anomalies: 3 },
];

export const riskScatter = [
{ x: 10, y: 80, risk: 2, id: "Sat-1" },
{ x: 40, y: 50, risk: 5, id: "Sat-2" },
{ x: 70, y: 60, risk: 3, id: "Sat-3" },
{ x: 20, y: 30, risk: 7, id: "Sat-4" },
{ x: 90, y: 40, risk: 6, id: "Sat-5" },
];

export const satellites = [
{ id: "1", name: "Satellite-1", status: "normal" },
{ id: "2", name: "Satellite-2", status: "warning" },
{ id: "3", name: "Satellite-3", status: "critical" },
{ id: "4", name: "Satellite-4", status: "normal" },
{ id: "5", name: "Satellite-5", status: "warning" },
];

export const news = [
{ id: 1, title: "NASA detects anomaly in ISS battery system", url: "https://blogs.nasa.gov" },
{ id: 2, title: "SpaceX launches new batch of Starlink satellites", url: "https://www.spacex.com/updates/" },
{ id: 3, title: "ESA announces upgrades to ground control systems", url: "https://www.esa.int" },
{ id: 4, title: "ISRO shares latest GSLV mission insights", url: "https://www.isro.gov.in" },
{ id: 5, title: "NOAA reports solar storm potential next week", url: "https://www.swpc.noaa.gov" },
];

export const satelliteTelemetry = (id) => {
const base = Array.from({ length: 12 }, (_, i) => ({
name: `T${i + 1}`,
battery: 70 + Math.round(Math.random() * 20 - 10),
solar: 50 + Math.round(Math.random() * 30 - 15),
thermal: 20 + Math.round(Math.random() * 10 - 5),
comms: 90 + Math.round(Math.random() * 8 - 4),
}));
return base;
};