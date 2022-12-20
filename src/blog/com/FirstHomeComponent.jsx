import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FirstHomeComponent({ topBlogs }) {
  return (
    <div className="flex flex-col mt-[5em]">
      <div className="text-2xl font-bold">Most Popular</div>

      <div className="flex md:flex-row flex-col mt-1 md:h-[29em] py-5 h-[40em] gap-5">
        {topBlogs.blogs.map((blog, index) => {
          return (
            <CardBox
              key={index}
              item={{
                title: blog.title,
                date: blog.date,
                category: blog.category,
                img: blog.thumbnail.url,
                slug: blog.slug,
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
      boxShadow: ["0 0 0 gray", "0 0 10px gray"],
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
    <Link href={"/blog/" + item.slug}>
      <a className="w-full h-full">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="w-full card-outer h-full"
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
              layout="fill"
              src={item.img}
              alt={"image " + item.title + " category-" + item.category}
              className="object-cover z-10 rounded-xl absolute top-0 left-0 w-full h-full"
              priority
            />

            <div className="bottom-blog absolute bottom-0 left-0 p-6 right-0 text-white z-20 flex flex-col">
              <motion.div
                variants={textVariants}
                className="funcs items-center flex gap-2"
              >
                <div className="text-black py-1 px-3 bg-white rounded-md text-xs">
                  {item.category}
                </div>
                <div className="date text-sm">{item.date}</div>
              </motion.div>
              <motion.div
                variants={textVariants}
                className="title sm:text-2xl text-xl font-bold"
              >
                {item.title}{" "}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </a>
    </Link>
  );
};
