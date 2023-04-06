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
        className="dark:bg-black/80 bg-white/80 backdrop-blur-md min-w-[25em] p-2 rounded border dark:border-zinc-800 border-zinc-200 min-h-[15em] grid grid-cols-[10em,_1fr] gap-2"
      >
        <Link
          href="/gallery"
          className="bg-white/10 relative backdrop-blur-md py-1 px-2 border dark:border-zinc-800/50 border-zinc-200 rounded flex flex-col"
        >
          <div className="self-start text-sm font-bold">Gallery</div>
          <div className="absolute text-zinc-400 top-2 right-2">
            <TbExternalLink />
          </div>
          <div className="mt-auto flex flex-col">
            <div className="font-bold text-sm flex gap-2 items-center">
              <FaImages size={12} />
              <span className="pb-0.5">My gallery</span>
            </div>
            <div className="text-zinc-400 text-xs mt-1">
              see my gallery of images and other stuff
            </div>
          </div>
        </Link>
        <div className="flex flex-col gap-2">
          <div className="p-2 text-sm hover:bg-white/10 flex-1 hover:backdrop-blur-md transition-all border border-zinc-800/50 rounded">
            comming soon...
          </div>
          <div className="p-2 text-sm hover:bg-white/10 flex-1 hover:backdrop-blur-md transition-all border border-zinc-800/50 rounded">
            comming soon...
          </div>
        </div>

        <HoverCard.Arrow className="fill-zinc-800" />
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
