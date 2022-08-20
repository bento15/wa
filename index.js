const { create, Client, decryptMedia } = require('@open-wa/wa-automate');

create({
    sessionId: "kontol",
    multiDevice: true,
    authTimeout: 60,
    blockCrashLogs: true,
    disableSpins: true,
    headless: true,
    hostNotificationLang: 'PT_BR',
    logConsole: false,
    popup: true,
    qrTimeout: 0,
}).then((client) => start(client));

async function start(client) {
    client.onMessage(async (msg) => {

        text = msg.body;
        pesan = text.toLowerCase();

        // if (msg.body) {
        //     await msg.sendText(msg.from, 'Hai 👋, selamat datang di bot bento\n\nuntuk menggunakan bot ini, gunakan perintah dibawah ini:\n\n!cek = cek bot aktif atau tidak\n!stiker = untuk membuat stiker menggunakan gambar\n!cuaca = untuk melihat kondisi cuaca hari ini\n!quote = random quote\n!rules = untuk melihat peraturan bot');
        // }

        if (pesan === '!help') {
            await client.sendText(msg.from, `Hai 👋, selamat datang di bot Samsudin\n\n!cek = cek bot aktif atau tidak\n!stiker = untuk membuat stiker menggunakan gambar\n!cuaca = untuk melihat kondisi cuaca hari ini\n!quote = random quote\n!rules = untuk melihat peraturan bot`);
        }

        if (pesan === '!cek') {
            await client.sendText(msg.from, 'Bot Samsudin aktif');
        }

        if (pesan === '!cuaca') {
            await client.sendText(msg.from, 'Fitur ini masih dalam tahap pengembangan');
        }

        if (pesan === '!quote') {
            await client.sendText(msg.from, 'Fitur ini masih dalam tahap pengembangan');
        }

        if (pesan === '!rules') {
            await client.sendText(msg.from, `*SELAMAT DATANG DI BOT SAMSUDIN*\n\nMohon agar dipatuhi semua peraturan yang ada dibawah ini:\n\n*Jangan spam bot*\n*Sesuaikan perintah dengan format yang ada*\n*Jangan telpon / vc bot nya (AUTO BLOCK)*\n\n*MELANGGAR PERATURAN BOT AKAN DI BLOCK*`);
        }

        if (pesan === 'p') {
            await client.sendText(msg.from, `iya kenapa?\n\nketikan *!help* untuk melihat perintah perintah yang ada di bot ini`);
        }

        if (pesan === 'assalamualaikum' || pesan === "assalamu'alaikum") {
            await client.sendText(msg.from, "Wa'alaikumsalam");
        }

        else if (msg.mimetype) {
            if (msg.caption === "!stiker" && msg.type === "image") {
                const mediaData = await decryptMedia(msg);
                const imageBase64 = `data:${msg.mimetype};base64,${mediaData.toString("base64")}`;
                await client.sendImageAsSticker(msg.from, imageBase64);
            }
        }
    });
}