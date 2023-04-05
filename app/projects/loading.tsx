import React from "react";

export default function loading() {
  return (
    <div>
      <div className="max-w-4xl px-8 mx-auto mt-10 mb-16">
        <h1 className="mb-8 text-2xl font-bold md:text-3xl">
          Some of My Projects
        </h1>

        <>
          <div className="flex flex-col gap-6 mt-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                className="w-full rounded-xl bg-zinc-900 animate-pulse md:h-[15.75em] flex md:flex-row flex-col p-2"
                key={i}
              >
                <div className="min-h-[15em] md:w-[19.125em] relative rounded-xl bg-zinc-800"></div>
                <div className="flex flex-col justify-between my-3 ml-2">
                  <div className="flex flex-col gap-2">
                    <div className="md:w-[23em] w-5/6 h-10 bg-zinc-800 rounded-xl"></div>
                    <div className="md:w-[20em] w-4/6 h-10 bg-zinc-800 rounded-xl"></div>

                    <div className="flex gap-4">
                      <div className="w-1/6 md:w-24 rounded-xl h-7 bg-zinc-800"></div>
                      <div className="w-1/6 md:w-24 rounded-xl h-7 bg-zinc-800"></div>
                    </div>
                  </div>

                  <div className="flex gap-4 md:mt-0 mt-7">
                    <div className="w-24 rounded-xl h-7 bg-zinc-800"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      </div>
    </div>
  );
}
