import React from "react";
import ProjectsCard from "../cards/projects-card";
import { Button } from "~/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function HomeProjectsSection() {
  return (
    <div className="">
      <div className="text-3xl font-bold">Latest Projects</div>
      <div className="grid gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>

      <div className="mt-3">
        <Link href="/projects">
          <Button variant={"link"} className="font-bold text-primary">
            View All Projects <MoveRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
