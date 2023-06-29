import { Button } from "@/components/ui/button/Button";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import HomeBlogs from "./home-blogs/home-blogs";
import HomeProjects from "./home-projects/home-projects";

const skills = [
  "nextjs",
  "tailwindcss",
  "python",
  "javascript",
  "reactjs",
  "typescript",
  "git",
  "figma design",
  "prisma",
  "railway",
  "sanity",
];

export default function HomePage() {
  return (
    <div className="mb-4">
      {/* Hero Section */}
      <div className="sm:h-[15em] h-[13em] transition-all w-full bg-zinc-900 rounded-xl pb-10 ring-white relative mt-10 flex items-end">
        {/* Hero Image */}
        <Image
          src="/images/hero.webp"
          className="rounded-lg object-cover w-full h-full ring-2 ring-white"
          fill
          alt="hero image"
          priority
        />

        {/* Profile Image */}
        <div className="sm:w-[6em] w-[5em] sm:h-[6em] h-[5em] transition-all rounded-full relative sm:left-10 left-5  -bottom-20 ring-2 ring-white">
          <Image
            src="/images/profile.webp"
            className="rounded-full object-cover w-full h-full"
            fill
            alt="hero image"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col mt-16">
        {/* Name and Social Links */}
        <div className="flex justify-between items-center">
          <div className="text-2xl font-extrabold capitalize sm:text-4xl">
            Omar Chatin
          </div>

          <div className="flex gap-2">
            {/* GitHub */}
            <Button asChild size={"icon"} rounded={"lg"} variant={"secondary"}>
              <Link href="https://github.com/omer-os">
                <AiFillGithub size={20} />
              </Link>
            </Button>

            {/* LinkedIn */}
            <Button asChild size={"icon"} rounded={"lg"} variant={"secondary"}>
              <Link href="https://www.linkedin.com/in/omar-chatin/">
                <AiFillLinkedin size={20} />
              </Link>
            </Button>

            {/* Instagram */}
            <Button asChild size={"icon"} rounded={"lg"} variant={"secondary"}>
              <Link href="https://www.instagram.com/omar.chatin/">
                <AiFillInstagram size={20} />
              </Link>
            </Button>
          </div>
        </div>

        {/* Description */}
        <>
          <div className="flex flex-col">
            <p className="text-zinc-500 sm:text-base text-xs capitalize max-w-[20em] mt-4">
              Frontend Web Developer | Musician | Dental Technician.
            </p>

            <p className="text-sm sm:text-lg mt-3">
              As a Front-End Web Developer with 4+ years of experience, I bring
              technical skills and a passion for creating user-friendly websites
              and applications to every project. With expertise in HTML, CSS,
              JavaScript, and React.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              {/* See Projects Button */}
              <Link
                className="px-4 py-2 text-sm font-semibold text-white rounded gradient-bg sm:text-base"
                href="/projects"
              >
                See Projects
              </Link>

              {/* See Blog Button */}
              <Link
                className="text-white rounded active:scale-95 fill-current transition-all flex gap-2 items-center justify-center text-center w-max bg-zinc-900 hover:bg-zinc-800 px-6 py-2"
                href="/blog/all"
              >
                See My Blog
              </Link>
            </div>
          </div>
        </>

        {/* Skills Section */}
        <div className="my-10">
          <div className="w-full h-[.09em] rounded-full bg-zinc-500"></div>
          <div className="flex flex-col gap-3 my-10">
            <div className="text-lg font-bold sm:text-3xl">Skills</div>
            <div className="flex flex-wrap gap-3">
              {/* Skills Chips */}
              {skills.map((skill, index) => (
                <div
                  key={index}
                  data-variant="filled"
                  data-size="sm"
                  className="flex items-center justify-center transition-all rounded-lg active:bg-white/10 ring-1 ring-white dark:text-white text-black dark:fill-white fill-zinc-600 w-max data-[size=sm]:text-sm data-[size=xs]:text-xs data-[size=xs]:p-1 p-2 data-[variant=bordered]:dark:ring-white data-[variant=bordered]:ring-black data-[variant=bordered]:bg-transparent data-[variant=bordered]:hover:bg-white/10 data-[variant=filled]:dark:bg-zinc-900 data-[variant=filled]:bg-zinc-300 data-[variant=filled]:dark:hover:bg-zinc-800 data-[variant=filled]:hover:bg-zinc-400 data-[variant=filled]:ring-zinc-700 acitve:scale-95 grow sm:min-w-[7em]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[.09em] rounded-full bg-zinc-500"></div>
        </div>

        {/* Projects Section */}
        <Suspense
          fallback={
            <p className="text-zinc-500">loading lastest projects...</p>
          }
        >
          {/* @ts-ignore */}
          <HomeProjects />
        </Suspense>

        {/* Latest Blogs Section */}
        <Suspense
          fallback={<p className="text-zinc-500">loading lastest blogs...</p>}
        >
          {/* @ts-ignore */}
          <HomeBlogs />
        </Suspense>
      </div>
    </div>
  );
}
