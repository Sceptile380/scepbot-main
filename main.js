const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
const querystring = require('querystring');
const prefix = "$"
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
const talkedRecently = new Set();
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
// ##########################################################################
client.once('ready', () => {
    console.log('Sceptile is ready!!!!!!!');
    client.user.setActivity('I use arch btw');


});
// DEBUGING
process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});




// ############################################################################



client.on('message', message => {
if (!message.guild) return;
const args = message.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift().toLowerCase();
// ###########################################################################
if (!message.content.startsWith(prefix) || message.author.bot) return;
if (talkedRecently.has(message.author.id))
  return;

talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id);
}, 1500);

// ############################################################################

const emcol = ["#c28500","#c1d0e4","#009bff","#e9ebee","#e2b659","#e9edf2","#b9b9b9","#017c91","#ff80a8","#8fbc8f","#00b8ff","#3b0099","#0038fa","#2249aa","#ff003c","#ff280a","#a92323","#ff0000","#bbdcf2","#a5d1ee"];

     const emcolor = emcol[Math.floor(Math.random()*emcol.length)]


   if (command === 'help') {
     const bed = new Discord.MessageEmbed()
    .setColor(emcolor)
    .setTitle('Help')
    .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
    .setDescription(`Prefix is ${prefix}`)
    .addFields(
		{ name: '**OurGang**', value: 'Lists ourgang commands...', inline: true  },
		{ name: 'Support', value: 'Sends invite to support server', inline: true  },
		{ name: 'die', value: 'you die for something', inline: true  },
        { name: 'invite', value: 'Sends invite for the bot', inline: true  },
        { name: 'funfact', value: 'Get a fun fact ', inline: true},
        { name: 'cat', value: 'Shows a cat', inline: true},
		{ name: 'gotobrazil', value: 'sends the mentioned user to brazil', inline: true},
		{ name: 'question', value: 'replies with yes or no to your questions', inline: true},
		{ name: 'ban', value: 'get banned lol (admin only!)', inline: true},
		{ name: 'bean', value: 'get BEANED lol', inline: true},
		{ name: 'say', value: 'he acts like a parrot (admins only!)', inline: true}

	)
    .setFooter('h, also ping command does it\'s function');
     message.channel.send(bed)

	}

    else if (command == 'say') {
if (!args.length) {message.channel.send("What should i say")}
if (message.member.hasPermission('ADMINISTRATOR')) message.channel.send(args.join(" "))
else { message.channel.send("no ur not an admin") }

}
    else if (command == 'ping') {
    message.channel.send('Pinging...').then(sent => {
    sent.edit(`My ping: ${sent.createdTimestamp - message.createdTimestamp}ms api ping ${client.ws.ping}ms`);
});
}


else if (command === 'die') {
        const months = ["died because he tried to breathe lava", "is dead cause the chat xd", "died for being cringe", "died for being simp", " is dead for watching too much Bsp", " died for saying h too many times.", "died for the joy of everyone", "died because he is a fucking bedrock breaker and nobody likes him.", "has fallen in a river", "spilled his brain off his left ear. Correction: he never had a brain, he just spilled some shit. my bad.", "committed suicide. You fool!", "***, do you wanna have a bad time?***", ", you stink so much that neither the Death wants you. Sad."];

    const ra = months[Math.floor(Math.random()*months.length)]
    message.channel.send(`${message.author.username} ${ra}`);
}
   else if (command === 'zap') {
    const exampleEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
	.setColor(emcolor)
	.setTitle('Zappatron')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setDescription('Zappatron, AKA Zap, is a gay boy. He is 13 years old and like brawlstarsp. He is a horni boi, expert csv modder, likes 8-bit, and sometimes asks sceptile to make a maid skin for it. With sceptile, he got 3 brawlers in reBrawl.')
	 .setFooter('a h');
     message.channel.send(exampleEmbed);
    }
   else if (command === 'sceptile') {
     const Embed = new Discord.MessageEmbed()
     .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
       .setColor(emcolor)
       .setTitle('Sceptile380')
       .setDescription('Sceptile380 is a 15 years old boy from Italy. He does lots of dumb jokes about his country, but no one cares. He likes Pokemon since he was 6, and likes Brawl Stars because of Modding. He is also a good Modder and can make custom skins.')
        .setFooter('he wears an eyepatch that he actually don\'t need.');
    message.channel.send(Embed)
}


    else if (command === 'sand') {
        const Emb = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
          .setColor(emcolor)
          .setTitle('Mr.Sandman')
          .setDescription('Mr. Sandman, or just Sand is a 12 years old boi that likes the character Sandy from Brawl Stars. He is a protogen now. He cured his depression thanks to his Discord friends. He likes to draw and does it very well. He tried to escape Our brawl...but there is no WAY.Now he is a protogen furry.')
           .setFooter('he is secretly sandsunderman');
       message.channel.send(Emb)

}

    else if (command === 'andrew') {
               const andrew = new Discord.MessageEmbed()
               .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
             .setColor(emcolor)
             .setTitle('Andrew.')
             .setDescription('Andrew. is a...half Steve from Minecraft amd half Funtime Foxy. He is a notorious Modder and skin maker and is a friend of TheAmazingCC. He is famous for the "Arcade Shelly" skin that he made for ReBrawl. He also likes Friday night fuckin and is making a whole mod for our gang.')
              .setFooter('but nowdays nobody plays that skin.');
          message.channel.send(andrew)

}
   else if (command === 'delta') {
            const delta = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
                .setColor(emcolor)
                .setTitle('Delta')
                .setDescription('Retarded as hell. Likes coding and undertale. Also very lazy. Hates ships. Positive')
                .setFooter('to coronavirus. jk');
      message.channel.send(delta)
}

    else if (command === 'serious') {
               const serious = new Discord.MessageEmbed()
               .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
                    .setColor(emcolor)
                    .setTitle('Ocean man')
                    .setDescription('oh, you wanna know about this guy? This guy love dolphins.and yeah... this guy is nothing special.')
                    .setFooter('SERIOUS LOL');
       message.channel.send(serious)
}
    else if (command === 'skm') {
                 const skm  = new Discord.MessageEmbed()
                 .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
                    .setColor(emcolor)
                    .setTitle('SKM')
                    .setDescription('SKM - A human being obsessed with modding Brawl Stars, playing Cookie Run, going to school and secretly saving random pictures of Cirno Fumo on his 1TB hard drive.')
                    .setFooter('lol h');
          message.channel.send(skm)

}

