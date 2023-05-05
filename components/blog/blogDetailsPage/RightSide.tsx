"use client";

import { Blog } from "@/components/interfaces/blog";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RightSide({ category }: { category: string }) {
  const [Results, setResults] = useState<Blog[] | null>(null);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/api/blogs/getbycategory?query=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="con-2-2 md:w-[16em] flex flex-col gap-3 md:border-none border-t border-zinc-800 md:py-0 py-10 transition-all">
      <div className="text-2xl font-bold capitalize">Read Related Blogs :</div>

      {Loading ? (
        <div className="flex flex-col gap-2 mt-3 p-3 rounded bg-zinc-900">
          <div className="animate-pulse h-7 bg-zinc-800 rounded w-5/6 mt-2"></div>
          <div className="animate-pulse w-4/6 h-7 bg-zinc-800 rounded  mt-2"></div>
          <div className="animate-pulse w-1/4 h-4 bg-zinc-800 rounded  mt-2"></div>
        </div>
      ) : (
        Results?.map((blog: Blog, index) => (
          <Link
            href={`/blog/${blog.slug.current}`}
            className="flex flex-col bg-zinc-900 p-3 rounded gap-2 mt-5"
            key={blog.slug.current + index}
          >
            <div className="text-xl font-bold capitalize line-clamp-2">
              {blog.title}
            </div>
            <div className="text-xs text-zinc-400">
              {formatDate(blog.publishedAt)}
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

function formatDate(date: string) {
  const d = new Date(date);
  const month = d.toLocaleString("default", { month: "long" });
  const day = d.getDate();
  const year = d.getFullYear();
  const weekday = d.toLocaleString("default", { weekday: "long" });

  return `${weekday}, ${month} ${day}th ${year}`;
}
