import Link from "next/link";
import React from "react";
import Layout from "./Layout";

export default function NotFoundBlogSkeleton() {
  return (
    <Layout>
      <div className="lg:w-4/6 relative sm:w-5/6  mx-auto mt-20">
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
          <div className="thubmnail w-full h-full animate-pulse bg-gray-400" />
        </div>
        <div className="Blog-Content sm:z-10 relative sm:top-0 -top-[8em] bg-white px-8 rounded-t-2xl z-50 pt-2">
        <div className="text-xl text-gray-500 z-50 font-bold">loading content...</div>
          <div className="sm:mt-3 mt-2 flex gap-2 items-center">
            <div className="w-20 h-8 bg-gray-300 rounded animate-pulse"></div>
            <div className="w-20 h-8 bg-gray-300 rounded animate-pulse"></div>
          </div>
          <div className="h-10 w-4/6 bg-gray-300 animate-pulse rounded mt-3" />
          <div className="main-content h-[50em] my-5 bg-gray-200 animate-pulse rounded-xl"></div>
        </div>
      </div>
    </Layout>
  );
}
