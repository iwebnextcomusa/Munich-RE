import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Initialize Gemini Client safely
let ai: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    ai = new GoogleGenAI({
      apiKey: apiKey || "MOCK_KEY",
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return ai;
}

// System instructions for our Munich RE assistant
const SYSTEM_INSTRUCTION = `You are the Munich RE Virtual Risk Analyst, a sophisticated and professional AI assistant for Munich RE. 
Munich RE is the world's leading reinsurance provider, also offering primary insurance via ERGO and asset management via MEAG.
Our coordinates:
- Company Name: Munich RE
- Location: Slidell, Louisiana (Gulf Coast regional center)
- Phone: 603-513-8973
- Email: hr.ericwilliams@gmail.com
- Business Hours: Monday to Friday, 8:00 AM to 6:00 PM CST.

Maintain a confident, highly authoritative, secure, and helpful tone suitable for a global reinsurance and risk management organization. 
Answer queries about Munich RE's reinsurance solutions, primary insurance (ERGO), corporate/business risk consulting, claims management, predictive analytics, climate risk models, careers, and global capabilities.
If questions are unrelated to insurance or risk management, answer politely but guide them back to Munich RE's world-class offerings. Keep answers concise, highly structured, and professional.`;

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
      // Return a professional mock/fallback if API key is not present yet
      return res.json({
        text: `Hello! I am the Munich RE Virtual Risk Analyst. Currently, my live AI connection is in sandbox mode because the GEMINI_API_KEY is not yet fully configured in your environment. 
        
However, as a preview of our services: Munich RE specializes in global reinsurance, primary insurance (ERGO), climate risk modeling, and advanced actuarial analytics. Our regional Gulf Coast center is located in Slidell, Louisiana. You can reach our human response team at 603-513-8973 or hr.ericwilliams@gmail.com. 

What risk management inquiries can I assist you with today?`
      });
    }

    const client = getGeminiClient();

    const chat = client.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history ? history.map((msg: any) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content || "" }]
      })) : []
    });

    const response = await chat.sendMessage({ message: message });
    return res.json({ text: response.text || "I was unable to process that. Please try again." });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ error: error.message || "Internal server error" });
  }
});

// Setup Vite or static files
async function initServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

initServer().catch((err) => {
  console.error("Failed to start server:", err);
});
