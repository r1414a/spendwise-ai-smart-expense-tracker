import { PromptTemplate } from "@langchain/core/prompts";
import { ChatMistralAI } from "@langchain/mistralai";
import z from "zod";

const insightsSchema = z.object({
  insights: z.array(
    z.object({
      title: z.string(),
      detail: z.string(),
    })
  ),
});

const model = new ChatMistralAI({
  model: "mistral-large-latest",
  temperature: 0.2,
  apiKey: process.env.MISTRALAI_API_KEY,
});

const modelWithStructuredOutput = model.withStructuredOutput(insightsSchema, {
  name: "insights",
});

export async function generateSpendingInsights(data) {
 const template = `
You are an Indian finance assistant.
Analyze this user's expense data and produce 4–5 short, insightful observations.

Focus on:
- Spending trends, spikes, and changes across categories, weeks, or months.
- Smart budgeting or saving suggestions based on patterns.
- Noting consistency or imbalance between categories.

Important context rules:
- DO NOT mention ISO week numbers (like Week 44, Week 45).
- Instead, say "this week", "last week", or "a recent week" depending on context.
- The current month or week may have incomplete data (for example, if it's the start of the month).
- Do NOT say that spending "dropped" or "increased" if the newer period is incomplete.
- Instead, mention it as "partial data" or "early signs".
- Keep the tone analytical, helpful, and concise.

Respond ONLY in JSON:
{
  "insights": [
    {"title": "<short summary>", "detail": "<1–2 line explanation>"}
  ]
}

Data: ${JSON.stringify(data)}
`;


  const response = await modelWithStructuredOutput.invoke(template);
  console.log(response);
  return response.insights;
}
