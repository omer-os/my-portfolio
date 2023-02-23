import AllBlogs from "@/components/blog/AllBlogs";
import Link from "next/link";
import React from "react";

export default function page() {
  const categories = [
    "nextjs",
    "tailwindcss",
    "dental",
    "javascript",
    "design",
    "programming",
    "python",
  ];



  return (
    <div className="xl:max-w-6xl md:max-w-4xl px-8 transition-all w-full mt-10 mx-auto">
      <div className="text-3xl font-extrabold">Lastest Articles</div>

      <div className="relative mt-1 ">
        <div className="flex gap-4 p-2 text-sm capitalize  snap-mandatory snap-x overflow-x-scroll">
          {categories.map((i, index) => (
            <Link
              href={`/blog/categories/${i}/`}
              key={i + index}
              className="bg-zinc-900 py-1 px-3 rounded snap-start"
            >
              {i}
            </Link>
          ))}
        </div>
      </div>

      <AllBlogs />
    </div>
  );
}
