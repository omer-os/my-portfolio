import React from "react";

export default function Instagrambio() {
  return (
    <div className="bg-gray-300 gap-2 items-center flex flex-col h-screen p-5">
      <div className="img relative w-40 h-40 rounded-full ">
        <img
          src="https://avatars.githubusercontent.com/u/66512898?s=96&v=4"
          alt=""
          className="absolute h-full rounded-full w-full object-cover"
        />
      </div>
      <h1 className="font-bold text-3xl">
        omar chatin
      </h1>

      <div className="rounded-full font-bold capitalize border-4 cursor-pointer border-blue-600 p-3 bg-blue-300 w-4/6">
        instagram
      </div>
    </div>
  );
}
