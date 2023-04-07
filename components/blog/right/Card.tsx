import GlowingBox from "@/components/coms/GlowingBox";
import { Blog } from "@/components/interfaces/blog";
import Link from "next/link";
import React from "react";

export default function Card({ data }: { data: Blog }) {
  return (
    <Link
      href={`/blog/${data.slug.current}`}
      className="overflow-hidden rounded-xl"
    >
      <GlowingBox>
        <div className="relative flex flex-col p-5 border rounded-xl dark:border-zinc-700 border-zinc-300">
          <div className="relative z-10 text-xl font-bold sm:text-3xl line-clamp-2">
            {data.title}
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="relative z-10 text-sm text-zinc-500 dark:text-zinc-400">
              {formatDate(data.publishedAt)}
            </div>

            <div className="relative z-10 px-4 py-1 text-sm capitalize rounded-full text-zinc-400 dark:bg-zinc-900 bg-zinc-200">
              {data.blogCategory.title}
            </div>
          </div>
        </div>
      </GlowingBox>
    </Link>
  );
}

// turn this 2023-02-24T16:13:33.465Z into 24 Feb 2023
function formatDate(date: string) {
  const d = new Date(date);
  const month = d.toLocaleString("default", { month: "short" });
  const day = d.getDate();
  const year = d.getFullYear();

  return `${day} ${month} ${year}`;
}
