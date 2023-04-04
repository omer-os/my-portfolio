import { ProjectType } from "@/components/interfaces/projectTypes";
import ProjectCard from "@/components/projects/ProjectCard";
import { GetAllProjects } from "@/pages/api/projects";

export default async function Page() {
  const projects: ProjectType[] | null = await GetAllProjects();
  return (
    <>
      <div className=" mt-10 mx-auto mb-16 max-w-4xl px-8">
        <h1 className="mb-8 md:text-3xl text-2xl font-bold">
          Some of My Projects
        </h1>

        <>
          <div className="flex-col mt-2 gap-6 flex">
            {projects?.map((i) => (
              <ProjectCard key={i.slug.current} project={i} />
            ))}
          </div>
        </>
      </div>
    </>
  );
}
