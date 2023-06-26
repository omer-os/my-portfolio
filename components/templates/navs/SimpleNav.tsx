"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button/Button";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function SimpleNav() {
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50 p-3 px-6 bg-white border-b dark:bg-black dark:border-zinc-800 border-zinc-400">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        {/* logo : left-side */}
        <Link href="/" className="font-extrabold relative z-50">
          Omar Chatin
        </Link>

        {/* page links: middle */}
        <div className="md:flex  hidden items-center">
          {[
            {
              name: "Home",
              href: "/",
            },
            {
              name: "Projects",
              href: "/projects",
            },
            {
              name: "Blog",
              href: "/blog/all",
            },
            {
              name: "Contact",
              href: "/contact",
            },
          ].map((i, index) => (
            <LinkItem
              pathname={pathname}
              key={index}
              href={i.href}
              name={i.name}
            />
          ))}
        </div>

        {/* nav actions : right-side */}
        <div className="flex items-center  gap-2">
          <Button
            asChild
            className="md:block hidden !text-zinc-500 bg-transparent items-center hover:text-white transition-colors"
          >
            <Link href="/templates">Templates</Link>
          </Button>

          <Button className="md:block hidden" variant={"zinc"}>
            sgin up
          </Button>

          <Button
            onClick={() => setShowSidebar(!showSidebar)}
            className="relative !bg-transparent z-50 md:hidden"
            variant={"ghost"}
            size={"icon"}
          >
            {showSidebar ? <IoClose size={18} /> : <FiMenu size={18} />}
          </Button>
        </div>
      </nav>

      <aside
        className={`sidebar fixed duration-300 dark:bg-black bg-white pt-24 px-6 w-full h-full top-0 z-40 flex flex-col transition-all md:hidden ${
          showSidebar ? "left-0" : " -left-full"
        }`}
      >
        <div className="flex  flex-col mt-4 divide-zinc-300">
          <div className="text-2xl font-bold">Pages</div>
          <div className="flex flex-col mt-4 divide-y-2 dark:divide-zinc-900 divide-zinc-900">
            {[
              {
                name: "Home",
                href: "/",
              },
              {
                name: "Projects",
                href: "/projects",
              },
              {
                name: "Blog",
                href: "/blog/all",
              },
              {
                name: "Contact",
                href: "/contact",
              },
            ].map((i, index) => (
              <Link
                href={i.href}
                className={`capitalize py-2 text-zinc-500 dark:hover:bg-zinc-900 hover:zinc-300  ${
                  pathname === i.href && "!text-white transition-colors"
                }`}
                onClick={() => setShowSidebar(false)}
                key={index}
              >
                {i.name}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </header>
  );
}

// for middle links
export const LinkItem = ({
  href,
  name,
  pathname,
}: {
  href: string;
  name: string;
  pathname: string;
}) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <Link
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      href={href}
      className={`
        relative text-sm px-5 py-3 transition-colors capitalize rounded ${
          pathname === href ? "text-white" : "text-zinc-500"
        }`}
    >
      {onHover && pathname !== href && (
        <motion.div
          layoutId="miureoibyperbiyeri"
          className="absolute top-0 left-0 w-full h-full bg-zinc-900 rounded"
        />
      )}
      <span className="z-10 relative">{name}</span>
      <motion.div
        className="absolute -bottom-3 left-0 rounded-full bg-white h-[.05em] w-full"
        initial={{
          height: 0,
        }}
        animate={{
          height: pathname === href ? 1 : 0,
        }}
      ></motion.div>
    </Link>
  );
};
