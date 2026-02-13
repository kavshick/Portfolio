
import { GoogleGenAI, Type } from "@google/genai";

// Client initialization following SDK guidelines.
const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

/**
 * Executes a text generation request using advanced neural models.
 */
export const chatWithAI = async (message: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: message,
    config: {
      systemInstruction: "You are an AI Assistant inside Kavshick's portfolio. You are helpful, tech-savvy, and professional.",
      temperature: 0.7,
    }
  });
  return response.text;
};

/**
 * Performs sentiment analysis on the provided text.
 */
export const analyzeSentiment = async (text: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze the sentiment of the following text: "${text}". Return only a single word: Positive, Negative, or Neutral.`,
    config: {
      temperature: 0,
    }
  });
  return response.text?.trim() || "Neutral";
};

/**
 * Categorizes feedback using a predefined schema.
 */
export const classifyFeedback = async (feedback: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: feedback,
    config: {
      systemInstruction: "Classify this user feedback into categories: BUG, FEATURE REQUEST, or GENERAL. Return as JSON.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          category: { 
            type: Type.STRING,
            description: "The primary category of the feedback."
          },
          confidence: { 
            type: Type.NUMBER,
            description: "Likelihood score for the classification (0-1)."
          },
          reason: { 
            type: Type.STRING,
            description: "Brief reasoning for the selected category."
          }
        },
        required: ["category", "confidence"],
        propertyOrdering: ["category", "confidence", "reason"]
      }
    }
  });
  return JSON.parse(response.text || "{}");
};
