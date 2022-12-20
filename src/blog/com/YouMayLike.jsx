import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function YouMayLike({ youMayLike }) {
  return (
    <div className="my-5">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">You May Like</div>
        <Link href="/blog/blogs?category=all">
          <a className="px-4 rounded py-2 border border-gray-400 text-gray-500">
            See More
          </a>
        </Link>
      </div>
      <div className="grid mt-3 auto-rows-auto md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {youMayLike.blogs.map((blog, index) => {
          return <SmallCard key={index} blog={blog} />;
        })}
      </div>
    </div>
  );
}

export const SmallCard = ({ blog }) => {
  const cardVariants = {
    rest: {
      rotateX: 0,
      boxShadow: 0,
      scale: 1,
    },
    hover: {
      rotateX: [0, 10, 0],
      boxShadow: ["0 0 0 gray", "0 0 10px gray"],
      scale: [1, 1.04],

      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div className="flex flex-col gap-2">
      <Link href={`/blog/${blog.slug}`}>
        <a>
          <motion.div
            initial="rest"
            whileHover="hover"
            variants={cardVariants}
            className="img h-[10em] md:h-[14em] rounded-xl relative overflow-hidden"
          >
            <Image
              src={blog.thumbnail.url}
              placeholder="blur"
              blurDataURL="/images/blur.webp"
              layout="fill"
              className="w-full h-full object-cover"
              alt={blog.title}
            />
          </motion.div>
          <div className="title mt-2 hover:underline line-clamp-2 font-bold hover:underline">
            {blog.title}
          </div>
        </a>
      </Link>
      <div className="flex gap-2 items-center">
        <Link href={`/blog/blogs?category=${blog.category.replace(" ", "-")}`}>
          <a className="text-xs hover:bg-gray-300 transition-all duration-200 bg-gray-200 text-black py-1 px-3 bg-white rounded-md">
            {blog.category}
          </a>
        </Link>
        <div className="date text-sm text-gray-500">{blog.date}</div>
      </div>
    </motion.div>
  );
};
