import ProgressBar from "@/components/coms/ReactProgressBr";
import { Blog } from "@/components/interfaces/blog";
import { GetAllBlogs, GetBlogBySlug } from "@/pages/api/blogs/Functions";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { BsArrowLeftShort } from "react-icons/bs";

export async function generateStaticParams() {
  const data: Blog[] = await GetAllBlogs();

  return data.map((blog) => ({
    blogid: blog.slug.current,
  }));
}

export default async function page({
  params: { blogid },
}: {
  params: { blogid: string };
}) {
  const blog: Blog = await GetBlogBySlug(blogid);

  return (
    <div className="w-full max-w-3xl px-4 mx-auto mt-2 sm:px-6 xl:max-w-5xl xl:px-0">
      <ProgressBar />
      <div
        className={`bg-gradient-to-r from-blue-600/20 to-yellow-600/20 h-[25em] w-full absolute md:top-16 top-[3.3em] -z-10 left-0 flex`}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t dark:from-black from-white" />
      </div>

      <Link
        href={"/blog?category=all"}
        className="flex items-center gap-1 mt-10 text-sm transition-all dark:hover:text-white  hover:underline dark:text-zinc-400 text-zinc-700 hover:text-zinc-600"
      >
        <BsArrowLeftShort />
        Back to blog
      </Link>

      <div className="flex flex-col gap-2 pt-10 md:flex-row md:items-center md:gap-3">
        <Link
          href={"/blog?category=" + blog.blogCategory.slug.current}
          className="px-3 py-1 text-white rounded-full bg-gradient-to-r from-yellow-600 w-max to-orange-600 "
        >
          {blog.blogCategory.title}
        </Link>

        <div className="dark:text-zinc-400">{formatDate(blog.publishedAt)}</div>
      </div>

      <div className="text-5xl max-w-[15em]  mt-5 font-bold capitalize">
        {blog.title}
      </div>

      {/* actual content */}
      <div className="flex flex-col gap-10 mt-16 lg:flex-row">
        <div className="flex-1 lg:border-r lg:pr-10 dark:border-zinc-800 border-zinc-300">
          <div className="img">
            <img
              className="w-full h-full max-h-[20em] object-cover border dark:border-zinc-800 border-zinc-300 rounded-xl"
              src={blog.coverimage.asset.url || ""}
            />
          </div>

          <article className="my-10 prose dark:prose-invert porse-2xl prose-a:text-blue-600 prose-a:hover:underline prose-a:font-bold dark:prose-code:bg-zinc-900 porse-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl porse-li:text-xl ">
            <PortableText value={blog.content} />
          </article>
        </div>

        {/* <div className="max-w-[16em] lg:flex hidden">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quam in
          et ipsum iste delectus sapiente inventore ad numquam commodi ut
          deleniti, fugiat voluptate ipsa iure reiciendis? Ab, quas recusandae!
        </div> */}
      </div>
    </div>
  );
}

function formatDate(date: string) {
  const d = new Date(date);
  const month = d.toLocaleString("default", { month: "long" });
  const day = d.getDate();
  const year = d.getFullYear();
  const weekday = d.toLocaleString("default", { weekday: "long" });

  return `${weekday}, ${month} ${day}th ${year}`;
}
