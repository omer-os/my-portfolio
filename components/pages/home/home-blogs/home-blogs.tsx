import React from "react";
import BlogCard from "./BlogCard";
import { getAllBlogs } from "@/lib/functions/sanityFunctions";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default async function HomeBlogs() {
  const blogs = await getAllBlogs();

  return (
    <div className="my-10">
      <div className="w-full h-[.09em] rounded-full bg-zinc-500"></div>
      <div className="my-10">
        <div className="text-3xl font-bold">Latest Blogs</div>
        <div className="mt-3 text-md text-zinc-400">
          I mostly have blogs about programming and web development.
        </div>
        <div className="flex flex-col max-w-full gap-10 mt-5 overflow-hidden">
          {/* Blog Cards */}
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
        {/* View All Blogs Link */}
        <Link
          className="relative flex justify-center gap-2 py-3 mt-5 font-bold capitalize transition-all rounded hover:gap-4 group sm:text-lg sm:w-max sm:py-0 sm:rounded-none sm:items-center active:scale-95"
          href="/blog/all"
        >
          <div className="absolute top-0 left-0 w-full h-full transition-all -z-10 sm:w-0 rounded-xl gradient-bg"></div>
          <div className="relative dark:text-white">
            <p>View All Blogs</p>
          </div>
          <FaArrowRight className="hidden sm:block h-max" />
        </Link>
      </div>
    </div>
  );
}
