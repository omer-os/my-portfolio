import {
  formatSanityDate,
  getRelatedBlogs,
} from "@/lib/functions/sanityFunctions";
import { Blog } from "@/lib/interfaces/interfaces";
import Link from "next/link";
import React from "react";

export default async function RelatedBlogs({
  currentBlog,
  category,
}: {
  currentBlog: string;
  category: string;
}) {
  const blogs: Blog[] = await getRelatedBlogs(category, currentBlog);

  return (
    <div className="con-2-2 lg:max-w-[16em] flex flex-col gap-3 md:border-none border-t border-zinc-800 w-full md:py-0 py-10 transition-all">
      {blogs.length > 0 ? (
        <>
          <div className="text-2xl font-bold capitalize">
            Read Related Blogs :
          </div>
          <div className="flex flex-col gap-2 mt-3">
            {blogs.map((i) => (
              <Link
                href={`/blog/${i.category}/${i.slug.current}`}
                key={i.slug.current}
                className="p-3 rounded flex bg-zinc-900 flex-col "
              >
                <div className="text-lg font-bold line-clamp-2">{i.title}</div>
                <div className="text-sm text-zinc-400">
                  {formatSanityDate(i.publishDate)}
                </div>
                <div className="line-clamp-2 text-sm text-zinc-200">
                  {i.subtitle}
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
