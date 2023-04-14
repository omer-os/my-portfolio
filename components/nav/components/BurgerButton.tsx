"use client";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { BsChevronExpand } from "react-icons/bs";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Select from "@radix-ui/react-select";
import ThemeSwitch from "./ThemeSwitch";

export default function BurgerButton() {
  const [OpenSideBar, setOpenSideBar] = useState(false);
  const [SystemTheme, setSystemTheme] = useState("system");
  const pathname = usePathname();

  return (
    <div className="flex md:hidden">
      <button
        onClick={() => setOpenSideBar(!OpenSideBar)}
        className="relative z-50 flex items-center justify-center transition-all rounded active:scale-90"
      >
        {!OpenSideBar ? <BiMenu size={25} /> : <IoClose size={25} />}
      </button>

      <motion.div
        className={`sidebar fixed transition-all duration-300 dark:bg-black bg-white pt-24 px-6 w-full h-full -left-full top-0 z-40 flex flex-col ${
          OpenSideBar && "!left-0"
        }`}
      >
        <div className="text-2xl font-bold">Pages</div>
        <div className="flex flex-col mt-4 divide-y-2 dark:divide-zinc-900 divide-zinc-300">
          {[
            {
              name: "home",
              link: "/",
            },
            {
              name: "projects",
              link: "/projects",
            },
            {
              name: "blog",
              link: "/blog",
            },
            {
              name: "templates",
              link: "/templates",
            },
            {
              name: "contact",
              link: "/contact",
            },
          ].map((i) => (
            <Link
              onClick={() => setOpenSideBar(false)}
              className={`capitalize py-2 text-zinc-500 dark:hover:bg-zinc-900 hover:zinc-300 ${
                i.link === pathname && "dark:!text-white text-black"
              }`}
              href={i.link}
              key={i.link}
            >
              {i.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col mt-10">
          <div className="text-2xl font-bold">Settings</div>
          <div className="flex flex-col mt-4 divide-y-2 dark:divide-zinc-900">
            <div className="flex items-center justify-between px-2 py-2 text-zinc-400">
              <span>Theme</span>

              <div className="relative z-50">
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
