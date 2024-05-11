"use client";
import { useAtom } from "jotai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { SidebarAtom } from "~/lib/global-atoms";
import { cn } from "~/lib/utils";

export default function MainNavbarMenu() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(SidebarAtom);

  const links = [
    {
      lable: "home",
      url: "/",
    },
    {
      lable: "projects",
      url: "/projects",
    },
    {
      lable: "blog",
      url: "/blog",
    },
    {
      lable: "contact",
      url: "/contact",
    },
  ];

  return (
    <div
      className={cn(
        "items fixed bottom-0 top-0 flex w-full flex-col gap-1 bg-background px-10 pt-20 transition-all lg:relative lg:left-0 lg:w-max lg:flex-row lg:px-0 lg:pt-4",
        {
          "left-0": isSidebarOpen,
          "-left-full": !isSidebarOpen,
        },
      )}
    >
      <p className="mb-2 text-xl font-bold lg:hidden">Pages</p>
      {links.map((link, index) => (
        <Link key={index} href={link.url}>
          <Button
            className="w-full justify-start font-normal capitalize lg:w-max lg:justify-center"
            variant={
              (pathname.startsWith(link.url) && link.url !== "/") ||
              (pathname === "/" && link.url === "/")
                ? "secondary"
                : "link"
            }
          >
            {link.lable}
          </Button>
        </Link>
      ))}

      <p className="mb-2 mt-10 text-xl font-bold lg:hidden">Settings</p>
      <div className="flex items-center justify-between border-b py-2 lg:hidden">
        <p>Theme</p>

        <Select defaultValue="system">
          <SelectTrigger className="w-max">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
