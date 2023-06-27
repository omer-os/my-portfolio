import Template from "@/lib/interfaces/interfaces";
import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

export default function TemplatesPage({
  templates,
}: {
  templates: Template[];
}) {
  return (
    <div>
      <div className="text-4xl font-bold text-center">Find your template</div>
      <div className="text-lg text-zinc-500 mt-4 text-center max-w-[25em] mx-auto">
        choose from my pre-built templates or contact me for a custom design,
        I'm always happy to help!
      </div>
      <div className="grid gap-4 mt-10 lg:grid-cols-3 md:grid-cols-2 ">
        {templates.map((i, index) => (
          <Link
            href={`/templates/${i.slug.current}`}
            key={index}
            className="relative overflow-hidden transition-all border rounded-xl dark:hover:!border-zinc-400 hover:border-black dark:border-zinc-800 border-zinc-400 group"
          >
            <div className="img relative w-full h-[15em]">
              <img
                src={i.coverimage.asset.url}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <div className="p-5 mt-2">
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold capitalize">{i.title}</div>
                <div className="text-zinc-400">${i.price}</div>
              </div>
              <div className="mt-1 text-sm text-zinc-400 line-clamp-2">
                {i.subtitle}
              </div>
            </div>

            <div className="absolute z-10 group-hover:top-2 group-hover:right-2 dark:bg-zinc-900 bg-white p-2 rounded transition-all group-hover:!opacity-100 opacity-0 -top-2 -right-2">
              <FiExternalLink />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
