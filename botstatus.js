const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// Set a streaming status. If a twitch URL is provided it will show up as a button
await lib.discord.users['@0.2.0'].me.status.update({
  activity_name: 'The Taco Song', // required
  activity_type: 'LISTENING',
  status: 'ONLINE',
});