import ProjectsPage from "@/components/pages/projects/ProjectsPage";
import { getAllProjects } from "@/lib/functions/sanityFunctions";
import { Project } from "@/lib/interfaces/interfaces";
import React from "react";

export default async function page() {
  const projects: Project[] = await getAllProjects();
  return (
    <div>
      <ProjectsPage projects={projects} />
    </div>
  );
}
