import { Blog } from "@/lib/interfaces/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogPage({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="min-h-screen w-full">
      <div className="text-2xl font-extrabold border-b pb-2 w-full border-zinc-900">
        All Blogs
      </div>
      <div className="grid sm:grid-cols-2 mt-4 gap-5">
        {blogs.map((blog) => (
          <BlogItem key={blog.slug.current} blog={blog} />
        ))}
      </div>
    </div>
  );
}

const BlogItem = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      href={`/blog/${blog.category.toLowerCase().replace(" ", "-")}/${
        blog.slug.current
      }`}
      className="flex flex-col p-3 rounded-lg border border-zinc-900"
    >
      <div className="relative h-[11em]">
        <Image
          src={blog.coverImageUrl || "https://via.placeholder.com/500"}
          alt=""
          fill
          className="rounded-lg object-cover w-full h-full"
        />
      </div>

      <div className="font-bold mt-4">{blog.title}</div>
      <div className="text-zinc-400 line-clamp-2 text-sm mt-2">
        {blog.subtitle}
      </div>
    </Link>
  );
};
