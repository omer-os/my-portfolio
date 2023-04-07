"use client";
import * as HoverCard from "@radix-ui/react-hover-card";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { FaImages } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

export default function NavMoreButton() {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <button className="py-1 px-3 self-center h-max data-[state=open]:dark:bg-zinc-800 data-[state=open]:bg-zinc-300 flex gap-1 rounded-full dark:text-zinc-400 text-zinc-500 items-center group ">
          <span>other</span>

          <BiChevronDown className="group-data-[state=open]:rotate-180 transition-all duration-300" />
        </button>
      </HoverCard.Trigger>
      <HoverCard.Content
        align="start"
        className="dark:bg-black/80 bg-white/80 backdrop-blur-md min-w-[25em] p-2 rounded border dark:border-zinc-800 border-zinc-200 min-h-[15em] grid grid-cols-[10em,_1fr] gap-2 z-50"
      >
        <Link
          href="/gallery"
          className="relative flex flex-col px-2 py-1 border rounded bg-white/10 backdrop-blur-md dark:border-zinc-800/50 border-zinc-200"
        >
          <div className="self-start text-sm font-bold">Gallery</div>
          <div className="absolute text-zinc-400 top-2 right-2">
            <TbExternalLink />
          </div>
          <div className="flex flex-col mt-auto">
            <div className="flex items-center gap-2 text-sm font-bold">
              <FaImages size={12} />
              <span className="pb-0.5">My gallery</span>
            </div>
            <div className="mt-1 text-xs text-zinc-400">
              see my gallery of images and other stuff
            </div>
          </div>
        </Link>
        <div className="flex flex-col gap-2">
          <div className="flex-1 p-2 text-sm transition-all border rounded hover:bg-white/10 hover:backdrop-blur-md border-zinc-800/50">
            comming soon...
          </div>
          <div className="flex-1 p-2 text-sm transition-all border rounded hover:bg-white/10 hover:backdrop-blur-md border-zinc-800/50">
            comming soon...
          </div>
        </div>

        <HoverCard.Arrow className="fill-zinc-800" />
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
