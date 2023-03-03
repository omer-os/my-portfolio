import { GetHomeBlogs } from "@/pages/api/blog";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import Line from "../coms/Line";
import { Blog } from "../interfaces/blog";
import HomeBlogCard from "./HomeBlogCard";

export default async function LastestBlogs() {
  const data: Blog[] = await GetHomeBlogs();

  return (
    <div className="my-10">
      <Line />

      <div className="my-10">
        <div className="text-3xl font-bold">Lastest Blogs</div>
        <div className="text-md mt-3 text-zinc-400">
          i mostly have blogs about programming and web development.
        </div>

        <div className="flex flex-col gap-10 mt-5 max-w-full overflow-hidden">
          {data?.map((i, index) => (
            <HomeBlogCard key={i.slug.current} blog={i} />
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
