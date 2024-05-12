import React from "react";
import BlogPageTabs from "~/components/custom/tabs/blog-page-tabs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container py-5">
      <BlogPageTabs />
      <div className="mt-4">{children}</div>
    </div>
  );
}
