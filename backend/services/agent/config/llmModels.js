import { ChatGroq } from "@langchain/groq";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const groq = new ChatGroq({
    model: "llama-3.3-70b-versatile",
    apiKey: process.env.GROQ_API_KEY
});

const gemini = new ChatGoogleGenerativeAI({
    model: "gemini-3.6-flash"
});

export const getModel = async (agent) => {
    switch (agent) {
        case "chat":
            return groq;
        case "search":
            return groq;
        case "coding":
            return gemini;

        default:
            return groq;
    }
}

