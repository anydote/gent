import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { SYSTEM_PROMPT } from "../constants/prompt";

const API_KEY = process.env.AI_API_KEY || "";

const openai = createOpenAI({
  apiKey: API_KEY,
});

export const generateMealPlan = async (): Promise<string> => {
  try {
    const { text } = await generateText({
      model: openai("gpt-5"),
      system: SYSTEM_PROMPT,
      prompt: "Please plan the meal and shopping list for this week.",
    });

    return text || "No response generated.";
  } catch (error) {
    console.error("Error generating meal plan:", error);
    throw error;
  }
};
