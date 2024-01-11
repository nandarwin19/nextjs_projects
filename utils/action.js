// "use server";
// import OpenAI from "openai";

// // Create an instance of the OpenAI API client
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// // Function to generate a chat response using the OpenAI API
// export const generateChatResponse = async (chatMessages) => {
//   try {
//     // Send a request to OpenAI's chat API to generate a response
//     const response = await openai.chat.completions.create({
//       // Define a conversation with a system message and user message
//       messages: [
//         { role: "system", content: "you are a helpful assistant" },
//         ...chatMessages,
//       ],

//       // Specify the GPT model to use
//       model: "gpt-3.5-turbo",

//       // Set temperature to 0 for deterministic responses
//       temperature: 0,
//     });

//     return response.choices[0].message;
//   } catch (error) {
//     return null;
//   }
// };

// export const getExistingTour = async ({ city, country }) => {
//   return null;
// };

// export const generateTourResponse = async ({ city, country }) => {
//   const query = `Find ${city} in this ${country}.
//     If ${city} in this ${country} exists, create a list of things families can do in this ${city},${country}.
// Once you have a list, create a one-day tour. Response should be in the following JSON format:
// {
//     "tour": {
//         "city": "${city}",
//         "country": "${country}",
//         "title": "title of the tour",
//         "description": description of the city and tour",
//         stops":["short paragraph on stop 1","short paragraph on stop 2","short paragraph on stop 3"]
//     }
// }
// If you can't find info on exact ${city}, or ${city} does not exist or it's population is less than _, or it is not located in following ${country}. return {"tour": null }, with no additional characters.`;
// };
// try {
//   const response = await openai.chat.completions.create({
//     messages: [
//       { role: "system", content: "you are a tour guide" },
//       {
//         role: "user",
//         content: "query",
//       },
//     ],
//     model: "gpt-3.5-turbo",
//     temperature: 0,
//   });
//   const tourData = JSON.parse(response.choices[0].message.content);
//   if (!tourData.tour) {
//     return null;
//   }
//   return tourData.tour;
// } catch (error) {
//   console.log(error);
//   return null;
// }

// export const createNewTour = async ({ tour }) => {
//   return null;
// };

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

export const getExistingTour = async ({ city, country }) => {
  return null;
};

export const generateTourResponse = async ({ city, country }) => {
  const query = `Find ${city} in this ${country}.
    If ${city} in this ${country} exists, create a list of things families can do in this ${city},${country}.
Once you have a list, create a one-day tour. Response should be in the following JSON format:
{
    "tour": {
        "city": "${city}",
        "country": "${country}",
        "title": "title of the tour",
        "description": "description of the city and tour",
        "stops": ["short paragraph on stop 1","short paragraph on stop 2","short paragraph on stop 3"]
    }
}
If you can't find info on exact ${city}, or ${city} does not exist or its population is less than _, or it is not located in the following ${country}. return {"tour": null }, with no additional characters.`;

  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "you are a tour guide" },
        {
          role: "user",
          content: query,
        },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });

    const tourData = JSON.parse(response.choices[0].message.content);
    if (!tourData.tour) {
      return null;
    }
    return tourData.tour;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createNewTour = async ({ tour }) => {
  return null;
};
