import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function YouMayLike({ youMayLike }) {
  return (
    <div className="my-5">
      <div className="grid mt-3 auto-rows-auto md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {youMayLike.map((blog, index) => {
          return (
            <SmallCard
              key={index}
              blog={{
                title: "blog.title",
                date: "blog.date",
                category: "blog.category",
                img: "https://images.unsplash.com/photo-1671663606281-44682198255a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                slug: "blog.slug",
                categories: ["1", "2", "3"],
              }}
            />
          );
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
      textShadow: ["0 0 0 gray", "0 0 25px black"],
      scale: [1, 1.04],

      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div className="flex flex-col gap-2">
      <Link href={`/blog/${blog.slug}`}>
        <motion.div
          initial="rest"
          whileHover="hover"
          variants={cardVariants}
          className="img h-[15em] rounded-xl relative overflow-hidden"
        >
          <Image
            src={blog.img}
            placeholder="blur"
            blurDataURL="/images/blur.webp"
            layout="fill"
            className="w-full h-full object-cover"
            alt={blog.title}
          />
        </motion.div>
        <div className="title mt-2 hover:underline line-clamp-2 font-bold ">
          {blog.title}
        </div>
      </Link>
      <div className="flex gap-2 items-center">
        {blog.categories.map((i, index) => (
          <Link
            key={blog.title}
            href={`/blog/blogs?category=${i.replace(" ", "-")}`}
            className="text-xs hover:bg-zinc-800 transition-all duration-200 text-zinc-300 py-1 px-3 bg-zinc-700 rounded-md"
          >
            {i}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};
