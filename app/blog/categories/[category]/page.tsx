import AllBlogs from "@/components/blog/AllBlogs";
import { BaseUrl } from "@/components/coms/BaseUrl";
import Image from "next/image";

export default async function page({
  params,
}: {
  params: { category: string };
}) {
  const blogsRes = await fetch(`${BaseUrl}/api/blogs/${params.category}`);
  const allBlogs = await blogsRes.json();

  return (
    <div>
      <div className="h-screen -mt-[4.7em] w-full relative flex items-end justify-start p-10">
        <Image
          src="/nextjs.png"
          className="-z-10 object-cover brightness-50"
          fill
          alt="s"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <div className="flex flex-col">
          <div className="md:text-7xl transition-all text-5xl font-bold">
            NextJs
          </div>
          <div className="md:text-xl transition-all text-base text-zinc-200 capitalize">
            fulstack framework for react applications
          </div>
        </div>
      </div>

      <div className="w-full h-10 px-20 bg-zinc-900/50 border-y border-zinc-700 "></div>

      <div className="px-10 mx-auto">
        <AllBlogs allBlogs={allBlogs} />
      </div>
    </div>
  );
}
