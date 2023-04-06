import Image from "next/image";
import React from "react";
import { Template } from "./AllTemplates";

export default function Card({ template }: { template: Template }) {
  return (
    <div className="rounded border border-zinc-800 overflow-hidden">
      <div className="img relative w-full h-[15em]">
        <Image
          src={template.coverimage.asset.url}
          className="object-cover rounded w-full h-full"
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
    </div>
  );
}
