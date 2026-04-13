import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const key = process.env.TRAININGDAYS_API;
  if (!key) {
    return res.status(500).json({ error: "Server configuration error: TRAININGDAYS_API is not set." });
  }

  const { topic, prompt } = req.body ?? {};

  if (!topic || typeof topic !== "string" || topic.trim() === "") {
    return res.status(400).json({ error: "Missing or invalid field: topic" });
  }
  if (!prompt || typeof prompt !== "string" || prompt.trim() === "") {
    return res.status(400).json({ error: "Missing or invalid field: prompt" });
  }

  let openRouterRes: Response;
  try {
    openRouterRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://training-days.vercel.app",
        "X-Title": "Training Days",
      },
      body: JSON.stringify({
        model: "openrouter/auto",
        messages: [
          {
            role: "system",
            content: "You are the Training Days Curated Curriculum Engine, managed by Joe Nasr.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });
  } catch (err) {
    return res.status(502).json({ error: "Failed to reach OpenRouter. Please try again later." });
  }

  if (!openRouterRes.ok) {
    const detail = await openRouterRes.text().catch(() => "");
    if (openRouterRes.status === 401 || openRouterRes.status === 403) {
      return res.status(502).json({ error: "OpenRouter authentication failed. Check TRAININGDAYS_API configuration." });
    }
    return res.status(502).json({ error: "OpenRouter request failed.", detail });
  }

  const data = await openRouterRes.json();
  const text: string = data?.choices?.[0]?.message?.content ?? "";

  return res.status(200).json({ text });
}
