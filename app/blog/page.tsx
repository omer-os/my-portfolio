import BloghMain2 from "@/components/blog/BloghMain2";
import BlogsLeftSide from "@/components/blog/left/BlogsLeftSide";
import BlogsRight from "@/components/blog/right/BlogsRight";
import React from "react";

type PageProps = {
  searchParams: {
    category: string;
  };
};

export default async function page({ searchParams }: PageProps) {
  return (
    <div className="flex md:flex-row flex-col min-h-full relative max-w-5xl w-full gap-1 md:px-6">
      <BlogsLeftSide category={searchParams.category} />

      <BlogsRight category={searchParams.category} />
    </div>
  );
}
