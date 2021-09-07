const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({
    disableMentions: 'all'
});
const fetch = require('node-fetch');
const prefix = process.env.PREFIX
const owner = process.env.OWNER
const os = require("os")
const talkedRecently = new Set();
const talkedbruh = new Set();
//const osu = require("node-os-utils");
// functions
const testing = false
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}


function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
client.once('ready', () => {
    console.log(`${client.user.tag} is ready!!!!!!!`);
    client.user.setActivity('updating...');
});


process.on('unhandledRejection', error => {
// Uh oh it would be nice if you actually, seperated the words, thanks
  console.error('Unhandled promise rejection:', error);
});


//############################################################################



client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (!message.guild) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (talkedRecently.has(message.author.id))
        return;
    talkedRecently.add(message.author.id);
    setTimeout(() => {
        talkedRecently.delete(message.author.id);
    }, 1500);

     // yes yes i know i know, i could've just generated random color but uh oh why not this, i'm sure no one will notice :)
    const emcol = ["#c28500", "#c1d0e4", "#009bff", "#e9ebee", "#e2b659", "#e9edf2", "#b9b9b9", "#017c91", "#ff80a8", "#8fbc8f", "#00b8ff", "#3b0099", "#0038fa", "#2249aa", "#ff003c", "#ff280a", "#a92323", "#ff0000", "#bbdcf2", "#a5d1ee"];
    const emcolor = emcol[Math.floor(Math.random() * emcol.length)]


  if (command === 'help') {
        if (!args.length) {
            const bed = new Discord.MessageEmbed()
                .setColor(emcolor)
                .setTitle('Help CATEGORIES')
                .setAuthor(message.author.username, message.author.displayAvatarURL({
                    format: "png",
                    dynamic: true
                }))
                .setDescription(`**Prefix is ${prefix}**`)
                .addFields({
                    name: '$OurGang',
                    value: 'Lists ourgang commands...'
                }, {
                    name: '$help games',
                    value: 'lists games'
                }, {
                    name: '$help fun',
                    value: 'lists fun commands (all fun and games :)'
                }, {
                    name: '$help bot',
                    value: 'commands like about the bot or invite'
                }, {
                    name: '$help ulity',
                    value: 'normal commands, ig'
                })
            message.channel.send(bed)

        }
        const bed = new Discord.MessageEmbed()
            .setColor(emcolor)
            .setTitle('Help CATEGORIES')
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .setDescription(`**Prefix is ${prefix}**`)
            .addFields({
                name: '$OurGang',
                value: 'Lists ourgang commands...'
            }, {
                name: '$help games',
                value: 'lists games'
            }, {
                name: '$help fun',
                value: 'lists fun commands (all fun and games :)'
            }, {
                name: '$help bot',
                value: 'commands like about the bot or invite'
            }, )
            .setFooter('hi');
        if (args[0] == "games") {
            const embeda = new Discord.MessageEmbed()
                .setColor(emcolor)
                .setTitle('Help GAMES')
                .setAuthor(message.author.username, message.author.displayAvatarURL({
                    format: "png",
                    dynamic: true
                }))
                .setDescription(`**Prefix is ${prefix}**`)
                .addFields({
                    name: '$coinflip',
                    value: '~~says heads or tails~~ you... flip a coin ig...'
                }, {
                    name: '$dumbrate',
                    value: '(technically this isn\'t a game but whatever) how dumb you are, ig (completly random)'
                }, {
                    name: '$die',
                    value: '(technically this isn\'t a game but whatever) you die, ig, for something (completly random)'
                }, {
                    name: '$question',
                    value: 'question, idk (technically not a game)'
                }, )
                .setFooter('hi');
            message.channel.send(embeda)
        }
        if (args[0] == "bot") {
            const embedb = new Discord.MessageEmbed()
                .setColor(emcolor)
                .setTitle('Help bot')
                .setAuthor(message.author.username, message.author.displayAvatarURL({
                    format: "png",
                    dynamic: true
                }))
                .setDescription(`**Prefix is ${prefix}**`)
                .addFields({
                    name: '$ping',
                    value: 'api and my ping'
                }, {
                    name: '$invite',
                    value: '"link" to the bot'
                }, {
                    name: '$eval',
                    value: 'just a thing where **sceptile (only)** can execute javascript on go'
                }, {
                    name: "$resources",
                    value: "Displays stuff like ram usage"
                })
                .setFooter('hi');
            message.channel.send(embedb)
        }
        if (args[0] == 'ulity') {
            const embedd = new Discord.MessageEmbed()
                .setColor(emcolor)
                .setTitle('help ULITY')
                .setAuthor(message.author.username, message.author.displayAvatarURL({
                    format: "png",
                    dynamic: true
                }))
                .setDescription("Prefix is $")
                .addFields({
                        name: '$cat',
                        value: 'cats are cool'
                    }, {
                        name: '$server',
                        value: 'cool info, am i right'
                    }, {
                        name: 'ban',
                        value: 'i said, all fun and games'
                    }



                )
                .setFooter('hello');
            message.channel.send(embedd)
        }

        if (args[0] == "fun") {
            const embedc = new Discord.MessageEmbed()
                .setColor(emcolor)
                .setTitle('Help fun')
                .setAuthor(message.author.username, message.author.displayAvatarURL({
                    format: "png",
                    dynamic: true
                }))
                .setDescription(`**Prefix is ${prefix}**`)
                .addFields({
                    name: '$gotobrazil',
                    value: 'ehm, you go to brazil'
                }, {
                    name: '$bean',
                    value: 'get beaned lol, i mean "bean someone"'
                }, {
                    name: '$pokemon',
                    value: 'get an.. image of a pokemon, that\'s all'
                })
                .setFooter('hi');
            message.channel.send(embedc)
        }
    }



    if (command == 'lobster-nita') {
        message.channel.send("https://make.supercell.com/en/creation/lobster-nita ***Remember this? Feel old yet?***")
    } else if (command == 'resources') {
        var emlol = new Discord.MessageEmbed()
            .setColor(emcolor)
            .setTitle('Resources')
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .addFields(
                //{name: "Cpu usage:", value: getCpuUsage() + '%' },
                {
                    name: "Memory usage:",
                    value: formatBytes(os.freemem())
                }, {
                    name: "total memory:",
                    value: formatBytes(os.totalmem())
                }, {
                    name: "Uptime:",
                    value: Math.floor(process.uptime()) + " seconds"
                }
            )
        message.channel.send(emlol)
    } else if (command == 'coinflip') {
        const aaa = ["tails", "heads"];
        const aaaa = aaa[Math.floor(Math.random() * aaa.length)]
        var varabl = true
        if (args[0].toLowerCase() == 'heads') {
            varabl = false
            if (aaaa == "tails") {
                const onetwo = new Discord.MessageEmbed()
                    .setColor(emcolor)
                    .setTitle('Tails..')
                    .setAuthor(message.author.username, message.author.displayAvatarURL({
                        format: "png",
                        dynamic: true
                    }))
                    .setDescription("U lost, it landed on tails");

                message.channel.send(onetwo)
            } else if (aaaa == 'heads') {

                const two = new Discord.MessageEmbed()
                    .setColor(emcolor)
                    .setTitle('Heads...')
                    .setAuthor(message.author.username, message.author.displayAvatarURL({
                        format: "png",
                        dynamic: true
                    }))
                    .setDescription("It landeed on heads let's goo!!!");

                message.channel.send(two)

            }
        } else if (args[0].toLowerCase() == 'tails') {
            varabl = false
            if (aaaa == "tails") {
                const idka = new Discord.MessageEmbed()
                    .setColor(emcolor)
                    .setTitle('Tails..')
                    .setAuthor(message.author.username, message.author.displayAvatarURL({
                        format: "png",
                        dynamic: true
                    }))
                    .setDescription("It landed on tails let's goo");

                message.channel.send(idka)
            } else if (aaaa == 'heads') {
                const aaaaaa = new Discord.MessageEmbed()
                    .setColor(emcolor)
                    .setTitle('Heads..')
                    .setAuthor(message.author.username, message.author.displayAvatarURL({
                        format: "png",
                        dynamic: true
                    }))
                    .setDescription("U lost, it landed on heads");

                message.channel.send(aaaaaa)

            }

        }
        if (varabl) {
            message.channel.send("Heads or tails?")
        }
    } else if (command == 'say') {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            if (!args.length) {
                message.channel.send("What should I say?")
            }
            message.channel.send(args.join(" "))
            message.delete()
        }
		    } else if (command == 'coinflip') {
        const aaa = ["tails", "heads"];
        const aaaa = aaa[Math.floor(Math.random() * aaa.length)]
        var varabl = true
        if (args[0].toLowerCase() == 'heads') {
            varabl = false
            if (aaaa == "tails") {
                const onetwo = new Discord.MessageEmbed()
                    .setColor(emcolor)
                    .setTitle('Tails..')
                    .setAuthor(message.author.username, message.author.displayAvatarURL({
                        format: "png",
                        dynamic: true
                    }))
                    .setDescription("U lost, it landed on tails");

                message.channel.send(onetwo)
            } else if (aaaa == 'heads') {

                const two = new Discord.MessageEmbed()
                    .setColor(emcolor)
                    .setTitle('Heads...')
                    .setAuthor(message.author.username, message.author.displayAvatarURL({
                        format: "png",
                        dynamic: true
                    }))
                    .setDescription("It landeed on heads let's goo!!!");

                message.channel.send(two)

            }
        } else if (args[0].toLowerCase() == 'tails') {
            varabl = false
            if (aaaa == "tails") {
                const idka = new Discord.MessageEmbed()
                    .setColor(emcolor)
                    .setTitle('Tails..')
                    .setAuthor(message.author.username, message.author.displayAvatarURL({
                        format: "png",
                        dynamic: true
                    }))
                    .setDescription("It landed on tails let's goo");

                message.channel.send(idka)
            } else if (aaaa == 'heads') {
                const aaaaaa = new Discord.MessageEmbed()
                    .setColor(emcolor)
                    .setTitle('Heads..')
                    .setAuthor(message.author.username, message.author.displayAvatarURL({
                        format: "png",
                        dynamic: true
                    }))
                    .setDescription("U lost, it landed on heads");

                message.channel.send(aaaaaa)

            }

        }
        if (varabl) {
            message.channel.send("Heads or tails?")
        }
    } else if (command == 'say') {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            if (!args.length) {
                message.channel.send("What should I say?")
            }
            message.channel.send(args.join(" "))
            message.delete()
        }
		 {

    if (command === 'rps') {
        const acceptedReplies = ['rock', 'paper', 'scissors'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

        const choice = args[0];
        if (!choice) return message.channel.send(`How to play: \`${prefix}rps <rock|paper|scissors>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        
        console.log('Bot Result:', result);
        if (result === choice) return message.reply("It's a tie! We had the same choice.");
        
        switch (choice) {
            case 'rock': {
                if (result === 'paper') return message.reply('I won!');
                else return message.reply('You won!');
            }
            case 'paper': {
                if (result === 'scissors') return message.reply('I won!');
                else return message.reply('You won!');        
            }
            case 'scissors': {
                if (result === 'rock') return message.reply('I won!');
                else return message.reply('You won!');
            }
            default: {
                return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
            }

    }
    //else if (command == 'servers') {
    //client.guilds.cache.forEach((guild) => {
    //           message.channel.send(" - " + guild.name)
    //  })
    //}
    
	else if (command == 'dumbrate') {

        var whatev = new Discord.MessageEmbed()
            .setColor(emcolor)
            .setTitle('Dumbrate')
            //       .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true }))
            .setDescription("Ur " + Math.floor(Math.random() * 101) + "% dumb");


        message.channel.send(whatev)
    } else if (command == 'ping') {
        message.channel.send('Pinging...').then(sent => {
            var embrd = new Discord.MessageEmbed()
                .setColor(emcolor)
                .setTitle('Ping')
                .setAuthor(message.author.username, message.author.displayAvatarURL({
                    format: "png",
                    dynamic: true
                }))
                .setDescription(`My ping: ${sent.createdTimestamp - message.createdTimestamp}ms api ping ${client.ws.ping}ms`);


            sent.edit(`My ping: ${sent.createdTimestamp - message.createdTimestamp}ms api ping ${client.ws.ping}ms`);
        });
    } else if (command === 'die') {
        const months = ["died because he tried to breathe lava", "is dead cause the chat xd", "died for being cringe", "died for being simp", " is dead for watching too much Bsp", " died for saying h too many times.", "died for the joy of everyone", "died because he is a fucking bedrock breaker and nobody likes him.", "has fallen in a river", "spilled his brain off his left ear. Correction: he never had a brain, he just spilled some shit. my bad.", "committed suicide. You fool!", "***, do you wanna have a bad time?***", ", you stink so much that neither the Death wants you. Sad."];

        const ra = months[Math.floor(Math.random() * months.length)]

        var embrde = new Discord.MessageEmbed()
            .setColor(emcolor)
            .setTitle('You died for...')
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .setDescription(`${message.author.username} ${ra}`);

        message.channel.send(`${message.author.username} ${ra}`);
    } else if (command === 'zap') {
        const exampleEmbed = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .setColor(emcolor)
            .setTitle('Zappatron')
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .setDescription('self proclaimed game developer, owner of a "private server" based on classic brawl, has a very annoying attitude, everyone from bnt hates him because of his past.')
            .setFooter('a h');
        message.channel.send(exampleEmbed);
    } else if (command === 'sceptile') {
        const Embed = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .setColor(emcolor)
            .setTitle('Sceptile380')
            .setDescription('Sceptile380 is a 16 years old boy from Italy. He does lots of dumb jokes about his country, but no one cares, did you ask? He likes Pokemon since he was 5, and likes Brawl Stars because of Modding. He is also a good Modder and can make custom skins. During summer 2021, he decided to leave his modelling occupation.')
            .setFooter('he wears an eyepatch that he actually don\'t need.');
        message.channel.send(Embed)
    } else if (command === 'sand') {
        const Emb = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .setColor(emcolor)
            .setTitle('Mr.Sandman')
            .setDescription('Mr. Sandman, or just Sand is a 12 years old boi that likes the character Sandy from Brawl Stars. He cured his depression thanks to his Discord friends. He likes to draw and does it very well. He tried to escape Our brawl...but there is no **WAY**. Now he is a protogen furry.')
            .setFooter('he is secretly sandsunderman');
        message.channel.send(Emb)

    } else if (command === 'andrew') {
        const andrew = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .setColor(emcolor)
            .setTitle('Andrew.')
            .setDescription('Andrew. is a...half Steve from Minecraft amd half Funtime Foxy. He is a notorious Modder and skin maker and is a friend of TheAmazingCC. He is famous for the "Arcade Shelly" skin that he made for ReBrawl. He also likes Friday night fuckin and is making a whole mod for our gang.')
            .setFooter('but nowdays nobody plays that skin.');
        message.channel.send(andrew)

    } else if (command === 'delta') {
        const delta = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .setColor(emcolor)
            .setTitle('Delta')
            .setDescription('Boring man')
        message.channel.send(delta)
    } else if (command === 'serious') {
        const serious = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .setColor(emcolor)
            .setTitle('Ocean man')
            .setDescription('oh, you wanna know about this guy? This guy love dolphins. And yeah... this guy is nothing special.')
            .setFooter('SERIOUS LOL');
        message.channel.send(serious)
    } else if (command === 'skm') {
        const skm = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .setColor(emcolor)
            .setTitle('SKM')
            .setDescription('SKM - A human being obsessed with modding Brawl Stars, playing Cookie Run, going to school and secretly saving random pictures of Cirno Fumo on his 1TB hard drive.')
            .setFooter('f*mo addict');
        message.channel.send(skm)

    } else if (command === 'eal') {
        const eal = new Discord.MessageEmbed()
            .setColor(emcolor)
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .setTitle('Ealanedem')
            .setDescription('Still 17, no longer interested in modding bs, fellow Hollow Knight and fnf enthusiast, *silksong when*')
            .setFooter('do not the cat is gone, behold the blue Moon of Cthulhu');
        message.channel.send(eal)
    } else if (command === 'bea') {
        const be = new Discord.MessageEmbed()
            .setColor(emcolor)
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .setTitle('Bea')
            .setDescription('Bea is a beesexual (bi) 14 years old. He used to say "Ok" too many times and wanted to delete Our Brawl for no reasons, but it got deleted anyways. Now he speedruns a ban in BnT and simps Fab.')
            .setFooter('understandable, have a mice day.');
        message.channel.send(be)

    } else if (command === 'wendro') {
        const be = new Discord.MessageEmbed()
            .setColor(emcolor)
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .setTitle('wendro')
            .setDescription('Wendro is a boy from Poland. He is pretty good at modding Brawl Stars, and is really impatient. He likes many games, mostly Pokemon series, Kirby series, Undertale and Cuphead. His favourite number is 15. Not much to say about him.')
            .setFooter('he is a green kirb');
        message.channel.send(be)

    } else if (command === 'fab') {
        const be = new Discord.MessageEmbed()
            .setColor(emcolor)
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .setTitle('Fabtastic')
            .setDescription('Fab calls himself "bad" artist, when he is actually good. Atleast that\'s what others say. He is a content creator and bs player. That is pretty much all. I guess.')
            .setFooter('best artist ever');
        message.channel.send(be)

    } else if (command === 'codrut') {
        const be = new Discord.MessageEmbed()
            .setColor(emcolor)
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .setTitle('Codrut2113')
            .setDescription('Codrut is from Romania, his oc is literally a masked Gene. He once made an arg about his oc that caught Sceptile\'s and Delta\'s attention. ')
            .setFooter('I wear a mask with a smile for hours at a time');
        message.channel.send(be)
		
    } else if (command === 'invite') {
        var lolb = new Discord.MessageEmbed()
            .setColor(emcolor)
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .setTitle('Click here for Invite')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=767120467806388254&permissions=0&scope=bot')
            .setFooter('Why do you, want me??');

        message.channel.send(lolb)
    } else if (command === 'server') {
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
    } else if (command === 'funfact') {
        const h = ["Zap, before being gay, was bisexual for some reasons.", "Andrew became Sceptile380's gf for 4 minutes only because Sceptile wanted a gf.", "Sceptile380 has never seen brawlstarsphomo, luckily.", "Spungebob left Our Brawl because yes.", " Sceptile380's oc have an hook now.", "Scand bot will be a brawler if ealanedem completes it.", " spunge is bacc yay", "hey shitass... nvm.", "Now Sand is a protogen.", "Wendro came straight from reddit and surprisingly everyone knew him.", "yooooooo! who lives in a pinap- nevermind I'm having a stroke.", " People finally stopped hating Zap.", " Pedro now tries to simp Sceptile in dms saying senpai.", " Bea pfp will always be a nsfw cropped pic or smth of similar", "Delta **was** the new owner of Brawl 'n talk cuz yes.", " spunj blocked his friends, then one day he came back.", " Plane have a new battle partner: Carmor."];

        const r = h[Math.floor(Math.random() * h.length)]
        var ba = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .setColor(emcolor)
            .setTitle('Random fun fact')
            .setDescription(r)
            .setFooter('Lol');


        message.channel.send(ba);

    } else if (command === 'spunge') {
        const spunj = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .setColor(emcolor)
            .setTitle('Spungebob')
            .setDescription('Spunge is a 13 yeard old boy that likes to chat on discord and play brawl stars. he tries not to go mentaly insane because of school and can have mental breakdowns. He is very weird sometimes, and a big dumbass.')
            .setFooter('simp');
        message.channel.send(spunj)

    } else if (command === 'ourgang') {
        var zeroo = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .setColor(emcolor)
            .setTitle('Our gang')
            .setDescription('info of these guys:\n-$zap\n-$sceptile\n-$andrew \n-$sand\n-$skm\n-$delta\n-$eal\n-$serious\n-$bea\n-$spunge\n-$wendro\n-$fab\n commands \n $funfact - fun facts about our gang')
            .setFooter('Imagine using this command')
        message.channel.send(zeroo)
    } else if (command === 'question') {
        var somevar = true
        if (!args.length) {
            return message.channel.send("you dumbass have to ask me a question.");
        }
        const h = ["yes", "no", "maybe", "most lickely yes", "not sure", "probably no", "am I supposed to know?", "I dunno. I suppose yes"];
        const r = h[Math.floor(Math.random() * h.length)]


        if (args[0] == "how") {
            somevar = false
            if (args[1] == "long") {
                const lol = ["A while", "Never", "It already happened"]
                const lolh = lol[Math.floor(Math.random() * lol.length)]
                message.channel.send(lolh)
            } else {
                message.channel.send(r)
            }
        }
        if (args[1] == 'or') {
            var ifeveryon = false
            somevar = false
            const lola = [args[2], args[0]]
            const lolk = lola[Math.floor(Math.random() * lola.length)]
            if (args[0] == "@everyone") {
                message.channel.send("No ping today")
                ifeveryon = true
            }
            if (args[2] == "@everyone") {
                message.channel.send("No ping today")
                ifeveryon = true
            }
            if (!ifeveryon) {
                message.channel.send(`${message.author.username} i'll choose ` + lolk)
            }
        }
        if (somevar) {
            message.channel.send(r);
        }
    }
    if (command === 'gotobrazil') {
        if (!message.mentions.users.size) {
            return message.reply(' has been sent to brazil');
        }

        const brazil = ["has been sent to brazil. Muito quente...", ",Olá amigo! Bem vindo ao Brasil!", ", TheAmazingCC carried you to brazil"];
        const bruhzil = brazil[Math.floor(Math.random() * brazil.length)]


        message.channel.send(message.mentions.users.first().username + " " + bruhzil)


    }




    if (command === 'bean') {
        if (!message.mentions.users.size) {
            return message.reply('has been beaned lol');
        }

        message.channel.send(message.mentions.users.first().username + " " + "has been beaned. LOL")

    }



});
// uh oh some stuff require async so uh do i  :)
client.on("message", async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (talkedbruh.has(message.author.id))
        return;
    talkedbruh.add(message.author.id);
    setTimeout(() => {
        talkedbruh.delete(message.author.id);
    }, 3000);


    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (message.content.startsWith(prefix + 'pokemon')) {
        const joinem = args.join("_")
        if ((await fetch("https://m.bulbapedia.bulbagarden.net/wiki/" + joinem + "_(Pok%C3%A9mon)")).status == 404) {
            message.channel.send("not found")
        } else {
            message.channel.send("https://m.bulbapedia.bulbagarden.net/wiki/" + joinem + "_(Pok%C3%A9mon)")
        }
    }

    if (message.content.startsWith(prefix + 'ban')) {
        if (!message.member.hasPermission('BAN_MEMBERS'))
            return message.reply("No permissions");
        let member = message.mentions.members.first();
        if (!member)
            return message.reply("Invalid user");
        if (!member.bannable)
            return message.reply("Cannot ban user");

        let reason = args.slice(1).join(" ");
        if (!reason) reason = "None";

        await member.ban({
                reason: reason
            })
            .catch(error => message.reply(`${message.author} Error : ${error}`));
        message.reply(`${member.user.tag} is banned by ${message.author.tag} because: ${reason}, for : 5 years`);


    }
    if (message.content.startsWith(prefix + 'cat')) {
        const {
            file
        } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        const fembed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Cat')
            .setAuthor(message.author.username, message.author.displayAvatarURL({
                format: "png",
                dynamic: true
            }))
            .setImage(file)
            .setTimestamp();

        message.channel.send(fembed)
    }



})
// only for sceptile commands
client.on("message", message => {
    const args = message.content.split(" ").slice(1);


    if (message.author.id !== owner) return;
    if (message.content.startsWith('$' + "eval")) {
        try {
            const code = args.join(" ");
            let evaled = eval(code);

            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);

            message.channel.send(clean(evaled), {
                code: "xl"
            });
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    }
});
 // #_---------------------------------------- token -----------------------------------------
if (testing) {
  client.login(process.env.TOKEN_TESTING);
}
else {
  client.login(process.env.TOKEN);
}
