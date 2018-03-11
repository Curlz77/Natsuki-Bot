//variables
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./utils/config.json");
const arrayFile = require("./utils/arrays.js");
const utils = require("./utils/functions.js");
const fs = require("fs");
var prefix = config.prefix;

//ready
bot.on('ready', () => {
  console.log('Logged in as ' + bot.user.username + "#" + bot.user.discriminator);
  var content = "Baking in " + bot.guilds.size + " guilds | " + prefix + "help";
  bot.user.setActivity(content);
});

//start
bot.on("message", (message) => {
  if(message.author.bot) return;

    //help - credit to kaoala7577 (DotBot repository), modified
  if(message.content.startsWith(prefix + "help")) {
    message.channel.send("Ugh fine. **It's not because I like you or anything!!** *baka.*\n**Prefix:** `" + prefix + "`\n\n__Fun Stuff__\n\n`" + prefix + "becauseyou` - Natsuki is a better person because of you :)\n`" + prefix + "buffsuki` - Call Buffsuki\n`" + prefix + "cake` - Natsuki gives you some cake\n`" + prefix + "cookie` - Natsuki gives you a cookie\n`" + prefix + "cute` - Call Natsuki cute\n`" + prefix + "inspiration` - Displays 5 random Natsuki words from the poem minigame\n`" + prefix + "neko` - Displays a random neko\n`" + prefix + "poem` - Displays a random Natsuki poem\n`" + prefix + "wansumfuk` - Ask Natsuki for sum fuk\n\n__Helpful Stuff__\n\n`" + prefix + "help` - Displays this message\n`" + prefix + "info` - Displays the bot info message\n`" + prefix + "monika` - Get an invite link for Monika Bot\n`" + prefix + "ping` - Pings Natsuki\n`" + prefix + "support` - Sends an invite to the support guild\n\n__Bot Owner Only__\n\n`" + prefix + "game <game>` - sets Natsuki's game.");
    console.log(message.author.tag + " executed the help command in " + message.guild.name);
  } else

    //ping - credit to kaoala7577 (DotBot repository), modified
  if(message.content.startsWith(prefix + "ping")) {
    message.channel.send("I don't want to play ping-pong, dummy!").then(rsp => {
      rsp.edit("I don't want to play ping-pong, dummy! Anyway, your ping is `" + (rsp.createdTimestamp - message.createdTimestamp) + " ms `");
      console.log(message.author.tag + " executed the ping command in " + message.guild.name);
    });
  } else

  //cute
  if(message.content.startsWith(prefix + "cute")) {
    message.channel.send("I'm not cute! Baka...");
    console.log(message.author.tag + " executed the cute command in " + message.guild.name);
  } else

  //info - credit to kaoala7577 (DotBot repository), modified
  if(message.content.startsWith(prefix + "info")) {
    let embed = new Discord.RichEmbed()
    .setDescription(bot.user.username + " is a tsundere bot created by Curlz#8184 with assistance from kaoala#7577. She was created in the [Javascript](https://www.javascript.com/) scripting language with the [Discord.js](https://discord.js.org/#/) library. Note that she's still in development so not everything I want is implemented.")
    .setColor(0xfa89c0)
    .setAuthor("Bot Info")
    .setThumbnail(bot.user.displayAvatarURL)
    .setFooter("It's not like I like you or anything... baka")
    .addField("Guilds", bot.guilds.size, true)
    .addField("Owner", config.ownerTag, true)
    .addField("Support Server", "[u g h . c o m](https://discord.gg/5qgHcxv)", true)
    .addField("Invite Link", "[Invite Me!](https://discordapp.com/api/oauth2/authorize?client_id=391933721546194944&permissions=8&scope=bot)", true)
    .setTimestamp();
    message.channel.send({embed});
    console.log(message.author.tag + " executed the info command in " + message.guild.name);
  } else

  //poem
  if(message.content.startsWith(prefix + "poem")) {
    var randomNumber = utils.random(arrayFile.numberArray);
    message.channel.send(`${randomNumber}`);
    console.log(message.author.tag + " executed the poem command in " + message.guild.name);
  } else

  //cookie
  if(message.content.startsWith(prefix + "cookie")) {
    message.channel.send("**HIYA!** :cookie: There ya go!");
    console.log(message.author.tag + " executed the cookie command in " + message.guild.name);
  } else
  
  //becauseyou
  if(message.content.startsWith(prefix + "becauseyou")) {
    var randomNumber = utils.random(arrayFile.becauseYou);
    message.channel.send(`${randomNumber}`);
    console.log(message.author.tag + " executed the Because You command in " + message.guild.name);
  } else

  //cake
  if(message.content.startsWith(prefix + "cake")) {
    message.channel.send("Look I baked some cakes, but if you only came for them I'll be pissed- wait this is a command just for cake, isn't it! Ugh ***fine***, take one. :cake:")
    console.log(message.author.tag + " executed the cake command in " + message.guild.name)
  } else

  //wansumfuk
  if(message.content.startsWith(prefix + "wansumfuk")) {
    message.channel.send("What the hell. Consent dude.")
    console.log(message.author.tag + " asked Natsuki for sum fuk in " + message.guild.name)
  } else

  //support
  if(message.content.startsWith(prefix + "support")) {
    let embed = new Discord.RichEmbed()
    .setDescription("You really need to speak to the owners? Fine... I'm only giving you the invite to be polite, ok?")
    .setColor(0xfa89c0)
    .setThumbnail(bot.user.displayAvatarURL)
    .setFooter("It's not like I like you or anything... baka")
    .addField("Support Server", "[u g h . c o m](https://discord.gg/5qgHcxv)", true)
    .setTimestamp();
    message.channel.send({embed});
    console.log(message.author.tag + " executed the info command in " + message.guild.name);
  } else

  //buffsuki
  if(message.content.startsWith(prefix + "buffsuki" )) {
    message.channel.send("**You called?**", {
        file:"http://i0.kym-cdn.com/photos/images/newsfeed/001/310/724/709.png"
    });
    console.log(message.author.tag + " called Buffsuki in " + message.guild.name);
  } else

  //neko
  if(message.content.startsWith(prefix + "neko")) {
    //images not owned by me, credit to original artists
    var imagePost = `./images/neko${utils.random([1,2,3,4,5,6,7])}.jpg`;
    message.channel.send("", {
      file:imagePost
    });
    console.log(message.author.tag + " executed the neko command in " + message.guild.name);
  } else
  
  //gameset (owner only)
	if(message.content.startsWith(prefix + "game ")) {
		if(!message.author.id == config.ownerID) return message.channel.send("Bot owner only");
		content = message.content.substring(6);
		content = content.replace("{prefix}", prefix).replace("{count}", bot.guilds.size);
		message.channel.send("Game has been set to `" + content + "`");
		bot.user.setGame(content);
		console.log("'Game' has been executed in the guild '" + message.guild.name + "'. Game was set to '" + content + "'");
  } else
  
  //monika
  if(message.content.startsWith(prefix + "monika")) {
    let embed = new Discord.RichEmbed()
    .setDescription("Ugh fine, I'll get Monika over here.")
    .setColor(0xfa89c0)
    .setThumbnail(bot.user.displayAvatarURL)
    .setFooter("It's not like I like you or anything... baka")
    .addField("Invite Link", "[Monika Bot](https://discordapp.com/api/oauth2/authorize?client_id=402160845515259924&permissions=8&scope=bot)")
    .setTimestamp();
    message.channel.send({embed});
    console.log(message.author.tag + " has executed the 'Monika' command in " + message.guild.name)
  } else

  //baka
  if(arrayFile.baka.some(word => message.content.includes(word)) ) {
    message.channel.send("What are you doing? That's **my** word! *Baka*");
    console.log("Natsuki responded to " + message.author.tag + " saying baka in " + message.guild.name);
  } else

  //poem ideas
  if(message.content.startsWith(prefix + "inspiration")) {
    var [a,b,c,d,e] = [utils.random(arrayFile.poem),utils.random(arrayFile.poem),utils.random(arrayFile.poem),utils.random(arrayFile.poem),utils.random(arrayFile.poem)];
    message.channel.send(`Hey, maybe you could try and write a poem with these words... **It's not like I'll like it or anything!**\n\n ${a}, ${b}, ${c}, ${d}, ${e}`);
  }

});

//kao can i just say you're amazing and ily
//seriously though ily thank you you're amazing 

//login
bot.login(config.token);
