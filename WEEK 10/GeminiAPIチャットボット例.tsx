// componentsフォルダ内格納→layout.tsxに反映を推奨

"use client";
import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: input }],
              },
            ],
          }),
        }
      );
      const data = await res.json();
      const aiText =
        data.candidates?.[0]?.content?.parts?.[0]?.text || "(no response)";
      setMessages((prev) => [...prev, { role: "assistant", content: aiText }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "エラーが発生しました" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-80 h-96 bg-white border rounded-xl shadow-xl flex flex-col">
          <div className="flex justify-between items-center px-4 py-2 border-b">
            <h2 className="font-bold">チャット</h2>
            <button onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
            {messages.map((msg, i) => (
              <p
                key={i}
                className={`${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-3 py-1 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-100"
                      : "bg-gray-100"
                  }`}
                >
                  {msg.content}
                </span>
              </p>
            ))}
          </div>
          <div className="border-t px-3 py-2 flex gap-2">
            <input
              className="flex-1 border px-2 py-1 rounded"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="入力..."
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              →
            </button>
          </div>
        </div>
      ) : (
        <button
          className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center text-2xl"
          onClick={() => setOpen(true)}
        >
          💬
        </button>
      )}
    </div>
  );
}
