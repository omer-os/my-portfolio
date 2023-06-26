import Link from "next/link";
import React from "react";

export default function BlogCard({
  blog,
}: {
  blog: {
    title: string;
    slug: string;
    date: string;
    tags: string[];
    description: string;
  };
}) {
  return (
    <article>
      <Link href={`/blog/${blog.slug}`}>
        <div>
          <div className="flex flex-col w-full h-full px-6 py-5 border sm:px-8 dark:bg-zinc-900/80 bg-black/10 border-zinc-800/40 rounded-xl group">
            <time className="text-xs capitalize dark:text-zinc-400">
              {blog.date}
            </time>
            <div className="relative z-20 flex gap-3 mt-2">
              {blog.tags.map((tag, index) => (
                <button
                  key={index}
                  className="px-3 py-1 text-xs font-light capitalize transition-all rounded ring-2 hover:bg-white/10 hover:scale-105 bg-black/0 ring-orange-600"
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="flex flex-col mt-2">
              <h2 className="relative max-w-full text-xl font-bold sm:text-2xl line-clamp-1 w-max">
                {blog.title}
              </h2>
              <p className="mt-1 text-sm text-zinc-300 line-clamp-2">
                {blog.description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
