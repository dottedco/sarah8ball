const { MessageEmbed } = require('discord.js')

let c8ballcmd = async (message, args, client, _, __) => {
  const question = args.join(" ")
  if(!question) return message.reply("`Ask me a question.`")

  let responses = ["Yes", "No", "Maybe", "Ask someone else"]
  let random = responses[Math.floor(Math.random() * responses.length)];

  const resp = new MessageEmbed()
  .setTitle("***8ball***")
  .setDescription(`The response to \`${question}\`\nis:\n**${random}**`)
  .setColor("PURPLE")
  .setThumbnail(message.guild.iconURL())
  .setTimestamp()
  message.channel.send({ embeds: [resp] })
}

module.exports.c8ballcmd = c8ballcmd
