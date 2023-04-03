// authenticates you with the API standard library
// type `await lib.` to display API autocomplete

const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});


lib.discord.users['@0.2.1'].me.status.update({ // STATUS INDICATOR
  activity_name: `Amogus Trap Remix Base Boosted `,
  activity_type: 'LISTENING',
  status: 'ONLINE'
});

// Send typing indicator 
await lib.discord.channels['@0.3.4'].typing.create({
  channel_id: `${context.params.event.channel_id}`
});

// Let OpenAI access past 3 chat logs
let messages = Array.from(await lib.discord.channels['@0.3.4'].messages.list({
  channel_id: `${context.params.event.channel_id}`,
  before: `${context.params.event.id}`,
  limit: 5
}));


messages.unshift(`${context.params.event.content}`) // add to beginning of array

// Prompt to OpenAI
let prompt = [
`You are a Discord bot called Sussy Imposter. Your purpose is to help people by any means neccesary, but you may continue to act as yourself.`, 
 `To provide you some optional context, the following is a conversation between the server participants. \n\n`,
].join()


for (let i = messages.length - 1; i >= 0; i--) {
  const m = messages[i]
  prompt += String(`${m.content}\n`)
}

prompt += [
`Someone asked you this question: ${context.params.event.content}`, 
`Please answer them in the best way you can, using context from the previous conversation if neccesary.`,
].join("\n")

console.log(`${prompt}`)

// Fetch answer from OpenAI
let answer = await lib.openai.playground['@0.0.4'].completions.create({
  model: `text-davinci-003`,
  prompt: [
    `${prompt}`
  ],
  max_tokens: 512,    // parameters
  temperature: 0.5,
  top_p: 1,
  n: 1,
  echo: false,
  presence_penalty: 0,
  frequency_penalty: 0,
  best_of: 1  
});

await lib.discord.channels['@0.3.4'].messages.create({ // Send retrieved message to Discord channel
  channel_id: `${context.params.event.channel_id}`,
  content: `${answer.choices[0].text}`
});
