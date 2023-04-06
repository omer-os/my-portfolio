import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbExternalLink } from "react-icons/tb";
import { Template } from "./AllTemplates";

export default function Card({ template }: { template: Template }) {
  return (
    <Link
      href={`/templates/${template.slug.current}`}
      className="rounded border border-zinc-800 group overflow-hidden relative"
    >
      <div className="img relative w-full h-[15em]">
        <Image
          src={template.coverimage.asset.url}
          className="object-cover rounded w-full h-full group-hover:scale-110 transition-all duration-300"
          fill
          alt={template.title}
        />
      </div>

      <div className="p-4 mt-2">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold capitalize">{template.title}</div>

          <div className="text-zinc-400">$20</div>
        </div>
        <div className="text-sm mt-1 text-zinc-400 line-clamp-2">
          {template.description}
        </div>
      </div>

      <div className="absolute z-10 group-hover:top-2 group-hover:right-2 bg-zinc-900 p-2 rounded transition-all group-hover:!opacity-100 opacity-0 -top-2 -right-2">
        <TbExternalLink size={20} />
      </div>
    </Link>
  );
}
