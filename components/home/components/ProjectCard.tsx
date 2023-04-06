import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { ProjectType } from "@/components/interfaces/projectTypes";
export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Link
      href={project.demo}
      className="flex flex-1 min-w-[15em] flex-col  rounded-xl p-3 relative group hover:scale-105 transition-all active:scale-95 border dark:border-zinc-900 border-zinc-300 dark:bg-black/5"
    >
      <div className="absolute z-10 flex items-center justify-center w-8 h-8 text-white transition-all border border-white rounded opacity-0 dark:border-zinc-700 hover:bg-white/10 bg-black/0 group-hover:top-6 top-1 group-hover:right-6 right-1 group-hover:opacity-100 dark:text-black">
        <HiOutlineExternalLink />
      </div>

      <div className="h-[15em] relative rounded-xl bg-zinc-900">
        <Image
          fill
          src={project.coverimage.asset.url}
          alt={project.title + " image"}
          className={`h-full w-full object-cover rounded-xl
          group-hover:brightness-50 transition-all`}
        />
      </div>
      <div className="mt-2 text-lg font-bold capitalize">{project.title}</div>

      <div className="flex items-center gap-2 ">
        <p className="capitalize text-zinc-400">
          {formatDate(project.publishedAt)}
        </p>
      </div>
    </Link>
  );
}

function formatDate(date: string) {
  const d = new Date(date);
  const month = d.toLocaleString("default", { month: "short" });
  const day = d.getDate();
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
}
