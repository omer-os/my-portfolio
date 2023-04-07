import { NextApiRequest, NextApiResponse } from "next";
import { GetBlogsByCategory } from "./Functions";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query;
  const data = await GetBlogsByCategory(query as string);
  res.status(200).json(data);
}
