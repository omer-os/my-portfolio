import React from "react";
import ProjectCard from "../components/ProjectCard";
import proj1 from "../public/images/proj1.png";
import proj2 from "../public/images/proj2.png";
import proj3 from "../public/images/proj3.png";
import proj4 from "../public/images/proj4.png";

export default function about() {
  return (
    <div>
      <div className="mt-10 px-9">
        <div className="sm:text-3xl text-center text-white font-bold capitalize">
          my work
        </div>
        <div className="sm:text-xl mt-3 md:w-4/6 mx-auto text-center text-white ">
          I own several large and small projects that I worked on during my
          career in this field. My projects are distinguished by their beautiful
          design, in addition to their simple and distinctive code
        </div>
        <div className="mx-auto my-5 w-20 h-2 bg-blue-600 rounded"></div>
      </div>

      <div className="text-xl text-center sm:text-left text-white font-bold px-6 mt-3">
        Ui/Ux Designs
      </div>

      <div className="grid  gap-6 p-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        <ProjectCard
          img={proj1}
          title="furnture app"
          desc="Sell and buy house furntures"
          tags={["lorem", "eveniet", "lorem"]}
          btn1Link="https://www.google.com"
          btn2Link="https://www.google.com"
        />
        <ProjectCard
          img={proj1}
          title="furnture app"
          desc="Sell and buy house furntures"
          tags={["lorem", "eveniet", "lorem"]}
          btn1Link="https://www.google.com"
          btn2Link="https://www.google.com"
        />
        <ProjectCard
          img={proj2}
          title="furnture app"
          desc="Sell and buy house furntures"
          tags={["lorem", "eveniet", "lorem"]}
          btn1Link="https://www.google.com"
          btn2Link="https://www.google.com"
        />
        <ProjectCard
          img={proj3}
          title="furnture app"
          desc="Sell and buy house furntures"
          tags={["lorem", "eveniet", "lorem"]}
          btn1Link="https://www.google.com"
          btn2Link="https://www.google.com"
        />
        <ProjectCard
          img={proj4}
          title="furnture app"
          desc="Sell and buy house furntures"
          tags={["lorem", "eveniet", "lorem"]}
          btn1Link="https://www.google.com"
          btn2Link="https://www.google.com"
        />
        <ProjectCard
          img={proj2}
          title="furnture app"
          desc="Sell and buy house furntures"
          tags={["lorem", "eveniet", "lorem"]}
          btn1Link="https://www.google.com"
          btn2Link="https://www.google.com"
        />
      </div>
    </div>
  );
}
