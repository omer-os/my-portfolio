import { Button } from "@/components/ui/button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import ProjectsCard from "./ProjectsCard";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import BlogCard from "./BlogCard";

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
const projects = [
  {
    title: "lmsat al fan",
    subtitle: "Architecture Firm based in Kirkuk, Iraq",
    slug: "lmsat-al-fan",
    img: "https://cdn.sanity.io/images/245fryc5/production/73d02a61750a4bb0804a28d09b80905fa54276d1-1920x931.png",
    demo: "https://lmsatarchi.com/",
    code: "https://github.com/omer-os/lamasat-al-fan-website",
  },
  {
    title: "Sadiq Ghazi Photography",
    subtitle: "Passionate Photographer and Videographer",
    slug: "sadiq-ghazi-photography",
    img: "https://cdn.sanity.io/images/245fryc5/production/2a1787ac416a2884a4709bd3d2c19d4818aa251a-1897x927.png",
    demo: "https://mosa-khathur-portfolio.vercel.app/",
    code: "https://github.com/omer-os/mosa-khathur-portfolio",
  },
];
const blogs = [
  {
    title: "How to use Next.js with Tailwind CSS",
    slug: "how-to-use-nextjs-with-tailwindcss",
    date: "24 Feb 2023",
    tags: ["nextjs", "tailwindcss"],
    description:
      "Next.js is a React framework that allows you to build static and dynamic websites and web applications. It is a very popular framework that is used by many developers and companies. It is also very easy to use and has a lot of features that make it a great choice for building websites and web applications.",
  },
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
        />

        {/* Profile Image */}
        <div className="sm:w-[6em] w-[5em] sm:h-[6em] h-[5em] transition-all rounded-full relative sm:left-10 left-5  sm:-bottom-12 -bottom-10 ring-2 ring-white">
          <Image
            src="/images/profile.webp"
            className="rounded-full object-cover w-full h-full"
            fill
            alt="hero image"
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
                href="/projects"
              >
                See Blog
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
        <div>
          <div className="text-2xl font-bold sm:text-3xl">Latest Projects</div>
          <div className="grid lg:grid-cols-3 gap-10 mt-6 grow">
            {/* Project Cards */}
            {projects.map((project, index) => (
              <ProjectsCard key={index} project={project} />
            ))}
          </div>
          <div className="mt-4">
            {/* View All Projects Link */}
            <Link
              href="/projects"
              className="text-xl flex gap-3 items-center w-max"
            >
              <span>View All Projects</span>
              <BsArrowRight className="mt-1" />
            </Link>
          </div>
        </div>

        {/* Latest Blogs Section */}
        <div className="my-10">
          <div className="w-full h-[.09em] rounded-full bg-zinc-500"></div>
          <div className="my-10">
            <div className="text-3xl font-bold">Latest Blogs</div>
            <div className="mt-3 text-md text-zinc-400">
              I mostly have blogs about programming and web development.
            </div>
            <div className="flex flex-col max-w-full gap-10 mt-5 overflow-hidden">
              {/* Blog Cards */}
              {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
              ))}
            </div>
            {/* View All Blogs Link */}
            <Link
              className="relative flex justify-center gap-2 py-3 mt-5 font-bold capitalize transition-all rounded hover:gap-4 group sm:text-lg sm:w-max sm:py-0 sm:rounded-none sm:items-center active:scale-95"
              href="/blog"
            >
              <div className="absolute top-0 left-0 w-full h-full transition-all -z-10 sm:w-0 rounded-xl gradient-bg"></div>
              <div className="relative dark:text-white">
                <p>View All Blogs</p>
              </div>
              <FaArrowRight className="hidden sm:block h-max" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
