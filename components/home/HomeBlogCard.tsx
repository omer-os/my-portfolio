import Link from "next/link";
import React from "react";

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
    <div className="flex flex-col py-5 px-8 bg-zinc-900 rounded-xl group">
      <div className="flex flex-col">
        <div className="text-zinc-400 capitalize text-xs">{blog.date}</div>

        <div className="flex mt-2 gap-3 relative z-10">
          {blog.categories.map((cat, index) => (
            <Link
              key={cat + index}
              href={`/${cat}`}
              className="ring-2 hover:bg-white/10 hover:scale-105 bg-black/0 transition-all ring-orange-600 py-1 px-3 rounded capitalize text-xs font-light"
            >
              {cat}
            </Link>
          ))}
        </div>

        <div className="flex mt-2 flex-col">
          <div className="text-2xl font-bold relative">
            {blog.title}
            {/* <div className="absolute h-[.09] group-hover:w-full w-0 yellow-gradient transition-all "></div> */}
          </div>
          <div className="text-zinc-300 text-sm">{blog.description}</div>
        </div>
      </div>
    </div>
  );
}
