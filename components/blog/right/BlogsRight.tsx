import { Blog } from "@/lib/interfaces/interfaces";

export default async function BlogsRight({ data }: { data: Blog[] }) {
  return (
    <div className="flex-1 min-h-full px-6 md:border-l dark:border-zinc-800 border-zinc-300 md:ml-5 md:pl-14 md:px-0 py-7">
      <div className="pb-3 text-3xl font-bold border-b border-zinc-800">
        All Blogs
      </div>
      <div className="mt-6 capitalize dark:text-zinc-300">
        see all the blogs that I have written
      </div>

      <div className="flex flex-col gap-4 mt-5">
        {/* {data.map((blog, index: number) => (
          <Card key={index} data={blog} />
        ))} */}
      </div>
    </div>
  );
}
