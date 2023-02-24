import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../coms/GlobalFunctions";
import LayoutAnimationWrapper from "../coms/LayoutAnimationWrapper";
import { Blog } from "../interfaces/blog";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <LayoutAnimationWrapper>
      <Link
        href={`/blog/${blog.slug.current}`}
        className="flex flex-col rounded-xl"
      >
        <div className="h-[13em] rounded-xl relative bg-zinc-900 w-full">
          <Image
            src={blog.coverimage.asset.url}
            fill
            alt="image"
            className="rounded-2xl object-cover "
            // placeholder="blur"
            // blurDataURL="/image-placeholder.jpg"
          />
        </div>
        <div className="px-3">
          <div className="text-xs text-zinc-300 mt-3">
            {formatDate(blog.publishedAt)}
          </div>
          <div className="font-bold capitalize text-xl mt-1">{blog.title}</div>

          <div className="text-zinc-400 text-sm line-clamp-2">
            {blog.subtitle}
          </div>
        </div>
      </Link>
    </LayoutAnimationWrapper>
  );
}
