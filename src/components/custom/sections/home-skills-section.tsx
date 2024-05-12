import React from "react";

export default function HomeSkillsSection() {
  return (
    <div>
      <p className="text-2xl font-bold">Skills</p>

      <div className="mt-2 flex flex-wrap gap-3">
        {[
          {
            name: "nextjs",
            href: "/",
          },
          {
            name: "tailwindcss",
            href: "/",
          },
          {
            name: "python",
            href: "/",
          },
          {
            name: "javascript",
            href: "/",
          },
          {
            name: "reactjs",
            href: "/",
          },
          {
            name: "typescript",
            href: "/",
          },
          {
            name: "git",
            href: "/",
          },
          {
            name: "figma design",
            href: "/",
          },
          {
            name: "prisma",
            href: "/",
          },
          {
            name: "railway",
            href: "/",
          },
          {
            name: "sanity",
            href: "/",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="min-w-max flex-1 rounded-lg border bg-secondary/50 px-4 py-2 text-center transition-all hover:bg-secondary sm:min-w-[8em]"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
