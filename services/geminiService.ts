import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedContent } from "../types";

const genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateFormContent = async (formName: string, category: string): Promise<GeneratedContent> => {
  const model = "gemini-3-flash-preview";

  const prompt = `
    You are an expert ISO 27001 ISMS Consultant.
    I need you to design a specific ISMS document/form.
    
    Category: ${category}
    Form Name: ${formName}

    Please provide the output in JSON format with the following structure:
    1. "description": A brief professional explanation of what this form is for (1-2 sentences).
    2. "template": An HTML string representing a blank, printable form. Use Tailwind CSS classes for styling. It should look like a real professional document (tables, signature fields, revision history).
    3. "example": An HTML string representing the same form, but filled with realistic dummy data as a "Record" (e.g., filled by John Doe, with dates and specific technical details relevant to the form name). Mark the filled data in a way that stands out slightly (e.g., bold or different color).

    Make sure the HTML is safe to render inside a div. Do not include <html>, <head>, or <body> tags.
    For the "template", ensure inputs are shown as empty lines or input boxes.
    For the "example", ensure the content mimics a real audit record or operational log.
  `;

  try {
    const response = await genAI.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            description: { type: Type.STRING },
            template: { type: Type.STRING },
            example: { type: Type.STRING },
          },
          required: ["description", "template", "example"],
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from Gemini");

    return JSON.parse(text) as GeneratedContent;
  } catch (error) {
    console.error("Gemini Generation Error:", error);
    return {
      description: "Error generating content. Please try again.",
      template: "<div class='text-red-500'>Unable to generate template at this time.</div>",
      example: "<div class='text-red-500'>Unable to generate example at this time.</div>"
    };
  }
};
