import GlowingBox from "@/components/coms/GlowingBox";
import { ProjectType } from "@/components/interfaces/projectTypes";
import React from "react";
import UiLink from "../link/UiLink";
import { VscGithubInverted } from "react-icons/vsc";

interface ProjectCardProps {
  project: ProjectType;
  variant?: "default" | "home";
}

export default function UiProjectCard(props: ProjectCardProps) {
  return (
    <GlowingBox>
      <div
        data-variant={props.variant}
        className="flex flex-col gap-3 border border-zinc-400 dark:border-zinc-800/50 data-[variant=default]:md:flex-row md:gap-8 rounded-xl data-[variant=default]:dark:bg-zinc-900/40 data-[variant=home]:dark:bg-black p-3"
      >
        <div
          className="img data-[variant=default]:md:p-3 data-[variant=default]:h-[12em] h-[15em] data-[variant=default]:md:h-60  
        
        data-[variant=default]:w-[15em]
        "
        >
          <img
            src={props.project.coverimage?.asset.url}
            alt={props.project.title + " image"}
            className="object-cover w-full h-full rounded-xl"
          />
        </div>

        <div className="z-20 flex flex-col flex-1 data-[variant=default]:p-4">
          <div className="flex gap-2">
            {props.project.projectCategories?.map((i) => (
              <div
                key={i.slug.current}
                className="px-2 py-1 text-xs capitalize transition-all border rounded hover:scale-105 border-zinc-800"
              >
                {i.title}
              </div>
            ))}
          </div>
          <div className="mt-2 text-2xl font-bold text-white md:text-3xl md:mt-4">
            {props.project.title}
          </div>
          <div className="text-md dark:text-zinc-200 text-zinc-400 line-clamp-2">
            {props.project.subtitle}{" "}
          </div>

          {props.project.demo && props.project.github && (
            <div className="flex flex-wrap gap-1 mt-3 text-xs md:mt-2 md:gap-5">
              <UiLink
                href={props.project.demo}
                startIcon={<VscGithubInverted />}
              >
                view demo
              </UiLink>
              <UiLink
                href={props.project.github}
                startIcon={<VscGithubInverted />}
              >
                source code
              </UiLink>
            </div>
          )}
        </div>
      </div>
    </GlowingBox>
  );
}
