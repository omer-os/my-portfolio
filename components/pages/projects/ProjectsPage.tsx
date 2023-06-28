import { Project } from "@/lib/interfaces/interfaces";
import React from "react";
import ProjectsCard from "./ProjectsCard";

export default function ProjectsPage({ projects }: { projects: Project[] }) {
  return (
    <div className="max-w-4xl px-8 mx-auto mt-10 mb-16 ">
      <div className="text-3xl font-bold">Some of My Projects</div>

      <div className="flex flex-col gap-6 mt-5">
        {projects.map((project, index) => (
          <ProjectsCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
