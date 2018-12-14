const prefix = ("$")
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'on') {
    msg.reply('Success Turned the protection : **ON**');
  }
});
client.login(process.env.BOT_TOKEN);

client.on('message', message => {
  if(message.content === prefix + "closeroom") {
                      if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: false

         }).then(() => {
             message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
         });
           }
if(message.content === prefix + "openroom") {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: true

         }).then(() => {
             message.reply("**__تم فتح الشات__:white_check_mark:**")
         });
}
  
});

client.on('message', async (message) => {
if(message.content.startsWith("$apply")) {
await message.channel.send("**اسمك الحقيقي | عمرك**").then(e => {
let filter = m => m.author.id === message.author.id
let lan = '';
let md = '';
let br = '';
let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
.then(collected => {
 lan = collected.first().content
 collected.first().delete()
 e.delete();
 message.channel.send('** ايش اسمك في ماينكرافت | وش تبي الرتبة**').then(m => {
 let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
   .then(co => {
     md = co.first().content
     co.first().delete()
     m.delete();
     message.channel.send('**هل لو طلبنا منك شي بتسويه ؟ | كم رح تتفاعل فاليوم**').then(ms => {
     let br = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
       .then(col => {
         br = col.first().content
         col.first().delete()
         ms.delete()
         message.channel.send('جاري التقديم ..').then(b => {
         setTimeout(() => {
           b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
         },2000);
         var gg = message.guild.channels.find('name', 'تقديم')
         if(!gg) return;
         if(gg) {
           gg.send({
               embed : new Discord.RichEmbed()
               .setDescription(`** اللغة :question: : \n ${lan}\nالخبرة :link: :\n ${md} \nالفرق بين const,var :question: :\n ${br} \nتم التقديم بواسطة : <@${message.author.id}> **`)
               .setFooter(`ام سيرفرك`)
               .setTimestamp()
             });
           }
         })
       })
     })
   })
 })
})
})
}
})

client.on('message',async message => {

let mention = message.mentions.members.first();

let Room = client.channels.get('514509574980501526'); // ايدي الروم

if(message.content.startsWith(prefix + "رفض")) {

if(message.guild.id !== '462975647183142914') return; //ايدي السيرفر

if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));


if(!mention) return message.reply("منشن شخص");



Room.send(`
**» العضو :** ${mention}
[ ? ] :: لقد تم رفض العضو`);

}

});



client.on('message',async message => {

let mention = message.mentions.members.first();

let Room = client.channels.get('514509574980501526'); //ايدي الروم

if(message.content.startsWith(prefix + "قبول")) {

if(message.guild.id !== '462975647183142914') return; // ايدي السيرفر

if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));


if(!mention) return message.reply("منشن شخص");



Room.send(`
**» العضو :** ${mention}
[ :checked: ] : لقد تم قبول العضو واعطائه رتبة هيلبر`);

}

});

client.on('guildMemberAdd', member=> {
member.addRole(member.guild.roles.find("name","اسم الرتبه"));
});

