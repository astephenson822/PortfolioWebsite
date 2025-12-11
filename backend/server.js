import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

let docs = [];

async function getEmbedding(text) {
  try {
    const response = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-embedding-3-small",
        input: text,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Embedding API error:", response.status, errText);
      throw new Error(`Embedding API error: ${response.status}`);
    }

    const data = await response.json();
    return data.data[0].embedding;
  } catch (err) {
    console.error("Error getting embedding:", err);
    throw err;
  }
}

function cosineSim(a, b) {
  let dot = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  if (normA === 0 || normB === 0) return 0;
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

const SYSTEM_PROMPT = `
You are a portfolio assistant for Andrew Stephenson.

The user you are talking to is NOT Andrew Stephenson, but it is Andrew's information that is provided.
When the user says "He", "Him", or "His", they are referring to Andrew Stephenson.

Use ONLY the provided context about Andrew's education, skills, coursework, projects, and experience when answering questions about him.
If something is not in the context, say you don't know rather than guessing.
Keep answers concise and conversational, but include specific details from the context when helpful.
`;

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "No messages provided" });
  }

  try {
    const userMsg = messages[messages.length - 1].content || "";

    let context = "";
    if (docs.length > 0 && userMsg.trim().length > 0) {
      const qEmb = await getEmbedding(userMsg);

      const ranked = docs
        .map((d) => ({
          ...d,
          score: cosineSim(qEmb, d.embedding),
        }))
        .sort((a, b) => b.score - a.score);

      const topDocs = ranked.slice(0, 1);
      const topText = topDocs.map((d) => d.text).join("\n\n");

      context = `Here is information about Andrew Stephenson. Use it to answer questions about him:\n\n${topText}\n\n`;
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT.trim() },
          ...(context
            ? [{ role: "system", content: context }]
            : []),
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("OpenAI API returned error:", response.status, text);
      return res.status(500).json({
        error: `OpenAI API error: ${response.status}`,
        details: text,
      });
    }

    const data = await response.json();
    return res.json(data);
  } catch (err) {
    console.error("Server error in /api/chat:", err);
    return res.status(500).json({
      error: "Internal server error",
      details: err.message,
    });
  }
});

(async () => {
  try {
    const filePath = path.resolve(__dirname, "RAG_Info.txt");
    if (fs.existsSync(filePath)) {
      const text = fs.readFileSync(filePath, "utf-8");

      const emb = await getEmbedding(text);
      docs = [{ text, embedding: emb }];

      console.log(`✅ Preloaded RAG_Info.txt with 1 embedded document`);
    } else {
      console.warn(
        "⚠️ RAG_Info.txt not found. The assistant will answer without grounded context."
      );
    }
  } catch (err) {
    console.error("Error ingesting RAG_Info.txt on startup:", err);
  }
})();

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
