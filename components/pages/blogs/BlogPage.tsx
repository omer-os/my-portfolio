import Image from "next/image";
import React from "react";

export default function BlogPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="text-2xl font-bold border-b pb-2 w-full border-zinc-900">
        All Blogs
      </div>
      <div className="grid sm:grid-cols-2 mt-4 gap-5">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  );
}

const BlogItem = () => {
  return (
    <div className="flex flex-col p-3 rounded-lg border border-zinc-900">
      <div className="relative h-[11em]">
        <Image
          src="https://cdn.sanity.io/images/245fryc5/production/cd6559208c4243b502a3ca616eb695002eb44379-1920x930.png"
          alt=""
          fill
          className="rounded-lg object-cover w-full h-full"
        />
      </div>

      <div className="font-bold mt-4">
        Why I Love TailwindCSS: A Developer's Perspective
      </div>
      <div className="text-zinc-400 line-clamp-2 text-sm mt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ipsum
        cupiditate magnam at rem ratione corrupti quia. Vero quisquam ipsum,
        suscipit, quibusdam, id nostrum consequatur recusandae temporibus
        accusantium molestias est.
      </div>
    </div>
  );
};
