import Link from "next/link";
import React from "react";
import Line from "@/components/coms/Line";
import SimpleChip from "@/components/common/chips/SimpleChip";

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
        <div className="flex flex-wrap gap-3">
          {skills.map((i) => (
            <SimpleChip variant="filled" className="grow sm:min-w-[7em]">
              {i}
            </SimpleChip>
          ))}
        </div>
      </div>
      <Line />
    </div>
  );
}
