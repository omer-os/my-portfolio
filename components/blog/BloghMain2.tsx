import { GetAllBlogs } from "@/pages/api/blog";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import BlogsLeftSide from "./left/BlogsLeftSide";
type PageProps = {
  searchParams: {
    category: string;
  };
};

export default async function BloghMain2({ searchParams }: PageProps) {
  const data: {
    slug: {
      current: string;
    };
  }[] = await GetAllBlogs();

  return (
    <div className="">
      <div>
        <div className="flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          sed reprehenderit. Nisi dolor, culpa molestiae magni commodi impedit
          provident fuga ab, aut exercitationem, laboriosam maiores? Harum
          tenetur non minus at.
        </div>
      </div>
    </div>
  );
}
