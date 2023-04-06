import Link from "next/link";
import React from "react";
import Line from "@/components/coms/Line";

export default function HomeSkillsSection() {
  const skills = [
    "nextjs",
    "tailwindcss",
    "python",
    "javascript",
    "reactjs",
    "typescript",
    "git",
    "figma design",
    "prisma",
    "railway",
    "sanity",
  ];
  return (
    <div className="my-10">
      <Line />
      <div className="flex flex-col gap-3 my-10">
        <div className="text-lg font-bold sm:text-3xl">Skills</div>
        <div
          className="flex flex-wrap gap-3"
        >
          {skills.map((i) => (
            <div
              key={i}
              className="bg-white/10 border dark:border-zinc-800 border-zinc-400 sm:min-w-[7em] py-2 px-3 rounded capitalize grow text-center sm:text-base text-sm hover:scale-105 transition-all dark:hover:!bg-zinc-800 hover:bg-zinc-300"
            >
              {i}
            </div>
          ))}
        </div>
      </div>
      <Line />
    </div>
  );
}
