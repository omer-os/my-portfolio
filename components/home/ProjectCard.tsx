import Link from "next/link";
import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function ProjectCard({
  project,
}: {
  project: { title: string; date: string };
}) {
  return (
    <Link
      href="/"
      className="flex flex-1 min-w-[15em] flex-col  rounded-xl p-3 relative group hover:scale-105 transition-all active:scale-95 border border-zinc-900 bg-black/5"
    >
      <div className="absolute z-10 rounded w-8 h-8 border border-zinc-700 flex items-center justify-center hover:bg-white/10 bg-black/0 transition-all group-hover:top-6 top-1 group-hover:right-6 right-1 opacity-0 group-hover:opacity-100 ">
        <HiOutlineExternalLink />
      </div>

      <div className="h-[15em] rounded-xl bg-zinc-900"></div>
      <div className="font-bold capitalize text-lg mt-2">{project.title}</div>

      <div className="flex items-center gap-2 ">
        <p className="text-zinc-400 capitalize">{project.date}</p>
      </div>
    </Link>
  );
}
