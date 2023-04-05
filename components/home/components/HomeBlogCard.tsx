"use client";
import GlowingBox from "@/components/coms/GlowingBox";
import { Blog } from "@/components/interfaces/blog";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function formatDate(date: string) {
  const d = new Date(date);
  const month = d.toLocaleString("default", { month: "short" });
  const day = d.getDate();
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
}

export default function HomeBlogCard({ blog }: { blog: Blog }) {
  const router = useRouter();

  return (
    <Link href={`/blog/${blog.slug.current}`}>
      <GlowingBox>
        <div className="flex flex-col py-5 sm:px-8 px-6 bg-zinc-900/80 border border-zinc-800/40 rounded-xl group w-full h-full">
          <div className="text-zinc-400 capitalize text-xs">
            {formatDate(blog.publishedAt)}
          </div>

          <div className="flex mt-2 gap-3 relative z-20">
            <button
              onClick={() =>
                router.push(`/categories/${blog.blogCategory.slug.current}`)
              }
              className="ring-2 hover:bg-white/10 hover:scale-105 bg-black/0 transition-all ring-orange-600 py-1 px-3 rounded capitalize text-xs font-light"
            >
              {blog.blogCategory.title}
            </button>
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
