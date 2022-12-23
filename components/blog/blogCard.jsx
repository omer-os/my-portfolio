import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard({ blog }) {
  return (
    <article className={`cursor-pointer relative group`}>
      <Link
        href={`/blog/${blog.slug.current}`}
        className="absolute z-10 inset-0"
      ></Link>
      <div className="overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105 relative h-[14em]">
        <Image
          fill
          src={blog.mainImage.asset.url}
          className="w-full h-full rounded-lg object-cover"
          alt=""
        />
      </div>
      <div className="flex gap-3">
        {blog.categories.map((category, index) => (
          <Link key={index} href={`/blog/categories/${category.slug.current}`}>
            <span className="inline-block z-20 relative border py-1 px-2 bg-zinc-900 text-xs rounded font-medium tracking-wider border-zinc-900 uppercase mt-4 text-zinc-500 hover:bg-zinc-800 hover:scale-110 transition-all">
              {category.title}
            </span>
          </Link>
        ))}
      </div>
      <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
        <div>
          <span className="bg-gradient-to-r from-blue-600 to-blue-400  bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
            {blog.title}{" "}
          </span>
        </div>
      </h2>
      <div className="text-zinc-400 mt-1 text sm">
        {new Date(blog.publishedAt).toDateString()}
      </div>
    </article>
  );
}
