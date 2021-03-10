
const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
const querystring = require('querystring');
const prefix = "$"

const talkedRecently = new Set();
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
// ##########################################################################
client.once('ready', () => {
    console.log('Sceptile is ready!!!!!!!');

});
// DEBUGING
process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});
// ############################################################################
client.on('message', message => {
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
        { name: 'cat', value: 'Shows a cat', inline: true}

	)
    .setFooter('h, also ping command does it\'s function');
     message.channel.send(bed)

	}


    else if (command == 'ping') {
    message.channel.send('Pinging...').then(sent => {
    sent.edit(`My ping: ${sent.createdTimestamp - message.createdTimestamp}ms api ping ${client.ws.ping}ms`);
});
}
else if (command === 'pokemon') {
          if (!args.length) { message.channel.send("what pokemon?, Your mom?") }
         message.channel.send("https://m.bulbapedia.bulbagarden.net/wiki/" + args[0] + "_(Pok%C3%A9mon)")
         }

else if (command === 'die') {
        const months = ["died because he tried to breathe lava", "is dead cause the chat xd", "died for being cringe", "died for being simp", " is dead for watching too much Bsp", " died for saying h too many times.", "died for the joy of everyone"];

    const ra = months[Math.floor(Math.random()*months.length)]
    message.channel.send(`${message.author.username} ${ra}`);
}
   else if (command === 'zap') {
    const exampleEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
	.setColor(emcolor)
	.setTitle('Zappatron')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setDescription('Zappatron, AKA Zap, is a gay boy. He is 13 years old and like brawlstarsp. He is a horni boi, expert csv modder, likes 8-bit, and have a partner, called PedroAPD. They are Shipped and called "Zappedro"')
	 .setFooter('but no one likes the ship');
     message.channel.send(exampleEmbed);
    }
   else if (command === 'sceptile') {
     const Embed = new Discord.MessageEmbed()
     .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
       .setColor(emcolor)
       .setTitle('Sceptile380')
       .setDescription('Sceptile380 is a 15 years old boy from Italy. He does lots of dumb jokes about his country, but no one cares. He likes Pokemon since he was 6, and likes Brawl Stars because of Modding. He is also a good Modder and can make custom skins.')
        .setFooter('he is a green boi with an eyepatch that he acutally don\'t need.');
    message.channel.send(Embed)
}


    else if (command === 'sand') {
        const Emb = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
          .setColor(emcolor)
          .setTitle('Mr.Sandman')
          .setDescription('Mr. Sandman, or just Sand is a 12 years old boi that likes the character Sandy from Brawl Stars. He cured his depression thanks to his Discord friends. He likes to draw and does it very well. He tried to escape Our brawl...but there is no WAY.Now he is a protogen furry.')
           .setFooter('he is secretly sandsunderman');
       message.channel.send(Emb)

}

    else if (command === 'andrew') {
               const andrew = new Discord.MessageEmbed()
               .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
             .setColor(emcolor)
             .setTitle('Andrew')
             .setDescription('Andrew. is a...half Steve from Minecraft amd half Funtime Foxy. He is a notorious Modder and skin maker and is a friend of TheAmazingCC. He is famous for the "Arcade Shelly" skin that he made for ReBrawl')
              .setFooter('but nowdays nobody plays that skin.');
          message.channel.send(andrew)

}
   else if (command === 'delta') {
            const delta = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
                .setColor(emcolor)
                .setTitle('Delta')
                .setDescription('Retarded as hell. Likes coding and undertale. Also very lazy. Hates ships. Positive')
                .setFooter('to coronavirus');
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
   else if (command === 'invite') {
    message.channel.send('https://discordapp.com/oauth2/authorize?client_id=767120467806388254&scope=bot&permissions=2146958847 Here. why you want me?')
}

   else if (command === 'server') {
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\n server id: ${message.guild.id}`)
}

    else if (command === 'funfact'){
                   const h = ["Zap, before being gay, was bisexual for some reasons.", "Andrew became Sceptile380's gf for 4 minutes only because Sceptile wanted a gf.", "Sceptile380 has never seen brawlstarsphomo, luckily.", "Spungebob left Our Brawl because yes.", " Sceptile380's oc have an hook now.", "Scand bot will be a brawler if ealanedem completes it.", " Ocean man simp chinre!!1!!" , "hey shitass... nvm.", "Now Sand is a protogen." , "Wendro came straight from reddit and surprisingly everyone knew him." , "yooooooo! who lives in a pinap- nevermind I'm having a stroke.", " People finally stopped hating Zap.", " Pedro now tries to simp Sceptile in dms saying senpai.", " Bea pfp will always be a nsfw cropped pic or smth of similar", "Delta is the new owner of Brawl 'n talk cuz of yes.", " spunj blocked his friends.", " Plane have a new battle partner: Carmor."];

   const r = h[Math.floor(Math.random()*h.length)]
   message.channel.send(r);

}

    else if (command === 'spunge') {
                           const spunj  = new Discord.MessageEmbed()
                           .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
                            .setColor(emcolor)
                            .setTitle('Spungebob')
                            .setDescription('Spunge is a 13 yeard old boy that likes to chat on discord and play brawl stars. I try not to go mentaly insane because of school and i can have mental breakdown. Im very weird sometimes, and a big dumbass.')
                            .setFooter('simp');
                  message.channel.send(spunj)

    }
        else if (command === 'ourgang') {
        message.channel.send('info of these guys:\n-$zap\n-$sceptile\n-$andrew \n-$sand\n-$skm\n-$delta\n-$eal\n-$serious\n-$bea\n-$spunge')
        }
// --------------------------------- ASYNC ---------------------------------------------------------------


});
client.on("message", async message => {
   const args = message.content.slice(prefix.length).trim().split(/ +/);
     const command = args.shift().toLowerCase();

   if(command === "ban") {
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
   /* if (command === "mute") {
    if (!args.length) {
    return message.channel.send("Noobody to mute")
    }
             if (!message.member.hasPermission('MANAGE_MESSAGES')) {
                message.channel.send("No permissions")
         };
   let tomute = message.mentions.members.first();

  if (!tomute) {
    message.channel.send("Invalid user")
  };
          let muterole = message.guild.roles.cache.find(r => r.name ===  "Muted");
        if (!muterole) {
    try {
      muterole = await message.guild.roles.create({
        name: "Muted",
        color: "#000000",
        permissions: []
      })
      message.guild.channels.cache.forEach(async (channel, id) => {
        await message.channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }
          let mutetime = args[1];
  if (!mutetime) return message.channel.send("specify time");
  await (tomute.roles.add(muterole.id));
  message.channel.send(` \n<@${tomute.id}> muted for ${ms(ms(mutetime))}`);
  setTimeout(function() {
    tomute.removeRole(muterole.id);
    message.channel.send(`\n<@${tomute.id}>unmuted!`);
  }, ms(mutetime));
    }; */
else if (command === 'cat') {

      const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
const fembed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Cat')
	.setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
	.setImage(file)
	.setTimestamp();

message.channel.send(fembed)
}


 });
 // #_---------------------------------------- token -----------------------------------------
client.login('NzY3MTIwNDY3ODA2Mzg4MjU0.X4tSmw.wOa7LWS_toOX20NTplztyCeKArk');

