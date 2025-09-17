import React from "react";
import { useState, useRef, useEffect } from "react";
import { IoChatbubbles, IoSend } from "react-icons/io5";

export default function ChatWidget() {
const [open, setOpen] = useState(false);
const [messages, setMessages] = useState([
{ role: "bot", content: "Hello! Ask me about satellite health or alerts." },
]);
const [input, setInput] = useState("");
const endRef = useRef(null);

useEffect(() => {
endRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages, open]);

const send = () => {
if (!input.trim()) return;
const userMsg = { role: "user", content: input.trim() };
setMessages((m) => [...m, userMsg]);
setInput("");
// mock bot
setTimeout(() => {
setMessages((m) => [
...m,
{ role: "bot", content: "This is a demo response. Charts indicate normal operations for most satellites." },
]);
}, 600);
};

return (
<>
<button
className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple text-white shadow-glow hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition"
onClick={() => setOpen((o) => !o)}
aria-label="Open chat"
>
<IoChatbubbles className="m-auto text-2xl" />
</button>
  {open && (
    <div className="fixed right-5 bottom-24 z-50 w-[90vw] max-w-md h-[60vh] bg-[#0f172a]/80 backdrop-blur border border-white/10 rounded-2xl flex flex-col overflow-hidden">
      <div className="px-4 py-3 border-b border-white/10 font-semibold">Mission Assistant</div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] px-3 py-2 rounded-xl ${
                m.role === "user"
                  ? "bg-accent-blue/80 text-white"
                  : "bg-white/10 text-white/90"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="p-2 border-t border-white/10 flex gap-2">
        <input
          className="flex-1 bg-white/5 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-accent-blue"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button
          onClick={send}
          className="px-4 py-2 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple text-white font-semibold hover:shadow-glow"
        >
          <IoSend />
        </button>
      </div>
    </div>
  )}
</>
);
}