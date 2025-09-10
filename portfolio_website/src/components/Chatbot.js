import React, { useState } from "react";
import "./Chatbot.css"; // optional, for styling

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setLoading(true);

    try {
      // ⚠️ For production: replace with your backend endpoint
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "user", content: input }
          ]
        }),
      });


      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "No response";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I am sorry, the server is currently down." },
      ]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="chatbot-container">
      <h2>Ask My Portfolio AI</h2>
      <div className="chat-window">
        {messages.map((m, i) => (
          <div
            key={i}
            className={m.role === "user" ? "chat-bubble user" : "chat-bubble ai"}
          >
            <b>{m.role === "user" ? "You" : "Andrew's Portfolio AI"}:</b> {m.content}
          </div>
        ))}
        {loading && <p><i>AI is thinking...</i></p>}
      </div>
      <textarea
        rows={3}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your question..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Chatbot;
