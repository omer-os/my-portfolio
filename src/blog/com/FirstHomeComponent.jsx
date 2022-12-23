import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function FirstHomeComponent({ topBlogs }) {
  return (
    <div className="flex flex-col mt-[8em]">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">Lastest Blogs</div>

        <Link
          href="/blog"
          className="transform rounded-md border  px-5 py-2 font-medium text-zinc-400  border-zinc-500 transition-colors hover:bg-zinc-800"
        >
          see all
        </Link>
      </div>

      <div className="flex md:flex-row flex-col mt-1 md:h-[29em] py-5 sm:h-[60em] h-[70em] gap-5">
        {topBlogs.map((blog, index) => {
          return (
            <CardBox
              key={index}
              item={{
                title: blog.title,
                date: blog.publishedAt,
                categories: blog.categories,
                img: blog.mainImage.asset.url,
                slug: blog.slug.current,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export const CardBox = ({ item }) => {
  const cardVariants = {
    rest: {
      rotateX: 0,
      skewX: 0,
      boxShadow: 0,
      scale: 1,
    },
    hover: {
      rotateX: [0, 10, 0],
      skewX: [0, -1, 0],
      boxShadow: [
        "0 0 0 rgba(39, 39, 42, 0.4)",
        "0 0 10px rgba(39, 39, 42, 0.4)",
      ],
      scale: [1, 1.04],

      transition: {
        duration: 0.3,
      },
    },
  };

  const textVariants = {
    rest: {
      scale: 1,
    },
    hover: {
      scale: 1.04,
      textShadow: ["0 0 0 gray", "0 0 25px black"],

      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <Link className="w-full h-full" href={"/blog/" + item.slug}>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="w-full shadow-[0_0_6px_6px_27272A] rounded-xl relative card-outer h-full"
      >
        <motion.div
          variants={cardVariants}
          transition={{
            duration: 0.4,
          }}
          className="left w-full h-full group card  cursor-pointer overflow-hidden rounded-xl relative hover:shadow-xl"
        >
          <Image
            placeholder="blur"
            blurDataURL="/images/blur.webp"
            fill
            src={item.img}
            alt={"image " + item.title + " category-" + item.category}
            className="object-cover z-10 rounded-xl absolute top-0 left-0 w-full h-full "
            priority
          />

          <div className="bottom-blog absolute bottom-0 left-0 p-6 right-0 text-white z-20 flex flex-col">
            <motion.div
              variants={textVariants}
              className="funcs items-center flex gap-2"
            >
              {item.categories.map((i, index) => (
                <div
                  key={index}
                  className="text-black py-1 px-3 bg-white/50 rounded-md text-xs"
                >
                  {i.title}
                </div>
              ))}
            </motion.div>
            <motion.div
              variants={textVariants}
              className="title sm:text-2xl text-xl font-bold"
            >
              {item.title}{" "}
              <div className="text-sm font-light text-zinc-300">
                {item.date}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};
