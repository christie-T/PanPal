// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `1076685228099248138`,
  "content": `Hi! 👋 I'm PanPal, your personal cooking assistant!😊`,
  "tts": false,
  "attachments": [
    {
      "description": "Image uploaded to Autocode",
      "filename": "PanPal_is_a_portmanteau_of_the_words_pan_and_pal._Pan_re_07784a9f_41f3_4593_a7df_e9ced5192a7a__1_.png"
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `❓What is PanPal?❓`,
      "description": ``,
      "color": 0x00ff91,
      "fields": [
        {
          "name": `So what can I do? 🤔`,
          "value": `@PanPal [prompt] \n to get a recipe!`
        },
        {
          "name": `I'm also a music bot.`,
          "value": `!play [youtube url] \n !pause, !resume, !leave or !disconnect`,
        },
      ],
      "thumbnail": {
        "url": `https://www.svg.com/img/gallery/does-among-us-vr-allow-crossplay/intro-1668379787.jpg`,
        "height": 0,
        "width": 0
      }
    }
  ]
});