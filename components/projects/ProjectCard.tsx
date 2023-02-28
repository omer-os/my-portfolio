import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { VscGithubInverted } from "react-icons/vsc";
import GlowingBox from "../coms/GlowingBox";

export default function ProjectCard() {
  return (
    <>
      <GlowingBox>
        <div className="border border-zinc-800/50  flex md:flex-row flex-col md:gap-8 gap-3 rounded-xl bg-zinc-900/40">
          <div className="img md:p-3 h-[12em] md:h-60  md:w-[20em] w-full">
            <img
              src="https://anishde.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fanishde12020%2Fimage%2Fupload%2Fv1651462990%2FBlogfolio%2Fog2_onx91e.png&w=1200&q=75"
              alt=""
              className="h-full w-full object-cover rounded-xl"
            />
          </div>

          <div className="flex z-20 p-4 flex-col">
            <div className="flex gap-2">
              <Link
                href="/"
                className="border hover:scale-105 transition-all border-zinc-800 rounded text-xs py-1 px-2 capitalize"
              >
                tailwindcss
              </Link>
              <Link
                href="/"
                className="border hover:scale-105 transition-all border-zinc-800 rounded text-xs py-1 px-2 capitalize"
              >
                nextjs
              </Link>
            </div>
            <div className="text-3xl mt-4 font-bold">Notiger</div>
            <div className="text-md text-zinc-200 line-clamp-2">
              Get realtime notifications on events from your application
            </div>

            <div className="flex flex-wrap text-xs md:mt-2 mt-3 md:gap-5 gap-1">
              <div className="bg-zinc-900 flex gap-2 items-center rounded py-2 sm:px-3 px-2">
                <p>lmsatarchi.com</p>
                <FiArrowUpRight />
              </div>
              <div className="bg-zinc-900 flex gap-2 items-center rounded py-2 sm:px-3 px-2">
                <VscGithubInverted />
                <p>lmsatarchi.com</p>
                <FiArrowUpRight />
              </div>
            </div>

            <div className="md:text-xl font-bold mt-10">Learn More</div>
          </div>
        </div>
      </GlowingBox>
    </>
  );
}
