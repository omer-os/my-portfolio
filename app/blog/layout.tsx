import BlogsLeft from "@/components/pages/blogs/BlogsLeft";
import { getAllBlogCategories } from "@/lib/functions/sanityFunctions";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Blog | Omar Chatin",
  description:
    "Coding insights, project highlights, and tech stories - a blog space by Omar Chatin to share and learn about the world of web development.",
  openGraph: {
    locale: "en_US",
    images: ["/images/metadata.jpg"],
    title: "Omar Chatin",
    description: "",
    url: "https://omarchatin.com",
    type: "website",
  },
  generator: "NextJS",
  applicationName: "portfolio website",
  keywords: [
    "web developer",
    "frontend developer",
    "dental technician",
    "musician",
  ],
  authors: {
    name: "Omar Chatin",
    url: "https://www.instagram.com/omar.chatin/",
  },
  colorScheme: "dark",
  creator: "Omar Chatin",
  publisher: "Omar Chatin",
};

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const allCategories = await getAllBlogCategories();

  return (
    <div className="flex max-w-5xl mx-auto">
      <BlogsLeft allCategories={allCategories} />

      <div className="py-4 px-6 w-full md:pt-6 pt-16">{children}</div>
    </div>
  );
}
