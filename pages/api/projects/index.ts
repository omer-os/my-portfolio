import { Blog } from "@/components/interfaces/blog";
import { ProjectType } from "@/components/interfaces/projectTypes";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await GetAllProjects();

  res.json({ data });
}

export const GetAllProjects = async () => {
  const data: ProjectType[] = await client.fetch(`*[_type == "projects"]{
    title,
    showinhome,
    subtitle,
    content,
    slug{
        current
      },
        coverimage {
          asset-> {
            url
        }
      },
    publishedAt,
    "categories": projectCategories[]->{
      title
    },
    demo,
    github
  }
  `);

  return data;
};
export const GetHomePageProjects = async () => {
  const data: ProjectType[] =
    await client.fetch(`*[_type == "projects" &&  showinhome==true]{
    title,
    showinhome,
    subtitle,
    content,demo,
    slug{
          current
        },
    coverimage {
      asset-> {
        url
    }
  },
    publishedAt,
    "categories": projectCategories[]->{
      title,subtitle
    },
  }
  `);

  return data;
};
