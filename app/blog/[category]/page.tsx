import BlogPage from "@/components/pages/blogs/BlogPage";
import {
  getAllBlogs,
  getBlogsByCategory,
} from "@/lib/functions/sanityFunctions";
import { Blog } from "@/lib/interfaces/interfaces";
import React from "react";


export default async function page({
  params,
}: {
  params: {
    category: string;
  };
}) {
  let blogs = [] as Blog[];
  if (params.category === "all") {
    blogs = await getAllBlogs();
  }

  if (params.category !== "all") {
    blogs = await getBlogsByCategory(params.category);
  }

  return (
    <>
      <BlogPage blogs={blogs} />
    </>
  );
}
