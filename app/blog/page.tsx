import AllBlogs from "@/components/projects/AllBlogs";
import React from "react";

export default function page() {
  const categories = [
    "nextjs",
    "tailwindcss",
    "dental",
    "javascript",
    "design",
    "programming",
    "python",
  ];

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
    <div className="xl:max-w-6xl md:max-w-4xl px-8 transition-all w-full mt-10 mx-auto">
      <div className="text-3xl font-extrabold">Lastest Articles</div>

      <div className="relative mt-1 ">
        <div className="flex gap-4 p-2 text-sm capitalize  snap-mandatory snap-x overflow-x-scroll">
          {categories.map((i, index) => (
            <div
              key={i + index}
              className="bg-zinc-900 py-1 px-3 rounded snap-start"
            >
              {i}
            </div>
          ))}
        </div>
      </div>

      <AllBlogs />
    </div>
  );
}