client.on('message', message => {

if (message.content.startsWith("$sug")) {

if (!message.channel.guild) return;
let args = message.content.split(" ").slice(1).join(' ');
           if (!args) return message.reply('** ضع أقترآحك  **').catch(console.error);
client.channels.get("514034404780277760").send(
 "\n" + "" + "● السيرفر :" + "" +
 "\n" + "" + "» " + message.guild.name + "" +
 "\n" + "" + " ● المرسل : " + "" +
 "\n" + "" + "» " + message.author.tag + "" +
 "\n" + "" + " ● الرسالة : " + "" +
 "\n" + "" + args + "");
 message.reply("** تم إرسآل أقترآحك بنجاح **");
}
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'PHelp')) { 
      let pages = [`
  ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
  :earth_africa: The Public Commands :earth_africa: 
  1༺༻  $server | Shows Server Info༺༻
  2༺༻  $ping | Shows Bot Ping༺༻
  3༺༻  $date | Shows Year , Month , Day Time༺༻
  4༺༻  $invite | Shows Bot Invite Link༺༻
  5༺༻  $avatar | Shows User Avatar༺༻
  6༺༻  $image | Shows Server Avatar༺༻
  7༺༻  $skin  | Shows Minecraft Players Skin༺༻
  8༺༻  $say  | Repeat What Your Saying༺༻
  9༺༻  $تقديم | Apply Helper༺༻
  10༺༻ $sug <suggestion> | Your Suggestion༺༻
  ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
  Click On ▶ To Go Administor Side
     `
  ,`
  ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
  :closed_lock_with_key: Administor Coomands:closed_lock_with_key: 
  1༺༻  $clear | Clear The Chat༺༻
  2༺༻  $bc | Msg Everyone In The Server༺༻
  3༺༻  $kick | Kick With Reson༺༻
  4༺༻  $ban | Ban With Reason༺༻
  5༺༻  $mute | Mute With Reason༺༻
  5༺༻  $closeroom | Close The Room༺༻
  6༺༻  $openroom | Open The Romm༺༻
  7༺༻  $move | Move Any One To Your Room༺༻
  8༺༻  
  ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
  Click On ▶ To Go To Bot Info
     `,`
  ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
  1༺༻  There is Commands Just For NotGucci | Bot By:NotGucci༺༻
  ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
     `]
      let page = 1;
  
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setFooter(`Page ${page} of ${pages.length}`)
      .setDescription(pages[page-1])
  
      message.author.sendEmbed(embed).then(msg => {
  
          msg.react('◀').then( r => {
              msg.react('▶')
  
  
          const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
          const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
  
  
          const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
          const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
  
  
  
          backwards.on('collect', r => {
              if (page === 1) return;
              page--;
              embed.setDescription(pages[page-1]);
              embed.setFooter(`Page ${page} of ${pages.length}`);
              msg.edit(embed)
          })
          forwards.on('collect', r => {
              if (page === pages.length) return;
              page++;
              embed.setDescription(pages[page-1]);
              embed.setFooter(`Page ${page} of ${pages.length}`);
              msg.edit(embed)
          })
          })
      })
      }
  }); 
  
  client.on("message", message => {
    const prefix = "$"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "$image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`هذا هو شعار سيرفر ** ${message.guild.name} **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor("PURPLE")
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

  client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
  var prefix = "$"
  if (message.content === prefix + "date") {
      var currentTime = new Date(),
          السنة = currentTime.getFullYear(),
          الشهر = currentTime.getMonth() + 1,
          اليوم = currentTime.getDate();
      message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
  }
});

client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);


// -say

 if (command === "say") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }

  

 


if (command == "embed") {

    let say = new Discord.RichEmbed()

    .setDescription(args.join(" "))

    .setColor(0x23b2d6)

    message.channel.sendEmbed(say);

    message.delete();

  }



});

client.on('message', message => {
  var prefix = "$";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
if (message.member.hasPermission("MOVE_MEMBERS")) {
if (message.mentions.users.size === 0) {
return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
if (message.mentions.members.first().voiceChannel != null) {
var authorchannel = message.member.voiceChannelID;
var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
.setTitle("Succes!")
.setColor("#000000")
.setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
.setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
}}});



client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on("message", message => {
  var args = message.content.substring(prefix.length).split(" ");
  if (message.content.startsWith(prefix + "clear")) {
      if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {

}
}}).then(msg => {msg.delete(3000)});
                }


});

client.on("message", message => {
  var prefix = "$"
  if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
      if(command === "skin") {
              const args = message.content.split(" ").slice(1).join(" ")
      if (!args) return message.channel.send("** Type your skin name **");
      const image = new Discord.Attachment(`https://visage.surgeplay.com/full/256/${args}`, "skin.png");
  message.channel.send(image)
      }
  });

  
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).kick();
 
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});


client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name', 'welcome');
  let memberavatar = member.user.avatarURL
    if (!channel) return;
  let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField('🎽 | name :  ',`${member}`)
      .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
      .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
              .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
             
                .addField("Name:",`<@` + `${member.id}` + `>`, true)
                   
                                   .addField(' الـسيرفر', `${member.guild.name}`,true)
                                     
   .setFooter(`${member.guild.name}`)
      .setTimestamp()
 
    channel.sendEmbed(embed);
  });
  
  client.on('guildMemberRemove', member => {
      var embed = new Discord.RichEmbed()
      .setAuthor(member.user.username, member.user.avatarURL)
      .setThumbnail(member.user.avatarURL)
      .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
      .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
      .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
      .setColor('RED')
      .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
  
  var channel =member.guild.channels.find('name', 'welcome')
  if (!channel) return;
  channel.send({embed : embed});
  })

  client.on('message', function(message) {
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            let command = message.content.split(" ")[0];
        if(message.content.includes('discord.gg')){
        message.reply (' ')
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(message.guild.roles.find('name', 'Muted'));
    const embed500 = new Discord.RichEmbed()
      .setTitle(":x: | تمت معاقبتك")
            .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الميوت عن طريق الخطأ تكلم مع الادآرة**`)
      .addField(`by`,`ALPHACODES`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} Server`)
     message.channel.send(embed500)
   
       
    }
    }
})

