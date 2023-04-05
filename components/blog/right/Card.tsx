import GlowingBox from "@/components/coms/GlowingBox";
import { Blog } from "@/components/interfaces/blog";
import Link from "next/link";
import React from "react";

export default function Card({ data }: { data: Blog }) {
  return (
    <Link
      href={`/blog/${data.slug.current}`}
      className="rounded-xl overflow-hidden"
    >
      <GlowingBox>
        <div className="p-5 rounded-xl border border-zinc-700 relative flex flex-col">
          <div className="sm:text-3xl text-xl relative z-10 font-bold line-clamp-2">
            {data.title}
          </div>

          <div className="flex mt-6 justify-between items-center">
            <div className="text-zinc-400 relative z-10 text-sm">
              {formatDate(data.publishedAt)}
            </div>

            <div className="rounded-full relative z-10 text-zinc-400 bg-zinc-900 px-4 py-1 text-sm capitalize">
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
