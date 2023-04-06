"use client";
import { useState } from "react";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import * as Dialog from "@radix-ui/react-dialog";
import { BlogCategory } from "@/components/interfaces/blog";

export default function BlogsLeftSide({
  category,
  categories,
}: {
  category: string;
  categories: BlogCategory[];
}) {
  const [ShowInputText, setShowInputText] = useState(false);
  return (
    <div className="md:w-[15em] w-full h-max sticky md:top-28 top-[3.3em] dark:bg-black z-30">
      <div
        className={`flex md:hidden capitalize items-center py-3 px-6 border-b dark:border-zinc-800 justify-between ${
          ShowInputText ? "!hidden" : ""
        }`}
      >
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="flex items-center gap-2 px-2 py-1 font-bold transition-all rounded active:scale-95 hover:bg-zinc-900">
              <AiOutlineMenuUnfold />
              categories
            </button>
          </Dialog.Trigger>

          <>
            <Dialog.Portal className="z-50 dark:text-white">
              <Dialog.Overlay asChild>
                <motion.div
                  className="bg-black/30 backdrop-blur-lg fixed inset-0 z-[998]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </Dialog.Overlay>
              <Dialog.Content asChild>
                <motion.div
                  className="fixed top-[50%] left-[50%] z-[999] translate-x-[-50%] translate-y-[-50%]  max-w-[30em] w-full p-6"
                  initial={{ opacity: 0, bottom: -20 }}
                  animate={{ opacity: 1, bottom: 0 }}
                  exit={{ opacity: 0, bottom: -20 }}
                >
                  <div className="p-6 border rounded dark:bg-black bg-zinc-300 border-zinc-400">
                    <Dialog.Title className="flex items-center justify-between font-bold">
                      <p>Categories</p>
                      <Dialog.Close asChild>
                        <button className="p-2 rounded dark:hover:bg-zinc-900">
                          <IoClose size={18} />
                        </button>
                      </Dialog.Close>
                    </Dialog.Title>
                    <Dialog.Description className="mt-8">
                      <div className="flex flex-col gap-2">
                        {categories.map((i) => (
                          <Dialog.Close key={i.slug.current} asChild>
                            <Link
                              href={`/blog?category=${i.slug.current}`}
                              className={`${
                                category === i.slug.current &&
                                "!font-bold !text-white"
                              } transition-all capitalize font-normal dark:text-zinc-400 rounded  relative hover:bg-zinc-900 `}
                            >
                              {category === i.slug.current && (
                                <motion.div
                                  layoutId="bgoreiuhouroin"
                                  className="absolute top-0 left-0 w-full h-full rounded dark:bg-zinc-800 bg-zinc-300"
                                />
                              )}
                              <div className="relative z-10 flex items-center gap-2 p-2">
                                <div>{i.title}</div>
                              </div>
                            </Link>
                          </Dialog.Close>
                        ))}
                      </div>
                    </Dialog.Description>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          </>
        </Dialog.Root>
        <button
          onClick={() => setShowInputText(!ShowInputText)}
          className="gap-2 p-2 transition-all rounded active:scale-95 hover:bg-zinc-300 dark:hover:bg-zinc-900"
        >
          <BiSearch />
        </button>
      </div>

      <div className="border-b md:flex-col md:border-none border-zinc-800">
        <div
          className={`relative md:m-0 m-2 ${
            ShowInputText ? "md:flex" : "hidden md:!flex"
          }
        `}
        >
          <input
            type="text"
            className="w-full px-4 py-2 bg-black border rounded border-zinc-700 pl-9 text-zinc-400"
            placeholder="Search for a blog"
          />
          <div className="absolute top-3.5 left-3 text-zinc-400">
            <BiSearch size={15} />
          </div>

          <div className="absolute md:hidden top-2.5 right-3">
            <button
              onClick={() => setShowInputText(false)}
              className="transition-all rounded active:scale-95"
            >
              <IoClose size={18} />
            </button>
          </div>
        </div>

        <div className="flex-col hidden gap-1 mt-3 text-sm md:flex">
          {categories.map((i) => (
            <Link
              href={`/blog?category=${i.slug.current}`}
              key={i.slug.current}
              className={`${
                category === i.slug.current && "!font-bold !text-white"
              } transition-all capitalize font-normal text-zinc-400 rounded relative hover:bg-zinc-900/50 `}
            >
              <div className="flex items-center gap-2 p-2">
                <div>{i.title}</div>
              </div>

              {category === i.slug.current && (
                <motion.div
                  layoutId="bgoreiuhouroin"
                  className="absolute top-0 left-0 w-full h-full rounded -z-10 bg-zinc-800"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
