import { fetchWithTimeout } from "../utils";
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

export async function askOpenAI(prompt: string) {
  // Log để kiểm tra biến
  console.log('__OPENAI_API_KEY__:', __OPENAI_API_KEY__);
  
  if (!__OPENAI_API_KEY__) {
    throw new Error("API key is undefined");
  }

  const response = await fetchWithTimeout(OPENAI_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${__OPENAI_API_KEY__}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI Error: ${response.status}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content ?? "";
}
