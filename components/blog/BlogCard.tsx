import Image from "next/image";
import Link from "next/link";
import LayoutAnimationWrapper from "../coms/LayoutAnimationWrapper";

type BlogProps = {
  blog: {
    title: string;
    description: string;
    date: string;
    categories: string[];
    slug: string;
  };
};

export default function BlogCard({ blog }: BlogProps) {
  return (
    <LayoutAnimationWrapper>
      <Link href={`/bogs/${blog.slug}`} className="flex flex-col rounded-xl">
        <div className="h-[13em] rounded-xl relative bg-zinc-900 w-full">
          <Image
            src="/bluredImage.jpg"
            fill
            alt="image"
            className="rounded-2xl object-cover "
          />
        </div>
        <div className="px-3">
          <div className="text-xs text-zinc-300 mt-3">{blog.date}</div>
          <div className="font-bold capitalize text-xl mt-1">{blog.title}</div>

          <div className="text-zinc-400 text-sm line-clamp-2">
            {blog.description}
          </div>
        </div>
      </Link>
    </LayoutAnimationWrapper>
  );
}
