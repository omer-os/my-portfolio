import type { NextApiRequest, NextApiResponse } from "next";
import client from "./client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { blogid } = req.query;
  const data = await client.fetch(`
  *[_type == "blogs" && slug.current =="${blogid}"]{  
    title,
    showinhome,
    subtitle,
    wordcount,
    readminutes,
    slug{
        current
    },
    coverimage {
      asset-> {
        url
      }
    },
    publishedAt,
    content,
    blogCategories[]-> {
      title,
      slug{
        current
    },
      subtitle,
      coverimage {
        asset-> {
          url
        }
      }  
    }
  }
  `);

  res.status(200).json({ data });
}
