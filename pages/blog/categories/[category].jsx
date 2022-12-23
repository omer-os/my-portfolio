import { client } from "../../../services/data2";
import BlogCard from "../../../components/blog/blogCard";

export default function Index({ blogs }) {
  return (
    <>
      <div className="sm:mt-[8em] mt-[8em] lg:mx-[10em] mx-6 sm:mx-[3em]">
        <div className="sm:text-3xl text-2xl capitalize font-bold">
          Welcome to my blog
        </div>

        {blogs && (
          <div className="grid sm:mt-10 mt-4 gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
            {blogs.map((blog) => (
              <BlogCard blog={blog} key={blog.slug.current} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const slugs = await client.fetch(`
    *[_type == 'category'] {
      slug 
    }
  `);

  const paths = slugs.map((slug) => ({
    params: { category: slug.slug.current },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const category = params.category;

  const response = await client.fetch(
    `*[_type == "blog" && "${category}" in categories[]->slug.current]{
      title,
      mainImage {
        asset->{
          url
        }
      },
      publishedAt,
      slug,
      categories[]->{
        title,
        slug
      }
    }  `
  );
  return {
    props: { blogs: response },
  };
};
