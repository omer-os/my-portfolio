import Link from "next/link";
import React from "react";
import Line from "../coms/Line";

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
      <div className="my-10 flex flex-col gap-3">
        <div className="sm:text-3xl text-2xl font-bold">Skills</div>
        <div
          className="flex
        flex-wrap 
        gap-3"
        >
          {skills.map((i) => (
            <div key={i} className="bg-white/10 border border-zinc-800 sm:min-w-[7em] py-2 px-3 rounded capitalize grow text-center sm:text-base text-sm">
              {i}
            </div>
          ))}
        </div>
      </div>
      <Line />
    </div>
  );
}
