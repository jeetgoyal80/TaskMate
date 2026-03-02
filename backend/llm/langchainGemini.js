const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { PromptTemplate } = require("@langchain/core/prompts");
const fs = require("fs");
const path = require("path");

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",   // ✅ correct
  temperature: 0.3,
  maxOutputTokens: 512,
  apiKey: process.env.GEMINI_API_KEY,
});

console.log("🌐 Gemini API key loaded:", !!process.env.GEMINI_API_KEY);

const promptPath = path.join(__dirname, "prompts", "prompt.txt");
const promptText = fs.readFileSync(promptPath, "utf-8");
const prompt = PromptTemplate.fromTemplate(promptText);

function extractJsonArray(text) {
  try {
    const match = text.match(/\[\s*{[\s\S]*?}\s*\]/);
    return match ? JSON.parse(match[0]) : [];
  } catch (err) {
    console.error("❌ JSON Parse Error:", err.message);
    throw new Error("Invalid JSON from Gemini");
  }
}

async function getIntentAndEntities(input) {
  const formatted = await prompt.format({ input });
  const result = await model.invoke(formatted);
  const raw = result.content || result.text;
  console.log("🟨 Gemini Raw Output:", raw);
  return extractJsonArray(raw);
}

module.exports = { getIntentAndEntities };