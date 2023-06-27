import HomePage from "@/components/pages/home/HomePage";
import { getAllBlogs } from "@/lib/functions/sanityFunctions";

export default async function page() {
  const blogs = await getAllBlogs();

  return (
    <div className="flex flex-col max-w-5xl px-6 mx-auto ">
      <HomePage blogs={blogs} />
    </div>
  );
}
