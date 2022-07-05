let handler = async m => m.reply(` 
╭─「 *Donasi* 」 
│ • 6283122808260 (Gopay/Dana)
│ • https://saweria.co/Zeroz04n
│ • https://trakteer.id/zeroz04n
╰────
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
