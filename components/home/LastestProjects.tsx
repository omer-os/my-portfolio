import Link from "next/link";
import React from "react";
import ProjectCard from "./ProjectCard";
import { HiArrowNarrowRight } from "react-icons/hi";
export default function LastestProjects() {
  const projects = [
    {
      title: "Lmsat Al Fan Architechture",
      date: "august 13th, 2022",
    },
    {
      title: "codie club personal project",
      date: "august 13th, 2022",
    },
    {
      title: "Melo production website",
      date: "august 13th, 2022",
    },
  ];
  return (
    <div>
      <div className="sm:text-3xl text-2xl font-bold">Lastest Projects</div>

      <div className="flex mt-6 flex-wrap grow gap-10">
        {projects.map((i, index) => (
          <ProjectCard project={i} key={index} />
        ))}
      </div>

      <Link
        href="/projects"
        className="flex justify-center capitalize font-bold gap-2 hover:gap-4 group transition-all mt-5 sm:text-lg sm:w-max py-3 rounded sm:py-0 sm:rounded-none   sm:items-center relative active:scale-95"
      >
        <div className="absolute w-full h-full top-0 left-0 -z-10  sm:w-0 transition-all rounded-xl gradient-bg"></div>
        <div className="relative">
          <p>view all projects</p>
          <div className="absolute sm:flex hidden -bottom-1 h-[.09em] yellow-gradient group-hover:!w-full transition-all w-0"></div>
        </div>
        <HiArrowNarrowRight className="sm:block h-max hidden" />
      </Link>
    </div>
  );
}
