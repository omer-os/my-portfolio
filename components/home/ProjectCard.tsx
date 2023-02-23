import Link from "next/link";
import React from "react";

export default function ProjectCard({
  project,
}: {
  project: { title: string; date: string };
}) {
  return (
    <Link
      href="/"
      className="flex flex-1 min-w-[15em] flex-col  rounded-xl p-3 border border-zinc-900 bg-black/5"
    >
      <div className="h-[15em] rounded-xl bg-zinc-900"></div>
      <div className="font-bold capitalize text-lg mt-2">{project.title}</div>

      <div className="flex items-center gap-2 ">
        <p className="text-zinc-400 capitalize">{project.date}</p>
        {/* <div className="h-1 w-1 rounded-full bg-zinc-400"></div> */}
      </div>
    </Link>
  );
}
