import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Layout } from "../../../src/blog/Files";
import { AnimatePresence, motion } from "framer-motion";
import { getBlogs } from "../../../services/data";
import { useEffect, useState } from "react";

export default function Index({ blogs }) {
  const router = useRouter();
  const { category } = router.query;
  const [Blogs, setBlogs] = useState([]);
  const [FilteredData, setFilteredData] = useState([]);
  const [Search, setSearch] = useState("");
  let categories = blogs.blogs.map((blog) => blog.category.toLowerCase());
  categories = [...new Set(categories)];

  useEffect(() => {
    setBlogs(blogs.blogs);
    setFilteredData(blogs.blogs);
  }, []);

  useEffect(() => {
    if (category === "all") {
      setFilteredData(Blogs);
    } else {
      const filtered = Blogs.filter((blog) => {
        return blog.category.includes(category);
      });
      setFilteredData(filtered);
    }
  }, [category]);

  useEffect(() => {
    if (Search !== "") {
      const filtered = Blogs.filter((blog) => {
        return blog.title.toLowerCase().includes(Search.toLowerCase());
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(Blogs);
    }
  }, [Search]);

  return (
    <Layout>
      <div className="search-input sm:mx-auto mx-10 mt-[6em] sm:w-2/6 flex gap-2 mb-2">
        <input
          className="w-full h-full p-2 rounded-lg bg-gray-200"
          type="text"
          placeholder="Search blogs"
          onChange={(e) => setSearch(e.target.value)}
          value={Search}
        />
      </div>

      <div className="scroll-bar-none snap-x flex-nowrap flex gap-5 gap-3 max-w-[40em] overflow-x-scroll sm:justify-center  sm:mx-auto mx-10 py-2 px-2 ">
        <Category category={category} name="all categories" cat="all" />

        {categories.map((cat, index) => {
          return (
            <Category key={index} category={category} name={cat} cat={cat} />
          );
        })}
      </div>

      <div className="sm:mx-10 mx-5 grid my-5 auto-rows-auto md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        <AnimatePresence>
          {FilteredData.map((blog, index) => {
            return <SmallCard key={blog.title} blog={blog} />;
          })}
        </AnimatePresence>
      </div>
    </Layout>
  );
}

export const Category = ({ name, cat, category }) => {
  return (
    <Link href={"/blog/blogs?category=" + cat}>
      <a className="flex min-w-max items-center gap-4">
        <div
          className={`text-sm flex flex-col scale-1 capitalize text-gray-500 transition-all duration-300 ${
            category === cat ? "font-bold scale-[1.09] text-black" : ""
          }`}
        >
          {name}

          <div
            className={`bg-blue-600 transition-all duration-300 h-1 rounded-full ${
              category === cat ? "w-full" : "w-0"
            }`}
          />
        </div>
      </a>
    </Link>
  );
};

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
    <motion.div
      layout
      animate={{ scale: [0.9, 1], opacity: [0, 1] }}
      exit={{
        opacity: 0,
      }}
      className="flex flex-col gap-2"
    >
      <Link href={`/blog/${blog.slug}`}>
        <a>
          <motion.div
            initial="rest"
            whileHover="hover"
            variants={cardVariants}
            className="img h-[13em] md:h-[14em] rounded-xl relative overflow-hidden"
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

// getting all blogs
export async function getStaticProps() {
  const blogs = await getBlogs();
  return {
    props: {
      blogs,
    },
    revalidate: 60,
  };
}
