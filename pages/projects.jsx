import Image from "next/image";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import proj1 from "../public/images/proj1.png";
export default function projects() {

  const projects = [
    {
      title: "2Day News",
      description: "2day news with React, data is fetched from open source newsapi.",
      image: proj1,
      demoLink: "https://2daynews.netlify.app/",
      sourceCodeLink: "https://github.com/omer-os/news-app-with-react",
      tags: ["react.js", "material-ui", "news-api", "styled-components"],
    },

    {
      title: "Treesaapp",
      description: "Create a legacy for a loved one by planting trees to restore forests.limate change. Your tribute will safeguard biodiversity and fight c. Effective Conservation. Restore Earth's Balance.",
      image: proj1,
      demoLink: "https://omer-os.github.io/treesa/",
      sourceCodeLink: "https://github.com/omer-os/treesa",
      tags: ["javascript", "css grid"],
    },
  ]


  return (
    <div className="flex pt-[130px] flex-col">
      <div className="text-2xl text-white text-center font-bold">My Work</div>
      <div className="text-xl text-center text-white mx-auto my-3 sm:w-4/6 lg:w-3/6 px-5">
        I own several large and small projects that I worked on during my career
        in this field. My projects are distinguished by their beautiful design,
        in addition to their simple and distinctive code
      </div>
      <div className="mx-auto w-20 h-2 bg-blue-600 rounded-full"></div>

      <div className="flex justify-between mt-5  items-center px-8 w-full">
        <div className="text-xl font-bold text-white sm:text-left text-center ">
          UX/UI Desgins
        </div>
        <button className="flex h-max py-2 gap-2	px-4 rounded bg-blue-600 items-center">
          <svg
            class="h-6 w-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>

          <div className="text-white font-bold">Filter</div>
        </button>
      </div>

      <div
        className="grid gap-8 p-8 xl:grid-cols-4 
      md:grid-cols-3 sm:grid-cols-2 grid-cols-1 "
      >
        {projects.map((project) => (
        <ProjectCard 
        img={project.image}
        title={project.title}
        desc={project.description}
        tags={project.tags}
        btn1Link={project.demoLink}
        btn2Link={project.sourceCodeLink}
        />
        ))}
      </div>
    </div>
  );
}



