import { SearchForBlogg } from "./Functions";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;
  const result = await SearchForBlogg(query as string);

  res.status(200).json({
    result,
  });
};
