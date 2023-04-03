const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.interactions['@1.0.1'].followups.create({
  token: `${context.params.event.token}`,
  content: `I'm sorry to hear that <@${context.params.event.member.user.id}>, I will not suggest this recipe again.`
});

