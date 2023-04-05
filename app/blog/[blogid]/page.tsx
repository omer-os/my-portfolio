import ProgressBar from "@/components/coms/ReactProgressBr";
import { Blog } from "@/components/interfaces/blog";
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
    <div className="max-w-3xl px-4 mx-auto mt-2 sm:px-6 xl:max-w-5xl xl:px-0">
      <ProgressBar />

      <BlogMain blog={blog} />
    </div>
  );
}
