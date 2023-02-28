import ProjectCard from "@/components/projects/ProjectCard";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { VscGithubInverted } from "react-icons/vsc";

export default function Page(): JSX.Element {
  return (
    <>
      <div className=" mt-10 mx-auto mb-16 max-w-4xl px-8">
        <h1 className="mb-8 md:text-3xl text-2xl font-bold">
          Some of My Projects
        </h1>

        <>
          <div className="flex-col mt-2 gap-6 flex">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </>
      </div>
    </>
  );
}
