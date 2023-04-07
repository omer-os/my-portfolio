import BlogsLeftSide from "@/components/blog/left/BlogsLeftSide";
import BlogsRight from "@/components/blog/right/BlogsRight";
import { Blog } from "@/components/interfaces/blog";
import {
  GetAllBlogs,
  GetAllCategories,
  GetBlogsByCategory,
} from "@/pages/api/blogs/Functions";
import React, { Suspense } from "react";
import { VscLoading } from "react-icons/vsc";

type PageProps = {
  searchParams: {
    category: string;
  };
};

export default async function page({ searchParams }: PageProps) {
  if (!searchParams.category) searchParams.category = "all";
  const categories = await GetAllCategories();
  let data: Blog[] = [];
  if (searchParams.category === "all") {
    data = await GetAllBlogs();
  } else {
    data = await GetBlogsByCategory(searchParams.category);
  }

  categories.push({
    title: "all",
    slug: {
      current: "all",
    },
  });

  return (
    <div className="relative flex flex-col w-full max-w-5xl min-h-full gap-1 md:flex-row md:px-6">
      <BlogsLeftSide categories={categories} category={searchParams.category} />

      <Suspense
        fallback={
          <div className="flex items-start flex-1 min-h-full gap-4 px-6 md:border-l border-zinc-800 md:ml-5 md:pl-14 md:px-0 py-7">
            <VscLoading className="animate-spin" size={25} />
            loading...
          </div>
        }
      >
        {/* @ts-ignore */}
        <BlogsRight data={data} />
      </Suspense>
    </div>
  );
}
