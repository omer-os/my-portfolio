import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { VscGithubInverted } from "react-icons/vsc";
import GlowingBox from "../coms/GlowingBox";
import { ProjectType } from "../interfaces/projectTypes";
import UiButton from "../common/ui/button/UiButton";
import UiLink from "../common/ui/link/UiLink";

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <>
      <GlowingBox>
        <div className="flex flex-col gap-3 border border-zinc-400 dark:border-zinc-800/50 md:flex-row md:gap-8 rounded-xl dark:bg-zinc-900/40">
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
            <div className="text-md dark:text-zinc-200 text-zinc-400 line-clamp-2">
              {project.subtitle}{" "}
            </div>

            <div className="flex flex-wrap gap-1 mt-3 text-xs md:mt-2 md:gap-5">
              <UiLink href={project.demo} startIcon={<VscGithubInverted />}>
                view demo
              </UiLink>
              <UiLink href={project.github} startIcon={<VscGithubInverted />}>
                source code
              </UiLink>
            </div>

            <div className="mt-10 font-bold md:text-xl">Learn More</div>
          </div>
        </div>
      </GlowingBox>
    </>
  );
}
