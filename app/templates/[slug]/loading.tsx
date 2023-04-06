export default async function loading() {
  return (
    <div className="flex flex-col min-h-screen gap-10 pb-10 md:flex-row md:pb-0">
      {/* LEFT SIDE STARTS HERE */}
      <div className="flex w-full md:sticky top-20 h-max left-0 flex-col py-6 md:max-w-[20em]">
        <div className="relative md:hidden h-[25em] w-full border border-zinc-800 rounded-xl">
          <div className="bg-zinc-800 animate-pulse w-full h-full rounded-xl" />
        </div>

        <div className="mt-8 h-6 rounded w-2/5 bg-zinc-800 animate-pulse md:mt-0" />

        <div className="mt-4 h-[3em] bg-zinc-800 animate-pulse rounded w-5/6" />

        <div className="mt-3 h-[1em] w-2/6 bg-zinc-800 animate-pulse rounded" />

        <div className="flex flex-col">
          <div className="flex flex-col mt-10 divide-y text-zinc-400 divide-zinc-800">
            <div className="flex items-center justify-between py-2">
              <span className="bg-zinc-800 animate-pulse rounded h-6 w-12"></span>
              <span className="bg-zinc-800 animate-pulse rounded h-6 w-14"></span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="bg-zinc-800 animate-pulse rounded h-6 w-10"></span>
              <span className="bg-zinc-800 animate-pulse rounded h-6 w-12"></span>
            </div>
          </div>
          <div className="flex flex-1 gap-3 mt-6 ">
            <div className="bg-zinc-800 animate-pulse h-10 flex-1 rounded" />
            <div className="bg-zinc-800 animate-pulse h-10 flex-1 rounded" />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE STARTS HERE */}
      <div className="flex-1 md:p-10 md:border-l border-zinc-800">
        <div className="img md:flex hidden h-[25em] w-full rounded-xl bg-zinc-800 animate-pulse" />

        <div className="mt-6 h-11 w-[10em] text-4xl font-bold rounded bg-zinc-800 animate-pulse" />
        <div className="mt-4 flex flex-col gap-2">
          <div className="w-6/6 h-6 rounded bg-zinc-800 animate-pulse" />
          <div className="w-5/6 h-6 rounded bg-zinc-800 animate-pulse" />
          <div className="w-4/6 h-6 rounded bg-zinc-800 animate-pulse" />
          <div className="w-2/6 h-6 rounded bg-zinc-800 animate-pulse" />
        </div>

        <div className="grid gap-4 mt-10 md:grid-cols-2">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="relative h-[20em] bg-zinc-800 animate-pulse rounded-xl"
            />
          ))}

          <div className="flex-1 bg-zinc-800 animate-pulse h-11 rounded md:col-span-2 mt-6" />
        </div>
      </div>
    </div>
  );
}
