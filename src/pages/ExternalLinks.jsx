import React from "react";
export default function ExternalLinks() {
return (
<div className="space-y-4">
<div className="text-xl font-semibold">External Links</div>
<div className="bg-[#0f172a]/60 rounded-2xl border border-white/10 p-6 flex flex-wrap gap-4">
<a
       href="https://www.nasa.gov"
       target="_blank"
       rel="noreferrer"
       className="px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-glow transition"
     >
NASA Website
</a>
<a
       href="https://www.isro.gov.in"
       target="_blank"
       rel="noreferrer"
       className="px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-glow transition"
     >
ISRO Website
</a>
</div>
</div>
);
}