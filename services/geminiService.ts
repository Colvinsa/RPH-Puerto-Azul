
import { GoogleGenAI } from "@google/genai";
import { RPH_CONTEXT } from "../constants";

export async function askGemini(prompt: string, type: 'consultas' | 'cartas') {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = type === 'cartas' 
    ? `${RPH_CONTEXT}\n\nTAREA ESPECÍFICA: Redactar una carta formal basada en la solicitud del usuario. Usa estructura profesional de carta.`
    : RPH_CONTEXT;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "No se pudo generar una respuesta.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
