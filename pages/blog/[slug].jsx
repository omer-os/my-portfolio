import Link from "next/link";
import { client, urlFor } from "../../services/data2";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Head from "next/head";

export default function BlogDetailPage({ blog }) {
  return (
    <div className="lg:w-4/6 relative sm:w-5/6  mx-auto mt-[6em] px-6">
      <Head>
        <title>{blog.title}</title>
      </Head>

      <div className="w-full h-[50vh] relative">
        <Image
          className="rounded-xl object-cover bg-zinc-800"
          src={blog.mainImage.asset.url}
          fill
          alt={blog.title}
        />
      </div>
      <div className="date mt-2 text-xs text-blue-600">
        {new Date(blog.publishedAt).toDateString()}
      </div>
      <div className="mt-4 flex-wrap flex gap-2 ">
        {blog.categories.map((category, index) => (
          <Link
            key={category.slug.current}
            className="bg-zinc-900 rounded py-2 px-3 uppercase text-xs hover:bg-zinc-800 transition-all"
            href={`/blog/categories/${category.slug.current}`}
          >
            technology
          </Link>
        ))}
      </div>

      <h1 className="mt-3 text-3xl font-bold">{blog.title}</h1>

      <div className="Blog-Content mt-10">
        <PortableText
          value={blog.body}
          components={{
            types: {
              image: ({ value }) => (
                <div className="relative h-[18em] sm:h-[30em] transition-all">
                  <Image
                    alt={blog.title}
                    fill
                    className="rounded-xl object-cover"
                    src={urlFor(value.asset).url()}
                  />
                </div>
              ),
            },
          }}
        />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  // Fetch all the blog slugs from Sanity
  const slugs = await client.fetch(`
    *[_type == 'blog'] {
      slug 
    }
  `);

  const paths = slugs.map((slug) => ({
    params: { slug: slug.slug.current },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const response = await client.fetch(
    `*[_type=="blog" && slug.current=="${slug}"][0]{
      title,
    categories[]->{title,slug},
    mainImage {
      asset -> {
        url
      }
    },
    body,
    publishedAt,
    slug
  }`
  );

  return {
    props: {
      blog: response,
    },
  };
}
