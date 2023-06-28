import React from "react";

export default function loading() {
  return (
    <>
      <header className="w-full max-w-3xl px-4 mx-auto mt-2 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="bg-gradient-to-r from-blue-600/20 to-yellow-600/20 h-[25em] w-full absolute md:top-16 top-[3.3em] left-0 flex">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t dark:from-black from-white"></div>
        </div>
      </header>

      <main className="z-10 relative mt-10">
        <div className="flex items-center w-max mt-10 transition-all gap-2">
          <div className="animate-pulse w-32 h-10 bg-zinc-900 rounded"></div>
        </div>

        <div className="flex gap-2 pt-10 md:gap-3">
          <div className="animate-pulse px-3 h-6 rounded-full bg-zinc-900 w-20"></div>
          <div className="animate-pulse w-20 h-6 bg-zinc-900 rounded"></div>
        </div>

        <div className="animate-pulse  max-w-[15em] mt-5 h-16 rounded">
          <div className="bg-zinc-900 h-10 sm:w-3/4 rounded-lg"></div>
          <div className="bg-zinc-900 h-10 mt-3 w-2/4 rounded-lg"></div>
          <div className="bg-zinc-900 h-10 mt-3 w-1/4 rounded-lg"></div>
        </div>

        <div className="gap-6 mt-32 grid lg:grid-cols-[1fr_16em] grid-cols-1 ">
          <div className="con-1-1 flex-1 lg:border-r lg:pr-10 border-zinc-800 flex flex-col">
            <div className="img h-[20em] relative animate-pulse bg-zinc-900 rounded-lg"></div>

            <div className="animate-pulse  max-w-[15em] mt-5 h-16 rounded">
              <div className="bg-zinc-900 h-10 sm:w-3/4 rounded-lg"></div>
              <div className="bg-zinc-900 h-10 mt-3 w-2/4 rounded-lg"></div>
              <div className="bg-zinc-900 h-10 mt-3 w-1/4 rounded-lg"></div>
            </div>
          </div>
          <div className="con-2-2 md:w-[16em] md:flex hidden flex-col gap-3 md:border-none border-t border-zinc-800 md:py-0 py-10 transition-all">
            <div className="animate-pulse h-8 bg-zinc-900 rounded"></div>
            <div className="flex flex-col gap-2 mt-3 p-3 rounded bg-zinc-900">
              <div className="animate-pulse h-7 bg-zinc-800 rounded w-5/6 mt-2"></div>
              <div className="animate-pulse w-4/6 h-7 bg-zinc-800 rounded mt-2"></div>
              <div className="animate-pulse w-1/4 h-4 bg-zinc-800 rounded mt-2"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
