import { HomePageProjects } from "@/lib/functions/sanityFunctions";
import { Project } from "@/lib/interfaces/interfaces";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ProjectsCard from "./ProjectsCard";

export default async function HomeProjects() {
  const projects: Project[] = await HomePageProjects();
  return (
    <>
      <div>
        <div className="text-2xl font-bold sm:text-3xl">Latest Projects</div>
        <div className="grid lg:grid-cols-3 gap-10 mt-6 grow">
          {/* Project Cards */}
          {projects.map((project, index) => (
            <ProjectsCard key={index} project={project} />
          ))}
        </div>
        <div className="mt-4">
          {/* View All Projects Link */}
          <Link
            href="/projects"
            className="text-xl flex gap-3 items-center w-max"
          >
            <span>View All Projects</span>
            <BsArrowRight className="mt-1" />
          </Link>
        </div>
      </div>
    </>
  );
}
