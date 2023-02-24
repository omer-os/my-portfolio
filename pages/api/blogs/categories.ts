import type { NextApiRequest, NextApiResponse } from "next";
import client from "../client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await client.fetch(`*[_type == "blogCategories"]{
    title,
  slug{
              current
          },
  subtitle,
  coverimage{
              asset-> {
                url
              }}
    
      
  }
  
  `);
  res.json({ data });
}
