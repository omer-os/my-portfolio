import React from "react";

export default function loading() {
  return (
    <div className="max-w-5xl px-6 mx-auto my-10">
      <div className=" text-3xl font-bold">My Gallery</div>
      <div className="text-zinc-400">
        collection of my favorite photos and memories. Here you'll find a
        variety of images
      </div>
      <div className="grid mt-10 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((index: number) => (
          <div
            key={index}
            className={`relative pb-2/3 h-[25em] bg-zinc-800 animate-pulse rounded-xl
            `}
          ></div>
        ))}
      </div>
    </div>
  );
}
