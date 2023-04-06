import Line from "@/components/coms/Line";
import { Blog } from "@/components/interfaces/blog";
import { HomePageBlogs } from "@/pages/api/blogs/Functions";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import HomeBlogCard from "./HomeBlogCard";

export default async function LastestBlogs() {
  const data: Blog[] = await HomePageBlogs();

  return (
    <div className="my-10">
      <Line />

      <div className="my-10">
        <div className="text-3xl font-bold">Lastest Blogs</div>
        <div className="mt-3 text-md text-zinc-400">
          i mostly have blogs about programming and web development.
        </div>

        <div className="flex flex-col max-w-full gap-10 mt-5 overflow-hidden">
          {data?.map((i, index) => (
            <HomeBlogCard key={i.slug.current} blog={i} />
          ))}
        </div>

        <Link
          href="/blog"
          className="relative flex justify-center gap-2 py-3 mt-5 font-bold capitalize transition-all rounded hover:gap-4 group sm:text-lg sm:w-max sm:py-0 sm:rounded-none sm:items-center active:scale-95"
        >
          <div className="absolute top-0 left-0 w-full h-full transition-all -z-10 sm:w-0 rounded-xl gradient-bg"></div>
          <div className="relative text-white">
            <p>view all blogs</p>
            <div className="absolute sm:flex hidden -bottom-1 h-[.09em]  group-hover:!w-full transition-all w-0"></div>
          </div>
          <HiArrowNarrowRight className="hidden sm:block h-max" />
        </Link>
      </div>
    </div>
  );
}
