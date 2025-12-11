import React, { useState, useEffect } from "react";
import "./Chatbot.css";

function Chatbot() {
  const initialMessage =
    "Welcome to Andrew's portfolio! I am his assistant chatbot! Feel free to ask me anything about him and his work.";

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    typeMessage(initialMessage, "assistant");
  }, []);

  const typeMessage = (text, role = "assistant") => {
    let index = 0;
    let currentText = "";

    const typingInterval = setInterval(() => {
      currentText += text[index];

      setMessages((prev) => {
        if (prev.length > 0 && prev[prev.length - 1].role === role) {
          return prev.map((msg, i) =>
            i === prev.length - 1 ? { ...msg, content: currentText } : msg
          );
        } else {
          return [...prev, { role, content: currentText }];
        }
      });

      index++;
      if (index >= text.length) clearInterval(typingInterval);
    }, 25);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userInput = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userInput }]);
    setLoading(true);

    typeMessage("AI is thinking...", "assistant");

    try {
      const response = await fetch(
        "https://portfolio-backend-5w0i.onrender.com/api/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [...messages, { role: "user", content: userInput }],
          }),
        }
      );

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "No response";

      setMessages((prev) =>
        prev.map((msg, i) =>
          i === prev.length - 1 && msg.role === "assistant"
            ? { ...msg, content: "" }
            : msg
        )
      );

      typeMessage(reply, "assistant");
    } catch (error) {
      console.error("Error:", error);
      typeMessage("I am sorry, the server is currently down.", "assistant");
    } finally {
      setLoading(false);
    }
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
            <b>{m.role === "user" ? "You" : "Andrew's Portfolio AI"}:</b>{" "}
            {m.content}
          </div>
        ))}
        {loading && (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        )}
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
