import GlowingBox from "@/components/coms/GlowingBox";
import Link from "next/link";
import React from "react";

export default function Card({
  data,
}: {
  data: {
    title: string;
    date: string;
    category: string;
    slug: string;
  };
}) {
  return (
    <Link href={`/blog/${data.slug}`} className="rounded-xl overflow-hidden">
      <GlowingBox>
        <div className="p-5 rounded-xl border border-zinc-700 relative flex flex-col">
          <div className="sm:text-3xl text-xl relative z-10 font-bold">
            {data.title}
          </div>

          <div className="flex mt-6 justify-between items-center">
            <div className="text-zinc-400 relative z-10 text-sm">
              {new Date(data.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>

            <div className="rounded-full relative z-10 text-zinc-400 bg-zinc-900 px-4 py-1 text-sm capitalize">
              {data.category}
            </div>
          </div>
        </div>
      </GlowingBox>
    </Link>
  );
}
