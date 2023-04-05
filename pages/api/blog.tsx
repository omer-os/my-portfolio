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

export async function GetThisBlog(blogid: string) {
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

  return data;
}
export async function GetAllBlogs() {
  const data = await client.fetch(`*[_type == "blogs"]{
    slug{
        current
    },
    title,
    subtitle,
  }
  `);

  return data;
}
export async function GetHomeBlogs() {
  const data = await client.fetch(`*[_type == "blogs" &&  showinhome==true]{  
    title,
    showinhome,
    subtitle,
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
    blogCategories[]-> {
      title,
      slug{
        current
    },
    }
  }
  `);

  return data;
}
