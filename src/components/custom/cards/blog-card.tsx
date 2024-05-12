import Link from "next/link";
import React from "react";

export default function BlogCard() {
  return (
    <article>
      <Link href="/blog/">
        <div>
          <div className="group flex h-full w-full flex-col rounded-xl border bg-secondary/30 px-6 py-5 sm:px-8">
            <time className="text-xs capitalize dark:text-zinc-400">
              June 30, 2023
            </time>
            <div className="relative z-20 mt-2 flex gap-3">
              <div className="rounded bg-black/0 px-3 py-1 text-xs font-light capitalize ring-2 ring-orange-600 transition-all hover:scale-105 hover:bg-white/10">
                Personal Growth
              </div>
            </div>
            <div className="mt-2 flex flex-col">
              <h2 className="relative line-clamp-1 w-max max-w-full text-xl font-bold sm:text-2xl">
                Navigating Memories in the Internet Age
              </h2>
              <p className="mt-1 line-clamp-2 text-sm text-zinc-300">
                In this blog post I'll talk about affects of memories in
                internet into our lives, how are we gonna deal with this and how
                much of a problem is this.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
