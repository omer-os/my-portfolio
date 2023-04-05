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
    <div className="md:w-[15em] w-full h-max sticky md:top-28 top-[3.3em] bg-black z-30">
      <div
        className={`flex md:hidden capitalize items-center py-3 px-6 border-b border-zinc-800 justify-between ${
          ShowInputText ? "!hidden" : ""
        }`}
      >
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="flex active:scale-95 transition-all items-center gap-2 px-2 py-1 rounded font-bold hover:bg-zinc-900">
              <AiOutlineMenuUnfold />
              categories
            </button>
          </Dialog.Trigger>

          <>
            <Dialog.Portal className="z-50 text-white">
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
                  <div className="rounded bg-black border border-zinc-400 p-6">
                    <Dialog.Title className="font-bold flex justify-between items-center">
                      <p>Categories</p>
                      <Dialog.Close asChild>
                        <button className="hover:bg-zinc-900 p-2 rounded">
                          <IoClose size={18} />
                        </button>
                      </Dialog.Close>
                    </Dialog.Title>
                    <Dialog.Description className="mt-8">
                      <div className="flex flex-col gap-2">
                        {categories.map((i) => (
                          <Dialog.Close key={i.slug.current} asChild>
                            <Link
                              href={`/blog?category=${i.slug}`}
                              className={`${
                                category === i.slug.current &&
                                "!font-bold !text-white"
                              } transition-all capitalize font-normal text-zinc-400 rounded  relative hover:bg-zinc-900 `}
                            >
                              {category === i.slug.current && (
                                <motion.div
                                  layoutId="bgoreiuhouroin"
                                  className="absolute top-0 left-0 bg-zinc-800 rounded w-full h-full"
                                />
                              )}
                              <div className="flex relative z-10 gap-2 items-center p-2">
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
          className="active:scale-95 transition-all gap-2 p-2 rounded  hover:bg-zinc-900"
        >
          <BiSearch />
        </button>
      </div>

      <div className="md:flex-col md:border-none border-b border-zinc-800">
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
              className="active:scale-95 transition-all  rounded"
            >
              <IoClose size={18} />
            </button>
          </div>
        </div>

        <div className="md:flex hidden flex-col mt-3 text-sm gap-1">
          {categories.map((i) => (
            <Link
              href={`/blog?category=${i.slug.current}`}
              key={i.slug.current}
              className={`
                ${
                  category === i.slug.current && "!font-bold !text-white"
                } transition-all capitalize font-normal text-zinc-400 rounded relative hover:bg-zinc-900/50 `}
            >
              <div className="flex gap-2 items-center p-2">
                <div>{i.title}</div>
              </div>

              {category === i.slug.current && (
                <motion.div
                  layoutId="bgoreiuhouroin"
                  className="absolute -z-10 top-0 left-0 bg-zinc-800 rounded w-full h-full"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
