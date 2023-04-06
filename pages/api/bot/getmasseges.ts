import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // get all masseges from telegram channel
  const url = `https://api.telegram.org/bot${process.env.NEXT_TELEGRAM_TOKEN}/getUpdates`;
  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json({ data });
};
