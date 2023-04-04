import GlowingBox from "@/components/coms/GlowingBox";
import { Blog } from "@/components/interfaces/blog";
import Link from "next/link";
import React from "react";
import BlogCategoryChip from "./BlogCategoryChip";

export default function HomeBlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blog/${blog.slug.current}`}>
      <GlowingBox>
        <div className="flex flex-col py-5 sm:px-8 px-6 bg-zinc-900/80 border border-zinc-800/40 rounded-xl group w-full h-full">
          <div className="text-zinc-400 capitalize text-xs">
            {blog.publishedAt}
          </div>

          <div className="flex mt-2 gap-3 relative z-20">
            {blog.blogCategories?.map((cat, index) => (
              <BlogCategoryChip cat={cat} key={cat.slug.current + index} />
            ))}
          </div>

          <div className="flex mt-2 flex-col">
            <div className="sm:text-2xl max-w-full line-clamp-1 text-xl w-max font-bold relative">
              {blog.title}
            </div>
            <div className="text-zinc-300 mt-1 text-sm line-clamp-3">
              {blog.subtitle}
            </div>
          </div>
        </div>
      </GlowingBox>
    </Link>
  );
}
