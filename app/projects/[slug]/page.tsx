import { getProjectBySlug, getSlugs } from "@/lib/functions/sanityFunctions";
import { Project } from "@/lib/interfaces/interfaces";
import { convertToHtml } from "@/lib/sanityClient";
import Link from "next/link";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";

// const dynamic = 'force-dynamic'

// export async function generateStaticParams() {
//   const projectsSlugs = await getSlugs("projects");

//   return projectsSlugs.map((i: { slug: string }) => ({
//     slug: i.slug,
//   }));
// }

export default async function page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const project: Project = await getProjectBySlug(params.slug);

  const markdownContent = convertToHtml(project?.content || []);

  return (
    <div className="px-6">
      <div className="max-w-5xl mx-auto py-10">
        <Link
          href={`/projects`}
          className="text-white rounded active:scale-95 fill-current transition-all flex gap-2 items-center justify-center text-center w-max bg-zinc-900 hover:bg-zinc-800 px-4 py-2"
        >
          <BsArrowLeftShort />
          Go Back
        </Link>
        <div className="img h-[20em] mt-4">
          <img
            src={project?.coverImageUrl}
            className="w-full h-full object-cover rounded-lg"
            alt={project?.title + "-image"} // Add alt text for image
          />
        </div>

        <div className="mt-5 flex gap-4">
          <Link
            href={project?.sourceCodeLink}
            className="text-white rounded-lg active:scale-95 fill-current transition-all flex gap-2 items-center justify-center text-sm text-center w-max bg-zinc-900 hover:bg-zinc-800 px-4 py-2"
          >
            Source Code
          </Link>

          <Link
            href={project?.demoLink}
            className="text-white rounded-lg active:scale-95 fill-current transition-all flex gap-2 items-center justify-center text-sm text-center w-max bg-zinc-900 hover:bg-zinc-800 px-4 py-2"
          >
            Demo Link
          </Link>
        </div>

        <h1 className="text-4xl mt-6 font-bold capitalize">{project?.title}</h1>

        <div className="text-zinc-400">{project?.subtitle}</div>

        <div className="mt-6">
          <div
            className="prose prose-invert w-full"
            dangerouslySetInnerHTML={{ __html: markdownContent }}
          ></div>
        </div>
      </div>
    </div>
  );
}
