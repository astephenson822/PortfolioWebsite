import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

let knowledgeBase = [];

export async function loadDocument(textPath) {
  const rawText = fs.readFileSync(textPath, "utf8");

  const chunks = chunkText(rawText, 400);

  for (const chunk of chunks) {
    const embedding = await createEmbedding(chunk);
    knowledgeBase.push({ text: chunk, embedding });
  }

  console.log(`Loaded ${chunks.length} chunks from ${textPath}`);
}

async function createEmbedding(text) {
  const res = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  return res.data[0].embedding;
}

function cosineSim(vecA, vecB) {
  let dot = 0.0, normA = 0.0, normB = 0.0;
  for (let i = 0; i < vecA.length; i++) {
    dot += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export async function retrieveRelevantChunks(query, topN = 3) {
  const queryEmbedding = await createEmbedding(query);

  const scored = knowledgeBase.map(entry => ({
    text: entry.text,
    score: cosineSim(queryEmbedding, entry.embedding),
  }));

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, topN)
    .map(s => s.text);
}

function chunkText(text, maxLength) {
  const sentences = text.split(/(?<=[.?!])\s+/);
  const chunks = [];
  let current = "";

  for (const sentence of sentences) {
    if ((current + sentence).length > maxLength) {
      chunks.push(current.trim());
      current = "";
    }
    current += sentence + " ";
  }
  if (current) chunks.push(current.trim());

  return chunks;
}
