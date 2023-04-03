const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let event = context.params.event;
let mentions = event.mentions;
let botMention = mentions.find(mention => mention.bot);
let content = event.content;
let author = event.author;
let message = content.replace(/<@(\d+)>/gi, ($0, $1) => {
  let mention = mentions.find(mention => mention.id === $1);
});

let imagePrefix = `/imagine`;
if (message.startsWith(imagePrefix)) {
  
  let imagePrompt = message.slice(imagePrefix.length).trim();
  let imageResult = await lib.openai.playground['@0.0.2'].images.create({
    prompt: imagePrompt,
    n: 1,
    size: `1024x1024`,
    response_format: `url`
  });
  
  let messageResponse = await lib.discord.channels['@0.3.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: imageResult.images[0].url,
    tts: false,
    message_reference: {
      message_id: context.params.event.id,
      fail_if_not_exists: false
    }
  });
  
  return messageResponse;

}