import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import Line from "../coms/Line";
import HomeBlogCard from "./HomeBlogCard";

export default function LastestBlogs() {
  const blogs = [
    {
      title: "Using GitHub as a CMS",
      description:
        "Since re-launching my website with an all new redesign I added a number of cool features. One such feature I thought worth sharing about was my projects page as",
      date: "july 12, 2023",
      categories: ["nextjs", "tailwindcss"],
      slug: "Usings-GitHub-as-a-CMS",
    },
    {
      title: "Using GitHub as a CMS",
      description:
        "Since re-launching my website with an all new redesign I added a number of cool features. One such feature I thought worth sharing about was my projects page as",
      date: "july 12, 2023",
      categories: ["nextjs", "tailwindcss"],
      slug: "Using-GitHubs-as-a-CMS",
    },
    {
      title: "Using GitHub as a CMS",
      description:
        "Since re-launching my website with an all new redesign I added a number of cool features. One such feature I thought worth sharing about was my projects page as",
      date: "july 12, 2023",
      categories: ["nextjs", "tailwindcss"],
      slug: "Using-GitHub-as-a-CsMS",
    },
  ];

  return (
    <div className="my-10">
      <Line />

      <div className="my-10">
        <div className="text-3xl font-bold">Lastest Blogs</div>
        <div className="text-md mt-3 text-zinc-400">
          i mostly have blogs about programming and web development.
        </div>

        <div className="flex flex-col gap-10 mt-5">
          {blogs.map((i, index) => (
            <HomeBlogCard key={i.slug} blog={i} />
          ))}
        </div>

        <Link
          href="/blog"
          className="flex justify-center capitalize font-bold gap-2 hover:gap-4 group transition-all mt-5 sm:text-lg sm:w-max py-3 rounded sm:py-0 sm:rounded-none sm:items-center relative active:scale-95"
        >
          <div className="absolute w-full h-full top-0 left-0 -z-10 sm:w-0 transition-all rounded-xl gradient-bg"></div>
          <div className="relative">
            <p>view all blogs</p>
            <div className="absolute sm:flex hidden -bottom-1 h-[.09em]  group-hover:!w-full transition-all w-0"></div>
          </div>
          <HiArrowNarrowRight className="sm:block h-max hidden" />
        </Link>
      </div>
    </div>
  );
}
