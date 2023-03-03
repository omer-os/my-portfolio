import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { VscGithubInverted } from "react-icons/vsc";
import GlowingBox from "../coms/GlowingBox";
import { ProjectType } from "../interfaces/projectTypes";

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <>
      <GlowingBox>
        <div className="border border-zinc-800/50  flex md:flex-row flex-col md:gap-8 gap-3 rounded-xl bg-zinc-900/40">
          <div className="img md:p-3 h-[12em] md:h-60  md:w-[20em] w-full">
            <img
              src={project.coverimage?.asset.url}
              alt={project.title + " image"}
              className="h-full w-full object-cover rounded-xl"
            />
          </div>

          <div className="flex z-20 p-4 flex-col">
            <div className="flex gap-2">
              {project.projectCategories?.map((i) => (
                <div className="border hover:scale-105 transition-all border-zinc-800 rounded text-xs py-1 px-2 capitalize">
                  {i.title}
                </div>
              ))}
            </div>
            <div className="text-3xl mt-4 font-bold">{project.title}</div>
            <div className="text-md text-zinc-200 line-clamp-2">
              {project.subtitle}{" "}
            </div>

            <div className="flex flex-wrap text-xs md:mt-2 mt-3 md:gap-5 gap-1">
              <Link
                href={project.demo}
                className="bg-zinc-900 flex gap-2 items-center rounded py-2 sm:px-3 px-2 ring-0 transition-all hover:bg-zinc-800 hover:ring-1 ring-zinc-700"
              >
                <p>view demo</p>
                <FiArrowUpRight />
              </Link>
              <Link
                href={project.github}
                className="bg-zinc-900 flex gap-2 items-center rounded py-2 sm:px-3 px-2 ring-0 transition-all hover:bg-zinc-800 hover:ring-1 ring-zinc-700"
              >
                <VscGithubInverted />
                <p>source code</p>
                <FiArrowUpRight />
              </Link>
            </div>

            <div className="md:text-xl font-bold mt-10">Learn More</div>
          </div>
        </div>
      </GlowingBox>
    </>
  );
}
