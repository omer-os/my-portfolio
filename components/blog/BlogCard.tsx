export default function BlogCard() {
  return (
    <div className="flex flex-1 min-w-[15em] flex-col  rounded-xl">
      <div className="h-[15em] rounded-xl bg-zinc-900"></div>
      <div className="font-bold capitalize text-lg mt-2">
        has been the flask
      </div>

      <div className="flex items-center gap-2 ">
        <p className="text-zinc-400 capitalize">august 13th, 2022</p>
        <div className="h-1 w-1 rounded-full bg-zinc-400"></div>
        <p className="text-zinc-400 capitalize text-sm">4 min read</p>
      </div>
    </div>
  );
}
