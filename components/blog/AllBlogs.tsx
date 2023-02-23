"use client";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

export default function AllBlogs() {
  const blogs = [
    {
      title: "Using GitHub as a CMS",
      description:
        "Since re-launching my website with an all new redesign I added a number of cool features. One such feature I thought worth sharing about was my projects page as",
      date: "july 12, 2023",
      categories: ["nextjs", "tailwindcss"],
      slug: "Usinssgs-GitHub-as-a-CMS",
    },
    {
      title: "Using GitHub as a CMS",
      description:
        "Since re-launching my website with an all new redesign I added a number of cool features. One such feature I thought worth sharing about was my projects page as",
      date: "july 12, 2023",
      categories: ["nextjs", "tailwindcss"],
      slug: "Ussing-GitHsubs-as-a-CMS",
    },
    {
      title: "Using GitHub as a CMS",
      description:
        "Since re-launching my website with an all new redesign I added a number of cool features. One such feature I thought worth sharing about was my projects page as",
      date: "july 12, 2023",
      categories: ["nextjs", "tailwindcss"],
      slug: "Using-GitHub-as-a-CsMsS",
    },
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
    <motion.div className="my-5 gap-x-4 gap-y-10 grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1">
      {blogs.map((blog, index) => (
        <BlogCard blog={blog} key={blog.slug} />
      ))}
    </motion.div>
  );
}
