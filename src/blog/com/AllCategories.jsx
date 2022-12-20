import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AllCategories() {
  return (
    <div>
      <div
        className="categories-section flex flex-col gap-3 mx-auto 
        lg:w-8/12 mb-10
        "
      >
        <div className="text-2xl font-bold">All Categories</div>
        <div className="text-lg text-gray-500 max-w-[20em]">
          we currently have 6 categories including diffrent topics for each of
          them. select one to see/blog blogs about it.
        </div>

        <div className="grid relative categories-grid w-full mt-5 auto-rows-[15em] gap-3 sm:grid-cols-6">
          {[
            {
              name: "Technology",
              img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            },
            {
              name: "Business",
              img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            },
            {
              name: "Lifestyle",
              img: "https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bGlmZXN0eWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            },
            {
              name: "Health",
              img: "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            },
            {
              name: "Science",
              img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            },
            {
              name: "Sports",
              img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            },
          ].map((cat, index) => {
            return (
              <Link
                key={index}
                href={`/blog/blogs?categories=${cat.name.toLocaleLowerCase()}`}
              >
                <a className="card-outer cursor-pointer relative ">
                  <motion.div
                    initial={{
                      filter: "brightness(70%)",
                    }}
                    whileHover={{
                      filter: "brightness(100%)",
                      boxShadow: ["0 0 0 gray", "0 0 10px gray"],
                      scale: [1, 1.04],
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    className="w-full h-full relative rounded-xl overflow-hidden"
                  >
                    <Image
                      placeholder="blur"
                      blurDataURL="/images/blur.webp"
                      layout="fill"
                      src={cat.img}
                      alt={cat.name + " image"}
                      className="img w-full h-full object-cover absolute top-0 left-0 rounded-xl"
                    />
                    <div className="bottom-blog rounded-b-xl absolute bottom-0 w-full py-5 px-4">
                      <div className="capitalize text-white text-xl font-bold">
                        {cat.name}
                      </div>
                    </div>
                  </motion.div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
