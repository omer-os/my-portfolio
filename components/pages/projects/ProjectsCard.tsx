import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectsCard({
  project,
}: {
  project: {
    title: string;
    subtitle: string;
    slug: string;
    demo: string;
    code: string;
    img: string;
  };
}) {
  return (
    <article className="flex flex-col bg-zinc-black rounded-lg border border-zinc-900 p-3">
      <div className="img relative h-[20em]">
        <Image
          fill
          src={project.img}
          className="rounded-lg object-cover"
          alt={project.title + "-image"} // Add alt text for image
        />
      </div>
      <div className="z-20 flex flex-col flex-1 data-[variant=default]:p-4">
        <div className="flex gap-2"></div>
        <h2 className="mt-2 text-lg font-bold text-white md:text-2xl md:mt-4">
          {project.title}
        </h2>
        <p className="text-md dark:text-zinc-200 text-zinc-400 line-clamp-2 mt-2">
          {project.subtitle}
        </p>
        <div className="flex flex-wrap gap-1 mt-auto pt-4 text-xs md:gap-5">
          <Link
            href={project.demo} // Use Next.js Link for internal links
            className="text-white rounded active:scale-95 fill-current transition-all flex gap-2 items-center justify-center text-center w-max bg-zinc-900 hover:bg-zinc-800 px-4 py-2"
          >
            View Demo
          </Link>
          <Link
            href={project.code} // Use Next.js Link for internal links
            className="text-white rounded active:scale-95 fill-current transition-all flex gap-2 items-center justify-center text-center w-max bg-zinc-900 hover:bg-zinc-800 px-4 py-2"
          >
            Source Code
          </Link>
        </div>
      </div>
    </article>
  );
}
