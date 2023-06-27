import React from "react";
import ProjectsCard from "./ProjectsCard";
const projects = [
  {
    title: "lmsat al fan",
    subtitle: "Architecture Firm based in Kirkuk, Iraq",
    slug: "lmsat-al-fan",
    img: "https://cdn.sanity.io/images/245fryc5/production/73d02a61750a4bb0804a28d09b80905fa54276d1-1920x931.png",
    demo: "https://lmsatarchi.com/",
    code: "https://github.com/omer-os/lamasat-al-fan-website",
  },
  {
    title: "Sadiq Ghazi Photography",
    subtitle: "Passionate Photographer and Videographer",
    slug: "sadiq-ghazi-photography",
    img: "https://cdn.sanity.io/images/245fryc5/production/2a1787ac416a2884a4709bd3d2c19d4818aa251a-1897x927.png",
    demo: "https://mosa-khathur-portfolio.vercel.app/",
    code: "https://github.com/omer-os/mosa-khathur-portfolio",
  },
];
export default function ProjectsPage() {
  return (
    <div className="max-w-4xl px-8 mx-auto mt-10 mb-16 ">
      <div className="text-3xl font-bold">Some of My Projects</div>

      <div className="flex flex-col gap-6 mt-5">
        {projects.map((i, index) => (
          <ProjectsCard key={index} project={i} />
        ))}
      </div>
    </div>
  );
}