client.on('message', message => {
  if(!message.channel.guild) return;
if (message.content.startsWith('ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms 📶 ")
.addField('**WebSocket:**',api + " ms 📶 ")
message.channel.send({embed:embed});
}
});

client.on('message',async message => {
  function timeCon(time) {
  let days = Math.floor(time % 31536000 / 86400);
  let hours = Math.floor(time % 31536000 % 86400 / 3600);
  let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60);
  let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60);
  days = days > 9 ? days : '0' + days;
  hours = hours > 9 ? hours : '0' + hours;
  minutes = minutes > 9 ? minutes : '0' + minutes;
  seconds = seconds > 9 ? seconds : '0' + seconds;
  return `${days > 0 ? `${days} Days ` : ''}${(hours || days) > 0 ? `${hours} Hours ` : ''}${minutes} Mins ${seconds} Secs`;
  }
  
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + "bot")) {
    let ramUsage = (process.memoryUsage().rss / 1048576).toFixed();
    let upTime = timeCon(process.uptime());
    let createdAt = moment(client.user.createdAt).fromNow();

let m = await message.channel.send(`\`\`\`asciidoc\n= Normal Information =
Creator :: ${client.users.get("459273990989545472").username} - ${createdAt}
Ping :: ${client.pings[0]} ms
UpTime :: ${upTime}

= Servers Information =
Servers :: ${client.guilds.size}
Users :: ${client.users.size}
Channels :: ${client.channels.size}

= Developer Information =
NodeJS :: ${process.version}
DiscordJS :: ${Discord.version}
Arch :: ${process.arch}
Platform :: ${process.platform}

= Host Information =
UsedHeap :: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100} MB
Heap :: ${Math.round(process.memoryUsage().heapTotal / 1024 / 1024 * 100) / 100} MB
Ram :: ${ramUsage} MB
Rss :: ${Math.round(process.memoryUsage().rss / 1024 / 1024 * 100) / 100} MB
\`\`\``);
  }
});

client.on('message', async message => {
    let muteReason = message.content.split(" ").slice(3).join(" ");
    let mutePerson = message.mentions.users.first();
    let messageArray = message.content.split(" ");
    let muteRole = message.guild.roles.find("name", "Muted");
    let time = messageArray[2];
    if(message.content.startsWith(prefix + "tempmute")) {
        if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send('**Sorry But You Dont Have Permission** `MUTE_MEMBERS`' );
        if(!mutePerson) return message.channel.send('**Mention Someone**')
        if(mutePerson === message.author) return message.channel.send('**You Cant Mute Yourself**');
        if(mutePerson === client.user) return message.channel.send('**You Cant Mute The Bot**');
        if(message.guild.member(mutePerson).roles.has(muteRole.id)) return message.channel.send('**This Person Already Tempmuted !**');
        if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });
        if(!time) return message.channel.send("**Type The Duration**");
        if(!time.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**The Bot Not Support This Time**');
        if(!muteReason) return message.channel.send('Please Type The Reason')
        message.guild.member(mutePerson).addRole(muteRole);
        message.channel.send(`**:white_check_mark: ${mutePerson} has been muted ! :zipper_mouth: **`)
        message.delete()
        let muteEmbed = new Discord.RichEmbed()
        .setTitle(`New Temp Muted User`)
        .setThumbnail(message.guild.iconURL)
        .addField('- Muted By:',message.author,true)
        .addField('- Muted User:', `${mutePerson}`)
        .addField('- Reason:',muteReason,true)
        .addField('- Duration:',`${mmss(mmss(time), {long: true})}`)
        .setFooter(message.author.username,message.author.avatarURL);
        let incidentchannel = message.guild.channels.find(`name`, `${log[message.guild.id].channel}`);
        if(!incidentchannel) return message.channel.send("Can't find log channel. To Set The Log Channel Type >setLog and answer the questions");
        incidentchannel.sendEmbed(muteEmbed)
        mutePerson.send(`**You Are has been temp muted in ${message.guild.name} reason: ${muteReason}**`)
        .then(() => { setTimeout(() => {
           message.guild.member(mutePerson).removeRole(muteRole);
       }, mmss(time));
    });
    }
});
