import express from "express";
import dotenv from "dotenv";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

dotenv.config();
const touristGuideRouter = express.Router();

const GEMINI_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
if (!GEMINI_KEY)
	throw new Error("GOOGLE_GENERATIVE_AI_API_KEY missing in .env");

const model = google("gemini-2.5-flash");

touristGuideRouter.post("/ask", async (req, res) => {
	try {
		const { imageUrl, question } = req.body;
		if (!imageUrl || !question) {
			return res
				.status(400)
				.json({ error: "imageUrl and question are required" });
		}

		const prompt = [
			{
				role: "user",
				content: [
					{
						type: "text",
						text: `Image URL: ${imageUrl}. Question: ${question}`,
					},
				],
			},
		];

		const { text } = await generateText({
			model,
			prompt,
		});

		res.json({ answer: text });
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
});

export default touristGuideRouter;
