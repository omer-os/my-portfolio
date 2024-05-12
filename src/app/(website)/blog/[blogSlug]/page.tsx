import React from "react";
import BlogCard from "~/components/custom/cards/blog-card";

export default function Page() {
  return (
    <div className="mt-4">
      <div className="text-4xl font-bold">All Posts</div>

      <div className="grid grid-cols-2 gap-4 pt-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
