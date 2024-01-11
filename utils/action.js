"use server";
import OpenAI from "openai";

// Create an instance of the OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to generate a chat response using the OpenAI API
export const generateChatResponse = async (chatMessages) => {
  try {
    // Send a request to OpenAI's chat API to generate a response
    const response = await openai.chat.completions.create({
      // Define a conversation with a system message and user message
      messages: [
        { role: "system", content: "you are a helpful assistant" },
        ...chatMessages,
      ],

      // Specify the GPT model to use
      model: "gpt-3.5-turbo",

      // Set temperature to 0 for deterministic responses
      temperature: 0,
    });

    return response.choices[0].message;
  } catch (error) {
    return null;
  }
};
