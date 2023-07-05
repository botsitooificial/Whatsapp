let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `𝘐𝘕𝘝𝘖𝘊𝘈𝘕𝘋𝘖 𝘎𝘙𝘜𝘗𝘖 🗣️\n\n${oi}\n*❏𝘔𝘌𝘕𝘊𝘐𝘖𝘕𝘌𝘚*\n`
for (let mem of participants) {
teks += `♥️么 @${mem.id.split('@')[0]}\n`}
teks += `👑𝘔𝘪𝘤𝘩𝘪𝘉𝘰𝘵`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
