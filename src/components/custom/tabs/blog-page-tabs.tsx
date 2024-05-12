"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function BlogPageTabs() {
  const pathname = usePathname();

  return (
    <div className="flex">
      {[
        {
          name: "All Posts",
          href: "/blog/all",
        },

        {
          name: "Dental Industry",
          href: "/blog/dental",
        },
        {
          name: "Front End Development",
          href: "/blog/front-end",
        },
        {
          name: "Backend",
          href: "/blog/backend",
        },
      ].map((item) => (
        <Link key={item.name} href={item.href}>
          <Button
            className={cn("hover:text-primary", {
              underline: pathname.startsWith(item.href),
              "text-muted-foreground": !pathname.startsWith(item.href),
            })}
            variant={"link"}
          >
            {item.name}
          </Button>
        </Link>
      ))}
    </div>
  );
}
