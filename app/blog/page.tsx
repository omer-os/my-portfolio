import BloghMain2 from "@/components/blog/BloghMain2";
import BlogsLeftSide from "@/components/blog/left/BlogsLeftSide";
import BlogsRight from "@/components/blog/right/BlogsRight";
import { GetAllCategories } from "@/pages/api/blogs/Functions";
import React from "react";

type PageProps = {
  searchParams: {
    category: string;
  };
};

export default async function page({ searchParams }: PageProps) {
  const categories = await GetAllCategories();

  return (
    <div className="flex md:flex-row flex-col min-h-full relative max-w-5xl w-full gap-1 md:px-6">
      <BlogsLeftSide categories={categories} category={searchParams.category} />

      {/* @ts-ignore */}
      <BlogsRight category={searchParams.category} />
    </div>
  );
}
