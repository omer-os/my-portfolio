import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const type = req.query.type;
  if (type === "contact") {
    const contacturl = req.query.contacturl;
    const msg = req.query.message;
    const name = req.query.name;

    const text = `
    <b>New Contact:</b> 
    Name: ${name}
    contacturl: ${contacturl}
    Message: ${msg}
    `;

    const url = `https://api.telegram.org/bot${
      process.env.NEXT_TELEGRAM_TOKEN
    }/sendMessage?chat_id=@${
      process.env.TELEGRAM_CHANNEL
    }&parse_mode=HTML&text=${encodeURIComponent(text)}`;
    const response = await fetch(url);

    res.status(200).json({ message: "New contact added" });
  }

  // http://localhost:3000/api/bot/sendmassege?type=message&message=hweu&contacturl=omarchatin@gmail.com&name=onwoi
  if (type === "message") {
    const msg = req.query.message;
    const name = req.query.name;

    const text = `
    <b>New Message:</b> 
    Name: ${name}
    Message: ${msg}
    `;

    const url = `https://api.telegram.org/bot${
      process.env.NEXT_TELEGRAM_TOKEN
    }/sendMessage?chat_id=@${
      process.env.TELEGRAM_CHANNEL
    }&parse_mode=HTML&text=${encodeURIComponent(text)}`;
    const response = await fetch(url);

    res.status(200).json({ message: "New message added" });
  }
};

// telegram urls:
// https://api.telegram.org/bot/getMe
// https://api.telegram.org/bot/getUpdates
// https://api.telegram.org/bot/sendMessage
// https://api.telegram.org/bot/sendPhoto
// https://api.telegram.org/bot/sendAudio
// https://api.telegram.org/bot/sendVideo
// https://api.telegram.org/bot/sendDocument
// https://api.telegram.org/bot/sendSticker
// https://api.telegram.org/bot/sendVoice
// https://api.telegram.org/bot/sendVideoNote
// https://api.telegram.org/bot/sendLocation
// https://api.telegram.org/bot/sendContact
// https://api.telegram.org/bot/getChat
// https://api.telegram.org/bot/getChatMember
// https://api.telegram.org/bot/getChatAdministrators
// https://api.telegram.org/bot/kickChatMember
// https://api.telegram.org/bot/pinChatMessage
// https://api.telegram.org/bot/deleteMessage
