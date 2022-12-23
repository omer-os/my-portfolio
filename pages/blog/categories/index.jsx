import Link from "next/link";
import Image from "next/image";
import { client } from "../../../services/data2";

export default function Index({ categories }) {
  return (
    <>
      <div className="sm:mt-[8em] mt-[5em] lg:mx-[10em] mx-6 sm:mx-[3em]">
        <div className="sm:text-3xl text-2xl capitalize font-bold">
          All Categories
        </div>

        {/* categories */}
        <div className="grid grid-cols-3 auto-rows-[15em] gap-5 mt-10">
          {categories.map((category) => (
            <Link
              key={category.slug.current}
              href={`/blog/categories/${category.slug.current}`}
              className="bg-zinc-900 flex items-center relative"
            >
              <Image
                src={category.coverImage.asset.url}
                fill
                className="rounded-xl brightness-75"
                alt={category.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await client.fetch(`
    *[_type=="category"]
{
  coverImage{
    asset->{
      url
      
    }
      
      },
  
  
    slug{current},
  
    title
  
}


  `);

  return {
    props: { categories: response },
    revalidate: 60,
  };
};
