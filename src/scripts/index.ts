import { GoogleGenAI } from "@google/genai";

const client = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY!,
});

// The new SDK uses a chat-centric approach for conversations.
// You no longer get a model object and then start a chat on it.
// Instead, you create a chat directly and specify the model.
export const chatSession = client.chats.create({
  model: "gemini-2.5-flash", // Use the updated model name directly
  config: {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  },
  history: [],
});