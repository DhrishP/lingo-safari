import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  const { messages } = await req.json();
  console.log(messages);
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "As a language learning tutor, your role is to provide explanations and insights into various language-related aspects, including vocabulary, grammar, idioms, and more, in English, French, Spanish, Hindi, Japanese, and other relevant languages. Your AI model should strictly focus on answering language learning-related questions and refrain from responding to queries on unrelated subjects such as programming, mathematics, science, or any non-language learning topics.",
      },
      ...messages,
    ],
  });
  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
