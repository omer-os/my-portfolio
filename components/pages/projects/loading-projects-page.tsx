import React from "react";

export default function LoadingProjectsPage() {
  return (
    <div className="max-w-4xl px-8 mx-auto mt-10 mb-16">
      <div className="flex flex-col gap-6 mt-5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="h-[350px]  w-full rounded-lg bg-zinc-900 flex flex-col p-3"
          >
            <div className="img h-2/3 animate-pulse w-full bg-zinc-800 rounded-lg"></div>

            <div className="mt-6">
              <div className="h-10 w-1/2 bg-zinc-800 animate-pulse rounded-lg"></div>
              <div className="h-6 w-1/3 bg-zinc-800  animate-pulse rounded-lg mt-2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
