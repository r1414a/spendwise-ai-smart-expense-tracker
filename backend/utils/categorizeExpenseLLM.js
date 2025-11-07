import { ChatMistralAI } from "@langchain/mistralai";
import dotenv from "dotenv";
dotenv.config();
import { CATEGORIES } from "../constants/expenseCategories.js";
import { PromptTemplate } from "@langchain/core/prompts";
import { z } from "zod";

const template = `
    You are an Indian finance assistant.
    Translate the text into English if needed, 
then categorize it into one of these categories:
${CATEGORIES.join(", ")}.

    Text: {original_description}
`;

const categorizeSchema = z.object({
  description_processed: z.string(),
  category: z.string(),
});

const model = new ChatMistralAI({
  model: "mistral-large-latest",
  temperature: 0.2,
  apiKey: process.env.MISTRALAI_API_KEY,
});

const modelWithStructuredOutput = model.withStructuredOutput(categorizeSchema, {
  name: "categorize",
});

export async function categorizeExpenseLLM(original) {
  const promptTemplate = PromptTemplate.fromTemplate(template);

  const promptValue = await promptTemplate.invoke({
    original_description: original,
  });

  const response = await modelWithStructuredOutput.invoke(promptValue);

  return response;
}
