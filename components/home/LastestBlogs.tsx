import React from "react";
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
      </div>

      <Line />
    </div>
  );
}
