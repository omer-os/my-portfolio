import BlogsLeft from "@/components/pages/blogs/BlogsLeft";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex max-w-5xl mx-auto 
    

    "
    >
      <BlogsLeft />

      <div>{children}</div>
    </div>
  );
}
