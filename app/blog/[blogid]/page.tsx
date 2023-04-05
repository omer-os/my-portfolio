import ProgressBar from "@/components/coms/ReactProgressBr";
import { Blog } from "@/components/interfaces/blog";
import { GetAllBlogs, GetBlogBySlug } from "@/pages/api/blogs/Functions";
import Link from "next/link";
import { BiLeftArrow } from "react-icons/bi";
import { PortableText } from "@portabletext/react";

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
    <div className="max-w-3xl w-full px-4 mx-auto mt-2 sm:px-6 xl:max-w-5xl xl:px-0">
      <ProgressBar />
      <div
        className={`bg-gradient-to-r from-blue-600/20 to-yellow-600/20 h-[25em] w-full absolute md:top-16 top-[3.3em] -z-10 left-0 flex`}
      >
        <div className="absolute bottom-0 left-0 top-0 right-0 bg-gradient-to-t from-black" />
      </div>

      <Link
        href={"/blog?category=all"}
        className="mt-10 hover:text-white hover:underline transition-all text-zinc-400 flex items-center gap-1 text-sm"
      >
        <BiLeftArrow />
        Back to blog
      </Link>

      <div className="pt-10 flex md:flex-row flex-col md:items-center gap-2 md:gap-3">
        <Link
          href={"/blog?category=" + blog.blogCategory.slug.current}
          className="rounded-full py-1 px-3  bg-gradient-to-r from-yellow-600 w-max to-orange-600 "
        >
          {blog.blogCategory.title}
        </Link>

        <div className="text-zinc-400">{formatDate(blog.publishedAt)}</div>
      </div>

      <div className="text-5xl max-w-[15em]  mt-5 font-bold capitalize">
        {blog.title}
      </div>

      {/* actual content */}
      <div className="flex lg:flex-row flex-col gap-10 mt-16">
        <div className="flex-1 lg:border-r lg:pr-10 border-zinc-800">
          <div className="img">
            <img
              className="w-full h-full max-h-[20em] object-cover border border-zinc-800 rounded-xl"
              src={blog.coverimage.asset.url || ""}
            />
          </div>

          <article
            className="prose my-10 prose-invert porse-2xl 
          
          prose-a:text-blue-600 
          prose-a:hover:underline 
          prose-a:font-bold 
          
          prose-code:bg-zinc-900
          
          porse-h1:text-4xl
          prose-h2:text-3xl
          prose-h3:text-2xl
          prose-h4:text-xl

          porse-li:text-xl

          "
          >
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
