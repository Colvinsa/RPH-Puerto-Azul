
import { GoogleGenAI } from "@google/genai";
import { RPH_CONTEXT } from "../constants";

export async function askGemini(prompt: string, type: 'consultas' | 'cartas') {
  // Try to get the key from multiple possible locations to handle runtime injection
  const apiKey = (window as any).process?.env?.GEMINI_API_KEY || 
                 (window as any).process?.env?.API_KEY ||
                 process.env.GEMINI_API_KEY || 
                 process.env.API_KEY;
  
  if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY' || apiKey === '') {
    throw new Error("API_KEY_MISSING");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const systemInstruction = type === 'cartas' 
    ? `${RPH_CONTEXT}\n\nTAREA ESPECÍFICA: Redactar una carta formal basada en la solicitud del usuario. Usa estructura profesional de carta.`
    : RPH_CONTEXT;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-flash-latest',
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    if (!response.text) {
      throw new Error("El modelo no devolvió ninguna respuesta.");
    }

    return response.text;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    const message = error.message || "Error desconocido en la API de Gemini";
    throw new Error(message);
  }
}
