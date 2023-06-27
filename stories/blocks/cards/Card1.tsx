import React from "react";

export default function Card1() {
  return (
    <div className="flex flex-col p-3 rounded shadow-lg">
      <div className="w-full h-26">
        <img
          src="https://coreui.io/images/blog/next-js.webp"
          className="rounded-lg h-full w-full object-cover"
          alt=""
        />
      </div>

      <div className="mt-3 font-bold text-3xl capitalize">Milk Shake</div>
      <div className="text-zinc-400 text-sm font-light">
        Lorem, ipsum dolor.
      </div>
    </div>
  );
}
