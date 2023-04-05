import { Blog } from "@/components/interfaces/blog";
import client from "../client";

export const GetAllBlogs = async () => {
  const data: Blog[] = await client.fetch(`*[_type == "blogs"]{
        title,
        slug{
            current
        },
        publishedAt}
      `);
  return data;
};

export const GetAllCategories = async () => {
  const data = await client.fetch(`*[_type == "blogCategory"]{
        title,
        slug{
            current
        }}
      `);
  return data;
};

export const HomePageBlogs = async () => {
  const data = await client.fetch(`*[_type == "blogs" && showinhome == true]{
    title,
    slug{
        current
    },
    publishedAt,
    blogCategory->{
        title,
        slug{
            current 
        }
    }}
    `);
  return data;
};

export const GetBlogBySlug = async (slug: string) => {
  const data = await client.fetch(
    `*[_type == "blogs" && slug.current == $slug]{
    title,
    slug{
        current
    },
    publishedAt,
    blogCategory->{
        title,
        slug{
            current 
        }
    },
    content,
    coverimage{
      asset->{
        url
        
      }
      }

  }[0]
      `,
    { slug }
  );
  return data;
};

export const GetBlogsByCategory = async (slug: string) => {
  const data = await client.fetch(
    `*[_type == "blogs" && blogCategory->slug.current == $slug]{
    title,
    slug{
        current
    },
    publishedAt,
    blogCategory->{
        title,
        slug{
            current 
        }
    }}
    `,
    { slug }
  );
  return data;
}

