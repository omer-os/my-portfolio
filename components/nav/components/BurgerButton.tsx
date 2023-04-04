"use client";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { BsChevronExpand } from "react-icons/bs";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Select from "@radix-ui/react-select";

export default function BurgerButton() {
  const [OpenSideBar, setOpenSideBar] = useState(false);
  const [SystemTheme, setSystemTheme] = useState("system");
  const pathname = usePathname();

  return (
    <div className="flex md:hidden">
      <button
        onClick={() => setOpenSideBar(!OpenSideBar)}
        className="flex relative z-50 items-center justify-center rounded active:scale-90 transition-all"
      >
        {!OpenSideBar ? <BiMenu size={25} /> : <IoClose size={25} />}
      </button>

      <motion.div
        className={`sidebar fixed transition-all duration-300 bg-black pt-24 px-6 w-full h-full -left-full top-0 z-40 flex flex-col ${
          OpenSideBar && "!left-0"
        }`}
      >
        <div className="text-2xl font-bold">Pages</div>
        <div className="flex flex-col divide-y-2 mt-4 divide-zinc-900">
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
          ].map((i) => (
            <Link
              onClick={() => setOpenSideBar(false)}
              className={`capitalize py-2 text-zinc-500 hover:bg-zinc-900 ${
                i.link === pathname && "!text-white"
              }`}
              href={i.link}
              key={i.link}
            >
              {i.name}
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col">
          <div className="text-2xl font-bold">Settings</div>
          <div className="flex flex-col mt-4 divide-y-2 divide-zinc-900">
            <div className="flex text-zinc-400 justify-between items-center py-2 px-2">
              <span>Theme</span>

              <div className="relative z-50">
                <Select.Root>
                  <Select.Trigger className="flex gap-2 items-center text-zinc-400 border border-zinc-800 rounded py-1 px-3">
                    <Select.Value placeholder={SystemTheme} />
                    <Select.Icon>
                      <BsChevronExpand />
                    </Select.Icon>
                  </Select.Trigger>
                  <>
                    <Select.Content
                      align="start"
                      className="bg-zinc-900 rounded z-50 p-1 text-sm"
                      // @ts-ignore
                      onSelectionChange={(value) => setSystemTheme(value)}
                      // @ts-ignore
                      value={SystemTheme}
                    >
                      {["light", "dark", "system"].map((i) => (
                        <Select.Item
                          className="min-w-[7em] rounded capitalize hover:bg-zinc-800 p-2"
                          value={i}
                          key={i}
                        >
                          <Select.ItemText>{i}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </>
                </Select.Root>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
