"use client";
import { motion } from "framer-motion";
import { Blog } from "../interfaces/blog";
import BlogCard from "./BlogCard";

export default function AllBlogs({ allBlogs }: { allBlogs: { data: Blog[] } }) {
  return (
    <motion.div className="my-5 gap-x-4 gap-y-10 grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1">
      {allBlogs.data.map((blog, index) => (
        <BlogCard blog={blog} key={blog.slug.current} />
      ))}
    </motion.div>
  );
}
