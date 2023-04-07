"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import * as Dialog from "@radix-ui/react-dialog";
import { Blog, BlogCategory } from "@/components/interfaces/blog";

export default function BlogsLeftSide({
  category,
  categories,
}: {
  category: string;
  categories: BlogCategory[];
}) {
  const [ShowInputText, setShowInputText] = useState(false);
  const [SearchText, setSearchText] = useState("");
  const [SearchResults, setSearchResults] = useState<Blog[]>([]);

  useEffect(() => {
    if (SearchText.length > 0) {
      fetch(`/api/blogs/search?query=${SearchText}`)
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(data.result);
        });
    } else {
      setSearchResults([]);
    }
  }, [SearchText]);

  return (
    <div className="md:w-[15em] w-full h-max sticky md:top-28 top-[3.3em] dark:bg-black bg-white z-30">
      <div
        className={`flex md:hidden capitalize items-center py-3 px-6 border-b dark:border-zinc-800 justify-between ${
          ShowInputText ? "!hidden" : ""
        }`}
      >
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="flex items-center gap-2 px-2 py-1 font-bold transition-all rounded active:scale-95 hover:bg-zinc-300 dark:hover:bg-zinc-900">
              <AiOutlineMenuUnfold />
              categories
            </button>
          </Dialog.Trigger>

          <>
            <Dialog.Portal className="z-50 dark:text-white">
              <Dialog.Overlay asChild>
                <motion.div
                  className="dark:bg-black/30 bg-black-20 backdrop-blur-lg fixed inset-0 z-[998]"
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
                  <div className="p-6 border rounded dark:bg-black bg-white border-zinc-400">
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
                              } transition-all capitalize font-normal dark:text-zinc-400 rounded  relative dark:hover:bg-zinc-900 hover:bg-zinc-300 `}
                            >
                              {category === i.slug.current && (
                                <motion.div
                                  layoutId="bgoreiuhouroin"
                                  className="absolute top-0 left-0 w-full h-full rounded bg-zinc-800"
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

      <div className="border-b md:flex-col md:border-none dark:border-zinc-800 border-zinc-400">
        <div
          className={`relative md:m-0 m-2 ${
            ShowInputText ? "md:flex" : "hidden md:!flex"
          }
        `}
        >
          <div className="flex flex-col relative">
            <input
              type="text"
              className="w-full px-4 py-2 bg-white border rounded dark:bg-black dark:border-zinc-700 border-zinc-300 pl-9 dark:text-zinc-400 text-zinc-500"
              placeholder="Search for a blog"
              value={SearchText}
              onChange={(e) => setSearchText(e.target.value)}
              onBlur={() => {
                setTimeout(() => {
                  setSearchResults([]);
                }, 1000);
              }}
            />

            <AnimatePresence>
              {SearchText && SearchResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute w-full bg-zinc-900 rounded border border-zinc-800 p-3 top-12 flex flex-col gap-2 z-40"
                >
                  <div className="flex font-bold text-sm flex-col bg-zinc-800 rounded p-2 w-full">
                    {SearchResults.map((i, index) => (
                      <Link
                        href={`/blog/${i.slug.current}`}
                        key={index + i.title}
                        className="line-clamp-2"
                      >
                        {i.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="absolute top-3.5 left-3 text-zinc-500 dark:text-zinc-400">
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
                category === i.slug.current &&
                "!font-bold dark:!text-white !text-black"
              } transition-all capitalize font-normal dark:text-zinc-400 text-zinc-500 rounded relative  dark:hover:bg-zinc-900/50 dark:hover:text-white hover:text-black  hover:bg-zinc-300 `}
            >
              <div className="flex items-center gap-2 p-2">
                <div>{i.title}</div>
              </div>

              {category === i.slug.current && (
                <motion.div
                  layoutId="bgoreiuhouroin"
                  className="absolute top-0 left-0 w-full h-full rounded -z-10 dark:bg-zinc-800 bg-zinc-200"
                  transition={{ duration: 0.4 }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
