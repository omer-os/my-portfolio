import Link from "next/link";
import React from "react";
import ProjectCard from "./ProjectCard";
import { HiArrowNarrowRight } from "react-icons/hi";
import { GetHomePageProjects } from "@/pages/api/projects";

export default async function LastestProjects() {
  const projects = await GetHomePageProjects();

  return (
    <div>
      <div className="text-2xl font-bold sm:text-3xl">Lastest Projects</div>

      <div className="flex flex-wrap gap-10 mt-6 grow">
        {projects?.map((i, index) => (
          <ProjectCard project={i} key={index} />
        ))}
      </div>

      <Link
        href="/projects"
        className="relative flex justify-center gap-2 py-3 mt-5 font-bold capitalize transition-all rounded hover:gap-4 group sm:text-lg sm:w-max sm:py-0 sm:rounded-none sm:items-center active:scale-95"
      >
        <div className="absolute top-0 left-0 w-full h-full transition-all -z-10 sm:w-0 rounded-xl gradient-bg"></div>
        <div className="relative dark:text-white">
          <p>view all projects</p>
          <div className="absolute sm:flex hidden -bottom-1 h-[.09em] yellow-gradient group-hover:!w-full transition-all w-0"></div>
        </div>
        <HiArrowNarrowRight className="hidden sm:block h-max" />
      </Link>
    </div>
  );
}
