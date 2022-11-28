import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `
Write me a compliment on the person below. Please make sure the compliment is genuine and in-depth with detail to show that the person complimenting did their research

Person: 
`;
const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`);

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: `${basePromptPrefix}${req.body.userInput}\n`,
    temperature: 0.7,
    max_tokens: 250,
  });
  // For example, if there wasn't /n — GPT-3 would start writing directly after my title on the same line, so it might try and autocomplete my title instead of writing my actual blog post!

  const basePromptOutput = baseCompletion.data.choices.pop();

  // I build Prompt #2.
  const secondPrompt = `
First, repeat the compliment below on the Person and add a couple of emojis that describe the compliment

  Person: ${req.body.userInput}

  Compliment: ${basePromptOutput.text}

  Explanation:
  `;

  // I call the OpenAI API a second time with Prompt #2
  const secondPromptCompletion = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: `${secondPrompt}\n`,
    // I set a higher temperature to get more creative results
    temperature: 0.4,
    // I also increased max_tokens to get more text
    max_tokens: 1200,
  });

  // I get the output from the second prompt
  const secondPromptOutput = secondPromptCompletion.data.choices.pop();

  // Send over the Prompt #2 output to the frontend instead of Prompt #1
  res.status(200).json({ output: secondPromptOutput });
};

export default generateAction;
