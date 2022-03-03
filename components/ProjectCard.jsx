import Image from "next/image";
import React from "react";

export default function ProjectCard({
  img,
  title,
  desc,
  tags,
  btn1Link,
  btn2Link,
}) {
  return (
    <>
      <div className="card space-y-2 text-white">
        <div className="card-img">
          <Image src={img} alt="project 1" layout="responsive" />
        </div>
        <div className="card-title text-xl font-bold">{title}</div>
        <div className="card-desc ">{desc}</div>
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <div
              className="bg-blue-600/10 text-xs border-2 border-blue-600 px-4 py-1 rounded-full"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="pt-4 grid gap-2 grid-cols-2">
          <button className="text-white rounded capitalize bg-blue-600 p-2">
            <a href={btn1Link}>Demo</a>
          </button>
          <button className="text-white rounded capitalize bg-blue-600 p-2">
            <a href={btn2Link}>Source Code</a>
          </button>
        </div>
      </div>
    </>
  );
}
