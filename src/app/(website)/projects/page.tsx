import React from "react";
import ProjectsCard from "~/components/custom/cards/projects-card";

export default function Page() {
  return (
    <div className="container my-5">
      <div className="">
        <div className="text-3xl font-bold">My Projects</div>
        <p className="mt-2 max-w-[30em] text-sm text-muted-foreground">
          Here are some of the projects I've worked on. Click on any project to
          view more details.
        </p>
        <div className="grid gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
        </div>
      </div>
    </div>
  );
}
