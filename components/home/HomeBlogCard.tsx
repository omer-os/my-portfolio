import Link from "next/link";
import React from "react";
import BlogCategoryChip from "./BlogCategoryChip";

export default function HomeBlogCard({
  blog,
}: {
  blog: {
    title: string;
    date: string;
    description: string;
    categories: string[];
    slug: string;
  };
}) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="flex flex-col py-5 sm:px-8 px-6 bg-zinc-900 rounded-xl group"
    >
      <div className="flex flex-col">
        <div className="text-zinc-400 capitalize text-xs">{blog.date}</div>

        <div className="flex mt-2 gap-3 relative z-10">
          {blog.categories.map((cat, index) => (
            <BlogCategoryChip cat={cat} key={cat + index} />
          ))}
        </div>

        <div className="flex mt-2 flex-col">
          <div className="sm:text-2xl text-xl w-max font-bold relative">
            {blog.title}
            <div className="absolute h-[.09em] group-hover:w-full w-0 yellow-gradient transition-all -bottom-1 left-0"></div>
          </div>
          <div className="text-zinc-300 mt-1 text-sm">{blog.description}</div>
        </div>
      </div>
    </Link>
  );
}
