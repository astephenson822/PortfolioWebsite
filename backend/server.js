import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import pdfParse from "pdf-parse/lib/pdf-parse.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://astephenson822.github.io", // frontend
  })
);
app.use(express.json());

// ===== In-Memory Vector Store =====
let docs = []; // { text: string, embedding: number[] }

// Get embeddings from OpenAI
async function getEmbedding(text) {
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
  const data = await response.json();
  return data.data[0].embedding;
}

// Cosine similarity
function cosineSim(a, b) {
  let dot = 0,
    normA = 0,
    normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

// ===== API ROUTES =====

// Upload and embed a PDF (resume, transcript, etc.)
app.post("/api/ingest", async (req, res) => {
  try {
    const { filePath } = req.body; // for now just give a local path
    if (!filePath) {
      return res.status(400).json({ error: "No file path provided" });
    }

    const pdfBuffer = fs.readFileSync(path.resolve(filePath));
    const parsed = await pdfParse(pdfBuffer);

    // Split into chunks (simple split by paragraphs for now)
    const chunks = parsed.text.split(/\n\s*\n/).filter((c) => c.trim().length);

    for (let chunk of chunks) {
      const emb = await getEmbedding(chunk);
      docs.push({ text: chunk, embedding: emb });
    }

    res.json({ message: `Ingested ${chunks.length} chunks` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error ingesting document" });
  }
});

// Chat with optional RAG grounding
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages) {
    return res.status(400).json({ error: "No messages provided" });
  }

  let context = "";
  try {
    // Take the latest user question
    const userMsg = messages[messages.length - 1].content;

    if (docs.length > 0) {
      const qEmb = await getEmbedding(userMsg);
      // rank docs by similarity
      const ranked = docs
        .map((d) => ({ ...d, score: cosineSim(qEmb, d.embedding) }))
        .sort((a, b) => b.score - a.score);

      // take top 3 chunks
      const top = ranked.slice(0, 3).map((r) => r.text).join("\n\n");
      context = `Relevant information from Andrew's documents:\n${top}\n\n`;
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are Andrew's portfolio assistant. Use the provided context if relevant.",
          },
          ...(context
            ? [{ role: "system", content: context }]
            : []),
          ...messages,
        ],
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error calling OpenAI API" });
  }
});

// At the bottom of server.js, before app.listen:
(async () => {
  try {
    const filePath = path.resolve('./example.txt'); // or example.txt
    if (fs.existsSync(filePath)) {
      const buffer = fs.readFileSync(path.resolve(filePath));
      let text = "";

      if (filePath.endsWith(".pdf")) {
        const parsed = await pdfParse(buffer);
        text = parsed.text;
      } else {
        text = buffer.toString("utf-8");
      }

      const chunks = text.split(/\n\s*\n|[\r\n]+/).filter((c) => c.trim().length);
      for (let chunk of chunks) {
        const emb = await getEmbedding(chunk);
        docs.push({ text: chunk, embedding: emb });
      }
      console.log(`Preloaded ${chunks.length} chunks from ${filePath}`);
    }
  } catch (err) {
    console.error("Error ingesting file on startup:", err);
  }
})();


app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
