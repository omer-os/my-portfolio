import React, { useState } from "react";
import { GetBlog, getBlogs } from "../../services/data";
import { Layout, NotFoundBlogSkeleton } from "../../src/blog/Files";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

export default function BlogId({ blog }) {
  if (!blog) {
    return <NotFoundBlogSkeleton />;
  }

  return (
    <Layout>
      <Head>
        <title>{blog.blog.title}</title>
        <meta
          name="description"
          content="see articles about technology, web development, programming, coding tips and much more..."
        />
      </Head>
      <motion.div className="lg:w-4/6 relative sm:w-5/6  mx-auto mt-20">
        <div
          className="img overflow-hidden w-full 
        sm:z-10
        z-40 
        transition-all
        h-[20em]
        sm:rounded-xl
        relative 
        sm:top-0
        -top-20 
        left-0
        right-0"
        >
          <Link href="/blog">
            <a className="z-50 absolute p-1 bg-white/40 rounded-full sm:hidden top-5 left-3 hover:scale-[1.09] transition-all duration-300 active:scale-95 backdrop-blur-sm">
              <svg
                className="w-10 h-10 fill-zinc-800"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </Link>
          <Link href="/">
            <a className="absolute text-gray-400 text-xl logo top-5 right-3 z-50 p-1 sm:hidden top-5 right-3 hover:scale-[1.09] transition-all duration-300 active:scale-95">
              omar blog
            </a>
          </Link>
          <Image
            layout="fill"
            priority
            src={blog.blog.thumbnail.url}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="Blog-Content sm:z-10 relative sm:top-0 -top-[8em] bg-white px-8 rounded-t-2xl z-50 pt-2">
          <Link href="/blog">
            <a className="sm:flex w-max hidden !text-black items-center">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div className="font-bold">BACK</div>
            </a>
          </Link>
          <div className="line w-3/6 mx-auto bg-gray-300 rounded-full h-1 sm:w-0 transition-all duration-400" />
          <div className="sm:mt-3 mt-5 flex gap-2 items-center">
            <Link href="/">
              <a className="text-xs hover:bg-gray-300 transition-all duration-200 bg-gray-200 text-black py-1 px-3 bg-white rounded-md">
                {blog.blog.category}
              </a>
            </Link>
            <div className="date text-sm text-gray-500">{blog.blog.date}</div>
          </div>
          <div className="text-2xl font-bold mt-3">{blog.blog.title}</div>
          <div
            dangerouslySetInnerHTML={{ __html: `${blog.blog.content.html}` }}
          ></div>
        </div>
      </motion.div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const blogs = await getBlogs();
  const paths = blogs.blogs.map((blog) => ({
    params: {
      blog_id: blog.slug,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const blog = await GetBlog(params.blog_id);
  return {
    props: {
      blog,
    },
    revalidate: 10,
  };
}
