import AllBlogs from "@/components/blog/AllBlogs";
import { BaseUrl } from "@/components/coms/BaseUrl";
import { BlogCategory } from "@/components/interfaces/blog";
import Link from "next/link";
import React from "react";

export default async function page() {
  const blogsRes = await fetch(`${BaseUrl}/api/blogs`, { cache: "no-store" });
  const allBlogs = await blogsRes.json();
  const categoriesRes = await fetch(`${BaseUrl}/api/blogs/categories`, {
    cache: "no-store",
  });
  const allCategories: { data: BlogCategory[] } = await categoriesRes.json();

  return (
    <div className="xl:max-w-6xl md:max-w-4xl px-8 transition-all w-full mt-10 mx-auto">
      <div className="text-3xl font-extrabold">Lastest Blogs</div>

      <div className="relative mt-1 ">
        <div className="flex gap-4 p-2 text-sm capitalize  snap-mandatory snap-x overflow-x-scroll">
          {allCategories.data.map((i, index) => (
            <Link
              href={`/blog/categories/${i.slug.current}/`}
              key={i.slug.current}
              className="bg-zinc-900 py-1 px-3 rounded snap-start"
            >
              {i.title}
            </Link>
          ))}
        </div>
      </div>

      <AllBlogs allBlogs={allBlogs} />
    </div>
  );
}
