import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbExternalLink } from "react-icons/tb";
import { Template } from "./AllTemplates";

export default function Card({ template }: { template: Template }) {
  return (
    <Link
      href={`/templates/${template.slug.current}`}
      className="relative overflow-hidden transition-all border rounded-xl dark:hover:!border-zinc-400 hover:border-black dark:border-zinc-800 border-zinc-400 group"
    >
      <div className="img relative w-full h-[15em]">
        <Image
          src={template.coverimage.asset.url}
          className="object-cover w-full h-full transition-all duration-300 rounded group-hover:scale-110"
          fill
          alt={template.title}
        />
      </div>

      <div className="p-5 mt-2">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold capitalize">{template.title}</div>

          <div className="text-zinc-400">$20</div>
        </div>
        <div className="mt-1 text-sm text-zinc-400 line-clamp-2">
          {template.description}
        </div>
      </div>

      <div className="absolute z-10 group-hover:top-2 group-hover:right-2 dark:bg-zinc-900 bg-white p-2 rounded transition-all group-hover:!opacity-100 opacity-0 -top-2 -right-2">
        <TbExternalLink size={20} />
      </div>
    </Link>
  );
}
