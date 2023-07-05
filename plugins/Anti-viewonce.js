let { downloadContentFromMessage } = (await import('@adiwajshing/baileys'));

export async function before(m, { isAdmin, isBotAdmin }) {
 
let chat = db.data.chats[m.chat]
if (/^[.~#/\$,](read)?viewonce/.test(m.text)) return
if (!chat.antiviewonce || chat.isBanned) return
if (m.mtype == 'viewOnceMessage') {
let msg = m.message.viewOnceMessage.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
if (/video/.test(type)) {
return this.sendFile(m.chat, buffer, 'error.mp4', `${msg[type].caption}\n\n*[❗]𝐌𝐈𝐂𝐇𝐈 𝐁𝐎𝐓 𝐋𝐎 𝐏𝐔𝐄𝐃𝐄 𝐕𝐄𝐑 𝐓𝐎𝐃𝐎 𝐀𝐐𝐔𝐈☘️*`, m)
} else if (/image/.test(type)) {
return this.sendFile(m.chat, buffer, 'error.jpg', `${msg[type].caption}\n\n*[❗]𝐌𝐈𝐂𝐇𝐈 𝐁𝐎𝐓 𝐋𝐎 𝐏𝐔𝐄𝐃𝐄 𝐕𝐄𝐑 𝐓𝐎𝐃𝐎 𝐀𝐐𝐔𝐈☘️*`, m)
}}}
