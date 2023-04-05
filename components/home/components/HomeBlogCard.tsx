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
        <div className="flex flex-col w-full h-full px-6 py-5 border sm:px-8 bg-zinc-900/80 border-zinc-800/40 rounded-xl group">
          <div className="text-xs capitalize text-zinc-400">
            {formatDate(blog.publishedAt)}
          </div>

          <div className="relative z-20 flex gap-3 mt-2">
            <button
              onClick={() =>
                router.push(`/categories/${blog.blogCategory.slug.current}`)
              }
              className="px-3 py-1 text-xs font-light capitalize transition-all rounded ring-2 hover:bg-white/10 hover:scale-105 bg-black/0 ring-orange-600"
            >
              {blog.blogCategory.title}
            </button>
          </div>

          <div className="flex flex-col mt-2">
            <div className="relative max-w-full text-xl font-bold sm:text-2xl line-clamp-1 w-max">
              {blog.title}
            </div>
            <div className="mt-1 text-sm text-zinc-300 line-clamp-3">
              {blog.subtitle}
            </div>
          </div>
        </div>
      </GlowingBox>
    </Link>
  );
}
