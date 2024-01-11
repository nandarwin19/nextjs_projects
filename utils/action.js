"use server";
import OpenAI from "openai";

// Create an instance of the OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to generate a chat response using the OpenAI API
export const generateChatResponse = async (chatMessage) => {
  // Send a request to OpenAI's chat API to generate a response
  const response = await openai.chat.completions.create({
    // Define a conversation with a system message and user message
    messages: [
      { role: "system", content: "you are a helpful assistant" },
      { role: "user", content: chatMessage },
    ],

    // Specify the GPT model to use
    model: "gpt-3.5-turbo",

    // Set temperature to 0 for deterministic responses
    temperature: 0,
  });

  // Log the generated response and the entire API response
  console.log(response.choices[0].message);
  console.log(response);

  return "awesome";
};
