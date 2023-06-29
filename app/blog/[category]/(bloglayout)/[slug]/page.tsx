import RelatedBlogs from "@/components/pages/blogs/RelatedBlogs-blogdetails";
import {
  formatSanityDate,
  getAllBlogCategories,
  getBlogBySlug,
} from "@/lib/functions/sanityFunctions";
import { convertToHtml } from "@/lib/sanityClient";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { BsArrowLeft } from "react-icons/bs";

export default async function page({
  params,
}: {
  params: {
    category: string;
    slug: string;
  };
}) {
  const blog = await getBlogBySlug(params.slug);

  const markdownContent = convertToHtml(blog?.content || []);

  return (
    <div className="w-full max-w-3xl px-4 mx-auto mt-2 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="bg-gradient-to-r from-blue-600/20 to-yellow-600/20 h-[25em] w-full absolute md:top-16 top-[3.3em]  left-0 flex">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t dark:from-black from-white"></div>
      </div>

      <main className="z-10 relative -mt-10">
        <Link
          href="/blog/all"
          className="flex items-center w-max mt-10 text-sm transition-all dark:hover:text-white hover:underline dark:text-zinc-400 text-zinc-700 hover:text-zinc-600 gap-2"
        >
          <BsArrowLeft />
          Back to blog
        </Link>

        <div className="flex flex-col gap-2 pt-10 md:flex-row md:items-center md:gap-3">
          <Link
            href="/blog/nextjs"
            className="px-3 py-1 text-white rounded-full bg-gradient-to-r from-yellow-600 w-max to-orange-600"
          >
            {blog?.category}
          </Link>
          <div className="dark:text-zinc-400">
            {formatSanityDate(blog?.publishDate || "")}
          </div>
        </div>

        <div className="text-5xl max-w-[15em] mt-5 font-bold capitalize">
          {blog?.title}
        </div>

        <div className="gap-6 mt-16 grid lg:grid-cols-[1fr_16em] grid-cols-1">
          <div className="con-1-1 flex-1 lg:border-r lg:pr-10 dark:border-zinc-800 flex flex-col border-zinc-300">
            <div className="img h-[20em] relative">
              <Image
                src="https://cdn.sanity.io/images/245fryc5/production/f54f481348cfbc47902c4bec66b9f199cad95bbb-1000x582.png"
                fill
                alt="Picture of the author"
                className="rounded-lg object-cover w-full h-full border border-zinc-800"
              />
            </div>

            <br />

            <div
              className="prose prose-invert  break-words"
              dangerouslySetInnerHTML={{ __html: markdownContent }}
            ></div>
          </div>

          <Suspense
            fallback={
              <div className="flex flex-col gap-4">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex flex-col bg-zinc-900 h-max p-3 rounded-lg"
                  >
                    <div className="animate-pulse h-7 bg-zinc-800 rounded w-5/6 mt-2"></div>
                    <div className="animate-pulse w-4/6 h-7 bg-zinc-800 rounded mt-2"></div>
                    <div className="animate-pulse w-1/4 h-4 bg-zinc-800 rounded mt-2"></div>
                  </div>
                ))}
              </div>
            }
          >
            {/* @ts-ignore */}
            <RelatedBlogs
              currentBlog={blog?.slug.current || ""}
              category={blog?.category || ""}
            />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
