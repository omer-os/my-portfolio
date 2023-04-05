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
            className="object-cover rounded-2xl "
            // placeholder="blur"
            // blurDataURL="/image-placeholder.jpg"
          />
        </div>
        <div className="px-3">
          <div className="mt-3 text-xs text-zinc-300">
            {formatDate(blog.publishedAt)}
          </div>
          <div className="mt-1 text-xl font-bold capitalize">{blog.title}</div>

          <div className="text-sm text-zinc-400 line-clamp-2">
            {blog.subtitle}
          </div>
        </div>
      </Link>
    </LayoutAnimationWrapper>
  );
}
