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
        <div className="flex flex-col gap-3 border border-zinc-800/50 md:flex-row md:gap-8 rounded-xl bg-zinc-900/40">
          <div className="img md:p-3 h-[12em] md:h-60  md:w-[20em] w-full">
            <img
              src={project.coverimage?.asset.url}
              alt={project.title + " image"}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          <div className="z-20 flex flex-col p-4">
            <div className="flex gap-2">
              {project.projectCategories?.map((i) => (
                <div
                  key={i.slug.current}
                  className="px-2 py-1 text-xs capitalize transition-all border rounded hover:scale-105 border-zinc-800"
                >
                  {i.title}
                </div>
              ))}
            </div>
            <div className="mt-2 text-2xl font-bold md:text-3xl md:mt-4">
              {project.title}
            </div>
            <div className="text-md text-zinc-200 line-clamp-2">
              {project.subtitle}{" "}
            </div>

            <div className="flex flex-wrap gap-1 mt-3 text-xs md:mt-2 md:gap-5">
              <Link
                href={project.demo}
                className="flex items-center gap-2 px-2 py-2 transition-all rounded bg-zinc-900 sm:px-3 ring-0 hover:bg-zinc-800 hover:ring-1 ring-zinc-700"
              >
                <p>view demo</p>
                <FiArrowUpRight />
              </Link>
              <Link
                href={project.github}
                className="flex items-center gap-2 px-2 py-2 transition-all rounded bg-zinc-900 sm:px-3 ring-0 hover:bg-zinc-800 hover:ring-1 ring-zinc-700"
              >
                <VscGithubInverted />
                <p>source code</p>
                <FiArrowUpRight />
              </Link>
            </div>

            <div className="mt-10 font-bold md:text-xl">Learn More</div>
          </div>
        </div>
      </GlowingBox>
    </>
  );
}
