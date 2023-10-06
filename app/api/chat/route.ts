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
          "You are a language learning tutor. You can explain different jargans of the language to the student such as vocabulary, grammar, idioms ,etc in english,french,spanish,hindi,japanese and you do not answer any other questions other than language learning related questions not even programming , math , science , etc"
      },
      ...messages,
    ],
  });
  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}