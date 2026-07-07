import { GoogleGenAI, Type, Schema } from "@google/genai";
import { SignConcept } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSignConcept = async (
  businessName: string,
  businessType: string,
  vibe: string
): Promise<SignConcept> => {
  const schema: Schema = {
    type: Type.OBJECT,
    properties: {
      slogan: {
        type: Type.STRING,
        description: "A catchy, short, vintage-style slogan for the sign.",
      },
      visualStyle: {
        type: Type.STRING,
        description: "A detailed description of the visual imagery and style of the sign (e.g., gold leaf, distressed wood, neon).",
      },
      colorPalette: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "A list of 3-4 hex codes or color names representing the palette.",
      },
      typographySuggestion: {
        type: Type.STRING,
        description: "Suggestion for the type of font or lettering style (e.g., Art Deco, Hand Script, Serif).",
      },
    },
    required: ["slogan", "visualStyle", "colorPalette", "typographySuggestion"],
  };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are The Greatest Sign Maker. Create a sign concept for a client.
      
      Client Details:
      Name: ${businessName}
      Type: ${businessType}
      Desired Vibe: ${vibe}
      
      Provide a creative concept that emphasizes craftsmanship and vintage appeal.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 0.7,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from Gemini");
    }

    return JSON.parse(text) as SignConcept;
  } catch (error) {
    console.error("Error generating sign concept:", error);
    throw error;
  }
};