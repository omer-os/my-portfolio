import React from "react";
import BlogCard from "../cards/blog-card";

export default function HomeBlogsSection() {
  return (
    <div>
      <p className="text-2xl font-bold">Lastest Blogs</p>

      <div className="mt-5 flex max-w-full flex-col gap-10 overflow-hidden">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
