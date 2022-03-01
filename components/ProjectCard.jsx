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
<>      <div className="text-white">
        <div className="crd-img">
          <Image layout="responsive" src={img} />
        </div>

        <div className="text-lg font-bold capitalize">{title}</div>
        <div className="card-desc text-ellipsis overflow-hidden">{desc}</div>
        <div className="card-tags my-2 gap-1 flex-wrap flex">
          {tags.map((tag, index) => (
            <div
              className="bg-blue-600/[.3] px-3 py-1 border-2 border-blue-600 text-xs rounded-full"
              key={index}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="card-btns grid grid-cols-2 gap-2">
          <button className="btn-card bg-blue-600 p-2 rounded active:scale-[.9] transition">
            <a href={btn1Link}>Demo</a>
          </button>
          <button className="btn-card bg-blue-600 p-2 rounded active:scale-[.9] transition">
            <a href={btn2Link}>Source Code</a>
          </button>
        </div>
      </div></>
  );
}
