import { ProjectType } from "@/components/interfaces/projectTypes";
import ProjectCard from "@/components/projects/ProjectCard";
import { GetAllProjects } from "@/pages/api/projects";

export default async function Page() {
  const projects: ProjectType[] | null = await GetAllProjects();
  return (
    <>
      <div className="max-w-4xl px-8 mx-auto mt-10 mb-16 ">
        <h1 className="mb-8 text-2xl font-bold md:text-3xl">
          Some of My Projects
        </h1>

        <>
          <div className="flex flex-col gap-6 mt-2">
            {projects?.map((i) => (
              <ProjectCard key={i.slug.current} project={i} />
            ))}
          </div>
        </>
      </div>
    </>
  );
}
