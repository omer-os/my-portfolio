import { Blog } from "@/components/interfaces/blog";
import { GetAllBlogs } from "@/pages/api/blog";
import React from "react";
import Card from "./Card";

export default async function BlogsRight({ category }: { category: string }) {
  const data: Blog[] = await GetAllBlogs();

  return (
    <div className="flex-1 min-h-full md:border-l border-zinc-800 md:ml-5 md:pl-14 md:px-0 px-6 py-7">
      <div className="text-3xl font-bold pb-3 border-b border-zinc-800">
        All Blogs
      </div>
      <div className="mt-6 capitalize text-zinc-300">
        see all the blogs that I have written
      </div>

      <div className="flex flex-col gap-4 mt-5">
        {data.map((blog, index: number) => (
          <Card key={index} data={blog} />
        ))}
      </div>
    </div>
  );
}
