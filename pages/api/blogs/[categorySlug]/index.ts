import { Blog } from "@/components/interfaces/blog";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { categorySlug } = req.query;

  if (categorySlug) {
    const data: Blog[] =
      await client.fetch(`*[_type == "blogs" && references(*[_type == "blogCategories" && slug.current == "${categorySlug}"]._id)] {
        title,
        showinhome,
        subtitle,
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
}
