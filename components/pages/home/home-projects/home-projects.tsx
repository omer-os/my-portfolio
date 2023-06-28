import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
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
export default function HomeProjects() {
  return (
    <>
      <div>
        <div className="text-2xl font-bold sm:text-3xl">Latest Projects</div>
        <div className="grid lg:grid-cols-3 gap-10 mt-6 grow">
          {/* Project Cards */}
          {projects.map((project, index) => (
            <ProjectsCard key={index} project={project} />
          ))}
        </div>
        <div className="mt-4">
          {/* View All Projects Link */}
          <Link
            href="/projects"
            className="text-xl flex gap-3 items-center w-max"
          >
            <span>View All Projects</span>
            <BsArrowRight className="mt-1" />
          </Link>
        </div>
      </div>
    </>
  );
}
