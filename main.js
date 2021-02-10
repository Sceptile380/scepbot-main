const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$"
client.once('ready', () => {
	console.log('Sceptile is ready!!!!!!!');
});
client.on('message', message => {
const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!message.content.startsWith(prefix) || message.author.bot) return;
   if (command === 'help') {
	 message.channel.send(`Hello, how can i help you? \`\`\` -die: you die for something.\n \n -invite: get an instant invite link. \n \n -OurGang: get the list.\n \n -stfu:[admin only] delete the last message. \n \n Sceptile: see a gif of Sceptile because it's cool \n \n  -funfact: get a fun fact! \`\`\` `);
	}
    if (command === 'die') {
        const months = ["[died because he tried to breathe lava; is dead cause the chat xd", "died for being cringe", "died for being simp", " is dead for watching too much Bsp", " died for saying h too many times.", "died for the joy of everyone"];

const ra = months[Math.floor(Math.random()*months.length)]
message.channel.send(message.author.username + ra);
    }
    if (command === 'zap') {

    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#58f8ff')
	.setTitle('Zappatron')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setDescription('Zappatron, AKA Zap, is a gay boy. He is 13 years old and like brawlstarsp. He is a horni boi, expert csv modder, likes 8-bit, and have a partner, called PedroAPD. They are Shipped and called "Zappedro')
	 .setFooter('he is a green boi with an eyepatch that he acutally dont need.');
     message.channel.send(exampleEmbed);
    }
    if (command === 'sceptile') {
     const Embed = new Discord.MessageEmbed()
       .setColor('#58f8ff')
       .setTitle('Sceptile380')
       .setDescription('Sceptile380 is a 15 years old boy from Italy. He does lots of dumb jokes about his country, but no one cares. He likes Pokemon since he was 6, and likes Brawl Stars because of Modding. He is also a good Modder and can make custom skins.')
        .setFooter('he is a green boi with an eyepatch that he acutally don\'t need.');
    message.channel.send(Embed)
    }
    if (command === 'sand') {
const Emb = new Discord.MessageEmbed()
          .setColor('#ff32ec')
          .setTitle('Mr.Sandman')
          .setDescription('Mr. Sandman, or just Sand is a 12 years old boi that likes the character Sandy from Brawl Stars. He cured his depression thanks to his Discord friends. He likes to draw and does it very well. He tried to escape Our brawl...but there is no WAY.Now he is a protogen furry.')
           .setFooter('he is secretly sandsunderman');
       message.channel.send(Emb)

    }
    if (command === 'andrew') {
               const andrew = new Discord.MessageEmbed()
             .setColor('#ff32ec')
             .setTitle('Andrew')
             .setDescription('Andrew. is a...half Steve from Minecraft amd half Funtime Foxy. He is a notorious Modder and skin maker and is a friend of TheAmazingCC. He is famous for the "Arcade Shelly" skin that he made for ReBrawl')
              .setFooter('but nowdays nobody plays that skin.');
          message.channel.send(andrew)

    }
    if (command === 'delta') {
                          const delta = new Discord.MessageEmbed()
                .setColor('#ff32ec')
               .setTitle('Delta')
                .setDescription('Retarded as hell. Likes coding and undertale. Also very lazy. Hates ships. Positive')
                 .setFooter('to coronavirus');
      message.channel.send(delta)
    }
    if (command === 'serious') {
               const serious = new Discord.MessageEmbed()
                   .setColor('#06fff8')
                  .setTitle('Ocean man')
                   .setDescription('oh, you wanna know about this guy? This guy loves dolphins. And yeah, this guy is nothing special')
                    .setFooter('he is special acutally.');
       message.channel.send(serious)

    }
    if (command === 'skm') {
                 const skm  = new Discord.MessageEmbed()
                      .setColor('#06fff8')
                     .setTitle('SKM')
                      .setDescription('SKM - A human being obsessed with modding Brawl Stars, playing Cookie Run, going to school and secretly saving random pictures of Cirno Fumo on his 1TB hard drive.')
                       .setFooter('old cum man guy');
          message.channel.send(skm)

    }
    if (command === 'eal') {
                    const eal  = new Discord.MessageEmbed()
                         .setColor('#06fff8')
                        .setTitle('Ealanedem')
                         .setDescription('Professional idot. 17y old, known for making Brawl Stars csv mods and hes a moon')
                          .setFooter('do not the cat is gon');
             message.channel.send(eal)

    }
    if (command === 'bea') {
                       const be  = new Discord.MessageEmbed()
                            .setColor('#ff9919')
                           .setTitle('Bea')
                            .setDescription('Bea is a beesexual 13 years old. He says "Ok" too many times and wanted to delete Our Brawl for no reasons, but it got deleted anyways. Bee free!')
                             .setFooter('understandable, have a mice day.');
                message.channel.send(be)

    }
    if (command === 'invite') {
    message.channel.send('https://discordapp.com/oauth2/authorize?client_id=767120467806388254&scope=bot&permissions=2146958847 Here. why you want me?')
    }
    if (command === 'say') {
    const say = new Discord.MessageEmbed()
    .setTitle(args.join( ));
    message.channel.send(say)
    }
    if (command === 'funfact') {
                   const h = ["Zap, before being gay, was bisexual for some reasons.", "Andrew became Sceptile380's gf for 4 minutes only because Sceptile wanted a gf.", "Sceptile380 has never seen brawlstarsphomo, luckily.", "Spungebob left Our Brawl because yes.", " Sceptile380's oc have an hook now.", "Scand bot will be a brawler if ealanedem completes it.", " Ocean man simp chinre!!1!!" , "hey shitass... nvm.", "Now Sand is a protogen." , "Wendro came straight from reddit and surprisingly everyone knew him." , "yooooooo! who lives in a pinap- nevermind I'm having a stroke.", " People finally stopped hating Zap.", " Pedro now tries to simp Sceptile in dms saying senpai.", " Bea pfp will always be a nsfw cropped pic or smth of similar", "Delta is the new owner of Brawl 'n talk cuz of yes.", " spunj blocked his friends.", " Plane have a new battle partner: Carmor."];

   const r = h[Math.floor(Math.random()*h.length)]
   message.channel.send(r);

    }
    if (command === 'spunge') {
                           const spunj  = new Discord.MessageEmbed()
                               .setColor('#ff9919')
                              .setTitle('Spungebob')
                               .setDescription('Spunge is a 13 yeard old boy that likes to chat on discord and play brawl stars. I try not to go mentaly insane because of school and i can have mental breakdown. Im very weird sometimes, and a big dumbass.')
                               .setFooter('simp');
                  message.channel.send(spunj)

    }
        if (command === 'ourgang') {
        message.channel.send('info of these guys:\n-$zap\n-$sceptile380\n-$andrew \n-$sandman\n-$skm\n-$delta\n-$ealanedem\n-$serious\n-$bea\n-$spungebob')
        }
		if (command === 'support') {
    message.channel.send('Come here to get support: https://discord.gg/PZEd2G7wbB')
    }

});

client.login('NzY3MTIwNDY3ODA2Mzg4MjU0.X4tSmw.wOa7LWS_toOX20NTplztyCeKArk');