else if (command === 'eal') {
                    const eal  = new Discord.MessageEmbed()
                        .setColor(emcolor)
                        .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
                        .setTitle('Ealanedem')
                        .setDescription('Professional idot. 17y old, known for making Brawl Stars csv mods and hes a moon')
                        .setFooter('do not the cat is gon');
             message.channel.send(eal)
}

    else if (command === 'bea') {
                       const be  = new Discord.MessageEmbed()
                        .setColor(emcolor)
                        .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
                        .setTitle('Bea')
                        .setDescription('Bea is a beesexual 13 years old. He says "Ok" too many times and wanted to delete Our Brawl for no reasons, but it got deleted anyways. Bee free!')
                        .setFooter('understandable, have a mice day.');
                message.channel.send(be)

}
else if (command === 'wendro') {
                       const be  = new Discord.MessageEmbed()
                        .setColor(emcolor)
                        .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
                        .setTitle('wendro')
                        .setDescription('Wendro is a boy from Poland. He is pretty good at modding Brawl Stars, and is really impatient. He likes many games, mostly Pokemon series, Kirby series, Undertale and Cuphead. His favourite number is 15. Not much to say about him.')
                        .setFooter('he is a green kirb');
                message.channel.send(be)

}
else if (command === 'fab') {
                       const be  = new Discord.MessageEmbed()
                        .setColor(emcolor)
                        .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
                        .setTitle('Fabtastic')
                        .setDescription('Fab is a "bad" artist, when he actually is good. atleast thats what others say. he is a content creator and bs player. that is pretty much all. i guess.')
                        .setFooter('best artist ever');
                message.channel.send(be)

}
   else if (command === 'invite') {
    message.channel.send('https://discordapp.com/oauth2/authorize?client_id=767120467806388254&scope=bot&permissions=2146958847 Here. why you want me?')
}

   else if (command === 'server') {
   /* message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\n server id: ${message.guild.id} \n afk channel : ${message.guild.afkChannel} \n afk timeout : ${message.guild.afkTimeout} \n channels : ${message.guild.channels} \n CreatedAt: ${message.guild.createdAt} \n descriptions (null if it doesn't have) : ${message.guild.description} \n channels : ${message.guild.channels}`)
    */
    let embed = new Discord.MessageEmbed()
            .setColor(emcolor)
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setTitle("Server Info")
            .setImage(message.guild.iconURL)
            .setDescription(`${message.guild}'s information`)
            .addField("Owner", `The owner of this server is ${message.guild.owner}`)
            .addField("Member Count", `This server has ${message.guild.memberCount} members`)
            .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
            .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`)
              .addField('Location', message.guild.region, true)
 .setTimestamp()
   .setFooter(client.user.username, client.user.avatarURL);


        message.channel.send(embed)
}

    else if (command === 'funfact'){
                   const h = ["Zap, before being gay, was bisexual for some reasons.", "Andrew became Sceptile380's gf for 4 minutes only because Sceptile wanted a gf.", "Sceptile380 has never seen brawlstarsphomo, luckily.", "Spungebob left Our Brawl because yes.", " Sceptile380's oc have an hook now.", "Scand bot will be a brawler if ealanedem completes it.", " spunge is bacc yay" , "hey shitass... nvm.", "Now Sand is a protogen." , "Wendro came straight from reddit and surprisingly everyone knew him." , "yooooooo! who lives in a pinap- nevermind I'm having a stroke.", " People finally stopped hating Zap.", " Pedro now tries to simp Sceptile in dms saying senpai.", " Bea pfp will always be a nsfw cropped pic or smth of similar", "Delta **was** the new owner of Brawl 'n talk cuz yes.", " spunj blocked his friends, then one day he came back.", " Plane have a new battle partner: Carmor."];

   const r = h[Math.floor(Math.random()*h.length)]
   message.channel.send(r);

}

    else if (command === 'spunge') {
                           const spunj  = new Discord.MessageEmbed()
                           .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
                            .setColor(emcolor)
                            .setTitle('Spungebob')
                            .setDescription('Spunge is a 13 yeard old boy that likes to chat on discord and play brawl stars. he tries not to go mentaly insane because of school and can have mental breakdowns. He is very weird sometimes, and a big dumbass.')
                            .setFooter('simp');
                  message.channel.send(spunj)

    }
        else if (command === 'ourgang') {
        message.channel.send('info of these guys:\n-$zap\n-$sceptile\n-$andrew \n-$sand\n-$skm\n-$delta\n-$eal\n-$serious\n-$bea\n-$spunge\n-$wendro\n-$fab')
        }

		else if (command === 'question'){
			if (!args.length) {
            return message.channel.send("you dumbass have to ask me a question.");
            }
                   const h = ["yes", "no", "maybe", "most lickely yes", "not sure", "probably no", "am I supposed to know?", "I dunno. Isuppose yes"];

   const r = h[Math.floor(Math.random()*h.length)]
   message.channel.send(r);

}
if (command === 'gotobrazil') {
if (!message.mentions.users.size) {
	return message.reply('MENTION YOURSELF DUMB FUCK');
}

   const brazil = ["has been sent to brazil. Muito quente...", ",Olá amigo! Bem vindo ao Brasil!", ", TheAmazingCC carried you to brazil"];
  const bruhzil = brazil[Math.floor(Math.random()*brazil.length)]
 {message.channel.send(message.mentions.users.first().username + " " + bruhzil)}


}




if (command === 'bean') {
if (!message.mentions.users.size) {
       return message.reply('no');
   }

message.channel.send(message.mentions.users.first().username + " " + "has been beaned. LOL")

}



});
// --------------------------------- ASYNC ---------------------------------------------------------------
client.on("message", async message => {
 const args = message.content.slice(prefix.length).trim().split(/ +/);
 const command = args.shift().toLowerCase();

    if (command === ('pokemon')) {
      const x = args.join("_")
      if((await fetch("https://m.bulbapedia.bulbagarden.net/wiki/"+x+"_(Pok%C3%A9mon)")).status == 404){
        message.channel.send("not found")
      }
      else {
    message.channel.send("https://m.bulbapedia.bulbagarden.net/wiki/"+x+"_(Pok%C3%A9mon)")
}
    }

  if(message.content.startsWith(prefix + 'ban')) {
      if (!message.member.hasPermission('BAN_MEMBERS'))
      return message.reply("No permissions");
     let member = message.mentions.members.first();
     if(!member)
       return message.reply("Invalid user");
     if(!member.bannable)
       return message.reply("Cannot ban user");

    let reason = args.slice(1).join(" ");
     if(!reason) reason = "None";

    await member.ban({reason : reason})
      .catch(error => message.reply(`${message.author} Error : ${error}`));
    message.reply(`${member.user.tag} is banned by ${message.author.tag} because: ${reason}, for : 5 years`);


    }
 if(message.content.startsWith(prefix + 'cat')) {
      const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
      const fembed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Cat')
	.setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
	.setImage(file)
	.setTimestamp();

 message.channel.send(fembed)
}

 })
// only for sceptile commands
 client.on("message", message => {
 const args = message.content.split(" ").slice(1);


    if(message.author.id !== '572469043265536000') return;
    if (message.content.startsWith('$' + "eval")) {
      try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});
 // #_---------------------------------------- token -----------------------------------------
client.login('NzY3MTIwNDY3ODA2Mzg4MjU0.X4tSmw.wOa7LWS_toOX20NTplztyCeKArk');

