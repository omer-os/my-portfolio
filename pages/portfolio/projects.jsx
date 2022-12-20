import React, { useEffect, useState } from "react";
import { Layout } from "../../src/portfolio/Files";
import { GetMyProjects } from "../../services/data";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects({ projects }) {
  const [SelectedTab, setSelectedTab] = useState("all");
  const [AllProjects, setAllProjects] = useState([]);
  const [ShownProjects, setShownProjects] = useState([]);

  useEffect(() => {
    setAllProjects(projects.myProjects);
    setShownProjects(AllProjects);
  }, []);

  useEffect(() => {
    switch (SelectedTab) {
      case "all":
        setShownProjects(AllProjects);
        break;
      default:
        const filtered = AllProjects.filter((project) => {
          return project.tags.includes(SelectedTab);
        });
        setShownProjects(filtered);
        break;
    }
  }, [SelectedTab]);

  return (
    <Layout>
      <div className="mt-24 md:mx-auto md:w-5/6 mx-7 ">
        <div className="flex sm:flex-row flex-col sm:gap-1 gap-3 mb-6 justify-between">
          <button className="left bg-zinc-200 py-1 px-2  rounded border border-zinc-400 sm:flex hidden items-center gap-1">
            <div className="text-zinc-600">Popular</div>
            <svg
              className="w-8 h-8 fill-zinc-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {["all", "nextjs", "design", "html&css"].map((item, index) => (
              <button
                key={index + "-" + item}
                className={`text-zinc-400 transition-all duration-300 px-2 rounded py-1 rounded ${
                  SelectedTab === item ? "text-zinc-800 font-bold" : ""
                }`}
                onClick={() => setSelectedTab(item)}
              >
                {item}

                {SelectedTab === item ? (
                  <motion.div layoutId="underline">
                    <div className="w-full mt-1 bg-blue-600 h-1"></div>
                  </motion.div>
                ) : (
                  ""
                )}
              </button>
            ))}
          </div>

          <button className="left bg-zinc-200 py-1 px-2  rounded border border-zinc-400 flex items-center gap-1">
            <div className="text-zinc-600">Filters</div>
          </button>
        </div>

        <div className="mt-1" />

        <div className="gap-3 grid auto-rows-max transition-all md:grid-cols-3 sm:grid-cols-2 ">
          <AnimatePresence>
            {ShownProjects.map((project, index) => (
              <motion.div
                layout
                key={project.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                }}
                className="h-full bg-white shadow-xl "
              >
                <div className="justify-between gap-2  flex flex-col">
                  <img
                    src={project.img.url}
                    className="h-[10em] object-cover"
                    alt={"image: " + project.name}
                  />
                  <div className="flex flex-col p-4">
                    <div className="title font-bold line-clamp-1">
                      {project.name}
                    </div>
                    <div className="subtitle text-sm">{project.subtitle}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const projects = await GetMyProjects();
  return {
    props: {
      projects,
    },
    // revalidate: 10,
  };
};
