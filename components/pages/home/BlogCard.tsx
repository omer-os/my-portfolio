import { formatSanityDate } from "@/lib/functions/sanityFunctions";
import { Blog } from "@/lib/interfaces/interfaces";
import Link from "next/link";
import React from "react";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article>
      <Link href={`/blog/${blog.slug.current}`}>
        <div>
          <div className="flex flex-col w-full h-full px-6 py-5 border sm:px-8 dark:bg-zinc-900/80 bg-black/10 border-zinc-800/40 rounded-xl group">
            <time className="text-xs capitalize dark:text-zinc-400">
              {formatSanityDate(blog.publishDate)}
            </time>
            <div className="relative z-20 flex gap-3 mt-2">
              <button className="px-3 py-1 text-xs font-light capitalize transition-all rounded ring-2 hover:bg-white/10 hover:scale-105 bg-black/0 ring-orange-600">
                {blog.category}
              </button>
            </div>
            <div className="flex flex-col mt-2">
              <h2 className="relative max-w-full text-xl font-bold sm:text-2xl line-clamp-1 w-max">
                {blog.title}
              </h2>
              <p className="mt-1 text-sm text-zinc-300 line-clamp-2">
                {blog.subtitle}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
