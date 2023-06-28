import React from "react";

export default function loading() {
  return (
    <div className="min-h-screen w-full">
      <div className="grid sm:grid-cols-2 mt-4 gap-5">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-zinc-800 h-52 w-full rounded-lg"></div>
            <div className="bg-zinc-800 h-4 w-2/3 mt-2 rounded-lg"></div>
            <div className="bg-zinc-800 h-4 w-2/4 mt-2 rounded-lg"></div>
            <div className="bg-zinc-800 h-4 w-1/6 mt-2 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
