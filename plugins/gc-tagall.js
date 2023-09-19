let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*👑@𝔠𝔢𝔬𝔤𝔢𝔯𝔦𝔭𝔦𝔲𝔪.𝔡𝔷𝔫* ${pesan}`
let teks = `😸𝙈𝙞𝙘𝙝𝙞𝙗𝙤𝙩 𝙩𝙚 𝙞𝙣𝙫𝙤𝙘𝙖😸\n\n${oi}\n*❏𝘔𝘌𝘕𝘊𝘐𝘖𝘕𝘌𝘚*\n`
for (let mem of participants) {
teks += `🍔🍟 @${mem.id.split('@')[0]}\n`}
teks += `🍓𝔠𝔢𝔬𝔤𝔢𝔯𝔦𝔭𝔦𝔲𝔪.𝔡𝔷𝔫`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
