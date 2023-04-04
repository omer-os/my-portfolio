import { BsCalendarDate } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { FiClock, FiChevronLeft } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import ProgressBar from "@/components/coms/ReactProgressBr";
import { Blog } from "@/components/interfaces/blog";
import { PortableText } from "@portabletext/react";
import { GetAllBlogs, GetThisBlog } from "@/pages/api/blog";
import BlogMain from "@/components/blog/BlogMain";

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
  const res = await GetThisBlog(blogid);
  const blog: Blog = res[0];

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-2">
      <ProgressBar />

      <BlogMain blog={blog} />
    </div>
  );
}
